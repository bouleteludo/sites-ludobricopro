"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { sendLeadEmail } from "@/lib/notify";
import { prisma } from "@/lib/prisma";

function str(formData: FormData, key: string): string | null {
  const v = formData.get(key);
  return typeof v === "string" && v.trim() !== "" ? v.trim() : null;
}

export async function createLead(formData: FormData) {
  const type = str(formData, "type") ?? "DEVIS";
  const name = str(formData, "name");
  const phone = str(formData, "phone");
  const service = str(formData, "service") ?? "Autre";
  const formPage = type === "RENDEZVOUS" ? "/rendez-vous" : type === "CONTACT" ? "/contact" : "/devis";

  if (!name || !phone) {
    redirect(`${formPage}?erreur=champs-requis`);
  }

  const lead = {
    type,
    name,
    phone,
    email: str(formData, "email"),
    service,
    city: str(formData, "city"),
    message: str(formData, "message"),
    preferredDate: str(formData, "preferredDate"),
    preferredTime: str(formData, "preferredTime"),
  };

  // Database record (for /admin) and email notification run independently:
  // the request is only lost if both fail.
  const [saved, mailed] = await Promise.all([
    prisma.lead
      .create({ data: { ...lead, preferredDate: lead.preferredDate ? new Date(lead.preferredDate) : null } })
      .then(() => true)
      .catch((error: unknown) => {
        console.error("createLead: database save failed", error);
        return false;
      }),
    sendLeadEmail(lead),
  ]);

  // redirect() throws, so it must stay outside any try/catch.
  redirect(saved || mailed ? `/merci?type=${type}` : `${formPage}?erreur=envoi`);
}

const VALID_STATUSES = ["NOUVEAU", "CONTACTE", "TRAITE"];

export async function updateLeadStatus(id: string, status: string) {
  if (!VALID_STATUSES.includes(status)) return;
  await prisma.lead.update({ where: { id }, data: { status } });
  revalidatePath("/admin/demandes");
  revalidatePath("/admin");
}

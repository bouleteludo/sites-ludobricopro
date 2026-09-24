"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
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

  const preferredDateRaw = str(formData, "preferredDate");

  let saved = false;
  try {
    await prisma.lead.create({
      data: {
        type,
        name,
        phone,
        email: str(formData, "email"),
        service,
        city: str(formData, "city"),
        message: str(formData, "message"),
        preferredDate: preferredDateRaw ? new Date(preferredDateRaw) : null,
        preferredTime: str(formData, "preferredTime"),
      },
    });
    saved = true;
  } catch (error) {
    // Database unreachable or not configured: keep the visitor on the form with a way to call instead.
    console.error("createLead failed", error);
  }

  // redirect() throws, so it must stay outside the try/catch.
  redirect(saved ? `/merci?type=${type}` : `${formPage}?erreur=envoi`);
}

const VALID_STATUSES = ["NOUVEAU", "CONTACTE", "TRAITE"];

export async function updateLeadStatus(id: string, status: string) {
  if (!VALID_STATUSES.includes(status)) return;
  await prisma.lead.update({ where: { id }, data: { status } });
  revalidatePath("/admin/demandes");
  revalidatePath("/admin");
}

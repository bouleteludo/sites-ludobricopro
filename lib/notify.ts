import { SITE } from "@/lib/site";

export type LeadNotification = {
  type: string;
  name: string;
  phone: string;
  email: string | null;
  service: string;
  city: string | null;
  message: string | null;
  preferredDate: string | null;
  preferredTime: string | null;
};

const TYPE_LABELS: Record<string, string> = {
  DEVIS: "Nouvelle demande de devis",
  RENDEZVOUS: "Nouvelle demande de rendez-vous",
  CONTACT: "Nouveau message de contact",
};

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

// Sends the lead to the owner's inbox through Resend's HTTP API. Returns false (never throws)
// when RESEND_API_KEY is missing or the API refuses, so the caller can fall back gracefully.
export async function sendLeadEmail(lead: LeadNotification): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) return false;

  const to = process.env.LEAD_NOTIFY_EMAIL?.trim() || SITE.email;
  const title = TYPE_LABELS[lead.type] ?? "Nouvelle demande";
  const rows: [string, string | null][] = [
    ["Nom", lead.name],
    ["Téléphone", lead.phone],
    ["Email", lead.email],
    ["Ville", lead.city],
    ["Prestation", lead.service],
    ["Date souhaitée", lead.preferredDate],
    ["Créneau", lead.preferredTime],
    ["Message", lead.message],
  ];
  const filled = rows.filter((r): r is [string, string] => Boolean(r[1]));

  const text = `${title}\n\n${filled.map(([k, v]) => `${k} : ${v}`).join("\n")}`;
  const html = `<h2 style="font-family:sans-serif;color:#0c2338">${escapeHtml(title)}</h2>
<table style="font-family:sans-serif;font-size:15px;border-collapse:collapse">
${filled
  .map(
    ([k, v]) =>
      `<tr><td style="padding:6px 16px 6px 0;color:#62717d;vertical-align:top">${escapeHtml(k)}</td><td style="padding:6px 0;color:#0c2338;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`,
  )
  .join("\n")}
</table>
<p style="font-family:sans-serif"><a href="tel:${escapeHtml(lead.phone.replace(/\s+/g, ""))}">Rappeler ${escapeHtml(lead.name)}</a></p>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.LEAD_FROM_EMAIL?.trim() || `${SITE.name} <onboarding@resend.dev>`,
        to: [to],
        reply_to: lead.email ?? undefined,
        subject: `${title} — ${lead.name} (${lead.service})`,
        text,
        html,
      }),
    });
    if (!res.ok) {
      console.error("sendLeadEmail: Resend refused", res.status, await res.text());
      return false;
    }
    return true;
  } catch (error) {
    console.error("sendLeadEmail failed", error);
    return false;
  }
}

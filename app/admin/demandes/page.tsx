import { prisma } from "@/lib/prisma";
import { LeadStatusSelect } from "@/components/LeadStatusSelect";

export const dynamic = "force-dynamic";

const TYPE_LABELS: Record<string, string> = {
  DEVIS: "Devis",
  RENDEZVOUS: "Rendez-vous",
  CONTACT: "Contact",
};

type Props = { searchParams: Promise<{ type?: string }> };

export default async function AdminDemandesPage({ searchParams }: Props) {
  const { type } = await searchParams;
  const leads = await prisma.lead.findMany({
    where: type ? { type } : undefined,
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="container py-12">
      <h1 className="font-display text-3xl font-extrabold text-navy-950 mb-6">Demandes</h1>

      <div className="flex flex-wrap gap-2 mb-8 text-sm">
        {[
          { href: "/admin/demandes", label: "Toutes" },
          { href: "/admin/demandes?type=DEVIS", label: "Devis" },
          { href: "/admin/demandes?type=RENDEZVOUS", label: "Rendez-vous" },
          { href: "/admin/demandes?type=CONTACT", label: "Contact" },
        ].map((f) => (
          <a
            key={f.href}
            href={f.href}
            className={`rounded-full px-4 py-1.5 border transition-colors ${
              (f.href === "/admin/demandes" && !type) || f.href.endsWith(type ?? "\0")
                ? "bg-navy-900 text-white border-navy-900"
                : "border-navy-900/15 text-navy-900/70 hover:border-navy-900/30"
            }`}
          >
            {f.label}
          </a>
        ))}
      </div>

      {leads.length === 0 ? (
        <p className="text-navy-900/50 py-16 text-center">Aucune demande pour le moment.</p>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-navy-900/5 bg-white shadow-card">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-navy-900/10 text-left text-navy-900/50">
                <th className="px-4 py-3 font-medium">Type</th>
                <th className="px-4 py-3 font-medium">Nom</th>
                <th className="px-4 py-3 font-medium">Contact</th>
                <th className="px-4 py-3 font-medium">Service</th>
                <th className="px-4 py-3 font-medium">Date souhaitée</th>
                <th className="px-4 py-3 font-medium">Message</th>
                <th className="px-4 py-3 font-medium">Reçue le</th>
                <th className="px-4 py-3 font-medium">Statut</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id} className="border-b border-navy-900/5 last:border-0 align-top">
                  <td className="px-4 py-3 whitespace-nowrap">{TYPE_LABELS[lead.type] ?? lead.type}</td>
                  <td className="px-4 py-3 whitespace-nowrap font-medium">{lead.name}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div>{lead.phone}</div>
                    {lead.email && <div className="text-navy-900/50">{lead.email}</div>}
                  </td>
                  <td className="px-4 py-3">{lead.service}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {lead.preferredDate
                      ? new Date(lead.preferredDate).toLocaleDateString("fr-FR")
                      : "—"}
                    {lead.preferredTime ? ` (${lead.preferredTime})` : ""}
                  </td>
                  <td className="px-4 py-3 max-w-xs">{lead.message ?? "—"}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-navy-900/50">
                    {new Date(lead.createdAt).toLocaleDateString("fr-FR")}
                  </td>
                  <td className="px-4 py-3">
                    <LeadStatusSelect id={lead.id} status={lead.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}

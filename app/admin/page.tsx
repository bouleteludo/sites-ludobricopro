import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const [nouveaux, rdvAVenir, total] = await Promise.all([
    prisma.lead.count({ where: { status: "NOUVEAU" } }),
    prisma.lead.count({ where: { type: "RENDEZVOUS", status: { not: "TRAITE" } } }),
    prisma.lead.count(),
  ]);

  return (
    <main className="container py-12">
      <h1 className="font-display text-3xl font-extrabold text-navy-950 mb-8">Administration</h1>

      <div className="grid sm:grid-cols-3 gap-5 mb-10">
        <StatCard label="Nouvelles demandes" value={nouveaux} />
        <StatCard label="Rendez-vous à traiter" value={rdvAVenir} />
        <StatCard label="Total des demandes" value={total} />
      </div>

      <Link
        href="/admin/demandes"
        className="inline-flex items-center justify-center rounded-full bg-navy-900 hover:bg-navy-800 text-white font-semibold px-6 py-3 transition-colors"
      >
        Voir toutes les demandes →
      </Link>
    </main>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl bg-white border border-navy-900/5 shadow-card p-6">
      <p className="text-3xl font-extrabold text-navy-950 mb-1">{value}</p>
      <p className="text-sm text-navy-900/60">{label}</p>
    </div>
  );
}

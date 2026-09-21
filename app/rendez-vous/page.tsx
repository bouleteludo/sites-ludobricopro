import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = { title: "Prendre rendez-vous" };

type Props = { searchParams: Promise<{ erreur?: string }> };

export default async function RendezVousPage({ searchParams }: Props) {
  const { erreur } = await searchParams;
  return (
    <main className="container py-16 sm:py-20 max-w-2xl">
      <p className="text-xs tracking-[0.3em] uppercase text-leaf-600 font-semibold mb-3">Agenda</p>
      <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-navy-950 mb-4">
        Prenez rendez-vous
      </h1>
      <p className="text-navy-900/60 mb-10 leading-relaxed">
        Choisissez une date et un créneau qui vous conviennent — on confirme le rendez-vous par
        téléphone ou par email dans les meilleurs délais.
      </p>

      {erreur === "champs-requis" && (
        <p className="mb-6 rounded-lg bg-red-50 text-red-700 text-sm px-4 py-3">
          Merci de renseigner au minimum votre nom et votre téléphone.
        </p>
      )}

      <div className="rounded-2xl bg-white border border-navy-900/5 shadow-card p-6 sm:p-9">
        <QuoteForm type="RENDEZVOUS" submitLabel="Envoyer ma demande de rendez-vous" />
      </div>
    </main>
  );
}

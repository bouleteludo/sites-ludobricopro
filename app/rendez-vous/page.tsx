import type { Metadata } from "next";
import { FormAlert } from "@/components/FormAlert";
import { PageHeader } from "@/components/PageHeader";
import { QuoteAside } from "@/components/QuoteAside";
import { QuoteForm } from "@/components/QuoteForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "Prendre rendez-vous" };

type Props = { searchParams: Promise<{ erreur?: string }> };

export default async function RendezVousPage({ searchParams }: Props) {
  const { erreur } = await searchParams;
  return (
    <main>
      <PageHeader
        eyebrow="Agenda"
        title="Prenez rendez-vous"
        intro="Choisissez une date et un créneau qui vous conviennent — on confirme le rendez-vous par téléphone ou par email dans les meilleurs délais."
      />
      <div className="container relative -mt-14 grid gap-8 pb-10 lg:grid-cols-[1.35fr_.65fr]">
        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-navy-900/10 bg-white p-6 shadow-[0_40px_80px_-40px_rgba(8,24,38,.35)] sm:p-10">
            <FormAlert erreur={erreur} />
            <QuoteForm type="RENDEZVOUS" submitLabel="Envoyer ma demande de rendez-vous" />
          </div>
        </Reveal>
        <QuoteAside />
      </div>
    </main>
  );
}

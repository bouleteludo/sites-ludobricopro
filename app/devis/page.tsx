import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { QuoteAside } from "@/components/QuoteAside";
import { QuoteForm } from "@/components/QuoteForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "Demande de devis gratuit" };

type Props = { searchParams: Promise<{ erreur?: string }> };

export default async function DevisPage({ searchParams }: Props) {
  const { erreur } = await searchParams;
  return (
    <main>
      <PageHeader
        eyebrow="Devis gratuit"
        title="Demandez votre devis"
        intro="Décrivez vos travaux et on vous recontacte rapidement avec un devis gratuit et sans engagement."
      />
      <div className="container relative -mt-14 grid gap-8 pb-10 lg:grid-cols-[1.35fr_.65fr]">
        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-navy-900/10 bg-white p-6 shadow-[0_40px_80px_-40px_rgba(8,24,38,.35)] sm:p-10">
            {erreur === "champs-requis" && (
              <p role="alert" className="mb-6 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                Merci de renseigner au minimum votre nom et votre téléphone.
              </p>
            )}
            <QuoteForm type="DEVIS" submitLabel="Envoyer ma demande de devis" />
          </div>
        </Reveal>
        <QuoteAside />
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { SITE, VALUES } from "@/lib/site";

export const metadata: Metadata = { title: "À propos" };

export default function AProposPage() {
  return (
    <main className="container py-16 sm:py-20 max-w-3xl">
      <Reveal>
        <p className="text-xs tracking-[0.3em] uppercase text-leaf-600 font-semibold mb-3">À propos</p>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-navy-950 mb-6">
          {SITE.tagline}
        </h1>
        <div className="prose prose-navy max-w-none text-navy-900/75 leading-relaxed">
          <p>
            {SITE.name} accompagne les particuliers et les copropriétés à {SITE.zone} et dans un rayon de{" "}
            {SITE.zoneRadiusKm} km pour tous leurs travaux d&apos;entretien : nettoyage des bâtiments,
            toiture et façade, petit bricolage, dépannage et entretien des espaces verts.
          </p>
          <p>
            L&apos;idée est simple : plutôt que de démarcher plusieurs artisans pour chaque petit chantier,
            vous avez un interlocuteur unique, disponible pour un devis gratuit et une intervention
            rapide, avec un travail soigné à chaque fois.
          </p>
        </div>
      </Reveal>

      <RevealGroup className="grid sm:grid-cols-3 gap-8 mt-14">
        {VALUES.map((v) => (
          <RevealItem key={v.title}>
            <h2 className="font-display text-xl font-bold text-navy-950 mb-2">{v.title}</h2>
            <p className="text-navy-900/60 text-sm leading-relaxed">{v.description}</p>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal className="mt-14">
        <Link
          href="/devis"
          className="inline-flex items-center justify-center rounded-full bg-leaf-500 hover:bg-leaf-600 text-white font-semibold px-8 py-3.5 transition-colors"
        >
          Demander un devis gratuit
        </Link>
      </Reveal>
    </main>
  );
}

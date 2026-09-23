import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import heroImg from "@/public/images/hero-facade.webp";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { SITE, VALUES } from "@/lib/site";

export const metadata: Metadata = { title: "À propos" };

export default function AProposPage() {
  return (
    <main>
      <PageHeader eyebrow="À propos" title={SITE.tagline} />
      <div className="container relative -mt-14 pb-10">
        <Reveal>
          <div className="grid overflow-hidden rounded-3xl border border-navy-900/10 bg-white shadow-card lg:grid-cols-2">
            <div className="relative min-h-[260px] bg-navy-900">
              <Image
                src={heroImg}
                alt="Nettoyage haute pression d'une façade de maison"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 50vw, 92vw"
                className="object-cover object-[62%_50%]"
              />
            </div>
            <div className="p-7 sm:p-10">
              <div className="space-y-5 text-lg leading-8 text-navy-900/80">
                <p>
                  {SITE.name} accompagne les particuliers et les copropriétés à {SITE.zone} et dans un rayon de{" "}
                  {SITE.zoneRadiusKm} km pour tous leurs travaux d&apos;entretien : nettoyage des bâtiments, toiture et
                  façade, petit bricolage, dépannage et entretien des espaces verts.
                </p>
                <p>
                  L&apos;idée est simple : plutôt que de démarcher plusieurs artisans pour chaque petit chantier, vous
                  avez un interlocuteur unique, disponible pour un devis gratuit et une intervention rapide, avec un
                  travail soigné à chaque fois.
                </p>
              </div>
              <Link href="/devis" className="premium-btn premium-btn-primary mt-8">
                Demander un devis gratuit <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-3">
          {VALUES.map((v) => (
            <RevealItem key={v.title}>
              <div className="h-full rounded-3xl border border-navy-900/10 bg-white p-7 shadow-card">
                <div className="mb-4 h-1.5 w-10 rounded-full bg-leaf-500" />
                <h2 className="font-display text-xl font-bold text-navy-950">{v.title}</h2>
                <p className="mt-2 text-sm leading-6 text-navy-900/70">{v.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </main>
  );
}

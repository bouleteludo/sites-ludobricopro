import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SERVICE_ICONS, IconCheck } from "@/components/icons";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { SERVICES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nos services",
  description: `Nettoyage de maison, démoussage de toiture, nettoyage de façade, petit bricolage et entretien des espaces verts à ${SITE.zone} et dans un rayon de ${SITE.zoneRadiusKm} km.`,
};

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Nos services"
        title="Un seul pro, pour tout entreprendre"
        intro="De l'entretien courant aux petits travaux, on s'occupe de votre intérieur et de votre extérieur avec le même soin."
      />

      <div className="container relative -mt-14 pb-10">
        <RevealGroup className="grid gap-6">
          {SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.icon];
            return (
              <RevealItem key={service.slug}>
                <article
                  id={service.slug}
                  className="photo-card scroll-mt-24 grid overflow-hidden rounded-3xl border border-navy-900/10 bg-white shadow-card transition-shadow duration-300 hover:shadow-[0_30px_60px_-30px_rgba(8,24,38,.4)] md:grid-cols-[minmax(0,340px)_1fr]"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-navy-900 md:aspect-auto md:min-h-[240px]">
                    <Image src={service.image} alt="" fill sizes="(min-width: 768px) 340px, 92vw" className="object-cover" />
                  </div>
                  <div className="p-7 sm:p-9">
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-800 text-white">
                        <Icon className="h-6 w-6" />
                      </span>
                      <h2 className="font-display text-2xl font-bold text-navy-950">{service.title}</h2>
                    </div>
                    <p className="mt-4 text-navy-900/70">{service.summary}</p>
                    <ul className="mt-5 grid gap-x-6 gap-y-2 text-sm text-navy-900/85 sm:grid-cols-2">
                      {service.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-leaf-500" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/devis" className="premium-btn premium-btn-secondary mt-7">
                      Demander un devis pour ce service <span aria-hidden>→</span>
                    </Link>
                  </div>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <Reveal className="mt-16 text-center">
          <Link href="/devis" className="premium-btn premium-btn-primary text-base">
            Demander un devis gratuit <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>
    </main>
  );
}

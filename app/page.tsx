import Link from "next/link";
import { SERVICE_ICONS, IconCheck, IconCard } from "@/components/icons";
import { HeroVisual } from "@/components/HeroVisual";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { SERVICES, SITE, VALUES } from "@/lib/site";

const PROCESS = [
  {
    step: "01",
    title: "Vous décrivez votre besoin",
    description: "Par téléphone, email ou via le formulaire de devis — en quelques minutes.",
  },
  {
    step: "02",
    title: "Un devis gratuit, sans engagement",
    description: "On étudie votre demande et on revient vers vous avec un prix clair.",
  },
  {
    step: "03",
    title: "On planifie l'intervention",
    description: `Une date qui vous convient, dans un rayon de ${SITE.zoneRadiusKm} km autour de ${SITE.zone}.`,
  },
  {
    step: "04",
    title: "Un travail soigné, livré",
    description: "Un seul interlocuteur du premier appel jusqu'à la fin du chantier.",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-navy-900/5">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 15% 0%, rgba(47,158,79,0.10), transparent 60%), radial-gradient(ellipse 60% 50% at 100% 20%, rgba(33,86,120,0.10), transparent 60%)",
          }}
        />
        <div className="relative container py-20 sm:py-28 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <Reveal>
              <span className="inline-flex items-center rounded-full bg-leaf-100 text-leaf-700 text-xs font-semibold tracking-wide uppercase px-3.5 py-1.5 mb-6">
                {SITE.zone} &amp; alentours · Devis gratuit
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-navy-950 mb-6">
                Un seul pro,
                <span className="block text-leaf-600">pour tout entreprendre.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="max-w-xl text-navy-900/70 text-base sm:text-lg mb-9 leading-relaxed">
                Nettoyage, entretien, toiture, façade, petit bricolage et interventions extérieures : un
                interlocuteur unique pour vos travaux du quotidien, à {SITE.zone} et dans un rayon de{" "}
                {SITE.zoneRadiusKm} km.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/devis"
                  className="inline-flex items-center justify-center rounded-full bg-leaf-500 hover:bg-leaf-600 text-white font-semibold px-8 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Demander un devis gratuit
                </Link>
                <Link
                  href="/rendez-vous"
                  className="inline-flex items-center justify-center rounded-full border border-navy-900/15 hover:border-navy-900/30 text-navy-900 font-medium px-8 py-3.5 transition-all hover:-translate-y-0.5"
                >
                  Prendre rendez-vous
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-9 text-sm text-navy-900/70">
                <span className="flex items-center gap-2">
                  <IconCheck className="h-4 w-4 text-leaf-600" /> <b className="text-navy-900">Devis gratuit</b>
                </span>
                <span className="flex items-center gap-2">
                  <IconCheck className="h-4 w-4 text-leaf-600" /> <b className="text-navy-900">Intervention locale</b>
                </span>
                <span className="flex items-center gap-2">
                  <IconCheck className="h-4 w-4 text-leaf-600" /> <b className="text-navy-900">Jusqu&apos;à 3× sans frais</b>
                </span>
              </div>
            </Reveal>
          </div>

          <HeroVisual />
        </div>
      </section>

      <section className="container py-16 sm:py-24">
        <Reveal className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-leaf-600 font-semibold mb-3">Nos services</p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-navy-950">
            Tout ce qu&apos;il faut pour votre maison
          </h2>
        </Reveal>

        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = SERVICE_ICONS[service.icon];
            return (
              <RevealItem key={service.slug}>
                <div className="group rounded-2xl bg-white border border-navy-900/5 shadow-card p-6 h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-full text-white mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                      i % 2 === 0 ? "bg-navy-700" : "bg-leaf-500"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display font-bold text-navy-950 mb-2 leading-snug">{service.title}</h3>
                  <p className="text-sm text-navy-900/60 mb-4 leading-relaxed">{service.summary}</p>
                  <ul className="space-y-1.5 text-sm text-navy-900/75">
                    {service.bullets.slice(0, 3).map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <IconCheck className="h-3.5 w-3.5 text-leaf-600 mt-1 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <Reveal className="text-center mt-10">
          <Link href="/services" className="text-navy-900 font-semibold hover:text-leaf-600 transition-colors">
            Voir le détail de tous nos services →
          </Link>
        </Reveal>
      </section>

      <section className="bg-navy-950 text-white">
        <div className="container py-16 sm:py-24">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-leaf-400 font-semibold mb-3">Comment ça marche</p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold">Simple, du premier appel au dernier détail</h2>
          </Reveal>

          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS.map((p) => (
              <RevealItem key={p.step}>
                <div className="relative pl-1">
                  <span className="font-display text-4xl font-extrabold text-white/15">{p.step}</span>
                  <h3 className="font-display font-bold text-lg mt-2 mb-2">{p.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{p.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="border-b border-navy-900/5 bg-white">
        <Reveal className="container py-10 sm:py-12">
          <div className="rounded-3xl bg-navy-900 text-white p-8 sm:p-10 grid sm:grid-cols-[auto_1fr_auto] gap-6 items-center shadow-[0_30px_70px_-30px_rgba(8,24,38,0.5)]">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-leaf-500 text-white shrink-0">
              <IconCard className="h-6 w-6" />
            </span>
            <div>
              <p className="font-display text-xl sm:text-2xl font-bold mb-1">
                Paiement en plusieurs fois possible, jusqu&apos;à 3 fois sans frais
              </p>
              <p className="text-white/60 text-sm">Un service de qualité, en toute confiance.</p>
            </div>
            <Link
              href="/devis"
              className="inline-flex items-center justify-center rounded-full bg-white text-navy-900 font-semibold px-6 py-3 hover:bg-mist-100 transition-colors whitespace-nowrap"
            >
              Devis gratuit
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="container py-16 sm:py-24">
        <RevealGroup className="grid sm:grid-cols-3 gap-8 text-center">
          {VALUES.map((v) => (
            <RevealItem key={v.title}>
              <h3 className="font-display text-xl font-bold text-navy-950 mb-2">{v.title}</h3>
              <p className="text-navy-900/60 text-sm leading-relaxed">{v.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="bg-white border-t border-navy-900/5">
        <Reveal className="container py-16 sm:py-20 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-navy-950 mb-4">
            Zone d&apos;intervention : {SITE.zone} et alentours
          </h2>
          <p className="max-w-xl mx-auto text-navy-900/60 mb-10">
            Nous intervenons dans un rayon de {SITE.zoneRadiusKm} km autour de {SITE.zone}, chez les
            particuliers comme pour les copropriétés.
          </p>
          <Link
            href="/devis"
            className="inline-flex items-center justify-center rounded-full bg-leaf-500 hover:bg-leaf-600 text-white font-semibold px-8 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Demander un devis gratuit
          </Link>
        </Reveal>
      </section>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import { SERVICE_ICONS, IconCheck, IconCard, IconPhone } from "@/components/icons";
import { HeroVisual } from "@/components/HeroVisual";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { SERVICES, SITE, VALUES, ZONE_TOWNS } from "@/lib/site";

const PROCESS = [
  ["01", "On échange", "Vous nous expliquez votre besoin par téléphone, par email ou via le devis en ligne."],
  ["02", "Devis gratuit", "Votre demande est étudiée et vous recevez un prix clair, sans engagement."],
  [
    "03",
    "On planifie",
    `Une intervention organisée à une date qui vous convient, jusqu'à ${SITE.zoneRadiusKm} km autour de ${SITE.zone}.`,
  ],
  ["04", "C'est fait", "Un seul interlocuteur, un travail soigné et un chantier laissé propre."],
] as const;

const FAQ = [
  {
    q: "Le devis est-il vraiment gratuit ?",
    a: "Oui. Le devis est gratuit et sans engagement : vous décrivez votre besoin, nous revenons vers vous avec un prix clair avant toute intervention.",
  },
  {
    q: "Dans quelle zone intervenez-vous ?",
    a: `À ${SITE.zone} et dans un rayon d'environ ${SITE.zoneRadiusKm} km, notamment à ${ZONE_TOWNS.slice(1).join(", ")} et dans les communes alentour.`,
  },
  {
    q: "Quels travaux prenez-vous en charge ?",
    a: "Le nettoyage de maisons et d'appartements (y compris débarras et encombrants), le démoussage et le nettoyage de toiture et de façade, le petit bricolage et le dépannage, ainsi que l'entretien des espaces verts.",
  },
  {
    q: "Peut-on payer en plusieurs fois ?",
    a: "Oui, le paiement en plusieurs fois est possible, jusqu'à 3 fois sans frais.",
  },
  {
    q: "Comment vous joindre le plus rapidement ?",
    a: `Par téléphone au ${SITE.phone}, par email à ${SITE.email}, ou via le formulaire de devis en ligne.`,
  },
];

const MARQUEE = [
  "Nettoyage de maison",
  "Démoussage de toiture",
  "Nettoyage de façade",
  "Traitement hydrofuge",
  "Débarras & succession",
  "Petite maçonnerie",
  "Plomberie",
  "Peinture",
  "Tonte & taille de haies",
  "Débroussaillage",
];

const STATS = [
  { value: `${SITE.zoneRadiusKm} km`, label: `autour de ${SITE.zone}` },
  { value: "0 €", label: "pour le devis" },
  { value: "3×", label: "sans frais" },
  { value: "1", label: "seul interlocuteur" },
];

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      {/* HERO — dark, photo-led: the one bright element is the quote button (saliency of the priority action). */}
      <section className="hero-dark relative text-white">
        <div className="hero-dark-grid pointer-events-none absolute inset-0" />
        <div className="container relative grid items-center gap-14 pb-16 pt-12 sm:pt-16 lg:min-h-[calc(100svh-68px)] lg:grid-cols-[1.05fr_.95fr] lg:py-16">
          <div className="relative z-10">
            <Reveal>
              <p className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-white/85 backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-leaf-400" />
                </span>
                <span className="hidden sm:inline">Artisan multiservice · </span>
                {SITE.zone} &amp; {SITE.zoneRadiusKm} km
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              {/* "de bonnes mains" is kept on one line so no word is left orphaned. */}
              <h1 className="font-display text-[clamp(2.5rem,5vw,4.4rem)] font-extrabold leading-[.98] tracking-[-.045em]">
                Vos travaux et votre maison{" "}
                <span className="text-leaf-400">
                  en{" "}
                  <span className="brush-wrap">
                    de bonnes mains
                    <span className="brush-underline opacity-50" />
                  </span>
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
                Nettoyage, toiture, façade, petit bricolage et espaces verts :{" "}
                <strong className="font-semibold text-white">un seul pro pour tout entreprendre</strong>, à {SITE.zone}{" "}
                et alentours.
              </p>
            </Reveal>
            <Reveal delay={0.23}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/devis" className="premium-btn premium-btn-glow text-base">
                  Demander mon devis gratuit <span aria-hidden>→</span>
                </Link>
                <a href={`tel:${SITE.phoneHref}`} className="premium-btn premium-btn-ghost text-base">
                  <IconPhone className="h-4 w-4 text-leaf-400" />
                  {SITE.phone}
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <dl className="mt-11 grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
                {STATS.map((s) => (
                  <div key={s.label} className="bg-navy-950/60 px-4 py-4 backdrop-blur">
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="font-display text-2xl font-extrabold text-white">{s.value}</dd>
                    <dd className="mt-0.5 text-xs text-white/65">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
          <HeroVisual />
        </div>

        {/* Services marquee — duplicated list so the -50% translate loops seamlessly. */}
        <div className="relative border-t border-white/10 bg-navy-950/60 py-4" aria-label="Nos métiers">
          <div className="flex w-max animate-marquee gap-10 whitespace-nowrap pr-10 text-sm font-semibold uppercase tracking-[.18em] text-white/70">
            {[...MARQUEE, ...MARQUEE].map((t, i) => (
              <span key={i} className="flex items-center gap-10" aria-hidden={i >= MARQUEE.length}>
                {t}
                <span className="h-1.5 w-1.5 rounded-full bg-leaf-400" />
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20 sm:py-28">
        <Reveal className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Nos services à {SITE.zone} et alentours</p>
            <h2 className="section-heading">Des services concrets, pour la maison comme pour l&apos;extérieur.</h2>
          </div>
          <p className="max-w-sm leading-7 text-navy-900/70">
            Une offre simple : vous nous expliquez le besoin, on s&apos;occupe du reste.
          </p>
        </Reveal>
        <RevealGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => {
            const Icon = SERVICE_ICONS[service.icon];
            return (
              <RevealItem key={service.slug}>
                <article className="photo-card group relative flex h-full flex-col overflow-hidden rounded-3xl border border-navy-900/10 bg-white shadow-card transition-shadow duration-300 hover:shadow-[0_30px_60px_-30px_rgba(8,24,38,.45)]">
                  <div className="relative aspect-[16/10] overflow-hidden bg-navy-900">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 280px, (min-width: 768px) 45vw, 92vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                    <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-navy-800 shadow-lg">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span
                      aria-hidden
                      className="absolute bottom-3 right-4 font-display text-4xl font-black text-white/80"
                    >
                      0{i + 1}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-bold leading-snug text-navy-950">{service.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-navy-900/70">{service.summary}</p>
                    <ul className="mt-5 space-y-2 border-t border-navy-900/10 pt-5 text-sm text-navy-900/80">
                      {service.bullets.slice(0, 4).map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-leaf-500" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services#${service.slug}`}
                      className="mt-auto inline-flex items-center pt-6 text-sm font-bold text-navy-800 transition-colors after:absolute after:inset-0 group-hover:text-leaf-600"
                    >
                      Découvrir le service<span className="sr-only"> : {service.title}</span>
                      <span aria-hidden className="ml-1 transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </section>

      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="hero-dark-grid absolute inset-0 opacity-60" />
        <div className="container relative py-20 sm:py-28">
          <Reveal className="mb-14 max-w-2xl">
            <p className="eyebrow text-leaf-400">Comment ça marche</p>
            <h2 className="section-heading text-white">
              Du premier appel au dernier détail, sans vous perdre dans les démarches.
            </h2>
          </Reveal>
          <RevealGroup className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map(([num, title, desc]) => (
              <RevealItem key={num}>
                <div className="process-card">
                  <span aria-hidden>{num}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="container py-20 sm:py-24">
        <Reveal>
          <div className="payment-card">
            <div className="payment-icon">
              <IconCard className="h-7 w-7" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-white/60">Souplesse de paiement</p>
              <h2 className="mt-1 font-display text-2xl font-bold sm:text-3xl">
                Paiement en plusieurs fois possible, jusqu&apos;à 3 fois sans frais.
              </h2>
              <p className="mt-2 text-sm text-white/70">Un service de qualité, en toute confiance.</p>
            </div>
            <Link href="/devis" className="premium-btn premium-btn-glow">
              Obtenir mon devis gratuit
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-navy-900/10 bg-white">
        <div className="container grid gap-12 py-20 lg:grid-cols-[1fr_.8fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">Pourquoi {SITE.name}</p>
            <h2 className="section-heading">La proximité, la réactivité et la sérénité comme méthode de travail.</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {VALUES.map((v) => (
                <div key={v.title}>
                  <div className="mb-3 h-1.5 w-10 rounded-full bg-leaf-500" />
                  <h3 className="font-display text-lg font-bold text-navy-950">{v.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-navy-900/70">{v.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-[2rem] border border-navy-900/10 bg-mist-50 p-7 shadow-card sm:p-9">
              <p className="eyebrow">Zone d&apos;intervention</p>
              <div className="mt-6 rounded-3xl bg-navy-950 p-7 text-white">
                <p className="text-sm text-white/65">Basé à</p>
                <p className="mt-1 font-display text-4xl font-black">{SITE.zone}</p>
                <p className="mt-2 text-white/70">Rayon d&apos;intervention : {SITE.zoneRadiusKm} km</p>
                <ul className="mt-5 flex flex-wrap gap-2 text-xs text-white/80">
                  {ZONE_TOWNS.map((town) => (
                    <li key={town} className="rounded-full border border-white/15 px-3 py-1">
                      {town}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="premium-btn premium-btn-glow mt-7">
                  Parler de votre projet →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container grid gap-12 py-20 sm:py-28 lg:grid-cols-[.8fr_1.2fr]">
        <Reveal>
          <p className="eyebrow">Questions fréquentes</p>
          <h2 className="section-heading">Tout savoir avant de nous appeler.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="divide-y divide-navy-900/10 rounded-3xl border border-navy-900/10 bg-white shadow-card">
            {FAQ.map(({ q, a }) => (
              <details key={q} className="group px-6 py-5 sm:px-8 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-base font-bold text-navy-950 sm:text-lg">
                  {q}
                  <span
                    aria-hidden
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-leaf-100 text-leaf-700 transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 pr-10 text-sm leading-7 text-navy-900/75">{a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Closing CTA — ends the page on the priority action instead of the footer (peak-end). */}
      <section className="container pb-4">
        <Reveal>
          <div className="hero-dark relative overflow-hidden rounded-[2.5rem] px-7 py-14 text-white sm:px-14 sm:py-20">
            <div className="hero-dark-grid pointer-events-none absolute inset-0" />
            <div className="relative grid gap-10 lg:grid-cols-[1.2fr_auto] lg:items-center">
              <div>
                <p className="eyebrow text-leaf-400">Devis gratuit · sans engagement</p>
                <h2 className="section-heading text-white">Un projet ? Parlons-en.</h2>
                <p className="mt-4 max-w-xl text-lg text-white/75">
                  Décrivez votre besoin en deux minutes, on revient vers vous avec un prix clair.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link href="/devis" className="premium-btn premium-btn-glow text-base">
                  Demander mon devis gratuit <span aria-hidden>→</span>
                </Link>
                <a href={`tel:${SITE.phoneHref}`} className="premium-btn premium-btn-ghost text-base">
                  <IconPhone className="h-4 w-4 text-leaf-400" />
                  {SITE.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

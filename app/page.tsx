import Link from "next/link";
import { SERVICE_ICONS, IconCheck, IconCard, IconPhone } from "@/components/icons";
import { HeroVisual } from "@/components/HeroVisual";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { SERVICES, SITE, VALUES, ZONE_TOWNS } from "@/lib/site";

const PROCESS = [
  ["01", "On échange", "Vous nous expliquez votre besoin par téléphone, par email ou via le devis en ligne."],
  ["02", "Devis gratuit", "Votre demande est étudiée et vous recevez un prix clair, sans engagement."],
  ["03", "On planifie", `Une intervention organisée à une date qui vous convient, jusqu'à ${SITE.zoneRadiusKm} km autour de ${SITE.zone}.`],
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

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <section className="relative border-b border-navy-900/10 bg-white">
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="container relative grid items-center gap-12 py-12 sm:py-16 lg:min-h-[calc(100svh-68px)] lg:grid-cols-[1fr_1fr] lg:py-14">
          <div className="relative z-10">
            <Reveal>
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-navy-900/10 bg-white px-3.5 py-2 text-xs font-bold uppercase tracking-[.14em] text-navy-800 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-leaf-500 shadow-[0_0_0_5px_rgba(47,158,79,.12)]" />
                <span className="hidden sm:inline">Artisan multiservice · </span>
                {SITE.zone} &amp; {SITE.zoneRadiusKm} km
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-display text-[clamp(2.6rem,5vw,4.6rem)] font-extrabold leading-[.95] tracking-[-.045em] text-navy-950">
                Vos travaux et votre maison{" "}
                <span className="text-leaf-600">
                  en de{" "}
                  <span className="brush-wrap">
                    bonnes mains
                    <span className="brush-underline" />
                  </span>
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-8 text-navy-900/70">
                Nettoyage, entretien, toiture, façade, petit bricolage et espaces verts :{" "}
                <strong className="text-navy-900">un seul pro pour tout entreprendre</strong>, à {SITE.zone} et
                alentours.
              </p>
            </Reveal>
            <Reveal delay={0.23}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/devis" className="premium-btn premium-btn-primary">
                  Demander mon devis gratuit <span aria-hidden>→</span>
                </Link>
                <a href={`tel:${SITE.phoneHref}`} className="premium-btn premium-btn-secondary">
                  <IconPhone className="h-4 w-4 text-leaf-600" />
                  {SITE.phone}
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-navy-900/70">
                {["Devis gratuit et sans engagement", "Jusqu'à 3× sans frais", "Un seul interlocuteur"].map((t) => (
                  <li key={t} className="flex items-center gap-1.5">
                    <IconCheck className="h-4 w-4 text-leaf-600" />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="brand-ribbon" aria-label="Nos métiers">
        <ul className="container grid grid-cols-2 gap-y-3 py-4 text-center text-[11px] font-bold uppercase tracking-[.2em] text-white/90 sm:flex sm:items-center sm:justify-center sm:gap-x-10">
          {["Nettoyage", "Toiture & façade", "Petit bricolage", "Entretien"].map((t, i) => (
            <li key={t} className="flex items-center justify-center gap-10">
              {i > 0 && <i aria-hidden className="hidden sm:block" />}
              {t}
            </li>
          ))}
        </ul>
      </section>

      <section className="container py-20 sm:py-28">
        <Reveal className="mb-12 max-w-2xl">
          <p className="eyebrow">Nos services à {SITE.zone} et alentours</p>
          <h2 className="section-heading">Des services concrets, pour la maison comme pour l&apos;extérieur.</h2>
          <p className="mt-5 leading-7 text-navy-900/65">
            Une offre simple : vous nous expliquez le besoin, on s&apos;occupe du reste.
          </p>
        </Reveal>
        <RevealGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => {
            const Icon = SERVICE_ICONS[service.icon];
            return (
              <RevealItem key={service.slug}>
                <article className="service-card group h-full flex flex-col">
                  <div className="flex items-start justify-between">
                    <span className={`service-icon ${i % 2 === 0 ? "service-icon-blue" : "service-icon-green"}`}>
                      <Icon className="h-6 w-6" />
                    </span>
                    <span aria-hidden className="font-display text-5xl font-black text-navy-900/[.06]">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-navy-950">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-navy-900/65">{service.summary}</p>
                  <ul className="mt-5 space-y-2 border-t border-navy-900/10 pt-5 text-sm text-navy-900/80">
                    {service.bullets.slice(0, 4).map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-leaf-600" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services#${service.slug}`}
                    className="mt-auto pt-6 inline-flex text-sm font-bold text-navy-800 transition-colors group-hover:text-leaf-600"
                  >
                    Découvrir le service<span className="sr-only"> : {service.title}</span>
                    <span aria-hidden>&nbsp;→</span>
                  </Link>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </section>

      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:56px_56px]" />
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
            <Link
              href="/devis"
              className="rounded-full bg-white px-6 py-3 text-sm font-bold text-navy-900 transition hover:-translate-y-0.5"
            >
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
                  <p className="mt-2 text-sm leading-6 text-navy-900/65">{v.description}</p>
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
                <Link
                  href="/contact"
                  className="mt-7 inline-flex rounded-full bg-leaf-500 px-5 py-3 text-sm font-bold hover:bg-leaf-400"
                >
                  Parler de votre projet →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container grid gap-12 pt-20 sm:pt-28 lg:grid-cols-[.8fr_1.2fr]">
        <Reveal>
          <p className="eyebrow">Questions fréquentes</p>
          <h2 className="section-heading">Tout savoir avant de nous appeler.</h2>
          <div className="mt-8 rounded-3xl bg-navy-950 p-7 text-white">
            <p className="font-display text-lg font-bold">Une autre question ?</p>
            <p className="mt-1 text-sm text-white/70">Le plus simple, c&apos;est d&apos;en parler de vive voix.</p>
            <a href={`tel:${SITE.phoneHref}`} className="premium-btn premium-btn-primary mt-5">
              <IconPhone className="h-4 w-4" />
              {SITE.phone}
            </a>
          </div>
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
                <p className="mt-3 pr-10 text-sm leading-7 text-navy-900/70">{a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}

import Link from "next/link";
import { SERVICE_ICONS, IconCheck, IconCard } from "@/components/icons";
import { SERVICES, SITE, VALUES } from "@/lib/site";

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
            <span className="animate-fade-up inline-flex items-center rounded-full bg-leaf-100 text-leaf-700 text-xs font-semibold tracking-wide uppercase px-3.5 py-1.5 mb-6">
              Devis gratuit
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-navy-950 mb-6">
              Vos travaux et votre maison
              <span className="block text-leaf-600">en de bonnes mains.</span>
            </h1>
            <p className="max-w-xl text-navy-900/70 text-base sm:text-lg mb-9 leading-relaxed">
              Nettoyage, entretien, petits travaux... pour un intérieur et un extérieur toujours au
              top ! Un seul pro, pour tout entreprendre.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/devis"
                className="inline-flex items-center justify-center rounded-full bg-leaf-500 hover:bg-leaf-600 text-white font-semibold px-8 py-3.5 transition-colors"
              >
                Demander un devis gratuit
              </Link>
              <Link
                href="/rendez-vous"
                className="inline-flex items-center justify-center rounded-full border border-navy-900/15 hover:border-navy-900/30 text-navy-900 font-medium px-8 py-3.5 transition-colors"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </div>

          <div className="relative aspect-square max-w-sm mx-auto w-full">
            <div className="absolute inset-0 rounded-[2.5rem] bg-navy-800" />
            <div className="absolute inset-3 rounded-[2rem] bg-gradient-to-br from-leaf-500 to-navy-700 flex items-center justify-center">
              <span className="font-display text-6xl sm:text-7xl font-extrabold text-white/95 text-center leading-none">
                Un seul
                <br />
                pro
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-navy-900/5 bg-white">
        <div className="container py-5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-sm font-medium text-navy-900/80">
          <p className="flex items-center justify-center gap-2">
            <IconCheck className="h-4 w-4 text-leaf-600" /> Devis gratuit
          </p>
          <p className="flex items-center justify-center gap-2">
            <IconCheck className="h-4 w-4 text-leaf-600" /> Paiement en 3x sans frais
          </p>
          <p className="flex items-center justify-center gap-2">
            <IconCheck className="h-4 w-4 text-leaf-600" /> Intervention sous {SITE.zoneRadiusKm} km
          </p>
        </div>
      </section>

      <section className="container py-16 sm:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-leaf-600 font-semibold mb-3">Nos services</p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-navy-950">
            Tout ce qu&apos;il faut pour votre maison
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = SERVICE_ICONS[service.icon];
            return (
              <div key={service.slug} className="rounded-2xl bg-white border border-navy-900/5 shadow-card p-6">
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-full text-white mb-5 ${
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
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link href="/services" className="text-navy-900 font-semibold hover:text-leaf-600 transition-colors">
            Voir le détail de tous nos services →
          </Link>
        </div>
      </section>

      <section className="border-y border-navy-900/5 bg-navy-900 text-white">
        <div className="container py-10 sm:py-12 grid sm:grid-cols-[auto_1fr_auto] gap-6 items-center">
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
      </section>

      <section className="container py-16 sm:py-24">
        <div className="grid sm:grid-cols-3 gap-8 text-center">
          {VALUES.map((v) => (
            <div key={v.title}>
              <h3 className="font-display text-xl font-bold text-navy-950 mb-2">{v.title}</h3>
              <p className="text-navy-900/60 text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border-t border-navy-900/5">
        <div className="container py-16 sm:py-20 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-navy-950 mb-4">
            Zone d&apos;intervention : {SITE.zone} et alentours
          </h2>
          <p className="max-w-xl mx-auto text-navy-900/60 mb-10">
            Nous intervenons dans un rayon de {SITE.zoneRadiusKm} km autour de {SITE.zone}, chez les
            particuliers comme pour les copropriétés.
          </p>
          <Link
            href="/devis"
            className="inline-flex items-center justify-center rounded-full bg-leaf-500 hover:bg-leaf-600 text-white font-semibold px-8 py-3.5 transition-colors"
          >
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </main>
  );
}

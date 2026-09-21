import type { Metadata } from "next";
import Link from "next/link";
import { SERVICE_ICONS, IconCheck } from "@/components/icons";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { SERVICES } from "@/lib/site";

export const metadata: Metadata = { title: "Nos services" };

export default function ServicesPage() {
  return (
    <main className="container py-16 sm:py-20">
      <Reveal className="max-w-2xl mb-14">
        <p className="text-xs tracking-[0.3em] uppercase text-leaf-600 font-semibold mb-3">Nos services</p>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-navy-950 mb-5">
          Un seul pro, pour tout entreprendre
        </h1>
        <p className="text-navy-900/70 text-lg leading-relaxed">
          De l&apos;entretien courant aux petits travaux, on s&apos;occupe de votre intérieur et de votre
          extérieur avec le même soin.
        </p>
      </Reveal>

      <RevealGroup className="grid gap-6">
        {SERVICES.map((service, i) => {
          const Icon = SERVICE_ICONS[service.icon];
          return (
            <RevealItem key={service.slug}>
              <div
                id={service.slug}
                className="scroll-mt-24 rounded-2xl bg-white border border-navy-900/5 shadow-card p-7 sm:p-9 grid sm:grid-cols-[auto_1fr] gap-6 sm:gap-8 items-start transition-shadow duration-300 hover:shadow-xl"
              >
                <span
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-full text-white shrink-0 ${
                    i % 2 === 0 ? "bg-navy-700" : "bg-leaf-500"
                  }`}
                >
                  <Icon className="h-7 w-7" />
                </span>
                <div>
                  <h2 className="font-display text-2xl font-bold text-navy-950 mb-2">{service.title}</h2>
                  <p className="text-navy-900/60 mb-5">{service.summary}</p>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-navy-900/80">
                    {service.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <IconCheck className="h-4 w-4 text-leaf-600 mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>

      <Reveal className="text-center mt-16">
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

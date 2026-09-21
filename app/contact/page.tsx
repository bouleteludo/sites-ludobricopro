import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";
import { IconPhone, IconMail, IconPin } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main className="container py-16 sm:py-20">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-leaf-600 font-semibold mb-3">Contact</p>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-navy-950 mb-6">
            Une question ? Contactez-nous
          </h1>
          <ul className="space-y-5 text-navy-900/80">
            <li className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-leaf-100 text-leaf-700 shrink-0">
                <IconPhone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-navy-900/50">Téléphone</p>
                <a href={`tel:${SITE.phoneHref}`} className="font-semibold hover:text-leaf-600 transition-colors">
                  {SITE.phone}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-leaf-100 text-leaf-700 shrink-0">
                <IconMail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-navy-900/50">Email</p>
                <a href={`mailto:${SITE.email}`} className="font-semibold hover:text-leaf-600 transition-colors">
                  {SITE.email}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-leaf-100 text-leaf-700 shrink-0">
                <IconPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-navy-900/50">Zone d&apos;intervention</p>
                <p className="font-semibold">
                  à {SITE.zoneRadiusKm} km autour de {SITE.zone}
                </p>
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl bg-white border border-navy-900/5 shadow-card p-6 sm:p-9">
            <h2 className="font-display text-xl font-bold text-navy-950 mb-5">Envoyer un message</h2>
            <QuoteForm type="CONTACT" submitLabel="Envoyer" />
          </div>
        </Reveal>
      </div>
    </main>
  );
}

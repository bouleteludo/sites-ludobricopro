import type { Metadata } from "next";
import { IconMail, IconPhone, IconPin } from "@/components/icons";
import { FormAlert } from "@/components/FormAlert";
import { PageHeader } from "@/components/PageHeader";
import { QuoteForm } from "@/components/QuoteForm";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

type Props = { searchParams: Promise<{ erreur?: string }> };

export default async function ContactPage({ searchParams }: Props) {
  const { erreur } = await searchParams;
  const channels = [
    { icon: IconPhone, label: "Téléphone", value: SITE.phone, href: `tel:${SITE.phoneHref}` },
    { icon: IconMail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: IconPin, label: "Zone d'intervention", value: `à ${SITE.zoneRadiusKm} km autour de ${SITE.zone}` },
  ];

  return (
    <main>
      <PageHeader eyebrow="Contact" title="Une question ? Contactez-nous" />
      <div className="container relative -mt-14 grid gap-8 pb-10 lg:grid-cols-[.8fr_1.2fr]">
        <Reveal>
          <ul className="space-y-3 rounded-3xl border border-navy-900/10 bg-white p-4 shadow-card">
            {channels.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-leaf-100 text-leaf-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-medium text-navy-900/70">{label}</span>
                    <span className="block truncate font-display text-lg font-bold text-navy-950">{value}</span>
                  </span>
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a href={href} className="flex items-center gap-4 rounded-2xl p-3 transition-colors hover:bg-mist-50">
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-3">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-navy-900/10 bg-white p-6 shadow-[0_40px_80px_-40px_rgba(8,24,38,.35)] sm:p-10">
            <h2 className="mb-6 font-display text-2xl font-bold text-navy-950">Envoyer un message</h2>
            <FormAlert erreur={erreur} />
            <QuoteForm type="CONTACT" submitLabel="Envoyer" />
          </div>
        </Reveal>
      </div>
    </main>
  );
}

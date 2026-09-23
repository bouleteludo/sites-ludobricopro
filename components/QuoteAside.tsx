import { IconCard, IconCheck, IconPhone, IconPin } from "@/components/icons";
import { SITE } from "@/lib/site";

const POINTS = [
  { icon: IconCheck, title: "Devis gratuit", text: "Sans engagement, avec un prix clair avant toute intervention." },
  { icon: IconCard, title: "Jusqu'à 3× sans frais", text: "Le paiement en plusieurs fois est possible." },
  { icon: IconPin, title: `${SITE.zone} & ${SITE.zoneRadiusKm} km`, text: "Une entreprise locale qui se déplace chez vous." },
];

export function QuoteAside() {
  return (
    <aside className="flex flex-col gap-5 lg:pt-8">
      <ul className="space-y-5 rounded-3xl border border-navy-900/10 bg-white p-7 shadow-card">
        {POINTS.map(({ icon: Icon, title, text }) => (
          <li key={title} className="flex gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-leaf-100 text-leaf-700">
              <Icon className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-display font-bold text-navy-950">{title}</span>
              <span className="block text-sm leading-6 text-navy-900/70">{text}</span>
            </span>
          </li>
        ))}
      </ul>
      <div className="rounded-3xl bg-navy-950 p-7 text-white">
        <p className="font-display text-lg font-bold">Plus simple par téléphone ?</p>
        <p className="mt-1 text-sm text-white/70">On en parle de vive voix.</p>
        <a href={`tel:${SITE.phoneHref}`} className="premium-btn premium-btn-ghost mt-5 w-full">
          <IconPhone className="h-4 w-4 text-leaf-400" />
          {SITE.phone}
        </a>
      </div>
    </aside>
  );
}

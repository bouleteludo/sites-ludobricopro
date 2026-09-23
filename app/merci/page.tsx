import type { Metadata } from "next";
import Link from "next/link";
import { IconPhone } from "@/components/icons";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Merci", robots: { index: false } };

const MESSAGES: Record<string, string> = {
  DEVIS: "Votre demande de devis a bien été envoyée.",
  RENDEZVOUS: "Votre demande de rendez-vous a bien été envoyée.",
  CONTACT: "Votre message a bien été envoyé.",
};

const NEXT_STEPS = [
  "Nous étudions votre demande.",
  "Nous vous recontactons au plus vite, par téléphone ou par email.",
  "Vous recevez un devis clair, gratuit et sans engagement.",
];

type Props = { searchParams: Promise<{ type?: string }> };

export default async function MerciPage({ searchParams }: Props) {
  const { type } = await searchParams;
  const message = MESSAGES[type ?? ""] ?? "Votre demande a bien été envoyée.";

  return (
    <main className="hero-dark relative overflow-hidden text-white">
      <div className="hero-dark-grid pointer-events-none absolute inset-0" />
      <div className="container relative max-w-2xl py-20 text-center sm:py-28">
        {/* Drawn check: the reward moment of the funnel gets the strongest visual feedback on the site. */}
        <span className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-leaf-400 text-navy-950 shadow-[0_0_0_12px_rgba(77,187,104,.15),0_0_0_28px_rgba(77,187,104,.07)]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className="h-11 w-11" aria-hidden>
            <path d="M20 6 9 17l-5-5" strokeDasharray="30" className="animate-check-draw" />
          </svg>
        </span>
        <h1 className="mt-10 font-display text-4xl font-extrabold sm:text-5xl">Merci !</h1>
        <p className="mt-4 text-lg leading-8 text-white/80">{message}</p>

        <ol className="mx-auto mt-10 max-w-md space-y-3 text-left">
          {NEXT_STEPS.map((step, i) => (
            <li key={step} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 font-display text-sm font-bold text-leaf-400">
                {i + 1}
              </span>
              <span className="text-white/85">{step}</span>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={`tel:${SITE.phoneHref}`} className="premium-btn premium-btn-glow">
            <IconPhone className="h-4 w-4" />
            Urgent ? {SITE.phone}
          </a>
          <Link href="/" className="premium-btn premium-btn-ghost">
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { IconCheck } from "@/components/icons";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Merci" };

const MESSAGES: Record<string, string> = {
  DEVIS: "Votre demande de devis a bien été envoyée.",
  RENDEZVOUS: "Votre demande de rendez-vous a bien été envoyée.",
  CONTACT: "Votre message a bien été envoyé.",
};

type Props = { searchParams: Promise<{ type?: string }> };

export default async function MerciPage({ searchParams }: Props) {
  const { type } = await searchParams;
  const message = MESSAGES[type ?? ""] ?? "Votre demande a bien été envoyée.";

  return (
    <main className="container py-24 sm:py-32 text-center max-w-lg">
      <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-leaf-100 text-leaf-600 mb-6">
        <IconCheck className="h-8 w-8" />
      </span>
      <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-navy-950 mb-4">Merci !</h1>
      <p className="text-navy-900/70 mb-8 leading-relaxed">
        {message} On vous recontacte au plus vite au {SITE.phone} ou par email. Pour toute urgence,
        appelez-nous directement.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-full bg-leaf-500 hover:bg-leaf-600 text-white font-semibold px-8 py-3.5 transition-colors"
      >
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}

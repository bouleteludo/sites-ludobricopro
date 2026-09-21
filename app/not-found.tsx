import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container py-24 sm:py-32 text-center">
      <p className="text-xs tracking-[0.3em] uppercase text-leaf-600 font-semibold mb-4">Erreur 404</p>
      <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-navy-950 mb-6">
        Cette page n&apos;existe pas.
      </h1>
      <p className="text-navy-900/60 max-w-md mx-auto mb-10">
        La page que vous cherchez a été déplacée ou n&apos;existe plus.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-full bg-leaf-500 hover:bg-leaf-600 text-white font-semibold px-7 py-3.5 transition-colors"
      >
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}

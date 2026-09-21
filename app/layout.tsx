import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import Link from "next/link";
import { MotionConfig } from "framer-motion";
import { Header } from "@/components/Header";
import { MobileCta } from "@/components/MobileCta";
import { IconPhone, IconMail, IconPin } from "@/components/icons";
import { SITE } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: `Nettoyage, entretien et petits travaux à ${SITE.zone} et dans un rayon de ${SITE.zoneRadiusKm} km. Devis gratuit, intervention rapide.`,
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description: `Nettoyage, entretien et petits travaux à ${SITE.zone}. Devis gratuit.`,
    url: SITE.url,
    siteName: SITE.name,
    locale: "fr_FR",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: SITE.name,
  description: `Nettoyage, entretien et petits travaux à ${SITE.zone} et dans un rayon de ${SITE.zoneRadiusKm} km. Devis gratuit.`,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", address: SITE.zone },
    geoRadius: `${Number(SITE.zoneRadiusKm) * 1000}`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-mist-50 text-navy-900 font-sans antialiased flex flex-col">
        <MotionConfig reducedMotion="user">
          <Header />

          <div className="flex-1 pb-24 md:pb-0">{children}</div>

          <MobileCta />

          <footer className="bg-navy-950 text-white mt-24">
          <div className="container py-14 grid gap-10 sm:grid-cols-3 text-sm">
            <div>
              <p className="font-display text-lg font-bold mb-3">
                Ludo<span className="text-leaf-400">Brico</span>Pro
              </p>
              <p className="text-white/60 leading-relaxed">{SITE.tagline}.</p>
            </div>
            <div>
              <p className="font-medium mb-3">Contact</p>
              <ul className="text-white/70 space-y-2">
                <li className="flex items-center gap-2">
                  <IconPhone className="h-4 w-4 text-leaf-400" />
                  <a href={`tel:${SITE.phoneHref}`} className="hover:text-white transition-colors">
                    {SITE.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <IconMail className="h-4 w-4 text-leaf-400" />
                  <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">
                    {SITE.email}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <IconPin className="h-4 w-4 text-leaf-400" />
                  <span>
                    Zone d&apos;intervention : à {SITE.zoneRadiusKm} km autour de {SITE.zone}
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-3">Liens utiles</p>
              <ul className="text-white/70 space-y-2">
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Nos services
                  </Link>
                </li>
                <li>
                  <Link href="/devis" className="hover:text-white transition-colors">
                    Demander un devis
                  </Link>
                </li>
                <li>
                  <Link href="/rendez-vous" className="hover:text-white transition-colors">
                    Prendre rendez-vous
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 py-5 flex flex-col items-center gap-3 text-xs text-white/50">
            <nav className="flex flex-wrap justify-center gap-x-4 gap-y-1.5">
              <Link href="/mentions-legales" className="hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link href="/cgv" className="hover:text-white transition-colors">
                Conditions générales
              </Link>
              <Link href="/confidentialite" className="hover:text-white transition-colors">
                Confidentialité
              </Link>
            </nav>
            <p>© {new Date().getFullYear()} {SITE.name}. Tous droits réservés.</p>
          </div>
          </footer>
        </MotionConfig>
      </body>
    </html>
  );
}

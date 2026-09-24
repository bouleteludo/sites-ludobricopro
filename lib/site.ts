// Empty or whitespace-only variables (e.g. added blank in Vercel) fall back to the default.
function env(key: string, fallback: string) {
  const value = process.env[key]?.trim();
  return value ? value : fallback;
}

function siteUrl() {
  const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const fallback = vercelUrl ? `https://${vercelUrl}` : "https://sites-ludobricopro.vercel.app";
  const value = env("NEXT_PUBLIC_SITE_URL", fallback);
  const withProtocol = /^https?:\/\//.test(value) ? value : `https://${value}`;
  return URL.canParse(withProtocol) ? withProtocol : fallback;
}

export const SITE = {
  name: env("NEXT_PUBLIC_SITE_NAME", "LudoBricoPro"),
  tagline: "Un seul pro, pour tout entreprendre",
  phone: env("NEXT_PUBLIC_CONTACT_PHONE", "06 15 64 68 80"),
  phoneHref: env("NEXT_PUBLIC_CONTACT_PHONE", "0615646880").replace(/\s+/g, ""),
  email: env("NEXT_PUBLIC_CONTACT_EMAIL", "ludo172300@gmail.com"),
  zone: env("NEXT_PUBLIC_ZONE", "Saintes"),
  zoneRadiusKm: env("NEXT_PUBLIC_ZONE_RADIUS_KM", "60"),
  url: siteUrl(),
};

// Towns within the intervention radius, shown for local SEO — adjust to the real coverage.
export const ZONE_TOWNS = ["Saintes", "Cognac", "Royan", "Rochefort", "Jonzac", "Saint-Jean-d'Angély", "Pons", "Marennes"];

export type Service = {
  slug: string;
  title: string;
  icon: "home" | "roof" | "tools" | "leaf";
  image: string;
  summary: string;
  bullets: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "nettoyage-batiments",
    image: "/images/service-nettoyage.webp",
    title: "Nettoyage courant des bâtiments",
    icon: "home",
    summary: "Maisons, appartements, encombrants, succession, débarras...",
    bullets: ["Ménage complet", "Remise en état", "Débarras / succession", "Enlèvement d'encombrants"],
  },
  {
    slug: "toiture-facade",
    image: "/images/service-toiture.webp",
    title: "Nettoyage toiture et façade",
    icon: "roof",
    summary: "Démoussage, traitement hydrofuge, nettoyage haute pression.",
    bullets: ["Toiture (tuiles, ardoises...)", "Façade (murs, bardage...)", "Traitement hydrofuge", "Protection durable"],
  },
  {
    slug: "bricolage-depannage",
    image: "/images/service-bricolage.webp",
    title: "Petit bricolage et dépannage",
    icon: "tools",
    summary: "Petite maçonnerie, plomberie, peinture, montage / fixation, réparations diverses.",
    bullets: ["Petite maçonnerie", "Plomberie (fuites, robinetterie)", "Peinture (intérieur/extérieur)", "Montage / fixation", "Réparations diverses"],
  },
  {
    slug: "entretien-general",
    image: "/images/service-entretien.webp",
    title: "Entretien général",
    icon: "leaf",
    summary: "Espaces verts, tonte, taille, débroussaillage, parties communes...",
    bullets: ["Tonte de pelouse", "Taille de haies", "Débroussaillage", "Parties communes", "Petits travaux d'entretien"],
  },
];

export const VALUES = [
  { title: "Proximité", description: "Un artisan local qui connaît le secteur et se déplace chez vous." },
  { title: "Réactivité", description: "Devis gratuit rapide et intervention dans des délais courts." },
  { title: "Sérénité", description: "Un seul interlocuteur, un travail soigné, en toute confiance." },
];

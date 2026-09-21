function env(key: string, fallback: string) {
  return process.env[key] ?? fallback;
}

export const SITE = {
  name: env("NEXT_PUBLIC_SITE_NAME", "LudoBricoPro"),
  tagline: "Un seul pro, pour tout entreprendre",
  phone: env("NEXT_PUBLIC_CONTACT_PHONE", "06 15 64 68 80"),
  phoneHref: env("NEXT_PUBLIC_CONTACT_PHONE", "0615646880").replace(/\s+/g, ""),
  email: env("NEXT_PUBLIC_CONTACT_EMAIL", "ludo172300@gmail.com"),
  zone: env("NEXT_PUBLIC_ZONE", "Saintes"),
  zoneRadiusKm: env("NEXT_PUBLIC_ZONE_RADIUS_KM", "60"),
  url: env("NEXT_PUBLIC_SITE_URL", "https://ludobricopro.vercel.app"),
};

export type Service = {
  slug: string;
  title: string;
  icon: "home" | "roof" | "tools" | "leaf";
  summary: string;
  bullets: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "nettoyage-batiments",
    title: "Nettoyage courant des bâtiments",
    icon: "home",
    summary: "Maisons, appartements, encombrants, succession, débarras...",
    bullets: ["Ménage complet", "Remise en état", "Débarras / succession", "Enlèvement d'encombrants"],
  },
  {
    slug: "toiture-facade",
    title: "Nettoyage toiture et façade",
    icon: "roof",
    summary: "Démoussage, traitement hydrofuge, nettoyage haute pression.",
    bullets: ["Toiture (tuiles, ardoises...)", "Façade (murs, bardage...)", "Traitement hydrofuge", "Protection durable"],
  },
  {
    slug: "bricolage-depannage",
    title: "Petit bricolage et dépannage",
    icon: "tools",
    summary: "Petite maçonnerie, plomberie, peinture, montage / fixation, réparations diverses.",
    bullets: ["Petite maçonnerie", "Plomberie (fuites, robinetterie)", "Peinture (intérieur/extérieur)", "Montage / fixation", "Réparations diverses"],
  },
  {
    slug: "entretien-general",
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

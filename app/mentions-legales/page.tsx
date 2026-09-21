import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Mentions légales" };

function env(key: string, fallback = "À compléter avant mise en ligne") {
  return process.env[key] ?? fallback;
}

export default function MentionsLegalesPage() {
  return (
    <main className="container max-w-3xl py-12 sm:py-16">
      <h1 className="font-display text-3xl font-extrabold text-navy-950 mb-8">Mentions légales</h1>
      <div className="prose prose-navy prose-headings:font-display prose-headings:text-navy-950 max-w-none">
        <h2>Éditeur du site</h2>
        <ul>
          <li>
            <strong>Nom / raison sociale :</strong> {env("LEGAL_COMPANY_NAME", SITE.name)}
          </li>
          <li>
            <strong>Forme juridique :</strong> {env("LEGAL_COMPANY_FORM", "Auto-entrepreneur")}
          </li>
          <li>
            <strong>Adresse :</strong> {env("LEGAL_ADDRESS")}
          </li>
          <li>
            <strong>SIRET :</strong> {env("LEGAL_SIRET")}
          </li>
          <li>
            <strong>Téléphone :</strong> {SITE.phone}
          </li>
          <li>
            <strong>Email :</strong> {SITE.email}
          </li>
        </ul>

        <h2>Hébergement</h2>
        <ul>
          <li>
            <strong>Hébergeur :</strong> Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
          </li>
          <li>
            <strong>Site :</strong> {SITE.url}
          </li>
        </ul>

        <h2>Médiation de la consommation</h2>
        <p>
          Conformément à l&apos;article L.616-1 du Code de la consommation, tout consommateur a le droit
          de recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable d&apos;un
          litige. Coordonnées du médiateur : {env("LEGAL_MEDIATOR")}.
        </p>
      </div>
    </main>
  );
}

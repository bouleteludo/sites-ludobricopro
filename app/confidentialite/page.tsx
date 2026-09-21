import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Politique de confidentialité" };

export default function ConfidentialitePage() {
  return (
    <main className="container max-w-3xl py-12 sm:py-16">
      <h1 className="font-display text-3xl font-extrabold text-navy-950 mb-8">Politique de confidentialité</h1>
      <div className="prose prose-navy prose-headings:font-display prose-headings:text-navy-950 max-w-none">
        <p>
          {SITE.name} traite les données nécessaires à la gestion des demandes de devis, de rendez-vous
          et de contact soumises via ce site. Contact : {SITE.email}.
        </p>

        <h2>Données traitées</h2>
        <p>
          Nom, téléphone, email, ville, service demandé, date souhaitée et message transmis via les
          formulaires du site.
        </p>

        <h2>Finalité et conservation</h2>
        <p>
          Ces données sont utilisées uniquement pour répondre à votre demande (devis, rendez-vous,
          question) et sont conservées le temps nécessaire au traitement de la demande et de la relation
          commerciale.
        </p>

        <h2>Destinataires des données</h2>
        <p>
          Les informations transmises via les formulaires ne sont accessibles qu&apos;à {SITE.name} et ne
          sont partagées avec aucun tiers, sauf obligation légale.
        </p>

        <h2>Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement et
          d&apos;opposition sur vos données personnelles. Pour l&apos;exercer, contactez-nous à {SITE.email}.
        </p>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Conditions générales" };

export default function CgvPage() {
  return (
    <main className="container max-w-3xl py-12 sm:py-16">
      <h1 className="font-display text-3xl font-extrabold text-navy-950 mb-8">Conditions générales</h1>
      <div className="prose prose-navy prose-headings:font-display prose-headings:text-navy-950 max-w-none">
        <p>
          Cette page doit être relue et complétée avec les conditions réelles de l&apos;activité avant
          toute prestation — voir les mentions légales pour l&apos;identité du prestataire.
        </p>

        <h2>1. Prestataire</h2>
        <p>Identité, adresse et immatriculation : voir la page Mentions légales.</p>

        <h2>2. Demande de devis et rendez-vous</h2>
        <p>
          Toute demande de devis ou de rendez-vous effectuée via le site ({SITE.name}) fait l&apos;objet
          d&apos;une prise de contact préalable, par téléphone ou par email, afin de confirmer la nature
          des travaux, le tarif et la date d&apos;intervention avant tout engagement.
        </p>

        <h2>3. Tarifs et paiement</h2>
        <p>
          Le devis est établi gratuitement et sans engagement. Les prix sont indiqués en euros, toutes
          taxes comprises. Un paiement en plusieurs fois (jusqu&apos;à 3 fois sans frais) peut être proposé
          selon la nature de la prestation.
        </p>

        <h2>4. Réalisation de la prestation</h2>
        <p>
          La date et l&apos;heure d&apos;intervention sont convenues d&apos;un commun accord avec le client. En cas
          d&apos;empêchement, chaque partie s&apos;engage à prévenir l&apos;autre dans les meilleurs délais.
        </p>

        <h2>5. Droit de rétractation</h2>
        <p>
          Pour toute prestation conclue à distance (via le site ou par téléphone) en dehors de tout
          établissement, vous disposez d&apos;un délai légal de 14 jours pour vous rétracter, sans avoir à
          justifier de motif, sauf si vous avez expressément demandé l&apos;exécution de la prestation avant
          la fin de ce délai (article L.221-28 du Code de la consommation). Pour exercer ce droit,
          contactez-nous à {SITE.email}.
        </p>

        <h2>6. Garanties</h2>
        <p>
          Les garanties légales applicables aux prestations de services (conformité et vices cachés)
          s&apos;appliquent à toutes les interventions réalisées.
        </p>

        <h2>7. Réclamations et litiges</h2>
        <p>
          Toute réclamation peut être adressée par email (voir Mentions légales). En cas de litige non
          résolu, le consommateur peut recourir au médiateur de la consommation mentionné dans les
          Mentions légales.
        </p>
      </div>
    </main>
  );
}

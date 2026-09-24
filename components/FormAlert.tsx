import { SITE } from "@/lib/site";

export function FormAlert({ erreur }: { erreur?: string }) {
  if (erreur === "champs-requis") {
    return (
      <p role="alert" className="mb-6 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
        Merci de renseigner au minimum votre nom et votre téléphone.
      </p>
    );
  }
  if (erreur === "envoi") {
    return (
      <p role="alert" className="mb-6 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
        Votre demande n&apos;a pas pu être envoyée suite à un problème technique. Appelez-nous directement au{" "}
        <a href={`tel:${SITE.phoneHref}`} className="font-bold underline">
          {SITE.phone}
        </a>{" "}
        ou réessayez dans quelques minutes.
      </p>
    );
  }
  return null;
}

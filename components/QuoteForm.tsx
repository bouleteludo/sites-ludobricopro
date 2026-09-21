import { createLead } from "@/lib/actions";
import { SERVICES } from "@/lib/site";

type Props = {
  type: "DEVIS" | "RENDEZVOUS" | "CONTACT";
  submitLabel: string;
};

export function QuoteForm({ type, submitLabel }: Props) {
  const showScheduling = type === "RENDEZVOUS";

  return (
    <form action={createLead} className="grid gap-5">
      <input type="hidden" name="type" value={type} />

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Nom complet" required>
          <input name="name" required type="text" autoComplete="name" className="input" placeholder="Jean Dupont" />
        </Field>
        <Field label="Téléphone" required>
          <input name="phone" required type="tel" autoComplete="tel" className="input" placeholder="06 12 34 56 78" />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Email">
          <input name="email" type="email" autoComplete="email" className="input" placeholder="vous@exemple.fr" />
        </Field>
        <Field label="Ville">
          <input name="city" type="text" autoComplete="address-level2" className="input" placeholder="Saintes" />
        </Field>
      </div>

      <Field label="Type de prestation" required>
        <select name="service" required className="input" defaultValue="">
          <option value="" disabled>
            Choisissez un service
          </option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Autre">Autre / je ne sais pas</option>
        </select>
      </Field>

      {showScheduling && (
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Date souhaitée">
            <input name="preferredDate" type="date" className="input" />
          </Field>
          <Field label="Créneau préféré">
            <select name="preferredTime" className="input" defaultValue="">
              <option value="">Peu importe</option>
              <option value="Matin">Matin</option>
              <option value="Après-midi">Après-midi</option>
            </select>
          </Field>
        </div>
      )}

      <Field label="Votre message">
        <textarea
          name="message"
          rows={4}
          className="input resize-none"
          placeholder="Décrivez vos travaux, la surface concernée, ou toute information utile..."
        />
      </Field>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-leaf-500 hover:bg-leaf-600 text-white font-semibold px-7 py-3.5 transition-colors w-full sm:w-auto"
      >
        {submitLabel}
      </button>
    </form>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block text-sm">
      <span className="block mb-1.5 font-medium text-navy-900">
        {label}
        {required && <span className="text-leaf-600"> *</span>}
      </span>
      {children}
    </label>
  );
}

"use client";

import { useTransition } from "react";
import { updateLeadStatus } from "@/lib/actions";

const STATUSES = [
  { value: "NOUVEAU", label: "Nouveau" },
  { value: "CONTACTE", label: "Contacté" },
  { value: "TRAITE", label: "Traité" },
];

export function LeadStatusSelect({ id, status }: { id: string; status: string }) {
  const [pending, startTransition] = useTransition();

  return (
    <select
      defaultValue={status}
      disabled={pending}
      onChange={(e) => startTransition(() => updateLeadStatus(id, e.target.value))}
      className="bg-white border border-navy-900/15 rounded-lg px-2.5 py-1.5 text-sm text-navy-900 disabled:opacity-50"
    >
      {STATUSES.map((s) => (
        <option key={s.value} value={s.value}>
          {s.label}
        </option>
      ))}
    </select>
  );
}

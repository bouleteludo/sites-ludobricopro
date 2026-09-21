import Link from "next/link";
import { IconCard, IconPhone } from "@/components/icons";
import { SITE } from "@/lib/site";

// Sticky call-to-action bar shown only on small screens, above the reach of a thumb.
export function MobileCta() {
  return (
    <div className="md:hidden fixed bottom-3 left-3 right-3 z-30 flex gap-2">
      <a
        href={`tel:${SITE.phoneHref}`}
        className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-white text-navy-900 font-semibold px-4 py-3 text-sm shadow-[0_12px_30px_rgba(0,0,0,0.18)] border border-navy-900/10"
      >
        <IconPhone className="h-4 w-4" />
        Appeler
      </a>
      <Link
        href="/devis"
        className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-leaf-500 text-white font-semibold px-4 py-3 text-sm shadow-[0_12px_30px_rgba(47,158,79,0.35)]"
      >
        <IconCard className="h-4 w-4" />
        Devis gratuit
      </Link>
    </div>
  );
}

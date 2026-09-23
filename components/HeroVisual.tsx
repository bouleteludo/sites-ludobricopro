"use client";

import { motion } from "framer-motion";
import { SERVICE_ICONS } from "@/components/icons";
import { OrbitBadge } from "@/components/OrbitBadge";
import { SERVICES, SITE } from "@/lib/site";

const EASE = [0.16, 1, 0.3, 1] as const;

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] aspect-[.92/1] lg:aspect-square" aria-hidden>
      <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, ease: EASE }} className="absolute inset-5 rounded-[2.5rem] bg-navy-950/[.08] blur-2xl" />
      <motion.div initial={{ opacity: 0, y: 20, rotate: -2 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ duration: 1, ease: EASE }} className="absolute inset-0 overflow-hidden rounded-[2.25rem] border border-white/70 bg-white shadow-[0_35px_90px_-35px_rgba(8,24,38,.45)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(77,187,104,.18),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(33,86,120,.18),transparent_34%)]" />
        <svg viewBox="0 0 600 600" className="absolute inset-0 h-full w-full" aria-hidden>
          <defs><linearGradient id="sky" x1="0" x2="1"><stop offset="0" stopColor="#eaf7ee"/><stop offset="1" stopColor="#e8f2f8"/></linearGradient><linearGradient id="grass" x1="0" x2="1"><stop offset="0" stopColor="#2f9e4f"/><stop offset="1" stopColor="#237a3f"/></linearGradient></defs>
          <rect x="0" y="0" width="600" height="600" fill="url(#sky)"/>
          <circle cx="490" cy="130" r="58" fill="#fff" opacity=".8"/>
          <path d="M0 390 Q145 320 280 390 T600 365 V600 H0Z" fill="url(#grass)" opacity=".95"/>
          <path d="M65 360 L285 170 L525 360" fill="#123049"/>
          <path d="M91 360 L285 200 L497 360" fill="#193f60"/>
          <rect x="115" y="335" width="345" height="170" rx="12" fill="#fff"/>
          <rect x="145" y="375" width="72" height="58" rx="7" fill="#dcecf3"/>
          <rect x="365" y="375" width="65" height="58" rx="7" fill="#dcecf3"/>
          <rect x="267" y="414" width="72" height="91" rx="9" fill="#2f9e4f"/>
          <path d="M245 505 Q290 455 335 505" fill="#237a3f" opacity=".22"/>
          <g fill="#237a3f"><circle cx="92" cy="430" r="26"/><circle cx="505" cy="430" r="34"/><circle cx="540" cy="402" r="22"/></g>
          <g fill="#4dbb68"><circle cx="67" cy="455" r="20"/><circle cx="525" cy="455" r="24"/></g>
          <path d="M105 520 Q190 478 275 525 T455 520" fill="none" stroke="#fff" strokeWidth="5" opacity=".75"/>
        </svg>

        <div className="absolute left-5 top-5 rounded-2xl border border-navy-900/10 bg-white/90 px-4 py-3 backdrop-blur">
          <p className="text-[10px] font-bold uppercase tracking-[.22em] text-leaf-600">{SITE.name}</p>
          <p className="mt-0.5 text-xs font-medium text-navy-900/70">
            {SITE.zone} · jusqu&apos;à {SITE.zoneRadiusKm} km
          </p>
        </div>

        <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-5 left-5 rounded-2xl border border-white/70 bg-navy-950 px-4 py-3 text-white shadow-xl">
          <p className="text-[10px] uppercase tracking-[.2em] text-white/55">Votre maison</p><p className="font-display text-base font-bold">en de bonnes mains</p>
        </motion.div>
      </motion.div>

      {SERVICES.map((service, i) => {
        const Icon = SERVICE_ICONS[service.icon];
        const positions = ["-left-4 top-[30%]", "-right-4 top-[22%]", "-left-3 bottom-[20%]", "-right-3 bottom-[24%]"];
        return <motion.div key={service.slug} className={`absolute ${positions[i]} z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-white bg-white text-navy-800 shadow-[0_18px_35px_-15px_rgba(8,24,38,.45)]`} initial={{ opacity: 0, scale: .7 }} animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }} transition={{ opacity: { duration: .5, delay: .45 + i*.1 }, scale: { duration: .5, delay: .45 + i*.1 }, y: { duration: 4+i*.35, repeat: Infinity, ease: "easeInOut", delay: i*.25 } }}><Icon className="h-6 w-6" /></motion.div>;
      })}
      <motion.div className="absolute -right-2 -top-3 z-20" initial={{ opacity: 0, scale: .7 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .6, delay: .7, ease: EASE }}><OrbitBadge size={112}/></motion.div>
    </div>
  );
}

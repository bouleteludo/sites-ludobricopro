"use client";

import { motion } from "framer-motion";
import { SERVICE_ICONS } from "@/components/icons";
import { OrbitBadge } from "@/components/OrbitBadge";
import { SERVICES } from "@/lib/site";

const EASE = [0.16, 1, 0.3, 1] as const;

const FLOATERS = [
  { style: { top: "2%", left: "-6%" }, delay: 0 },
  { style: { top: "64%", left: "-8%" }, delay: 0.35 },
  { style: { top: "40%", right: "-10%" }, delay: 0.7 },
  { style: { top: "72%", right: "-6%" }, delay: 1.05 },
] as const;

export function HeroVisual() {
  return (
    <div className="relative aspect-square max-w-sm mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, ease: EASE }}
        className="absolute inset-0 rounded-[2.5rem] bg-navy-900 shadow-[0_40px_90px_-30px_rgba(8,24,38,0.55)]"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
        className="absolute inset-3 rounded-[2rem] overflow-hidden bg-gradient-to-br from-leaf-500 via-leaf-600 to-navy-800"
      >
        <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMax slice" aria-hidden>
          <motion.g animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
            <polygon points="28,96 100,42 172,96" fill="rgba(8,24,38,0.88)" />
            <rect x="44" y="96" width="112" height="88" rx="6" fill="#ffffff" />
            <rect x="59" y="120" width="27" height="27" rx="3" fill="#c9e2ec" />
            <rect x="114" y="120" width="27" height="27" rx="3" fill="#c9e2ec" />
            <rect x="87" y="152" width="26" height="32" rx="4" fill="#2f9e4f" />
          </motion.g>
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 via-transparent to-white/10" />
      </motion.div>

      {SERVICES.map((service, i) => {
        const Icon = SERVICE_ICONS[service.icon];
        const floater = FLOATERS[i % FLOATERS.length];
        return (
          <motion.div
            key={service.slug}
            className="absolute h-14 w-14 rounded-2xl bg-white shadow-card flex items-center justify-center text-navy-800"
            style={floater.style}
            initial={{ opacity: 0, y: 14, scale: 0.8 }}
            animate={{ opacity: 1, y: [0, -8, 0], scale: 1 }}
            transition={{
              opacity: { duration: 0.6, delay: 0.4 + floater.delay },
              scale: { duration: 0.6, delay: 0.4 + floater.delay },
              y: { duration: 4 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: floater.delay },
            }}
          >
            <Icon className="h-6 w-6" />
          </motion.div>
        );
      })}

      <motion.div
        className="absolute -right-3 -top-3 sm:-right-5 sm:-top-5 text-white"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
      >
        <OrbitBadge size={104} />
      </motion.div>
    </div>
  );
}

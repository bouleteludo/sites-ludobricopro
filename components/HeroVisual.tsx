"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import type { PointerEvent } from "react";
import heroImg from "@/public/images/hero-facade.webp";
import { IconCard, IconPin } from "@/components/icons";
import { OrbitBadge } from "@/components/OrbitBadge";
import { SITE } from "@/lib/site";

const EASE = [0.16, 1, 0.3, 1] as const;

export function HeroVisual() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 110, damping: 18 });
  const sy = useSpring(my, { stiffness: 110, damping: 18 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [5, -5]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [-4, 4]);
  // Chips drift against the photo to create depth; the photo itself only tilts.
  const chipX = useTransform(sx, [-0.5, 0.5], [16, -16]);
  const chipY = useTransform(sy, [-0.5, 0.5], [12, -12]);

  function onMove(e: PointerEvent<HTMLDivElement>) {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div onPointerMove={onMove} onPointerLeave={onLeave} className="relative mx-auto w-full max-w-[540px] py-6">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: EASE }}
        style={{ rotateX, rotateY, transformPerspective: 1200 }}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-navy-900 shadow-[0_50px_100px_-40px_rgba(0,0,0,.85)]"
      >
        <Image
          src={heroImg}
          alt="Nettoyage haute pression d'une façade de maison"
          priority
          placeholder="blur"
          sizes="(min-width: 1024px) 540px, 92vw"
          className="aspect-[5/4] w-full object-cover object-[62%_50%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
        <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-white">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[.22em] text-leaf-300">Toiture &amp; façade</p>
            <p className="mt-1 font-display text-lg font-bold leading-tight sm:text-xl">
              Démoussage, hydrofuge,
              <br />
              nettoyage haute pression
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
        className="absolute -left-3 top-2 sm:-left-8"
      >
        <motion.div
          style={{ x: chipX, y: chipY }}
          className="flex items-center gap-3 rounded-2xl border border-white/15 bg-navy-900/70 px-4 py-3 text-white shadow-2xl backdrop-blur-md"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-leaf-400 text-navy-950">
            <IconPin className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold">{SITE.zone} &amp; alentours</span>
            <span className="block text-xs text-white/70">jusqu&apos;à {SITE.zoneRadiusKm} km</span>
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
        className="absolute -right-8 bottom-0 hidden sm:block"
      >
        <motion.div
          style={{ x: chipX, y: chipY }}
          className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-navy-950 shadow-2xl"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-leaf-100 text-leaf-700">
            <IconCard className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold">Jusqu&apos;à 3× sans frais</span>
            <span className="block text-xs text-navy-900/65">paiement en plusieurs fois</span>
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute -right-1 -top-4 text-white sm:-right-10"
        initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
        aria-hidden
      >
        <OrbitBadge size={116} />
      </motion.div>
    </div>
  );
}

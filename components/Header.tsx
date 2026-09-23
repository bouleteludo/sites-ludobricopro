"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { IconHome } from "@/components/icons";
import { SITE } from "@/lib/site";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 bg-white/95 backdrop-blur ${
        scrolled ? "border-b border-navy-900/10 shadow-sm" : "border-b border-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between py-3.5">
        <Link href="/" className="flex items-center gap-3 group" aria-label={`${SITE.name} — accueil`}>
          <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 text-white shadow-sm"><IconHome className="h-5 w-5" /><span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-leaf-500" /></span>
          <span className="font-display text-lg sm:text-xl font-bold text-navy-900 tracking-tight">
            Ludo<span className="text-leaf-600">Brico</span>Pro
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-7 text-sm font-medium">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-navy-800/80 hover:text-navy-900 transition-colors">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${SITE.phoneHref}`}
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-navy-900/15 hover:border-navy-900/30 text-navy-900 px-3.5 py-2 text-sm font-medium transition-colors"
          >
            {SITE.phone}
          </a>
          <Link
            href="/devis"
            className="inline-flex items-center justify-center rounded-full bg-leaf-500 hover:bg-leaf-600 text-white font-semibold px-4 sm:px-5 py-2.5 text-sm transition-colors"
          >
            Devis gratuit
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy-900/15 text-navy-900"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
              {open ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out border-t border-navy-900/10 bg-white ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="container py-4 flex flex-col gap-1">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={() => setOpen(false)} className="block py-3 text-navy-900 font-medium">
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/rendez-vous" onClick={() => setOpen(false)} className="block py-3 text-navy-900 font-medium">
              Prendre rendez-vous
            </Link>
          </li>
          <li>
            <a href={`tel:${SITE.phoneHref}`} className="block py-3 text-navy-900 font-medium">
              {SITE.phone}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

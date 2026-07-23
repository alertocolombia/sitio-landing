"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/brand/Logo";
import { nav, site } from "@/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white/85 backdrop-blur-md transition-[border-color] duration-200 border-b ${
        scrolled ? "border-borde" : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link
          href="/"
          className="text-azul transition-opacity duration-150 hover:opacity-80"
          aria-label="Sitio — inicio"
          onClick={() => setOpen(false)}
        >
          <Wordmark className="h-8 w-auto" />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {nav.links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gris transition-colors duration-150 hover:text-tinta"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary !px-4 !py-2.5 text-sm"
          >
            {nav.cta}
          </a>
        </div>

        {/* móvil */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary !px-3.5 !py-2 text-[13px]"
          >
            {nav.cta}
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px]"
          >
            <span
              className={`h-px w-5 bg-tinta transition-transform duration-200 ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-5 bg-tinta transition-transform duration-200 ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="menu-movil"
          className="border-t border-borde bg-white px-5 py-4 md:hidden"
        >
          {nav.links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-medium text-tinta"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

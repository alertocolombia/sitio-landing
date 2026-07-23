"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import DotField from "@/components/DotField";
import StatStrip from "@/components/ui/StatStrip";
import { hero, site } from "@/content";

function Enter({
  children,
  delay,
  className,
}: {
  children: ReactNode;
  delay: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 0.65, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* el campo de puntos: la firma de la marca */}
      <DotField className="absolute inset-0" />
      {/* velo suave para que el texto siempre gane */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/55 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-36 md:pb-28 md:pt-48">
        <Enter delay={0}>
          <p className="eyebrow text-azul">{hero.eyebrow}</p>
        </Enter>

        <Enter delay={0.08}>
          <h1 className="display mt-6 max-w-[11ch] text-[2.9rem] leading-[0.98] tracking-[-0.025em] sm:text-6xl md:text-7xl lg:text-[5.25rem] text-tinta">
            {hero.h1}
            <span className="text-azul">.</span>
          </h1>
        </Enter>

        <Enter delay={0.16}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gris md:text-xl">
            {hero.sub}
          </p>
        </Enter>

        <Enter delay={0.24}>
          <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {hero.ctaPrimario}
            </a>
            <a href="#trabajos" className="btn btn-secondary">
              {hero.ctaSecundario}
            </a>
          </div>
          <p className="eyebrow mt-5 !text-[10px] text-gris-suave">
            {hero.nota}
          </p>
        </Enter>

        <Enter delay={0.34}>
          <StatStrip stats={hero.stats} className="mt-16 md:mt-20" />
        </Enter>
      </div>
    </section>
  );
}

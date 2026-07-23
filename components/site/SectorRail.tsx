"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { businessSectors } from "@/content/site";

type Sector = (typeof businessSectors)[number];

function SectorCard({ sector, duplicate = false }: { sector: Sector; duplicate?: boolean }) {
  return (
    <article
      className={`sector-card sector-card--${sector.tone}`}
      aria-hidden={duplicate || undefined}
    >
      <div className="sector-card__topline">
        <span>{sector.eyebrow}</span>
        <b>{sector.name}</b>
      </div>

      <h3>{sector.title}</h3>
      <p>{sector.description}</p>

      <ul>
        {sector.results.map((result) => <li key={result}>{result}</li>)}
      </ul>

      <a href={sector.href} target="_blank" rel="noreferrer" tabIndex={duplicate ? -1 : undefined}>
        {sector.cta} <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}

export default function SectorRail() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const firstGroupRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const visibleRef = useRef(false);
  const resumeTimerRef = useRef<number | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const viewport = viewportRef.current;
    const group = firstGroupRef.current;
    if (!viewport || !group) return;

    let animationFrame = 0;
    let previousTime = 0;
    const observer = new IntersectionObserver(
      ([entry]) => { visibleRef.current = entry.isIntersecting; },
      { threshold: 0.18 },
    );

    observer.observe(viewport);

    const move = (time: number) => {
      if (!previousTime) previousTime = time;
      const elapsed = Math.min(time - previousTime, 32);
      previousTime = time;

      if (visibleRef.current && !pausedRef.current) {
        viewport.scrollLeft += elapsed * 0.022;
        const track = group.parentElement;
        const gap = track ? Number.parseFloat(getComputedStyle(track).columnGap || "0") : 0;
        const loopPoint = group.offsetWidth + gap;

        if (loopPoint > 0 && viewport.scrollLeft >= loopPoint) {
          viewport.scrollLeft -= loopPoint;
        }
      }

      animationFrame = window.requestAnimationFrame(move);
    };

    animationFrame = window.requestAnimationFrame(move);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
    };
  }, [reducedMotion]);

  const navigate = (direction: -1 | 1) => {
    const viewport = viewportRef.current;
    const group = firstGroupRef.current;
    if (!viewport || !group) return;

    const track = group.parentElement;
    const gap = track ? Number.parseFloat(getComputedStyle(track).columnGap || "0") : 0;
    const loopPoint = group.offsetWidth + gap;
    const distance = Math.min(viewport.clientWidth * 0.72, 760);

    if (direction === -1 && viewport.scrollLeft < distance && loopPoint > 0) {
      viewport.scrollLeft += loopPoint;
    }

    pausedRef.current = true;
    if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
    viewport.scrollBy({ left: distance * direction, behavior: "smooth" });
    resumeTimerRef.current = window.setTimeout(() => {
      pausedRef.current = false;
    }, 720);
  };

  return (
    <div className="sector-carousel">
      <div className="sector-carousel__controls site-shell">
        <button type="button" onClick={() => navigate(-1)} aria-label="Ver sector anterior">←</button>
        <button type="button" onClick={() => navigate(1)} aria-label="Ver sector siguiente">→</button>
      </div>

      <div
        className="sector-carousel__viewport"
        ref={viewportRef}
        tabIndex={0}
        aria-label="Soluciones web por sector. Usa las flechas para navegar."
        onPointerEnter={() => { pausedRef.current = true; }}
        onPointerLeave={() => { pausedRef.current = false; }}
        onPointerDown={() => { pausedRef.current = true; }}
        onPointerUp={() => { pausedRef.current = false; }}
        onFocusCapture={() => { pausedRef.current = true; }}
        onBlurCapture={() => { pausedRef.current = false; }}
      >
        <div className="sector-carousel__track">
          <div className="sector-carousel__group" ref={firstGroupRef}>
            {businessSectors.map((sector) => <SectorCard sector={sector} key={sector.name} />)}
          </div>
          <div className="sector-carousel__group" aria-hidden="true">
            {businessSectors.map((sector) => <SectorCard sector={sector} duplicate key={`duplicate-${sector.name}`} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

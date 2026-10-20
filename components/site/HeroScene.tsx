"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { WORDMARK_DOT } from "@/components/brand/Logo";
import styles from "./Hero.module.css";

export default function HeroScene({ children }: { children: ReactNode }) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const pin = pinRef.current;
    const overlay = dotRef.current;
    const bundle = scene?.nextElementSibling instanceof HTMLElement ? scene.nextElementSibling : null;
    const hero = scene?.querySelector<HTMLElement>("#hero-intro");
    const dot = scene?.querySelector<SVGGraphicsElement>("#hero-logo-dot");
    if (!scene || !pin || !overlay || !hero || !dot) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let enabled = false;
    let disposed = false;
    let start = 0;
    let distance = 1;
    let maxScale = 1;
    let previous = -1;
    let needsMeasure = false;

    function render() {
      frame = 0;
      if (document.body.style.position === "fixed") return;
      if (needsMeasure) { measure(); return; }
      if (!enabled || !scene || !hero) return;
      const progress = Math.max(0, Math.min(1, (window.scrollY - start) / distance));
      if (progress === previous) return;
      previous = progress;
      const scale = 1 + (maxScale - 1) * Math.pow(progress, 1.6);
      scene.style.setProperty("--dot-scale", String(scale));
      scene.style.setProperty("--intro-opacity", String(Math.max(0, 1 - progress * 1.8)));
      scene.dataset.progress = String(Math.round(progress * 100));
      const reveal = Math.max(0, Math.min(1, (progress - 0.68) / 0.22));
      bundle?.style.setProperty("--bundle-opacity", String(reveal));
      if (bundle) bundle.style.pointerEvents = reveal > 0.05 ? "" : "none";
      hero.inert = progress > 0.56;
    }
    function measure() {
      if (disposed || !scene || !pin || !overlay || !hero || !dot) return;
      if (document.body.style.position === "fixed") { needsMeasure = true; return; }
      needsMeasure = false;
      // A normal document flow is the default, including without JS and on short screens.
      enabled = bundle?.id === "presencia" && !reduced.matches && window.innerHeight >= 620 && hero.scrollHeight <= window.innerHeight + 4;
      scene.dataset.enhanced = String(enabled);
      if (!enabled) {
        hero.inert = false;
        scene.style.removeProperty("--intro-opacity");
        bundle?.style.removeProperty("--bundle-opacity");
        if (bundle) bundle.style.pointerEvents = "";
        scene.dataset.progress = "0";
        previous = -1;
        return;
      }
      const box = dot.getBoundingClientRect();
      const pinBox = pin.getBoundingClientRect();
      const x = box.left - pinBox.left + box.width / 2;
      const y = box.top - pinBox.top + box.height / 2;
      const bounds = dot.getBBox();
      overlay.setAttribute("viewBox", `${bounds.x} ${bounds.y} ${bounds.width} ${bounds.height}`);
      scene.style.setProperty("--dot-x", `${x}px`);
      scene.style.setProperty("--dot-y", `${y}px`);
      scene.style.setProperty("--dot-width", `${box.width}px`);
      scene.style.setProperty("--dot-height", `${box.height}px`);
      const corner = Math.hypot(Math.max(x, pinBox.width - x), Math.max(y, pinBox.height - y));
      maxScale = corner / Math.max(1, Math.min(box.width, box.height) * 0.28) + 2;
      start = window.scrollY + scene.getBoundingClientRect().top;
      distance = Math.max(1, scene.offsetHeight - pinBox.height);
      previous = -1;
      render();
    }
    function onScroll() {
      if ((enabled || needsMeasure) && !frame) frame = requestAnimationFrame(render);
    }
    measure();
    void document.fonts.ready.then(measure);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure, { passive: true });
    reduced.addEventListener("change", measure);
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      reduced.removeEventListener("change", measure);
      hero.inert = false;
      bundle?.style.removeProperty("--bundle-opacity");
      if (bundle) bundle.style.pointerEvents = "";
    };
  }, []);

  return (
    <div ref={sceneRef} className={styles.scene} id="inicio">
      <div ref={pinRef} className={styles.pin}>
        {children}
        <div className={styles.curtain} aria-hidden="true">
          <svg ref={dotRef} className={styles.curtainDot} viewBox="730 292 70 124"><path d={WORDMARK_DOT} fill="currentColor" /></svg>
        </div>
      </div>
    </div>
  );
}

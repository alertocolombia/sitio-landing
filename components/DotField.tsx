"use client";

import { useEffect, useRef } from "react";

type Props = {
  /** Color de los puntos (hex). Azul sobre blanco, blanco sobre azul. */
  color?: string;
  /** Separación del grid en px. */
  spacing?: number;
  /** Centro del bloom que respira, en fracciones del ancho/alto. */
  breathCenter?: [number, number];
  className?: string;
};

/* smoothstep radial: 1 en el centro, 0 en el borde */
function field(d: number, r: number) {
  const v = 1 - d / r;
  return v > 0 ? v * v * (3 - 2 * v) : 0;
}

function hexToRgb(hex: string) {
  const n = parseInt(hex.replace("#", ""), 16);
  return `${(n >> 16) & 255},${(n >> 8) & 255},${n & 255}`;
}

/**
 * El fondo vivo de la marca: campo de puntos que respira solo
 * (bloom radial lento) y reacciona al cursor (halo con lerp 0.12;
 * los puntos cercanos crecen, se iluminan y se apartan suave).
 * Con prefers-reduced-motion: un solo render estático, sin loop.
 */
export default function DotField({
  color = "#0054FC",
  spacing = 26,
  breathCenter = [0.66, 0.38],
  className,
}: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // alias con tipo fijo: TS pierde el narrowing dentro de los closures
    const el: HTMLCanvasElement = canvas;
    const c: CanvasRenderingContext2D = ctx;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const rgb = hexToRgb(color);
    const host = el.parentElement ?? el;

    let w = 0;
    let h = 0;
    let raf = 0;
    let inView = true;
    let pageVisible = true;

    // cursor: target (tx,ty) y posición suavizada (x,y); on = fuerza del halo
    const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999, on: 0, ton: 0 };

    function resize() {
      const rect = host.getBoundingClientRect();
      w = Math.max(1, Math.round(rect.width));
      h = Math.max(1, Math.round(rect.height));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      el.width = w * dpr;
      el.height = h * dpr;
      el.style.width = `${w}px`;
      el.style.height = `${h}px`;
      c.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduced) draw(0);
    }

    function draw(t: number) {
      c.clearRect(0, 0, w, h);

      // bloom central que respira
      const cx = w * breathCenter[0];
      const cy = h * breathCenter[1];
      const breath = reduced ? 0.6 : 0.5 + 0.5 * Math.sin(t * 0.00045);
      const R = Math.max(w, h) * (0.34 + 0.16 * breath);
      const breathStrength = 0.3 + 0.32 * breath;

      // halo del cursor (lerp ~0.12)
      mouse.x += (mouse.tx - mouse.x) * 0.12;
      mouse.y += (mouse.ty - mouse.y) * 0.12;
      mouse.on += (mouse.ton - mouse.on) * 0.08;
      const halo = 230;

      for (let gy = spacing / 2; gy < h + spacing / 2; gy += spacing) {
        for (let gx = spacing / 2; gx < w + spacing / 2; gx += spacing) {
          const f1 = field(Math.hypot(gx - cx, gy - cy), R) * breathStrength;
          const dM = Math.hypot(gx - mouse.x, gy - mouse.y);
          const f2 = field(dM, halo) * mouse.on;
          // mezcla "screen" de ambos blooms
          const f = 1 - (1 - f1) * (1 - f2);

          const r = 0.7 + f * 2.7;
          const a = 0.05 + f * 0.82;

          // los puntos cercanos al cursor se apartan suavemente
          let x = gx;
          let y = gy;
          if (f2 > 0.001 && dM > 0.5) {
            const push = f2 * 8;
            x += ((gx - mouse.x) / dM) * push;
            y += ((gy - mouse.y) / dM) * push;
          }

          c.globalAlpha = a;
          c.fillStyle = `rgb(${rgb})`;
          c.beginPath();
          c.arc(x, y, r, 0, Math.PI * 2);
          c.fill();
        }
      }
      c.globalAlpha = 1;
    }

    function loop(t: number) {
      draw(t);
      raf = requestAnimationFrame(loop);
    }

    function start() {
      if (reduced || raf || !inView || !pageVisible) return;
      raf = requestAnimationFrame(loop);
    }
    function stop() {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    }

    function onPointerMove(e: PointerEvent) {
      const rect = el.getBoundingClientRect();
      mouse.tx = e.clientX - rect.left;
      mouse.ty = e.clientY - rect.top;
      mouse.ton = 1;
    }
    function onPointerLeave() {
      mouse.ton = 0;
    }

    const ro = new ResizeObserver(resize);
    ro.observe(host);
    resize();

    const io = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (inView) start();
      else stop();
    });
    io.observe(host);

    function onVisibility() {
      pageVisible = document.visibilityState === "visible";
      if (pageVisible) start();
      else stop();
    }

    if (!reduced) {
      host.addEventListener("pointermove", onPointerMove, { passive: true });
      host.addEventListener("pointerleave", onPointerLeave, { passive: true });
      document.addEventListener("visibilitychange", onVisibility);
      start();
    }

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      host.removeEventListener("pointermove", onPointerMove);
      host.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [color, spacing, breathCenter]);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}

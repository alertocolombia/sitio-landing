"use client";

import { useEffect, useRef, useState } from "react";

const DEMO_W = 1280;
const DEMO_H = 800;

/**
 * Marco tipo navegador para mostrar demos. Si hay `src`, renderiza el
 * demo real en un iframe escalado (carga solo al entrar al viewport).
 * Si no, muestra un placeholder de puntos de marca.
 */
export default function BrowserFrame({
  url,
  src,
}: {
  url: string;
  src?: string | null;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);
  const [nearView, setNearView] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const ro = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / DEMO_W);
    });
    ro.observe(host);
    // monta el iframe solo cuando el marco se acerca al viewport
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNearView(true);
          io.disconnect();
        }
      },
      { rootMargin: "600px 0px" }
    );
    io.observe(host);
    return () => {
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <div className="overflow-hidden rounded-xl border border-borde bg-white">
      {/* barra del navegador */}
      <div className="flex items-center gap-3 border-b border-borde bg-fondo-alt px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-borde" />
          <span className="size-2.5 rounded-full bg-borde" />
          <span className="size-2.5 rounded-full bg-borde" />
        </div>
        <span className="font-mono text-[10px] tracking-wider text-gris-suave truncate">
          {url}
        </span>
      </div>

      {/* viewport */}
      <div
        ref={hostRef}
        className="relative aspect-[16/10] overflow-hidden bg-white"
      >
        {src && nearView && scale > 0 ? (
          <iframe
            src={src}
            title={`Demo: ${url}`}
            tabIndex={-1}
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 origin-top-left border-0"
            style={{
              width: DEMO_W,
              height: DEMO_H,
              transform: `scale(${scale})`,
            }}
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(0,84,252,0.16) 1.1px, transparent 1.3px)",
              backgroundSize: "18px 18px",
            }}
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );
}

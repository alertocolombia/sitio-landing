"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Wordmark } from "@/components/brand/Logo";
import { navigation, whatsappLinks } from "@/content/site";

const COMPACT = "(max-width: 640px)";

/** Suscripción real al media query: también reacciona al girar el teléfono. */
function subscribeCompact(onChange: () => void) {
  const mq = window.matchMedia(COMPACT);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  // Por debajo de 640px `.site-nav--hidden` no produce ningún efecto visual
  // (transform: none), así que el listener corría en cada gesto para nada.
  const compact = useSyncExternalStore(
    subscribeCompact,
    () => window.matchMedia(COMPACT).matches,
    () => false,
  );

  useEffect(() => {
    if (compact) return;

    const onScroll = () => {
      const current = window.scrollY;
      setHidden(current > lastY.current && current > 120 && !open);
      lastY.current = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open, compact]);

  // Con el menú abierto la página seguía desplazándose por detrás y se podía
  // llegar al final sin cerrarlo. `overflow: hidden` en body no frena a Safari
  // en iOS; la técnica que sí funciona es fijar el body conservando el scroll.
  useEffect(() => {
    if (!open) return;

    const y = window.scrollY;
    const { body } = document;
    const previous = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
    };

    body.style.position = "fixed";
    body.style.top = `-${y}px`;
    body.style.left = "0";
    body.style.right = "0";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      body.style.position = previous.position;
      body.style.top = previous.top;
      body.style.left = previous.left;
      body.style.right = previous.right;
      document.removeEventListener("keydown", onKeyDown);
      window.scrollTo(0, y);
    };
  }, [open]);

  return (
    <header className={`site-nav ${hidden && !compact ? "site-nav--hidden" : ""}`}>
      <nav className="site-shell site-nav__inner" aria-label="Navegación principal">
        <a href="#inicio" aria-label="Sitio, volver al inicio" className="site-nav__logo">
          <Wordmark className="h-8 w-auto" />
        </a>

        <div className="site-nav__links">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <a className="site-button site-button--small" href={whatsappLinks.general} target="_blank" rel="noreferrer">
          Hablemos
        </a>

        <button
          className="site-menu"
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </nav>

      {open && (
        <div className="site-mobile-menu">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

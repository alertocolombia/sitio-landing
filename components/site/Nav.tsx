"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Wordmark } from "@/components/brand/Logo";
import { navigation, whatsappLinks } from "@/content/site";
import heroStyles from "./Hero.module.css";

const COMPACT = "(max-width: 640px)";

/** Suscripción real al media query: también reacciona al girar el teléfono. */
function subscribeCompact(onChange: () => void) {
  const mq = window.matchMedia(COMPACT);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

export default function Nav({ blendHero = false }: { blendHero?: boolean }) {
  const header = useRef<HTMLElement>(null);
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
    if (!blendHero) return;
    const scene = document.getElementById("inicio");
    const products = document.getElementById("presencia");
    const lightPanel = products?.querySelector<HTMLElement>('[data-nav-surface="light"]');
    let frame = 0;
    function updateSurface() {
      frame = 0;
      if (!header.current || !products || document.body.style.position === "fixed") return;
      const bounds = products.getBoundingClientRect();
      const lightBounds = lightPanel?.getBoundingClientRect();
      const overLightPanel = lightBounds && lightBounds.top <= 72 && lightBounds.bottom > 36;
      const revealing = scene?.dataset.enhanced === "true" && Number(scene.dataset.progress) >= 50;
      const overProducts = bounds.top <= 72 && bounds.bottom > 36;
      header.current.dataset.surface = bounds.bottom <= 36 ? "default" : overLightPanel ? "light" : revealing || overProducts ? "blue" : "hero";
    }
    function schedule() {
      if (!frame) frame = requestAnimationFrame(updateSurface);
    }
    updateSurface();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [blendHero]);

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
      window.scrollTo({ top: y, left: 0, behavior: "instant" });
    };
  }, [open]);

  return (
    <header ref={header} className={`site-nav ${hidden && !compact ? "site-nav--hidden" : ""} ${blendHero ? heroStyles.navBlend : ""}`}>
      <nav className="site-shell site-nav__inner" aria-label="Navegación principal">
        <a href="#inicio" aria-label="Sitio, volver al inicio" className="site-nav__logo">
          <Wordmark className="h-8 w-auto" />
        </a>

        <div className="site-nav__links">
          {navigation.map((item) => (
            <a key={item.href} href={blendHero && item.href === "#servicios" ? "#presencia" : item.href}>
              {blendHero && item.href === "#servicios" ? "Productos" : item.label}
            </a>
          ))}
        </div>

        <a className={heroStyles.navContact} href={whatsappLinks.general} target="_blank" rel="noreferrer" aria-label="Contáctanos 24/7 por WhatsApp">
          Contáctanos 24/7 <span aria-hidden="true">↗</span>
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
            <a key={item.href} href={blendHero && item.href === "#servicios" ? "#presencia" : item.href} onClick={() => setOpen(false)}>
              {blendHero && item.href === "#servicios" ? "Productos" : item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

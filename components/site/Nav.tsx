"use client";

import { useEffect, useRef, useState } from "react";
import { Wordmark } from "@/components/brand/Logo";
import { navigation, whatsappLinks } from "@/content/site";

export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setHidden(current > lastY.current && current > 120 && !open);
      lastY.current = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <header className={`site-nav ${hidden ? "site-nav--hidden" : ""}`}>
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

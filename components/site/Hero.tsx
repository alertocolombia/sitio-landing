"use client";

import { motion, useReducedMotion } from "framer-motion";
import { whatsappLinks } from "@/content/site";
import TechMarquee from "./TechMarquee";

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section id="inicio" className="hero-section">
      <div className="coordinate-grid" aria-hidden="true">
        <span className="coordinate-grid__axis coordinate-grid__axis--x" />
        <span className="coordinate-grid__axis coordinate-grid__axis--y" />
        <span className="coordinate-grid__label">CO / WEB / 001</span>
      </div>

      <div className="site-shell hero-layout">
        <motion.p
          className="site-eyebrow"
          initial={reduced ? false : { y: 10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.45 }}
        >
          PÁGINAS WEB PARA NEGOCIOS EN COLOMBIA
        </motion.p>

        <div className="hero-content">
          <div className="hero-statement">
            <h1>
              <motion.span
                initial={reduced ? false : { y: 34 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.08, ease: [0.2, 0.8, 0.2, 1] }}
              >
                Tú vendes.
              </motion.span>
              {" "}
              <motion.span
                initial={reduced ? false : { y: 34 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.16, ease: [0.2, 0.8, 0.2, 1] }}
              >
                Nosotros resolvemos
              </motion.span>
              {" "}
              <motion.span
                initial={reduced ? false : { y: 34 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.24, ease: [0.2, 0.8, 0.2, 1] }}
              >
                tu página.
              </motion.span>
            </h1>

            <motion.p
              className="hero-promise"
              initial={reduced ? false : { y: 16 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.55, delay: 0.52 }}
            >
              La diseñamos, conectamos y publicamos para que las personas puedan escribirte, reservar o comprar sin que tú tengas que aprender tecnología.
            </motion.p>
          </div>

          <motion.aside
            className="hero-cta-panel"
            initial={reduced ? false : { y: 18 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.58, delay: 0.42 }}
          >
            <p className="site-eyebrow">PRIMERA ORIENTACIÓN · SIN COSTO</p>
            <h2>Descubre qué página necesita tu negocio.</h2>
            <p>
              Cuéntanos qué vendes y qué necesitas que pase. Te recomendamos una opción, te damos un precio y te decimos cuándo puede estar lista.
            </p>
            <div className="hero-actions">
              <a className="site-button" href={whatsappLinks.hero} target="_blank" rel="noreferrer">
                Saber qué página necesito <span>↗</span>
              </a>
              <a className="site-text-link" href="#precios">Ver precios <span>↓</span></a>
            </div>
            <small className="hero-cta-note">
              Se abre WhatsApp con un mensaje guía. Responder no te compromete a nada.
            </small>
          </motion.aside>
        </div>

      </div>

      <div className="hero-technologies">
        <div className="site-shell">
          <TechMarquee />
        </div>
      </div>
    </section>
  );
}

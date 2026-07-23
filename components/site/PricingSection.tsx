"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { pricing } from "@/content/site";
import Reveal from "./Reveal";

export default function PricingSection() {
  const section = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start end", "end start"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });

  return (
    <section id="precios" className="pricing-section" ref={section}>
      <motion.div
        className="pricing-progress"
        aria-hidden="true"
        style={reduced ? { scaleX: 1 } : { scaleX: progress }}
      />

      <div className="site-shell">
        <Reveal className="pricing-heading">
          <div>
            <p className="site-eyebrow">PLANES Y PRECIOS</p>
          </div>
          <h2>El precio claro. La <span className="no-orphan">decisión fácil.</span></h2>
          <p>Elige un punto de partida. El alcance queda escrito y el valor se acuerda antes de empezar.</p>
        </Reveal>

        <div className="pricing-grid">
          {pricing.map((plan, index) => (
            <motion.div
              className="pricing-card-motion"
              key={plan.name}
              initial={reduced ? false : { opacity: 0, y: 56, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={reduced ? undefined : { y: -8 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{
                duration: 0.72,
                delay: reduced ? 0 : index * 0.08,
                ease: [0.22, 0.72, 0.24, 1],
              }}
            >
              <article className={`price-card ${plan.featured ? "price-card--featured" : ""}`}>
                <div className="price-card__topline">
                  <span>{plan.discount}</span>
                  {plan.featured && <strong>RECOMENDADO</strong>}
                </div>
                <p className="site-eyebrow">{plan.timing}</p>
                <h3>{plan.name}</h3>
                <p className="price-card__audience">{plan.audience}</p>
                <div className="price-card__price">
                  <s>{plan.regularPrice}</s>
                  <div><b>{plan.price}</b><span>{plan.currency}</span></div>
                </div>
                <ul>
                  {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
                <p className="price-card__bonus"><span>{index === 0 ? "EXTRAS" : "REGALO INCLUIDO"}</span>{plan.bonus}</p>
                <a className={`site-button ${plan.featured ? "site-button--inverse" : ""}`} href={plan.whatsapp} target="_blank" rel="noreferrer">
                  {plan.cta} <span>↗</span>
                </a>
              </article>
            </motion.div>
          ))}
        </div>

        <Reveal className="pricing-note">
          <b>Sin cobros sorpresa.</b>
          <p>Desde Página para tu negocio no cobramos cada sección o interacción visual por separado. Funciones especiales, licencias y conexiones externas se cotizan antes de construir.</p>
        </Reveal>
      </div>
    </section>
  );
}

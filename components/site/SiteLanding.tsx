import { Wordmark } from "@/components/brand/Logo";
import {
  faqs,
  process,
  site,
  trustPoints,
  whatsappLinks,
} from "@/content/site";
import Hero from "./Hero";
import Nav from "./Nav";
import PricingSection from "./PricingSection";
import Reveal from "./Reveal";
import SectorRail from "./SectorRail";
import WorkRail from "./WorkRail";
import PresenceBundle from "./PresenceBundle";
import HeroShowcase from "./HeroShowcase";
import InstagramSection from "./InstagramSection";

export default function SiteLanding() {
  return (
    <>
      <Nav blendHero />
      <main>
        <Hero />
        <PresenceBundle />
        <HeroShowcase />

        <section id="tranquilidad" className="thesis-section">
          <div className="thesis-grid">
            <Reveal className="thesis-index">
              <p className="site-eyebrow">DE TU LADO</p>
              <p className="thesis-mantra">TÚ VENDES.<br />NOSOTROS<br />RESOLVEMOS.</p>
            </Reveal>
            <Reveal className="thesis-copy" delay={0.08}>
              <p className="site-eyebrow">UNA PÁGINA MENOS EN TU CABEZA</p>
              <h2>Tu negocio ya te pide suficiente. <em>Tu página no debería <span className="no-orphan">pedirte más.</span></em></h2>
              <div className="thesis-reasons">
                <article>
                  <span>LO RESOLVEMOS COMPLETO</span>
                  <p>Mensaje, diseño, conexiones y publicación, pensados como una sola página.</p>
                </article>
                <article>
                  <span>TE DEVOLVEMOS EL FOCO</span>
                  <p>Tú sigues atendiendo clientes y moviendo el negocio. Nosotros hacemos que la página esté lista.</p>
                </article>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="servicios" className="services-section">
          <div className="site-shell">
            <Reveal className="sector-heading">
              <h2>Si no te encuentran, <em>no pueden elegirte.</em></h2>
              <p>Tu cliente ya está buscando. Diseñamos páginas que convierten esa búsqueda en confianza, contacto o compra. Explora la solución para tu negocio.</p>
            </Reveal>
          </div>
          <SectorRail />
        </section>

        <section className="blue-section">
          <div className="site-shell blue-grid">
            <Reveal className="blue-promise">
              <h2>Que Google te encuentre. <em>Que la IA sepa <span className="no-orphan">quién eres.</span></em></h2>
            </Reveal>
            <Reveal className="blue-proof" delay={0.1}>
              <p>Creamos una página que no solo se ve bien: organizamos tus servicios, ubicación, experiencia y contactos para que Google comprenda tu negocio y los sistemas de IA tengan información clara para mostrarte cuando alguien busque lo que haces.</p>
              <a className="site-button site-button--inverse" href={whatsappLinks.google} target="_blank" rel="noreferrer">
                Quiero que encuentren mi negocio <span>↗</span>
              </a>
              <small>No prometemos el primer lugar: construimos la base correcta para competir, aparecer y medir.</small>
            </Reveal>
          </div>
        </section>

        <section id="proceso" className="process-section">
          <div className="site-shell process-grid">
            <Reveal className="process-intro">
              <p className="site-eyebrow">ASÍ DE SIMPLE</p>
              <h2>De tu idea a una <span className="no-orphan">página real.</span></h2>
              <p>
                Tú no necesitas aprender diseño, código o plataformas. Te mostramos cada paso y dejamos todo funcionando.
              </p>
            </Reveal>

            <ol className="process-list">
              {process.map((step, index) => (
                <li key={step.title}>
                  <Reveal delay={index * 0.045}>
                    <div><h3>{step.title}</h3><p>{step.text}</p></div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <WorkRail />

        <PricingSection />

        <section id="confianza" className="trust-section">
          <div className="site-shell">
            <Reveal className="trust-heading">
              <p className="site-eyebrow">ANTES DE EMPEZAR</p>
              <h2>Tu página, tu negocio, <span className="no-orphan">tu control.</span></h2>
              <p>Estas reglas reducen las dudas desde el primer día y evitan sorpresas cuando llegue el momento de publicar.</p>
            </Reveal>

            <div className="trust-list">
              {trustPoints.map((point, index) => (
                <Reveal key={point.title} delay={(index % 2) * 0.06}>
                  <article className="trust-card">
                    <h3>{point.title}</h3>
                    <p>{point.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="estudio" className="studio-section">
          <div className="site-shell">
            <div className="studio-grid">
              <Reveal className="studio-mark"><Wordmark className="w-full h-auto" /></Reveal>
              <Reveal className="studio-copy" delay={0.08}>
                <p className="site-eyebrow">SANTIAGO + MAFE</p>
                <h2>Tu negocio primero. La parte difícil, <span className="no-orphan">con nosotros.</span></h2>
                <p>
                  Sitio es un estudio colombiano dirigido por Santiago y Mafe. Escuchamos lo que necesitas y lo convertimos en una página clara, atractiva y fácil de usar.
                </p>
                <p>
                  Usamos inteligencia artificial para investigar, probar y perfeccionar más rápido; tú recibes mejor trabajo, en menos tiempo y a un precio más justo.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <InstagramSection />

        <section className="faq-section">
          <div className="site-shell faq-grid">
            <Reveal className="faq-title">
              <p className="site-eyebrow">PREGUNTAS FRECUENTES</p>
              <h2>Lo importante, sin <span className="no-orphan">letra menuda.</span></h2>
            </Reveal>
            <div className="faq-list">
              {faqs.map((item, index) => (
                <Reveal key={item.question} delay={index * 0.035}>
                  <details>
                    <summary><span>{item.question}</span><i aria-hidden="true">+</i></summary>
                    <p>{item.answer}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="final-section">
          <div className="coordinate-grid coordinate-grid--inverse" aria-hidden="true" />
          <div className="site-shell final-grid">
            <Reveal>
              <p className="site-eyebrow">TU SIGUIENTE PASO</p>
              <h2>Tú vendes. Nosotros resolvemos <span className="no-orphan">tu página.</span></h2>
            </Reveal>
            <Reveal className="final-action" delay={0.1}>
              <a href={whatsappLinks.final} target="_blank" rel="noreferrer">Contarnos sobre mi negocio <span>↗</span></a>
              <p>Se abre WhatsApp con una guía breve para contarnos qué vendes y qué necesitas.</p>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-shell">
          <div><Wordmark className="h-9 w-auto" /><p>Páginas que venden.</p></div>
          <div>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.instagramUrl} target="_blank" rel="noreferrer">{site.instagram}</a>
            <a href={whatsappLinks.general} target="_blank" rel="noreferrer">{site.phone}</a>
          </div>
          <p>© {new Date().getFullYear()} SITIO · COLOMBIA</p>
        </div>
      </footer>
    </>
  );
}

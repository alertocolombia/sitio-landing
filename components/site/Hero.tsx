import { whatsappLinks } from "@/content/site";
import TechMarquee from "./TechMarquee";

/**
 * La entrada del hero es CSS puro (ver `.hero-line__inner` y compañía en
 * globals.css). Sin framer-motion el SSR no emite ningún `style` inline, así que
 * el hero llega bien colocado aunque el JS falle, y `prefers-reduced-motion` lo
 * resuelve el navegador en el primer paint en vez de tras hidratar.
 */
export default function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="coordinate-grid" aria-hidden="true">
        <span className="coordinate-grid__axis coordinate-grid__axis--x" />
        <span className="coordinate-grid__axis coordinate-grid__axis--y" />
      </div>

      <div className="site-shell hero-layout">
        <p className="site-eyebrow">PÁGINAS WEB PARA NEGOCIOS EN COLOMBIA</p>

        <div className="hero-content">
          <div className="hero-statement">
            <h1>
              <span><span className="hero-line__inner">Tú vendes.</span></span>
              {" "}
              <span><span className="hero-line__inner">Nosotros resolvemos</span></span>
              {" "}
              <span><span className="hero-line__inner">tu página.</span></span>
            </h1>

            <p className="hero-promise">
              La diseñamos, conectamos y publicamos para que las personas puedan escribirte, reservar o comprar sin que tú tengas que aprender tecnología.
            </p>
          </div>

          <aside className="hero-cta-panel">
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
          </aside>
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

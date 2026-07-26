import Image from "next/image";
import Link from "next/link";
import { Wordmark } from "@/components/brand/Logo";

type CaseStudyProps = {
  accent: "alerto" | "aula" | "ciclo" | "vigor";
  projectLabel?: "PROYECTO REAL" | "DEMO FUNCIONAL";
  category: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  features: readonly string[];
  images: readonly {
    src: string;
    alt: string;
    caption: string;
  }[];
  livePreview?: {
    src: string;
    title: string;
    caption: string;
  };
};

export default function CaseStudy({
  accent,
  projectLabel = "PROYECTO REAL",
  category,
  title,
  summary,
  challenge,
  solution,
  features,
  images,
  livePreview,
}: CaseStudyProps) {
  return (
    <main className={`case-page case-page--${accent}`}>
      <nav className="case-nav site-shell" aria-label="Navegación del caso">
        <Link href="/#trabajos" aria-label="Volver al portafolio de Sitio">
          <Wordmark className="case-nav__logo" />
        </Link>
        <Link href="/#trabajos">← Volver al portafolio</Link>
      </nav>

      <header className="case-hero site-shell">
        <p className="site-eyebrow">{projectLabel} · {category}</p>
        <h1>{title}</h1>
        <p>{summary}</p>
        <ul aria-label="Componentes del proyecto">
          {features.map((feature) => <li key={feature}>{feature}</li>)}
        </ul>
      </header>

      <section className="case-story site-shell" aria-label="Resumen del proyecto">
        <article>
          <p className="site-eyebrow">EL RETO</p>
          <h2>{challenge}</h2>
        </article>
        <article>
          <p className="site-eyebrow">LA RESPUESTA</p>
          <p>{solution}</p>
        </article>
      </section>

      <section className="case-gallery site-shell" aria-label="Vistas reales del proyecto">
        {livePreview ? (
          <figure className="case-gallery__live">
            <div className="case-browser">
              <div className="case-browser__bar" aria-hidden="true">
                <b>PROYECTO FUNCIONAL</b>
              </div>
              <div className="case-browser__canvas case-browser__canvas--live">
                <iframe
                  src={livePreview.src}
                  title={livePreview.title}
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-downloads"
                />
              </div>
            </div>
            <div className="case-gallery__live-caption">
              <figcaption>{livePreview.caption}</figcaption>
              <a href={livePreview.src} target="_blank" rel="noreferrer">
                Abrir en pantalla completa <span>↗</span>
              </a>
            </div>
          </figure>
        ) : null}
        {images.map((image) => (
          <figure key={image.src}>
            <div className="case-browser">
              <div className="case-browser__bar" aria-hidden="true">
                <b>PANTALLA DEL PROYECTO</b>
              </div>
              <div className="case-browser__canvas">
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 899px) 90vw, (max-width: 1565px) 92vw, 1440px" />
              </div>
            </div>
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </section>

      <section className="case-next site-shell">
        <p className="site-eyebrow">TU NEGOCIO PUEDE SER EL SIGUIENTE</p>
        <h2>Una página bonita llama la atención. Una bien pensada mueve a la gente.</h2>
        <Link href="/#contacto">Hablemos de tu página <span>↗</span></Link>
      </section>
    </main>
  );
}

import Image from "next/image";
import type { ReactNode } from "react";
import { individualProducts, presencePackage } from "@/content/presence";
import DemoRequest from "./DemoRequest";
import styles from "./PresenceBundle.module.css";

function ProductIcon({ type }: { type: string }) {
  const paths: Record<string, ReactNode> = {
    pagina: <><rect x="3" y="5" width="26" height="22" rx="3" /><path d="M3 11h26M8 8h.01M12 8h.01M8 16h9M8 21h15" /></>,
    tienda: <><path d="M6 12h20l-2 16H8L6 12Z" /><path d="M11 12V8a5 5 0 0 1 10 0v4M12 19h.01M20 19h.01" /></>,
    portafolio: <><rect x="3" y="6" width="26" height="20" rx="3" /><path d="M11 6v20M11 16h18M7 11h.01M17 11h6M17 21h6" /></>,
    solucion: <><rect x="2" y="3" width="10" height="9" rx="2" /><rect x="20" y="20" width="10" height="9" rx="2" /><path d="M7 12v8a5 5 0 0 0 5 5h8M20 7h5v6M22 10l3 3 3-3" /></>,
  };
  return <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[type]}</svg>;
}

export default function PresenceBundle() {
  return (
    <section id="presencia" className={styles.section} aria-labelledby="products-title">
      <div className="site-shell">
        <div className={styles.intro}>
          <div>
            <p className={styles.eyebrow}>Productos Sitio</p>
            <h2 id="products-title">Empieza con lo<br />que necesitas.</h2>
          </div>
          <div className={styles.introAside}>
            <p>Una solución por separado.<br />O todo conectado en un paquete.</p>
            <nav className={styles.sectionLinks} aria-label="Tipos de productos">
              <a href="#productos-individuales">Individuales <span aria-hidden="true">↓</span></a>
              <a href="#paquetes">Paquetes <span aria-hidden="true">↓</span></a>
            </nav>
          </div>
        </div>

        <div id="productos-individuales" className={styles.singles}>
          <p className={styles.groupLabel}><span>01</span> Productos individuales</p>
          <div className={styles.productGrid}>
            {individualProducts.map((product) => (
              <article className={styles.productCard} key={product.id}>
                <ProductIcon type={product.id} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <DemoRequest buttonLabel={product.action} initialIdea={product.request} initialGoal={product.goal} />
              </article>
            ))}
          </div>
        </div>

        <div id="paquetes" className={styles.packages}>
          <p className={styles.groupLabel}><span>02</span> Paquetes · Tu sitio + lo que lo hace crecer</p>
          <article className={styles.bundle} aria-labelledby="presence-title" data-nav-surface="light">
            <div className={styles.bundleCopy}>
              <p className={styles.bundleEyebrow}>Todo conectado</p>
              <h3 id="presence-title">Tu sitio <span>+ presencia digital.</span></h3>
              <p className={styles.description}>{presencePackage.description}</p>
              <p className={styles.searchHighlight}>Prepárate para que te encuentren en <strong>Google y búsquedas con IA.</strong></p>
              <ol className={styles.features}>
                {presencePackage.features.map((feature) => <li key={feature.title}><strong>{feature.title}</strong><p>{feature.text}</p></li>)}
              </ol>
              <DemoRequest buttonLabel="Quiero mi paquete" initialIdea={presencePackage.request} />
              <p className={styles.note}>Adaptamos el paquete al sitio que elijas. Alcance y cantidad de tarjetas en tu propuesta.</p>
            </div>
            <figure className={styles.visual}>
              <div className={styles.photoLabel}><span>Del mundo real a tu sitio.</span><span aria-hidden="true">↗</span></div>
              <Image src="/nfc-google-card.png" alt="Tarjeta NFC azul y blanca que invita a dejar una reseña en Google al acercar el celular." width={1688} height={1638} sizes="(max-width: 640px) 80vw, (max-width: 1000px) 70vw, 460px" className={styles.photo} />
              <figcaption><strong>Un toque. Una reseña más fácil.</strong><span>Tarjetas NFC incluidas en tu paquete de presencia.</span></figcaption>
            </figure>
          </article>
        </div>
      </div>
    </section>
  );
}

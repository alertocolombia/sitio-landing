import { Wordmark } from "@/components/brand/Logo";
import DemoRequest from "./DemoRequest";
import HeroBackdrop from "./HeroBackdrop";
import HeroScene from "./HeroScene";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <HeroScene>
      <section id="hero-intro" className={styles.hero} aria-labelledby="hero-title">
        <div className={`site-shell ${styles.layout}`}>
          <div className={styles.copy}>
            <h1 id="hero-title" className={styles.title}>
              <span>Tu idea</span>
              {" "}
              <span className={styles.titleLastLine}>
                tiene{" "}
                <span className={styles.titleWordmark} aria-hidden="true">
                  <Wordmark dotId="hero-logo-dot" />
                </span>
                <span className={styles.srOnly}>sitio.</span>
              </span>
            </h1>
            <p className={styles.services}>Páginas web, ecommerce y soluciones.</p>
            <p className={styles.description}>
              Creamos la página que tu negocio necesita: económica, rápida y fácil de usar. La optimizamos para potenciar tu presencia digital.
            </p>
            <div className={styles.actions}>
              <DemoRequest />
            </div>
            <p className={styles.microcopy}>
              Tu primera demo, lista en 48 horas.
            </p>
            <HeroBackdrop />
          </div>
        </div>
      </section>
    </HeroScene>
  );
}

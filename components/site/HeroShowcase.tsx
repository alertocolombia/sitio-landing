import HeroPlayground from "./HeroPlayground";
import TechMarquee from "./TechMarquee";
import styles from "./Hero.module.css";

export default function HeroShowcase() {
  return (
    <section className={styles.showcase} aria-label="Explora lo que podemos crear">
      <div className={`site-shell ${styles.showcaseInner}`}><HeroPlayground /></div>
      <div className={`site-shell ${styles.technologyStrip}`}>
        <p className={styles.technologyIntro}>Criterio humano. IA y tecnología para hacerlo posible.</p>
        <TechMarquee />
      </div>
    </section>
  );
}

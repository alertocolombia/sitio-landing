import { site } from "@/content/site";
import styles from "./InstagramSection.module.css";

export default function InstagramSection() {
  return (
    <section id="instagram" className={styles.section} aria-labelledby="instagram-title">
      <div className={`site-shell ${styles.grid}`}>
        <div className={styles.copy}>
          <p className="site-eyebrow">NOS VEMOS EN INSTAGRAM</p>
          <h2 id="instagram-title">Las ideas también <em>tienen feed.</em></h2>
          <p>Más de Sitio, lo que creamos y las ideas que vienen. Síguenos y acompáñanos desde el principio.</p>
          <a className="site-button" href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
            Seguir a {site.instagram} <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className={styles.preview}>
          <div className={styles.profile}>
            <span className="site-eyebrow">NUESTRO PERFIL</span>
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
              {site.instagram} <span aria-hidden="true">↗</span>
            </a>
          </div>
          <iframe
            className={styles.frame}
            src={`${site.instagramUrl}embed/`}
            title={`Vista previa de Instagram de ${site.instagram}`}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
          <p className={styles.fallback}>
            ¿No ves la vista previa?{" "}
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">Abrir en Instagram <span aria-hidden="true">↗</span></a>
          </p>
        </div>
      </div>
    </section>
  );
}

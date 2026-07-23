import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import BrowserFrame from "@/components/ui/BrowserFrame";
import { trabajos } from "@/content";

export default function Trabajos() {
  return (
    <section id="trabajos" className="scroll-mt-16 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHeader
          eyebrow={trabajos.eyebrow}
          titulo={trabajos.titulo}
          lead={trabajos.lead}
        />

        <div className="mt-12 grid gap-8 md:mt-16 lg:grid-cols-3 lg:gap-6">
          {trabajos.items.map((t, i) => {
            const frame = (
              <BrowserFrame url={t.url} src={t.estado === "live" ? t.href : null} />
            );
            return (
              <Reveal key={t.titulo} delay={i * 0.08}>
                <article className="group">
                  {t.estado === "live" && t.href ? (
                    <a
                      href={t.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t.titulo} — ${trabajos.verDemo}`}
                      className="block transition-transform duration-200 ease-out hover:-translate-y-1 motion-reduce:hover:translate-y-0"
                    >
                      {frame}
                    </a>
                  ) : (
                    frame
                  )}
                  <div className="mt-4 flex items-baseline justify-between gap-4 px-1">
                    <div>
                      <p className="eyebrow !text-[10px] text-gris-suave">
                        {t.label}
                      </p>
                      <h3 className="display mt-1.5 text-xl tracking-tight">
                        {t.titulo}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-gris">
                        {t.texto}
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 px-1 font-mono text-[11px] tracking-wider">
                    {t.estado === "live" && t.href ? (
                      <a
                        href={t.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-azul transition-opacity duration-150 hover:opacity-75"
                      >
                        {trabajos.verDemo} →
                      </a>
                    ) : (
                      <span className="text-gris-suave">{trabajos.pronto}</span>
                    )}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

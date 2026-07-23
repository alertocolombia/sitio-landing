import DotField from "@/components/DotField";
import Reveal from "@/components/ui/Reveal";
import StatStrip from "@/components/ui/StatStrip";
import { ctaFinal, site } from "@/content";

export default function CTAFinal() {
  return (
    <section className="relative overflow-hidden bg-azul">
      {/* puntos blancos sobre azul, como manda el sistema de marca */}
      <DotField color="#FFFFFF" breathCenter={[0.3, 0.55]} className="absolute inset-0" />

      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-24 md:pb-32 md:pt-32">
        <Reveal>
          <p className="eyebrow text-white/70">{ctaFinal.eyebrow}</p>
          <h2 className="display mt-5 max-w-[16ch] text-4xl text-white sm:text-5xl md:text-6xl text-balance">
            {ctaFinal.titulo}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            {ctaFinal.sub}
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <StatStrip stats={ctaFinal.stats} inverse className="mt-12 md:mt-14" />
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col items-start gap-5 md:mt-14">
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-inverse"
            >
              {ctaFinal.cta}
            </a>
            <p className="eyebrow !text-[10px] text-white/60">{ctaFinal.nota}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

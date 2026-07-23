import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { problema } from "@/content";

export default function Problema() {
  return (
    <section className="border-t border-borde bg-fondo-alt">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHeader eyebrow={problema.eyebrow} titulo={problema.titulo} />

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-borde bg-borde md:mt-16 md:grid-cols-3">
          {problema.puntos.map((p, i) => (
            <Reveal key={p.titulo} delay={i * 0.08} className="h-full">
              <div className="h-full bg-white p-7 md:p-8">
                <span className="font-mono text-xs font-medium text-azul">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display mt-4 text-xl tracking-tight">
                  {p.titulo}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-gris">
                  {p.texto}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="display mx-auto mt-16 max-w-[24ch] text-center text-2xl sm:text-3xl md:mt-20 md:text-4xl text-balance">
            Su Instagram puede gustar.{" "}
            <span className="text-azul">Su página debe vender.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

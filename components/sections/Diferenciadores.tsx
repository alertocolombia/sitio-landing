import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { diferenciadores } from "@/content";

export default function Diferenciadores() {
  const { comparacion } = diferenciadores;
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHeader
          eyebrow={diferenciadores.eyebrow}
          titulo={diferenciadores.titulo}
        />

        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-xl border border-borde md:mt-16">
            {/* encabezados */}
            <div className="grid grid-cols-[1fr_1.4fr_1.4fr] border-b border-borde bg-fondo-alt sm:grid-cols-[1fr_2fr_2fr]">
              <div className="p-4 md:p-5" />
              <p className="eyebrow !text-[10px] p-4 text-gris-suave md:p-5">
                {comparacion.colA}
              </p>
              <p className="eyebrow !text-[10px] border-l border-borde bg-azul-50/60 p-4 text-azul md:p-5">
                {comparacion.colB}
              </p>
            </div>
            {comparacion.filas.map((f) => (
              <div
                key={f.aspecto}
                className="grid grid-cols-[1fr_1.4fr_1.4fr] border-b border-borde last:border-b-0 sm:grid-cols-[1fr_2fr_2fr]"
              >
                <p className="display p-4 text-sm tracking-tight md:p-5 md:text-base">
                  {f.aspecto}
                </p>
                <p className="p-4 text-[13px] leading-relaxed text-gris-suave md:p-5 md:text-[15px]">
                  {f.a}
                </p>
                <p className="border-l border-borde bg-azul-50/60 p-4 text-[13px] font-medium leading-relaxed text-tinta md:p-5 md:text-[15px]">
                  {f.b}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

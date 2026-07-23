import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { entregables } from "@/content";

export default function Entregables() {
  return (
    <section className="border-t border-borde bg-fondo-alt">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHeader
          eyebrow={entregables.eyebrow}
          titulo={entregables.titulo}
        />

        <div className="mt-12 grid gap-x-10 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
          {entregables.items.map((e, i) => (
            <Reveal key={e.titulo} delay={(i % 3) * 0.07}>
              <div className="border-t border-borde py-6 md:py-7">
                <h3 className="flex items-baseline gap-3 text-base font-semibold">
                  <span
                    className="size-1.5 shrink-0 translate-y-[-1px] rounded-full bg-azul"
                    aria-hidden="true"
                  />
                  {e.titulo}
                </h3>
                <p className="mt-2 pl-[18px] text-[15px] leading-relaxed text-gris">
                  {e.texto}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

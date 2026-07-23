import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { casos } from "@/content";

export default function Casos() {
  return (
    <section className="border-t border-borde bg-fondo-alt">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-12 md:gap-8 md:py-28">
        <div className="md:col-span-4">
          <SectionHeader eyebrow={casos.eyebrow} titulo={casos.titulo} />
        </div>

        <div className="md:col-span-7 md:col-start-6">
          {casos.items.map((c, i) => (
            <Reveal key={c.titulo} delay={i * 0.06}>
              <div className="group border-t border-borde py-6 transition-colors duration-200 last:border-b md:py-7">
                <h3 className="display text-xl tracking-tight transition-colors duration-200 group-hover:text-azul md:text-2xl">
                  {c.titulo}
                </h3>
                <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-gris">
                  {c.texto}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

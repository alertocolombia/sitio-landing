import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { confianza } from "@/content";

export default function Confianza() {
  return (
    <section className="border-t border-borde bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHeader eyebrow={confianza.eyebrow} titulo={confianza.titulo} />

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-borde bg-borde sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
          {confianza.items.map((c, i) => (
            <Reveal key={c.titulo} delay={i * 0.06} className="h-full">
              <div className="h-full bg-white p-7">
                <p className="eyebrow !text-[10px] text-azul">{c.titulo}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-gris">
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

import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { proceso } from "@/content";

export default function Proceso() {
  return (
    <section id="proceso" className="scroll-mt-16 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHeader eyebrow={proceso.eyebrow} titulo={proceso.titulo} />

        <ol className="mt-12 md:mt-16">
          {proceso.pasos.map((p, i) => (
            <Reveal key={p.titulo} delay={i * 0.06}>
              <li className="grid gap-2 border-t border-borde py-7 last:border-b sm:grid-cols-12 sm:gap-6 md:py-9">
                <span className="display text-3xl text-azul-200 sm:col-span-2 md:text-4xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display text-xl tracking-tight sm:col-span-4 md:text-2xl">
                  {p.titulo}
                </h3>
                <p className="text-[15px] leading-relaxed text-gris sm:col-span-6 md:text-base">
                  {p.texto}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

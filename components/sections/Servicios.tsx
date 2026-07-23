import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { servicios, site } from "@/content";

export default function Servicios() {
  return (
    <section id="servicios" className="scroll-mt-16 border-t border-borde bg-fondo-alt">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHeader
          eyebrow={servicios.eyebrow}
          titulo={servicios.titulo}
          lead={servicios.lead}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
          {servicios.items.map((s, i) => (
            <Reveal key={s.nombre} delay={i * 0.07} className="h-full">
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card-lift group flex h-full flex-col rounded-xl bg-white p-6 md:p-7"
              >
                <p className="eyebrow !text-[10px] text-gris-suave">
                  {s.entrega}
                </p>
                <h3 className="display mt-4 text-2xl tracking-tight">
                  {s.nombre}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-gris">
                  {s.texto}
                </p>
                <div className="mt-6 border-t border-borde pt-4">
                  <p className="display text-xl text-azul">{s.precio}</p>
                  <p className="mt-2 text-[13px] font-medium text-gris-suave transition-colors duration-200 group-hover:text-azul">
                    Pedir propuesta gratis →
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

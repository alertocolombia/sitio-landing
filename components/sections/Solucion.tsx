import Reveal from "@/components/ui/Reveal";
import { Isotype } from "@/components/brand/Logo";
import { solucion } from "@/content";

export default function Solucion() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-12 md:gap-8 md:py-28">
        <Reveal className="md:col-span-5">
          <p className="eyebrow text-azul">{solucion.eyebrow}</p>
          <h2 className="display mt-4 text-3xl sm:text-4xl md:text-5xl text-balance">
            {solucion.titulo}
          </h2>
          <Isotype className="mt-8 h-9 w-auto text-azul-200" />
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-6 md:col-start-7">
          <div className="space-y-5 text-base leading-relaxed text-gris md:text-lg">
            {solucion.parrafos.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <p className="display mt-8 text-xl text-azul md:text-2xl">
            {solucion.remate}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

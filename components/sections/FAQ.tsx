import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { faq } from "@/content";

export default function FAQ() {
  return (
    <section className="border-t border-borde bg-fondo-alt">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-12 md:gap-8 md:py-28">
        <div className="md:col-span-4">
          <SectionHeader eyebrow={faq.eyebrow} titulo={faq.titulo} />
        </div>

        <div className="md:col-span-7 md:col-start-6">
          {faq.items.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.04}>
              <details className="group border-t border-borde last:border-b">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-base font-semibold transition-colors duration-150 hover:text-azul [&::-webkit-details-marker]:hidden md:py-6">
                  {item.q}
                  <svg
                    viewBox="0 0 12 12"
                    className="size-3 shrink-0 text-azul transition-transform duration-200 ease-out group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 1v10M1 6h10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </summary>
                <p className="max-w-xl pb-6 text-[15px] leading-relaxed text-gris">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

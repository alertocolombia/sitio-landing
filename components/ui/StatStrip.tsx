type Stat = { valor: string; label: string };

/**
 * Tira de stats editorial: número grande en Bricolage + label mono
 * diminuto + divisor de 1px. Nunca pills ni íconos.
 */
export default function StatStrip({
  stats,
  inverse = false,
  className = "",
}: {
  stats: Stat[];
  inverse?: boolean;
  className?: string;
}) {
  return (
    <dl className={`flex ${className}`}>
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={`min-w-0 flex-1 sm:flex-none sm:pr-10 md:pr-14 ${
            i > 0 ? "pl-4 sm:pl-10 md:pl-14 border-l" : ""
          } ${inverse ? "border-white/25" : "border-borde"}`}
        >
          <dd
            className={`display text-[1.35rem] sm:text-4xl md:text-[2.75rem] ${
              inverse ? "text-white" : "text-tinta"
            }`}
          >
            {s.valor}
          </dd>
          <dt
            className={`eyebrow mt-2 !text-[10px] ${
              inverse ? "text-white/60" : "text-gris-suave"
            }`}
          >
            {s.label}
          </dt>
        </div>
      ))}
    </dl>
  );
}

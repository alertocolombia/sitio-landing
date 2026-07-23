import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  titulo: string;
  lead?: string;
  /** Colores invertidos para secciones azules. */
  inverse?: boolean;
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  titulo,
  lead,
  inverse = false,
  className = "",
}: Props) {
  return (
    <Reveal className={className}>
      <p className={`eyebrow ${inverse ? "text-white/70" : "text-azul"}`}>
        {eyebrow}
      </p>
      <h2
        className={`display mt-4 text-3xl sm:text-4xl md:text-5xl max-w-[20ch] text-balance ${
          inverse ? "text-white" : "text-tinta"
        }`}
      >
        {titulo}
      </h2>
      {lead && (
        <p
          className={`mt-5 max-w-xl text-base md:text-lg leading-relaxed ${
            inverse ? "text-white/80" : "text-gris"
          }`}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}

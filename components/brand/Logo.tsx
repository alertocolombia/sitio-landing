import { WORDMARK, ISOTYPE } from "./logo-paths";

const dotStart = WORDMARK.d.lastIndexOf(" M ");
export const WORDMARK_DOT = WORDMARK.d.slice(dotStart);
const wordmarkLetters = WORDMARK.d.slice(0, dotStart);

/**
 * Wordmark "sitio." vectorizado desde el PNG oficial.
 * Hereda el color via currentColor: azul sobre blanco, blanco sobre azul.
 */
export function Wordmark({ className, dotId }: { className?: string; dotId?: string }) {
  return (
    <svg
      viewBox={WORDMARK.viewBox}
      className={className}
      role="img"
      aria-label="sitio."
    >
      <path d={dotId ? wordmarkLetters : WORDMARK.d} fill="currentColor" fillRule="evenodd" />
      {dotId && <path id={dotId} d={WORDMARK_DOT} fill="currentColor" />}
    </svg>
  );
}

/** Isotipo [;] — favicon, separadores, detalles. */
export function Isotype({ className }: { className?: string }) {
  return (
    <svg
      viewBox={ISOTYPE.viewBox}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d={ISOTYPE.d} fill="currentColor" fillRule="evenodd" />
    </svg>
  );
}

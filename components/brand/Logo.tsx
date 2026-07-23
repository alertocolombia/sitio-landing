import { WORDMARK, ISOTYPE } from "./logo-paths";

/**
 * Wordmark "sitio." vectorizado desde el PNG oficial.
 * Hereda el color via currentColor: azul sobre blanco, blanco sobre azul.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <svg
      viewBox={WORDMARK.viewBox}
      className={className}
      role="img"
      aria-label="sitio."
    >
      <path d={WORDMARK.d} fill="currentColor" fillRule="evenodd" />
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

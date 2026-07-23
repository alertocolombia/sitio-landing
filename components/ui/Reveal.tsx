"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Retardo en segundos, para escalonar entradas. */
  delay?: number;
  className?: string;
};

/** Reveal sutil al hacer scroll. Con reduced-motion no anima nada. */
export default function Reveal({ children, delay = 0, className }: Props) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.55, ease: [0.22, 0.65, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

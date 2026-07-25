"use client";

import { useReducedMotion } from "framer-motion";
import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";

export default function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.classList.remove("site-reveal--ready", "is-visible");

    if (reducedMotion || !("IntersectionObserver" in window)) return;

    const bounds = element.getBoundingClientRect();
    const startsInView = bounds.bottom >= 0 && bounds.top <= window.innerHeight * 0.88;
    if (startsInView) return;

    element.classList.add("site-reveal--ready");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        element.classList.add("is-visible");
        observer.disconnect();
      },
      { rootMargin: "0px 0px -12% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <div
      ref={ref}
      className={`site-reveal${className ? ` ${className}` : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

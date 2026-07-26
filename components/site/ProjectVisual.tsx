"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { siShopify } from "simple-icons/icons";
import { useRef, useSyncExternalStore } from "react";

type ProjectTone = "vigor" | "ciclo" | "alerto" | "aula";

type PreviewMedia =
  | { type: "image"; src: string; alt: string; focus?: "center" | "right" }
  | { type: "live"; src: string; title: string; viewport?: "desktop" | "responsive" };

const previews: Record<
  ProjectTone,
  {
    name: string;
    primaryLabel: string;
    primary: PreviewMedia;
    secondaryLabel?: string;
    secondary?: PreviewMedia;
  }
> = {
  aula: {
    name: "Aula · Valora",
    primaryLabel: "EXPERIENCIA PRINCIPAL",
    secondaryLabel: "FLUJO ESTUDIANTIL",
    primary: {
      type: "image",
      src: "/projects/aula/inicio-real.png",
      alt: "Inicio real de Valora para la IED Betania Norte",
    },
    secondary: {
      type: "image",
      src: "/projects/aula/flujo-real.png",
      alt: "Flujo real de evaluación entre compañeros en Valora",
    },
  },
  ciclo: {
    name: "Ciclo",
    primaryLabel: "CALCULADORA DE SUEÑO",
    primary: {
      type: "live",
      src: "/demos/ciclo/",
      title: "Vista de Ciclo en computador",
      viewport: "desktop",
    },
  },
  alerto: {
    name: "Alerto",
    primaryLabel: "HISTORIA COMERCIAL",
    primary: {
      type: "image",
      src: "/projects/alerto/inicio-real.png",
      alt: "Página real de Alerto para clínicas",
    },
  },
  vigor: {
    name: "VIGOR",
    primaryLabel: "TIENDA ONLINE",
    primary: {
      type: "live",
      src: "/demos/activewear/",
      title: "Landing de la tienda VIGOR",
      viewport: "desktop",
    },
  },
};

/** El estado nunca cambia tras hidratar, así que no hay a qué suscribirse. */
const subscribeNoop = () => () => {};

function PreviewContent({ media }: { media: PreviewMedia }) {
  if (media.type === "live") {
    return (
      <iframe
        className={media.viewport === "desktop" ? "project-preview__desktop" : undefined}
        src={media.src}
        title={media.title}
        loading="lazy"
        tabIndex={-1}
        sandbox="allow-scripts allow-same-origin"
      />
    );
  }

  return (
    <Image
      src={media.src}
      alt={media.alt}
      fill
      sizes="(max-width: 899px) 88vw, 58vw"
      className={media.focus === "right" ? "project-preview__image--right" : undefined}
    />
  );
}

export default function ProjectVisual({
  tone,
}: {
  tone: ProjectTone;
}) {
  const container = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  // Igual que en PricingSection: useReducedMotion() es null en el servidor, así
  // que el SSR serializaba el parallax y sin JS los marcos quedaban corridos
  // 24px, recortándose contra el overflow:hidden del contenedor.
  const hydrated = useSyncExternalStore(subscribeNoop, () => true, () => false);
  const project = previews[tone];
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const primaryY = useSpring(useTransform(scrollYProgress, [0, 1], [24, -24]), {
    stiffness: 120,
    damping: 24,
  });
  const secondaryY = useSpring(useTransform(scrollYProgress, [0, 1], [-20, 20]), {
    stiffness: 120,
    damping: 24,
  });

  return (
    <div
      ref={container}
      className={`project-visual project-preview project-preview--${tone}${project.secondary ? "" : " project-preview--single"}`}
      aria-label={`Vistas de ${project.name}`}
    >
      <div className="project-preview__signature">
        {tone === "vigor" && (
          <span className="project-preview__platform">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d={siShopify.path} fill="currentColor" />
            </svg>
            Shopify
          </span>
        )}
        <b>{project.name}</b>
      </div>

      <div className="project-preview__stage">
        <motion.div
          className="project-preview__frame project-preview__frame--primary"
          style={!hydrated || reduced ? undefined : { y: primaryY }}
        >
          <div className="project-preview__bar">
            <b>{project.primaryLabel}</b>
          </div>
          <div className="project-preview__canvas">
            <PreviewContent media={project.primary} />
          </div>
        </motion.div>

        {project.secondary && project.secondaryLabel && (
          <motion.div
            className="project-preview__frame project-preview__frame--secondary"
            style={!hydrated || reduced ? undefined : { y: secondaryY }}
          >
            <div className="project-preview__bar"><b>{project.secondaryLabel}</b></div>
            <div className="project-preview__canvas">
              <PreviewContent media={project.secondary} />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

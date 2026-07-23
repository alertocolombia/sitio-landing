import type { Metadata } from "next";
import CaseStudy from "@/components/site/CaseStudy";

export const metadata: Metadata = {
  title: "Aula · Valora · Caso real | Sitio",
  description: "Caso real de Valora, aplicación web educativa para coevaluación, autoevaluación y seguimiento docente en la IED Betania Norte.",
};

export default function AulaCasePage() {
  return (
    <CaseStudy
      accent="aula"
      category="APLICACIÓN EDUCATIVA"
      title="Evaluar a un curso completo sin convertirlo en más trabajo."
      summary="Valora es una aplicación de Aula para la IED Betania Norte: los estudiantes evalúan desde cualquier celular y los docentes administran el proceso desde su propio acceso."
      challenge="Convertir una evaluación entre compañeros en un flujo rápido, claro y suficientemente amable para que cualquier estudiante pueda completarlo sin ayuda técnica."
      solution="Separamos cada decisión en pasos cortos, usamos un código como única puerta de entrada y construimos una identidad visual cercana. El sistema conecta la experiencia estudiantil con el acceso y seguimiento docente."
      features={["Flujo estudiantil", "Acceso docente", "Diseño responsive", "Datos conectados"]}
      images={[
        {
          src: "/projects/aula/inicio-real.png",
          alt: "Inicio real de Valora para la IED Betania Norte",
          caption: "Inicio · Dos caminos claros: comenzar la evaluación o entrar como docente.",
        },
        {
          src: "/projects/aula/flujo-real.png",
          alt: "Pantalla real para ingresar al flujo de evaluación entre compañeros",
          caption: "Flujo estudiantil · Un código basta para comenzar desde cualquier celular.",
        },
        {
          src: "/projects/aula/docente-real.png",
          alt: "Acceso real al panel docente de Valora",
          caption: "Acceso docente · La gestión del proceso vive en el mismo producto.",
        },
      ]}
    />
  );
}

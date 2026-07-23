import type { Metadata } from "next";
import CaseStudy from "@/components/site/CaseStudy";

export const metadata: Metadata = {
  title: "Ciclo · Caso real | Sitio",
  description:
    "Caso real de diseño y desarrollo de Ciclo, una aplicación web para calcular horarios de sueño, crear un plan nocturno y entender hábitos de descanso.",
};

export default function CicloCasePage() {
  return (
    <CaseStudy
      accent="ciclo"
      category="APLICACIÓN DE BIENESTAR"
      title="Dormir mejor empieza por saber a qué hora cerrar los ojos."
      summary="Ciclo convierte una decisión cotidiana en un plan útil: calcula horarios de sueño, organiza la noche y ayuda a entender siestas, cronotipo y deuda semanal sin pedir registro."
      challenge="Reunir varias herramientas de descanso en una experiencia clara, confiable y suficientemente rápida para usarla cada noche."
      solution="Construimos una aplicación que explica solo lo necesario y devuelve resultados accionables. Todo funciona en el navegador, guarda las preferencias en el dispositivo y adapta la experiencia a la hora, edad y hábitos de cada persona."
      features={["Calculadora de ciclos", "Plan nocturno", "Cronotipo", "Datos locales"]}
      livePreview={{
        src: "/demos/ciclo/",
        title: "Aplicación web Ciclo completamente funcional",
        caption: "Experiencia real · Cambia la hora, prueba la calculadora y explora todas las herramientas.",
      }}
      images={[]}
    />
  );
}

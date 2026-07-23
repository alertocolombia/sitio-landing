import type { Metadata } from "next";
import CaseStudy from "@/components/site/CaseStudy";

export const metadata: Metadata = {
  title: "Alerto · Caso real | Sitio",
  description: "Caso real de diseño y desarrollo de Alerto, producto SaaS para automatizar la comunicación y recuperar citas en clínicas.",
};

export default function AlertoCasePage() {
  return (
    <CaseStudy
      accent="alerto"
      category="SAAS PARA CLÍNICAS"
      title="Una cancelación deja de ser un hueco y vuelve a convertirse en una cita."
      summary="Alerto reúne una propuesta comercial clara con una experiencia operativa sencilla para recordar citas, gestionar cancelaciones y visualizar la agenda desde un solo lugar."
      challenge="Explicar un producto técnico sin palabras raras y convertir una pérdida cotidiana en una oportunidad fácil de entender."
      solution="Diseñamos la historia desde el dolor real de la clínica y la conectamos con una demostración visual del flujo: cancelación, oferta del cupo y agenda recuperada. El panel concentra la operación en una interfaz directa y legible."
      features={["Estrategia de producto", "Landing comercial", "Panel operativo", "Experiencia responsive"]}
      images={[
        {
          src: "/projects/alerto/inicio-real.png",
          alt: "Landing real de Alerto mostrando cómo recuperar una cita cancelada",
          caption: "Landing comercial · El beneficio se entiende antes de explicar la tecnología.",
        },
        {
          src: "/projects/alerto/panel-real.png",
          alt: "Panel real de Alerto con citas y cupos recuperados",
          caption: "Panel del producto · Agenda, confirmaciones, cupos recuperados y actividad reciente.",
        },
      ]}
    />
  );
}

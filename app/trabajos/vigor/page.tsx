import type { Metadata } from "next";
import CaseStudy from "@/components/site/CaseStudy";

export const metadata: Metadata = {
  title: "VIGOR · Demo funcional | Sitio",
  description:
    "Demo funcional de una tienda de ropa deportiva con dirección visual, catálogo y una ruta clara hacia la compra.",
};

export default function VigorCasePage() {
  return (
    <CaseStudy
      accent="vigor"
      projectLabel="DEMO FUNCIONAL"
      category="TIENDA DE ROPA DEPORTIVA"
      title="Una tienda que hace sentir el producto antes de tocarlo."
      summary="VIGOR es una demostración de cómo una marca de ropa deportiva puede ordenar su catálogo, crear deseo visual y llevar a la persona desde la colección hasta la compra."
      challenge="Construir una experiencia con personalidad sin hacer que la estética estorbe al producto, las tallas o el camino hacia la compra."
      solution="La dirección visual usa fotografía, ritmo editorial y una navegación limpia. Cada pantalla deja que el producto sea protagonista y mantiene visible el siguiente paso."
      features={["Dirección visual", "Catálogo", "Ruta de compra", "Vista móvil"]}
      livePreview={{
        src: "/demos/activewear/",
        title: "Tienda de muestra VIGOR completamente funcional",
        caption: "Demo funcional · Recorre la tienda y explora la colección completa.",
      }}
      images={[
        {
          src: "/projects/vigor/energia-celeste.jpg",
          alt: "Conjunto deportivo celeste del concepto VIGOR",
          caption: "Dirección visual · Producto, color y movimiento como protagonistas.",
        },
        {
          src: "/projects/vigor/vestido-vino.jpg",
          alt: "Vestido deportivo vino del concepto VIGOR",
          caption: "Colección · Una presentación editorial que conserva una ruta clara a comprar.",
        },
      ]}
    />
  );
}

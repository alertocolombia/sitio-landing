import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sitio — Páginas que venden",
    short_name: "Sitio",
    description: "Diseño y desarrollo de páginas web en Colombia.",
    start_url: "/",
    display: "standalone",
    background_color: "#EFEBE3",
    theme_color: "#0057FF",
    lang: "es-CO",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}

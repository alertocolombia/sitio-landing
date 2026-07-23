import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date("2026-07-22"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/trabajos/ciclo`,
      lastModified: new Date("2026-07-22"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/trabajos/alerto`,
      lastModified: new Date("2026-07-22"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/trabajos/aula`,
      lastModified: new Date("2026-07-22"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/trabajos/vigor`,
      lastModified: new Date("2026-07-22"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}

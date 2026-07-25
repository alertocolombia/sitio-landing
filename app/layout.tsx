import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { site, faqs } from "@/content/site";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Sitio | Diseño y desarrollo de páginas web en Colombia",
  description: site.description,
  keywords: [
    "páginas web Colombia",
    "crear página web Colombia",
    "página web para negocios",
    "diseño web Colombia",
    "estudio web",
    "creador de páginas web",
    "landing pages",
    "tienda online Colombia",
    "tiendas Shopify Colombia",
    "desarrollo ecommerce",
    "aplicaciones web",
  ],
  alternates: { canonical: "/" },
  authors: [{ name: "Sitio", url: site.url }],
  creator: "Sitio",
  publisher: "Sitio",
  category: "Diseño y desarrollo web",
  openGraph: {
    title: "Sitio — Páginas que venden.",
    description:
      "Tú vendes. Nosotros resolvemos tu página: diseño, conexiones y publicación para negocios en Colombia.",
    url: site.url,
    siteName: "Sitio",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Sitio — Páginas que venden. Diseño y desarrollo web en Colombia.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sitio — Páginas que venden.",
    description: "Tú vendes. Nosotros resolvemos tu página para que las personas puedan escribirte, reservar o comprar.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#EFEBE3",
  colorScheme: "light",
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sitio",
  url: site.url,
  description: site.description,
  logo: `${site.url}/icon.svg`,
  email: site.email,
  telephone: site.phone,
  areaServed: {
    "@type": "Country",
    name: "Colombia",
  },
  sameAs: [site.instagramUrl],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.phone,
    contactType: "sales",
    availableLanguage: "Spanish",
    areaServed: "CO",
  },
};

const professionalService = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Sitio",
  url: site.url,
  description: site.description,
  image: `${site.url}/og.jpg`,
  telephone: site.phone,
  email: site.email,
  priceRange: "$350.000 - $3.500.000 COP",
  areaServed: {
    "@type": "Country",
    name: "Colombia",
  },
  sameAs: [site.instagramUrl],
};

const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const structuredData = [organization, professionalService, faqPage];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-CO" className={`${bricolage.variable} ${geist.variable} ${plusJakarta.variable}`}>
      <body>
        {structuredData.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
            }}
          />
        ))}
        {children}
        <Analytics />
      </body>
    </html>
  );
}

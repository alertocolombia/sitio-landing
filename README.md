# Sitio — Páginas que venden

Landing y portafolio de [sitio.com.co](https://sitio.com.co), construido con Next.js, TypeScript, Tailwind CSS y Motion.

## Verlo en local

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Dónde editar

- `content/site.ts`: contacto, servicios, precios, proyectos, proceso y FAQ.
- `app/tokens.css`: única escala de espaciado y ritmo (`--card-pad`, secciones y flujos).
- `app/globals.css`: sistema visual y responsive; todo padding, margin y gap consume esos tokens. `--site-blue` es el azul canónico.
- `components/site/`: landing, animaciones y previews del portafolio.
- `public/demos/`: VIGOR y Ciclo; ambos deben seguir marcados como demos conceptuales.
- `public/projects/`: capturas reales de Alerto y Aula · Valora, además de las imágenes del demo VIGOR.
- `app/trabajos/`: casos reales del portafolio.
- `public/og.png`: portada al compartir el enlace.

No publique testimonios, métricas o relaciones con clientes que no sean reales. La estrategia vigente está en `meta-prompt-sitio-landing.md`; las decisiones confirmadas del 21 de julio de 2026 reemplazan documentos anteriores cuando se contradicen.

## Antes de publicar

```bash
npm run lint
npm run build
```

La página ya incluye metadata, canonical, Open Graph, JSON-LD de `Organization`, `robots.txt`, `sitemap.xml`, analítica de Vercel y enlaces de WhatsApp.

## Vercel y el dominio

1. Suba este repositorio a la cuenta de GitHub de Alerto.
2. En Vercel, importe el repositorio como proyecto Next.js.
3. En `Project → Settings → Domains`, agregue `sitio.com.co` y `www.sitio.com.co`.
4. En GoDaddy, copie exactamente los registros DNS que Vercel muestre.
5. Cuando Vercel confirme el dominio, el certificado HTTPS se configura automáticamente.

Use los valores que muestre Vercel en ese momento; no copie registros DNS antiguos de documentos del proyecto.

## SEO después del lanzamiento

1. Verifique `sitio.com.co` en Google Search Console.
2. Envíe `https://sitio.com.co/sitemap.xml`.
3. Solicite indexación de la portada.
4. Revise consultas, clics y conversiones a WhatsApp cada mes.
5. Cree páginas nuevas solo para búsquedas con intención distinta y contenido útil real.

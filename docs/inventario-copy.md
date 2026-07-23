# Inventario forense de copy — Sitio

Fecha de captura: 22 de julio de 2026. Este inventario describe la versión anterior a la intervención de conversión.

## Rutas y superficie activa

| Ruta | Archivo | Función |
|---|---|---|
| `/` | `app/page.tsx` | Landing principal |
| `/trabajos` | `app/trabajos/page.tsx` | Redirección a `/#trabajos` |
| `/trabajos/ciclo` | `app/trabajos/ciclo/page.tsx` | Caso real e interacción funcional de Ciclo |
| `/trabajos/alerto` | `app/trabajos/alerto/page.tsx` | Caso real de Alerto |
| `/trabajos/aula` | `app/trabajos/aula/page.tsx` | Caso real de Aula · Valora |
| `/demos/activewear` | `public/demos/activewear/index.html` | Demo conceptual VIGOR |
| `/demos/ciclo` | `public/demos/ciclo/index.html` | Aplicación funcional Ciclo |
| `/robots.txt` | `app/robots.ts` | Reglas para buscadores |
| `/sitemap.xml` | `app/sitemap.ts` | Índice de portada y casos |
| `/manifest.webmanifest` | `app/manifest.ts` | Manifest del sitio |

La landing activa usa `components/site/*` y `content/site.ts`. `components/sections/*`, `components/ui/*` y `content.ts` pertenecen a una versión anterior y no aparecen en pantalla.

## Orden real de la landing

1. Navegación
2. Hero
3. Tecnologías y tira de promesas
4. Servicios
5. Trabajo
6. Tranquilidad
7. Google + buscadores con IA
8. Precios
9. Proceso
10. Santiago + Mafe
11. Preguntas frecuentes
12. CTA final
13. Footer

## Copy visible, pieza por pieza

Posición aproximada: porcentaje narrativo del recorrido, no medición de píxeles.

| # | Sección | Posición | Tipo | Texto textual | Archivo:línea | Trabajo en el embudo |
|---:|---|---:|---|---|---|---|
| 1 | Nav | persistente | link | Servicios | `content/site.ts:16` | Atajo a oferta |
| 2 | Nav | persistente | link | Trabajo | `content/site.ts:17` | Atajo a prueba |
| 3 | Nav | persistente | link | Precios | `content/site.ts:18` | Atajo a filtro económico |
| 4 | Nav | persistente | link | Proceso | `content/site.ts:19` | Atajo a reducción de incertidumbre |
| 5 | Nav | persistente | botón | Hablemos | `components/site/Nav.tsx:38` | Conversión directa |
| 6 | Hero | 0% | coordenada | CO / WEB / 001 | `components/site/Hero.tsx:15` | Identidad editorial |
| 7 | Hero | 0% | eyebrow | TU NEGOCIO YA TIENE SUFICIENTES COSAS POR RESOLVER | `components/site/Hero.tsx:25` | Empatía con sobrecarga |
| 8 | Hero | 0% | H1 | Tú vendes. Nosotros hacemos tu página | `components/site/Hero.tsx:35-49` | Promesa principal |
| 9 | Hero | 0% | label | PRIMER PASO · SIN COSTO | `components/site/Hero.tsx:59` | Reducción de riesgo |
| 10 | Hero | 0% | H2 | Cuéntanos qué vendes. | `components/site/Hero.tsx:60` | Instrucción inmediata |
| 11 | Hero | 0% | cuerpo | Te decimos qué página necesitas, cuánto cuesta y cuándo puede estar lista. Sin llamadas eternas ni palabras raras. | `components/site/Hero.tsx:62` | Define qué pasa tras el clic |
| 12 | Hero | 0% | botón | Quiero mi página | `components/site/Hero.tsx:66` | CTA principal |
| 13 | Hero | 0% | link | Ver precios | `components/site/Hero.tsx:68` | Ruta para visitante consciente del producto |
| 14 | Hero | 3% | cuerpo | Tú ya tienes el producto, el servicio y mil cosas que atender. Déjanos convertirlo en una página clara, rápida y lista para vender. | `components/site/Hero.tsx:79` | Top of heart |
| 15 | Tecnologías | 5% | label | TECNOLOGÍAS CON LAS QUE CONSTRUIMOS | `components/site/TechMarquee.tsx:47` | Señal de capacidad técnica |
| 16 | Tecnologías | 5% | logos | Claude · OpenAI · Shopify · GoDaddy · Vercel · GitHub · Supabase · Next.js · Figma · Framer | `components/site/TechMarquee.tsx:14-24` | Familiaridad y autoridad prestada |
| 17 | Hero strip | 6% | dato | LANDING DESDE $350K | `components/site/Hero.tsx:86` | Filtro económico temprano |
| 18 | Hero strip | 6% | dato | PRECIO CERRADO | `components/site/Hero.tsx:86` | Reduce miedo a sobrecostos |
| 19 | Hero strip | 6% | dato | PUBLICACIÓN INCLUIDA | `components/site/Hero.tsx:86` | Aclara entregable |
| 20 | Hero strip | 6% | dato | SEO + VISIBILIDAD EN IA | `components/site/Hero.tsx:86` | Diferencial técnico |
| 21 | Servicios | 8% | eyebrow | 01 · UNA PÁGINA PARA CADA NEGOCIO | `components/site/SiteLanding.tsx:18` | Autoidentificación |
| 22 | Servicios | 8% | H2 | Hay una página para cada negocio. También para el tuyo. | `components/site/SiteLanding.tsx:20` | Relevancia amplia |
| 23 | Servicios | 8% | cuerpo | Vendas productos, servicios, citas, cursos o una idea: te decimos cuál necesitas y la dejamos lista para avanzar. | `components/site/SiteLanding.tsx:21` | Traduce oferta a usos |
| 24 | Servicios | 9% | labels | PRODUCTOS · SERVICIOS · RESERVAS · CURSOS · IDEAS | `components/site/SiteLanding.tsx:23` | Reconocimiento rápido |
| 25 | Servicios | 10% | H3 | Landing pages | `content/site.ts:25` | Nombre de servicio |
| 26 | Servicios | 10% | énfasis | Tienes algo bueno que vender. Hagamos que se entienda rápido. | `content/site.ts:26` | Resultado buscado |
| 27 | Servicios | 10% | cuerpo | Una página directa para lanzar una oferta, recibir mensajes, conseguir registros o llevar personas a comprar. | `content/site.ts:28` | Uso concreto |
| 28 | Servicios | 10% | precio | Desde $350.000 COP | `content/site.ts:29` | Filtro económico |
| 29 | Servicios | 10% | tiempo | Express desde 48 horas | `content/site.ts:30` | Reducción de incertidumbre |
| 30 | Servicios | 13% | H3 | Sitios web | `content/site.ts:34` | Nombre de servicio |
| 31 | Servicios | 13% | énfasis | Tu negocio ya hace mucho. Tu página debería demostrarlo. | `content/site.ts:35` | Autoridad e imagen |
| 32 | Servicios | 13% | cuerpo | Ordenamos lo que hace, lo contamos con claridad y construimos una presencia que da confianza y genera oportunidades. | `content/site.ts:37` | Beneficio |
| 33 | Servicios | 13% | precio | Alcance a la medida | `content/site.ts:38` | Calificación |
| 34 | Servicios | 13% | tiempo | Cotización antes de empezar | `content/site.ts:39` | Control del riesgo |
| 35 | Servicios | 16% | H3 | Shopify y ecommerce | `content/site.ts:43` | Nombre de servicio |
| 36 | Servicios | 16% | énfasis | Tú tienes el producto. Nosotros construimos la tienda. | `content/site.ts:44` | Alivio operativo |
| 37 | Servicios | 16% | cuerpo | Dejamos catálogo, carrito, pagos y envíos listos en una tienda fácil de comprar y fácil de administrar por ti. | `content/site.ts:46` | Resultado funcional |
| 38 | Servicios | 16% | precio | Desde $3.500.000 COP | `content/site.ts:47` | Filtro económico |
| 39 | Servicios | 16% | tiempo | Shopify listo para operar | `content/site.ts:48` | Entregable |
| 40 | Servicios | 19% | H3 | Aplicaciones web | `content/site.ts:52` | Nombre de servicio |
| 41 | Servicios | 19% | énfasis | Cuando necesitas algo que una página normal no puede hacer. | `content/site.ts:53` | Diferencia funcional |
| 42 | Servicios | 19% | cuerpo | Convertimos una idea en calculadoras, reservas, portales o herramientas útiles para tu negocio y tus clientes. | `content/site.ts:55` | Casos de uso |
| 43 | Servicios | 19% | precio | Alcance a la medida | `content/site.ts:56` | Calificación |
| 44 | Servicios | 19% | tiempo | Diseño + producto + desarrollo | `content/site.ts:57` | Alcance técnico |
| 45 | Trabajo | 23% | eyebrow | 02 · TRABAJO REAL + DEMOS | `components/site/WorkRail.tsx:10` | Entrada a prueba |
| 46 | Trabajo | 23% | H2 | Mira lo que hacemos. Y cómo funciona. | `components/site/WorkRail.tsx:11` | Invita a verificar |
| 47 | Trabajo | 23% | cuerpo | Casos construidos y demos funcionales, marcados con claridad. Abre cada uno y conoce la experiencia, no solo una imagen bonita. | `components/site/WorkRail.tsx:15` | Transparencia de prueba |
| 48 | Trabajo · VIGOR | 25% | label | 01 / 04 · DEMO FUNCIONAL | `content/site.ts:126`; `components/site/WorkRail.tsx:28` | Clasifica evidencia |
| 49 | Trabajo · VIGOR | 25% | H3 | VIGOR | `content/site.ts:127` | Nombre de demo |
| 50 | Trabajo · VIGOR | 25% | tipo | Ecommerce · Activewear | `content/site.ts:128` | Categoría |
| 51 | Trabajo · VIGOR | 25% | cuerpo | Mira cómo un producto puede sentirse premium antes de tocarlo: catálogo claro, deseo visual y una ruta directa a comprar. | `content/site.ts:130` | Argumento de diseño |
| 52 | Trabajo · VIGOR | 25% | labels | Dirección de arte · UX ecommerce · Sistema de producto | `content/site.ts:131` | Entregables técnicos |
| 53 | Trabajo · VIGOR | 25% | link | Abrir y probar | `components/site/WorkRail.tsx:36` | Prueba interactiva |
| 54 | Trabajo · Ciclo | 31% | label | 02 / 04 · PROYECTO REAL | `content/site.ts:137`; `components/site/WorkRail.tsx:28` | Clasifica evidencia |
| 55 | Trabajo · Ciclo | 31% | H3 | Ciclo | `content/site.ts:138` | Nombre |
| 56 | Trabajo · Ciclo | 31% | tipo | Aplicación web · Sueño | `content/site.ts:139` | Categoría |
| 57 | Trabajo · Ciclo | 31% | cuerpo | Aplicación real que convierte una hora de despertar en un plan completo: ciclos, rutina nocturna, siestas, cronotipo y deuda de sueño. | `content/site.ts:141` | Mecanismo y utilidad |
| 58 | Trabajo · Ciclo | 31% | labels | Producto · UX/UI · Lógica funcional | `content/site.ts:142` | Entregables técnicos |
| 59 | Trabajo · Ciclo | 31% | link | Ver caso real | `components/site/WorkRail.tsx:36` | Profundización |
| 60 | Trabajo · Alerto | 37% | label | 03 / 04 · PROYECTO REAL | `content/site.ts:148`; `components/site/WorkRail.tsx:28` | Clasifica evidencia |
| 61 | Trabajo · Alerto | 37% | H3 | Alerto | `content/site.ts:149` | Nombre |
| 62 | Trabajo · Alerto | 37% | tipo | SaaS · Automatización para clínicas | `content/site.ts:150` | Categoría |
| 63 | Trabajo · Alerto | 37% | cuerpo | Producto real que convierte cancelaciones en cupos recuperados: una landing comercial y un panel operativo pensado para clínicas. | `content/site.ts:152` | Problema y solución |
| 64 | Trabajo · Alerto | 37% | labels | Estrategia de producto · UX/UI · Frontend SaaS | `content/site.ts:153` | Entregables técnicos |
| 65 | Trabajo · Alerto | 37% | link | Ver caso real | `components/site/WorkRail.tsx:36` | Profundización |
| 66 | Trabajo · Aula | 43% | label | 04 / 04 · PROYECTO REAL | `content/site.ts:159`; `components/site/WorkRail.tsx:28` | Clasifica evidencia |
| 67 | Trabajo · Aula | 43% | H3 | Aula · Valora | `content/site.ts:160` | Nombre |
| 68 | Trabajo · Aula | 43% | tipo | Aplicación web · Educación | `content/site.ts:161` | Categoría |
| 69 | Trabajo · Aula | 43% | cuerpo | Producto real para la IED Betania Norte: coevaluación y autoevaluación desde el celular, con acceso y seguimiento docente. | `content/site.ts:163` | Contexto y utilidad |
| 70 | Trabajo · Aula | 43% | labels | Flujo estudiantil · Panel docente · Base de datos | `content/site.ts:164` | Entregables |
| 71 | Trabajo · Aula | 43% | link | Ver caso real | `components/site/WorkRail.tsx:36` | Profundización |
| 72 | Tranquilidad | 49% | eyebrow | 03 · DE SU LADO | `components/site/SiteLanding.tsx:54` | Giro emocional |
| 73 | Tranquilidad | 49% | mantra | TÚ VENDES. NOSOTROS RESOLVEMOS. | `components/site/SiteLanding.tsx:55` | Top of mind |
| 74 | Tranquilidad | 49% | H2 | Tu página importa. Hacerla no debería quitarte el sueño. | `components/site/SiteLanding.tsx:58` | Top of heart |
| 75 | Tranquilidad | 50% | label | TE QUITAMOS DE ENCIMA | `components/site/SiteLanding.tsx:61` | Alivio |
| 76 | Tranquilidad | 50% | cuerpo | El mensaje, el diseño, las conexiones y la publicación. | `components/site/SiteLanding.tsx:62` | Alcance |
| 77 | Tranquilidad | 50% | label | TE DEJAMOS ENFOCARTE | `components/site/SiteLanding.tsx:65` | Reencuadre |
| 78 | Tranquilidad | 50% | cuerpo | En tu producto, tus clientes y lo que mejor sabes hacer: vender. | `components/site/SiteLanding.tsx:66` | Beneficio |
| 79 | Google + IA | 53% | eyebrow | 04 · GOOGLE + BUSCADORES CON IA | `components/site/SiteLanding.tsx:76` | Diferencial |
| 80 | Google + IA | 53% | H2 | Que Google te encuentre. Que la IA sepa quién eres. | `components/site/SiteLanding.tsx:77` | Resultado de visibilidad |
| 81 | Google + IA | 54% | cuerpo | Contenido y estructura preparados para que Google entienda tu negocio. | `content/site.ts:195` | Mecanismo |
| 82 | Google + IA | 54% | cuerpo | Información clara para que buscadores y asistentes de IA puedan reconocer qué haces y para quién. | `content/site.ts:196` | Mecanismo |
| 83 | Google + IA | 54% | cuerpo | Analítica instalada para saber qué funciona y qué necesitas mejorar. | `content/site.ts:197` | Medición |
| 84 | Google + IA | 54% | botón | Quiero que encuentren mi negocio | `components/site/SiteLanding.tsx:84` | Conversión desde diferencial |
| 85 | Google + IA | 54% | microcopy | No prometemos el primer lugar: construimos la base correcta para competir, aparecer y medir. | `components/site/SiteLanding.tsx:86` | Límite ético |
| 86 | Precios | 58% | eyebrow | 05 · PRECIOS DE LANZAMIENTO | `components/site/SiteLanding.tsx:95` | Entrada a oferta |
| 87 | Precios | 58% | H2 | El precio claro. La decisión fácil. | `components/site/SiteLanding.tsx:97` | Reducción de fricción |
| 88 | Precios | 58% | cuerpo | Precios de lanzamiento. El alcance queda escrito y el valor se acuerda antes de empezar. | `components/site/SiteLanding.tsx:98` | Seguridad |
| 89 | Precios · Landing | 60% | promoción | 30% menos | `content/site.ts:68` | Anclaje |
| 90 | Precios · Landing | 60% | label | Desde 48 horas | `content/site.ts:69` | Tiempo |
| 91 | Precios · Landing | 60% | H3 | Landing Express | `content/site.ts:63` | Nombre del plan |
| 92 | Precios · Landing | 60% | cuerpo | Para lanzar, validar o empezar sin vueltas. | `content/site.ts:64` | Auto-selección |
| 93 | Precios · Landing | 60% | precio anterior | $500.000 | `content/site.ts:65` | Ancla |
| 94 | Precios · Landing | 60% | precio | $350.000 COP | `content/site.ts:66-67` | Filtro económico |
| 95 | Precios · Landing | 61% | incluidos | Una página de hasta 5 secciones · Diseño adaptado a tu marca · Botón de WhatsApp o formulario · Versión celular y computador · SEO esencial para Google · Publicación y conexión del dominio | `content/site.ts:71-78` | Alcance |
| 96 | Precios · Landing | 61% | extra | EXTRAS · Extras desde $50.000 COP | `content/site.ts:79`; `components/site/SiteLanding.tsx:119` | Límite de alcance |
| 97 | Precios · Landing | 61% | botón | Quiero empezar | `content/site.ts:80` | Conversión de plan |
| 98 | Precios · Sitio | 64% | promoción | 34% menos · MÁS POPULAR | `content/site.ts:88`; `components/site/SiteLanding.tsx:107` | Señuelo y prueba social implícita |
| 99 | Precios · Sitio | 64% | label | Recomendado | `content/site.ts:89` | Orientación |
| 100 | Precios · Sitio | 64% | H3 | Sitio Negocio | `content/site.ts:83` | Nombre del plan |
| 101 | Precios · Sitio | 64% | cuerpo | Para explicar, convencer y recibir clientes. | `content/site.ts:84` | Auto-selección |
| 102 | Precios · Sitio | 64% | precio anterior | $1.500.000 | `content/site.ts:85` | Ancla |
| 103 | Precios · Sitio | 64% | precio | $990.000 COP | `content/site.ts:86-87` | Filtro económico |
| 104 | Precios · Sitio | 65% | incluidos | Hasta 5 páginas internas · Copy y diseño completamente a la medida · Secciones e interacciones visuales incluidas · Formularios, WhatsApp y analítica · SEO para Google + visibilidad en IA · Publicación y conexión del dominio | `content/site.ts:91-98` | Alcance |
| 105 | Precios · Sitio | 65% | regalo | REGALO INCLUIDO · Gratis: mini kit de lanzamiento con pieza para compartir, QR y enlace directo a WhatsApp | `content/site.ts:99`; `components/site/SiteLanding.tsx:119` | Reciprocidad |
| 106 | Precios · Sitio | 65% | botón | Quiero el más completo | `content/site.ts:100` | Conversión de plan |
| 107 | Precios · Tienda | 68% | promoción | 30% menos | `content/site.ts:108` | Anclaje |
| 108 | Precios · Tienda | 68% | label | Lista para operar | `content/site.ts:109` | Resultado |
| 109 | Precios · Tienda | 68% | H3 | Tienda Shopify | `content/site.ts:103` | Nombre del plan |
| 110 | Precios · Tienda | 68% | cuerpo | Para vender productos y administrar sin depender de nosotros. | `content/site.ts:104` | Reduce miedo operativo |
| 111 | Precios · Tienda | 68% | precio anterior | $5.000.000 | `content/site.ts:105` | Ancla |
| 112 | Precios · Tienda | 68% | precio | $3.500.000 COP | `content/site.ts:106-107` | Filtro económico |
| 113 | Precios · Tienda | 69% | incluidos | Diseño de tienda a la medida · Carga inicial de hasta 20 productos · Carrito, pagos y configuración de envíos · Secciones e interacciones visuales incluidas · SEO para Google + visibilidad en IA · Capacitación para administrar la tienda | `content/site.ts:111-118` | Alcance |
| 114 | Precios · Tienda | 69% | regalo | REGALO INCLUIDO · Gratis: mini kit de lanzamiento con pieza para compartir, QR y enlace directo a WhatsApp | `content/site.ts:119`; `components/site/SiteLanding.tsx:119` | Reciprocidad |
| 115 | Precios · Tienda | 69% | botón | Quiero vender online | `content/site.ts:120` | Conversión de plan |
| 116 | Precios | 71% | énfasis | Sin cobros sorpresa. | `components/site/SiteLanding.tsx:129` | Confianza |
| 117 | Precios | 71% | cuerpo | Desde Sitio Negocio no cobramos cada sección o interacción visual por separado. Funciones especiales, licencias e integraciones externas se cotizan antes de construir. | `components/site/SiteLanding.tsx:130` | Límites de alcance |
| 118 | Proceso | 74% | eyebrow | 06 · ASÍ DE SIMPLE | `components/site/SiteLanding.tsx:138` | Reducción de complejidad |
| 119 | Proceso | 74% | H2 | De tu idea a una página real. | `components/site/SiteLanding.tsx:139` | Transformación |
| 120 | Proceso | 74% | cuerpo | Tú no necesitas aprender diseño, código o Shopify. Te mostramos cada paso y dejamos todo funcionando. | `components/site/SiteLanding.tsx:141` | Alivio |
| 121 | Proceso | 75% | paso | Tú nos cuentas qué vendes | `content/site.ts:174` | Inicio |
| 122 | Proceso | 75% | cuerpo | Escuchamos tu negocio, tu cliente y lo que necesitas que pase cuando alguien llegue a la página. | `content/site.ts:175` | Descubrimiento |
| 123 | Proceso | 77% | paso | Nosotros encontramos la mejor forma de contarlo | `content/site.ts:179` | Estrategia |
| 124 | Proceso | 77% | cuerpo | Organizamos el mensaje y te mostramos cómo se verá antes de construirlo todo. | `content/site.ts:180` | Control y aprobación |
| 125 | Proceso | 79% | paso | Construimos y dejamos todo conectado | `content/site.ts:184` | Ejecución |
| 126 | Proceso | 79% | cuerpo | WhatsApp, formularios, pagos, Shopify o reservas: la página queda lista para hacer su trabajo. | `content/site.ts:185` | Funcionalidad |
| 127 | Proceso | 81% | paso | La publicamos y te enseñamos a usarla | `content/site.ts:189` | Entrega |
| 128 | Proceso | 81% | cuerpo | Conectamos tu dominio, dejamos la medición activa y te explicamos lo necesario en palabras simples. | `content/site.ts:190` | Autonomía |
| 129 | Estudio | 84% | eyebrow | 07 · SANTIAGO + MAFE | `components/site/SiteLanding.tsx:162` | Humanización |
| 130 | Estudio | 84% | H2 | Tu negocio primero. La parte difícil, con nosotros. | `components/site/SiteLanding.tsx:163` | Posicionamiento de acompañamiento |
| 131 | Estudio | 84% | cuerpo | Sitio es un estudio colombiano dirigido por Santiago y Mafe. Escuchamos lo que necesitas y lo convertimos en una página clara, atractiva y fácil de usar. | `components/site/SiteLanding.tsx:165` | Quién atiende |
| 132 | Estudio | 85% | cuerpo | Usamos inteligencia artificial para investigar, probar y perfeccionar más rápido; tú recibes mejor trabajo, en menos tiempo y a un precio más justo. | `components/site/SiteLanding.tsx:168` | Mecanismo de velocidad/precio |
| 133 | FAQ | 88% | eyebrow | 08 · PREGUNTAS FRECUENTES | `components/site/SiteLanding.tsx:177` | Resolución de objeciones |
| 134 | FAQ | 88% | H2 | Lo importante, sin letra menuda. | `components/site/SiteLanding.tsx:178` | Confianza |
| 135 | FAQ | 89% | pregunta | ¿Cuánto cuesta una página web? | `content/site.ts:202` | Objeción de precio |
| 136 | FAQ | 89% | respuesta | Una landing express parte de $350.000 COP y un ecommerce Shopify parte de $3.500.000 COP. Un sitio o una aplicación web se cotiza según alcance; el precio queda cerrado antes de construir. | `content/site.ts:204` | Filtro y certeza |
| 137 | FAQ | 90% | pregunta | ¿De verdad pueden entregar una landing en 48 horas? | `content/site.ts:207` | Credibilidad de tiempo |
| 138 | FAQ | 90% | respuesta | Sí, cuando el alcance es una landing express y el contenido está listo. Los sitios, tiendas y aplicaciones tienen un cronograma propio porque requieren más decisiones y conexiones. | `content/site.ts:209` | Condición de promesa |
| 139 | FAQ | 91% | pregunta | ¿Usan inteligencia artificial para hacer las páginas? | `content/site.ts:212` | Objeción de calidad |
| 140 | FAQ | 91% | respuesta | Sí. La usamos para analizar, probar y perfeccionar la página con más velocidad. También organizamos la información para que Google y los asistentes de IA puedan entender mejor tu negocio; las decisiones finales siguen teniendo criterio humano. | `content/site.ts:214` | Mecanismo y control humano |
| 141 | FAQ | 92% | pregunta | ¿Pueden conectar pagos, Shopify, reservas o WhatsApp? | `content/site.ts:217` | Capacidad funcional |
| 142 | FAQ | 92% | respuesta | Sí. Sitio no entrega solo una apariencia: conectamos la página con la acción que el negocio necesita, desde una conversación hasta una compra o una herramienta interna. | `content/site.ts:219` | Diferencial funcional |
| 143 | FAQ | 93% | pregunta | ¿La página queda a mi nombre? | `content/site.ts:222` | Miedo post-pago |
| 144 | FAQ | 93% | respuesta | Sí. El dominio y las cuentas principales deben quedar bajo control del negocio. También explicamos qué se paga cada año y qué necesita mantenimiento. | `content/site.ts:224` | Propiedad y transparencia |
| 145 | FAQ | 94% | pregunta | ¿Qué significa que esté optimizada para vender? | `content/site.ts:227` | Aclara promesa |
| 146 | FAQ | 94% | respuesta | Que el mensaje, el orden, la velocidad y las llamadas a la acción trabajan juntos para acercar a la persona a una compra, contacto, reserva o registro. No prometemos ventas sin tráfico ni oferta; construimos una mejor ruta para convertirlos. | `content/site.ts:229` | Mecanismo y límite |
| 147 | FAQ | 95% | pregunta | ¿Qué incluye el precio y qué se cobra aparte? | `content/site.ts:232` | Miedo a extras |
| 148 | FAQ | 95% | respuesta | Cada plan muestra su alcance. En Landing Express, los extras parten de $50.000 COP. Desde Sitio Negocio, las secciones e interacciones visuales necesarias están incluidas; funciones especiales, licencias o integraciones externas se cotizan antes de empezar. | `content/site.ts:234` | Límite económico |
| 149 | Cierre | 97% | eyebrow | 09 · TU SIGUIENTE PASO | `components/site/SiteLanding.tsx:197` | Señal de cierre |
| 150 | Cierre | 97% | H2 | Tú tienes el negocio. Hagamos la página | `components/site/SiteLanding.tsx:198` | CTA emocional |
| 151 | Cierre | 97% | link | Escribir por WhatsApp | `components/site/SiteLanding.tsx:201` | Conversión |
| 152 | Cierre | 97% | microcopy | Hola, quiero hacer mi página con ustedes. | `components/site/SiteLanding.tsx:202` | Anticipa el mensaje |
| 153 | Footer | 100% | lema | Páginas que venden. | `components/site/SiteLanding.tsx:210` | Cierre de marca |
| 154 | Footer | 100% | contacto | sitio.web.co@gmail.com | `content/site.ts:5`; `components/site/SiteLanding.tsx:212` | Canal alterno |
| 155 | Footer | 100% | contacto | @sitio.colombia | `content/site.ts:6`; `components/site/SiteLanding.tsx:213` | Canal social |
| 156 | Footer | 100% | contacto | +57 317 379 9264 | `content/site.ts:8`; `components/site/SiteLanding.tsx:214` | Conversión |
| 157 | Footer | 100% | legal | © 2026 SITIO · COLOMBIA | `components/site/SiteLanding.tsx:216` | Cierre y territorio |

## CTA: destino, jerarquía y mensaje

Todos los enlaces de WhatsApp usan el mismo destino:

`https://wa.me/573173799264?text=Hola%2C%20quiero%20hacer%20mi%20p%C3%A1gina%20con%20ustedes.`

Mensaje: **“Hola, quiero hacer mi página con ustedes.”**

| Origen | Texto | Jerarquía | Riesgo actual |
|---|---|---|---|
| Nav | Hablemos | Botón azul persistente en escritorio; oculto en móvil ≤640 px | No dice qué pasa ni califica |
| Hero | Quiero mi página | Botón azul principal | Mensaje genérico |
| Google + IA | Quiero que encuentren mi negocio | Botón blanco sobre azul | El mensaje de WhatsApp pierde el motivo de origen |
| Precio · Landing | Quiero empezar | Botón azul | No menciona plan ni presupuesto |
| Precio · Sitio | Quiero el más completo | Botón blanco sobre azul | No menciona plan ni presupuesto |
| Precio · Tienda | Quiero vender online | Botón azul | No menciona productos ni cantidad |
| Cierre | Escribir por WhatsApp | Enlace de alto contraste | Mensaje genérico |
| Footer | +57 317 379 9264 | Link textual | Mensaje genérico |

## Afirmaciones y promesas

1. Sitio hace la página mientras el cliente se concentra en vender.
2. Recomienda qué página necesita el negocio, cuánto cuesta y cuándo puede estar lista.
3. Una página puede quedar clara, rápida y lista para vender.
4. Landing desde $350.000 COP y desde 48 horas.
5. El precio se cierra antes de empezar y la publicación está incluida.
6. Sitio prepara contenido para Google, asistentes con búsqueda y analítica.
7. Las tiendas incluyen catálogo, carrito, pagos, envíos y capacitación.
8. Desde Sitio Negocio no se cobran por separado secciones e interacciones visuales necesarias.
9. Se muestra cómo se verá antes de construirlo todo.
10. Sitio conecta dominio, medición y enseña lo necesario.
11. El dominio y las cuentas principales quedan bajo control del negocio.
12. La IA acelera investigación, prueba y perfeccionamiento con criterio humano.

Las promesas de precio y oferta están respaldadas por `meta-prompt-sitio-landing.md:14`. No existe aún prueba externa de tiempos reales de entrega, resultados comerciales, satisfacción, permanencia del soporte o cantidad de proyectos.

## Prueba disponible, por potencia

| Prueba | Tipo | Potencia | Límite |
|---|---|---|---|
| Ciclo funcional | Producto navegable | Media-alta | No es prueba de resultado para un cliente |
| Aula · Valora | Caso real con institución identificada y capturas | Media | No incluye testimonio ni resultado medible |
| Alerto | Producto real con capturas | Media | El documento de conversión pide no integrarlo en esta landing |
| VIGOR | Demo conceptual | Baja-media | Prueba gusto y ejecución, no cumplimiento con clientes |
| Logos tecnológicos | Autoridad prestada | Baja | Demuestran herramientas, no una relación comercial con esas marcas |
| Precios y alcance por escrito | Especificidad de oferta | Media | No prueba cumplimiento histórico |
| Santiago + Mafe | Presencia humana | Media-baja | Sin foto, rol, firma ni compromiso operativo explícito |

No hay testimonios, métricas verificables, resultados de clientes, número de proyectos, años de experiencia ni calificaciones. No deben inventarse.

## Cifras

| Cifra | Uso | Verificabilidad |
|---|---|---|
| $350.000 COP | Landing / plan inicial | Confirmada en meta-prompt |
| $500.000 COP | Precio anterior | Confirmada como “antes” en meta-prompt |
| $990.000 COP | Sitio Negocio | Confirmada en meta-prompt |
| $1.500.000 COP | Precio anterior | Confirmada como “antes” en meta-prompt |
| $3.500.000 COP | Tienda Shopify | Confirmada en meta-prompt |
| $5.000.000 COP | Precio anterior | Confirmada como “antes” en meta-prompt |
| 30%, 34%, 30% | Descuentos matemáticos redondeados | Derivables de los precios |
| 48 horas | Landing Express | Aparece en documentos anteriores; falta evidencia operativa publicada |
| 5 secciones | Landing Express | Alcance declarado |
| 5 páginas internas | Sitio Negocio | Alcance declarado |
| 20 productos | Carga inicial de Shopify | Alcance declarado |
| 4 proyectos | Portafolio | Hay cuatro entradas, pero una es demo |

## Imágenes y argumento

| Asset | Qué muestra | Argumento que sostiene |
|---|---|---|
| `public/projects/vigor/energia-celeste.jpg` | Prenda deportiva celeste | Dirección de arte para producto |
| `public/projects/vigor/vestido-vino.jpg` | Prenda deportiva vino | Coherencia visual de catálogo |
| `public/projects/vigor/flow-gris.jpg` | Prenda deportiva gris; no aparece en la landing | Ninguno en la versión actual |
| `public/projects/ciclo` vía iframe | Aplicación real funcionando | Capacidad de construir lógica e interacción |
| `public/projects/alerto/inicio-real.png` | Landing de Alerto | Capacidad de explicar un producto |
| `public/projects/alerto/panel-real.png` | Panel operativo | Capacidad de construir producto |
| `public/projects/alerto/login-real.png` | Login; no aparece en la landing | Ninguno en la versión actual |
| `public/projects/aula/inicio-real.png` | Inicio de Valora | Aplicación educativa real |
| `public/projects/aula/flujo-real.png` | Flujo estudiantil | Claridad de interacción |
| `public/projects/aula/docente-real.png` | Acceso docente; aparece en el caso, no en la portada | Capacidad multirol |
| `public/og.png` | Portada social | Identidad al compartir; no persuade dentro de la landing |

## Precios

Hay tres planes, en orden de menor a mayor inversión:

1. **Landing Express** — $350.000 COP.
2. **Sitio Negocio** — $990.000 COP, resaltado como “MÁS POPULAR” y “Recomendado”.
3. **Tienda Shopify** — $3.500.000 COP.

Fortalezas: precio visible, ancla, alcance, extras y publicación. Faltan: forma de pago, rondas de cambios, soporte posterior, propiedad exacta de archivos/cuentas, costos recurrentes específicos y condiciones de los descuentos.

## La promesa en tres frases

Sitio promete diseñar, conectar y publicar páginas web para negocios colombianos mientras sus dueños siguen concentrados en vender. Lo ofrece a personas no técnicas que necesitan una página, una tienda o una herramienta web y quieren saber el precio antes de empezar. A cambio pide que el visitante abra WhatsApp y escriba un mensaje genérico de intención.

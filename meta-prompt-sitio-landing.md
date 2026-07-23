# Meta-prompt — Landing / portafolio de Sitio (agencia de diseño web)

> **Cómo usar este documento.** Pégalo completo como primer mensaje en tu herramienta de build (Claude Code, Cursor, v0, Claude Design, etc.). Antes de escribir una sola línea de código, el modelo debe (1) confirmar el stack, (2) inventariar la carpeta de imágenes de proyectos que le paso, y (3) hacerme las preguntas del bloque final. **No debe asumir nada crítico que no esté aquí: si le falta información, pregunta.** No quiero un "placeholder bonito", quiero decisiones.

> **Estado del proyecto:** dirección de diseño **aprobada** (§6). Idioma **español (Colombia)**. **Sitio real y desplegable** (dominio + contacto por WhatsApp + analítica). **Logo recibido** (wordmark "sitio." — ver §4) y **acento de color fijado: Azul Sitio `#0057FF`**. Pendiente: carpeta de imágenes de proyectos y las preguntas del §12.

## 0. Decisiones confirmadas — 21 julio 2026

- **Posicionamiento:** híbrido. Sitio combina herramientas, repositorios sólidos e IA para entregar rápido y por debajo del promedio, sin sacrificar diseño a medida ni funcionalidad.
- **Promesa:** **“Páginas que venden.”** Cada landing, sitio, ecommerce o app debe acercar al usuario a una compra, contacto, reserva o registro.
- **Ángulo de copy:** vender tranquilidad antes que tecnología. Dolor central: el dueño ya tiene producto, clientes y demasiadas cosas por resolver; Sitio se encarga de la página. Hero aprobado: **“Tú vendes. Nosotros hacemos tu página.”**
- **Mercado:** Colombia. No mencionar Bucaramanga ni posicionar la marca como estudio local de una ciudad.
- **Servicios:** landing pages, sitios web, Shopify/ecommerce y aplicaciones web; ninguno es secundario.
- **Precios públicos de lanzamiento:** Landing Express `$350.000 COP` (antes `$500.000`); Sitio Negocio `$990.000 COP` (antes `$1.500.000`, plan recomendado); Tienda Shopify `$3.500.000 COP` (antes `$5.000.000`). Desde Sitio Negocio, secciones e interacciones visuales incluidas; funciones especiales/licencias se cotizan aparte. Regalo: mini kit de lanzamiento con pieza para compartir, QR y enlace de WhatsApp.
- **CTA:** WhatsApp `+57 317 379 9264`, con mensaje: “Hola, quiero hacer mi página con ustedes.”
- **Datos públicos:** `sitio.com.co` · Instagram `@sitio.colombia` · equipo visible: Santiago + Mafe.
- **Portafolio actual:** VIGOR y Ciclo son **demos conceptuales**. Alerto y Aula · Valora son **proyectos reales** con capturas extraídas de sus aplicaciones. Etiquetar cada tipo con total claridad y no inventar métricas, clientes ni resultados.
- **Assets:** hay material visual para VIGOR y capturas reales de Alerto y Aula · Valora. Ciclo mantiene un preview de interfaz propio hasta contar con material definitivo.
- **Implementación:** trabajar sobre `/LANDING SITIO/sitio`, desplegar en Vercel, conectar dominio y analítica.
- **Infraestructura disponible:** dominio comprado en GoDaddy; cuenta de GitHub de Alerto disponible; cuenta de Vercel pendiente.

---

## 1. Rol

Actúa como un equipo senior de estudio: **director de arte + ingeniero front-end senior + estratega UX**, del tipo que da a cada cliente una identidad visual que no podría confundirse con la de nadie más. La dirección ya está definida (§6): tu trabajo es **ejecutarla con precisión** y criticar sin piedad cualquier cosa que se sienta genérica o "hecha por IA".

## 2. Contexto del cliente

**Sitio** es un estudio colombiano dirigido por Santiago y Mafe. Diseña y construye sitios y aplicaciones web a medida: ecommerce premium, tiendas Shopify, apps web y landings de conversión.

Esta pieza **es el sitio propio de Sitio** — su carta de presentación, real y desplegable. Su trabajo es uno: **conseguir que un prospecto cualificado escriba o agende una llamada.** Todo lo demás sirve a ese objetivo o sobra.

**Idioma del sitio: español**, público local colombiano. Copy natural, no traducido del inglés.

## 3. Stack técnico (obligatorio)

- **Next.js (App Router) + TypeScript + Tailwind CSS**
- **Framer Motion (motion)** para micro-interacciones y transiciones de componente
- **Scroll nativo y estable**; no usar GSAP/ScrollTrigger ni Lenis salvo que una necesidad futura lo justifique y se pruebe en móvil y escritorio
- Primitivas propias como primera opción. Usa **Aceternity UI**, **Magic UI** o 21st.dev solo cuando aporten una interacción difícil de construir mejor y no agreguen peso o estética de plantilla.
- **`next/image`** para toda imagen; **`next/font`** para tipografías (Bricolage Grotesque, Geist, Geist Mono vía Google Fonts)
- **Contacto por WhatsApp directo**: el CTA principal ("Hablemos") abre un enlace `wa.me/<número>` con mensaje prellenado. Sin formulario ni backend. (Deja el número como dato en `/content` o variable de entorno.)
- **Analítica**: Vercel Analytics (o Plausible si se prefiere sin cookies)
- **Deploy en Vercel**
- WebGL/3D (**React Three Fiber + Drei**, o **Spline**) es **opcional** y solo si suma al momento estrella.

Si otra herramienta es claramente mejor para un requisito, propónmelo con el porqué antes de cambiarlo — no lo cambies en silencio.

## 4. Assets (mis imágenes y logo)

**Logo (recibido):** wordmark propio **"sitio."** — letras redondeadas, chunky, con carácter amable/disruptivo, **y con punto**. Úsalo **tal cual** como wordmark en nav y hero (no lo re-tipografíes con otra fuente). Vienen **dos versiones**: *azul sobre claro* y *blanco sobre azul* → mapean directo a las secciones claras (hueso) y a las secciones azules a sangre (§6). **El punto del logo ES la firma del pin**: el punto del titular del hero usa el mismo Azul Sitio y rima con el punto del logo.

**Imágenes de proyectos (pendientes):** cuando llegue la carpeta, **inventaríala primero** y mapéala a secciones; dime qué falta. Arte-dirige (crops intencionados, un tratamiento coherente para todo, `sizes` correctos). **Prohibido stock genérico de relleno**; si falta una imagen, **pídemela** — no la inventes con IA. Optimiza (AVIF/WebP, lazy-load bajo el fold, sin CLS).

## 5. Arquitectura de información

Landing de una página, en este orden:

1. **Nav** — mínima, sticky con smart-hide, logo + un solo CTA ("Hablemos").
2. **Hero** — el momento estrella (§6, §7). Propuesta de valor en una frase + CTA. Es la **tesis** del sitio.
3. **Servicios** — mostrar desde el inicio que cualquier negocio puede tener la página adecuada: landing, sitio, ecommerce o app web, en lenguaje del cliente.
4. **Selected Work / Demos** — VIGOR y Ciclo como demos; Alerto y Aula · Valora como proyectos reales. Aquí el prospecto puede abrir demos o ver casos sin confundir conceptos con trabajo construido (§11).
5. **Precios** — tres planes públicos, descuento visible, segundo plan recomendado, alcance y regalo sin letra menuda.
6. **Proceso** — cómo trabaja el estudio, en pasos reales. **Numera solo si es una secuencia real.**
7. **Google + buscadores con IA** — explicar en lenguaje simple cómo se estructura el negocio para que Google y asistentes con búsqueda puedan entenderlo. No prometer el primer lugar ni decir “somos los únicos” sin prueba.
8. **Sobre Sitio** — Santiago + Mafe; vender tranquilidad, criterio y velocidad, no el CV.
9. **Prueba social** — testimonios/logos si los tengo. Si no hay, **omite la sección**; no inventes testimonios.
10. **Contacto / CTA final** — CTA a **WhatsApp directo** (`wa.me` con mensaje prellenado). Sin formulario.
11. **Footer** — contacto, redes, cierre con carácter.

## 6. Dirección de diseño — APROBADA (seguir al pie de la letra)

Concepto: **"Sitio · coordenadas del oficio".** El nombre significa literalmente *lugar/sitio*: el estudio se presenta como un punto que puedes ubicar. Editorial, preciso y **profesional**, pero con un golpe **disruptivo** (el logo chunky + el azul eléctrico). **No** re-propongas otra dirección; ejecuta esta.

**Paleta (fija):**
- `#EFEBE3` — **Hueso** — papel cálido luminoso (hero y secciones claras)
- `#151412` — **Tinta** — casi-negro cálido (texto sobre claro; secciones oscuras puntuales)
- `#78756C` — **Piedra** — gris cálido neutro (mono, captions, metadatos, líneas)
- `#0057FF` — **Azul Sitio** — azul eléctrico de la marca; **acento único**. CTA, pin, links, y **secciones azules a sangre** puntuales (ver "Momento azul"). Centralízalo en **un único token** de Tailwind/CSS. *(Se descartan verde y brasa: un solo acento, el de la marca.)*

**Momento azul (lo disruptivo):** una o dos secciones a sangre en `#0057FF` con logo y texto en hueso/blanco (replica la versión blanco-sobre-azul del logo). Úsalo con moderación, para impacto — el contraste entre la calma del papel hueso y el azul eléctrico es la personalidad del sitio.

**Wordmark / logo:** usa el **logo real** (§4), no texto tipografiado. En secciones hueso, versión azul; en secciones azules, versión blanca.

**Tipografía (roles):**
- **Display / titulares:** **Bricolage Grotesque** (editorial, con carácter; 500–700, tracking ~-0.025em). No serif.
- **Texto / lectura:** **Geist**.
- **Datos / coordenadas / labels:** **Plus Jakarta Sans** (mayúsculas con letter-spacing en eyebrows).

Racional del par: el **logo** carga la personalidad juguetona/disruptiva; **Bricolage** aporta el titular editorial y profesional. Esa dualidad *es* "profesional y disruptivo". (Si se quiere más cohesión con el mark, se puede redondear el display — pero por defecto, Bricolage.)

**Firma (el único elemento memorable):** el titular del hero termina en un **pin** (círculo en Azul Sitio) que reemplaza el punto final — "Tú vendes. Nosotros hacemos tu página●" — y **rima con el punto del logo "sitio."**. Ese pin reaparece como marcador de sección.

**Ritmo:** alterna secciones hueso (claras), tinta (oscuras) y azul (impacto). Retícula editorial asimétrica de 12 columnas, márgenes generosos, un elemento "roto" por sección para tensión.

**Disciplina anti-plantilla:** antes de dar por buena cada sección, revísala: si algo se siente como lo que producirías para "cualquier agencia", cámbialo y dime qué y por qué. Gasta la audacia en la firma y el momento azul; todo lo demás, callado.

## 7. Interacciones (ultra-interactivo, con criterio)

Un puñado de momentos memorables a 60fps, no animar todo:

- **Momento estrella (hero):** el titular entra por líneas y el pin cierra “tu página”. El texto debe ser visible desde el primer render; nunca dejar un hero en blanco mientras carga la animación.
- **Scroll nativo**, suave mediante CSS y sin bloquear la rueda ni el touch.
- **Sin cursor personalizado.** Usar el cursor normal del sistema.
- **Reveals ligeros** con Framer Motion, solo en transform/opacity.
- **Bloque de casos:** recorrido vertical estable, demos siempre visibles y hover sutil. **No usar scroll horizontal fijado.**
- **Transición hero → servicios:** evitar titulares sueltos con grandes vacíos. Usar una promesa compacta en bloque tinta/azul y presentar landing, sitio, ecommerce y app como tarjetas 2×2 con color, alcance y precio visibles.
- **Transición al "momento azul":** el cambio a la sección azul a sangre puede ser un swipe/wipe de color como beat visual.
- **Count-up** de métricas reales (si las hay).

**No negociable:** solo `transform`/`opacity`, respeta **`prefers-reduced-motion`**, y si una animación no sirve al contenido, fuera — el exceso de animación delata "hecho por IA".

## 8. "0 AI slop" — reglas explícitas

**Copy prohibido** (filler): "elevamos tu marca", "creamos experiencias digitales", "damos vida a tus ideas", "transformamos tu presencia", "soluciones a medida" como muletilla. Copy **específico y verdadero** sobre Sitio y sus proyectos. Voz activa, sentence case. Si no sabes qué decir, **pregúntame**.

**Estética prohibida por defecto:** gradientes morado/azul por defecto, blobs de gradiente flotando, glassmorphism reflejo, blobs 3D sin sentido, partículas decorativas, emojis como íconos, mesh/aurora gradients. *(Ojo: aunque nuestro acento es azul, el azul se usa plano y con intención — nunca en gradientes genéricos.)*

**Evita los tres clústeres de diseño-IA:** (1) crema + serif + terracota (~#D97757, el acento de Claude — **delata IA**); (2) casi-negro + verde-ácido/bermellón; (3) periódico con hairlines y radius cero. Nuestra dirección ya los esquiva; mantenla así.

## 9. Calidad — no negociables

- **Rendimiento:** Lighthouse 95+ desktop, 90+ mobile. LCP < 2.5s, CLS < 0.1. `next/image` con `sizes`, code-splitting, sin third-parties bloqueantes.
- **Accesibilidad:** HTML semántico, teclado con focus visible, alt text, contraste AA (cuidar texto sobre Azul Sitio → usar hueso/blanco), `prefers-reduced-motion`.
- **SEO:** metadata + OpenGraph + Twitter cards, datos estructurados `Organization` con área de servicio Colombia, sitemap, robots, canonical y headings correctos.
- **Responsive:** mobile-first real; interacciones degradan con gracia en touch.
- **Modo:** solo claro, sin toggle claro/oscuro. Las secciones tinta y azul son secciones de diseño, no un tema oscuro.

## 10. Código y mantenibilidad

El fundador es no-técnico: **debe editar contenido sin tocar componentes.**

- **Contenido en archivos de datos tipados** (`/content/projects.ts`, `/content/services.ts`) — copy, proyectos, links, todo fuera del JSX.
- **Azul Sitio en un único token** para cambios de una línea.
- Componentes pequeños, comentados donde importe.
- **README**: correr en local, editar copy/imágenes/proyectos, cambiar el token de acento, desplegar en Vercel.
- Cuidado con especificidad de selectores CSS que se cancelan (paddings/margins entre secciones).

## 11. Contenido real a usar (confírmame / amplíame)

- **VIGOR** — demo conceptual de ecommerce para una marca colombiana de activewear. Puede mostrar dirección de arte, UX ecommerce y sistema de producto; no atribuir resultados.
- **Ciclo** — demo conceptual y funcional de una calculadora de sueño. No presentarla como producto publicado ni caso de cliente.
- **Alerto** — proyecto real de producto SaaS para clínicas. Mostrar su landing y panel; describir el problema y la solución sin atribuir resultados no medidos.
- **Aula · Valora** — proyecto real de evaluación actitudinal para la IED Betania Norte. Mostrar el flujo estudiantil y el acceso docente; no inventar métricas ni testimonios.

Si hay otros proyectos, dímelos. **No inventes proyectos ni resultados.**

## 12. Pendientes reales

1. Completar los casos reales con enlace público y capturas móviles cuando estén desplegados; mantener las vistas actuales sincronizadas con el producto.
2. Añadir métricas, testimonios y logos solo cuando provengan de clientes reales y exista permiso para publicarlos.
3. Confirmar ticket ideal, capacidad mensual, vigencia de los descuentos y costo real de extras antes del lanzamiento público.
4. Conectar `sitio.com.co` al despliegue de Vercel y validar Google Search Console cuando la versión final esté publicada.

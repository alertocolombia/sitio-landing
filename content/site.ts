const whatsappUrl = (message: string) =>
  `https://wa.me/573173799264?text=${encodeURIComponent(message)}`;

export const whatsappLinks = {
  general: whatsappUrl(
    "Hola, vi la página de Sitio. Mi negocio es ___ y quiero saber qué página me conviene para ___.",
  ),
  hero: whatsappUrl(
    "Hola, tengo un negocio de ___. Vendo ___ y quiero que mi página me ayude a ___. ¿Qué tipo de página necesito?",
  ),
  google: whatsappUrl(
    "Hola, quiero que mi negocio se entienda mejor en Google y en búsquedas con IA. Mi negocio es ___ y hoy aparezco/no aparezco cuando buscan ___.",
  ),
  final: whatsappUrl(
    "Hola, leí la página de Sitio. Mi negocio es ___, vendo ___ y quiero que la página me ayude a ___.",
  ),
} as const;

export const site = {
  name: "Sitio",
  domain: "sitio.com.co",
  url: "https://sitio.com.co",
  email: "sitio.web.co@gmail.com",
  instagram: "@sitio.colombia",
  instagramUrl: "https://instagram.com/sitio.colombia",
  phone: "+57 317 379 9264",
  whatsapp: whatsappLinks.general,
  description:
    "Creamos páginas web y tiendas en línea para negocios en Colombia. Tú vendes; Sitio resuelve el diseño, las conexiones y la publicación.",
} as const;

export const navigation = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Trabajo", href: "#trabajos" },
  { label: "Precios", href: "#precios" },
] as const;

export const services = [
  {
    name: "Página para vender",
    short: "Una oferta clara, una sola ruta y menos vueltas para tu cliente.",
    description:
      "Presenta un producto o servicio, responde lo importante y lleva a la persona a escribirte, registrarse o comprar.",
    price: "Desde $350.000 COP",
    timing: "Express desde 48 horas",
  },
  {
    name: "Página para tu negocio",
    short: "Tu negocio ya hace mucho. Tu página debería demostrarlo.",
    description:
      "Ordenamos lo que hace, lo contamos con claridad y construimos una presencia que da confianza y genera oportunidades.",
    price: "Alcance a la medida",
    timing: "Cotización antes de empezar",
  },
  {
    name: "Tienda en línea",
    short: "Tú tienes el producto. Nosotros construimos la tienda.",
    description:
      "Dejamos catálogo, carrito, pagos y envíos listos para que tus clientes compren y tú puedas administrar.",
    price: "Desde $3.500.000 COP",
    timing: "Lista para operar",
  },
  {
    name: "Herramienta para tu negocio",
    short: "Cuando necesitas algo que una página normal no puede hacer.",
    description:
      "Convertimos una idea en calculadoras, reservas, portales o herramientas útiles para tu negocio y tus clientes.",
    price: "Alcance a la medida",
    timing: "Solución a la medida",
  },
] as const;

export const businessSectors = [
  {
    name: "Salud",
    eyebrow: "MÉDICOS Y PROFESIONALES DE LA SALUD",
    title: "Antes de elegirte, tus pacientes te buscan.",
    description:
      "Si no encuentran información clara y confiable sobre ti, es fácil que sigan de largo. Creamos una página que presenta tu experiencia, tus servicios y la forma de agendar, con la seriedad que tu profesión merece.",
    results: [
      "Perfil que transmite confianza",
      "Servicios fáciles de entender",
      "Citas y contacto a un clic",
    ],
    cta: "Quiero mi página profesional",
    href: whatsappUrl(
      "Hola, soy profesional del sector salud y quiero una página que presente mi experiencia, mis servicios y facilite las citas. Mi especialidad es ___.",
    ),
    tone: "health",
  },
  {
    name: "Servicios",
    eyebrow: "SERVICIOS PROFESIONALES",
    title: "Que tu trabajo convenza antes de la primera llamada.",
    description:
      "Ordenamos lo que haces, por qué elegirte y cómo contratarte en una página clara que convierte el interés en una conversación.",
    results: [
      "Una oferta fácil de entender",
      "Experiencia y resultados visibles",
      "Cotización o WhatsApp a un clic",
    ],
    cta: "Quiero presentar mejor mi servicio",
    href: whatsappUrl(
      "Hola, quiero una página que presente mejor mis servicios y convierta visitas en conversaciones. Mi negocio es ___.",
    ),
    tone: "services",
  },
  {
    name: "Ecommerce",
    eyebrow: "TIENDAS EN LÍNEA",
    title: "De mirar a comprar, sin perder el impulso.",
    description:
      "Diseñamos una experiencia de compra directa, confiable y fácil de recorrer, para que tus productos tengan el espacio que merecen.",
    results: [
      "Catálogo claro y atractivo",
      "Compra sin pasos innecesarios",
      "Una marca que inspira confianza",
    ],
    cta: "Quiero vender en línea",
    href: whatsappUrl(
      "Hola, quiero una tienda en línea clara y fácil de comprar. Vendo ___ y necesito que mis clientes puedan ___.",
    ),
    tone: "commerce",
  },
  {
    name: "Reservas",
    eyebrow: "CITAS Y RESERVAS",
    title: "Haz que reservar sea la parte más fácil.",
    description:
      "Presentamos tu servicio y llevamos al cliente hasta la reserva con menos dudas, menos mensajes de ida y vuelta y una ruta clara.",
    results: [
      "Horarios y condiciones claras",
      "Reserva sin fricción",
      "Contacto siempre visible",
    ],
    cta: "Quiero recibir reservas",
    href: whatsappUrl(
      "Hola, quiero una página que explique mi servicio y facilite las reservas. Mi negocio es ___.",
    ),
    tone: "booking",
  },
  {
    name: "Cursos",
    eyebrow: "CURSOS Y FORMACIÓN",
    title: "Tu conocimiento merece una vitrina a su altura.",
    description:
      "Convertimos tu experiencia en una oferta de aprendizaje clara, deseable y lista para recibir inscripciones.",
    results: [
      "Promesa de valor concreta",
      "Contenido y perfil bien presentados",
      "Inscripción fácil de completar",
    ],
    cta: "Quiero lanzar mi curso",
    href: whatsappUrl(
      "Hola, quiero una página para presentar y vender mi curso. Enseño ___ y quiero recibir inscripciones por ___.",
    ),
    tone: "education",
  },
] as const;

export const pricing = [
  {
    name: "Página Express",
    audience: "Para lanzar, validar o empezar sin vueltas.",
    regularPrice: "$500.000",
    price: "$350.000",
    currency: "COP",
    discount: "30% menos",
    timing: "Desde 48 horas",
    featured: false,
    features: [
      "Una página de hasta 5 secciones",
      "Diseño adaptado a tu marca",
      "Botón de WhatsApp o formulario",
      "Versión celular y computador",
      "Contenido organizado para Google",
      "Publicación y conexión del dominio",
    ],
    bonus: "Extras desde $50.000 COP",
    cta: "Quiero empezar",
    whatsapp: whatsappUrl(
      "Hola, me interesa la Página Express de $350.000 COP. Mi negocio es ___, vendo ___ y quiero que la página me ayude a ___.",
    ),
  },
  {
    name: "Página para tu negocio",
    audience: "Para explicar, convencer y recibir clientes.",
    regularPrice: "$1.500.000",
    price: "$990.000",
    currency: "COP",
    discount: "34% menos",
    timing: "Recomendado",
    featured: true,
    features: [
      "Hasta 5 páginas internas",
      "Textos y diseño completamente a la medida",
      "Secciones e interacciones visuales incluidas",
      "Formularios, WhatsApp y medición",
      "Preparada para Google y búsquedas con IA",
      "Publicación y conexión del dominio",
    ],
    bonus: "Gratis: mini kit de lanzamiento con pieza para compartir, QR y enlace directo a WhatsApp",
    cta: "Quiero el más completo",
    whatsapp: whatsappUrl(
      "Hola, me interesa la Página para tu negocio de $990.000 COP. Mi negocio es ___, vendo ___ y quiero que la página me ayude a ___.",
    ),
  },
  {
    name: "Tienda en línea",
    audience: "Para vender productos y administrar sin depender de nosotros.",
    regularPrice: "$5.000.000",
    price: "$3.500.000",
    currency: "COP",
    discount: "30% menos",
    timing: "Lista para operar",
    featured: false,
    features: [
      "Diseño de tienda a la medida",
      "Carga inicial de hasta 20 productos",
      "Carrito, pagos y configuración de envíos",
      "Secciones e interacciones visuales incluidas",
      "Preparada para Google y búsquedas con IA",
      "Capacitación para administrar la tienda",
    ],
    bonus: "Gratis: mini kit de lanzamiento con pieza para compartir, QR y enlace directo a WhatsApp",
    cta: "Quiero vender online",
    whatsapp: whatsappUrl(
      "Hola, me interesa la Tienda en línea desde $3.500.000 COP. Vendo ___ y necesito que mis clientes puedan ___.",
    ),
  },
] as const;

/*
 * Alerto SE QUEDA en el portafolio (decidido el 23 jul 2026).
 * La auditoría del 22 de julio pedía retirarlo por una supuesta instrucción
 * expresa, pero el meta-prompt del 21 de julio —que manda cuando hay
 * contradicción— lo lista como proyecto real a mostrar. Además es producto
 * propio (sin permisos de terceros) y es la única prueba del sector salud,
 * que la landing sí vende. Aquí queda zanjado para no volver sobre el tema.
 */
export const projects = [
  {
    name: "Aula · Valora",
    type: "Herramienta para educación",
    description:
      "Producto real para la IED Betania Norte: coevaluación y autoevaluación desde el celular, con acceso y seguimiento docente.",
    deliverables: ["Flujo estudiantil", "Panel docente", "Base de datos"],
    href: "/trabajos/aula",
    tone: "aula",
    kind: "real",
  },
  {
    name: "Ciclo",
    type: "Herramienta para cuidar el sueño",
    description:
      "Aplicación real que convierte una hora de despertar en un plan completo: ciclos, rutina nocturna, siestas, cronotipo y deuda de sueño.",
    deliverables: ["Experiencia", "Diseño", "Lógica funcional"],
    href: "/trabajos/ciclo",
    tone: "ciclo",
    kind: "real",
  },
  {
    name: "Alerto",
    type: "Herramienta para clínicas",
    description:
      "Producto real para recordar citas, gestionar cancelaciones y ver la agenda desde un solo lugar.",
    deliverables: ["Historia comercial", "Panel operativo", "Flujos conectados"],
    href: "/trabajos/alerto",
    tone: "alerto",
    kind: "real",
  },
  {
    name: "VIGOR",
    type: "Demo de tienda de ropa deportiva",
    description:
      "Mira cómo un producto puede sentirse especial antes de tocarlo: catálogo claro, deseo visual y una ruta directa a comprar.",
    deliverables: ["Dirección visual", "Ruta de compra", "Sistema de producto"],
    href: "/trabajos/vigor",
    tone: "vigor",
    kind: "demo",
  },
] as const;

export const process = [
  {
    title: "Tú nos cuentas qué vendes",
    text: "Escuchamos tu negocio, tu cliente y lo que necesitas que pase cuando alguien llegue a la página.",
  },
  {
    title: "Nosotros encontramos la mejor forma de contarlo",
    text: "Organizamos el mensaje y te mostramos cómo se verá antes de construirlo todo.",
  },
  {
    title: "Construimos y dejamos todo conectado",
    text: "WhatsApp, formularios, pagos, Shopify o reservas: la página queda lista para hacer su trabajo.",
  },
  {
    title: "La publicamos y te enseñamos a usarla",
    text: "Conectamos tu dominio, dejamos la medición activa y te explicamos lo necesario en palabras simples.",
  },
] as const;

export const principles = [
  "Contenido organizado alrededor de lo que tus clientes realmente buscan.",
  "Servicios, ubicación y contacto claros para Google y los asistentes de IA.",
  "Medición instalada para saber qué atrae visitas, mensajes y reservas.",
] as const;

export const trustPoints = [
  {
    title: "Precio y alcance por escrito",
    text: "Antes de construir sabes qué incluye tu página, cuánto cuesta y qué se cotizaría aparte.",
  },
  {
    title: "Tu negocio conserva el control",
    text: "El dominio y las cuentas principales deben quedar bajo control de tu negocio.",
  },
  {
    title: "Publicación incluida",
    text: "Conectamos el dominio, publicamos la página y te explicamos lo necesario para usarla.",
  },
  {
    title: "Personas reales al frente",
    text: "Sitio está dirigido por Santiago y Mafe: escuchamos tu negocio y convertimos lo complejo en decisiones claras.",
  },
] as const;

export const faqs = [
  {
    question: "¿Cuánto cuesta una página web?",
    answer:
      "Una página express parte de $350.000 COP y una tienda en línea parte de $3.500.000 COP. Una página más amplia o una herramienta a la medida se cotiza según alcance; el precio queda cerrado antes de construir.",
  },
  {
    question: "¿Cómo se paga?",
    answer:
      "En dos partes: la mitad para empezar y la otra mitad cuando apruebas el resultado, antes de publicar. La Página Express, por su valor, se puede pagar completa al inicio. Todo queda por escrito antes de arrancar.",
  },
  {
    question: "¿De verdad pueden entregar una página en 48 horas?",
    answer:
      "Sí, cuando es una Página Express y el contenido está listo. Las páginas más amplias, tiendas y herramientas tienen un cronograma propio porque requieren más decisiones y conexiones.",
  },
  {
    question: "¿Usan inteligencia artificial para hacer las páginas?",
    answer:
      "Sí. La usamos para analizar, probar y perfeccionar la página con más velocidad. También organizamos la información para que Google y los asistentes de IA puedan entender mejor tu negocio; las decisiones finales siguen teniendo criterio humano.",
  },
  {
    question: "¿Pueden conectar pagos, Shopify, reservas o WhatsApp?",
    answer:
      "Sí. Sitio no entrega solo una apariencia: conectamos la página con la acción que el negocio necesita, desde una conversación hasta una compra, reserva o herramienta interna.",
  },
  {
    question: "¿La página queda a mi nombre?",
    answer:
      "Sí. El dominio y las cuentas principales deben quedar bajo control del negocio. También explicamos qué se paga cada año y qué necesita mantenimiento.",
  },
  {
    question: "¿Cuántos ajustes puedo pedir?",
    answer:
      "La Página Express incluye una ronda de ajustes y las páginas más grandes incluyen dos. Una ronda es una lista de cambios junta, no correcciones sueltas una por una. Si necesitas más, se cotizan antes de hacerlos, nunca después.",
  },
  {
    question: "¿Qué pasa después de publicar?",
    answer:
      "Durante los primeros 30 días corregimos sin costo cualquier error o falla de la página. Los contenidos nuevos —agregar productos, secciones o campañas— se cotizan aparte, y te explicamos cómo hacer los ajustes del día a día por tu cuenta.",
  },
  {
    question: "¿Qué significa que esté optimizada para vender?",
    answer:
      "Que el mensaje, el orden, la velocidad y las llamadas a la acción trabajan juntos para acercar a la persona a una compra, contacto, reserva o registro. No prometemos ventas sin tráfico ni oferta; construimos una mejor ruta para convertirlos.",
  },
  {
    question: "¿Qué incluye el precio y qué se cobra aparte?",
    answer:
      "Cada plan muestra su alcance. En Página Express, los extras parten de $50.000 COP. Desde Página para tu negocio, las secciones e interacciones visuales necesarias están incluidas; funciones especiales, licencias o conexiones externas se cotizan antes de empezar.",
  },
] as const;

/*
 * Datos que la conversión todavía necesita. No se publican hasta confirmarlos.
 * Mantenerlos aquí evita rellenar la landing con promesas o pruebas inventadas.
 *
 * Confirmado el 23 jul 2026 (ya reflejado en las FAQ):
 * - Pago: 50% para empezar, 50% al aprobar antes de publicar; Express admite 100% al inicio.
 * - Ajustes: 1 ronda en Express, 2 en planes mayores.
 * - Post-publicación: 30 días de corrección de errores sin costo.
 * - Descuentos: precio de referencia permanente, sin fecha de vencimiento.
 * Política interna (NO publicada en la web): si el cliente desiste tras ver la
 * propuesta, se reembolsa el 50% del anticipo y se retiene el 50% que cubre el trabajo.
 */
export const conversionPending = [
  "{{PENDIENTE}} ¿Qué mantenimiento necesita cada tipo de página y cuánto puede costar?",
  "{{PENDIENTE}} ¿Cuánto tarda normalmente cada plan, además del Express desde 48 horas?",
  "{{PENDIENTE}} ¿Qué puede editar el cliente por su cuenta en cada plan?",
  "{{PENDIENTE}} ¿Qué accesos se entregan al cerrar el proyecto y a nombre de quién queda cada cuenta?",
  "{{PENDIENTE}} ¿Qué casos tienen permiso para publicar, resultados medibles y testimonios verificables?",
] as const;

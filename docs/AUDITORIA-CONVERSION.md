# Auditoría de conversión — Sitio

Versión auditada: landing local del 22 de julio de 2026, antes de la intervención final.

## A. Veredicto en una página

La landing ya hace tres cosas mejor que la mayoría de estudios pequeños: muestra precios, distingue demos de proyectos reales y habla en un tono humano. El H1 “Tú vendes. Nosotros hacemos tu página” se entiende; “Hacerla no debería quitarte el sueño” conecta con la carga del dueño; y el alcance visible evita parte de la ansiedad comercial.

Lo grave no está en el diseño. Está en el traspaso de confianza. La página pide escribir por WhatsApp ocho veces, pero todos los clics terminan en el mismo mensaje: “Hola, quiero hacer mi página con ustedes.” El visitante pierde el contexto que acaba de construir y Sitio recibe un contacto sin negocio, objetivo, plan ni presupuesto. Es una conversión sin calificar.

La segunda fuga es el miedo post-pago. La página dice “Sin cobros sorpresa”, menciona propiedad del dominio y presenta a Santiago y Mafe, pero esas señales están dispersas y llegan tarde. El comprador escaldado quiere saber, antes de pagar: qué recibe, qué queda bajo su control, quién responde y qué pasa después de publicar. No necesita más logos tecnológicos; necesita una promesa operativa concreta.

La única intervención con mayor impacto es **cerrar la brecha de confianza entre el argumento y WhatsApp**: mostrar antes del precio las reglas confirmadas de trabajo y hacer que cada CTA abra un mensaje contextual que nombre necesidad, plan u objetivo. Esto mejora simultáneamente intención, calidad del primer mensaje y capacidad de responder bien.

No hay permiso para inventar testimonios, resultados, años, clientes o garantías. Tampoco hay base verificable para afirmar “MÁS POPULAR”. Los precios de lanzamiento sí están documentados en el meta-prompt, pero su vigencia debe confirmarse antes de publicar campañas con urgencia.

## B. Puntaje por criterio

| # | Criterio | Nota | Veredicto |
|---:|---|---:|---|
| 1 | Prueba de cinco segundos | 3/5 | Se entiende qué hace y qué tocar; falta por qué Sitio y para quién en Colombia. |
| 2 | Consciencia y sofisticación | 4/5 | Habla a alguien consciente de la solución, pero usa jerga que obliga a traducir. |
| 3 | Arquitectura narrativa | 2/5 | Tecnologías y portafolio llegan antes que dolor, proceso y confianza. |
| 4 | Titulares | 3/5 | Claros y memorables, pero varios son intercambiables con cualquier estudio. |
| 5 | CTA | 1/5 | Buena visibilidad, pésima calificación: todos usan el mismo mensaje genérico. |
| 6 | Prueba y credibilidad | 2/5 | Hay productos y capturas; no hay resultados, testimonios ni prueba de cumplimiento. |
| 7 | Precios | 3/5 | Son transparentes y específicos; faltan condiciones y “MÁS POPULAR” no está probado. |
| 8 | Portafolio | 2/5 | Demuestra ejecución, pero todavía funciona más como galería que como caso. |
| 9 | Matriz de objeciones | 2/5 | Precio y propiedad aparecen; pagos, ajustes, soporte y mantenimiento siguen vacíos. |
| 10 | Fricción y carga cognitiva | 3/5 | Navegación clara; el recorrido móvil es largo y la jerga aumenta esfuerzo. |
| 11 | Sesgos éticos | 3/5 | Hay anclaje y reciprocidad; “MÁS POPULAR” crea prueba social sin evidencia. |
| 12 | Jerarquía visual | 3/5 | El azul marca CTA, pero el pico visual está en Google/IA, no en confianza. |
| 13 | Silencios | 2/5 | No responde forma de pago, ajustes, soporte, mantenimiento ni entrega exacta de accesos. |
| 14 | Móvil primero | 3/5 | El contenido responde; el CTA persistente desaparece bajo 640 px y el portafolio se alarga. |
| 15 | Microcopy | 2/5 | Hay límites honestos, pero casi ningún CTA explica el siguiente paso. |
| 16 | Pico y final | 3/5 | El cierre tiene presencia; termina en un mensaje genérico que desperdicia intención. |
| 17 | Top of mind / heart | 3/5 | Existen ambos, pero compiten “hacemos” y “resolvemos” como dos frases distintas. |

## C. Hallazgos priorizados

### [P0-01] WhatsApp convierte intención en un “hola” sin contexto

**Severidad:** P0 (pierde ventas hoy)  
**Sección:** Todos los CTA · `content/site.ts:9-10`  
**Le falla a:** Los cuatro perfiles y Sitio  
**Dice hoy:** “Hola, quiero hacer mi página con ustedes.”  
**Por qué falla:** El modelo Fogg exige un detonante fácil en el pico de motivación. El enlace sí es fácil, pero elimina el contexto y obliga al prospecto a redactar desde cero o a Sitio a interrogarlo. No califica intención ni presupuesto.  
**Debería decir:**  
Variante 1 — directa: “Hola, mi negocio es ___, vendo ___ y quiero que mi página me ayude a ___.”  
Variante 2 — consultiva: “Hola, vi Sitio. Mi negocio es ___ y quiero saber qué página me conviene para ___.”  
Variante 3 — por plan: “Hola, me interesa [plan] de [precio]. Mi negocio vende ___ y necesito ___.”  
**Recomendada:** Usar Variante 2 en hero y navegación, y Variante 3 en cada precio, porque reduce ansiedad y conserva el origen.  
**Cómo se mide:** porcentaje de mensajes que ya incluyen tipo de negocio, objetivo o plan.

### [P0-02] La página dice que resuelve, pero no prueba que no dejará botado al cliente

**Severidad:** P0  
**Sección:** Hero, precios y FAQ · `components/site/Hero.tsx:59-79`; `components/site/SiteLanding.tsx:128-130`; `content/site.ts:222-224`  
**Le falla a:** Arquetipo escaldado y perfiles A/C  
**Dice hoy:** “Sin cobros sorpresa.” / “El dominio y las cuentas principales deben quedar bajo control del negocio.”  
**Por qué falla:** Aversión a la pérdida y riesgo post-pago. Las señales correctas existen, pero aparecen tarde y “deben quedar” suena a consejo, no a regla de trabajo.  
**Debería decir:**  
Variante 1 — directa: “Precio y alcance claros antes de empezar. Dominio y cuentas bajo el control de tu negocio.”  
Variante 2 — emocional: “La página no se queda amarrada a nosotros: tus cuentas y tu dominio siguen bajo tu control.”  
Variante 3 — específica: “Publicación incluida, alcance por escrito y cuentas principales bajo control de tu negocio.”  
**Recomendada:** Variante 3, porque usa únicamente hechos ya afirmados y no promete soporte sin confirmar.  
**Cómo se mide:** reducción de preguntas sobre propiedad/costos y aumento de mensajes que mencionan un plan concreto.

### [P0-03] El hero es claro, pero no identifica territorio ni mecanismo

**Severidad:** P0  
**Sección:** Hero · `components/site/Hero.tsx:25-79`  
**Le falla a:** Todos los perfiles  
**Dice hoy:** “TU NEGOCIO YA TIENE SUFICIENTES COSAS POR RESOLVER” / “Tú vendes. Nosotros hacemos tu página”  
**Por qué falla:** Prueba de cinco segundos y sofisticación de Schwartz. La promesa se entiende, pero podría pertenecer a cualquier estudio. La persona no ve todavía Colombia, publicación, conexiones ni el acompañamiento de una persona.  
**Debería decir:**  
Variante 1 — directa: “PÁGINAS WEB PARA NEGOCIOS EN COLOMBIA” + “Tú vendes. Nosotros resolvemos tu página.”  
Variante 2 — emocional: “TU NEGOCIO YA TIENE SUFICIENTE POR RESOLVER” + “Déjanos la página. Tú sigue vendiendo.”  
Variante 3 — específica: “Diseñamos, conectamos y publicamos tu página para recibir mensajes, reservas o ventas.”  
**Recomendada:** combinar el eyebrow de Variante 1, el H1 de Variante 1 y el apoyo de Variante 3. Unifica top of mind y explica el mecanismo.  
**Cómo se mide:** clic en hero y profundidad hasta servicios en móvil.

### [P0-04] Alerto contradice una instrucción expresa del documento final

**Severidad:** P0  
**Sección:** Trabajo · `content/site.ts:148-156`  
**Le falla a:** Perfil B y coherencia del encargo  
**Dice hoy:** “Alerto · SaaS · Automatización para clínicas”  
**Por qué falla:** El documento ordena no mencionar ni integrar el producto hermano en esta landing. Mantenerlo incumple una restricción explícita, aunque el caso exista.  
**Debería decir:** No necesita reemplazo inventado. Aula y Ciclo quedan como proyectos; VIGOR como demo.  
**Recomendada:** retirar Alerto de la portada y conservar su ruta sin enlazar, para no destruir trabajo ni cruzar ofertas.  
**Cómo se mide:** coherencia del portafolio; no es una prueba A/B.

### [P0-05] “MÁS POPULAR” usa prueba social no demostrada

**Severidad:** P0  
**Sección:** Precios · `components/site/SiteLanding.tsx:105-107`  
**Le falla a:** Arquetipo escaldado  
**Dice hoy:** “MÁS POPULAR”  
**Por qué falla:** Cialdini: la prueba social solo funciona si es real. Sin ventas verificables, erosiona la misma confianza que se intenta construir.  
**Debería decir:**  
Variante 1 — “RECOMENDADO”  
Variante 2 — “MEJOR PARA NEGOCIOS EN MARCHA”  
Variante 3 — “PARA EXPLICAR Y RECIBIR CLIENTES”  
**Recomendada:** “RECOMENDADO”, porque es una decisión editorial, no una afirmación estadística.  
**Cómo se mide:** calidad de selección del plan medio y objeciones sobre diferencias.

### [P1-01] El comprador debe traducir el idioma del estudio

**Severidad:** P1 (fricción notable)  
**Sección:** Servicios, precios y trabajo · `content/site.ts:22-168`  
**Le falla a:** Todos, especialmente C y D  
**Dice hoy:** “Landing pages”, “Shopify y ecommerce”, “Copy”, “SEO”, “UX/UI”, “Frontend SaaS”  
**Por qué falla:** Carga cognitiva y vocabulario propio del cliente. Cada anglicismo obliga a interpretar antes de evaluar.  
**Debería decir:**  
Variante 1 — por producto: “Página Express”, “Tienda en línea”, “Textos”, “Preparación para Google”.  
Variante 2 — por resultado: “Página para vender una oferta”, “Tienda para vender productos”, “Medición”.  
Variante 3 — mixta: nombre simple + explicación de resultado.  
**Recomendada:** Variante 3, porque mantiene categorías buscables sin pedir conocimiento técnico.  
**Cómo se mide:** menos preguntas “¿qué incluye?” y mensajes que nombran el plan correcto.

### [P1-02] El argumento emocional llega después de demasiada oferta y prueba

**Severidad:** P1  
**Sección:** Orden general · `components/site/SiteLanding.tsx:15-71`  
**Le falla a:** Arquetipo escaldado y perfil D  
**Dice hoy:** Servicios → cuatro proyectos → “Hacerla no debería quitarte el sueño.”  
**Por qué falla:** Arquitectura de persuasión. El visitante necesita sentirse entendido antes de procesar un portafolio largo.  
**Debería decir:** No es un cambio de frase; es un cambio de secuencia.  
**Recomendada:** Hero → Tranquilidad → Servicios → Proceso → Trabajo → Precios.  
**Cómo se mide:** profundidad de scroll y clic en CTA antes/después del bloque emocional.

### [P1-03] El portafolio prueba ejecución, no criterio ni resultado

**Severidad:** P1  
**Sección:** Trabajo · `components/site/WorkRail.tsx:20-37`; `content/site.ts:124-169`  
**Le falla a:** Perfiles A, B y C  
**Dice hoy:** nombres, categoría, descripción y etiquetas técnicas.  
**Por qué falla:** Una galería demuestra gusto; un caso demuestra decisiones. No hay resultados verificables, por lo que el portafolio debe probar problema, decisión y producto funcional sin inventar impacto.  
**Debería decir:**  
Variante 1 — “Qué debía resolver / Qué construimos”  
Variante 2 — “El reto / La respuesta”  
Variante 3 — “Para quién / Qué puede hacer”  
**Recomendada:** Variante 2 dentro de los casos y descripciones de portada en lenguaje de resultado.  
**Cómo se mide:** aperturas de casos y mensajes que mencionan un proyecto como referencia.

### [P1-04] La acción persistente desaparece en móvil

**Severidad:** P1  
**Sección:** Navegación móvil · `app/globals.css:1908-1910`  
**Le falla a:** Escenario canónico completo  
**Dice hoy:** el botón “Hablemos” se oculta bajo 640 px.  
**Por qué falla:** Fogg: la motivación sube y baja durante el scroll; si el detonante no está disponible en el pico, la acción se aplaza.  
**Debería decir:** mantener un CTA compacto “Hablemos” o “WhatsApp” junto al menú.  
**Recomendada:** conservar “Hablemos”, con el mensaje consultivo del hero.  
**Cómo se mide:** clics desde navegación móvil.

### [P1-05] La sección técnica ocupa el pico visual de la página

**Severidad:** P1  
**Sección:** Google + IA · `components/site/SiteLanding.tsx:73-89`  
**Le falla a:** Perfiles B, C y D  
**Dice hoy:** “Que Google te encuentre. Que la IA sepa quién eres.”  
**Por qué falla:** Jerarquía visual como jerarquía de argumento. El azul a sangre hace que un beneficio secundario parezca la razón principal de compra.  
**Debería decir:** mantener el contenido, pero ubicarlo después de proceso, prueba, precio y personas.  
**Recomendada:** convertirlo en mecanismo incluido, no en promesa emocional central.  
**Cómo se mide:** no requiere A/B inmediata; se evalúa comprensión en entrevistas.

### [P1-06] Los silencios más caros no pueden rellenarse sin Santiago

**Severidad:** P1  
**Sección:** FAQ y precios · `content/site.ts:200-235`  
**Le falla a:** Todos, especialmente escaldado  
**Dice hoy:** no dice forma de pago, rondas de cambios, soporte o mantenimiento específico.  
**Por qué falla:** La ausencia se interpreta como riesgo. Inventar una política sería peor.  
**Debería decir:** preguntas y respuestas concretas cuando Santiago confirme condiciones.  
**Recomendada:** documentar pendientes y no publicar respuestas ficticias.  
**Cómo se mide:** frecuencia de estas preguntas en WhatsApp.

### [P2-01] Tres frases compiten por el recuerdo

**Severidad:** P2 (pulido)  
**Sección:** Hero, tranquilidad y cierre  
**Le falla a:** Recordación de marca  
**Dice hoy:** “Nosotros hacemos tu página” / “Nosotros resolvemos” / “Hagamos la página”  
**Por qué falla:** Top of mind y efecto Von Restorff. Una frase repetida se recuerda; tres variaciones se diluyen.  
**Debería decir:** “Tú vendes. Nosotros resolvemos tu página.”  
**Recomendada:** repetirla en hero, tranquilidad y cierre, conservando “Páginas que venden” como lema de marca.  
**Cómo se mide:** recuerdo espontáneo en conversaciones.

## D. Orden de secciones

### Antes

```text
Hero                         ¿Qué hacen?
  ↓
Tecnologías                  ¿Con qué herramientas? [pregunta prematura]
  ↓
Servicios                    ¿Qué ofrecen?
  ↓
Trabajo                      ¿Pueden construir?
  ↓
Tranquilidad                 ¿Entienden mi carga? [llega tarde]
  ↓
Google + IA                  ¿Incluye visibilidad técnica?
  ↓
Precios                      ¿Cuánto cuesta?
  ↓
Proceso                      ¿Cómo funciona? [llega después del precio]
  ↓
Santiago + Mafe              ¿Quién responde?
  ↓
FAQ                          ¿Y si sale mal?
  ↓
CTA                          ¿Qué hago?
```

### Después recomendado

```text
Hero                         ¿Qué hacen, para quién y qué hago?
  ↓
Tranquilidad                 ¿Entienden lo que me pesa?
  ↓
Servicios                    ¿Cuál resuelve mi situación?
  ↓
Proceso                      ¿Cómo vamos de mi idea a algo publicado?
  ↓
Trabajo                      ¿De verdad pueden construirlo?
  ↓
Precios                      ¿Cuánto cuesta y qué incluye?
  ↓
Reglas claras               ¿Qué control tengo y qué evitan?
  ↓
Santiago + Mafe              ¿Quién responde?
  ↓
Google + búsquedas con IA    ¿Qué mejora técnica incluye?
  ↓
FAQ                          ¿Qué dudas quedan?
  ↓
CTA calificado               ¿Qué escribo y qué pasa después?
```

Los logos tecnológicos pasan dentro de “Santiago + Mafe”: primero se vende el beneficio y el proceso; después se muestra el mecanismo.

## E. Mapa de argumentos de la página nueva

| Afirmación | Prueba disponible | Resolución |
|---|---|---|
| Sitio diseña, conecta y publica páginas | Servicios, proceso, demos y casos | Se mantiene |
| El precio y alcance se acuerdan antes | Copy actual y estructura de planes | Se sube a bloque de confianza |
| La publicación está incluida | Planes y proceso | Se mantiene |
| Dominio y cuentas quedan bajo control del negocio | FAQ actual | Se vuelve compromiso directo |
| Sitio usa IA para acelerar análisis y prueba | Declaración de proceso | Se mantiene como mecanismo, no como resultado |
| Google puede entender mejor el negocio | Estructura, metadatos y contenido | Se concreta como preparación, no ranking |
| Las páginas están pensadas para acercar a una acción | Estructura y CTA | Se mantiene con límite: no se garantizan ventas |
| Página Express desde $350.000 | Meta-prompt confirmado | Se mantiene |
| Sitio Negocio $990.000 | Meta-prompt confirmado | Se mantiene |
| Tienda $3.500.000 | Meta-prompt confirmado | Se mantiene |
| “MÁS POPULAR” | Sin ventas verificables | Se elimina; queda “RECOMENDADO” |
| Alerto como argumento del portafolio | Existe el producto, pero el MD lo prohíbe | Se retira de portada |
| Resultados de ventas/clientes | No existen datos verificables | No se afirman |
| Cumplimiento histórico | No hay testimonio ni métrica | No se afirma; se piden insumos |

## F. Insumos que faltan

1. ¿Los precios tachados fueron precios realmente cobrados o publicados? ¿Durante qué fechas?
2. ¿Hasta qué fecha exacta se consideran “precios de lanzamiento”?
3. ¿Cuánto debe pagar el cliente para empezar y cuándo paga el saldo?
4. ¿El precio publicado incluye impuestos?
5. ¿Cuántas rondas de cambios incluye cada plan?
6. ¿Qué debe entregar el cliente —textos, fotos, logo, productos— en cada plan?
7. ¿Cuánto tarda realmente una página para negocio y una tienda en línea?
8. ¿Qué soporte o correcciones incluye la entrega y por cuánto tiempo?
9. ¿Qué mantenimiento se cobra después y qué puede cambiar el cliente por sí mismo?
10. ¿Qué accesos exactos recibe al finalizar: dominio, hosting, repositorio, Shopify, medición?
11. ¿Quién paga dominio, hosting, plan de Shopify, aplicaciones y licencias, y cada cuánto?
12. ¿Existe un testimonio autorizado sobre cumplimiento, comunicación o entrega de accesos?
13. ¿Hay un proyecto real de tienda, restaurante, profesional de salud o marca personal que pueda publicarse?
14. ¿Hay resultados verificables atribuibles al trabajo de Sitio?
15. ¿Existe autorización para nombrar la IED Betania Norte y mostrar sus capturas?
16. ¿Qué señal concreta compone “visibilidad en IA” además de estructura y contenido?

## Prueba de éxito antes de implementar

Hoy un dueño de restaurante puede decir que Sitio hace páginas, que una opción empieza en $350.000 y que debe escribir por WhatsApp. No puede decir con seguridad qué plan corresponde a menú/reservas, qué podrá actualizar, cómo se paga ni quién responde después. La respuesta es “más o menos”; por eso la implementación debe corregir lenguaje, orden, confianza y mensaje de WhatsApp antes de considerarse terminada.

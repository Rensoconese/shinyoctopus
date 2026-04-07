# Investigación para vender accesibilidad como servicio y construir una calculadora de ROI

## Accesibilidad digital como modelo de servicios

Entender la accesibilidad “en mentalidad de servicios” (lo que normalmente se formula como *accesibilidad como programa* o *accesibilidad continua*) implica pasar de un “proyecto de corrección” puntual a un sistema permanente: prevención, control de calidad, gobierno y mejora continua. Esta visión encaja con la recomendación de la entity["organization","World Wide Web Consortium","web standards body"] de tratar la accesibilidad como una actividad integral y continua dentro del desarrollo web, tocando formación, QA, compras, marketing, creación de contenidos y más, en lugar de verla como un checklist final. citeturn1search16turn1search4

Para convertirlo en “servicio vendible” en tu web (auditoría, remediación o construcción accesible desde cero), lo más sólido es empaquetarlo como un ciclo con entregables recurrentes (no solo un PDF y ya). Este enfoque también está alineado con el tipo de “caso de negocio” que propone W3C: escoger beneficios relevantes (legales, técnicos, financieros, reputacionales) y traducirlos al contexto de cada organización, reconociendo que el ROI directo a veces es difícil de medir si no se eligen métricas adecuadas desde el inicio. citeturn1search4turn1search0

Un encuadre de servicio que suele funcionar bien (y que además te facilita venderlo en una página con una calculadora de ROI) es estructurarlo como: **diagnóstico → plan → ejecución → prevención → evidencia**. La parte clave para “venderlo” no es solo arreglar errores, sino que el cliente pueda **ver progreso**, **reducir riesgo**, y **evitar que los errores vuelvan a aparecer** con cada release. citeturn1search16turn12view1

## Marco normativo y tendencias de cumplimiento

La base técnica más citada en normativas de accesibilidad web es WCAG, publicada por W3C. WCAG 2.1 (y versiones posteriores) define criterios verificables para hacer contenido web más accesible. citeturn1search11turn0search10 En paralelo, W3C mantiene un directorio de leyes y políticas por país (útil como fuente y también como “biblioteca enlazable” para tu contenido). citeturn3search30turn13search11

Hay dos tendencias claras en cumplimiento: (a) **se consolida WCAG como referencia** (ya sea explícita o por estándares equivalentes), y (b) **aumenta el alcance al sector privado** en múltiples jurisdicciones, sobre todo cuando el servicio se presta a consumidores (e-commerce, banca, transporte, telecomunicaciones, etc.). citeturn0search10turn8view0turn12view1

En la práctica, cuando vendes accesibilidad como servicio, te conviene explicar cumplimiento por “familias” de obligación (sector público, sector privado B2C, proveedores del Estado, plataformas con contratos) y no solo por país. Aun así, estos hitos por jurisdicción son particularmente relevantes para una landing page y para alimentar una calculadora de ROI orientada a riesgo + oportunidad:

- entity["country","Argentina","country in south america"]: la Ley 26.653 se centra en accesibilidad de la información en páginas web (marco nacional) y se complementa con reglamentación. citeturn0search5turn5search7turn10view1 El Decreto 656/2019 aprueba la reglamentación, establece autoridad de aplicación y detalla facultades de control/asesoramiento, además de vincular el tema con la Convención de Derechos de Personas con Discapacidad (con jerarquía constitucional en el país). citeturn10view1turn13search1turn13search2  
- entity["country","España","country in europe"]: el Real Decreto 1112/2018 regula requisitos de accesibilidad para sitios web y apps del sector público y define accesibilidad bajo los principios perceptible/operable/comprensible/robusto. citeturn1search2  
- entity["organization","Unión Europea","supranational union"]:  
  - Para sector público, la Web Accessibility Directive se implementa vía estándares armonizados; la Comisión explica que EN 301 549 se apoya fuertemente en WCAG 2.1. citeturn1search1turn0search3  
  - Para sector privado (y también público cuando presta determinados servicios), la *European Accessibility Act* (Directiva (UE) 2019/882) fija un marco común de requisitos para productos y servicios; sus medidas deben aplicarse desde el **28 de junio de 2025** y cubren explícitamente **servicios de e-commerce** (entre otros). citeturn8view0turn7view0turn5search0  
- entity["country","Estados Unidos","country in north america"]:  
  - La entity["organization","U.S. Department of Justice","federal executive department"] mantiene una guía oficial indicando que, por ADA, entidades públicas y negocios abiertos al público deben asegurar accesibilidad web. citeturn1search3  
  - En ADA Título II (gobiernos estatales y locales), el DOJ fijó WCAG 2.1 AA como estándar técnico, con fechas de cumplimiento en **abril de 2026 o abril de 2027** según población. citeturn16view0  
  - A nivel federal (Sección 508), el estándar revisado incorpora por referencia WCAG 2.0 AA para contenido web y no web. citeturn12view3  
- entity["country","Reino Unido","country in europe"]: la guía oficial de gobierno indica que el reglamento de accesibilidad del sector público entró en vigor en 2018, exige que webs/apps sean perceptibles/operables/comprensibles/robustas y requiere publicar y actualizar una “accessibility statement”; además, señala WCAG 2.2 AA como estándar a cumplir (salvo razones legales válidas). citeturn12view1  
- entity["country","Canadá","country in north america"]: la Accessible Canada Act (ACA) obliga a entidades reguladas a preparar y publicar planes de accesibilidad y reportar progreso; su texto consolidado se publica en el portal oficial de leyes. citeturn3search1turn11view2  
- entity["country","Australia","country in oceania"]: la Comisión Australiana de Derechos Humanos publicó notas asesoras sobre accesibilidad web bajo el Disability Discrimination Act y, en su guía, recomienda conformidad WCAG 2.0 (incluyendo AA) y llega a afirmar que webs no gubernamentales deberían cumplir AA en ciertos escenarios/timelines (marco histórico de transición). citeturn12view2  
- entity["state","Ontario","province, canada"]: la guía integrada del estándar regulatorio (AODA/IASR) contiene una obligación explícita de conformidad con WCAG 2.0 (A y luego AA) para webs y contenidos web, con cronogramas y excepciones específicas para subtítulos en vivo y audiodescripción pregrabada. citeturn17view2turn17view0  

Como capa “de derechos”, este tipo de legislación se apoya en la idea de accesibilidad como condición para igualdad de oportunidades. La Convención de entity["organization","Naciones Unidas","intergovernmental organization"] (CRPD) incluye accesibilidad y promueve acceso a tecnologías de información y comunicación, incluido Internet; W3C lo resume incluso como un derecho humano básico en este contexto. citeturn13search4turn13search16turn13search12

## Evidencia y argumentos de negocio que sirven para contenido

La propuesta de valor de accesibilidad suele ser más persuasiva cuando combinas **tamaño de audiencia**, **impacto en comportamiento**, **estado real del mercado**, y **riesgo legal** con datos citables.

El dato base más útil para abrir una landing (y para alimentar una calculadora con supuestos razonables) es el de prevalencia: la entity["organization","World Health Organization","un public health agency"] estima **1.300 millones** de personas con discapacidad significativa, alrededor del **16%** de la población mundial (1 de cada 6). citeturn2search2 Esto no significa que “16% de tu tráfico actual” sea siempre así, pero sí justifica que el *mercado* y el *riesgo de exclusión* sean materialmente relevantes en casi cualquier producto digital. citeturn2search2turn1search4

En e-commerce, uno de los hallazgos más citables sobre comportamiento de abandono es el reporte de entity["organization","Click-Away Pound","uk accessibility survey"]: en 2019, alrededor del **69%** de personas con necesidades de acceso reportaron “click away” (abandonar) ante barreras, y el “click-away spend” se cuantificó en **£17,1bn** para el Reino Unido. citeturn2search1 Este tipo de dato funciona muy bien en contenido (“coste de no accesibilidad”), pero conviene contextualizarlo: es un estudio de Reino Unido y de comportamiento autodeclarado, útil como *proxy* para estimaciones conservadoras o rangos, no como predicción exacta para cualquier país/sector. citeturn2search1turn1search4

Sobre el estado real del mercado (y por qué “lo normal” es que haya barreras), el informe anual entity["organization","WebAIM","web accessibility nonprofit"] *The WebAIM Million* (análisis de 1.000.000 de homepages) reportó que en 2025 el **94,8%** de homepages tuvo fallos detectables alineados con WCAG 2 (automáticamente detectables y con alta fiabilidad), con un promedio de **51 errores detectables** por página. citeturn14view0turn14view1 Además, identifica patrones extremadamente “vendibles” porque se traducen a tareas concretas: **bajo contraste** (79,1%), **falta de texto alternativo** (55,5%), **inputs sin label** (48,2%), enlaces vacíos, botones vacíos, y ausencia del idioma del documento. citeturn14view2

Esto conecta directamente con SEO y calidad técnica: por ejemplo, Google documenta que utiliza información del contexto de la página (incluyendo texto alternativo) para entender el contenido de imágenes y recomienda usar alt text descriptivo. citeturn2search12 En una landing, es potente explicar que muchas mejoras de accesibilidad son también mejoras de robustez semántica y comprensión del contenido (para tecnologías asistivas y, en algunos casos, para motores de búsqueda), sin prometer “subirá posiciones” como garantía. citeturn2search12turn1search4

En cuanto a presión legal (argumento clave en ROI por “coste evitado”), el reporte de fin de año 2024 de entity["company","UsableNet","digital accessibility company"] indica que revisaron **4.000+** demandas ADA relacionadas con propiedades digitales en 2024, incluyendo aproximadamente 1.600 en cortes estatales y 2.400 en cortes federales. citeturn4search5 Como “fact” de contenido, este dato funciona bien si lo presentas como indicador de entorno litigioso, no como predicción individual para cada empresa. citeturn4search5turn1search3

También es útil (y diferenciador para tu servicio) advertir sobre *soluciones superficiales*. Por ejemplo, el propio blog de UsableNet ha publicado análisis de “pitfalls” de widgets/overlays, indicando que a veces no reducen riesgo y pueden introducir barreras adicionales. citeturn4search29 Este punto te sirve para posicionar tu servicio como “accesibilidad real” (auditoría + remediación + prevención), no como “parche”. citeturn4search29turn1search16

## Qué hacen las calculadoras existentes y qué aprender de ellas

Hay varias “familias” de calculadoras. Lo útil para tu objetivo no es copiarlas tal cual, sino entender qué variable están monetizando y qué narrativa de compra facilitan.

La calculadora de Deque que viste está enfocada en *shift-left*: calcular ahorro por detectar y corregir problemas de accesibilidad temprano en el ciclo de desarrollo. Sus inputs visibles incluyen tarifa horaria de dev, sprints/año, issues de accesibilidad por sprint y número de equipos ágiles; el output es coste anual estimado “sin herramientas”, “con herramientas” y “ahorro anual”. Además, afirma que corregir issues temprano puede reducir costes “hasta 30 veces” y que combina inputs con promedios de industria de “defect containment”. citeturn9view0 (Para tu caso, lo importante es el enfoque: **ahorro operativo y de rework**, no tanto ingresos). citeturn9view0turn1search16

Deque también ofrece una “efficiency calculator” centrada en el coste de falsos positivos en herramientas de testing, monetizando tiempo perdido en triage (otra narrativa de ahorro interno). citeturn9view3 Esto te da una lección de producto: si tu servicio incluye auditoría y QA, puedes venderlo como “menos fricción para el equipo y releases más predecibles”, además de cumplimiento. citeturn9view3turn1search4

En la familia “ingresos y payback”, entity["company","AccessiCart","ecommerce accessibility company"] publica una calculadora que estima (a) nivel actual de accesibilidad, (b) tamaño del sitio, (c) inversión estimada de remediación y (d) revenue anual de marca; devuelve meses para recuperar inversión y un crecimiento mensual estimado. Declara explícitamente que usa un rango modesto de aumento de revenue (0,5% a 2,5%) y que no garantiza resultados. También sugiere usar la herramienta WAVE para estimar errores y contrast errors. citeturn9view1 Aquí la idea clave es: **payback en meses** + **escenarios conservador/optimista** + **disclaimer claro**. citeturn9view1turn1search4

Hay calculadoras más nicho para documentos: entity["company","CivicPlus","govtech company"] tiene una calculadora que compara esfuerzo/coste de remediación manual de PDFs versus un enfoque automatizado (conversión a HTML accesible), orientada a planificación presupuestaria y escalabilidad. citeturn9view2 Esta línea es interesante si tu oferta incluye “accesibilidad de PDFs y documentos”, algo muy común en sector público, educación y organizaciones reguladas. citeturn9view2turn16view0

Existen otras páginas que no son exactamente ROI “económico”, pero sí “calculadoras comerciales” (p. ej., comparadores de pricing de widgets). entity["company","AllAccessible","web accessibility vendor"], por ejemplo, ofrece un pricing calculator para comparar coste de widgets/overlays con competidores. citeturn2search6turn0search16 En tu caso, esto sirve más como material de investigación competitiva y para reforzar tu posicionamiento (si decides explicar por qué no vendes “solo un widget”). citeturn4search29turn1search16

Por último, hay recursos tipo “worksheet” de ROI (menos interactivos, más consultivos) como el artículo de entity["company","TestParty","accessibility testing company"], que propone un marco con componentes de riesgo legal, oportunidad de mercado, eficiencia operativa y valor de marca. citeturn2search0 Este enfoque es útil si quieres una calculadora robusta con modo “básico” y modo “avanzado (para convencer a dirección/finanzas)”. citeturn2search0turn1search4

image_group{"layout":"carousel","aspect_ratio":"16:9","query":["Deque accessibility ROI calculator screenshot","AccessiCart ROI on accessibility calculator screenshot","CivicPlus Document Accessibility ROI Calculator screenshot","web accessibility audit report example dashboard"],"num_per_query":1}

## Diseño de una calculadora ROI robusta para tu página

Para que tu calculadora sea “más robusta” que la media sin caer en humo, lo más práctico es que sea **multi-modelo**: que permita estimar ROI desde más de una lógica (ahorro interno, ingreso incremental, y coste evitado/riesgo), pero siempre como **rangos** y con supuestos trazables.

Una arquitectura conceptual que suele funcionar en una landing de servicio es:

**Modo A — “Impacto en ingresos” (rápido, tipo marketing)**  
Este modo es ideal para prospects con e-commerce o funnels de leads. Se apoya en un range de uplift (conservador) y te permite dar payback en meses.

- **Inputs sugeridos**: visitas mensuales, conversión actual, ticket medio (o valor por lead), margen (opcional), inversión estimada (o paquete).  
- **Supuestos editables (con fuente)**:  
  - Por defecto, usar un rango conservador de uplift (p. ej., 0,5%–2,5% como hace AccessiCart) y permitir que el usuario lo ajuste. citeturn9view1  
  - Para “audiencia con necesidades de acceso”, un default razonable como punto de partida puede ser 16% (OMS), pero presentándolo como parámetro editable y no como verdad universal del tráfico del sitio. citeturn2search2  
  - Para “abandono por barreras”, puedes ofrecer un parámetro que el usuario active/desactive y que, si lo activa, cite el 69% del Click-Away Pound como referencia (idealmente etiquetado como “proxy” y no como predicción global). citeturn2search1  
- **Outputs recomendados**:  
  - Ingreso incremental mensual/anual (min–max).  
  - Meses estimados para recuperar inversión (min–max).  
  - Un bloque de “supuestos” desplegable con enlaces/citas.

**Cómo se vería un cálculo simple (ejemplo pedagógico, no promesa):**  
Si un sitio tiene 100.000 visitas/mes, 2% de conversión y ticket medio 50, el revenue mensual base serían 100.000 × 0,02 × 50 = 100.000. Si aplicas uplift 0,5%–2,5%, el incremental mensual sería 500–2.500 (antes de margen). El objetivo no es clavar el número, sino cuantificar el orden de magnitud con un rango defendible. citeturn9view1turn1search4

**Modo B — “Ahorro operativo por evitar rework” (shift-left, tipo producto/tech)**  
Este modo es ideal para clientes con equipo de desarrollo continuo o agencias in-house.

- **Inputs sugeridos** (muy similares a los de Deque): tarifa horaria, número de sprints/año, issues de accesibilidad detectados por sprint, número de equipos, y un selector “¿cuándo se detectan típicamente los issues?” (diseño/dev/QA/prod). citeturn9view0  
- **Supuesto clave**: multiplicadores de “coste de corregir tarde vs pronto”. Aquí puedes inspirarte en la narrativa de Deque (p. ej., “hasta 30x”) pero, si lo usas, yo lo presentaría como *benchmark de vendor* y ofrecería un rango (por ejemplo 10x–30x) con opción de editar, para no quedar atado a una cifra única. citeturn9view0turn1search4  
- **Outputs recomendados**: horas/año ahorradas (rango) y coste/año ahorrado (rango), más un texto de explicación (“este cálculo estima coste de re-trabajo, no ingresos”). citeturn9view0turn1search16  

**Modo C — “Riesgo y cumplimiento” (contexto, no predicción)**  
Este modo no debería intentar calcular “probabilidad de demanda” sin data específica. En lugar de eso, funciona como un panel de *contexto* que alimenta la decisión de inversión:

- Un bloque “tendencia legal” citando métricas agregadas (por ejemplo, 4.000+ demandas ADA relacionadas con propiedades digitales en 2024 según UsableNet) y aclarando que no predice casos individuales. citeturn4search5turn1search3  
- Un selector por región (UE vs EE. UU. vs otras), mostrando hitos: por ejemplo, EAA aplicable desde 28/06/2025 para e-commerce en UE, o fechas de cumplimiento del DOJ para Título II. citeturn8view0turn16view0  
- Un bloque “lo que NO sirve como atajo”, con referencia a análisis de límites de widgets/overlays. citeturn4search29  

**Modo D — “Documentos” (si tu target lo necesita)**  
Si vas a vender accesibilidad en sector público/educación/organizaciones con PDFs, un mini-calculador como el de CivicPlus (manual vs automatizado) puede ser un gran diferenciador. citeturn9view2turn16view0

Un detalle que suele aumentar la confianza (y te ayuda con SEO de la propia landing) es incluir, dentro de la página, una sección “Fuentes y supuestos” donde cites explícitamente: OMS (16%), WebAIM Million (estado del mercado), Click-Away Pound (abandono) y el marco legal principal por región. citeturn2search2turn14view0turn2search1turn3search30

## Implementación en Astro con Vanilla JavaScript

En Astro no necesitas añadir React para interactividad de una calculadora: puedes usar etiquetas `<script>` normales dentro del componente y enviar JavaScript al navegador, o estructurarlo como módulo importado. La documentación oficial de Astro indica explícitamente que, cuando un componente necesita interactividad, puedes añadir `<script>` estándar o usar “islas” de frameworks; también aclara que los componentes Astro no tienen runtime de cliente, pero sí puedes ejecutar JS en el navegador con `<script>`. citeturn15search0turn15search10 En español, la guía de “scripts del lado del cliente” detalla que los scripts pueden añadir event listeners y que Astro mejora automáticamente `<script>` con empaquetado/TypeScript, etc. citeturn15search3

Un diseño técnico simple (y muy mantenible) para tu calculadora en Astro sería:

- **Un componente Astro** con el HTML del formulario (inputs, labels, fieldsets) y un `<output>` o contenedor de resultados con `aria-live="polite"` para que los cambios se anuncien sin ser intrusivos. (Esto conecta con buenas prácticas WCAG sobre formularios y comunicación de cambios, aunque tu implementación concreta es decisión de UX). citeturn1search11turn14view2  
- **Un módulo JS puro** (por ejemplo `src/lib/roi.js`) que exporte funciones: `calcRevenueUplift()`, `calcPaybackMonths()`, `calcShiftLeftSavings()`. Importas ese módulo desde el `<script type="module">` del componente. Astro soporta scripts del lado del cliente y el enfoque con imports. citeturn15search3turn15search0  
- **Formateo de moneda** con `Intl.NumberFormat` y soporte de EUR/USD/ARS como selector (esto te permite vender internacionalmente sin lógica extra).  
- **Escenarios**: calcula 3 escenarios (conservador/medio/optimista), mostrando rangos. Este patrón está alineado con calculadoras existentes que explícitamente trabajan por rangos y disclaimers (p. ej., uplift 0,5%–2,5% y “no guarantee”). citeturn9view1turn1search4  
- **Sección de “supuestos” colapsable** (`<details><summary>`) con micro-citas dentro del texto (en tu web real podrías enlazar a las fuentes). Esto evita que la calculadora parezca magia negra y te sostiene la venta consultiva. citeturn1search4turn2search2  

A nivel de experiencia, te conviene implementar la calculadora con *progressive enhancement*: que el formulario se vea bien y sea entendible sin JS, y que JS “encienda” el cálculo en vivo. Astro facilita este enfoque al estar centrado en HTML y en scripts explícitos. citeturn15search10turn15search3

Para evitar “cosas raras” y mantenerlo ultra limpio en Vanilla JS:

- Usa `input`/`change` listeners sobre un `<form>` y recalcula en cada interacción.  
- Mantén un “estado” mínimo derivado solo de los valores actuales del DOM (sin stores ni framework).  
- Si en el futuro conviertes tu landing en multi-página con transiciones, Astro advierte que puede requerirse re-inicializar scripts tras navegación con routing del lado del cliente. Si no usas esas transiciones, no tienes ese problema. citeturn15search12
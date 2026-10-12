# Cowsmo: Space Rescue — Canvas profesional

Abre [cowsmo-business-model-canvas.html](cowsmo-business-model-canvas.html) directamente en Chrome, Edge o un navegador moderno. No requiere servidor, instalación ni conexión a Internet para consultar la vista profesional. Mantén esta carpeta dentro del repositorio: el logo original se carga desde `../../../image/Logo.jpeg`.

El Canvas presenta resúmenes en nueve tarjetas y detalles completos mediante botones y un apéndice desplegable. Usa clic, toque o Enter para abrir; Escape o Cerrar para salir. El foco vuelve al botón de origen. «Mostrar todo» expande el apéndice; «Tema claro» cambia la presentación; «Imprimir / PDF» incluye el logo, el Canvas, las notas, los presupuestos y los detalles. La impresión es A4 horizontal con anexos en páginas adicionales, no una hoja con texto reducido.

## Corrección del enfoque del contenido

Los nueve bloques describen la experiencia y el acceso a Cowsmo. Se sustituyeron los contenidos de organigrama, Jira, control de versiones y administración por niveles, retos, mecánicas, gráficos, audio, controles, pruebas y atención al jugador. Las cifras, el CSS, el JavaScript, el logo y la geometría de los bloques se conservaron. Los nombres y ubicaciones de los Canvas son los mismos.

## Fuentes editables y Archify

- `canvas-data.json`: entrada editorial principal; contenido completo, procedencia, estados D/P/S y cifras.
- `generar.mjs`: genera la vista profesional, `contenido-canvas.md` y `candidate.json`; valida operaciones del presupuesto y existencia del logo. Usa Node.js y su biblioteca estándar.
- `candidate.json`: entrada tipada compatible con el modo `architecture` de Archify. Se reutiliza como mapa de nueve bloques, sin conexiones ni etiquetas técnicas visibles.
- `cowsmo-archify.html`: salida nativa de Archify, conservada con sus recibos originales. Su interfaz auxiliar puede contener controles en inglés; la vista profesional principal está en español.
- `cowsmo-business-model-canvas.html`: vista adaptada en HTML/CSS/JavaScript a partir del mismo contenido. No es la salida sin modificar del renderizador Archify y no hereda automáticamente sus comprobaciones.
- `contenido-canvas.md`: documento íntegro generado a partir de los datos.

Se utilizó realmente la habilidad instalada `C:/Users/grego/.agents/skills/archify/SKILL.md` y su CLI. Archify no define un modo nativo Business Model Canvas; la adaptación conserva la cuadrícula de negocio y evita flechas o roles frontend/backend. El archivo de entrada principal de Archify es `candidate.json`; el de edición del contenido es `canvas-data.json`.

## Actualización desde la raíz del repositorio

1. Edita `Business Model Canva/Archify/Profesional/canvas-data.json`, conserva la distinción entre documentado, propuesto y por validar y actualiza las fuentes si cambian.
2. Ejecuta:

```powershell
node "Business Model Canva/Archify/Profesional/generar.mjs"
```

3. Regenera la salida nativa con la ruta de tu instalación de Archify:

```powershell
node "C:/Users/grego/.agents/skills/archify/bin/archify.mjs" finalize architecture "Business Model Canva/Archify/Profesional/candidate.json" "Business Model Canva/Archify/Profesional/cowsmo-archify.html" --repo-root . --quality showcase --out-dir "Business Model Canva/Archify/Profesional/evidencias/revision-2" --json
```

Usa una carpeta nueva por revisión para no confundir las evidencias anteriores con los bytes nuevos. El candidato fija la revisión documental `7fcb54d87025dbfdac0504ac6d496cea99588b0d`: si cambian las fuentes citadas, revisa la evidencia y actualiza la identidad en `generar.mjs` antes de generar. Las referencias documentales no acreditan las propuestas comerciales.

4. Ejecuta `node "Business Model Canva/Archify/Profesional/verificar.mjs"` para verificar la vista profesional con Chrome local. Puedes establecer `ARCHIFY_CHROME` con la ruta de otro ejecutable Chrome/Chromium. El script captura escritorio, móvil, diálogos e impresión y genera un PDF y un recibo SHA-256. Revisa las capturas y el PDF: una comprobación automatizada no sustituye la revisión visual. El script escribe evidencias de esta versión; archiva las anteriores antes de una nueva revisión.

Para reproducir las capturas nativas de Archify:

```powershell
node "C:/Users/grego/.agents/skills/archify/bin/archify.mjs" visual-check "Business Model Canva/Archify/Profesional/cowsmo-archify.html" --out-dir "Business Model Canva/Archify/Profesional/evidencias/archify" --summary --require-provenance
```

## Validación y límites

Consulta `evidencias/revision-visual.md` para el resultado final, el alcance de la revisión perceptual y las limitaciones. Los recibos actuales de `finalize` y `browser-check` están en `evidencias/correccion-contenido/`; `cowsmo-archify.delivery.json` conserva la procedencia actual. Los recibos de finalización y capturas anteriores se mantienen como evidencia histórica, con sus hashes originales. Todos estos recibos corresponden exclusivamente a la salida nativa. Las evidencias de `evidencias/profesional/` corresponden al HTML principal.

Los nueve bloques separan D (documentado), P (propuesto) y S (por validar). «Documentado» se refiere al diseño o al contexto, no a una implementación comprobada. Totales de planeación: efectivo $4,600 MXN; trabajo aportado 380 h y $38,000 MXN; costo económico $42,600 MXN. Ejemplo comercial separado: ingreso bruto hipotético $9,350 MXN, sin acreditar ventas ni rentabilidad.

Pendientes del GDD: cinco niveles descritos frente a tres citados para integración en el Canvas/cronograma; contradicción entre anuncios/cosméticos de la p. 17 y pago único sin publicidad de la p. 18; definición de alcance del MVP. Esta versión elige pago único sin anuncios, $49 MXN en Android y $89 MXN en PC, como propuestas. El logo proporcionado contiene «ORBITAL CREATE» y se preserva sin alteración. El contenido detalla las diferencias de nombres de niveles, narrativa y canales.

No se verifican implementación del videojuego, ventas, gastos reales, publicación en tiendas, convenios, impacto educativo/ambiental ni compatibilidad en todos los navegadores o con un lector de pantalla real.

## Versiones previas conservadas

- [Archify inicial](../cowsmo_business_model_canvas.html)
- [Archify de cinco columnas](../cowsmo_business_model_canvas_5col.html)
- [Archify con detalles](../cowsmo_business_model_canvas_passports.html)
- [Codex anterior](../../Codex/bmd.html)

No se modifica el GDD ni el código del videojuego. Esta entrega no publica el sitio ni hace commits, merges o pushes.

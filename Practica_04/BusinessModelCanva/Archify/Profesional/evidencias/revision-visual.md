# Revisión actual: íconos SVG

Se añadieron nueve SVG incrustados, uno junto al título de cada tarjeta: apretón de manos, herramientas, caja, hoja con estrella, conversaciones, megáfono, personas, calculadora y monedas. Sin emojis, imágenes adicionales ni solicitudes a Internet.

Estilo uniforme: viewBox 0 0 24 24, trazo 1.7, extremos y uniones redondeados; 22 px en pantalla y 14 px en impresión, usando los colores azul y verde existentes. Los nueve SVG tienen aria-hidden="true" y focusable="false". No se sustituyeron ni duplicaron títulos.

Se comprobó por hash que el texto completo del cuerpo, el JavaScript y canvas-data.json son idénticos a los previos. Se conserva la cuadrícula y el logo. Solo se agregaron el marcado SVG, la alineación del título y sus reglas de tamaño/color.

La comprobación actual de Chrome pasó 44 controles, incluidos unicidad/estilo de SVG y geometría de icono/título en 1440×900, 1600×1000, 1920×1080, 2048×1320, 390×844 y 320×740, además de impresión. Se inspeccionaron las capturas actuales del Canvas completo oscuro, móvil de 390 px e impresión: iconos visibles, sin recortes ni solapamientos observados. Se admite desplazamiento vertical de la página. Se conserva la operabilidad por teclado y toque emulado.

HTML actual SHA-256: c88bd701c35426aa8137d9b09f5384d6d6dd128dc045a2253a1eb5f3dee2fb70.

PDF actualizado SHA-256: ec3c2924ba6cb249345170e6342c5ae44e2ab558b8d9a5ef140f4e9759e8c344. Se regeneró mediante Chrome; se verificó el DOM y la captura de impresión. No se repitió la extracción textual ni se inspeccionó una renderización de cada página del PDF. El recibo verificacion-pdf.json se identifica como histórico de la corrección de contenido; no se atribuye esa extracción al PDF nuevo. No se probaron otros navegadores, lector de pantalla ni dispositivo físico.

Archivos actualizados: cowsmo-business-model-canvas.html, generar.mjs, verificar.mjs y las evidencias asociadas. No se modificó contenido-canvas.md, los datos de negocio, candidate.json, la salida nativa de Archify, el GDD o el logo. Sin commits ni pushes.

## Informe histórico de la corrección de contenido

Los hashes y resultados de las secciones siguientes corresponden a esa revisión anterior, previa a los SVG.

# Revisión del Canvas profesional: corrección de contenido

Se corrigió el Canvas existente conforme a la aclaración docente: sus nueve bloques se refieren a Cowsmo, su experiencia, jugadores, recursos, distribución, costos de producción e ingresos propuestos. No se creó otro Canvas ni se modificó el GDD.

## Textos corregidos

- Socios: arte, audio y jugadores de pruebas; orientación ambiental docente propuesta. Apoyos internos documentados diferenciados de colaboraciones externas por confirmar.
- Actividades: niveles y retos, movimiento, recolección, limpieza, Bio-Bloom, Eco-Crafting, controles y mejora de la experiencia. Retirados Jira, control de versiones y administración del contenido central.
- Recursos: Unity, código, personajes, escenarios, animaciones, gráficos, audio, logo y dispositivos de prueba; retirado el organigrama del bloque.
- Valor: aventura de Moo-ry, rescate, progreso ambiental visible y reutilización para construir Cowsmo-1, sin atribuir aprendizaje ni impacto medido.
- Relaciones: tutorial, comentarios, atención a errores y actualizaciones para jugadores.
- Canales: demo itch.io, APK y demostraciones previstos; Google Play/itch.io como propuesta posterior, con difusión por videos y redes. No se acreditan publicaciones.
- Segmentos: jugadores 8–25, principal 8–17 y secundario 18–25; México hispanohablante propuesto; compradores adultos o tutores diferenciados. Docentes evaluadores sin condición de clientes comerciales confirmados.
- Costos: producir y ofrecer el videojuego; todas las cantidades son estimaciones. Se conserva cada importe y operación del presupuesto anterior. La etiqueta de las 100 horas se precisa como «Pruebas y documentación del juego», sin cambiar horas, tarifa ni valor.
- Ingresos: MVP gratis, Android $49 MXN por desbloqueo y PC $89 MXN por juego completo como propuestas. Sin anuncios ni suscripciones; no se asignan ventas o ganancias. El ejemplo numérico previo sigue separado y marcado como hipotético.

## Conservación comprobada

Comparación SHA-256 antes/después de la corrección:

| Elemento | Hash idéntico |
| --- | --- |
| CSS completo, incluidas reglas móviles y de impresión | e75ab3231f63d7dc0fb1ec819ae6998b39eccbebcb8f606aa0fe03842dc1ea7e |
| JavaScript completo de interacciones | d0122c288fbbf8f5d1202e9c8a02f24b55638d2ebab32699d6a10e828a34cdd9 |
| Logo original image/Logo.jpeg | bd1cdeeb64db838baff04cc5c289ae7e9df9c868fcd6cfc1dcbc1a44da50a357 |

La geometría, identificadores y tipos de los nueve bloques de candidate.json se compararon con la entrada anterior del índice Git y son iguales. Las cantidades de todas las filas de efectivo y trabajo aportado también son iguales: efectivo $4,600 MXN, trabajo aportado 380 horas y $38,000 MXN, costo económico $42,600 MXN. No se hicieron cambios en el índice Git, commits ni pushes.

## Evidencia actual de Archify

Tipo: architecture, usado para el mapa de nueve bloques sin conexiones. Archivo existente: cowsmo-archify.html.

- specification_sha256: 29b2cd93d6a3b3bc930c2d2f990e53daaf4c414e48e5fd320fc82b5246a43479
- artifact_sha256: 448b4d7df3b7ad81e1534db685fa057f6c9c1c73c3a6812c05113f34859ea520
- validate, deliver, check y browser-check: pass; perfil showcase, 9/9, sin errores ni advertencias.
- browser_evidence: passed, según el recibo actual en correccion-contenido/cowsmo-archify.browser-check.json.
- Capturas actuales: correccion-contenido/visual/. Se inspeccionaron el tema claro a 1440×900 y el oscuro a 2048×1320, sin recortes ni solapamientos visibles en esos mapas. Las cuatro capturas pasaron las comprobaciones automatizadas.
- visual_review: passed en las vistas inspeccionadas; correction_rounds: 0. Los recibos automáticos originales conservan not-requested/pending; no se modificaron.
- Archify no solicitó aviso de actualización.

Los recibos y capturas de la entrega inicial se conservan como evidencia histórica. Sus hashes no corresponden al HTML actualizado; el directorio correccion-contenido contiene la evidencia actual.

## Vista profesional y PDF actualizados

HTML principal SHA-256: f919a0d41fd9df153a8600ea7c0797f71356811ba54de8ca3290b27243dd8652.

El recibo profesional/verificacion.json documenta 36 comprobaciones aprobadas en Chrome local: nueve bloques, imagen cargada con proporciones correctas, rutas existentes, ausencia de excepciones JavaScript y solicitudes remotas, diálogos, teclado (Enter, Tab y Escape), retorno de foco, toque emulado, mostrar/contraer, tema e impresión completa.

Sin desbordamiento horizontal ni intersecciones entre tarjetas en 1440×900, 1600×1000, 1920×1080, 2048×1320, 390×844 y 320×740. Se conserva desplazamiento vertical para leer el contenido. Se inspeccionaron las capturas actuales del Canvas completo oscuro, escritorio claro, diálogo móvil e impresión; no se observaron recortes ni solapamientos del texto en esas vistas.

PDF: profesional/canvas-impresion.pdf, 13 páginas A4 horizontales; SHA-256 960ca87ff9bbaf3c391fbc8c80d9efa9233f0bafa1a6d8576f98d9a5e56cc083. La revisión textual confirma nueve bloques y logo en la primera página, los 59 textos de detalle completos y los totales $4,600, $38,000, $42,600 y $9,350. No falta ninguna frase al normalizar espacios. El ejemplo de $9,350 permanece hipotético, no es previsión ni prueba de rentabilidad.

## Contraste con el GDD y límites

Se releen las páginas 4–9, 12–13 y 18 del GDD para experiencia, jugadores, historia, mecánicas, niveles y monetización. Se conserva la distinción D/P/S en datos y detalles. Las funciones documentadas son diseño, no implementación acreditada. Persisten los pendientes de tres/cinco niveles del MVP y la contradicción entre anuncios opcionales de la p. 17 y pago único sin publicidad de la p. 18, explicados en el contenido.

No se ejecutó el videojuego ni se acreditaron publicaciones, pruebas reales con jugadores, contratos, gastos, ventas o resultados educativos/ambientales. No se verificaron todos los navegadores ni lector de pantalla real. El toque se emuló; no se probó un Android físico. La comprobación PDF es textual y del DOM de impresión: no se inspeccionó una renderización de cada página ni se realizó impresión física.

Se sincronizaron canvas-data.json, candidate.json, contenido-canvas.md, los dos HTML existentes, los rótulos de generar.mjs, README de esta carpeta y tres filas del resumen Canvas del README principal. Se actualizaron PDF, capturas y recibos de revisión. Nombres y ubicaciones del Canvas, logo, colores, tipografías, interacciones y código del videojuego se conservaron.

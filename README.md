
# <p align="center">Cowsmo: Space Rescue</p>

<p align="center">
  <strong>Videojuego de Plataformas 2.5D y Gestión Socioambiental</strong><br>
  <em>"Explora el espacio, recicla recursos tecnológicos y devuelve la vida a la galaxia."</em>
</p>

<p align="center">
  <img src="./src/img/Documentacion/Portada del juego.jpeg" alt="Cowsmo Space Rescue Cover" height="380"/>
</p>

<p align="center">
  <a href="#tecnologías">
    <img src="https://img.shields.io/badge/Unity_6-000000?style=for-the-badge&logo=unity&logoColor=white" alt="Unity 6"/>
  </a>
  <a href="#tecnologías">
    <img src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=csharp&logoColor=white" alt="C#"/>
  </a>
  <a href="#tecnologías">
    <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI"/>
  </a>
  <a href="#tecnologías">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
  </a>
  <a href="#tecnologías">
    <img src="https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white" alt="Flutter"/>
  </a>
  <a href="#tecnologías">
    <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"/>
  </a>
</p>

<table>
  <tr>
    <td>
      <p align="center">
        <img src="./src/img/Logo%20sin%20fondo.png" alt="Orbital Create Rescue Logo" height="180" >
      </p>
    </td>
    <td>
      <p align="center">
        <img src="./src/img/GameLogo.png" alt="Cowsmo Space Rescue Logo" height="150" >
      </p>
    </td>
  </tr>
  <tr>
    <td align="center"><b>Logo de Empresa</b></td> 
    <td align="center"><b>Logo de Proyecto</b></td>
  </tr>
</table>

---

## Resumen Ejecutivo

**Cowsmo: Space Rescue** es un videojuego de plataformas 2.5D enfocado en la restauración ambiental y la economía circular. Los jugadores acompañan a **Moo-ry**, una vaca astronauta del planeta sustentable Verdalia, en una misión por el planeta Nébularis para recuperar chatarra espacial (*E-Waste*), descontaminar los ecosistemas con el sistema **Bio-Bloom**, rescatar a los habitantes cautivos (**Nebulinos y Nebulos**) y construir el cohete *Cowsmo-1* para completar la huida.

### Por qué Cowsmo: Space Rescue
- **Impacto ODS (12, 13 y 15):** Concientización interactiva sobre el consumo responsable, la acción por el clima y la recuperación de ecosistemas terrestres.
- **Mecánica Bio-Bloom:** Transformación visual inmediata de entornos grises y contaminados a hábitats verdes y florecidos.
- **Eco-Crafting:** Sistema de procesamiento en taller donde los residuos recolectados se convierten en piezas y combustible para la nave.
- **Experiencia 2.5D Accesible:** Jugabilidad retro sobre rieles tridimensionales inspirada en clásicos como *Kirby 64*, apta para PC y dispositivos Android.

---

## Objetivos del Proyecto

### Objetivo General
Desarrollar un ecosistema de software multiplataforma compuesto por un videojuego 2.5D (PC/Android), una PWA y una aplicación móvil, que integre mecánicas de recolección de chatarra tecnológica y restauración de ecosistemas para concientizar a los jugadores sobre la economía circular y la remediación ambiental.

### Objetivos Específicos
- **Implementar mecánicas 2.5D interactivas:** Desarrollar el sistema de físicas para la "Pistola/Imán de Succión" y movimiento de plataformas en Unity 6.
- **Integrar el sistema visual "Bio-Bloom":** Crear transiciones dinámicas mediante *shaders* para transformar escenarios contaminados en entornos florecidos en tiempo real.
- **Construir una arquitectura de backend escalable:** Desarrollar una API REST con FastAPI/Node.js respaldada por una persistencia híbrida (MongoDB, MySQL, Redis) para gestionar el progreso (*Cross-Save*) y métricas.
- **Desarrollar plataformas complementarias:** Implementar una PWA (React) para clasificaciones globales y una *Companion App* (Flutter) para la gestión del perfil del jugador y recompensas.
- **Promover los Objetivos de Desarrollo Sostenible (ODS):** Alinear la narrativa y mecánicas del juego con los ODS 12, 13 y 15 de la ONU para generar un impacto socioambiental positivo.

---

## Problemática vs Solución

| El Problema | La Solución (Cowsmo: Space Rescue) |
| :--- | :--- |
| Vertederos clandestinos de chatarra tecnológica (*E-Waste*) que destruyen hábitats naturales. | Plataforma 2.5D donde la chatarra espacial es el recurso clave para avanzar y reparar el entorno. |
| Falta de herramientas interactivas y divertidas para enseñar la economía circular a jóvenes. | Sistema de *Eco-Crafting* que demuestra de forma práctica cómo transformar residuos en tecnología útil. |
| Degradación ambiental severa sin retroalimentación visual directa de recuperación. | Efecto *Bio-Bloom (%)* que devuelve la vida, el agua limpia y la vegetación al escenario en tiempo real. |

---

## Identidad Visual y Estética (Papercraft 2.5D)

### Dirección de Arte y Estética
- **Estilo Artístico (2.5D Papercraft):** Personajes y accesorios en recortes 2D planos (*cutout Sprites*) que se desplazan dentro de escenarios tridimensionales construidos como dioramas de cartón, empaques reciclados y material escolar/industrial.
- **Coherencia con el Mensaje Ambiental:** La estética de cartón y papel está reforzada de forma directa con la mecánica de **reciclaje (ODS 12)**; los objetos y estructuras del mundo lucen explícitamente reutilizados.
- **Animación & Efectos (VFX):**
  - **Efecto "Flip" de Papel:** *Moo-ry* y los enemigos giran sobre su eje como láminas de papel al cambiar de dirección.
  - **Transformación Bio-Bloom:** Al limpiar una zona, el entorno de cartón gris y doblado "se despliega" (*pop-up book*) revelando capas de papel maché y celofán de colores vivos y florecidos.
- **Interfaz de Usuario (UI):** Menús diseñados con texturas de etiquetas ecológicas, estampillas, recortes de papel kraft e iluminación neón suave en bordes.

### Paletas de Colores Oficiales

| **Protagonista e Identidad (Moo-Ry & Logo)** | **Entorno Limpio & Bio-Bloom (Verdalia)** |
| :---: | :---: |
| <img src="./src/img/Colors/Protagonista e Identidad (Moo-Ry & Logo).png" width="380" alt="Paleta Protagonista"/> | <img src="./src/img/Colors/Entorno Limpio & Bio-Bloom (Verdalia _ Planeta Restaurado).png" width="380" alt="Paleta Bio-Bloom"/> |
| *Naranja cartulina, crema, azul visor y marrón corrugado.* | *Verde origami, verde esmeralda, amarillo celofán y azul agua.* |

| **Entorno Contaminado & Chatarra (Nébularis)** | **Interfaz de Usuario & Materiales (UI / HUD)** |
| :---: | :---: |
| <img src="./src/img/Colors/Entorno Contaminado & Chatarra (Nébularis _ Dominio Industrial).png" width="380" alt="Paleta Nébularis"/> | <img src="./src/img/Colors/Interfaz de Usuario & Materiales Teatrales (UI _ HUD).png" width="380" alt="Paleta UI HUD"/> |
| *Gris industrial, marrón óxido, morado tóxico y verde neón.* | *Marrón kraft texturizado, rojo estampilla y blanco recorte.* |

---

## Diseño y Arquitectura del Sistema
> *Nota: Todos los esquemas y diagramas del proyecto reflejan la identidad visual del diorama de cartón (Papercraft) y etiquetas Kraft, alineándose con el ODS 12.*

### Diagrama de Arquitectura
<p align="center">
  <img src="./src/img/Documentacion/Diagrama de Arquitectura.jpg" alt="Cowsmo Diagrama de Arquitectura Papercraft" />
</p>

### Diagrama de Roles de Usuario
<p align="center">
  <img src="./src/img/Documentacion/Diagrama de Roles de Usuario.jpeg" alt="Cowsmo Diagrama de Roles Papercraft" />
</p>

### Modelo Business Canvas
<p align="center">
  <img src="./src/img/Documentacion/Business Model Canvas.jpg" alt="Cowsmo Modelo Canvas" />
</p>

---

## Tecnologías

| Capa | Herramientas |
| :--- | :--- |
| **Videojuego (Cliente)** | Unity 6 (URP), C# ![Unity](https://img.shields.io/badge/Unity_6-000000?style=for-the-badge&logo=unity&logoColor=white) ![C#](https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=csharp&logoColor=white) |
| **Plataforma Web & App** | React + Vite (PWA), Flutter ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Flutter](https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white) |
| **Backend Services** | FastAPI (Python), Node.js (Express) ![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white) ![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) |
| **Bases de Datos & Caché**| MySQL, MongoDB, Redis ![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white) |
| **Seguridad & Monitoreo** | Keycloak, Grafana, Prometheus, Loki ![Keycloak](https://img.shields.io/badge/Keycloak-FFFFFF?style=for-the-badge&logo=Keycloak&logoColor=blue) ![Grafana](https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=grafana&logoColor=white) |
| **Infraestructura & QA** | Docker Compose, Jira (Scrum), Git/GitHub ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) ![Jira](https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=jira&logoColor=white) ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white) |

---

## Gestión del Proyecto

### Estructura Organizacional
<p align="center">
  <img src="./src/img/Documentacion/Estructura Organizacional.jpg" alt="Organigrama Cowsmo Space Rescue" width="650"/>
</p>

### Cronograma (Gantt & Jira)
<p align="center">
  <img src="./src/img/Documentacion/Cronograma del Proyecto.jpg" alt="Cronograma Gantt Cowsmo Space Rescue" width="650"/>
</p>

---

## Documentación y Entregables (GitHub Pages)

- [Página principal del proyecto](https://elmau0834x.github.io/Proyecto-Integrador-Cowsmo-Space-Rescue/index.html)
- [Práctica 04 · Business Model Canvas](https://github.com/elmau0834x/Proyecto-Integrador-Cowsmo-Space-Rescue/tree/main/Practica_04)
- [Práctica 05 · Diagrama de Roles de Usuario](https://github.com/elmau0834x/Proyecto-Integrador-Cowsmo-Space-Rescue/tree/main/Practica_05/imagenes)
- [Práctica 07 · Sketches y navegación](https://github.com/elmau0834x/Proyecto-Integrador-Cowsmo-Space-Rescue/tree/main/Practica_07)

---

## Nuestro Equipo

| Desarrollador | Rol | GitHub |
| :--- | :--- | :--- |
| **Mauricio Rosales Gabriel** | Líder de Proyecto / Programador Principal | [@elmau0834x](https://github.com/elmau0834x) |
| **Brisa Nallely García Gregorio** | Control de Calidad (QA) / Pruebas / Documentación / Jira | [@Brisgregorio](https://github.com/Brisgregorio) |
| **Carlos Daniel García Pluma** | Diseñador de Niveles 2.5D / Arte y Assets | [@DanielGarciaPluma](https://github.com/DanielGarciaPluma) |
# OneAI v0.3.4-beta — Generación de imágenes, GitHub Spaces más inteligentes y grandes mejoras de UX

**Release Date:** 2026-03-18

Con v0.3.4-beta, OneAI se vuelve más visual, más inteligente y notablemente más fiable en el día a día. Esta versión introduce un segundo generador de imágenes, mejora GitHub Spaces con una comprensión profunda del código y hace que trabajar con artefactos sea mucho más potente.

## Highlights

### Google Imagen 4 para generación de imágenes
Además de OpenAI, ahora puedes usar **Google Imagen 4** directamente en OneAI.

Disponible en tres variantes:

- **Standard** – calidad y velocidad equilibradas  
- **Fast** – optimizado para iteraciones rápidas  
- **Ultra** – máxima calidad para visuales exigentes  
- Hasta **4 imágenes por solicitud**

Esto ofrece a los equipos mayor flexibilidad en calidad, velocidad y coste — perfectamente integrado en nuestro enrutamiento LLM existente. Gracias a **Mirko** por implementar la integración de forma limpia dentro de nuestra arquitectura.

### Análisis inteligente de código para GitHub Spaces
GitHub Spaces ahora realmente entiende tus repositorios.

En cada sincronización, OneAI analiza automáticamente:

- Estructura del repositorio y directorios  
- Distribución de lenguajes de programación  
- Dependencias (p. ej. package.json, requirements.txt, go.mod, Cargo.toml)  
- Posibles puntos de entrada

Generamos archivos de resumen estructurados y enriquecemos los archivos de código con contexto arquitectónico. El resultado: **respuestas más precisas y conscientes de la arquitectura en AI Chat**, especialmente en bases de código grandes.

También desarrollado por **Mirko** — un gran paso adelante para los equipos de ingeniería que usan OneAI.

### Artefactos — completamente rediseñados
Los artefactos ahora son un componente colaborativo de primera clase en OneAI.

Nuevas capacidades:

- **Compartición de artefactos** (cambio público/privado)  
- **Enlaces directos** a artefactos individuales  
- Flujo de solicitud de acceso con notificación por correo electrónico  
- **Búsqueda, ordenación y paginación**  
- Pestaña dedicada de **Artifacts** dentro de los proyectos (junto a Chats y Files)

Ahora los artefactos son más fáciles de descubrir, compartir y gestionar en equipo.  
Muchas gracias a **Pascal** por esta completa mejora de UX.

### Personas ahora a nivel de chat
Las personas ahora pueden seleccionarse **por chat**, en lugar de solo por proyecto.

Esto permite:

- Diferentes personalidades de IA dentro del mismo proyecto  
- Mejor separación de casos de uso (p. ej. “Strategy Advisor” vs. “Technical Reviewer”)  
- Mayor control granular sobre el comportamiento de la IA

Los proyectos existentes conservan automáticamente su persona principal como predeterminada. Esta actualización estructural fue implementada por **Pascal**.

## Improvements

### Sincronización de Outlook significativamente más fiable
La integración con Outlook ha sido mejorada de forma fundamental:

- **Sincronización incremental** en lugar de reescaneos completos de la bandeja de entrada  
- Renovación automática de webhooks expirados  
- Renovación robusta de tokens sin race conditions  

Resultado: sincronización más rápida, menos errores y mayor fiabilidad en entornos productivos.

### Más transparencia en AI Chat
- Cada respuesta de IA muestra ahora un **model badge**.  
- Un **indicador de pensamiento** visible aparece durante interacciones complejas con herramientas.

Esto mejora la claridad y ofrece una experiencia más fluida en operaciones prolongadas.

### Streaming de Anthropic más estable
Las fases largas de razonamiento (p. ej. generación compleja de artefactos) ya no fallan por timeouts, lo que mejora la fiabilidad en flujos de trabajo avanzados.

### Base de UI modernizada
Migramos toda nuestra biblioteca de componentes de **Radix UI a Base UI**.

Para los clientes, esto significa:

- Interacciones más estables  
- Una base técnica modernizada  
- Mejor mantenibilidad y rendimiento

También resolvimos varios problemas de dropdown y select surgidos durante la migración.

## Breaking Changes

### Sistema de personas (base de datos)
El sistema de personas ha pasado de nivel de proyecto a nivel de chat.

- Se eliminó la tabla de unión `project_personas`.  
- La persona principal anterior permanece como **persona predeterminada**.  
- Las personas ahora se asignan directamente por chat.

La migración se ejecuta automáticamente. No se requiere ninguna acción manual.

### Cambio de API: Space Files
La API de Space Files ahora devuelve un objeto en lugar de un array plano:

- `files` (array)  
- `totalFiles`  
- `hasNextPage` (opcional)

Las integraciones externas deben acceder a `response.files` en lugar de a la raíz de la respuesta.

## Under the Hood

- Mejora en el seguimiento del uso de modelos (incluyendo medición del tamaño de imágenes)  
- Consolidación de los tipos de archivos de código en un módulo compartido  
- Simplificación del balanceo de carga interno mediante infraestructura  
- Trabajo interno preparatorio para futuras mejoras de RAG

---

Una versión sólida centrada en generación de imágenes, flujos de trabajo para desarrolladores y estabilidad operativa.  
Gracias a **Pascal** (13 changes) y **Mirko** (3 changes) por impulsar este avance.

_16 commits · 15 PRs · 320 archivos modificados_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

# OneAI v0.4.0-beta — Comprende audio y video, procesamiento de PDF más inteligente

**Release Date:** 2026-04-10

## Highlights

### Los archivos de audio y video ahora son consultables
Ahora puedes **subir archivos de audio y video directamente a OneAI** — y utilizarlos como cualquier otro documento en tus Knowledge Spaces.

- Soporte para MP3, WAV, M4A y más formatos
- Transcripción automática con marcas de tiempo
- Extracción de audio en el cliente para archivos de video
- En AI Chat puedes consultar rangos de tiempo específicos de una grabación

Llamadas con clientes, reuniones internas, webinars — el conocimiento hablado ahora está completamente integrado en tus flujos de trabajo de IA empresarial.

Un gran agradecimiento a **Pascal**, quien implementó toda la pipeline de audio/video, incluida la transcripción y la integración en el chat.

---

### Procesamiento de PDF más inteligente con una pipeline híbrida
Los PDFs ahora se procesan **más rápido, de forma más eficiente en costes y con mayor precisión**.

El nuevo enfoque híbrido funciona en dos etapas:
1. **Extracción directa de texto** (rápida, sin coste de LLM)
2. **Análisis selectivo de imágenes con IA** solo en las páginas que realmente contienen imágenes incrustadas

Para ti, esto significa:
- Procesamiento más rápido de documentos grandes
- Reducción de costes de IA
- Mejor gestión de PDFs escaneados o con muchas imágenes

Esta mejora fundamental de nuestra pipeline de documentos también fue desarrollada por Pascal.

---

### Procesamiento de documentos más rápido con embeddings por lotes
En lugar de enviar cada fragmento de texto de forma individual, OneAI ahora procesa los embeddings por lotes.

Esto reduce significativamente la sobrecarga de red y acelera notablemente el procesamiento — especialmente en Knowledge Spaces grandes o en cargas masivas.

---

## Improvements

### Activity Center rediseñado con visibilidad clara de errores
El Activity Center ha sido completamente rediseñado.

- Sincronización, procesamiento de documentos y destilación unificados en una pestaña central
- Actualizaciones de estado en tiempo real vía WebSocket
- **Indicadores claros de error** cuando los documentos no pueden procesarse

Puedes ver inmediatamente si se requiere acción — sin necesidad de revisar logs.

---

### Drag & Drop unificado — incluyendo carpetas
La carga mediante arrastrar y soltar ahora funciona de manera consistente en toda la plataforma:

- En AI Chat
- En Knowledge Spaces
- A través de la barra lateral

Se conservan las estructuras de carpetas y los archivos no compatibles se señalan claramente. Esto facilita y hace más transparentes las cargas grandes.

---

### Búsqueda y comportamiento del chat más robustos
Varias mejoras aumentan la fiabilidad en el uso diario:

- Fallback si el servicio de reranking no está disponible temporalmente
- Reintentos automáticos ante errores de conexión transitorios
- Validación de argumentos de herramientas LLM para evitar fallos en tiempo de ejecución
- Las personas del chat ahora se priorizan y se aplican de forma más fiable
- El chat ahora entiende el artefacto activo durante la edición

Resultado: respuestas más estables, menos interrupciones y un comportamiento más consistente.

---

## Bug Fixes

- Los errores de streaming con modelos de Google ahora se gestionan correctamente
- Los bloqueos de procesamiento se renuevan durante la gestión de archivos grandes (evitando trabajo duplicado)
- Los documentos de código se dividen correctamente dentro de los límites de tamaño definidos
- El contenido de weclapp se almacena en caché para un procesamiento más eficiente
- Múltiples mejoras de UI (badges, diálogo de artefacto, renderizado matemático)

Muchas de estas mejoras aumentan la fiabilidad en segundo plano — especialmente para conjuntos de datos grandes.

---

## Breaking Changes

### Consolidación de variables de entorno del Gateway
Las seis variables de entorno anteriores para embeddings, vision y reranking han sido consolidadas.

**Nuevas variables:**
- `ONESTACK_GW_URL`
- `ONESTACK_GW_KEY`

Por favor, actualiza tus archivos `.env`, `compose.yaml` y configuraciones de despliegue en consecuencia.

---

## Under the Hood

- Lógica de reintentos unificada para llamadas API más estables
- Timeout dedicado para el worker de PDF
- Agente interno de revisión de PR con reglas de seguridad y multi-tenancy (gracias a Santi)

---

Esta versión fue impulsada en gran medida por **Pascal**, desde el soporte de audio/video y la nueva pipeline de PDF hasta el rediseño del Activity Center. Gracias también a **Santi** por introducir directrices estructuradas de revisión.

—
21 commits · 21 PRs · 90 archivos modificados · 2 colaboradores

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

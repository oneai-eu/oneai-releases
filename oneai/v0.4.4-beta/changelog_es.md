# OneAI v0.4.4-beta — Automatización, protección de acceso y un AI Chat mucho más estable

**Release Date:** 2026-04-27

Esta versión incorpora tres grandes avances: **automatización de workflows con n8n**, **protección proactiva de acceso a proyectos** para evitar fugas de datos y un **AI Chat notablemente más estable y ágil** — especialmente para modelos privados.

---

## Highlights

### Conector n8n: crea workflows directamente desde OneAI
Ahora puedes conectar tu **instancia de n8n como un Space** y crear workflows de automatización directamente desde AI Chat.

- Asistente de configuración guiado con validación de API  
- Plantillas de workflow listas para usar  
- Creación y activación de workflows directamente desde el chat  
- Sincronización automática mediante webhooks  
- Eliminación limpia al borrar un Space  

OneAI se convierte en tu capa de control de automatización impulsada por IA — basada en tus datos empresariales.

Muchas gracias a **Mirko**, quien desarrolló el conector de principio a fin.

---

### Protección de acceso a proyectos: detecta conflictos y evita fugas de datos
Los proyectos vinculados a Knowledge Spaces ahora son significativamente más seguros.

Los administradores de proyecto pueden ver de inmediato:
- Qué miembros **no tienen acceso a los Spaces vinculados**  
- Dónde existen posibles conflictos de permisos  

Pueden directamente:
- Conceder acceso (si están autorizados)  
- Enviar solicitudes de acceso estructuradas a los administradores del Space (con limitación inteligente de 1 hora)  

Además, las tool calls se filtran estrictamente en segundo plano para incluir únicamente documentos de Spaces autorizados. Esto evita la exposición involuntaria de datos entre Spaces.

Un gran paso adelante en gobernanza de IA y protección de datos alineada con el EU AI Act.  
El concepto y la implementación fueron liderados por **Pascal**.

---

### Modelos privados: estables, visibles y listos para producción
Los modelos autoalojados ahora son mucho más fiables:

- Streaming estable que incluye tool calls y reasoning  
- Visibilidad correcta en el selector de modelos  
- Control de acceso adecuado en la configuración de la organización  
- Sin fallos por formatos de respuesta inesperados  

Al migrar a una API backend más robusta, los streams largos ahora se completan de forma fiable — manteniendo la protección SSRF.

---

### Gestión proactiva de sesiones
Más seguridad, menos sorpresas:

- Aviso anticipado antes de que expire la sesión (con reautenticación instantánea)  
- Cierre de sesión automático tras inactividad prolongada  
- Preferencia de tema almacenada de forma persistente en el servidor  

Esto reduce el riesgo de sesiones activas olvidadas, especialmente en entornos compartidos.

---

### Una experiencia de AI Chat mucho más fluida
AI Chat recibió importantes mejoras de estabilidad:

- Sin bloqueos de la interfaz durante sugerencias de artefactos grandes  
- Tecla Enter bloqueada correctamente durante el streaming activo  
- Sin “mensajes fantasma” tras errores en el chat  
- Problema del cursor tras pegar documentos resuelto  
- Manejo de errores más claro en fallos de búsqueda web  

El resultado: una experiencia de chat diaria mucho más robusta y profesional.

---

## Improvements

### Procesamiento de documentos: más rápido, más justo y más resiliente
Se ha mejorado toda la cola de embeddings:

- Distribución más equitativa entre organizaciones  
- Worker dedicado para cargas interactivas (críticas)  
- Activación instantánea entre réplicas mediante PostgreSQL NOTIFY  
- Ciclos de retry más cortos tras fallos  
- Prefix caching para modelos vision → procesamiento más rápido de documentos grandes  
- Validación de imágenes antes del procesamiento vision para fallar antes y de forma limpia  

Los documentos cargados desde el chat ahora tienen prioridad — incluso cuando se ejecutan grandes trabajos de sincronización en segundo plano.

Gran parte de este trabajo profundo de sistema fue impulsado por **Pascal**.

---

### Catálogo de modelos actualizado
El catálogo de modelos se ha actualizado de forma integral:

- Últimos modelos de OpenAI, Anthropic, Google y Mistral  
- Ventanas de contexto de hasta 1 millón de tokens  
- GPT‑5.5 y GPT‑5.5 Pro pre‑registrados  
- Soporte para la API Adaptive Thinking de Anthropic (Opus 4.7)  

Gracias a **Mirko** y **Oliver** por las actualizaciones — y a **Justus** por ampliar el LLM gateway con `prompt_cache_key` y `max_output_tokens`.

---

## Bug Fixes

- Modelos de Google: manejo estable de thought signatures en múltiples tool calls  
- Mistral: sin timeouts de 30 segundos en solicitudes complejas  
- Drag & drop en el explorador de archivos restaurado  
- Eliminación de carpetas y escalado de tablas corregidos  
- Las instrucciones del proyecto se actualizan al instante  
- Logs de auditoría de compliance correctamente vinculados a los mensajes del chat  

Se pulieron muchos pequeños detalles — con un impacto real en el día a día.

---

## Under the Hood

- Mayor estabilidad en WebSockets y eliminación de Spaces  
- Eliminación de archivos en lotes para evitar el agotamiento de recursos de infraestructura  
- 44 dependencias actualizadas  

---

Gracias a **Pascal, Mirko, Justus, Oliver** y dependabot por esta importante versión.

— 40 PRs · 114 archivos modificados · ~7.900 líneas añadidas

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

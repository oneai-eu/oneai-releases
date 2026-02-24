# OneAI v0.2.21-beta — Gobernanza centralizada de modelos, Spaces estables y procesamiento moderno de documentos

**Release Date:** 2026-02-24

Con v0.2.21-beta, estamos fortaleciendo OneAI en tres áreas críticas: **gobernanza de modelos de IA**, **estabilidad para Knowledge Spaces de gran tamaño** y una **pipeline de procesamiento de documentos totalmente modernizada**.

---

## Highlights

### Configurar modelos de IA por organización y equipo
Los administradores ahora pueden definir de forma centralizada:

- **Qué modelos de IA están disponibles en toda la organización**
- El **modelo predeterminado** para todos los usuarios
- Modelos adicionales asignados a equipos específicos

Todos los ajustes están disponibles en la nueva sección Admin en `/dashboard/admin`, estructurada con una navegación clara por pestañas.

**Qué significa para usted:**
- Gobernanza clara sobre el uso de modelos (alineada con los requisitos del EU AI Act)
- Sin acceso no intencionado a modelos no aprobados
- Un modelo predeterminado coherente para obtener resultados fiables en toda la empresa

Las preferencias de modelo guardadas previamente por usuario han sido reemplazadas por la nueva lógica a nivel organizacional. El modelo predeterminado definido por el admin ahora se aplica automáticamente.

Muchas gracias a Orehman (con el apoyo de Pascal) por construir este completo sistema de gobernanza de modelos.

---

### No más bloqueos del navegador en Spaces grandes
En Knowledge Spaces muy grandes con miles de documentos, el alto consumo de memoria podía provocar ralentizaciones o bloqueos del navegador.

El monitoreo de embeddings ahora carga únicamente datos de estado agregados en lugar de listas completas de archivos.

**Resultado:**
- Más del **99 % menos de transferencia de datos** (por ejemplo, de ~1,6 MB a ~5 KB para más de 11.000 archivos)
- Estabilidad significativamente mejorada en Spaces grandes
- Actualizaciones de estado más rápidas y eficientes

Gracias a Mirko (coautor: Pascal) por esta mejora de rendimiento de gran impacto.

---

### Procesamiento de PDF e imágenes completamente modernizado
Hemos rediseñado por completo el procesamiento de PDFs, documentos escaneados e imágenes.

- El análisis de imágenes ahora se realiza mediante un **modelo de visión de IA configurable** en lugar de OCR tradicional
- Se eliminó la anterior pipeline de renderizado de PDF, que no era fiable
- Los PDFs escaneados y basados en imágenes ahora se procesan **de forma mucho más fiable**

**Su beneficio:**
- Mejor extracción de información de documentos escaneados
- Recuperación de conocimiento más consistente en Spaces
- Menos resultados vacíos o incompletos en los documentos procesados

Justus elevó significativamente la base técnica de nuestro procesamiento documental con esta versión.

---

## Mejoras

- Rutas de Admin consolidadas bajo `/dashboard/admin/*` (Payment, SCIM, Private Models)
- Aplicación más estricta de las reglas de acceso a modelos en Chat y Distillation
- Sincronización más fiable de Artifacts entre diferentes vistas
- 40 dependencias actualizadas para mayor seguridad y estabilidad
- Framework backend (Yedra) actualizado

---

## Corrección de errores

Una serie de problemas de UI resueltos en una sola versión:

- Diseño más limpio de las tarjetas de chat
- Diálogo de confirmación antes de eliminar Artifacts
- La vista de Artifact vuelve a ser desplazable
- Corrección del diseño de la barra de herramientas en paneles minimizados
- El botón “Replace existing files” vuelve a funcionar de forma fiable

En conjunto, esto da como resultado una experiencia de usuario diaria mucho más fluida.

---

## Breaking Changes

### La gestión de modelos ahora se basa en la organización
- Se eliminó el antiguo campo por usuario `preferred_model`
- El acceso a modelos ahora se gestiona únicamente a nivel de organización y equipo
- El modelo predeterminado definido por el admin se aplica automáticamente a todos los usuarios

**Acción requerida:** revise la configuración de sus modelos en la nueva sección Admin.

### Nuevas variables de entorno requeridas para el modelo de visión
El nuevo procesamiento de imágenes y PDF requiere:

- `VISION_URL`
- `VISION_KEY`
- `VISION_MODEL`

Por favor, configúrelas antes del despliegue.

### URLs de Admin actualizadas
- `/dashboard/payment` → `/dashboard/admin/payment`
- `/dashboard/private-models` → `/dashboard/admin/private-models`
- `/dashboard/scim` → `/dashboard/admin/scim`

Actualice los marcadores o la documentación interna según corresponda.

---

Muchas gracias a Orehman, Justus, Mirko y Pascal por hacer posible este importante release.

_7 PRs · 156 files changed · 4,346 insertions · 3,268 deletions · 4 contributors_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

# OneAI v0.3.0-beta — Control total del chat, nuevo Activity Hub y últimos modelos de Anthropic

**Release Date:** 2026-02-26

Con **OneAI v0.3.0-beta**, ofrecemos más control, más transparencia y mayor rendimiento en toda la plataforma.

Desde respuestas de IA que se pueden detener y reanudar hasta un Activity Hub centralizado y múltiples claves API con fecha de expiración, esta versión refuerza significativamente el uso diario de la IA en entornos enterprise.

## Highlights

### Detener respuestas de IA y reconexión fluida
Ahora puedes detener en cualquier momento las respuestas en curso en **AI Chat**. Si la conexión se interrumpe, la respuesta se reanuda automáticamente donde se quedó — **sin mensajes perdidos**.

Esto hace que los análisis largos y las redes inestables sean mucho más fiables.

Muchas gracias a **Pascal** por la gran mejora de la arquitectura de streaming.

### Nuevo Activity Hub en la barra lateral
Todas las actividades en curso — **uploads, procesamiento de documentos y Spaces minimizados** — ahora están centralizadas en un Activity Hub estructurado dentro de la barra lateral.

En lugar de iconos flotantes, obtienes una vista clara y centralizada con seguimiento de estado detallado.

También implementado por **Pascal**.

### Nuevos modelos Anthropic: Opus 4.6 y Sonnet 4.6
Hemos añadido los últimos modelos de Anthropic:

- **Claude Opus 4.6** para razonamiento complejo y tareas estratégicas
- **Claude Sonnet 4.6** como alternativa potente y rentable
- Hasta 200k de contexto y capacidades multimodales completas

Gracias a **Mirko** por la rápida integración.

### Múltiples claves API con expiración
Los usuarios ahora pueden crear y gestionar **múltiples claves API**, cada una con:

- Descripción personalizada
- Fecha de expiración opcional
- Gestión centralizada en el perfil

Esto mejora la seguridad, la trazabilidad y la separación clara entre integraciones.

Gran trabajo de **Pascal**.

### Los chats ahora pertenecen a Spaces
Hemos simplificado la arquitectura: **los chats ahora están directamente asociados a Spaces** en lugar de a proyectos.

Esto proporciona:

- Una estructura más limpia
- Mayor flexibilidad
- Una base más sólida para futuras funcionalidades

Los proyectos existentes se convirtieron automáticamente en Spaces de tipo project.

Importante trabajo arquitectónico de **Justus**.

---

## Improvements

### Reintento automático en el procesamiento de documentos
Si el procesamiento de un documento falla (por ejemplo, debido a errores temporales de API), OneAI lo reintenta automáticamente con backoff inteligente.

Resultado: **Knowledge Spaces más fiables** y menos intervención manual.

### Pegar capturas directamente (Ctrl+V)
Ahora puedes pegar imágenes y capturas de pantalla directamente en AI Chat con **Ctrl+V** — sin necesidad de subir archivos por separado.

### Visualización más limpia de los pasos de razonamiento
Los pasos de razonamiento y las llamadas a herramientas ahora aparecen contraídos por defecto, reduciendo el ruido visual y manteniendo la transparencia.

### Artifacts: creador, marca temporal y transferencia
Los Artifacts ahora muestran:

- Creador
- Fecha de última actualización

También pueden moverse o copiarse entre Spaces.

### Nueva página “What’s New?”
Una nueva página de resumen de versiones mantiene a los usuarios informados y les notifica automáticamente sobre nuevas actualizaciones.

### Nuevo inicio y eliminación masiva
- Nueva pantalla de inicio tras el login
- Selección múltiple y eliminación masiva de chats y Artifacts
- Navegación admin más limpia

### Conector de weclapp significativamente mejorado
- Resúmenes de datos empresariales generados por IA
- Enriquecimiento del contexto de clientes
- Estructura de carpetas mejorada
- Descargas más robustas y mejor gestión de rate limits

### Infraestructura de Spaces reforzada
Mejor sincronización, cálculo correcto del almacenamiento y gestión de errores más sólida en todos los proveedores.

---

## ⚠️ Seguridad

Hemos corregido una brecha de multi-tenancy en la creación de Artifacts generados por IA.

Ahora los Artifacts se validan contra los permisos de acceso al Space antes de su creación, garantizando un aislamiento estricto entre tenants.

---

## Breaking Changes

### Chats → Spaces (Database)
Los chats ya no están vinculados a proyectos. Los proyectos se migraron a Spaces con `provider='project'`.

**Migración requerida:**
- 202602130000.sql
- 202602180000.sql

Los chats existentes se migran automáticamente.

### Multi-API Keys (API)
Las claves API ahora se almacenan en una tabla dedicada.

**Migración requerida:** 202602250000.sql  
Las claves existentes se migran automáticamente.

### Ajuste de precios: Sonnet 4.5
El precio de salida de Sonnet 4.5 se ha ajustado para coincidir con los precios oficiales de Anthropic (60 % más alto que el cálculo anterior).

Tenlo en cuenta en tus previsiones de costes.

---

## Under the Hood

- Endpoints de chat unificados
- Nuevo monitoreo de uso de LLM y tokens
- Mejoras de CI para la gestión de ramas de release
- 29 dependencias actualizadas
- Actualización del framework backend para corregir caídas del servidor

---

Muchas gracias a **Pascal, Mirko, Justus y Orehman** por hacer posible esta gran release.

—

*26 commits · 25 PRs · 264 archivos modificados*

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

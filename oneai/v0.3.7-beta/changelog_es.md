# OneAI v0.3.7-beta — Búsqueda más inteligente, personas personalizadas y auditorías completas

**Release Date:** 2026-04-03

## Highlights

### Búsqueda documental más inteligente con recuperación híbrida y reranking
La búsqueda en Knowledge Spaces se ha actualizado de forma fundamental.

OneAI ahora combina la **búsqueda clásica por palabras clave (BM25)** con **búsqueda vectorial basada en IA**, seguida de una etapa de reranking por relevancia. El resultado: respuestas significativamente más precisas, especialmente en consultas complejas o matizadas.

- Mejores resultados para terminología específica del sector y sinónimos
- Respuestas más consistentes en grandes colecciones de documentos
- Las señales de relevancia influyen directamente en la generación de respuestas

Gracias a Pascal — nuestra nueva arquitectura de recuperación establece un nuevo estándar en calidad de procesamiento documental.

### Crea y comparte tus propias personas
Ahora puedes crear **personas de IA personalizadas** para distintos roles y casos de uso — desde Ventas hasta Legal o IT.

- Personas privadas visibles solo para ti
- Personas compartidas creadas por admins para uso en toda la organización
- Nueva página «Mis personas» en tu perfil

Las personas ahora se seleccionan por chat y ya no están vinculadas a proyectos.

### Nuevo sistema de auditoría para equipos de Compliance
Los administradores de Compliance cuentan ahora con un flujo de revisión sólido:

- Revisar, aprobar o bloquear mensajes marcados
- Historial completo de revisiones con marca de tiempo y atribución del revisor
- Nueva vista detallada con historial del chat y fuentes

Los chats pueden bloquearse automáticamente hasta su revisión si es necesario. Gracias a Oliver por implementar esta capacidad crítica de gobernanza.

### Fija proyectos individualmente y visualiza tus permisos
La fijación de proyectos ahora es **por usuario** — tus prioridades son independientes de las de tu equipo.

También puedes ver al instante:
- Si tienes permisos de escritura
- Si eres administrador del proyecto

Esto mejora la transparencia y reduce la confusión en entornos colaborativos.

### GitHub Code Intelligence v2
Nuestra integración con GitHub ahora analiza los repositorios a un nivel mucho más profundo:

- Detección de relaciones de importación
- Análisis de llamadas a funciones entre archivos
- Grafos de código generados automáticamente por directorio

Esto hace que el conocimiento técnico contenido en las bases de código sea mucho más fácil de buscar y aprovechar. Gracias a Mirko por esta gran actualización.

## Improvements

- Las imágenes generadas por IA ahora pueden guardarse directamente en los proyectos
- Las listas de proyectos muestran fecha de creación, última actualización y creador
- La IA ahora tiene en cuenta tu nombre y tu rol para ofrecer respuestas más personalizadas
- El contenido extenso pegado aparece como documentos compactos con vista previa
- Diálogo unificado de invitación a Spaces para usuarios y equipos
- Soporte ampliado de WebAuthn para algoritmos adicionales de passkeys
- Sincronización con Outlook más robusta para IDs de mensajes complejos

## Bug Fixes

- Conexiones de chat significativamente más estables ante problemas de WebSocket (los mensajes se conservan y pueden reenviarse)
- Procesamiento de documentos más fiable para archivos vacíos y errores transitorios
- Notificaciones agrupadas durante el re-embedding masivo en lugar de envíos individuales
- Las redirecciones SSO ahora devuelven de forma consistente a la página prevista
- Los errores de carga se muestran claramente
- El modo Research respeta correctamente los flujos de confirmación
- Los enlaces externos vuelven a funcionar como se espera

## Security

Implementamos varias mejoras importantes de seguridad:

- **Las claves API se revocan inmediatamente cuando los usuarios se desactivan vía SCIM**
- Los webhooks de Stripe validan estrictamente el contexto de la organización
- Las consultas de auditoría están completamente aisladas por tenant para evitar accesos cruzados

Estos cambios refuerzan el control de acceso y respaldan una gobernanza alineada con el EU AI Act.

## Breaking Changes

### Re-embedding completo de Knowledge Spaces requerido
La arquitectura de búsqueda ha migrado a vectores híbridos. Como resultado, todos los documentos se reprocesan automáticamente.

- La migración restablece todos los embeddings a «pending»
- La cola de embeddings volverá a indexar todos los archivos
- Asegura capacidad suficiente para la fase inicial de reprocesamiento

### Las personas ya no están vinculadas a proyectos
`defaultPersonaId` ya no es compatible. Las personas ahora se seleccionan libremente por chat.

La migración se gestiona automáticamente.

### Actualización del modelo de fijación de proyectos
Las fijaciones ahora son específicas por usuario en lugar de globales. Las fijaciones existentes se han migrado automáticamente.

## Under the Hood

Además de 47 actualizaciones de dependencias, mejoramos la estabilidad, la lógica de reintentos y la tolerancia a fallos en toda la plataforma.

---

Muchas gracias a Pascal, Oliver, Mirko, Justus y a todo el equipo por los 39 commits de esta versión.

_39 commits · 38 PRs · 160 archivos modificados_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

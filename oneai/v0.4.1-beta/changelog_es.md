# OneAI v0.4.1-beta — Nuevas integraciones, generación de imágenes con IA y una experiencia de AI Chat más inteligente

**Release Date:** 2026-04-16

La versión v0.4.1-beta incorpora mejoras significativas en toda la plataforma: un conector ClickUp profundamente integrado, generación de imágenes con IA directamente en AI Chat, una calidad de respuesta considerablemente superior para datos de weclapp y una experiencia de chat notablemente más fluida.

## Aspectos destacados

### Nuevo conector ClickUp con sincronización completa
Ahora puedes conectar Spaces y Lists de ClickUp directamente a OneAI.

- Sincronización de tareas, descripciones, comentarios y checklists
- Procesamiento automático para búsqueda impulsada por IA en Knowledge Spaces
- Resúmenes a nivel de lista para un mejor contexto
- Actualizaciones casi en tiempo real mediante webhooks

ClickUp se convierte en una fuente de conocimiento totalmente consultable en AI Chat — sin exportaciones manuales.

Excelente trabajo de **Mirko**, quien desarrolló el conector de principio a fin.

### Generación de imágenes con IA con selección de modelo y controles de administrador
Ahora puedes generar imágenes directamente en AI Chat, con control total sobre:

- Modelo (p. ej., OpenAI o Google Imagen)
- Configuración de calidad
- Tamaño de imagen y relación de aspecto (1:1, 16:9, 9:16 y más)

Los administradores pueden definir de forma centralizada qué modelos de imagen están disponibles en toda la organización, garantizando que el uso cumpla con las políticas internas y los requisitos de cumplimiento.

Una potente incorporación para marketing, producto, RR. HH. y cualquier equipo que cree contenidos visuales — implementada por **Mirko**.

### Chat más fluido con vista previa en vivo de herramientas
AI Chat ahora es significativamente más receptivo y transparente.

- Vista previa en vivo de llamadas a herramientas, incluidos los argumentos transmitidos en streaming
- Los pasos de razonamiento se expanden automáticamente durante el procesamiento y se contraen después
- Indicadores de estado según el modelo («Thinking» vs. «Processing»)
- Sin estados de carga infinitos silenciosos cuando las APIs devuelven errores

El resultado: mayor claridad, menos sorpresas y una experiencia general más profesional. Gracias a **Pascal** por la renovación del streaming — y a **Oliver** por corregir un problema poco frecuente pero crítico en el manejo de errores de OpenAI.

### Integración con weclapp: respuestas mucho más fiables
Para muchos clientes, weclapp es un sistema crítico para el negocio. Hemos rediseñado por completo la lógica RAG subyacente:

- Nuevos tipos de entidades (p. ej., partidas abiertas, mercancías entrantes)
- Representación estructurada de campos en lugar de bloques de texto genéricos
- Resúmenes mejorados
- Medidas concretas contra alucinaciones

El resultado: respuestas notablemente más precisas y fiables sobre documentos, partidas abiertas y transacciones.

Gran trabajo de **Mirko** en esta mejora de calidad.

### Panel rediseñado con gráficos modernos
El panel ha sido modernizado tanto a nivel visual como técnico:

- Nuevos tipos de gráficos (incluido un gráfico de dona para la distribución de modelos)
- Opciones de filtrado mejoradas
- Presentación de KPI más clara
- Mejor agrupación de modelos (incluyendo un grupo «Others»)

Ahora los administradores tienen una visión más clara del uso, la distribución de modelos y la actividad organizativa.

Diseñado e implementado por **Pascal**.

### Diálogo de referencias como explorador de dos paneles
El diálogo de referencias de proyectos ha sido completamente rediseñado — similar a un gestor de archivos:

- Navegación de carpetas a la izquierda
- Detalles de archivos a la derecha
- Visibilidad del estado de los embeddings y número de archivos

Esto facilita considerablemente la navegación en Knowledge Spaces de gran tamaño.

## Mejoras

- **Procesamiento de documentos más rápido**: Los documentos de un solo bloque omiten un paso innecesario del LLM, mejorando la eficiencia.
- **Passkeys ahora opcionales**: Los nuevos usuarios pueden registrarse sin configurar inmediatamente una passkey y se les invita a hacerlo después de iniciar sesión. Gracias a **Justus**.
- **Activity Hub optimizado**: Menos solicitudes innecesarias en segundo plano y mayor claridad en las tareas.
- **Validación de herramientas más estricta**: Generación de imágenes y transcripción más fiables con la validación estricta de esquemas restaurada.
- **Mejor compatibilidad con Gemini**: Los pasos de razonamiento ahora se conservan correctamente entre mensajes.

## Correcciones de errores

- Se corrigió un problema por el cual errores de OpenAI podían provocar estados de carga infinitos en AI Chat.
- Se estabilizó la lógica del LLM gateway y la comunicación HTTP tras actualizaciones de dependencias.

## Bajo el capó

- Los modelos de Vision ahora se enrutan completamente a través de nuestro enrutador LLM central (OneGateway) para un seguimiento preciso del uso.
- Actualizaciones integrales de dependencias (incluido postgres 3.4.9) para mayor estabilidad y seguridad.
- Refactorización interna y mejoras en la seguridad de tipos.

---

Un gran agradecimiento a **Pascal, Mirko, Justus y Oliver** por 18 PRs en 124 archivos modificados.

_18 commits · 18 PRs · 124 archivos modificados · +9,242 / −4,347 líneas_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

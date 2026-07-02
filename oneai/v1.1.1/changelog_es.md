# OneAI v1.1.1 — Modo de voz, presentaciones y automatización más inteligente

**Release Date:** 2026-06-24

## Highlights

OneAI v1.1.1 es una de nuestras mayores releases hasta la fecha. El enfoque está en nuevas formas de trabajar en **AI Chat**, **artifacts** más potentes y un gran paso adelante en **automatización con control**.

- **Modo de voz en AI Chat**: Ahora puedes hablar con OneAI en lugar de escribir. Gracias a Justus, el primer despliegue ya se siente sólido, con mayor estabilidad en el streaming y una guía más clara dentro del producto.
- **Presentaciones generadas por IA en el chat**: Crea presentaciones completas directamente desde una conversación, previsualízalas en vivo en el panel de artifacts y expórtalas como **PowerPoint o PDF**. Gracias a Pascal por entregarlo de principio a fin.
- **Uno – tu nuevo asistente**: Con su propio sistema de conocimiento, contexto de workspace y un flujo conversacional mejorado, Uno introduce una experiencia de asistente más enfocada. Santi sentó aquí las bases de lo que viene.
- **Mejor uso compartido de artifacts**: Los artifacts ahora admiten imágenes y pueden compartirse mediante **enlaces privados, de proyecto o públicos**. Los flujos de compartición ahora son mucho más claros para los destinatarios.
- **Plantillas de proyecto**: Guarda configuraciones habituales de proyecto como plantillas y reutilízalas con un solo clic.

## Improvements

- **Menos clics para acciones con herramientas**: Con la nueva lógica de **trust window**, OneAI puede aprender cuándo acciones de confianza pueden ejecutarse automáticamente o aprobarse de forma más fluida — por ejemplo con Outlook, n8n, herramientas MCP o APIs aprobadas. Esto hace que la automatización sea mucho más ágil sin comprometer la gobernanza. Gran parte de esta base fue desarrollada por Mirko.
- **Mayor visibilidad en Knowledge Spaces**: Ahora puedes ver el progreso de indexación de documentos directamente en la barra de actividad y en las tarjetas de los espacios.
- **Vistas específicas por conector**: El contenido de los Connectors se muestra ahora en formatos más adecuados, incluida una vista dedicada para mensajes de Outlook.
- **Sugerencias de chat más inteligentes**: AI Chat ahora propone preguntas de seguimiento más relevantes.
- **Python más potente en el chat**: Las salidas de Python ahora pueden incluir imágenes y los archivos de Knowledge Spaces pueden pasarse directamente a Python.
- **Integraciones y modelos ampliados**: Incluye Vertex AI, Grok 4.3 a través de Vertex, gestión de servidores MCP y nuevos bloques de integración y portal.
- **Feedback sobre respuestas de IA**: Los usuarios ahora pueden valorar las respuestas de la IA y los administradores revisar el feedback agregado en un dashboard.

## Bug Fixes

Esta release también incluye numerosas mejoras específicas de fiabilidad en el día a día:

- **Procesamiento de documentos más fiable**: Los documentos ahora se procesan de forma más robusta, incluso cuando las solicitudes se interrumpen o se producen errores temporales. Gracias a Pascal, esto debería reducir significativamente el trabajo manual en Knowledge Spaces grandes.
- **Sincronizaciones y Connectors más estables**: La sincronización con OneDrive es ahora más fiable, especialmente con archivos grandes. Google Drive y Google SSO también se han reintroducido de forma controlada mediante feature flags.
- **Menos interrupciones en el chat**: Las confirmaciones de herramientas ya no se quedan bloqueadas en llamadas paralelas, las confirmaciones resueltas no reaparecen tras reconectarse y los prompts demasiado largos fallan con mucha menos frecuencia.
- **Mejor experiencia con artifacts**: Los artifacts ahora se renderizan correctamente al abrirse por primera vez, las referencias al artifact activo se resuelven de forma más fiable y las exportaciones a PDF esperan correctamente a los diagramas y al resaltado de sintaxis.
- **Mensajes de error más claros**: Los errores de proveedores de modelos y de autenticación de Microsoft ahora son más fáciles de entender, lo que acelera el diagnóstico.
- **Mejoras en administración y proyectos**: Los administradores ahora pueden eliminar miembros incluso si existen datos históricos de facturación o persona. También añadimos eliminación masiva para listas de chats en proyectos y corregimos varios detalles menores de UI.

## Security

- **Todas las vulnerabilidades conocidas de dependencias resueltas**: Los hallazgos de pnpm audit se redujeron de **54 a 0**.
- **Ejecución de herramientas más segura**: El nuevo mecanismo de trust window cierra brechas relacionadas con ejecuciones silenciosas y hace que las decisiones automáticas sean más transparentes y seguras.
- **Autenticación más robusta**: Los fallos permanentes de Microsoft AAD ahora se gestionan correctamente en lugar de reintentarse repetidamente con credenciales inválidas.

## Under the Hood

Más allá de las funcionalidades visibles, migramos más Connectors a una plataforma unificada, ampliamos la infraestructura de herramientas, mejoramos el diagnóstico de sesiones y sentamos las bases para futuras integraciones y automatización.

Gracias a **Pascal, Mirko, Justus, Oliver, Obaid y Santi** por lanzar una release tan relevante.

*111 commits · 108 PRs · 690 archivos modificados*

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

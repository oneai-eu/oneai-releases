# OneAI v1.0.4 — Chat más resiliente, fuentes más claras y mayor transparencia en precios

**Release Date:** 2026-05-15

Con **OneAI v1.0.4**, AI Chat se vuelve notablemente más fiable en el uso diario — especialmente para respuestas largas, flujos de herramientas complejos y trabajo basado en documentos. Al mismo tiempo, mejoramos la transparencia en las suscripciones y reforzamos la privacidad de las fuentes web.

## Highlights

- **Las respuestas largas ya no desaparecen tras breves cortes de conexión.** Si un flujo se interrumpe durante una respuesta, OneAI ahora lo restaura automáticamente y conserva el texto ya generado. En lugar de perder la pregunta y la respuesta, los usuarios pueden continuar sin interrupciones. Gracias a **Pascal**, AI Chat es ahora mucho más resiliente en redes inestables.
- **Nueva barra de llamadas a herramientas y panel unificado de fuentes.** Los pasos de razonamiento y la actividad de herramientas ahora aparecen justo donde ocurren en la respuesta. Las fuentes web y de archivos también se combinan en una única vista **“All Sources”**, facilitando el seguimiento de respuestas complejas. Gracias a **Oliver** y **Pascal** por este rediseño integral.
- **Los artefactos siempre al alcance.** Los artefactos creados y referenciados se recopilan en una bandeja fija justo encima del campo de entrada. Así es fácil volver a ellos, incluso en conversaciones largas. Las referencias en línea ahora abren los artefactos directamente en el panel lateral sin sacar a los usuarios del chat.
- **Precios de modelos en tiempo real en el área de Subscription.** Los precios de los modelos disponibles ya no están definidos de forma estática. Ahora se actualizan dinámicamente y se muestran en un nuevo diálogo de precios, ofreciendo a los administradores una visión más clara y actualizada de los costes. Gracias a **Obaid** por hacerlo posible.

## Improvements

- **Procesamiento de documentos más rápido.** Los resúmenes y embeddings ahora se ejecutan en paralelo, acelerando notablemente el procesamiento de documentos.
- **Menor uso de memoria en la búsqueda.** La búsqueda de documentos utiliza significativamente menos RAM manteniendo la misma calidad. Gracias a **Justus**, OneAI escala de forma más eficiente en Knowledge Spaces grandes.
- **Sin contenido PDF duplicado.** Hemos corregido un problema que podía causar la indexación duplicada de contenido PDF en algunos casos.
- **Mejor experiencia de auditoría para equipos de compliance.** Los mensajes largos bloqueados ahora son legibles en el diálogo de auditoría, el contenido detectado se muestra con mayor precisión y la detección de IBAN genera menos falsos positivos.
- **Área de Subscription más ordenada.** Las pestañas de Overview, Billing, Usage, Team Quota y Add-ons ahora se comportan de manera más coherente en distintos tamaños de pantalla.

## Bug Fixes

- **Los prompts bloqueados por compliance se conservan para revisión.** Cuando un mensaje es bloqueado por una regla de compliance, el prompt original y sus adjuntos permanecen disponibles para revisión por parte de los administradores y pueden restaurarse correctamente tras la aprobación.
- **Los fragmentos de fuentes ya no rompen el diseño.** La vista de fuentes se mantiene compacta y legible incluso con fragmentos complejos.
- **Los títulos automáticos del chat permanecen dentro de nuestra infraestructura en la UE.** Esto mejora la privacidad y evita consumir el presupuesto de tokens orientado al usuario de su organización para una pequeña tarea en segundo plano.

## Security

- **Favicons respetuosos con la privacidad para citas web.** Los favicons ahora se cargan a través de un proxy seguro de OneAI en lugar de servicios externos. Esto evita exponer direcciones IP y comportamiento de navegación a terceros como el CDN de Google.
- También hemos preparado la base para análisis adicionales de seguridad de la cadena de suministro en segundo plano.

## Under the Hood

- Optimizaciones adicionales de rendimiento en búsqueda, almacenamiento y procesamiento de documentos
- Limpieza técnica en el stack de chat y releases
- Pequeñas mejoras en procesos de facturación y plataforma

Gracias a **Pascal**, **Oliver**, **Obaid** y **Justus** por este release. Un agradecimiento especial a Pascal por liderar gran parte de las mejoras de fiabilidad y experiencia de usuario del chat en esta versión.

*71 archivos modificados · 20 commits · 4 colaboradores*

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

# OneAI v1.1.0 — Nuestro mayor lanzamiento desde v1.0

**Release Date:** 2026-05-28

OneAI v1.1.0 supone un gran paso adelante: **AI Chat es más capaz**, **Knowledge Spaces es más fácil de gestionar**, y **los administradores disponen de controles más sólidos para entornos regulados**. Además, esta versión incorpora nuevos conectores, una experiencia de organización de proyectos mucho mejor y mejoras relevantes de fiabilidad en toda la plataforma.

## Highlights

- **Editar imágenes directamente en AI Chat**
  - Ahora puedes modificar imágenes generadas o subidas utilizando lenguaje natural.
  - Solicitudes como «haz el fondo más azul» o «elimina la persona de la izquierda» funcionan directamente dentro de la conversación.
  - Gracias a **Mirko**, AI Chat ahora ofrece un flujo de trabajo de edición de imágenes mucho más natural.

- **Búsqueda de texto completo en el contenido de los chats**
  - La búsqueda ya no se limita a los títulos de los chats, sino que también encuentra palabras dentro de tus mensajes.
  - Esto facilita recuperar conversaciones anteriores cuando recuerdas una frase, pero no el nombre.
  - Gracias a **Pascal**, la búsqueda es ahora mucho más útil en el trabajo diario.

- **Organizar proyectos con archivo, etiquetas y acciones masivas**
  - Ahora los proyectos pueden archivarse en lugar de eliminarse.
  - Las etiquetas personalizadas ayudan a estructurar el trabajo y es posible actualizar varios proyectos a la vez.
  - La vista general de proyectos se ha renovado completamente para un uso responsive e incluye gestión dedicada de etiquetas.

- **Pausar Spaces en lugar de eliminarlos**
  - Los administradores de la organización pueden desactivar Knowledge Spaces sin perder contenido ni configuración.
  - Los Spaces en pausa quedan ocultos para los miembros y pueden reactivarse en cualquier momento.
  - Especialmente útil para revisiones de cumplimiento, pausas de proyectos o cierres temporales.

- **Respuestas más inteligentes con mayor control de fuentes**
  - Dos nuevos ajustes de organización ayudan a OneAI a priorizar fuentes internas al generar respuestas.
  - Si se desea, OneAI también puede configurarse para responder solo cuando la información esté realmente respaldada por fuentes.
  - Una capacidad clave de gobernanza para sectores regulados. Gracias a **Mirko** por implementar estas funcionalidades relacionadas con los requisitos SAG.

- **Nuevos conectores: HubSpot y SMB**
  - **HubSpot** ya está disponible como nueva fuente de datos, incorporando el conocimiento del CRM en OneAI.
  - El nuevo **conector SMB** permite conectar unidades de red de tu entorno interno como fuente de conocimiento.
  - Gracias a **Pascal** por HubSpot y a **Justus** por el conector SMB y la base del agente necesaria.

## Improvements

- **Servidor MCP para herramientas AI externas**
  - Herramientas como Cursor, Claude Desktop, Copilot o n8n pueden ahora conectarse a OneAI mediante el estándar abierto MCP y consultar tus fuentes de conocimiento.
  - Gracias a **Santi** por esta importante ampliación para equipos técnicos.

- **Mejor visibilidad del uso, presupuestos y sobrecostes**
  - La sección de suscripción incluye ahora una pestaña dedicada al uso con consumo en tiempo real, límites de presupuesto y control de sobrecostes.
  - El dashboard también muestra la facturación y el uso de forma más clara con nuevas tarjetas KPI y una estructura más limpia.
  - Gracias a **Obaid** por aportar mucha más transparencia a la gestión de uso y costes.

- **Los archivos de proyecto usan ahora el explorador conocido**
  - Los archivos de proyecto utilizan la misma experiencia de explorador que en Spaces.
  - Esto crea un flujo de trabajo más coherente para previsualizar, navegar y gestionar archivos.

- **Reconexión para Outlook y OneDrive**
  - Las conexiones caducadas pueden renovarse ahora con un solo clic, sin necesidad de recrear un Space.
  - Esto reduce significativamente la carga administrativa.

- **Mejor visibilidad operativa**
  - Los Spaces en pausa se indican claramente en las páginas de detalle de proyectos y Spaces.
  - El indicador de estado del OneAI Agent se actualiza automáticamente.
  - Las compras de add-ons están disponibles de inmediato sin necesidad de recargar la página.

## Bug Fixes

- **Procesamiento de documentos más fiable**
  - Los documentos grandes y los archivos con conversión lenta se procesan de forma más fiable.
  - Los adjuntos HTML de correos electrónicos y subidas ahora son compatibles y se convierten en contenido utilizable para Knowledge Spaces.
  - Se ha corregido un bucle crítico de memoria provocado por ciertos correos de Outlook, lo que hace que el procesamiento de documentos sea mucho más estable bajo carga.
  - Gracias a **Mirko** y **Pascal** por estas mejoras clave en una parte central de la plataforma.

- **Integraciones con Microsoft y Teams más estables**
  - El inicio de sesión mediante el complemento de Teams vuelve a funcionar de forma fiable, incluso en entornos AD híbridos.
  - Las renovaciones de webhooks de Microsoft ya no quedan atrapadas en bucles de reintento cuando fallan.
  - La reconexión de OneDrive ahora devuelve a los usuarios al Space correcto de forma consistente.

- **Sincronización y artefactos más coherentes**
  - La sincronización en la nube ya no falla cuando se devuelven rutas duplicadas.
  - Los artefactos de chat ahora están correctamente limitados a su proyecto.
  - El estado de indexación de los documentos es visible, lo que facilita saber cuándo el contenido está listo para generar respuestas.

- **Mejor renderizado y gestión de sesiones**
  - Los diagramas ASCII y Mermaid vuelven a mostrarse correctamente en el chat.
  - Las sesiones caducadas redirigen correctamente al inicio de sesión en lugar de dejar al usuario en un estado erróneo.
  - Los magic links vuelven a funcionar para direcciones de correo electrónico que contienen el signo más.

## Security

- **Vinculación de identidad más sólida con Microsoft/Teams**
  - Las identidades de Microsoft Entra ahora se asocian utilizando identificadores estables de tenant y usuario en lugar de depender solo de la dirección de correo electrónico.
  - Esto reduce el riesgo de asignaciones incorrectas y refuerza el inicio de sesión en Teams, especialmente en escenarios de AD híbrido.

- **Los tokens del Agent ya no se almacenan en texto plano**
  - Los tokens de subida y descarga del OneAI Agent ahora se almacenan como hashes.
  - Esto mejora significativamente la protección de credenciales de conexión sensibles.

## Under the Hood

- Hemos unificado sustancialmente la arquitectura de conectores, creando una base más limpia para futuras integraciones.
- También hemos ampliado la cobertura de pruebas automatizadas en componentes clave del backend para mejorar aún más la estabilidad y previsibilidad de la plataforma.

Gracias a **Pascal**, **Mirko**, **Obaid**, **Justus** y **Santi** por este lanzamiento.

*43 commits, 43 PRs, 271 archivos modificados*

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

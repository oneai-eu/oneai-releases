# OneGlue v0.310.0 — Novedades

**Publicado el:** 2026-11-16

**Asistente de IA**

- Si no eliges ningún modelo, el asistente usa un modelo habilitado en tu organización de oneAI. El selector de modelos lo muestra como «Predeterminado (nombre del modelo)». Si eliges tú un modelo que no está habilitado, la ejecución no se inicia y el mensaje indica los modelos disponibles.
- El asistente recibe las listas y los documentos grandes de forma abreviada, junto con el número total. Si una solicitud sigue siendo demasiado grande o no se puede acceder a oneAI, ves qué ha pasado y qué puedes hacer.

**Acceso para el asistente en dispositivos Linux**

- En las nuevas instalaciones de GlueAgent en Linux, OneGlue crea una cuenta restringida sin derechos de administrador y configura por sí mismo el acceso para el asistente. Los dispositivos existentes reciben el acceso automáticamente en cuanto su GlueAgent tiene la versión 0.5.32 o posterior. Si no, la tarjeta «Acceso para el asistente» de la página de configuración muestra el comando único y el botón «Configurar».
- Los diagnósticos del asistente se ejecutan a través de GlueAgent mientras esté conectado.

**Otras mejoras**

- Las tarjetas de red que GlueAgent ya no notifica desaparecen de la configuración. Las redes de contenedores de corta duración (p. ej. Docker) no se importan. Los datos que has introducido tú se conservan.
- Los administradores del Tenant pueden revocar claves API personales. Al desactivar a un usuario, sus claves se revocan automáticamente.

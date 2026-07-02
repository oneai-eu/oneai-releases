# OneGlue v0.157.0 — Novedades

**Fecha de publicación:** 2026-07-02

En esta versión coinciden tres cosas: un registro en lenguaje claro de todo lo nuevo, un asistente de IA que ahora puede actuar de forma segura sobre tus dispositivos y una amplia tarea de refuerzo de seguridad que, discretamente, hace más sólida toda la plataforma. Esto es lo nuevo ahora mismo.

## Este registro de cambios y las notas de versión

Estamos abriendo nuestras notas de versión. OneGlue mejora sin parar y, hasta ahora, la mayor parte de ese trabajo ocurría en silencio entre bambalinas: veías un botón nuevo o una página más rápida, pero la historia completa quedaba enterrada en registros técnicos. Esta página lo cambia: un registro claro y en lenguaje sencillo de lo nuevo, escrito para las personas que usan OneGlue cada día.

- **Ve de un vistazo lo que ha cambiado.** Las novedades se agrupan en hitos con sentido —la historia de lo que hemos lanzado— en lugar de un muro de números de versión que tendrías que descifrar.
- **Entiende el beneficio, no la mecánica.** Cada entrada explica qué puedes hacer ahora y qué se ha vuelto más seguro, más rápido o más sencillo, en lenguaje cotidiano y no en términos de ingeniería.
- **En tu idioma y siempre al día.** El registro de cambios está localizado y se mantiene actualizado a medida que llegan nuevas funciones, así que nunca tienes que buscar para saber qué hay de nuevo.

## Tu asistente de IA, ahora manos a la obra

En cuanto tu espacio de trabajo de OneGlue se conecta con oneAI, un asistente de IA integrado queda disponible en toda la aplicación. Entiende tu documentación de TI y te ayuda a encontrar respuestas en lenguaje natural y, cuando lo apruebas, a realizar acciones reales sobre tus dispositivos conectados. El objetivo es un verdadero compañero de trabajo que vive dentro de OneGlue, no un chatbot añadido: opera únicamente dentro de lo que ya puedes ver y consultar, y tú mantienes el control de cada acción que realiza.

- **Pregunta sobre todo lo que puedes ver.** Abre el asistente desde cualquier página de dispositivo o usa el asistente de todo el espacio de trabajo para preguntar de forma conversacional por tus configuraciones, documentos y activos, sin necesidad de saber dónde está archivado cada dato. Como trabaja dentro de tus propios permisos, solo muestra información a la que ya tienes acceso.
- **Obtén respuestas reales sobre dispositivos en vivo.** Con tu aprobación explícita, el asistente puede ejecutar comprobaciones de solo lectura en un dispositivo conectado —cosas como el uso de disco o el estado del sistema— y explicarte qué significan los resultados, para que diagnostiques desde OneGlue en lugar de saltar entre herramientas y terminales.
- **Deja que proponga correcciones: tú mantienes el control.** El asistente puede sugerir correcciones a detalles del dispositivo como el nombre de host, las direcciones IP, el sistema operativo, las notas y más. Cada propuesta se muestra como una comparación clara de antes y después, y solo se aplica cuando la apruebas; cada cambio aplicado queda versionado y es totalmente reversible, así que nada le ocurre a tus registros sin tu consentimiento.
- **Guarda cualquier respuesta como documentación con un clic.** Cuando una respuesta merece conservarse, conviértela en un documento guardado adjunto al dispositivo correspondiente, capturando el razonamiento y el resultado para que el conocimiento se quede con tus registros en lugar de desaparecer en una ventana de chat.
- **Total transparencia en cada ejecución.** Cada respuesta muestra qué modelo de IA y qué perfil de experto la generaron, para que siempre sepas cómo se ha obtenido un resultado y puedas confiar en él en consecuencia.

> **Nota:** El asistente de IA y las funciones de acción sobre dispositivos que se describen aquí requieren que tu espacio de trabajo de OneGlue esté emparejado con oneAI. Si aún no te has conectado, el emparejamiento es una configuración única que desbloquea todo lo de esta sección.

## Más fuerte por defecto: una tarea de refuerzo de seguridad

Junto con el nuevo asistente, realizamos una amplia revisión de seguridad y fiabilidad en toda la plataforma: ese trabajo profundo y poco vistoso que nunca aparece como una función, pero que es exactamente lo que quieres que haga tu herramienta de documentación y de gestión de secretos. La mayor parte ocurre de forma invisible en segundo plano; el resultado es, sencillamente, un OneGlue en el que puedes confiar con más seguridad.

- **Bases actualizadas y reforzadas.** Hemos actualizado los componentes centrales sobre los que se construye OneGlue y aplicado las últimas correcciones de seguridad en toda la pila, de modo que las debilidades conocidas quedan cerradas antes de que puedan llegar a ser un problema para ti.
- **Aislamiento interno más estricto.** Los servicios sensibles —como la base de datos que guarda tus registros— quedan ahora separados de las partes del sistema expuestas a la red pública. Si alguna vez se comprometiera un solo componente, esto limita drásticamente hasta dónde podría extenderse un problema.
- **Mayor protección para las acciones automatizadas.** Las acciones de dispositivo aprobadas que introdujo el asistente de IA usan ahora una autorización de un solo uso y a prueba de manipulaciones, junto con una identidad de dispositivo verificada. En términos claros: una acción aprobada no puede capturarse y reproducirse más tarde, ni redirigirse a la máquina equivocada.
- **Todo queda auditable.** Los eventos relevantes para la seguridad se siguen registrando en una pista de auditoría a prueba de manipulaciones, de modo que siempre existe un registro fiable y revisable de qué ocurrió y quién lo hizo.

# OneAI v2026.08.18 — Colaboración, dashboards en vivo e integraciones seguras

**Release Date:** 2026-08-18

## Aspectos destacados

**Colaborar en presentaciones en tiempo real**

Las presentaciones generadas por IA ahora son espacios de trabajo compartidos. Varias personas pueden editar diapositivas, texto, tablas y gráficos al mismo tiempo, con cambios que aparecen al instante para todos y la presencia de colaboradores visible en directo en la presentación. Las plantillas de presentación reutilizables también ayudan a los equipos a empezar más rápido con un formato coherente.

**Crear dashboards de BI en vivo a partir de sus datos**

Creen métricas y gráficos interactivos a partir de sus tablas oneData directamente mediante AI Chat. Los dashboards están disponibles en su propia área dedicada, y ahora es posible importar archivos CSV y exportar resultados. Gracias a Mirko por crear esta base para la toma de decisiones basada en datos.

**Gestionar las integraciones de forma centralizada con controles de acceso granulares**

La nueva página de Integraciones les ofrece una visibilidad más clara y un mayor control sobre las conexiones con Outlook, n8n, HubSpot, Lexware Office y otros servicios:

- Los empleados pueden gestionar sus propias conexiones desde un único lugar centralizado.
- Las integraciones individuales pueden desactivarse de forma personal.
- Los administradores pueden desactivar integraciones en toda la organización o limitarlas a proyectos específicos.
- Ahora se pueden enviar correos electrónicos de Outlook directamente desde OneAI.

**Nuevo Connector: Lexware Office**

Conecten Lexware Office con OneAI para buscar datos contables de forma segura y trabajar con ellos mediante herramientas impulsadas por IA.

## Mejoras

**Una experiencia de AI Chat más productiva**

- Ahora se pueden editar los mensajes enviados. OneAI generará una nueva respuesta basándose en su solicitud revisada.
- El compositor de chat se ha rediseñado para ofrecer una experiencia más clara y eficiente.
- Uno ahora está disponible como una ventana de chat flotante, manteniendo la asistencia más cerca de su contexto de trabajo actual.

**Workflows de documentos y datos más fiables**

- Al hacer clic en «Aplicar» en una sugerencia de cambio de IA, el cambio ahora se aplica de forma fiable al documento.
- El procesamiento de datos y las herramientas de conjuntos de datos se han optimizado aún más.
- Las vistas de cumplimiento mejoradas ayudan a los administradores a rastrear la actividad relevante de forma más eficaz.

## Seguridad

Esta versión incluye amplios refuerzos de seguridad y cumplimiento normativo para facilitar el uso seguro de OneAI con datos empresariales:

- Un modo de investigación interno ya no puede crear contenido sin la confirmación explícita del usuario.
- Las acciones destructivas ahora se identifican de forma clara y coherente como irreversibles en todas las herramientas afectadas.
- Las credenciales de n8n ahora se almacenan cifradas.
- Cuando se elimina a un miembro, sus conexiones externas, como el acceso a Outlook, se desactivan de forma fiable.
- Las protecciones adicionales refuerzan la seguridad de las sesiones OAuth y SSO, el aislamiento de tenants, los roles y permisos, y los workflows de n8n.
- Las exportaciones CSV están mejor protegidas frente a la inyección de fórmulas, mientras que los registros de cumplimiento y de chat siguen principios más estrictos de minimización de datos.

Gracias a Mirko y Pascal por sus importantes contribuciones a estas mejoras de seguridad.

## Notas importantes sobre los cambios

Como parte de la nueva arquitectura de permisos e integraciones, se han estandarizado las rutas existentes de acceso y configuración. Después de la actualización, los administradores deben revisar:

- La habilitación de integraciones en toda la organización y las restricciones a nivel de proyecto
- Las conexiones existentes de n8n y Outlook
- Los roles y permisos para herramientas externas

Esto ayuda a garantizar que sus políticas de acceso previstas sigan vigentes.

## Detrás de escena

Además de las funcionalidades visibles, seguimos desarrollando LLM Routing, el procesamiento de documentos, las herramientas de datos y la arquitectura de la plataforma para hacer que OneAI sea más capaz y resiliente.

Gracias a Pascal, Mirko, Justus, Oliver, Santi y Obaid por sus contribuciones a esta versión.

_Alcance de la versión: 660 commits, 2.112 archivos modificados y 655 pull requests._

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

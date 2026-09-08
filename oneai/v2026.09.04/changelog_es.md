# OneAI v2026.09.04 — Comparte apps de Canvas y gestiona el CRM desde el Chat

**Release Date:** 2026-09-08

## Aspectos destacados

### Canvas se convierte en una mini-app compartible
Ahora puedes publicar apps de Canvas de forma segura mediante un enlace para compartir o en **tu propio dominio empresarial**. Esto convierte las aplicaciones creadas con IA en formularios, portales y herramientas prácticas para audiencias externas.

- Los visitantes pueden iniciar sesión con un enlace por correo electrónico sin necesitar una cuenta de OneAI.
- Las apps públicas pueden mostrar archivos e imágenes, mientras que los visitantes pueden cargar archivos.
- Los formularios pueden mostrar quién envió una entrada, y las personas que envían respuestas pueden revisarlas posteriormente.
- Los equipos se benefician de actualizaciones en directo más fiables y de un uso más fluido de las apps con mucho tráfico.
- Las apps de Canvas más grandes y sofisticadas pueden ser editadas por la IA de forma más rápida y fiable.

Gracias a **Pascal** y **Justus**, Canvas ahora es mucho más adecuado para casos de uso externos y seguros.

### HubSpot, conectado de forma nativa a OneAI
El nuevo Connector de HubSpot incorpora **26 herramientas** directamente en AI Chat. Tu IA ahora puede hacer más que buscar y analizar datos de CRM: también puede preparar tareas operativas de CRM.

- Crear, actualizar y asociar contactos, empresas, negocios y tickets
- Registrar notas, tareas, llamadas y reuniones
- Recuperar bajo demanda detalles de registros, campos disponibles e historial de actividad
- Revisar cada acción de escritura en un paso de confirmación claro antes de ejecutarla

La sincronización también es más resiliente: los problemas de conexión temporales ya no provocan que se eliminen registros existentes de forma incorrecta. Gracias a **Mirko** por la amplia expansión de nuestras capacidades de Connectors.

### Connectors nuevos y ampliados
OneAI se conecta a más sistemas empresariales y puede completar más tareas directamente dentro de las herramientas que ya utilizas.

- **Nuevo: Plytix** – Haz preguntas sobre tu catálogo de productos, atributos, variantes e imágenes directamente desde tu sistema PIM.
- **weclapp** – Más acciones de lectura y escritura, incluida una sincronización más resiliente y descargas de PDF de facturas.
- **ClickUp** – Crea y actualiza tareas, gestiona etiquetas y listas de verificación, con confirmación obligatoria para los cambios.
- **Fireflies** – Busca en transcripciones de reuniones, cambia el nombre de reuniones, detén el notetaker y realiza acciones adicionales.
- **n8n** – Prueba nodos de workflow antes de usarlos y reanuda workflows en espera directamente desde el Chat.
- **GitHub, ClickUp, weclapp y lexoffice** – El acceso ampliado a la API ya está disponible cuando está autorizado.

## Mejoras

- **Interacciones más claras en el Chat:** Cuando AI Chat necesita más información, ahora presenta tarjetas de opciones en las que se puede hacer clic en lugar de preguntas solo de texto.
- **Iniciar sesión con Apple:** Apple ya está disponible como opción de inicio de sesión junto con Google y Microsoft.
- **Nuevos modelos de IA:** Gemini 3.8 Flash, Gemini 3.7 Flash y Grok 4.6 ya están disponibles. Gemini 3.7 Flash es ahora el modelo predeterminado de Uno para organizaciones de pago.
- **Presentaciones con tu identidad de marca:** Carga tu propia plantilla de PowerPoint y las presentaciones generadas usarán automáticamente el diseño de tu empresa. También puedes colocar imágenes de un Knowledge Space directamente en las diapositivas.
- **Knowledge Spaces:** Ahora los archivos se pueden renombrar directamente y el explorador de archivos es más fácil de usar en dispositivos móviles.
- **Selección de SharePoint:** Al conectar mediante OneDrive, ahora se muestran de forma fiable todos los sitios de SharePoint disponibles, incluso en grandes entornos de Microsoft.
- **Conexiones de Outlook:** Las conexiones interrumpidas se detectan de inmediato y se pueden reparar o desconectar directamente.
- **Entrada de voz:** La grabación ahora funciona de forma fiable en Safari, en iPhone y iPad, y en Firefox, incluso para grabaciones largas.
- **PDF escaneados:** La vista previa de PDF escaneados ahora es precisa, más nítida y más estable.
- **Límites de equipo:** Ahora se pueden gestionar límites de uso individuales para equipos con más de diez miembros. OneAI también avisa a los administradores cuando el límite de un miembro supera el presupuesto de la organización.

## Seguridad

- **Formularios de Canvas protegidos:** Los formularios públicos solo pueden actualizar los campos explícitamente destinados a ellos. Los campos de datos internos permanecen protegidos.
- **Credenciales de Connectors seguras:** Las credenciales de HubSpot y ClickUp ahora se almacenan cifradas.
- **Automatización de n8n más segura:** La corrección automática de errores ya no puede redirigir solicitudes silenciosamente a otro host.
- **Protección de permisos en Uno:** Los empleados que no son administradores ya no pueden usar Uno para identificar a los administradores de la organización.

## Correcciones de errores

- Las tarjetas de confirmación de acciones del Chat ya no permanecen invisibles ni pendientes de forma permanente. Ahora puedes ver de forma fiable si una acción se completó, se rechazó o falló.
- Las apps de Canvas con varios archivos ahora funcionan correctamente mediante enlaces públicos para compartir y dominios personalizados.
- Las apps de Canvas sin vinculaciones de datos ahora también se pueden compartir públicamente.
- Algunas direcciones de correo electrónico inusuales ya no provocan errores en las apps de Canvas compartidas.
- Las respuestas interrumpidas de Gemini ya no se informan de forma engañosa como respuestas vacías del modelo.
- Los archivos de GitLab ya no muestran incorrectamente un tamaño de «0 bytes».
- La configuración de modelos de IA ahora se guarda de forma fiable, incluso al cambiarla rápidamente.

## Bajo el capó

Hemos ampliado la base para futuros agentes de IA programados con workflows de aprobación. Esta capacidad sigue en pruebas internas y todavía no está habilitada para clientes.

Gracias a **Pascal, Mirko, Justus, Santi, Obaid y Oliver** por sus contribuciones a esta release.

*139 pull requests, 141 commits y 1.183 archivos modificados.*

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

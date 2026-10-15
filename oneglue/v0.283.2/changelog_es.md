# OneGlue v0.283.2 — Novedades

**Publicado el:** 2026-10-15

**Invite a nuevos clientes a dar los primeros pasos: el cliente responde a unas preguntas sencillas y su organización en OneGlue se completa sola.**

## Invitar a clientes a los primeros pasos

- **Una invitación en lugar de largas llamadas.** En la página de una organización —o directamente al crearla— elija «Invitar al cliente a los primeros pasos». El cliente recibe un correo con un enlace a unas preguntas sencillas en su idioma (alemán, inglés, español o francés). Se tarda unos diez minutos.
- **Guiado paso a paso:** dirección, otras ubicaciones, contacto de TI, dirección de facturación, equipos, documentación y los servicios y proveedores que utiliza. Al final, el cliente ve un resumen y lo envía todo.
- **Los datos llegan donde los necesita:** como ubicaciones, contactos, equipos y documentos en la organización del cliente, marcados como datos del cliente para que sepa qué conviene revisar.
- **Datos de acceso solo si el cliente quiere.** Al final puede introducir datos de acceso de forma voluntaria. Se guardan cifrados y el propio cliente ya no puede volver a verlos.
- **Usted mantiene la visión general:** en la organización ve si el cliente está invitado, lo está rellenando o ya lo ha enviado. Puede enviar una nueva invitación o finalizar los primeros pasos en cualquier momento. Al invitar, usted fija un mensaje personal y el plazo (de 1 a 90 días).
- **Acceso propio, si lo desea:** al final el cliente puede recibir un acceso permanente con passkey, solo si usted lo ofreció al invitarle y solo para su propia organización. Pueden ofrecer este acceso los administradores del tenant y de la organización.
- **Nuevo permiso de invitación:** también los compañeros sin rol de administrador pueden invitar a clientes a los primeros pasos.

## Más protección para sus datos

- **Las contraseñas bloqueadas siguen bloqueadas.** Solo los administradores del tenant y las personas a las que se ha confiado expresamente esa entrada pueden cambiar sus permisos o desbloquearla. Al bloquear se eliminan los permisos generales por rol, y las contraseñas bloqueadas ya no pueden usarse a través de accesos compartidos.
- **Los archivos subidos están mejor protegidos.** Cada archivo se guarda primero, se revisa y solo después se libera; a partir de entonces no puede sustituirse sin que se note. Las claves privadas en formato PEM que se suben junto con certificados SSL se detectan y se guardan cifradas.

## Errores corregidos

- Subir archivos podía provocar una breve interrupción. Ya está corregido.
- Las imágenes vuelven a poder insertarse en documentos, y la configuración de inicio de sesión único de una organización vuelve a poder guardarse.
- Los intentos de inicio de sesión fallidos ahora se notifican con claridad y quedan registrados.

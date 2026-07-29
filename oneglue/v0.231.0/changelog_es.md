# OneGlue v0.231.0 — Novedades

**Fecha de lanzamiento:** 2026-07-29

**Conexiones de navegador más seguras para Passkey-Safe.** Esta versión refuerza el paso en el que conecta un navegador para iniciar sesión con un passkey almacenado: el código de confirmación es más difícil de adivinar, las solicitudes de conexión sin terminar se limpian automáticamente y se añade una capa de protección adicional en el borde. Todo lo demás sobre sus passkeys permanece exactamente igual.

## Conexión de navegador reforzada

- **El código de confirmación ahora está protegido** — un intento de conexión que introduce repetidamente el código incorrecto se detiene, de modo que nadie pueda probar códigos hasta vincular un navegador que usted no autorizó.
- **Las solicitudes de conexión sin terminar caducan solas** — una solicitud de conexión que inició pero nunca completó ya no permanece activa; se limpia automáticamente.
- **Una capa adicional en el borde** — el paso de conexión ahora tiene límite de frecuencia antes incluso de llegar a la aplicación, frenando el abuso automatizado.

## Nada más cambia para usted

- Sus passkeys almacenados, permisos, uso compartido y registro de auditoría permanecen intactos. Esta es una versión de refuerzo de seguridad para el flujo de conexión de navegador introducido en la versión anterior.

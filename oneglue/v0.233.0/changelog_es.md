# OneGlue v0.233.0 — Novedades

**Fecha de lanzamiento:** 2026-07-29

**Un hogar para sus códigos de recuperación.** OneGlue ahora puede almacenar y gestionar los códigos de recuperación / respaldo de un solo uso que le entrega un servicio — justo al lado de la contraseña y el autenticador de ese servicio, como un método gestionado en el secreto.

## Códigos de recuperación como método MFA gestionado

- **Genere y almacene un conjunto de códigos de un solo uso** para un inicio de sesión — mostrados una única vez al crearlos, con copiar + descarga en PDF, y luego cifrados en reposo como cualquier otro secreto.
- **Revélelos cuando necesite uno** — bajo los mismos permisos y aprobaciones que protegen el propio secreto, con cada revelación registrada en el registro de auditoría.
- **Marque un código como usado** para llevar la cuenta, vea restantes-de-total de un vistazo y regenere un conjunto nuevo cuando queden pocos (el conjunto anterior deja de funcionar, con un aviso claro).

## Hosts gestionados por agente: el estado del worker vuelve a la página

- Para un host gestionado por un GlueAgent, la página de configuración vuelve a mostrar una vista de solo lectura del estado worker / `.glue`, los datos del host y las ejecuciones de automatización más recientes — justo donde lo espera, sin tener que buscar.

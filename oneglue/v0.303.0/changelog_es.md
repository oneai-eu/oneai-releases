# OneGlue v0.303.0 — Novedades

**Publicado el:** 2026-11-05

**Las personas externas con roles de organización ahora ven y revelan lo que su rol permite, y quien pierde su Passkey tiene un camino de vuelta.**

> Importante: los lectores de organización, los editores de organización y los lectores de tenant pueden, a partir de ahora, revelar todas las contraseñas con acceso estándar de su(s) organización(es). Las entradas que solo deban ver determinadas personas, por favor, póngalas en «restringido» («Revelación por defecto → Restringido»).

- **Personas externas con roles de organización.** Ahora ven y revelan lo que su rol permite. Las entradas importadas se comportan como las creadas en OneGlue.
- **Un camino de vuelta tras perder el Passkey, para todas las cuentas de un tenant.** Recibe por correo un enlace para registrar un nuevo Passkey. En las cuentas de un tenant, los códigos de recuperación por sí solos ya no crean un Passkey.
- **Las invitaciones siempre coinciden con el acceso actual.** Si un administrador cambia el rol o bloquea la cuenta antes de que se canjee la invitación, esta queda anulada.
- **Advertencia clara antes de roles de gran alcance.** Antes de conceder un rol para todo el tenant, OneGlue muestra con cifras lo que hace el rol. Las direcciones ajenas a sus propios dominios requieren además una confirmación aparte.
- **Reactivar y volver a invitar funciona de nuevo.** También para cuentas y pertenencias con fecha de fin. Las cuentas caducadas ven un aviso claro.
- **El acceso termina cuando termina el acceso.** Las sesiones remotas abiertas terminan como máximo alrededor de un minuto después de retirar el acceso. En el navegador, el cambio se aplica a partir de la siguiente acción.
- **Los roles de tenant se asignan en OneGlue, no mediante grupos de Microsoft Entra.** La sincronización de grupos sigue funcionando para los demás grupos.
- **Inicio de sesión solo con Microsoft.** Cuando una acción requiere un inicio de sesión reciente, quien inicia sesión únicamente con Microsoft puede volver a iniciar sesión con Microsoft para ello.
- **Textos corregidos.** Los textos sobre quién puede ver y revelar qué se han corregido en toda la aplicación.
- **Seguridad de la plataforma reforzada.** Mejor gestión de claves, avisos cuando se añade un Passkey desde un código de recuperación, y ya no se puede eliminar el último Passkey de un administrador de plataforma.

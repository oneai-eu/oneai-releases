# OneGlue v0.303.0 — Novedades

**Publicado el:** 2026-11-05

**Las personas externas con roles de organización ahora ven y revelan lo que su rol permite, y quien pierde su Passkey tiene un camino de vuelta.**

> Importante: los lectores de organización, los editores de organización y los lectores de tenant pueden, a partir de ahora, revelar todas las contraseñas con acceso estándar de su(s) organización(es). Las entradas que solo deban ver determinadas personas, por favor, póngalas en «restringido» («Revelación por defecto → Restringido»).

- **Personas externas con roles de organización.** Ahora ven y revelan lo que su rol permite. Las entradas importadas se comportan como las creadas en OneGlue.
- **Un camino de vuelta tras perder el Passkey, para todos.** Recibe por correo un enlace para registrar un nuevo Passkey. Los códigos de recuperación por sí solos ya no crean un Passkey.
- **Las invitaciones siempre coinciden con el acceso actual.** Si un administrador cambia el rol o bloquea la cuenta antes de que se canjee la invitación, esta queda anulada.
- **Advertencia clara antes de roles de gran alcance.** Antes de conceder un rol para todo el tenant, verá una advertencia con cifras y confirmará una vez más, sobre todo para direcciones ajenas a sus propios dominios.
- **Reactivar y volver a invitar funciona de nuevo.** También para cuentas y pertenencias con fecha de fin. Las cuentas caducadas ven un aviso claro.
- **El acceso termina cuando termina el acceso.** Las sesiones abiertas y las sesiones remotas se cierran en aproximadamente un minuto.
- **Los roles de tenant se asignan en OneGlue, no mediante grupos de Microsoft Entra.** La sincronización de grupos sigue funcionando para los demás grupos.
- **Inicio de sesión solo con Microsoft.** Quien inicia sesión únicamente con Microsoft puede confirmar acciones sensibles iniciando sesión de nuevo con Microsoft.
- **Textos corregidos.** Los textos sobre quién puede ver y revelar qué se han corregido en toda la aplicación.
- **Seguridad de la plataforma reforzada.** Mejor gestión de claves, avisos cuando se añade un Passkey desde un código de recuperación, y ya no se puede eliminar el último Passkey de un administrador de plataforma.

# OneGlue v0.304.0 — Novedades

**Publicado el:** 2026-11-07

**El inicio de sesión con Microsoft es más seguro, Microsoft Entra solo sincroniza usuarios y grupos, y las entradas restringidas de ITGlue siguen restringidas al importar.**

- **Inicio de sesión con Microsoft más seguro.** Cuando una acción exige un inicio de sesión reciente, a quienes inician sesión con Microsoft se les pide que vuelvan a iniciar sesión con Microsoft (en los últimos 5 minutos). Las sesiones iniciadas con Microsoft terminan como máximo a las 24 horas.
- **Microsoft Entra solo sincroniza usuarios y grupos.** Entra nunca asigna roles, ni en todo el tenant ni en una organización. Solo rellena grupos propios sin permisos de todo el tenant. Los roles se asignan en OneGlue.
- **Invitación masiva desde un grupo de Entra.** El rol lo elige usted mismo en el cuadro de diálogo; "sin rol" es posible. OneGlue ya no deduce un rol a partir del grupo.
- **Vinculación automática con Microsoft solo con un dominio permitido.** Al iniciar sesión con Microsoft, una cuenta existente solo se vincula automáticamente por su dirección de correo si la dirección está verificada y pertenece a un dominio permitido. Las cuentas ya vinculadas, la vinculación desde el propio perfil y los enlaces de invitación no se ven afectados.
- **Las entradas restringidas de ITGlue siguen restringidas.** Al importar, las entradas marcadas como "restringidas" en ITGlue siguen restringidas en OneGlue, junto con las contraseñas y claves que les pertenecen (claves SSL, claves Wi-Fi). Si una exportación no tiene la columna "restringido", la importación se detiene en lugar de hacerlo todo visible.
- **Invitaciones y avisos más claros.** Las invitaciones caducadas muestran un mensaje claro. Los administradores del tenant reciben un aviso cuando una persona externa envía una invitación. Los administradores de organización ajenos a sus dominios se evalúan según los dominios de su tenant.
- **Seguridad de la plataforma reforzada.** Los administradores de la plataforma registran un nuevo Passkey tras una recuperación solo mediante un enlace enviado por correo, y al cambiar de tenant se conserva el tipo del inicio de sesión actual.
- **Textos corregidos.** Los avisos y mensajes de error en la invitación, la recuperación y el inicio de sesión dicen ahora lo que OneGlue hace realmente.

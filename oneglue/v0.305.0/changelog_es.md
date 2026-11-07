# OneGlue v0.305.0 — Novedades

**Publicado el:** 2026-11-07

**Si su Tenant exige dos Passkeys, una cuenta bloqueada configura ahora su segundo Passkey justo después de iniciar sesión.**

- **Página obligatoria para el segundo Passkey.** Una cuenta bloqueada porque le falta el segundo Passkey inicia sesión con su Passkey como siempre y llega a una página propia. Allí solo puede añadir un Passkey, ver sus Passkeys y cerrar sesión. Hasta ahora, una cuenta así quedaba bloqueada por completo hasta registrar un nuevo Passkey mediante el enlace de reinscripción.
- **La cuenta vuelve a funcionar automáticamente.** En cuanto se añade el segundo Passkey, la cuenta vuelve a estar activa sin que un administrador tenga que intervenir. El registro de auditoría lo deja registrado.
- **Ningún otro acceso antes.** Hasta que exista el segundo Passkey, OneGlue rechaza cualquier otra solicitud de esta cuenta, también mediante claves de API y MCP. El inicio de sesión con un código de recuperación sigue rechazado para las cuentas bloqueadas.
- **Sin Passkey.** Quien ya no tenga ningún Passkey solicita, como hasta ahora, el enlace de reinscripción en la página de códigos de recuperación.

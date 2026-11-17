# OneGlue v0.312.0 — Novedades

**Publicado el:** 2026-11-17

**Más seguridad en el inicio de sesión y el acceso**

- Cuando retiras el acceso a alguien, sus sesiones remotas en curso (SSH, RDP, VNC, SCVMM) y las ejecuciones del asistente terminan en un minuto.
- La confirmación adicional del inicio de sesión SSO (step-up) inicia una sesión nueva para el navegador que la completa y cierra la anterior.
- Al generar nuevos códigos de recuperación, se cierran las sesiones abiertas con los códigos antiguos.
- Al sincronizar con Microsoft Entra ID se conserva al último administrador del tenant.

**Otras mejoras**

- Las imágenes recién subidas en el editor se ven de inmediato.
- El asistente usa «oneAI Standard» de forma predeterminada.
- Si el envío de correo está desactivado, las respuestas indican con claridad si se envió un correo.

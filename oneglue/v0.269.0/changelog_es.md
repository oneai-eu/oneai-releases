# OneGlue v0.269.0 — Novedades

**Fecha de lanzamiento:** 31-08-2026

**Vea exactamente qué hizo un usuario —hasta qué contraseñas vio— en segundos, no en horas.**

## Informe de acceso para cada usuario

- **Abra el informe de acceso de cualquier usuario** desde Configuración → Usuarios —también funciona con usuarios deshabilitados o que ya no están— y vea en segundos: qué contraseñas reveló, con nombres, organizaciones y cuántas veces, como una lista de rotación lista para usar que puede marcar con un clic; qué páginas y organizaciones consultó; cada intento de acceso que fue denegado; y su historial de sesiones de inicio de sesión, dispositivos y cambios de rol a lo largo del tiempo.
- Exporte el informe como JSON o CSV, listo para adjuntar a una lista de verificación de offboarding o a un informe de incidente.
- Esta es la herramienta a la que recurrir en el momento en que alguien deja la empresa o cuando necesita investigar una posible brecha de seguridad: en lugar de reconstruir el registro de auditoría a mano, obtiene una respuesta directa a "¿a qué tenía acceso esta persona y qué debo cambiar ahora?".

## Registro de auditoría más claro

- Las entradas del registro de auditoría ahora muestran quién realizó la acción, por nombre —ya no hay que adivinar a partir de un fragmento de un ID.
- El filtro "filtrar por usuario" ahora también encuentra usuarios deshabilitados y que ya no están, para que pueda rastrear lo que hizo alguien incluso después de haberse marchado.
- Las exportaciones CSV del registro de auditoría ahora incluyen los nombres de los elementos afectados, no solo sus ID, y respetan correctamente los filtros que tenía configurados en pantalla.

## Aviso al conceder acceso amplio

- Si asciende a alguien con una dirección de correo externa a un rol de alcance de todo el tenant, ahora todos los administradores del tenant reciben un correo al respecto —para que un ascenso inesperado o no autorizado no pase desapercibido.

## Correcciones menores

- Varias mejoras de fiabilidad y seguridad internas.

# OneGlue v0.166.0 — Novedades

**Fecha de publicación:** 2026-07-05

Dos correcciones largamente esperadas y una nueva función de comodidad.

## Sesiones remotas: los clics vuelven a funcionar

En las sesiones de RDP y VNC, los clics del ratón aterrizaban en el lugar equivocado — hacia la esquina superior izquierda de la pantalla en vez del punto donde se hacía clic. Esto dejaba menús y botones poco fiables o completamente inutilizables en sesiones con escala ajustada. La causa raíz está corregida y los clics se comportan como se espera.

## Los enlaces compartidos sobreviven al inicio de sesión

Cuando alguien le envía un enlace de OneGlue — a un dispositivo, un documento, una entrada de red u otro elemento — abrirlo mientras no ha iniciado sesión ya no le lleva al panel de control tras el login. Llegará directamente al elemento al que apuntaba el enlace. Esto funciona con inicio de sesión por Passkey, por correo electrónico y por SSO.

## Nuevo: botón "Copiar enlace" en cada página de detalle

Cada página de detalle (dispositivos, credenciales, documentos, redes, dominios, certificados SSL, registros de activos flexibles, ubicaciones, contactos) tiene ahora un botón "Copiar enlace". Con un solo clic, la URL canónica correcta queda en el portapapeles — el tipo de enlace que funciona de forma fiable al compartirlo, sin confusiones de sesión o dominio.

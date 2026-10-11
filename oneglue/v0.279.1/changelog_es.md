# OneGlue v0.279.1 — Novedades

**Publicado el:** 2026-10-11

**Vea exactamente qué está concediendo al invitar a alguien, y los selectores siguen ahora la organización en la que trabaja.**

## Al invitar y al cambiar roles se ve el alcance

- **Los roles que abarcan todo el tenant lo indican en todas partes.** Tanto si invita a alguien, cambia un rol o trabaja en el área de superadministración, cada rol de ámbito de tenant indica ahora que se aplica a **todas** las organizaciones, y en la pantalla de invitación verá cuántas son exactamente. Hasta ahora esta información aparecía en un solo lugar; ahora aparece en todos.
- **Una confirmación breve antes de que surta efecto.** La primera vez que concede a alguien un rol de ámbito de tenant, OneGlue resume quién lo recibe y qué incluye. Un clic adelante y queda concedido; un clic atrás y no ha pasado nada. Si en realidad solo quería dar acceso a una organización, la vía para hacerlo está justo al lado.

## Los selectores y resúmenes de acceso siguen su organización

- **Los selectores de personas, los resúmenes de permisos y las listas de recursos compartidos muestran lo que pertenece a su organización.** Cuando trabaja dentro de una organización, ve las personas y las concesiones de esa organización, no las de todas las demás. Las listas se acortan, la búsqueda es más rápida y la elección es inequívoca. Sus propios accesos siguen siendo visibles en todo momento, y los administradores de tenant conservan la visión completa.
- **Los prefijos de nomenclatura y los detalles de grupo se suman.** Estas vistas también siguen ahora la organización en la que se encuentra.

## Una comprobación antes de cada publicación

- **A partir de ahora, cada versión nueva debe demostrar que los límites entre organizaciones se mantienen.** OneGlue ejecuta una comprobación específica antes de cada despliegue. Una versión que no la supera no se publica, ni en el entorno de pruebas ni en producción. Esa garantía no cubre solo la versión de hoy, sino todas las actualizaciones futuras.

## Pequeña mejora

- La descripción del rol **Administrador de organización** indica ahora con claridad que el rol puede ver de forma predeterminada las contraseñas guardadas en esa organización, salvo que una contraseña concreta se haya restringido de forma individual.

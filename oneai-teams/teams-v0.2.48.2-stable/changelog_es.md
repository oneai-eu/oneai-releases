# OneAI teams-v0.2.48.2-stable — Refuerzo de seguridad y monitorización

**Release Date:** 2026-08-11

## Seguridad

Hemos corregido una vulnerabilidad de seguridad que, en determinadas circunstancias, podía hacer accesible un endpoint de monitorización mediante variantes de mayúsculas y minúsculas. La protección de acceso ahora se aplica de forma coherente.

También hemos reforzado varias medidas de protección en nuestros servicios operativos:

- La información sensible en los mensajes de apagado se redacta de forma más fiable.
- Se ha estandarizado la validación de las claves de cifrado al inicio.
- Los valores de ruta muy largos ya no pueden alterar la salida de los logs.

## Mejoras

- Las advertencias del sistema a nivel de servidor ahora son visibles de forma fiable en la monitorización, lo que ayuda a los equipos de operaciones a identificar problemas y responder antes.
- Los datos de error en el panel de monitorización ahora están organizados con mayor claridad.

## Bajo el capó

- Las comprobaciones automatizadas posteriores al despliegue vuelven a funcionar de forma fiable.
- Se han actualizado la documentación de release y la información de versión.

Gracias a **Mirko** por implementar estas mejoras de seguridad y operaciones.

_13 commits · 32 archivos modificados_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

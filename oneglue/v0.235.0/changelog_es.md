# OneGlue v0.235.0 — Novedades

**Fecha de lanzamiento:** 2026-07-31

**Sus secretos almacenados están protegidos contra sobrescrituras accidentales.** Al editar una contraseña —o cualquier secreto almacenado—, el campo de valor ahora solo se muestra cuando usted elige explícitamente cambiarlo, de modo que el gestor de contraseñas de su navegador ya no puede autocompletar y sobrescribir silenciosamente el valor que ya tiene guardado.

## Editar un secreto ahora es a prueba de sobrescrituras

- **El valor permanece oculto hasta que realmente quiera cambiarlo** — abra un secreto para editarlo y el campo de contraseña/valor muestra una acción «Cambiar valor» en lugar de una casilla vacía. Renombre, reclasifique o ajuste permisos sin ningún riesgo de tocar el valor almacenado.
- **El autocompletado del navegador no puede pisarlo** — el campo no está en la página hasta que hace clic para cambiarlo, así que un gestor de contraseñas que autocompleta no tiene nada que sobrescribir.
- **Rotar sigue siendo un paso** — elija «Cambiar valor», escriba o genere el nuevo secreto y guarde como siempre.
- **Para ver el valor actual, use Revelar** en la página de detalle del secreto (la revelación autorizada y registrada en auditoría) — el mostrar/ocultar del formulario de edición solo refleja lo que está escribiendo.

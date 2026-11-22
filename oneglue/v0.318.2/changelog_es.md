# OneGlue v0.318.2 — Novedades

**Publicado el:** 2026-11-22

**Documentos con mejor aspecto**

- Los documentos muestran ahora diagramas Mermaid (de flujo, de secuencia, de estados, ER, de Gantt y otros) directamente en la vista de lectura, en modo claro y oscuro. Un clic en un diagrama abre una vista ampliada con zoom. Un diagrama con errores muestra el mensaje de error y su código fuente en lugar de un espacio vacío.
- Los bloques de código y de scripts (PowerShell, C#, Python, Bash, SQL, JSON, YAML y otros) aparecen resaltados. Cada bloque indica su lenguaje y tiene un botón para copiar. El editor también resalta ahora el código.
- Los títulos dividen el documento en capítulos claros, y `---` dibuja una línea divisoria visible. A partir de tres capítulos, a la derecha aparece un índice que acompaña su lectura. Cada título tiene un enlace que usted puede copiar y compartir.
- `> [!NOTE]`, `[!TIP]`, `[!IMPORTANT]`, `[!WARNING]` y `[!CAUTION]` se muestran como recuadros de color, las tablas se leen mejor e «Imprimir → Guardar como PDF» genera un documento limpio, sin navegación.
- oneAI conoce este formato y lo utiliza cuando crea o modifica documentos para usted.
- En el cuadro de diálogo para revelar un documento sensible, el código copiado se borra del portapapeles a los 30 segundos.

**Invitar a clientes**

- Cuando usted invita a un cliente con una cuenta permanente, el cuadro de diálogo muestra cuántas contraseñas pueden revelar los miembros de esa organización, con la lista. Puede restringir cada entrada allí mismo.
- Si su cliente no completa el asistente de invitación, OneGlue borra los datos introducidos 30 días después de que caduque la invitación. La página de bienvenida se lo indica antes de empezar.
- El mismo nombre de dominio y el mismo certificado pueden gestionarse ahora en varias organizaciones. Solo se rechaza un duplicado dentro de una misma organización.

**Dominios y subida de archivos**

- El DNS en vivo y la sincronización con el registrador usan el acceso al registrador de su Tenant solo para los dominios que un administrador del Tenant haya vinculado a él.
- Un archivo que el antivirus no puede analizar por completo, por ejemplo un archivo comprimido con demasiados niveles de anidación, se rechaza. El mensaje indica el límite. Un archivo solo se guarda como limpio tras un análisis completo.

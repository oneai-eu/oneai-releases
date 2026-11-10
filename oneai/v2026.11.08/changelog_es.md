# OneAI v2026.11.08 — Spaces más rápidos, edición de agentes en el chat, papelera

**Release Date:** 2026-11-09

## Novedades

- **Los Spaces grandes se abren mucho más rápido.** Las carpetas ahora se cargan por páginas.
- **Buscar y editar agentes en el chat.** Ya no necesita crear un agente nuevo para cada cambio.
- **Papelera para archivos eliminados.** Puede restaurar los archivos eliminados durante 30 días. Después se eliminan definitivamente.
- **Tiempo ahorrado estimado.** Pase el ratón sobre el importe en € debajo de una respuesta nueva. El valor es una regla aproximada, no una medición.
- **Pestaña Hoja de ruta en What's New.** La pestaña ya está disponible, pero todavía vacía. Las entradas llegarán más adelante.

## ⚠️ Qué cambia para usted

Compruebe estos puntos si utiliza estas funciones:

- **Agentes con Spaces o conexiones definidos:** si el usuario no tiene acceso a alguno de ellos, el agente ya no continúa con menos permisos, sino que se rechaza. Las ejecuciones programadas fallan y su activador se pausa. Conceda el acceso o ajuste el agente.
- **Agentes sin supervisión:** ahora se detienen antes de las acciones irreversibles y antes de las herramientas MCP sin anotación, hasta que se permita en la organización y en el agente.
- **Confirmaciones:** las acciones irreversibles ahora muestran siempre una tarjeta de confirmación, incluso con una ventana de confianza abierta.
- **Datasets:** los modelos ahora escriben SQL. Las herramientas anteriores como `insert_data`, `update_data` y `delete_data` ya no existen, y los agentes guardados las pierden sin aviso. Compruebe los agentes que escriben en datasets. Editar filas, crear tablas e importar CSV siguen funcionando. Las columnas ya no se pueden cambiar en la pantalla de datasets, solo en el chat: el modelo realiza el cambio y usted lo confirma.
- **Aplicaciones Canvas y paneles con datasets:** los hemos migrado a la nueva base de datos. Si una aplicación deja de guardar o una consulta falla, póngase en contacto con nosotros.
- **oneAI Standard:** hemos cambiado el modelo oneAI Standard a DeepSeek V4.1, alojado en Alemania.
- **Bot de Teams:** la conexión ahora requiere que el inicio de sesión de Microsoft esté activado para usted.

## Gracias

A Pascal, Justus, Obaid, Mirko, Oliver y Santi.

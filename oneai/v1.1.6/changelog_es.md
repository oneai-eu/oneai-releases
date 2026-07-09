# OneAI v1.1.6 — Presentaciones alineadas con tu marca y chats mucho más resilientes

**Release Date:** 2026-07-08

## Highlights

**Las presentaciones ahora reflejan tu marca desde el primer momento.** Los decks generados pueden adoptar automáticamente tus colores corporativos, utilizando el color principal de tu CI junto con un acento secundario extraído de tu logotipo. Así, las presentaciones generadas por IA están mucho más listas para uso interno y de cara al cliente. Gracias a Pascal, las presentaciones en OneAI ahora se sienten mucho más pulidas.

**Ahora puedes editar las diapositivas directamente en el visor del deck.** Reordena, duplica o elimina diapositivas con drag and drop — sin regenerar el deck ni volver a pedirle nada a la IA. Esto convierte las presentaciones generadas en una base de trabajo que los equipos pueden refinar mucho más rápido.

**Los diseños pueden cambiarse después de la generación.** Puedes alternar en cualquier momento entre Light, Dark, Corporate, Editorial y Slate sin tener que recrear la presentación.

**Los resultados de Python en AI Chat ahora permiten la descarga completa de archivos.** Además de imágenes, OneAI ahora entrega archivos Excel, PDF, Word, CSV y otros archivos generados directamente en el chat con su nombre original. Gracias a Mirko, los análisis e informes son mucho más fáciles de integrar en flujos de trabajo reales.

**Las conversaciones largas ahora son mucho más fiables.** Cuando los chats o los contenidos pegados se vuelven muy grandes, OneAI recorta automáticamente el contexto más antiguo en lugar de fallar con un error de “conversation too large”. Los resúmenes generados también se incorporan correctamente a la siguiente llamada del modelo. Gracias a Pascal, las sesiones largas de trabajo en AI Chat ahora son mucho más estables.

## Improvements

- **Los mensajes antiguos en chats largos vuelven a cargarse correctamente** al desplazarse hacia arriba. Thanks to Oliver.
- **Los chats basados en GPT ya no fallan a mitad de turno** cuando el modelo escribe texto antes de llamar a una herramienta. Thanks to Santi.
- **Las exportaciones en PDF son más completas**, incluyendo diagramas Mermaid renderizados y código con resaltado de sintaxis.
- **HubSpot ahora puede conectarse de forma fiable desde el Space wizard**, sin quedarse bloqueado en una página en blanco.
- **La sincronización de Knowledge Spaces es más resiliente**, incluso cuando el backend de almacenamiento tiene problemas temporales de conectividad.
- **La sincronización con Outlook gestiona mejor payloads inusuales de Microsoft**, evitando bucles de error.
- **El procesamiento del conector de GitHub es más eficiente**, ayudando a que repositorios grandes se mantengan dentro de los límites de la API y se procesen de forma más fiable.
- **Los PDFs ahora se procesan de forma consistente con Vision**, mejorando los resultados en diseños complejos, gráficos y documentos con contenido mixto. Thanks to Justus.
- **Las descripciones de imágenes y diagramas en documentos procesados son más útiles**, mejorando la calidad de los resultados en Knowledge Spaces. Thanks to Justus.
- **La información sobre incidentes ahora aparece directamente en el producto**, facilitando entender problemas conocidos de la plataforma de un vistazo.
- **Mayor transparencia de costes para contextos de modelo muy grandes:** el comportamiento de precios para chats especialmente largos con modelos grandes ahora se refleja con mayor claridad. Thanks to Obaid.

## Bug Fixes

- **Mensajes de error más claros cuando los proveedores de IA están sobrecargados o sujetos a rate limits**, en lugar de fallos genéricos del chat. Thanks to Oliver.
- **Las herramientas de Python y SQL basadas en Anthropic vuelven a funcionar de forma fiable**, incluso cuando no se requieren archivos de entrada.
- **Claude Opus 4.6 y Sonnet 4.6 ahora están alineados con la configuración actual de adaptive thinking**, mejorando la fiabilidad del modelo.

## Security

- **Descargas de archivos más seguras en AI Chat:** los resultados de Python que no son imágenes ahora se sirven siempre como descarga, cerrando un posible vector de ataque por renderizado inline en archivos HTML y SVG.
- **Controles de permisos más estrictos para datos estructurados en Knowledge Spaces:** el acceso de escritura al datastore de un Space ahora se aplica correctamente según los permisos de escritura del Space.

## Under the Hood

- El procesamiento de documentos se ha acelerado y reforzado significativamente en varios pasos, incluyendo una pipeline más rápida, mejor comportamiento de failover y un rendimiento de base de datos optimizado. Thanks to Justus.
- También ampliamos la observabilidad interna en el procesamiento de embeddings y PDFs para detectar cuellos de botella más rápidamente y mantener un rendimiento estable.

Gracias a Pascal, Justus, Mirko, Oliver, Santi y Obaid por esta release.

*34 commits, 109 files changed*

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

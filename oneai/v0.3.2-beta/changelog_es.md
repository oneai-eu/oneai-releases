# OneAI v0.3.2-beta — Agente de investigación, generación de imágenes e integración con Outlook

**Release Date:** 2026-03-10

Con la v0.3.2-beta, OneAI da un paso significativo hacia adelante. Esta versión introduce un nuevo **Research Agent** para análisis de múltiples pasos, **generación de imágenes con IA directamente en el chat**, un **conector de Outlook para Knowledge Spaces basados en correo electrónico** y **entrada de voz impulsada por Whisper** con una calidad de transcripción notablemente superior. Además, hemos ampliado las capacidades de cumplimiento normativo y mejorado la fiabilidad en toda la plataforma.

## Highlights

### Research Agent para análisis complejos
AI Chat ahora puede lanzar un **Research Agent** autónomo. Realiza investigaciones de múltiples pasos en tus Knowledge Spaces y — si es necesario — en la web, utiliza herramientas disponibles de forma iterativa y compila resultados estructurados.

Perfecto para análisis de mercado, estudios competitivos e investigaciones internas complejas.

Agradecimiento especial a **Justus**, quien construyó la base flexible del agente que impulsa esta funcionalidad.

### Generación de imágenes con IA en el chat
Ahora puedes pedirle a OneAI que **genere imágenes** directamente en AI Chat — ideal para presentaciones, conceptos de producto o comunicación interna.

- Imágenes mostradas directamente en el chat
- Descarga como archivos
- Guardado en un Knowledge Space
- Seguimiento transparente de costes por nivel de calidad

Gracias a **Pascal**, las imágenes generadas se integran perfectamente en tus flujos de trabajo empresariales.

### Conector de Outlook para sincronización de correos
El nuevo **conector de Outlook** te permite conectar buzones como Knowledge Spaces.

- Selección de carpetas específicas
- Sincronización automática
- Correos electrónicos consultables (asunto, remitente, contenido y adjuntos)
- Actualizaciones casi en tiempo real mediante webhooks

El conocimiento institucional contenido en el correo electrónico ahora es accesible de forma segura desde AI Chat.

### Reconocimiento de voz con Whisper
La entrada de voz en AI Chat ahora funciona con **OpenAI Whisper**, reemplazando la API basada en el navegador.

- Precisión significativamente mayor
- Sólido soporte para el idioma alemán
- Mejor reconocimiento de terminología especializada

Una mejora notable para los equipos que utilizan la voz con frecuencia.

### Nuevo editor de chat con guardado de borradores
Hemos rediseñado por completo la experiencia de entrada en el chat:

- Editor de texto enriquecido moderno y estable
- Menciones @ para Spaces y contenidos
- Guardado automático de borradores por chat

Especialmente útil para prompts largos e instrucciones complejas.

## Mejoras

### AI Personas organizacionales
Los administradores ahora pueden definir **AI Personas** con prompts de sistema y roles específicos. Las Personas pueden asignarse a proyectos para garantizar un tono, estructura o especialización coherentes en todos los equipos.

### Exportación de audit logs (CSV & JSON)
Los audit logs ahora pueden exportarse en formato **CSV o JSON**, facilitando revisiones de cumplimiento, trabajo de responsables de protección de datos y auditorías externas.

También añadimos nuevos patrones de cumplimiento predeterminados, incluyendo:

- GDPR (incluido el Artículo 9)
- Identificadores nacionales alemanes
- IBAN, números de IVA de la UE, números de teléfono europeos
- KDG (normativa alemana de protección de datos eclesiástica)
- BSI IT-Grundschutz y normas de soberanía de datos

Gracias a **Oliver** por reforzar nuestras capacidades de cumplimiento.

### Feedback en tiempo real para sincronización y procesamiento de documentos
- Progreso en vivo durante la sincronización de Spaces
- Actualizaciones de estado en tiempo real para el procesamiento de documentos
- Lógica de reintentos y manejo de errores más robusta

Resultado: **mayor transparencia y fiabilidad significativamente mejorada** para grandes volúmenes de datos.

### Seguimiento más preciso de uso y costes
- Filtro de fechas correcto en analíticas de uso
- Lógica de precios mejorada (incluidos tokens en caché)
- Seguimiento transparente de costes para generación de imágenes y transcripción

Una mejora clave para clientes Enterprise con responsabilidad presupuestaria.

## Corrección de errores

- Conexiones de chat más estables y mensajes de error más claros
- Gestión correcta de límites de tokens
- El diálogo de API keys ahora se puede cerrar correctamente
- Problemas de diseño y desplazamiento resueltos
- Múltiples mejoras de estabilidad derivadas de nuestra revisión interna BugHunt

## Under the Hood

- Caché de prompts para OpenAI y Claude que reduce latencia y costes
- Nueva infraestructura de almacenamiento blob para archivos de chat
- 36 dependencias actualizadas
- Configuración mejorada de observabilidad y monitorización

---

Gracias a **Pascal, Justus, Oliver, Orehman y Mirko** por hacer posible esta importante release.

_29 PRs · 218 archivos modificados · 6 colaboradores_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

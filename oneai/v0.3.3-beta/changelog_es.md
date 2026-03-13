# OneAI v0.3.3-beta — Google SSO, compartición segura de Artifacts y un AI Chat más robusto

**Release Date:** 2026-03-13

## Highlights

### Google Sign-In como nuevo proveedor de SSO
Además de Microsoft, OneAI ahora es compatible con **Google Single Sign-On (SSO)** — tanto para el inicio de sesión como para invitar a nuevos miembros del equipo.

- Inicia sesión con tu cuenta de Google en segundos
- Envía invitaciones basadas en Google directamente desde el diálogo de miembros
- Integración fluida con entornos de Google Workspace

Esto facilita significativamente el onboarding para organizaciones que utilizan Google.

---

### Compartir, copiar y confirmar Artifacts
Los Artifacts ahora están completamente preparados para el trabajo en equipo con un modelo de compartición claro y controlado.

**Novedades:**
- Comparte Artifacts con tu equipo o crea una **copia privada**
- Selección de Artifacts con buscador que muestra creador, última actualización y estado de compartición
- Tarjetas de confirmación y creación integradas directamente en el AI Chat

Lo más importante: cuando la IA quiere crear un Artifact, ahora requiere **confirmación explícita del usuario** antes de ejecutarlo. Sin cambios inesperados — el control permanece en tu equipo.

Muchas gracias a Pascal por implementar todo el flujo de compartición y confirmación.

---

### Mensajes de error claros en AI Chat
Los fallos silenciosos son cosa del pasado.

Si algo falla durante la generación de respuestas — como límites de contexto superados, flujos concurrentes o problemas de permisos — el AI Chat ahora muestra **mensajes de error claros y fáciles de entender directamente en la conversación**.

Esto significa:
- Mayor transparencia
- Menos confusión para los usuarios
- Resolución más rápida en el trabajo diario

---

### Buscar código fuente de GitHub en Knowledge Spaces
Los Knowledge Spaces conectados a GitHub ahora procesan **más de 60 tipos de archivos de código y configuración**, incluidos TypeScript, Python, Go, Rust, Java, C/C++, YAML, SQL, Dockerfile y Terraform.

Ahora puedes:
- Buscar y analizar código fuente
- Hacer preguntas de arquitectura en AI Chat
- Utilizar repositorios como base de conocimiento estructurada

Gracias a Mirko por ampliar significativamente nuestras capacidades de procesamiento documental para código.

---

### Búsqueda más inteligente en weclapp con embeddings narrativos
Los datos de weclapp (p. ej., clientes, pedidos, facturas) ahora se transforman en **textos narrativos ricos en contexto** antes de su procesamiento.

El resultado:
- Calidad de búsqueda notablemente mejorada
- Respuestas de IA más contextuales
- Mayor precisión en flujos de trabajo basados en RAG

## Improvements

- **Invitar a varios miembros de forma consecutiva** con un diálogo persistente y vista general de los usuarios invitados
- **Mejor feedback en el procesamiento de documentos** con indicadores de estado más claros y filtros
- **Desplazamiento más fluido en el chat** sin superposiciones visuales
- **Procesamiento más fiable de archivos Outlook MSG**
- **Los errores de entrega de correo ahora se detectan y registran** sin bloquear invitaciones
- Internacionalización completa de todos los textos de la interfaz para un soporte multilingüe coherente

## Breaking Changes

### Los Google Drive Spaces ahora son de solo lectura
Los Knowledge Spaces conectados a Google Drive ahora utilizan exclusivamente el scope `drive.readonly`.

**Qué cambia:**
- Se han eliminado las funciones de subida y eliminación para Google Drive

**Acción requerida:**
- Vuelve a vincular los Google Drive Spaces existentes
- La nueva conexión solicitará automáticamente el scope reducido de solo lectura

Este cambio reduce intencionadamente los permisos al mínimo necesario y refuerza el cumplimiento normativo.

## Under the Hood

- Arquitectura mejorada de streaming en el chat para una gestión sólida de errores
- Pipeline de embeddings optimizado para datos de código y ERP
- Estándares de calidad de código más estrictos e internacionalización coherente

---

Un gran agradecimiento a **Pascal** (Google SSO, compartición de Artifacts, robustez del chat y múltiples mejoras UX) y **Mirko** (embedding de código GitHub y optimización de weclapp) por este gran lanzamiento.

_14 PRs · 213 archivos modificados · 4.514 inserciones · 2 colaboradores_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

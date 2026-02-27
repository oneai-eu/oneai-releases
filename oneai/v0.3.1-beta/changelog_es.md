# OneAI v0.3.1-beta — Procesamiento de documentos más rápido y control total en el Chat

**Release Date:** 2026-02-27

Con la v0.3.1-beta, hemos hecho que el procesamiento de documentos en OneAI sea significativamente más rápido y flexible. Tus documentos cargados manualmente estarán disponibles antes — y si cambias de opinión, ahora puedes cancelar el procesamiento al instante.

## Highlights

### Cancelar el procesamiento de documentos — directamente en el Chat y en el área de carga
¿Subiste un documento y luego te diste cuenta de que no lo necesitas? Ahora tienes el control.

Puedes **cancelar activamente el procesamiento de documentos en curso**:

- directamente en el **área de carga** mediante un nuevo botón de Cancelar  
- directamente en el **AI Chat** al eliminar un archivo adjunto

Esto significa **sin esperas innecesarias**, sin capacidad de procesamiento bloqueada y control total sobre tus Knowledge Spaces.

Gracias a Pascal por implementar esta funcionalidad e integrarla de forma fluida en los flujos de Chat y carga.

### Tus documentos ahora se procesan con prioridad
Cuando activas manualmente el procesamiento de documentos (por ejemplo, tras subir archivos a un Knowledge Space), estos trabajos ahora se gestionan **antes que los procesos automáticos de sincronización en segundo plano**.

En la práctica, esto significa:

- Disponibilidad más rápida de nuevo contenido en AI Chat  
- Menor tiempo de espera tras cargas manuales  
- Mayor previsibilidad para documentos críticos en términos de tiempo

Los procesos automáticos de sincronización (por ejemplo, desde OneDrive o SharePoint) continúan ejecutándose de forma fiable en segundo plano — pero ya no compiten con tu trabajo inmediato.

Esta mejora también forma parte de la renovación de la lógica de nuestra embedding queue por parte de Pascal.

## Mejoras

- Priorización más inteligente en el procesamiento de documentos  
- Gestión de la embedding queue más eficiente y fiable

## Under the Hood

- Actualización importante de nuestra Agent Suite interna (v3.0), que permite un desarrollo de la plataforma más rápido y coherente — gracias a Mirko por modernizar nuestras herramientas de desarrollo.

---

Un agradecimiento especial a **Pascal** y **Mirko** por sus contribuciones a esta release.

_2 PRs · 2 commits · 19 archivos modificados · 2 contributors_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

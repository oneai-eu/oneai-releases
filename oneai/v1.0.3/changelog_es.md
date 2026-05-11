# OneAI v1.0.3 — Procesamiento de documentos fiable, incluso con el cupo completo

**Release Date:** 2026-05-11

## Highlights

### El procesamiento de documentos continúa incluso cuando se alcanza la cuota
En casos poco frecuentes, los resúmenes automáticos de fragmentos (chunks) para las vistas previas de búsqueda podían detenerse cuando una organización había consumido completamente su cuota de LLM.

Hemos mejorado este comportamiento de forma fundamental:

- **Los documentos continúan procesándose por completo**, incluso cuando se ha alcanzado la cuota regular de LLM.
- **Las vistas previas de búsqueda en Spaces permanecen completas y coherentes.**
- El uso sigue registrándose de manera transparente para la visibilidad en informes y facturación.

Para ti, esto significa que no habrá vacíos inesperados en los resultados de búsqueda ni documentos procesados parcialmente, incluso durante picos de uso.

Gracias a Justus, quien refactorizó esta parte del pipeline de embeddings para hacerla más robusta y claramente separada de la lógica de cuota orientada al usuario.

## Improvements

### Mayor observabilidad del procesamiento de documentos
Ampliamos significativamente la monitorización interna del pipeline de embeddings:

- Cada trabajo de procesamiento ahora se clasifica según su resultado (por ejemplo, éxito, rate limit, reintento, error).
- Nuevos paneles proporcionan visibilidad en tiempo real sobre la longitud de la cola y el rendimiento.

Aunque estos cambios no son directamente visibles para los usuarios finales, garantizan un **rendimiento más estable y predecible**, especialmente en entornos enterprise con altos volúmenes de documentos.

## Under the Hood

- Separación más clara entre el uso de LLM de cara al usuario y el procesamiento interno del sistema.
- Métricas adicionales y actualizaciones de paneles para respaldar la excelencia operativa.

---

Gracias a Justus por reforzar la fiabilidad y la transparencia de un componente central de OneAI.

_2 commits · 2 PRs · 3 archivos modificados_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

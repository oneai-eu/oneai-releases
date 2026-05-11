# OneAI v1.0.3 — Elaborazione dei documenti affidabile, anche a quota completa

**Release Date:** 2026-05-11

## Highlights

### L’elaborazione dei documenti continua anche quando la quota è stata raggiunta
In rari casi, i riepiloghi automatici dei chunk dei documenti per le anteprime di ricerca potevano bloccarsi quando un’organizzazione aveva completamente esaurito la propria quota LLM.

Abbiamo migliorato in modo sostanziale questo comportamento:

- **I documenti continuano a essere elaborati completamente**, anche quando la quota LLM standard è stata raggiunta.
- **Le anteprime di ricerca in Spaces rimangono complete e coerenti.**
- L’utilizzo continua a essere tracciato in modo trasparente per garantire visibilità su reporting e fatturazione.

Per voi, questo significa nessuna lacuna inattesa nei risultati di ricerca e nessun documento elaborato solo parzialmente — anche durante i picchi di utilizzo.

Un grazie a Justus, che ha refattorizzato questa parte della pipeline di embedding rendendola più robusta e chiaramente separata dalla logica di quota lato utente.

## Improvements

### Maggiore osservabilità dell’elaborazione dei documenti
Abbiamo ampliato in modo significativo il monitoraggio interno della pipeline di embedding:

- Ogni job di elaborazione è ora categorizzato in base all’esito (ad esempio: successo, rate limit, retry, errore).
- Nuove dashboard forniscono visibilità in tempo reale su lunghezza della coda e throughput.

Sebbene questi miglioramenti non siano direttamente visibili agli utenti finali, garantiscono **prestazioni più stabili e prevedibili**, soprattutto in ambienti enterprise con elevati volumi di documenti.

## Under the Hood

- Separazione più chiara tra utilizzo LLM lato utente ed elaborazione interna al sistema.
- Metriche aggiuntive e aggiornamenti delle dashboard a supporto dell’eccellenza operativa.

---

Grazie a Justus per aver rafforzato l’affidabilità e la trasparenza di un componente fondamentale di OneAI.

_2 commit · 2 PR · 3 file modificati_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

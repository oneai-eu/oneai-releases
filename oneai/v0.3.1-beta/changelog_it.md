# OneAI v0.3.1-beta — Elaborazione dei documenti più veloce e pieno controllo nella Chat

**Release Date:** 2026-02-27

Con la v0.3.1-beta abbiamo reso l’elaborazione dei documenti in OneAI significativamente più veloce e flessibile. I documenti caricati manualmente sono disponibili più rapidamente — e se cambi idea, ora puoi annullare l’elaborazione all’istante.

## Highlights

### Annullare l’elaborazione dei documenti — direttamente nella Chat e nell’area di upload
Hai caricato un documento e ti sei accorto che non ti serve più? Ora hai il pieno controllo.

Puoi **annullare attivamente un’elaborazione di documenti in corso**:

- direttamente nell’**area di upload** tramite un nuovo pulsante Annulla  
- direttamente nell’**AI Chat** quando rimuovi un file allegato

Questo significa **niente attese inutili**, nessuna capacità di elaborazione bloccata e pieno controllo sui tuoi Knowledge Spaces.

Grazie a Pascal per aver implementato questa funzionalità e averla integrata perfettamente nei flussi di Chat e upload.

### I tuoi documenti ora vengono elaborati con priorità
Quando avvii manualmente l’elaborazione dei documenti (ad esempio dopo aver caricato file in un Knowledge Space), questi processi vengono ora gestiti **prima dei processi automatici di sincronizzazione in background**.

In pratica, questo significa:

- Disponibilità più rapida dei nuovi contenuti in AI Chat  
- Tempi di attesa ridotti dopo upload manuali  
- Maggiore prevedibilità per documenti critici in termini di tempistiche

I processi di sincronizzazione automatica (ad esempio da OneDrive o SharePoint) continuano a funzionare in modo affidabile in background — ma non competono più con il tuo lavoro immediato.

Questo miglioramento fa parte anche della revisione della logica della nostra embedding queue realizzata da Pascal.

## Miglioramenti

- Prioritizzazione più intelligente nell’elaborazione dei documenti  
- Gestione della embedding queue più efficiente e affidabile

## Under the Hood

- Importante aggiornamento della nostra Agent Suite interna (v3.0), che consente uno sviluppo della piattaforma più rapido e coerente — grazie a Mirko per aver modernizzato i nostri strumenti di sviluppo.

---

Un ringraziamento speciale a **Pascal** e **Mirko** per il loro contributo a questa release.

_2 PRs · 2 commit · 19 file modificati · 2 contributor_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

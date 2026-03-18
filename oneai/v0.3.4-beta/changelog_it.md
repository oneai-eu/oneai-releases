# OneAI v0.3.4-beta — Generazione di immagini, GitHub Spaces più intelligenti e importanti upgrade UX

**Release Date:** 2026-03-18

Con v0.3.4-beta, OneAI diventa più visivo, più intelligente e sensibilmente più affidabile nell’uso quotidiano. Questa release introduce un secondo generatore di immagini, potenzia GitHub Spaces con una profonda comprensione del codice e rende il lavoro con gli artefatti molto più potente.

## Highlights

### Google Imagen 4 per la generazione di immagini
Oltre a OpenAI, ora puoi utilizzare **Google Imagen 4** direttamente in OneAI.

Disponibile in tre varianti:

- **Standard** – qualità e velocità bilanciate  
- **Fast** – ottimizzato per iterazioni rapide  
- **Ultra** – qualità massima per visual esigenti  
- Fino a **4 immagini per richiesta**

Questo offre ai team maggiore flessibilità in termini di qualità, velocità e costi — perfettamente integrato nel nostro routing LLM esistente. Grazie a **Mirko** per aver implementato l’integrazione in modo pulito nella nostra architettura.

### Analisi intelligente del codice per GitHub Spaces
GitHub Spaces ora comprendono realmente i vostri repository.

A ogni sincronizzazione, OneAI analizza automaticamente:

- Struttura del repository e delle directory  
- Distribuzione dei linguaggi di programmazione  
- Dipendenze (ad es. package.json, requirements.txt, go.mod, Cargo.toml)  
- Possibili entry point

Generiamo file di panoramica strutturati e arricchiamo i file di codice con contesto architetturale. Il risultato: **risposte più precise e consapevoli dell’architettura in AI Chat**, soprattutto per codebase di grandi dimensioni.

Anche questa funzionalità è stata realizzata da **Mirko** — un importante passo avanti per i team di ingegneria che utilizzano OneAI.

### Artefatti — completamente riprogettati
Gli artefatti sono ora un componente collaborativo di primo livello in OneAI.

Nuove funzionalità:

- **Condivisione degli artefatti** (toggle pubblico/privato)  
- **Link diretti** a singoli artefatti  
- Flusso di richiesta accesso con notifica email  
- **Ricerca, ordinamento e paginazione**  
- Tab **Artifacts** dedicata nei progetti (accanto a Chats e Files)

Gli artefatti sono ora più facili da trovare, condividere e gestire tra team.  
Un grande grazie a **Pascal** per questo completo upgrade UX.

### Personas ora a livello di chat
Le personas possono ora essere selezionate **per chat**, e non più solo per progetto.

Questo consente:

- Diverse personalità AI all’interno dello stesso progetto  
- Migliore separazione dei casi d’uso (ad es. “Strategy Advisor” vs. “Technical Reviewer”)  
- Maggiore controllo granulare sul comportamento dell’AI

I progetti esistenti mantengono automaticamente la loro persona principale come predefinita. Questa modifica strutturale è stata implementata da **Pascal**.

## Improvements

### Sincronizzazione Outlook significativamente più affidabile
L’integrazione Outlook è stata migliorata in modo sostanziale:

- **Sincronizzazione incrementale** invece di una scansione completa della inbox  
- Rinnovo automatico dei webhook scaduti  
- Refresh robusto dei token senza race conditions  

Risultato: sincronizzazione più veloce, meno errori e maggiore affidabilità in ambienti di produzione.

### Maggiore trasparenza in AI Chat
- Ogni risposta AI mostra ora un **model badge**.  
- Un **indicatore di elaborazione** visibile appare durante interazioni complesse con tool.

Questo migliora la chiarezza e garantisce un’esperienza più fluida durante operazioni prolungate.

### Streaming Anthropic più stabile
Le lunghe fasi di ragionamento (ad es. generazione complessa di artefatti) non falliscono più a causa di timeout, aumentando l’affidabilità dei workflow avanzati.

### Fondamenta UI modernizzate
Abbiamo migrato l’intera libreria di componenti da **Radix UI a Base UI**.

Per i clienti, questo significa:

- Interazioni più stabili  
- Una base tecnica modernizzata  
- Migliore manutenibilità e performance

Abbiamo inoltre risolto diversi problemi relativi a dropdown e select introdotti durante la migrazione.

## Breaking Changes

### Sistema Personas (database)
Il sistema delle personas è stato spostato dal livello progetto al livello chat.

- La tabella di giunzione `project_personas` è stata rimossa.  
- La precedente persona principale rimane come **persona predefinita**.  
- Le personas sono ora assegnate direttamente per chat.

La migrazione avviene automaticamente. Non è richiesta alcuna azione manuale.

### Modifica API: Space Files
La API Space Files ora restituisce un oggetto invece di un array piatto:

- `files` (array)  
- `totalFiles`  
- `hasNextPage` (opzionale)

Le integrazioni esterne devono accedere a `response.files` invece che alla root della risposta.

## Under the Hood

- Miglioramento del monitoraggio dell’utilizzo dei modelli (inclusa la misurazione delle dimensioni delle immagini)  
- Consolidamento dei tipi di file di codice in un modulo condiviso  
- Semplificazione del load balancing interno tramite infrastruttura  
- Preparazione interna per prossimi miglioramenti RAG

---

Una release solida focalizzata su generazione di immagini, workflow per sviluppatori e stabilità operativa.  
Grazie a **Pascal** (13 changes) e **Mirko** (3 changes) per aver guidato questa evoluzione.

_16 commit · 15 PR · 320 file modificati_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

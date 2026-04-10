# OneAI v0.4.0-beta — Comprendere audio e video, elaborazione PDF più intelligente

**Release Date:** 2026-04-10

## Highlights

### I file audio e video ora sono ricercabili
Ora puoi **caricare file audio e video direttamente in OneAI** — e utilizzarli come qualsiasi altro documento nei tuoi Knowledge Spaces.

- Supporto per MP3, WAV, M4A e altri formati
- Trascrizione automatica con timestamp
- Estrazione dell’audio lato client per i file video
- In AI Chat puoi interrogare intervalli temporali specifici di una registrazione

Call con clienti, riunioni interne, webinar — la conoscenza parlata è ora pienamente integrata nei tuoi workflow di AI aziendale.

Un grande grazie a **Pascal**, che ha implementato l’intera pipeline audio/video, inclusa la trascrizione e l’integrazione nel chat.

---

### Elaborazione PDF più intelligente con pipeline ibrida
I PDF vengono ora elaborati **più rapidamente, in modo più efficiente nei costi e con maggiore accuratezza**.

Il nuovo approccio ibrido funziona in due fasi:
1. **Estrazione diretta del testo** (veloce, senza costi LLM)
2. **Analisi selettiva delle immagini basata su AI** solo per le pagine che contengono effettivamente immagini incorporate

Per te, questo significa:
- Elaborazione più rapida di documenti di grandi dimensioni
- Riduzione dei costi AI
- Migliore gestione di PDF scansionati o ricchi di immagini

Questo aggiornamento fondamentale della nostra pipeline documentale è stato anch’esso realizzato da Pascal.

---

### Elaborazione dei documenti più veloce con embeddings batch
Invece di inviare ogni singolo blocco di testo separatamente, OneAI ora elabora gli embeddings in batch.

Questo riduce significativamente l’overhead di rete e accelera sensibilmente l’elaborazione — in particolare per Knowledge Spaces di grandi dimensioni o caricamenti massivi.

---

## Improvements

### Activity Center riprogettato con chiara visibilità degli errori
L’Activity Center è stato completamente riprogettato.

- Sincronizzazione, elaborazione documenti e distillazione unificate in un’unica scheda centrale
- Aggiornamenti di stato in tempo reale tramite WebSocket
- **Indicatori di errore chiari** quando i documenti non vengono elaborati correttamente

Vedi immediatamente se è necessaria un’azione — senza dover consultare i log.

---

### Drag & Drop unificato — incluse le cartelle
Il caricamento tramite drag & drop ora funziona in modo coerente su tutta la piattaforma:

- In AI Chat
- Nei Knowledge Spaces
- Tramite la sidebar

Le strutture delle cartelle vengono mantenute e i file non supportati sono chiaramente segnalati. Questo rende i caricamenti di grandi dimensioni molto più semplici e trasparenti.

---

### Ricerca e comportamento del chat più robusti
Diversi miglioramenti aumentano l’affidabilità nell’uso quotidiano:

- Fallback se il servizio di reranking è temporaneamente non disponibile
- Retry automatici in caso di errori di connessione transitori
- Validazione degli argomenti degli strumenti LLM per prevenire errori a runtime
- Le personas del chat ora sono prioritarie e applicate in modo più affidabile
- Il chat ora riconosce l’artefatto attivo durante la modifica

Risultato: risposte più stabili, meno interruzioni e comportamento più coerente.

---

## Bug Fixes

- Gli errori di streaming con i modelli Google sono ora gestiti correttamente
- I lock di elaborazione vengono rinnovati durante la gestione di file di grandi dimensioni (evitando duplicazioni)
- I documenti di codice vengono suddivisi correttamente entro i limiti di dimensione definiti
- I contenuti weclapp vengono memorizzati in cache per un’elaborazione più efficiente
- Varie correzioni UI (badge, dialog artefatto, rendering matematico)

Molti di questi miglioramenti aumentano l’affidabilità dietro le quinte — in particolare con dataset di grandi dimensioni.

---

## Breaking Changes

### Consolidamento delle variabili d’ambiente del Gateway
Le precedenti sei variabili d’ambiente per embeddings, vision e reranking sono state consolidate.

**Nuove variabili:**
- `ONESTACK_GW_URL`
- `ONESTACK_GW_KEY`

Aggiorna i tuoi file `.env`, `compose.yaml` e le configurazioni di deployment di conseguenza.

---

## Under the Hood

- Logica di retry unificata per chiamate API più stabili
- Timeout dedicato per il worker PDF
- Agente interno di revisione PR con regole di sicurezza e multi-tenancy (grazie a Santi)

---

Questa release è stata in gran parte guidata da **Pascal**, dal supporto audio/video e la nuova pipeline PDF fino al redesign dell’Activity Center. Grazie anche a **Santi** per aver introdotto linee guida strutturate di review.

—
21 commit · 21 PR · 90 file modificati · 2 contributor

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

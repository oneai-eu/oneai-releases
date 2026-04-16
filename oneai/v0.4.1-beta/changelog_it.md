# OneAI v0.4.1-beta — Nuove integrazioni, generazione di immagini AI e un’esperienza AI Chat più intelligente

**Release Date:** 2026-04-16

La versione v0.4.1-beta porta miglioramenti concreti su tutta la piattaforma: un connettore ClickUp profondamente integrato, generazione di immagini AI direttamente in AI Chat, qualità delle risposte significativamente superiore per i dati weclapp e un’esperienza di chat sensibilmente più fluida.

## In evidenza

### Nuovo connettore ClickUp con sincronizzazione completa
Ora puoi collegare Spaces e Lists di ClickUp direttamente a OneAI.

- Sincronizzazione di attività, descrizioni, commenti e checklist
- Elaborazione automatica per la ricerca basata su AI nei Knowledge Spaces
- Riepiloghi a livello di lista per un contesto migliore
- Aggiornamenti quasi in tempo reale tramite webhook

ClickUp diventa così una fonte di conoscenza completamente ricercabile in AI Chat — senza esportazioni manuali.

Ottimo lavoro di **Mirko**, che ha sviluppato il connettore end-to-end.

### Generazione di immagini AI con selezione del modello e controlli amministrativi
Ora puoi generare immagini direttamente in AI Chat, con pieno controllo su:

- Modello (ad es. OpenAI o Google Imagen)
- Impostazioni di qualità
- Dimensioni dell’immagine e rapporto d’aspetto (1:1, 16:9, 9:16 e altri)

Gli amministratori possono definire centralmente quali modelli di immagini sono disponibili in tutta l’organizzazione, garantendo un utilizzo conforme alle policy interne e ai requisiti di compliance.

Un’aggiunta potente per marketing, prodotto, HR e tutti i team che creano contenuti visivi — implementata da **Mirko**.

### Chat più fluida con anteprima live degli strumenti
AI Chat ora è significativamente più reattiva e trasparente.

- Anteprima live delle chiamate agli strumenti, inclusi gli argomenti in streaming
- I passaggi di ragionamento si espandono automaticamente durante l’elaborazione e si richiudono successivamente
- Indicatori di stato in base al modello («Thinking» vs. «Processing»)
- Niente più stati di caricamento infiniti silenziosi in caso di errori API

Il risultato: maggiore chiarezza, meno sorprese e un’esperienza complessiva più professionale. Grazie a **Pascal** per il rinnovamento dello streaming — e a **Oliver** per aver risolto un problema raro ma critico nella gestione degli errori OpenAI.

### Integrazione weclapp: risposte significativamente più affidabili
Per molti clienti, weclapp è un sistema business-critical. Abbiamo completamente rivisto la logica RAG sottostante:

- Nuovi tipi di entità (ad es. partite aperte, merci in entrata)
- Rendering strutturato dei campi invece di blocchi di testo generici
- Riepiloghi migliorati
- Misure concrete anti-allucinazione

Il risultato: risposte sensibilmente più accurate e affidabili su documenti, partite aperte e transazioni.

Ottimo lavoro di **Mirko** su questo upgrade di qualità.

### Dashboard ridisegnata con grafici moderni
La dashboard è stata modernizzata sia dal punto di vista visivo che tecnico:

- Nuovi tipi di grafici (incluso un grafico a ciambella per la distribuzione dei modelli)
- Opzioni di filtro migliorate
- Presentazione dei KPI più chiara
- Migliore raggruppamento dei modelli (incluso un gruppo «Others»)

Gli amministratori hanno ora una visione più chiara dell’utilizzo, della distribuzione dei modelli e dell’attività organizzativa.

Progettata e implementata da **Pascal**.

### Dialogo riferimenti come explorer a due pannelli
Il dialogo dei riferimenti di progetto è stato completamente ripensato — simile a un file manager:

- Navigazione delle cartelle a sinistra
- Dettagli dei file a destra
- Visibilità sullo stato degli embedding e sul numero di file

Questo rende molto più intuitiva la navigazione in Knowledge Spaces di grandi dimensioni.

## Miglioramenti

- **Elaborazione documenti più veloce**: I documenti a singolo blocco saltano un passaggio LLM non necessario, migliorando l’efficienza.
- **Passkeys ora opzionali**: I nuovi utenti possono registrarsi senza configurare subito una passkey e vengono invitati a farlo dopo il login. Grazie a **Justus**.
- **Activity Hub ottimizzato**: Meno richieste in background non necessarie e maggiore chiarezza sulle attività.
- **Validazione strumenti più rigorosa**: Generazione di immagini e trascrizione più affidabili grazie al ripristino della validazione rigorosa degli schemi.
- **Compatibilità Gemini migliorata**: I passaggi di ragionamento vengono ora preservati correttamente tra i messaggi.

## Correzioni di bug

- Risolto un problema per cui errori OpenAI potevano causare stati di caricamento infiniti in AI Chat.
- Stabilizzata la logica del LLM gateway e la comunicazione HTTP dopo aggiornamenti delle dipendenze.

## Sotto il cofano

- I modelli Vision sono ora completamente instradati tramite il nostro router LLM centrale (OneGateway) per un tracciamento accurato dell’utilizzo.
- Aggiornamenti completi delle dipendenze (incluso postgres 3.4.9) per maggiore stabilità e sicurezza.
- Refactoring interno e miglioramenti della type safety.

---

Un grande grazie a **Pascal, Mirko, Justus e Oliver** per 18 PR su 124 file modificati.

_18 commit · 18 PR · 124 file modificati · +9,242 / −4,347 righe_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

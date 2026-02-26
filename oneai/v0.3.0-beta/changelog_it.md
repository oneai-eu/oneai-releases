# OneAI v0.3.0-beta — Controllo completo della chat, nuovo Activity Hub e ultimi modelli Anthropic

**Release Date:** 2026-02-26

Con **OneAI v0.3.0-beta** offriamo più controllo, più trasparenza e maggiori prestazioni su tutta la piattaforma.

Dalle risposte IA interrompibili e ripristinabili a un Activity Hub centralizzato fino a chiavi API multiple con data di scadenza, questa release rafforza in modo significativo l’utilizzo quotidiano dell’IA in ambienti enterprise.

## Highlights

### Interrompere le risposte IA e riconnessione fluida
Ora puoi interrompere in qualsiasi momento le risposte in corso in **AI Chat**. Se la connessione si interrompe, la risposta riprende automaticamente dal punto in cui si era fermata — **nessun messaggio perso**.

Questo rende analisi lunghe e reti instabili molto più affidabili.

Un enorme grazie a **Pascal** per l’importante aggiornamento dell’architettura di streaming.

### Nuovo Activity Hub nella sidebar
Tutte le attività in corso — **uploads, elaborazione dei documenti e Spaces minimizzati** — sono ora raccolte in un Activity Hub strutturato nella sidebar.

Al posto di icone fluttuanti, hai una panoramica centralizzata e chiara con tracciamento preciso dello stato.

Anche questo implementato da **Pascal**.

### Nuovi modelli Anthropic: Opus 4.6 e Sonnet 4.6
Abbiamo aggiunto gli ultimi modelli Anthropic:

- **Claude Opus 4.6** per ragionamento complesso e attività strategiche
- **Claude Sonnet 4.6** come alternativa potente ed efficiente in termini di costi
- Fino a 200k di contesto e capacità multimodali complete

Grazie a **Mirko** per la rapida integrazione.

### Chiavi API multiple con scadenza
Gli utenti possono ora creare e gestire **più chiavi API**, ciascuna con:

- Descrizione personalizzata
- Data di scadenza opzionale
- Gestione centralizzata nel profilo

Questo migliora sicurezza, auditabilità e separazione chiara tra integrazioni.

Ottimo lavoro da parte di **Pascal**.

### Le chat ora appartengono agli Spaces
Abbiamo semplificato l’architettura: **le chat sono ora direttamente associate agli Spaces** invece che ai progetti.

Questo garantisce:

- Una struttura più pulita
- Maggiore flessibilità
- Una base più solida per le funzionalità future

I progetti esistenti sono stati automaticamente convertiti in Spaces di tipo project.

Importante lavoro architetturale di **Justus**.

---

## Improvements

### Riprova automatica per l’elaborazione dei documenti
Se l’elaborazione di un documento fallisce (ad esempio per errori API temporanei), OneAI riprova automaticamente con backoff intelligente.

Risultato: **Knowledge Spaces più affidabili** e meno interventi manuali.

### Incollare screenshot direttamente (Ctrl+V)
Ora puoi incollare immagini e screenshot direttamente in AI Chat con **Ctrl+V** — senza upload separato.

### Visualizzazione più pulita dei passaggi di ragionamento
I passaggi di ragionamento e le chiamate agli strumenti ora sono compressi per impostazione predefinita, riducendo il rumore visivo e mantenendo la trasparenza.

### Artifacts: autore, timestamp e trasferimento
Gli Artifacts ora mostrano:

- Autore
- Data dell’ultimo aggiornamento

Possono anche essere spostati o copiati tra Spaces.

### Nuova pagina “What’s New?”
Una nuova pagina di panoramica delle release informa gli utenti e li notifica automaticamente sugli aggiornamenti.

### Nuova Home ed eliminazione massiva
- Nuova schermata Home dopo il login
- Selezione multipla ed eliminazione massiva di chat e Artifacts
- Navigazione admin più ordinata

### Connettore weclapp notevolmente potenziato
- Riepiloghi dei dati aziendali generati dall’IA
- Arricchimento del contesto cliente
- Struttura delle cartelle migliorata
- Download più robusti e migliore gestione dei rate limits

### Infrastruttura degli Spaces rafforzata
Sincronizzazione migliorata, calcolo corretto dello storage e gestione degli errori più solida su tutti i provider.

---

## ⚠️ Sicurezza

Abbiamo corretto una vulnerabilità di multi-tenancy nella creazione di Artifacts generati dall’IA.

Ora gli Artifacts vengono validati rispetto ai permessi di accesso allo Space prima della creazione, garantendo un isolamento rigoroso dei tenant.

---

## Breaking Changes

### Chats → Spaces (Database)
Le chat non sono più collegate ai progetti. I progetti sono stati migrati in Spaces con `provider='project'`.

**Migrazione richiesta:**
- 202602130000.sql
- 202602180000.sql

Le chat esistenti vengono migrate automaticamente.

### Multi-API Keys (API)
Le chiavi API sono ora archiviate in una tabella dedicata.

**Migrazione richiesta:** 202602250000.sql  
Le chiavi esistenti vengono migrate automaticamente.

### Adeguamento prezzi: Sonnet 4.5
Il prezzo di output di Sonnet 4.5 è stato adeguato ai prezzi ufficiali Anthropic (60% più alto rispetto a quanto precedentemente calcolato).

Ti invitiamo a considerarlo nelle previsioni di costo.

---

## Under the Hood

- Endpoint chat unificati
- Nuovo monitoraggio dell’utilizzo LLM e dei token
- Miglioramenti CI per la gestione dei branch di release
- 29 dipendenze aggiornate
- Aggiornamento del framework backend per risolvere crash del server

---

Un grande grazie a **Pascal, Mirko, Justus e Orehman** per questa importante release.

—

*26 commit · 25 PR · 264 file modificati*

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

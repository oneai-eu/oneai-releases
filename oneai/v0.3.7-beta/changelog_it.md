# OneAI v0.3.7-beta — Ricerca più intelligente, personas personalizzate e audit completi

**Release Date:** 2026-04-03

## Highlights

### Ricerca documentale più intelligente con recupero ibrido e reranking
La ricerca nei Knowledge Spaces è stata aggiornata in modo sostanziale.

OneAI ora combina la **ricerca classica per parole chiave (BM25)** con la **ricerca vettoriale basata su IA**, seguita da una fase di reranking per rilevanza. Il risultato: risposte significativamente più accurate, soprattutto per query complesse o articolate.

- Migliori risultati per terminologia specialistica e sinonimi
- Risposte più coerenti su grandi raccolte di documenti
- I segnali di rilevanza influenzano direttamente la generazione delle risposte

Grazie a Pascal — la nostra nuova architettura di retrieval stabilisce un nuovo punto di riferimento per la qualità del processamento documentale.

### Crea e condividi le tue personas
Ora puoi creare **personas IA personalizzate** per diversi ruoli e casi d’uso — dal Sales al Legal fino all’IT.

- Personas private visibili solo a te
- Personas condivise create dagli admin per l’intera organizzazione
- Nuova pagina “Le mie personas” nel profilo

Le personas ora vengono selezionate per chat e non sono più legate ai progetti.

### Nuovo sistema di audit per i team di Compliance
Gli amministratori Compliance dispongono ora di un workflow di revisione solido:

- Rivedere, approvare o bloccare i messaggi segnalati
- Storico completo delle revisioni con timestamp e attribuzione del reviewer
- Nuova vista dettagliata con cronologia della chat e fonti

Le chat possono essere bloccate automaticamente fino alla revisione, se necessario. Grazie a Oliver per l’implementazione di questa funzionalità chiave di governance.

### Fissa i progetti individualmente e visualizza i tuoi permessi
Il pin dei progetti è ora **per utente** — le tue priorità sono indipendenti da quelle dei colleghi.

Puoi inoltre vedere immediatamente:
- Se hai permessi di scrittura
- Se sei amministratore del progetto

Questo migliora la trasparenza e riduce le incomprensioni negli ambienti collaborativi.

### GitHub Code Intelligence v2
La nostra integrazione GitHub ora analizza i repository a un livello molto più approfondito:

- Rilevamento delle relazioni di import
- Analisi delle chiamate di funzione tra file
- Grafi del codice generati automaticamente per directory

In questo modo, la conoscenza tecnica contenuta nelle codebase diventa molto più ricercabile e utilizzabile. Grazie a Mirko per questo importante upgrade.

## Improvements

- Le immagini generate dall’IA possono ora essere salvate direttamente nei progetti
- Le liste dei progetti mostrano data di creazione, ultimo aggiornamento e autore
- L’IA considera ora il tuo nome e il tuo ruolo per risposte più personalizzate
- I contenuti incollati di grandi dimensioni appaiono come documenti compatti con anteprima
- Dialogo di invito unificato per gli Spaces (utenti e team)
- Supporto WebAuthn esteso per ulteriori algoritmi passkey
- Sincronizzazione Outlook più robusta per ID messaggio complessi

## Bug Fixes

- Connessioni chat significativamente più stabili in caso di problemi WebSocket (i messaggi vengono preservati ed è possibile riprovare)
- Elaborazione dei documenti più affidabile per file vuoti ed errori temporanei
- Notifiche aggregate durante il re-embedding massivo invece di invii singoli
- I redirect SSO riportano ora in modo coerente alla pagina prevista
- Gli errori di upload sono visualizzati chiaramente
- La modalità Research rispetta correttamente i flussi di conferma
- I link esterni funzionano nuovamente come previsto

## Security

Abbiamo implementato diversi importanti miglioramenti di sicurezza:

- **Le chiavi API vengono revocate immediatamente quando gli utenti vengono deprovisionati tramite SCIM**
- I webhook Stripe validano rigorosamente il contesto organizzativo
- Le query di audit sono completamente isolate per tenant per prevenire accessi tra tenant

Questi cambiamenti rafforzano il controllo degli accessi e supportano una governance allineata all’EU AI Act.

## Breaking Changes

### Re-embedding completo dei Knowledge Spaces richiesto
L’architettura di ricerca è stata migrata ai vettori ibridi. Di conseguenza, tutti i documenti vengono rielaborati automaticamente.

- La migrazione reimposta tutti gli embedding su “pending”
- La coda di embedding reindicizzerà tutti i file
- Assicurati di disporre di capacità sufficiente per la fase iniziale di rielaborazione

### Personas non più legate ai progetti
`defaultPersonaId` non è più supportato. Le personas ora vengono selezionate liberamente per chat.

La migrazione è gestita automaticamente.

### Modello di pin dei progetti aggiornato
I pin sono ora specifici per utente anziché globali. I pin esistenti sono stati migrati automaticamente.

## Under the Hood

Oltre a 47 aggiornamenti delle dipendenze, abbiamo migliorato stabilità, logica di retry e tolleranza agli errori su tutta la piattaforma.

---

Un sentito grazie a Pascal, Oliver, Mirko, Justus e a tutto il team per i 39 commit di questa release.

_39 commits · 38 PRs · 160 file modificati_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

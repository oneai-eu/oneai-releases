# OneAI v0.4.4-beta — Automazione, protezione degli accessi e un AI Chat molto più stabile

**Release Date:** 2026-04-27

Questa release introduce tre importanti progressi: **automazione dei workflow con n8n**, **protezione proattiva degli accessi ai progetti** per prevenire fughe di dati e un **AI Chat sensibilmente più stabile e reattivo** — soprattutto per i modelli privati.

---

## Highlights

### Connettore n8n: crea workflow direttamente da OneAI
Ora puoi collegare la tua **istanza n8n come Space** e creare workflow di automazione direttamente da AI Chat.

- Procedura guidata di configurazione con validazione API  
- Template di workflow pronti all’uso  
- Creazione e attivazione dei workflow direttamente dalla chat  
- Sincronizzazione automatica tramite webhooks  
- Rimozione pulita quando uno Space viene eliminato  

OneAI diventa il tuo livello di controllo dell’automazione basata su IA — ancorato ai dati della tua azienda.

Un grande grazie a **Mirko**, che ha sviluppato il connettore end‑to‑end.

---

### Protezione degli accessi ai progetti: rileva conflitti, previeni fughe di dati
I progetti collegati ai Knowledge Spaces sono ora significativamente più sicuri.

Gli amministratori di progetto possono vedere immediatamente:
- Quali membri **non hanno accesso agli Spaces collegati**  
- Dove esistono potenziali conflitti di autorizzazione  

Possono direttamente:
- Concedere l’accesso (se autorizzati)  
- Inviare richieste di accesso strutturate agli amministratori dello Space (con limitazione intelligente di 1 ora)  

Inoltre, le tool calls vengono rigorosamente filtrate in background per includere solo documenti provenienti da Spaces autorizzati. Questo evita esposizioni involontarie di dati tra Spaces.

Un passo fondamentale per la governance dell’IA e la protezione dei dati in linea con l’EU AI Act.  
Concept e implementazione sono stati guidati da **Pascal**.

---

### Modelli privati: stabili, visibili e pronti per la produzione
I modelli self‑hosted sono ora molto più affidabili:

- Streaming stabile con tool calls e reasoning  
- Corretta visibilità nel selettore dei modelli  
- Controllo degli accessi adeguato nelle impostazioni dell’organizzazione  
- Nessun crash dovuto a formati di risposta inattesi  

Grazie al passaggio a una API backend più robusta, anche gli stream di lunga durata ora si completano in modo affidabile — mantenendo la protezione SSRF.

---

### Gestione proattiva delle sessioni
Più sicurezza, meno sorprese:

- Avviso anticipato prima della scadenza della sessione (con ri‑autenticazione immediata)  
- Logout automatico dopo inattività prolungata  
- Preferenza del tema ora salvata in modo persistente lato server  

Questo riduce il rischio di sessioni attive dimenticate, soprattutto in ambienti condivisi.

---

### Un’esperienza AI Chat decisamente più fluida
AI Chat ha ricevuto importanti miglioramenti di stabilità:

- Nessun blocco dell’interfaccia durante suggerimenti di artefatti di grandi dimensioni  
- Tasto Invio correttamente bloccato durante lo streaming attivo  
- Nessun “messaggio fantasma” dopo errori in chat  
- Risolto il problema del cursore dopo l’incolla di documenti  
- Gestione degli errori più chiara per i fallimenti della ricerca web  

Il risultato: un’esperienza di chat quotidiana molto più robusta e professionale.

---

## Improvements

### Elaborazione documenti: più veloce, più equa, più resiliente
L’intera coda di embedding è stata potenziata:

- Distribuzione più equa tra organizzazioni  
- Worker dedicato per upload interattivi (critici)  
- Attivazione immediata tra repliche tramite PostgreSQL NOTIFY  
- Cicli di retry più brevi dopo errori  
- Prefix caching per modelli vision → elaborazione più rapida di documenti di grandi dimensioni  
- Validazione delle immagini prima dell’elaborazione vision per fallire in anticipo e in modo pulito  

I documenti caricati dalla chat ora hanno priorità — anche quando sono in esecuzione grandi job di sincronizzazione in background.

Gran parte di questo lavoro infrastrutturale è stato guidato da **Pascal**.

---

### Catalogo modelli aggiornato
Il catalogo dei modelli è stato aggiornato in modo completo:

- Ultimi modelli di OpenAI, Anthropic, Google e Mistral  
- Finestre di contesto fino a 1 milione di token  
- GPT‑5.5 e GPT‑5.5 Pro pre‑registrati  
- Supporto per l’API Adaptive Thinking di Anthropic (Opus 4.7)  

Grazie a **Mirko** e **Oliver** per gli aggiornamenti — e a **Justus** per l’estensione del LLM gateway con `prompt_cache_key` e `max_output_tokens`.

---

## Bug Fixes

- Modelli Google: gestione stabile delle thought signatures su più tool calls  
- Mistral: nessun timeout di 30 secondi su richieste complesse  
- Drag & drop nel file explorer ripristinato  
- Eliminazione cartelle e ridimensionamento tabelle corretti  
- Le istruzioni di progetto si aggiornano istantaneamente  
- Log di audit compliance correttamente collegati ai messaggi della chat  

Molti piccoli dettagli sono stati rifiniti — con un impatto concreto nel lavoro quotidiano.

---

## Under the Hood

- Maggiore stabilità di WebSockets e cancellazione degli Spaces  
- Eliminazione file in batch per prevenire l’esaurimento delle risorse infrastrutturali  
- 44 dipendenze aggiornate  

---

Grazie a **Pascal, Mirko, Justus, Oliver** e dependabot per questa release significativa.

— 40 PRs · 114 file modificati · ~7.900 linee aggiunte

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

# OneAI v0.3.6-beta — Controlli di compliance rafforzati, chat più intelligenti e supporto completo a GPT‑5.4

**Release Date:** 2026-03-27

Con la v0.3.6-beta, OneAI diventa più sicuro, più potente e più fluido nell’uso quotidiano. Questa release introduce un sistema di compliance completamente riprogettato, un workflow di chat significativamente migliorato, filtri avanzati per GitHub e il supporto per tutti i nuovi modelli GPT‑5.4.

## Highlights

### Sistema di compliance con livelli di rischio e blocco
Abbiamo ripensato in modo radicale il livello di compliance. Gli amministratori possono ora definire **per livello di rischio** se le richieste devono essere solo registrate o attivamente bloccate.

- Azioni configurabili per livello di rischio: **Audit** o **Audit & Block**
- Modalità sincrona opzionale per il blocco immediato dei prompt ad alto rischio
- Audit log estesi per:
  - Messaggi di chat
  - Inviti ai membri
  - Modifiche ai permessi dei Spaces
- Interfaccia chiara delle impostazioni di compliance basata su tab

Questo garantisce alle organizzazioni un controllo molto più solido in linea con l’EU AI Act e le policy interne di governance.

Un grande grazie a **Oliver** per aver guidato questa iniziativa.

### Nuovo workflow di chat: creazione lazy, rinomina inline e artefatti nella chat
Abbiamo ottimizzato l’esperienza principale di AI Chat.

- Le chat vengono create **solo quando viene inviato il primo messaggio** (niente più chat vuote)
- Le chat possono essere **rinominate inline** direttamente dalla lista
- Gli artefatti ora appaiono **direttamente nella chat** invece che in una finestra separata
- I messaggi vuoti o non validi vengono bloccati in modo coerente

Il risultato: liste più pulite, meno edge case e un’esperienza AI Chat più affidabile.

Grazie a **Pascal** per aver guidato questo importante miglioramento del nostro workflow centrale.

### Connettore GitHub con filtro avanzato dei file
Quando colleghi repository GitHub, ora puoi controllare con precisione quali file vengono sincronizzati e integrati.

- Pattern di inclusione ed esclusione (es. `*.md`, `docs/`, `test*`)
- Filtro separato per sincronizzazione vs. embedding
- Indicazioni più chiare quando vengono raggiunti i limiti API
- Icone file appropriate per una migliore orientazione

Questo aiuta a ridurre embedding inutili, ottimizzare i costi e migliorare la qualità dei Knowledge Spaces.

### Tutti i modelli GPT‑5.4 disponibili
Sono ora supportate tutte le nuove varianti GPT‑5.4:

- **Nano & Mini** – veloci ed efficienti nei costi
- **Standard** – modello versatile e potente con ampia finestra di contesto
- **Pro** – massima capacità per attività di ragionamento complesse

Ora puoi allineare la scelta del modello ancora più precisamente al tuo caso d’uso, budget e requisiti di governance.

### Hub attività in tempo reale
Un nuovo flusso di attività unificato mostra in tempo reale:

- Sincronizzazioni
- Elaborazione documenti (embedding)
- Distillazioni

Tutto in un’unica vista consolidata con indicatori di avanzamento — particolarmente utile per Knowledge Spaces di grandi dimensioni.

## Improvements

- Ordinamento dei progetti per **nome, data di creazione o ultimo aggiornamento**
- Finestra di conferma prima dell’eliminazione delle chat
- Il ruolo Admin nei Spaces applica automaticamente i permessi di scrittura (modello di accesso coerente)
- Sistema di template per istruzioni di progetto completamente ricostruito con nuova UI e funzionalità showcase
- Template weclapp migliorati per una qualità di estrazione superiore
- Gestione dei messaggi più robusta (nessun errore dovuto a blocchi di contenuto vuoti)

Un ringraziamento speciale a **Mirko** per aver ricostruito il sistema di template e a **Santi** per i suoi primi contributi sull’ordinamento dei progetti e sull’eliminazione sicura delle chat.

## ⚠️ Security

Abbiamo ulteriormente rafforzato la nostra architettura di sicurezza:

- **Isolamento multi‑tenant rafforzato:** Le assegnazioni dei team vengono ora validate rigorosamente rispetto alla loro organizzazione
- **Registrazione WebAuthn più sicura:** La verifica del challenge è ora gestita interamente all’interno della transazione del database, prevenendo race conditions

Questi cambiamenti rafforzano in modo significativo l’isolamento tra tenant e la sicurezza dell’autenticazione.

## Under the Hood

- Migrazione a **Vite 8** per una configurazione di build modernizzata
- 65 aggiornamenti delle dipendenze
- Upgrade a Mistral SDK v2
- Ulteriori miglioramenti di performance, stabilità e qualità del codice

---

Grazie a **Pascal, Oliver, Mirko e Santi** — e ai nostri aggiornamenti automatici delle dipendenze.

_24 PRs · 147 file modificati · 14.422 inserimenti · 5.595 eliminazioni_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

# OneAI v1.1.0 — Il nostro rilascio più importante dalla v1.0

**Release Date:** 2026-05-28

OneAI v1.1.0 rappresenta un grande passo avanti: **AI Chat diventa più potente**, **Knowledge Spaces è più semplice da gestire**, e **gli amministratori dispongono di controlli più solidi per ambienti regolamentati**. Inoltre, questa versione introduce nuovi connettori, un’esperienza di organizzazione dei progetti notevolmente migliorata e importanti miglioramenti di affidabilità su tutta la piattaforma.

## Highlights

- **Modifica delle immagini direttamente in AI Chat**
  - Ora puoi modificare immagini generate o caricate utilizzando il linguaggio naturale.
  - Richieste come «rendi lo sfondo più blu» o «rimuovi la persona a sinistra» funzionano direttamente all’interno della conversazione.
  - Grazie a **Mirko**, AI Chat ora supporta un flusso di lavoro per le immagini molto più naturale.

- **Ricerca full-text nei contenuti delle chat**
  - La ricerca non si limita più ai titoli delle chat, ma trova anche parole all’interno dei tuoi messaggi.
  - Questo rende molto più semplice recuperare conversazioni passate quando ricordi una frase ma non il nome.
  - Grazie a **Pascal**, la ricerca è ora molto più utile nel lavoro quotidiano.

- **Organizzare i progetti con archivio, tag e azioni massive**
  - I progetti possono ora essere archiviati invece di essere eliminati.
  - I tag personalizzati aiutano a strutturare il lavoro ed è possibile aggiornare più progetti contemporaneamente.
  - La panoramica dei progetti è stata completamente rinnovata per un utilizzo responsive e include ora una gestione dedicata dei tag.

- **Mettere in pausa gli Spaces invece di eliminarli**
  - Gli amministratori dell’organizzazione possono ora disattivare i Knowledge Spaces senza perdere contenuti o configurazioni.
  - Gli Spaces in pausa sono nascosti ai membri e possono essere riattivati in qualsiasi momento.
  - Particolarmente utile per revisioni di conformità, pause di progetto o interruzioni temporanee.

- **Risposte più intelligenti con maggiore controllo delle fonti**
  - Due nuove impostazioni a livello di organizzazione aiutano OneAI a dare priorità alle fonti interne nella generazione delle risposte.
  - Se desiderato, OneAI può essere configurato per rispondere solo quando le informazioni sono effettivamente supportate da fonti.
  - Una funzionalità di governance fondamentale per i settori regolamentati. Grazie a **Mirko** per aver implementato queste funzionalità chiave legate ai requisiti SAG.

- **Nuovi connettori: HubSpot e SMB**
  - **HubSpot** è ora disponibile come nuova fonte di dati, portando le informazioni CRM in OneAI.
  - Il nuovo **connettore SMB** consente di collegare unità di rete del tuo ambiente interno come fonte di conoscenza.
  - Grazie a **Pascal** per HubSpot e a **Justus** per il connettore SMB e la base agent sottostante.

## Improvements

- **Server MCP per strumenti AI esterni**
  - Strumenti come Cursor, Claude Desktop, Copilot o n8n possono ora connettersi a OneAI tramite lo standard aperto MCP e interrogare le tue fonti di conoscenza.
  - Grazie a **Santi** per questa importante estensione dedicata ai team tecnici.

- **Maggiore visibilità su utilizzo, budget e overage**
  - Le impostazioni di abbonamento includono ora una scheda dedicata all’utilizzo con consumo in tempo reale, limiti di budget e controllo degli overage.
  - Il dashboard presenta fatturazione e utilizzo in modo più chiaro grazie a nuove KPI card e a una struttura più pulita.
  - Grazie a **Obaid** per aver reso molto più trasparente la gestione di utilizzo e costi.

- **I file di progetto utilizzano ora l’esploratore familiare**
  - I file di progetto utilizzano ora la stessa esperienza di esplorazione degli Spaces.
  - Questo garantisce un flusso di lavoro più coerente per anteprima, navigazione e gestione dei file.

- **Riconnessione per Outlook e OneDrive**
  - Le connessioni scadute possono ora essere rinnovate con un solo clic, senza ricreare uno Space.
  - Questo riduce significativamente il carico amministrativo.

- **Maggiore visibilità operativa**
  - Gli Spaces in pausa sono chiaramente indicati nelle pagine di dettaglio dei progetti e degli Spaces.
  - Il badge di stato del OneAI Agent si aggiorna automaticamente.
  - Gli acquisti di add-on diventano immediatamente disponibili senza necessità di ricaricare la pagina.

## Bug Fixes

- **Elaborazione dei documenti più affidabile**
  - I documenti di grandi dimensioni e i file con conversione lenta vengono elaborati in modo più affidabile.
  - Gli allegati HTML provenienti da email e upload sono ora supportati e convertiti in contenuti utilizzabili per i Knowledge Spaces.
  - È stato risolto un loop critico di memoria causato da alcune email Outlook, rendendo l’elaborazione dei documenti molto più stabile sotto carico.
  - Grazie a **Mirko** e **Pascal** per questi miglioramenti fondamentali a una componente chiave della piattaforma.

- **Integrazioni Microsoft e Teams più stabili**
  - L’accesso tramite add-in Teams funziona di nuovo in modo affidabile, anche in ambienti AD ibridi.
  - I rinnovi dei webhook Microsoft non rimangono più bloccati in loop di tentativi in caso di errore.
  - La riconnessione a OneDrive riporta ora correttamente allo Space giusto.

- **Sincronizzazione e artefatti più coerenti**
  - La sincronizzazione cloud non fallisce più in presenza di percorsi duplicati.
  - Gli artefatti delle chat sono ora correttamente limitati al rispettivo progetto.
  - Lo stato di indicizzazione dei documenti è visibile, così è più semplice capire quando i contenuti sono pronti per le risposte.

- **Rendering e gestione delle sessioni migliorati**
  - I diagrammi ASCII e Mermaid vengono nuovamente visualizzati correttamente nella chat.
  - Le sessioni scadute reindirizzano correttamente alla pagina di login invece di lasciare l’utente in uno stato di errore.
  - I magic link funzionano di nuovo per indirizzi email che contengono il segno più.

## Security

- **Associazione dell’identità Microsoft/Teams più robusta**
  - Le identità Microsoft Entra sono ora associate utilizzando identificatori stabili di tenant e utente invece di basarsi solo sull’indirizzo email.
  - Questo riduce il rischio di assegnazioni errate e rafforza l’accesso a Teams, soprattutto in scenari AD ibridi.

- **I token dell’Agent non sono più salvati in chiaro**
  - I token di upload e download del OneAI Agent sono ora salvati come hash.
  - Questo migliora significativamente la protezione delle credenziali di connessione sensibili.

## Under the Hood

- Abbiamo unificato in modo sostanziale l’architettura dei connettori, creando una base più pulita per le integrazioni future.
- Abbiamo inoltre ampliato la copertura dei test automatizzati sui componenti core del backend per migliorare ulteriormente stabilità e prevedibilità della piattaforma.

Grazie a **Pascal**, **Mirko**, **Obaid**, **Justus** e **Santi** per questo rilascio.

*43 commit, 43 PR, 271 file modificati*

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

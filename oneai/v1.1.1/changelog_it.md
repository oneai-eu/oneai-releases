# OneAI v1.1.1 — Modalità vocale, presentazioni e automazione più intelligente

**Release Date:** 2026-06-24

## Highlights

OneAI v1.1.1 è una delle nostre release più importanti finora. Il focus è su nuovi modi di lavorare in **AI Chat**, **artifacts** più potenti e un grande passo avanti nell’**automazione con controllo**.

- **Modalità vocale in AI Chat**: Ora puoi parlare con OneAI invece di digitare. Grazie a Justus, il primo rollout è già affidabile, con streaming più stabile e indicazioni più chiare all’interno del prodotto.
- **Presentazioni generate dall’IA nella chat**: Crea presentazioni complete direttamente da una conversazione, visualizzale in anteprima nel pannello artifact ed esportale come **PowerPoint o PDF**. Grazie a Pascal per aver realizzato questa funzionalità end-to-end.
- **Uno – il tuo nuovo assistente**: Con un proprio sistema di conoscenza, contesto di workspace e un flusso conversazionale migliorato, Uno introduce un’esperienza di assistente più focalizzata. Santi ha posto le basi per i prossimi sviluppi.
- **Condivisione migliorata degli artifacts**: Gli artifacts ora supportano le immagini e possono essere condivisi tramite **link privati, di progetto o pubblici**. I flussi di condivisione sono ora molto più chiari per i destinatari.
- **Template di progetto**: Salva le configurazioni di progetto più comuni come template e riutilizzale con un solo clic.

## Improvements

- **Meno clic per le azioni degli strumenti**: Con la nuova logica di **trust window**, OneAI può imparare quando azioni affidabili possono essere eseguite automaticamente o approvate in modo più fluido — ad esempio con Outlook, n8n, strumenti MCP o API approvate. L’automazione diventa così molto più scorrevole senza compromettere la governance. Gran parte di questa base è stata sviluppata da Mirko.
- **Maggiore visibilità in Knowledge Spaces**: Ora puoi vedere lo stato di avanzamento dell’indicizzazione dei documenti direttamente nella barra delle attività e nelle schede degli spazi.
- **Viste specifiche per Connector**: I contenuti provenienti dai Connectors sono ora mostrati in formati più adeguati, inclusa una vista dedicata per i messaggi Outlook.
- **Suggerimenti di chat più intelligenti**: AI Chat suggerisce ora domande di follow-up più pertinenti.
- **Python più potente nella chat**: Gli output di Python possono ora includere immagini e i file dei Knowledge Spaces possono essere passati direttamente a Python.
- **Integrazioni e modelli ampliati**: Include Vertex AI, Grok 4.3 tramite Vertex, gestione dei server MCP e nuovi building block per integrazioni e portali.
- **Feedback sulle risposte IA**: Gli utenti possono ora valutare le risposte dell’IA e gli amministratori possono consultare il feedback aggregato in una dashboard.

## Bug Fixes

Questa release include anche numerosi miglioramenti mirati alla stabilità quotidiana:

- **Elaborazione dei documenti più affidabile**: I documenti vengono ora elaborati in modo più robusto, anche in caso di richieste interrotte o errori temporanei. Grazie a Pascal — soprattutto nei Knowledge Spaces più grandi questo riduce notevolmente il lavoro manuale.
- **Sync e Connectors più stabili**: La sincronizzazione con OneDrive è ora più affidabile, soprattutto con file di grandi dimensioni. Google Drive e Google SSO sono stati inoltre reintrodotti in modo controllato tramite feature flag.
- **Meno interruzioni nella chat**: Le conferme degli strumenti non si bloccano più durante chiamate parallele, le conferme già risolte non vengono più riproposte dopo la riconnessione e i prompt troppo lunghi causano molti meno errori.
- **Esperienza artifact migliorata**: Gli artifacts ora vengono visualizzati correttamente alla prima apertura, i riferimenti all’artifact attivo sono risolti in modo più affidabile e le esportazioni PDF attendono correttamente diagrammi e syntax highlighting.
- **Messaggi di errore più chiari**: Gli errori dei provider di modelli e di autenticazione Microsoft sono ora più comprensibili, facilitando una diagnosi più rapida.
- **Miglioramenti per admin e progetti**: Gli amministratori possono ora rimuovere membri anche in presenza di dati storici di billing o persona. Abbiamo inoltre aggiunto l’eliminazione massiva delle chat di progetto e sistemato diversi piccoli problemi di UI.

## Security

- **Tutte le vulnerabilità note delle dipendenze risolte**: I risultati del pnpm audit sono stati ridotti da **54 a 0**.
- **Controlli di esecuzione degli strumenti più sicuri**: Il nuovo meccanismo di trust window chiude le lacune legate alle esecuzioni silenziose e rende le decisioni automatiche più trasparenti e sicure.
- **Autenticazione più robusta**: I fallimenti permanenti di Microsoft AAD vengono ora gestiti correttamente invece di essere ripetuti con credenziali non valide.

## Under the Hood

Oltre alle funzionalità visibili, abbiamo migrato ulteriori Connectors su una piattaforma unificata, ampliato l’infrastruttura degli strumenti, migliorato la diagnostica delle sessioni e gettato le basi per future integrazioni e automazione.

Grazie a **Pascal, Mirko, Justus, Oliver, Obaid e Santi** per aver rilasciato una release di tale portata.

*111 commit · 108 PR · 690 file modificati*

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

# OneAI v1.1.6 — Presentazioni in linea con il tuo brand e chat molto più resilienti

**Release Date:** 2026-07-08

## Highlights

**Le presentazioni ora rispecchiano il tuo brand fin da subito.** I deck generati possono adottare automaticamente i colori del tuo brand, utilizzando il colore principale della tua CI insieme a un accento secondario estratto dal logo. Le presentazioni generate dall’AI risultano così molto più pronte per l’uso interno e verso i clienti. Grazie a Pascal, le presentazioni in OneAI sono ora decisamente più curate.

**Ora puoi modificare le slide direttamente nel deck viewer.** Riordina, duplica o elimina slide con il drag and drop — senza rigenerare il deck o richiamare nuovamente l’AI. Le presentazioni generate diventano così una base di lavoro che i team possono perfezionare molto più rapidamente.

**I design possono essere cambiati dopo la generazione.** Puoi passare in qualsiasi momento tra Light, Dark, Corporate, Editorial e Slate senza dover ricreare la presentazione.

**Gli output Python in AI Chat ora supportano il download completo dei file.** Oltre alle immagini, OneAI fornisce ora file Excel, PDF, Word, CSV e altri file generati direttamente nella chat con il loro nome originale. Grazie a Mirko, analisi e report sono molto più facili da integrare nei workflow reali.

**Le conversazioni lunghe sono ora molto più affidabili.** Quando le chat o i contenuti incollati diventano molto grandi, OneAI riduce automaticamente il contesto più vecchio invece di interrompersi con un errore “conversation too large”. I riassunti generati vengono inoltre correttamente inclusi nella chiamata successiva al modello. Grazie a Pascal, le sessioni di lavoro prolungate in AI Chat sono ora molto più stabili.

## Improvements

- **I messaggi meno recenti nelle chat lunghe ora si caricano nuovamente correttamente** quando si scorre verso l’alto. Thanks to Oliver.
- **Le chat basate su GPT non si interrompono più a metà turno** quando il modello scrive testo prima di chiamare uno strumento. Thanks to Santi.
- **Le esportazioni PDF sono più complete**, inclusi diagrammi Mermaid renderizzati e codice con evidenziazione della sintassi.
- **HubSpot può ora essere collegato in modo affidabile dallo Space wizard**, senza rimanere bloccati su una pagina vuota.
- **La sincronizzazione dei Knowledge Spaces è più resiliente**, anche in caso di problemi temporanei di connettività del backend di storage.
- **La sincronizzazione Outlook gestisce meglio payload Microsoft insoliti**, evitando loop di errore.
- **L’elaborazione del connettore GitHub è più efficiente**, aiutando i repository di grandi dimensioni a rimanere entro i limiti API e a essere elaborati in modo più affidabile.
- **I PDF vengono ora elaborati in modo coerente con Vision**, migliorando i risultati per layout complessi, grafici e documenti con contenuti misti. Thanks to Justus.
- **Le descrizioni di immagini e diagrammi nei documenti elaborati sono più utili**, migliorando la qualità dei risultati nei Knowledge Spaces. Thanks to Justus.
- **Le informazioni sugli incidenti ora appaiono direttamente nel prodotto**, rendendo più semplice comprendere rapidamente eventuali problemi noti della piattaforma.
- **Maggiore trasparenza dei costi per contesti modello molto grandi:** il comportamento dei prezzi per chat particolarmente lunghe con modelli di grandi dimensioni è ora rappresentato in modo più chiaro. Thanks to Obaid.

## Bug Fixes

- **Messaggi di errore più chiari quando i provider AI sono sovraccarichi o soggetti a rate limits**, invece di errori generici della chat. Thanks to Oliver.
- **Gli strumenti Python e SQL basati su Anthropic ora funzionano nuovamente in modo affidabile**, anche quando non sono richiesti file di input.
- **Claude Opus 4.6 e Sonnet 4.6 sono ora allineati con l’attuale configurazione di adaptive thinking**, migliorando l’affidabilità del modello.

## Security

- **Download dei file più sicuri in AI Chat:** gli output Python non legati a immagini vengono ora sempre forniti come download, chiudendo un potenziale vettore di attacco tramite rendering inline per file HTML e SVG.
- **Controlli dei permessi più rigorosi per i dati strutturati nei Knowledge Spaces:** l’accesso in scrittura al datastore di uno Space è ora correttamente applicato in base ai permessi di scrittura dello Space.

## Under the Hood

- L’elaborazione dei documenti è stata significativamente accelerata e resa più robusta in più fasi, con una pipeline più veloce, un migliore comportamento di failover e prestazioni del database ottimizzate. Thanks to Justus.
- Abbiamo inoltre ampliato l’osservabilità interna nell’elaborazione di embedding e PDF per individuare più rapidamente eventuali colli di bottiglia e mantenere prestazioni stabili.

Grazie a Pascal, Justus, Mirko, Oliver, Santi e Obaid per questa release.

*34 commits, 109 files changed*

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

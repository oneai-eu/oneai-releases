# OneAI v0.3.2-beta — Research Agent, generazione di immagini e integrazione Outlook

**Release Date:** 2026-03-10

Con la v0.3.2-beta, OneAI compie un importante passo avanti. Questa release introduce un nuovo **Research Agent** per analisi multi-step, la **generazione di immagini AI direttamente in chat**, un **connettore Outlook per Knowledge Spaces basati su email** e **input vocale basato su Whisper** con una qualità di trascrizione nettamente migliorata. Inoltre, abbiamo ampliato gli strumenti di compliance e migliorato l’affidabilità complessiva della piattaforma.

## Highlights

### Research Agent per analisi complesse
AI Chat può ora avviare un **Research Agent** autonomo. Esegue indagini multi-step sui tuoi Knowledge Spaces e — se necessario — sul web, utilizza gli strumenti disponibili in modo iterativo e produce risultati strutturati.

Ideale per analisi di mercato, ricerche competitive e indagini interne complesse.

Un ringraziamento speciale a **Justus**, che ha costruito la base flessibile dell’agente che rende possibile questa funzionalità.

### Generazione di immagini AI in chat
Ora puoi chiedere a OneAI di **generare immagini** direttamente in AI Chat — ideale per presentazioni, concept di prodotto o comunicazione interna.

- Immagini visualizzate direttamente in chat
- Download come file
- Salvataggio in un Knowledge Space
- Monitoraggio trasparente dei costi per livello di qualità

Grazie a **Pascal**, le immagini generate si integrano perfettamente nei tuoi workflow aziendali.

### Connettore Outlook per sincronizzazione email
Il nuovo **connettore Outlook** consente di collegare caselle di posta come Knowledge Spaces.

- Selezione di cartelle specifiche
- Sincronizzazione automatica
- Email ricercabili (oggetto, mittente, contenuto e allegati)
- Aggiornamenti quasi in tempo reale tramite webhook

La conoscenza istituzionale contenuta nelle email è ora accessibile in modo sicuro all’interno di AI Chat.

### Riconoscimento vocale con Whisper
L’input vocale in AI Chat è ora basato su **OpenAI Whisper**, in sostituzione dell’API del browser.

- Precisione significativamente maggiore
- Ottimo supporto per la lingua tedesca
- Migliore riconoscimento della terminologia specialistica

Un miglioramento evidente per i team che utilizzano spesso la voce.

### Nuovo editor chat con salvataggio bozze
Abbiamo completamente ricostruito l’esperienza di input in chat:

- Editor di testo avanzato moderno e stabile
- Menzioni @ per Spaces e contenuti
- Salvataggio automatico delle bozze per chat

Particolarmente utile per prompt lunghi e istruzioni complesse.

## Miglioramenti

### AI Personas organizzative
Gli amministratori possono ora definire **AI Personas** con system prompt dedicati e ruoli specifici. Le Personas possono essere assegnate ai progetti, garantendo tono, struttura o specializzazione coerenti tra i team.

### Esportazione audit log (CSV & JSON)
Gli audit log possono ora essere esportati in formato **CSV o JSON**, supportando revisioni di compliance, DPO e audit esterni.

Abbiamo inoltre aggiunto nuovi pattern di compliance predefiniti, tra cui:

- GDPR (incluso l’Articolo 9)
- Identificativi nazionali tedeschi
- IBAN, partite IVA UE, numeri di telefono europei
- KDG (normativa tedesca sulla protezione dei dati ecclesiastici)
- BSI IT-Grundschutz e regole di sovranità dei dati

Grazie a **Oliver** per aver rafforzato le nostre capacità di compliance.

### Feedback in tempo reale per sincronizzazione e processamento documenti
- Avanzamento live durante la sincronizzazione degli Spaces
- Aggiornamenti di stato in tempo reale per l’elaborazione dei documenti
- Logica di retry e gestione errori più robusta

Risultato: **maggiore trasparenza e affidabilità significativamente migliorata** per grandi volumi di dati.

### Monitoraggio più accurato di utilizzo e costi
- Filtro corretto per data nelle analytics di utilizzo
- Logica di pricing migliorata (inclusi token in cache)
- Monitoraggio trasparente dei costi per generazione immagini e trascrizione

Un miglioramento chiave per i clienti Enterprise con responsabilità di budget.

## Bug Fix

- Connessioni chat più stabili e messaggi di errore più chiari
- Corretta gestione dei limiti di token
- Il dialogo API key ora si chiude correttamente
- Risolti problemi di layout e scrolling
- Diverse migliorie di stabilità emerse dalla nostra revisione interna BugHunt

## Under the Hood

- Caching dei prompt per OpenAI e Claude per ridurre latenza e costi
- Nuova infrastruttura di blob storage per i file chat
- 36 dipendenze aggiornate
- Configurazione di osservabilità e monitoraggio migliorata

---

Grazie a **Pascal, Justus, Oliver, Orehman e Mirko** per aver realizzato questa importante release.

_29 PRs · 218 file modificati · 6 contributor_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

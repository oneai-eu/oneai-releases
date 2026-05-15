# OneAI v1.0.4 — Chat più resiliente, fonti più chiare e maggiore trasparenza sui prezzi

**Release Date:** 2026-05-15

Con **OneAI v1.0.4**, AI Chat diventa sensibilmente più affidabile nell’uso quotidiano — soprattutto per risposte lunghe, flussi di strumenti complessi e lavoro basato su documenti. Allo stesso tempo, miglioriamo la trasparenza nelle Subscription e rafforziamo la privacy delle fonti web.

## Highlights

- **Le risposte lunghe non scompaiono più dopo brevi interruzioni di connessione.** Se uno stream viene interrotto durante una risposta, OneAI ora lo ripristina automaticamente mantenendo il testo già generato. Invece di perdere domanda e risposta, gli utenti possono continuare senza interruzioni. Grazie a **Pascal**, AI Chat è ora molto più resiliente in condizioni di rete instabili.
- **Nuova barra delle chiamate agli strumenti e pannello fonti unificato.** I passaggi di reasoning e l’attività degli strumenti ora appaiono direttamente nel punto in cui si verificano nella risposta. Le fonti web e file sono inoltre riunite in un’unica vista **“All Sources”**, rendendo le risposte complesse molto più facili da seguire. Grazie a **Oliver** e **Pascal** per questo importante redesign.
- **Artefatti sempre a portata di mano.** Gli artefatti creati e referenziati sono raccolti in un riquadro fisso direttamente sopra il campo di input. In questo modo sono facilmente recuperabili anche nelle conversazioni lunghe. I riferimenti inline ora aprono gli artefatti direttamente nel pannello laterale senza allontanare gli utenti dalla chat.
- **Prezzi dei modelli in tempo reale nell’area Subscription.** I prezzi dei modelli disponibili non sono più statici. Ora vengono aggiornati dinamicamente e mostrati in un nuovo dialogo dedicato, offrendo agli amministratori una panoramica più chiara e aggiornata dei costi. Grazie a **Obaid** per questa implementazione.

## Improvements

- **Elaborazione dei documenti più veloce.** Riassunti ed embeddings ora vengono eseguiti in parallelo, accelerando sensibilmente l’elaborazione dei documenti.
- **Minore utilizzo di memoria per la ricerca.** La ricerca documentale utilizza significativamente meno RAM mantenendo la stessa qualità. Grazie a **Justus**, OneAI scala in modo più efficiente con Knowledge Spaces di grandi dimensioni.
- **Niente più contenuti PDF duplicati.** Abbiamo risolto un problema che in alcuni casi poteva causare l’indicizzazione doppia dei contenuti PDF.
- **Esperienza di audit migliorata per i team di compliance.** I messaggi lunghi bloccati sono ora leggibili nel dialogo di audit, i contenuti rilevati vengono mostrati con maggiore precisione e il rilevamento IBAN genera meno falsi positivi.
- **Layout Subscription più ordinato.** Le schede Overview, Billing, Usage, Team Quota e Add-ons ora si comportano in modo più coerente su diverse dimensioni dello schermo.

## Bug Fixes

- **I prompt bloccati dalla compliance vengono conservati per la revisione.** Quando un messaggio viene bloccato da una regola di compliance, il prompt originale e i relativi allegati restano disponibili per la revisione da parte degli amministratori e possono essere ripristinati correttamente dopo l’approvazione.
- **Gli snippet delle fonti non rompono più il layout.** La vista delle fonti rimane compatta e leggibile anche con snippet complessi.
- **I titoli automatici delle chat restano all’interno della nostra infrastruttura UE.** Questo migliora la privacy ed evita di consumare il budget di token lato utente della vostra organizzazione per una piccola attività in background.

## Security

- **Favicons rispettosi della privacy per le citazioni web.** I favicons vengono ora caricati tramite un proxy sicuro di OneAI invece che tramite servizi esterni. In questo modo indirizzi IP e comportamento di navigazione non vengono più esposti a provider terzi come il CDN di Google.
- Abbiamo inoltre preparato le basi per ulteriori controlli di sicurezza della supply chain dietro le quinte.

## Under the Hood

- Ulteriori ottimizzazioni delle prestazioni in ricerca, storage ed elaborazione documenti
- Pulizia tecnica nello stack di chat e release
- Piccoli miglioramenti ai processi di billing e piattaforma

Grazie a **Pascal**, **Oliver**, **Obaid** e **Justus** per questa release. Un ringraziamento speciale a Pascal per aver guidato gran parte del lavoro su affidabilità e UX del chat in questa versione.

*71 file modificati · 20 commit · 4 contributori*

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

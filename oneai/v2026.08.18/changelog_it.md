# OneAI v2026.08.18 — Collaborazione, dashboard live e integrazioni sicure

**Release Date:** 2026-08-18

## In evidenza

**Collaborare alle presentazioni in tempo reale**

Le presentazioni generate dall’IA sono ora spazi di lavoro condivisi. Più persone possono modificare contemporaneamente diapositive, testi, tabelle e grafici, con modifiche visibili istantaneamente a tutti e la presenza dei collaboratori mostrata in tempo reale nella presentazione. I modelli di presentazione riutilizzabili aiutano inoltre i team a iniziare più rapidamente con un formato coerente.

**Creare dashboard BI live dai vostri dati**

Create metriche e grafici interattivi dalle vostre tabelle oneData direttamente tramite AI Chat. Le dashboard sono disponibili in un’area dedicata, mentre ora è possibile importare file CSV ed esportare i risultati. Grazie a Mirko per aver realizzato questa base per decisioni guidate dai dati.

**Gestire centralmente le integrazioni con controlli di accesso granulari**

La nuova pagina Integrazioni offre maggiore visibilità e più controllo sulle connessioni a Outlook, n8n, HubSpot, Lexware Office e altri servizi:

- I dipendenti possono gestire le proprie connessioni in un unico luogo centralizzato.
- Le singole integrazioni possono essere disabilitate a livello personale.
- Gli amministratori possono disabilitare le integrazioni a livello di organizzazione o limitarle a progetti specifici.
- Ora è possibile inviare e-mail di Outlook direttamente da OneAI.

**Nuovo Connector: Lexware Office**

Collegate Lexware Office a OneAI per cercare in modo sicuro i dati contabili e utilizzarli tramite strumenti basati sull’IA.

## Miglioramenti

**Un’esperienza AI Chat più produttiva**

- I messaggi già inviati possono ora essere modificati. OneAI genererà una nuova risposta in base alla richiesta aggiornata.
- Il composer della chat è stato riprogettato per offrire un’esperienza più chiara ed efficiente.
- Uno è ora disponibile come finestra di chat mobile, mantenendo l’assistenza più vicina al vostro attuale contesto di lavoro.

**Workflow di documenti e dati più affidabili**

- Facendo clic su «Applica» in un suggerimento di modifica dell’IA, la modifica viene ora applicata in modo affidabile al documento.
- L’elaborazione dei dati e gli strumenti per i dataset sono stati ulteriormente ottimizzati.
- Le viste di compliance migliorate aiutano gli amministratori a tracciare più efficacemente le attività rilevanti.

## Sicurezza

Questa release include un ampio rafforzamento della sicurezza e della compliance per supportare l’uso sicuro di OneAI con i dati aziendali:

- Una modalità di ricerca interna non può più creare contenuti senza l’esplicita conferma dell’utente.
- Le azioni distruttive sono ora contrassegnate in modo chiaro e coerente come irreversibili in tutti gli strumenti interessati.
- Le credenziali n8n sono ora archiviate in forma crittografata.
- Quando un membro viene rimosso, le sue connessioni esterne, come l’accesso a Outlook, vengono disattivate in modo affidabile.
- Ulteriori protezioni rafforzano la sicurezza delle sessioni OAuth e SSO, l’isolamento dei tenant, i ruoli e le autorizzazioni, nonché i workflow n8n.
- Le esportazioni CSV sono meglio protette dall’iniezione di formule, mentre i log di compliance e chat seguono principi più rigorosi di minimizzazione dei dati.

Grazie a Mirko e Pascal per i loro importanti contributi a questi miglioramenti della sicurezza.

## Note importanti sulle modifiche

Nell’ambito della nuova architettura delle autorizzazioni e delle integrazioni, i percorsi esistenti di accesso e configurazione sono stati standardizzati. Dopo l’aggiornamento, gli amministratori dovrebbero verificare:

- L’abilitazione delle integrazioni a livello di organizzazione e le restrizioni a livello di progetto
- Le connessioni n8n e Outlook esistenti
- Ruoli e autorizzazioni per gli strumenti esterni

Questo aiuta a garantire che le politiche di accesso previste restino in vigore.

## Dietro le quinte

Oltre alle funzionalità visibili, abbiamo continuato a sviluppare LLM Routing, l’elaborazione dei documenti, gli strumenti dati e l’architettura della piattaforma per rendere OneAI più potente e resiliente.

Grazie a Pascal, Mirko, Justus, Oliver, Santi e Obaid per i loro contributi a questa release.

_Ambito della release: 660 commit, 2.112 file modificati e 655 pull request._

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

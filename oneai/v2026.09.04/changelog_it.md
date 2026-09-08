# OneAI v2026.09.04 — Condividi app Canvas e gestisci il CRM dal Chat

**Release Date:** 2026-09-08

## Novità principali

### Canvas diventa una mini-app condivisibile
Ora puoi pubblicare le app Canvas in sicurezza tramite un link di condivisione o sul **dominio della tua azienda**. In questo modo, le applicazioni create dall’IA diventano moduli, portali e strumenti pratici per un pubblico esterno.

- I visitatori possono accederere tramite un link e-mail senza bisogno di un account OneAI.
- Le app pubbliche possono visualizzare file e immagini, mentre i visitatori possono caricare file.
- I moduli possono mostrare chi ha inviato una voce e chi invia una risposta può modificarla in seguito.
- I team beneficiano di aggiornamenti in tempo reale più affidabili e di un utilizzo più fluido delle app ad alto traffico.
- Le app Canvas più grandi e sofisticate possono essere modificate dall’IA in modo più rapido e affidabile.

Grazie a **Pascal** e **Justus**, Canvas è ora molto più adatto a casi d’uso esterni sicuri.

### HubSpot, connesso nativamente a OneAI
Il nuovo Connector HubSpot porta **26 strumenti** direttamente in AI Chat. La tua IA ora può fare più che cercare e analizzare dati CRM: può anche preparare attività operative di CRM.

- Creare, aggiornare e associare contatti, aziende, trattative e ticket
- Registrare note, attività, chiamate e riunioni
- Recuperare su richiesta dettagli dei record, campi disponibili e cronologia delle attività
- Esaminare ogni azione di scrittura in un chiaro passaggio di conferma prima dell’esecuzione

Anche la sincronizzazione è più resiliente: problemi di connessione temporanei non causano più la rimozione errata di record esistenti. Grazie a **Mirko** per l’ampio potenziamento delle nostre capacità di Connector.

### Connector nuovi e ampliati
OneAI si connette a più sistemi aziendali e può completare più attività direttamente negli strumenti che già utilizzi.

- **Nuovo: Plytix** – Poni domande sul tuo catalogo prodotti, attributi, varianti e immagini direttamente dal tuo sistema PIM.
- **weclapp** – Più azioni di lettura e scrittura, inclusa una sincronizzazione più resiliente e il download dei PDF delle fatture.
- **ClickUp** – Crea e aggiorna attività, gestisci tag e checklist, con conferma obbligatoria per le modifiche.
- **Fireflies** – Cerca nelle trascrizioni delle riunioni, rinomina riunioni, interrompi il notetaker ed esegui altre azioni.
- **n8n** – Testa i nodi del workflow prima dell’uso e riprendi i workflow in attesa direttamente dal Chat.
- **GitHub, ClickUp, weclapp e lexoffice** – L’accesso API esteso è ora disponibile quando autorizzato.

## Miglioramenti

- **Interazioni più chiare nel Chat:** Quando AI Chat necessita di ulteriori informazioni, ora presenta schede di scelta cliccabili invece di domande solo testuali.
- **Accedi con Apple:** Apple è ora disponibile come opzione di accesso insieme a Google e Microsoft.
- **Nuovi modelli di IA:** Gemini 3.8 Flash, Gemini 3.7 Flash e Grok 4.6 sono ora disponibili. Gemini 3.7 Flash è ora il modello predefinito di Uno per le organizzazioni a pagamento.
- **Presentazioni in linea con il brand:** Carica il tuo modello PowerPoint e le presentazioni generate utilizzeranno automaticamente il design aziendale. Puoi anche inserire direttamente nelle slide immagini da un Knowledge Space.
- **Knowledge Spaces:** Ora i file possono essere rinominati direttamente e l’esplora file è più facile da usare sui dispositivi mobili.
- **Selezione di SharePoint:** Durante la connessione tramite OneDrive, ora vengono mostrati in modo affidabile tutti i siti SharePoint disponibili, anche nei grandi ambienti Microsoft.
- **Connessioni Outlook:** Le connessioni interrotte vengono rilevate immediatamente e possono essere riparate o disconnesse direttamente.
- **Input vocale:** La registrazione ora funziona in modo affidabile in Safari, su iPhone e iPad e in Firefox, anche per registrazioni più lunghe.
- **PDF scansionati:** L’anteprima dei PDF scansionati è ora accurata, più nitida e più stabile.
- **Limiti del team:** Ora è possibile gestire limiti di utilizzo individuali per team con più di dieci membri. OneAI avvisa inoltre gli amministratori quando il limite di un membro supera il budget dell’organizzazione.

## Sicurezza

- **Moduli Canvas protetti:** I moduli pubblici possono aggiornare solo i campi esplicitamente previsti per loro. I campi dati interni restano protetti.
- **Credenziali dei Connector sicure:** Le credenziali HubSpot e ClickUp sono ora archiviate in forma crittografata.
- **Automazione n8n più sicura:** La correzione automatica degli errori non può più reindirizzare silenziosamente le richieste a un host diverso.
- **Protezione delle autorizzazioni in Uno:** I dipendenti non amministratori non possono più usare Uno per identificare gli amministratori dell’organizzazione.

## Correzioni di bug

- Le schede di conferma delle azioni nel Chat non rimangono più invisibili o permanentemente in attesa. Ora puoi vedere in modo affidabile se un’azione è stata completata, rifiutata o non è riuscita.
- Le app Canvas con più file ora funzionano correttamente tramite link di condivisione pubblici e domini personalizzati.
- Anche le app Canvas senza associazioni di dati ora possono essere condivise pubblicamente.
- Alcuni indirizzi e-mail insoliti non causano più errori nelle app Canvas condivise.
- Le risposte Gemini interrotte non vengono più riportate in modo fuorviante come risposte vuote del modello.
- I file GitLab non mostrano più erroneamente una dimensione di «0 byte».
- Le impostazioni dei modelli di IA ora vengono salvate in modo affidabile, anche quando vengono modificate rapidamente.

## Dietro le quinte

Abbiamo ampliato le basi per futuri agenti IA pianificati con workflow di approvazione. Questa funzionalità resta in fase di test interno e non è ancora abilitata per i clienti.

Grazie a **Pascal, Mirko, Justus, Santi, Obaid e Oliver** per i loro contributi a questa release.

*139 pull request, 141 commit e 1.183 file modificati.*

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

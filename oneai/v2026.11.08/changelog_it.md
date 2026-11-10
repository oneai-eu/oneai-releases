# OneAI v2026.11.08 — Spaces più veloci, modifica degli agenti in chat, cestino

**Release Date:** 2026-11-09

## Novità

- **I grandi Spaces si aprono molto più velocemente.** Le cartelle ora vengono caricate una pagina alla volta.
- **Trovare e modificare gli agenti in chat.** Non è più necessario creare un nuovo agente per ogni modifica.
- **Cestino per i file eliminati.** Potete ripristinare i file eliminati per 30 giorni. Dopo questo periodo vengono eliminati definitivamente.
- **Tempo risparmiato stimato.** Passate il mouse sull'importo in € sotto una nuova risposta. Il valore è una stima indicativa, non una misurazione.
- **Scheda Roadmap in What's New.** La scheda è disponibile, ma ancora vuota. Le voci arriveranno in seguito.

## ⚠️ Cosa cambia per voi

Controllate questi punti se utilizzate queste funzioni:

- **Agenti con Spaces o connessioni definiti:** se l'utente non ha accesso a uno di essi, l'agente non prosegue più con permessi ridotti, ma viene rifiutato. Le esecuzioni pianificate falliscono e il relativo trigger viene sospeso. Concedete l'accesso o modificate l'agente.
- **Agenti non supervisionati:** ora si fermano prima delle azioni irreversibili e prima degli strumenti MCP senza annotazione, finché ciò non viene consentito nell'organizzazione e nell'agente.
- **Conferme:** le azioni irreversibili ora mostrano sempre una scheda di conferma, anche con una finestra di fiducia aperta.
- **Dataset:** i modelli ora scrivono SQL. I precedenti strumenti come `insert_data`, `update_data` e `delete_data` non esistono più e gli agenti salvati li perdono senza preavviso. Controllate gli agenti che scrivono nei dataset. La modifica delle righe, la creazione di tabelle e l'importazione CSV continuano a funzionare. Le colonne non si possono più modificare nella schermata dei dataset, ma solo in chat: il modello esegue la modifica e voi la confermate.
- **App Canvas e dashboard con dataset:** le abbiamo migrate al nuovo database. Se un'app non salva più o una query non riesce, contattateci.
- **oneAI Standard:** abbiamo passato il modello oneAI Standard a DeepSeek V4.1, ospitato in Germania.
- **Bot di Teams:** la connessione ora richiede che l'accesso Microsoft sia abilitato per voi.

## Grazie

A Pascal, Justus, Obaid, Mirko, Oliver e Santi.

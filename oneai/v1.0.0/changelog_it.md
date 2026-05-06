# OneAI 1.0 — Pronto per la produzione con Credit Pool, Partner Program e oltre 80 miglioramenti

**Release Date:** 2026-05-06

Con OneAI 1.0 lasciamo ufficialmente la fase beta.

Questa release rende OneAI pronto per l’uso in produzione enterprise: controllo centralizzato del budget IA, un nuovo Partner Program per organizzazioni gestite, autenticazione a due fattori tramite app e una pipeline di elaborazione documenti completamente rinnovata.

## Highlights

### Credit Pool per il controllo centralizzato dei costi
Le organizzazioni nel piano Team ora dispongono di un **budget IA centralizzato**.

- Gli admin possono assegnare **budget individuali per utente**
- Controllo proattivo degli sforamenti
- **Email automatiche di avviso al raggiungimento delle soglie**
- Il dashboard mostra il costo totale reale, incluse le richieste in cache

L’utilizzo dell’IA diventa prevedibile, trasparente e controllabile — ideale per team compliance e finance.

Un grande grazie a **orehman3035** per aver sviluppato end-to-end il nuovo sistema di crediti e abbonamenti.

### Partner Program per organizzazioni gestite
Con il nuovo **Partner Program**, le organizzazioni possono operare senza un proprio abbonamento Stripe.

- I partner gestiscono la fatturazione in modo centralizzato
- Log dedicato degli eventi di billing per la massima trasparenza
- Nuova pagina dei dettagli partner nelle impostazioni

Perfetto per società di consulenza, provider IT e reseller enterprise.

### Autenticazione a due fattori (TOTP)
Sicurezza di livello enterprise: gli utenti possono ora abilitare un’**app di autenticazione (es. Google Authenticator, 1Password)** come secondo fattore.

- Codici TOTP come alternativa ai token via email
- Integrazione fluida nel login
- Flusso di configurazione stabile e affidabile

Grazie a **Justus Zorn** per l’implementazione.

### L’IA può creare progetti e generare diagrammi Mermaid
Ora l’IA può:

- **Creare automaticamente nuovi progetti** su richiesta
- Generare **diagrammi Mermaid validi** utilizzando un riferimento sintattico integrato

Questo riduce la configurazione manuale e rende la documentazione visiva molto più semplice.

Grazie a **Mirko Tochtermann** e **Pascal Schüler**.

### Audit log con sistema a semaforo
La compliance diventa più trasparente:

- Le voci dell’audit log mostrano ora un **livello di rischio codificato a colori**
- Nuovo filtro per livello di rischio
- Audit log del provider con dati tenant anonimizzati

Ideale per revisioni interne e documentazione EU AI Act. Grazie a **Oliver Rasch**.

---

## Performance & Scalabilità

### Coda di embedding equa
Abbiamo riprogettato completamente l’elaborazione dei documenti.

- Distribuzione equa delle risorse tra organizzazioni e Knowledge Spaces
- I caricamenti di grandi dimensioni non bloccano più altri team
- Tempi massimi di attesa prevedibili

Inoltre:

- Costi e latenza ridotti grazie a un retrieval semplificato
- Elaborazione più stabile di PDF e immagini di grandi dimensioni
- Scritture batch nel database vettoriale per maggiore affidabilità
- Gestione automatica dei rate limit di GitHub

Ottimo lavoro di **Pascal Schüler**, che ha reso la pipeline di embedding pronta per la produzione.

### Un’app sensibilmente più veloce
- Asset caching abilitato
- Lazy loading per dashboard e lista progetti
- Bundle ottimizzato (nessuna libreria duplicata)
- Risolti errori di caricamento dei chunk sotto carico elevato

OneAI ora risulta significativamente più veloce e stabile.

---

## Miglioramenti quotidiani

- Upload file tramite drag-and-drop direttamente nella pagina iniziale della chat
- Pannello artefatti completamente utilizzabile su mobile
- Riferimenti alle fonti cliccabili nella chat
- L’IA risponde automaticamente nella lingua dell’utente
- Personal Space collegato automaticamente al progetto personale
- Nuova scheda “Conflicts” nelle impostazioni del progetto
- Umlaut tedeschi consentiti nei nomi di progetti e team

Molti piccoli miglioramenti — grande impatto nel lavoro quotidiano.

---

## Sicurezza

Abbiamo implementato diversi miglioramenti di sicurezza:

- Il cache di React Query viene cancellato al login (previene la visibilità tra account in browser condivisi)
- Salvaguardie di memoria per l’elaborazione di immagini e PDF
- Limiti di contenuto nel Connettore ClickUp per prevenire heap exhaustion

Inoltre, il riassunto delle chat ora viene eseguito sulla **nostra infrastruttura dedicata nell’UE** — la cronologia delle chat non lascia più l’UE.

---

## Breaking Changes

### Rimosso il Beta Code Gate
La registrazione è ora pubblica — non sono più necessari codici di invito.

Nessuna azione richiesta.

### Google Sign-In e Google Drive temporaneamente disabilitati
Google SSO e il Connettore Google Drive sono temporaneamente disabilitati.

Si prega di utilizzare:
- OneDrive
- SharePoint
- GitHub

La riattivazione avverrà in una release futura.

### Rimosso il contextual retrieval
Il precedente approccio di embedding contestuale è stato sostituito con un metodo più efficiente.

Per la migliore qualità di ricerca, consigliamo di **rieseguire l’embedding dei documenti esistenti**.

---

## Under the Hood

- 43 dipendenze aggiornate
- Unit test per la logica di pricing e crediti
- Infrastruttura di tracing migliorata
- Pipeline di deployment automatizzata
- Standardizzazione delle convenzioni di naming per le migrazioni database

---

OneAI 1.0 rappresenta 96 commit e 88 pull request.

Un ringraziamento speciale a **Pascal (47 changes)**, **orehman3035**, **Justus**, **Santi**, **Oliver** e **Mirko** per aver reso possibile questo lancio in produzione.

—
96 commit · 88 PRs · 414 file modificati · 7 contributor

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

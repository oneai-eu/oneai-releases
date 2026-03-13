# OneAI v0.3.3-beta — Google SSO, condivisione sicura degli Artifacts e AI Chat più robusta

**Release Date:** 2026-03-13

## Highlights

### Google Sign-In come nuovo provider SSO
Oltre a Microsoft, OneAI ora supporta **Google Single Sign-On (SSO)** — sia per l’accesso sia per invitare nuovi membri del team.

- Accedi con il tuo account Google in pochi secondi
- Invia inviti basati su Google direttamente dalla finestra dei membri
- Integrazione fluida con ambienti Google Workspace

Questo semplifica notevolmente l’onboarding per le organizzazioni che utilizzano Google.

---

### Condividere, copiare e confermare gli Artifacts
Gli Artifacts sono ora completamente pronti per il lavoro di squadra grazie a un modello di condivisione chiaro e controllato.

**Novità:**
- Condividi gli Artifacts con il tuo team o crea una **copia privata**
- Selezione ricercabile degli Artifacts con autore, ultimo aggiornamento e stato di condivisione
- Schede di conferma e creazione integrate direttamente nell’AI Chat

Aspetto fondamentale: quando l’IA desidera creare un Artifact, ora è richiesta una **conferma esplicita dell’utente** prima dell’esecuzione. Nessuna modifica inattesa — il pieno controllo resta al tuo team.

Un grande grazie a Pascal per aver implementato l’intero workflow di condivisione e conferma.

---

### Messaggi di errore chiari in AI Chat
Gli errori silenziosi appartengono al passato.

Se qualcosa va storto durante la generazione della risposta — ad esempio limiti di contesto superati, stream concorrenti o problemi di autorizzazione — l’AI Chat mostra ora **messaggi di errore chiari e comprensibili direttamente nella conversazione**.

Questo significa:
- Maggiore trasparenza
- Meno confusione per gli utenti
- Risoluzione più rapida nel lavoro quotidiano

---

### Ricerca del codice sorgente GitHub nei Knowledge Spaces
I Knowledge Spaces collegati a GitHub ora elaborano **oltre 60 tipi di file di codice e configurazione**, tra cui TypeScript, Python, Go, Rust, Java, C/C++, YAML, SQL, Dockerfile e Terraform.

Ora puoi:
- Cercare e analizzare codice sorgente
- Porre domande architetturali nell’AI Chat
- Utilizzare i repository come base di conoscenza strutturata

Grazie a Mirko per aver ampliato in modo significativo le nostre capacità di elaborazione documentale per il codice.

---

### Ricerca weclapp più intelligente con embedding narrativi
I dati weclapp (ad es. clienti, ordini, fatture) vengono ora trasformati in **testi narrativi ricchi di contesto** prima dell’elaborazione.

Il risultato:
- Qualità di ricerca sensibilmente migliorata
- Risposte IA più contestuali
- Maggiore accuratezza nei workflow basati su RAG

## Improvements

- **Invitare più membri in sequenza** con finestra persistente e panoramica degli utenti invitati
- **Feedback migliorato nell’elaborazione dei documenti** con indicatori di stato più chiari e filtri
- **Scorrimento della chat più fluido** senza sovrapposizioni visive
- **Parsing più affidabile dei file Outlook MSG**
- **Gli errori di consegna email ora vengono rilevati e registrati** senza bloccare gli inviti
- Internazionalizzazione completa di tutti i testi dell’interfaccia per un supporto multilingue coerente

## Breaking Changes

### I Google Drive Spaces sono ora in sola lettura
I Knowledge Spaces collegati a Google Drive utilizzano ora esclusivamente lo scope `drive.readonly`.

**Cosa cambia:**
- Le funzioni di caricamento ed eliminazione per Google Drive sono state rimosse

**Azione richiesta:**
- Ricollega i Google Drive Spaces esistenti
- La nuova connessione richiederà automaticamente lo scope ridotto in sola lettura

Questa modifica riduce intenzionalmente i permessi al minimo necessario e rafforza la compliance.

## Under the Hood

- Architettura di streaming della chat migliorata per una gestione robusta degli errori
- Pipeline di embedding ottimizzata per dati di codice ed ERP
- Standard di qualità del codice più rigorosi e internazionalizzazione coerente

---

Un grande ringraziamento a **Pascal** (Google SSO, condivisione degli Artifacts, robustezza della chat e numerosi miglioramenti UX) e **Mirko** (embedding del codice GitHub e ottimizzazione weclapp) per questa solida release.

_14 PR · 213 file modificati · 4.514 inserimenti · 2 contributor_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

# OneAI v0.2.21-beta — Governance centralizzata dei modelli, Spaces stabili e modernizzazione dell’elaborazione documenti

**Release Date:** 2026-02-24

Con v0.2.21-beta stiamo rafforzando OneAI in tre aree critiche: **governance dei modelli di IA**, **stabilità per Knowledge Spaces di grandi dimensioni** e una **pipeline di elaborazione dei documenti completamente modernizzata**.

---

## Highlights

### Configurare i modelli di IA per organizzazione e team
Gli amministratori possono ora definire centralmente:

- **Quali modelli di IA sono disponibili a livello di organizzazione**
- Il **modello predefinito** per tutti gli utenti
- Modelli aggiuntivi assegnati a team specifici

Tutte le impostazioni sono disponibili nella nuova area Admin su `/dashboard/admin`, organizzata con una chiara navigazione a tab.

**Cosa significa per voi:**
- Governance chiara sull’utilizzo dei modelli (in linea con i requisiti dell’EU AI Act)
- Nessun accesso non intenzionale a modelli non approvati
- Un modello predefinito coerente per risultati affidabili in tutta l’azienda

Le preferenze di modello precedentemente salvate per utente sono state sostituite dalla nuova logica a livello di organizzazione. Il modello predefinito definito dall’admin si applica ora automaticamente.

Un grande grazie a Orehman (con il supporto di Pascal) per aver realizzato questo sistema completo di governance dei modelli.

---

### Niente più crash del browser negli Spaces di grandi dimensioni
Nei Knowledge Spaces molto grandi con migliaia di documenti, l’elevato utilizzo di memoria poteva causare rallentamenti o crash del browser.

Il monitoraggio degli embeddings ora carica solo dati di stato aggregati invece delle liste complete dei file.

**Risultato:**
- Oltre il **99% di riduzione del trasferimento dati** (ad esempio, da ~1,6 MB a ~5 KB per oltre 11.000 file)
- Stabilità significativamente migliorata negli Spaces di grandi dimensioni
- Aggiornamenti di stato più rapidi ed efficienti

Grazie a Mirko (co-autore: Pascal) per questo importante miglioramento delle performance.

---

### Elaborazione di PDF e immagini completamente modernizzata
Abbiamo riprogettato radicalmente l’elaborazione di PDF, documenti scansionati e immagini.

- L’analisi delle immagini ora utilizza un **modello di vision IA configurabile** invece del tradizionale OCR
- La precedente pipeline di rendering PDF, poco affidabile, è stata rimossa
- I PDF scansionati e basati su immagini vengono ora elaborati **in modo molto più affidabile**

**I vostri vantaggi:**
- Migliore estrazione dai documenti scansionati
- Recupero delle informazioni più coerente nei Spaces
- Meno risultati vuoti o incompleti nei documenti elaborati

Con questa release, Justus ha portato l’architettura tecnica dell’elaborazione documentale a un nuovo livello.

---

## Miglioramenti

- Route Admin consolidate sotto `/dashboard/admin/*` (Payment, SCIM, Private Models)
- Applicazione più rigorosa delle regole di accesso ai modelli in Chat e Distillation
- Sincronizzazione più affidabile degli Artifacts tra le diverse viste
- 40 dipendenze aggiornate per maggiore sicurezza e stabilità
- Framework backend (Yedra) aggiornato

---

## Correzioni di bug

Una serie di problemi UI risolti in un’unica release:

- Design delle chat card più pulito
- Finestra di conferma prima dell’eliminazione degli Artifacts
- La vista Artifact è nuovamente scrollabile
- Corretto il layout della toolbar nei pannelli minimizzati
- Il pulsante “Replace existing files” funziona di nuovo in modo affidabile

Nel complesso, questo si traduce in un’esperienza utente quotidiana decisamente più fluida.

---

## Breaking Changes

### La gestione dei modelli è ora basata sull’organizzazione
- Il precedente campo per utente `preferred_model` è stato rimosso
- L’accesso ai modelli è ora gestito esclusivamente a livello di organizzazione e team
- Il modello predefinito definito dall’admin si applica automaticamente a tutti gli utenti

**Azione richiesta:** verificate la configurazione dei modelli nella nuova area Admin.

### Nuove variabili d’ambiente richieste per il modello di vision
La nuova elaborazione di immagini e PDF richiede:

- `VISION_URL`
- `VISION_KEY`
- `VISION_MODEL`

Configurarle prima del deployment.

### URL Admin aggiornati
- `/dashboard/payment` → `/dashboard/admin/payment`
- `/dashboard/private-models` → `/dashboard/admin/private-models`
- `/dashboard/scim` → `/dashboard/admin/scim`

Aggiornate eventuali bookmark o documentazione interna di conseguenza.

---

Un sentito grazie a Orehman, Justus, Mirko e Pascal per questa importante release.

_7 PRs · 156 files changed · 4,346 insertions · 3,268 deletions · 4 contributors_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

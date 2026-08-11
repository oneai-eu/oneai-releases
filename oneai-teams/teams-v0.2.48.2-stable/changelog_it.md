# OneAI teams-v0.2.48.2-stable — Rafforzamento della sicurezza e del monitoraggio

**Release Date:** 2026-08-11

## Sicurezza

Abbiamo risolto una vulnerabilità di sicurezza che, in determinate circostanze, poteva rendere accessibile un endpoint di monitoraggio tramite variazioni tra maiuscole e minuscole. La protezione degli accessi viene ora applicata in modo coerente.

Abbiamo inoltre rafforzato diverse misure di protezione nei nostri servizi operativi:

- Le informazioni sensibili nei messaggi di arresto vengono oscurate in modo più affidabile.
- La convalida delle chiavi di crittografia all’avvio è stata standardizzata.
- I valori di percorso molto lunghi non possono più compromettere l’output dei log.

## Miglioramenti

- Gli avvisi di sistema a livello di server sono ora visibili in modo affidabile nel monitoraggio, aiutando i team operativi a individuare i problemi e a intervenire prima.
- I dati di errore nella dashboard di monitoraggio sono ora organizzati in modo più chiaro.

## Sotto il cofano

- I controlli automatizzati successivi al deployment funzionano di nuovo in modo affidabile.
- La documentazione di release e le informazioni sulla versione sono state aggiornate.

Grazie a **Mirko** per aver realizzato questi miglioramenti di sicurezza e operatività.

_13 commit · 32 file modificati_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

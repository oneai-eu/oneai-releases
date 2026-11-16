# OneGlue v0.310.0 — Neuigkeiten

**Veröffentlicht am:** 2026-11-16

**KI-Assistent**

- Wählst du kein Modell aus, nimmt der Assistent ein Modell, das in deiner oneAI-Organisation freigeschaltet ist. Die Modellauswahl zeigt dazu „Standard (Modellname)“. Wählst du selbst ein Modell, das nicht freigeschaltet ist, startet der Lauf nicht, und die Meldung nennt die verfügbaren Modelle.
- Große Listen und Dokumente bekommt der Assistent gekürzt, zusammen mit der Gesamtzahl. Wird eine Anfrage trotzdem zu groß oder ist oneAI nicht erreichbar, siehst du, was passiert ist und was du tun kannst.

**Zugang für den Assistenten auf Linux-Geräten**

- Bei neuen Linux-Installationen des GlueAgent legt OneGlue ein eingeschränktes Konto ohne Administratorrechte an und richtet den Zugang für den Assistenten selbst ein. Bestehende Geräte bekommen den Zugang automatisch, sobald ihr GlueAgent mindestens Version 0.5.32 hat. Sonst zeigt die Karte „Zugang für Assistent“ auf der Konfigurationsseite den einmaligen Befehl und den Button „Einrichten“.
- Diagnosen des Assistenten laufen über den GlueAgent, solange dieser verbunden ist.

**Weitere Verbesserungen**

- Netzwerkkarten, die ein GlueAgent nicht mehr meldet, verschwinden aus der Konfiguration. Kurzlebige Container-Netzwerke (z. B. Docker) werden nicht übernommen. Von dir gepflegte Angaben bleiben erhalten.
- Tenant-Admins können persönliche API-Schlüssel widerrufen. Wird ein Nutzer gesperrt, werden seine Schlüssel automatisch widerrufen.

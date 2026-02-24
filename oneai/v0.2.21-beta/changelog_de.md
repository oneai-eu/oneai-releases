# OneAI v0.2.21-beta — Zentrale Modell-Governance, stabile Spaces & moderne Dokumentenverarbeitung

**Release Date:** 2026-02-24

Mit v0.2.21-beta machen wir OneAI in drei zentralen Bereichen deutlich stärker: **Governance für KI-Modelle**, **Stabilität bei großen Wissensräumen** und eine **grundlegend modernisierte Dokumentenverarbeitung**.

---

## Highlights

### KI-Modelle für Organisation und Teams konfigurieren
Admins können ab sofort zentral festlegen:

- **Welche KI-Modelle organisationsweit verfügbar sind**
- Welches Modell als **Standard-Modell** genutzt wird
- Welche Teams **zusätzliche Modelle** erhalten

Alle Einstellungen sind im neuen Admin-Bereich unter `/dashboard/admin` gebündelt – übersichtlich strukturiert mit klarer Tab-Navigation.

**Ihr Mehrwert:**
- Klare Governance über Modellnutzung (wichtig im Kontext des EU AI Act)
- Keine Schattennutzung nicht freigegebener Modelle
- Einheitliches Standard-Modell für konsistente Ergebnisse

Bestehende, individuell gespeicherte Modellpräferenzen wurden zugunsten der neuen Organisationslogik abgelöst. Ab sofort gilt das von Admins definierte Standard-Modell.

Großer Dank an Orehman (mit Unterstützung von Pascal) für den Aufbau dieses umfassenden Modell-Governance-Systems.

---

### Kein Browser-Absturz mehr bei großen Spaces
In sehr großen Wissensräumen mit tausenden Dokumenten konnte es bisher zu hohem Speicherverbrauch im Browser kommen – im Extremfall bis zum Absturz.

Das Embedding-Monitoring lädt jetzt nur noch aggregierte Statusinformationen statt vollständiger Dateilisten.

**Ergebnis:**
- Über **99 % weniger Datenübertragung** (z. B. von ~1,6 MB auf ~5 KB bei 11.000+ Dateien)
- Deutlich stabileres Verhalten bei großen Spaces
- Schnellere Status-Updates

Danke an Mirko (Co-Author: Pascal) für diese spürbare Performance-Verbesserung.

---

### PDF- und Bildverarbeitung komplett modernisiert
Die gesamte Verarbeitung von PDFs, gescannten Dokumenten und Bildern wurde grundlegend überarbeitet.

- Bilderkennung läuft jetzt über ein **konfigurierbares Vision-KI-Modell** statt klassischer OCR
- Die bisher fehleranfällige PDF-Rendering-Pipeline wurde entfernt
- Gescannte und bildbasierte PDFs werden jetzt **deutlich zuverlässiger verarbeitet**

**Ihr Mehrwert:**
- Bessere Extraktion aus gescannten Dokumenten
- Konsistentere Ergebnisse in Wissensräumen
- Weniger fehlerhafte oder leere Inhalte bei der Verarbeitung

Justus hat hier die Dokumentenverarbeitung technisch und architektonisch auf ein neues Niveau gehoben.

---

## Verbesserungen

- Admin-Routen konsolidiert unter `/dashboard/admin/*` (z. B. Payment, SCIM, Private Models)
- Bessere Durchsetzung von Modellberechtigungen in Chat und Distillation
- Konsistentere Synchronisierung bei Artefakten zwischen verschiedenen Ansichten
- 40 Abhängigkeiten aktualisiert für Sicherheit und Stabilität
- Backend-Framework (Yedra) aktualisiert

---

## Fehlerbehebungen

Mehrere UI-Probleme in einem Release gebündelt behoben:

- Aufgeräumtes Design der Chat-Karten
- Sicherheitsabfrage beim Löschen von Artefakten
- Artefakt-Ansicht wieder scrollbar
- Toolbar-Layout bei minimierten Panels korrigiert
- „Datei ersetzen“-Button funktioniert wieder zuverlässig

Das sorgt für ein insgesamt deutlich runderes Nutzungserlebnis im Alltag.

---

## Breaking Changes

### Modellverwaltung jetzt organisationsbasiert
- Das bisherige per-User-Feld `preferred_model` wurde entfernt
- Modellwahl erfolgt nun ausschließlich über Organisation und Teams
- Das von Admins definierte Standard-Modell gilt automatisch für alle

**Aktion:** Bitte prüfen Sie Ihre Modellkonfiguration im neuen Admin-Bereich.

### Neue Umgebungsvariablen für Vision-Modell
Für die Bild- und PDF-Verarbeitung sind jetzt erforderlich:

- `VISION_URL`
- `VISION_KEY`
- `VISION_MODEL`

Bitte vor Deployment konfigurieren.

### Geänderte Admin-URLs
- `/dashboard/payment` → `/dashboard/admin/payment`
- `/dashboard/private-models` → `/dashboard/admin/private-models`
- `/dashboard/scim` → `/dashboard/admin/scim`

Bitte ggf. Bookmarks oder interne Dokumentationen aktualisieren.

---

Vielen Dank an Orehman, Justus, Mirko und Pascal für dieses umfangreiche Release.

_7 PRs · 156 Dateien geändert · 4.346 Einfügungen · 3.268 Löschungen · 4 Mitwirkende_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

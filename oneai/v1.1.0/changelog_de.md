# OneAI v1.1.0 — Das größte Release seit v1.0

**Release Date:** 2026-05-28

OneAI v1.1.0 ist ein großer Schritt nach vorn: **AI Chat wird kreativer**, **Wissensräume werden besser steuerbar** und **Admins erhalten mehr Kontrolle für regulierte Umgebungen**. Dazu kommen neue Konnektoren, eine deutlich bessere Projektorganisation und viele Stabilitätsverbesserungen im Alltag.

## Highlights

- **Bilder direkt im AI Chat bearbeiten**
  - Generierte oder hochgeladene Bilder lassen sich jetzt per natürlicher Sprache anpassen.
  - Beispiele wie „mach den Hintergrund blauer“ oder „entferne die Person links“ funktionieren direkt im laufenden Gespräch.
  - Danke an **Mirko** für dieses große Upgrade im Chat-Erlebnis.

- **Volltextsuche über alle Chat-Inhalte**
  - Die Suche findet jetzt nicht mehr nur Chat-Titel, sondern auch Inhalte aus euren Nachrichten.
  - Das macht frühere Gespräche deutlich leichter auffindbar — selbst wenn nur noch ein Satzfragment bekannt ist.
  - Danke an **Pascal**, der die Suche spürbar nützlicher gemacht hat.

- **Projekte organisieren mit Archiv, Tags und Bulk-Aktionen**
  - Projekte lassen sich jetzt archivieren statt löschen.
  - Eigene Tags helfen bei der Strukturierung, und mehrere Projekte können gleichzeitig bearbeitet werden.
  - Zusätzlich wurde die Projektübersicht vollständig responsiv überarbeitet und um eine eigene Tag-Verwaltung ergänzt.

- **Spaces pausieren statt löschen**
  - Org-Admins können Wissensräume jetzt deaktivieren, ohne Inhalte oder Konfigurationen zu verlieren.
  - Pausierte Spaces sind für Mitglieder unsichtbar und können später jederzeit wieder aktiviert werden.
  - Das ist besonders hilfreich für Compliance-Reviews, Projektpausen oder temporäre Abschaltungen.

- **Smartere Antworten mit klarer Quellenkontrolle**
  - Zwei neue Organisationseinstellungen helfen, Antworten gezielt auf interne Quellen zu stützen.
  - Auf Wunsch antwortet OneAI nur dann, wenn die Aussage tatsächlich belegt ist.
  - Für regulierte Branchen ist das ein besonders wichtiges Governance-Feature. Danke an **Mirko** für die Umsetzung dieser zentralen SAG-Anforderungen.

- **Neue Konnektoren: HubSpot und SMB**
  - **HubSpot** ist jetzt als neue Datenquelle verfügbar und bringt CRM-Inhalte in OneAI.
  - Mit dem neuen **SMB-Konnektor** können auch Netzlaufwerke aus dem internen Unternehmensnetz als Wissensquelle angebunden werden.
  - Danke an **Pascal** für HubSpot und an **Justus** für den SMB-Konnektor und die dafür nötige Agent-Basis.

## Verbesserungen

- **MCP-Server für externe AI-Tools**
  - Externe Tools wie Cursor, Claude Desktop, Copilot oder n8n können OneAI jetzt über den offenen MCP-Standard anbinden und Wissensquellen durchsuchen.
  - Danke an **Santi** für diese wichtige Erweiterung für technische Teams.

- **Verbrauch, Budgets und Overage besser im Blick**
  - Im Abo-Bereich gibt es einen neuen Verbrauchs-Tab mit Budget-Limits, Live-Auslastung und Overage-Kontrolle.
  - Das Dashboard zeigt Abrechnung und Nutzung außerdem übersichtlicher mit neuen KPI-Karten und besserer Struktur.
  - Danke an **Obaid** für mehr Transparenz rund um Nutzung und Kosten.

- **Projekt-Dateien jetzt mit vertrauter Explorer-Ansicht**
  - Die Dateiansicht in Projekten nutzt jetzt denselben File-Explorer wie in Spaces.
  - Das sorgt für eine einheitlichere Bedienung bei Vorschau, Navigation und Aktionen.

- **Reconnect für Outlook und OneDrive**
  - Abgelaufene Verbindungen können jetzt mit einem Klick erneuert werden, ohne einen Space neu anzulegen.
  - Das reduziert Administrationsaufwand deutlich.

- **Bessere Sichtbarkeit im Betrieb**
  - Der Status von pausierten Spaces wird auf Projekt- und Space-Detailseiten klar angezeigt.
  - Der OneAI-Agent zeigt seinen Online-Status jetzt laufend aktualisiert an.
  - Add-on-Käufe werden sofort sichtbar, ohne dass ein Reload nötig ist.

## Fehlerbehebungen

- **Dokumentenverarbeitung läuft robuster**
  - Große Dokumente und langsam konvertierte Dateien werden zuverlässiger verarbeitet.
  - HTML-Anhänge aus E-Mails und Uploads werden jetzt korrekt übernommen und für Wissensräume nutzbar gemacht.
  - Ein kritischer Memory-Loop bei bestimmten Outlook-E-Mails wurde behoben, wodurch die Dokumentenverarbeitung unter Last deutlich stabiler läuft.
  - Danke an **Mirko** und **Pascal** für die starke Verbesserung in diesem Kernbereich.

- **Microsoft- und Teams-Anbindungen stabilisiert**
  - Die Anmeldung im Teams-Add-In funktioniert wieder zuverlässig, auch in Hybrid-AD-Umgebungen.
  - Microsoft-Webhooks geraten bei fehlgeschlagenen Verlängerungen nicht mehr in Endlosschleifen.
  - OneDrive-Reconnect leitet jetzt zuverlässig zurück in den richtigen Space.

- **Synchronisierung und Artefakte verhalten sich konsistenter**
  - Cloud-Syncs brechen bei doppelten Pfaden nicht mehr ab.
  - Chat-Artefakte sind jetzt korrekt auf das jeweilige Projekt begrenzt.
  - Der Indexierungsstatus von Dokumenten ist sichtbar, sodass schneller klar ist, wann Inhalte für Antworten bereitstehen.

- **Bessere Darstellung und sauberere Sessions**
  - ASCII- und Mermaid-Diagramme werden im Chat wieder korrekt dargestellt.
  - Abgelaufene Sitzungen führen sauber zurück zur Anmeldung statt in einen Fehlerzustand.
  - Magic Links funktionieren wieder korrekt für E-Mail-Adressen mit Pluszeichen.

## Security

- **Sicherere Identitätszuordnung bei Microsoft/Teams**
  - Die Zuordnung von Microsoft-Entra-Identitäten basiert jetzt robuster auf eindeutigen Tenant- und Benutzerkennungen statt nur auf E-Mail-Adressen.
  - Das reduziert das Risiko von Fehlzuordnungen und härtet die Teams-Anmeldung insbesondere in Hybrid-AD-Szenarien.

- **Agent-Tokens werden nicht mehr im Klartext gespeichert**
  - Upload- und Download-Tokens des OneAI-Agent werden jetzt gehasht gespeichert.
  - Das verbessert den Schutz sensibler Verbindungsdaten deutlich.

## Unter der Haube

- Die Connector-Architektur wurde grundlegend vereinheitlicht und schafft eine sauberere Basis für künftige Integrationen.
- Zusätzlich haben wir die Testabdeckung zentraler Backend-Bausteine deutlich erweitert, um Stabilität und Vorhersagbarkeit im Betrieb weiter zu erhöhen.

Danke an **Pascal**, **Mirko**, **Obaid**, **Justus** und **Santi** für dieses Release.

*43 Commits, 43 PRs, 271 geänderte Dateien*

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

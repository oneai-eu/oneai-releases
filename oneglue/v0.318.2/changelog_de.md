# OneGlue v0.318.2 — Neuigkeiten

**Veröffentlicht am:** 2026-11-22

**Schönere Dokumente**

- Dokumente zeigen jetzt Mermaid-Diagramme (Fluss-, Sequenz-, Zustands-, ER-, Gantt-Diagramme und weitere) direkt in der Leseansicht, im hellen und im dunklen Design. Ein Klick auf ein Diagramm öffnet eine Großansicht mit Zoom. Ein fehlerhaftes Diagramm zeigt die Fehlermeldung und seinen Quelltext statt einer leeren Stelle.
- Code- und Skriptblöcke (PowerShell, C#, Python, Bash, SQL, JSON, YAML und weitere) sind farbig hervorgehoben. Jeder Block nennt seine Sprache und hat einen Knopf zum Kopieren. Auch der Editor hebt Code jetzt farbig hervor.
- Überschriften gliedern ein Dokument in klare Kapitel, und `---` setzt einen sichtbaren Trennstrich. Ab drei Kapiteln steht rechts ein Inhaltsverzeichnis, das beim Lesen mitläuft. Jede Überschrift hat einen Link, den Sie kopieren und teilen können.
- `> [!NOTE]`, `[!TIP]`, `[!IMPORTANT]`, `[!WARNING]` und `[!CAUTION]` erscheinen als farbige Kästen, Tabellen sind übersichtlicher, und „Drucken → Als PDF speichern“ ergibt ein sauberes Dokument ohne Navigation.
- oneAI kennt diese Formatierung und nutzt sie, wenn es Dokumente für Sie anlegt oder ändert.
- Im Aufdecken-Dialog eines sensiblen Dokuments wird kopierter Code nach 30 Sekunden aus der Zwischenablage gelöscht.

**Kunden einladen**

- Wenn Sie einen Kunden mit dauerhaftem Konto einladen, zeigt der Dialog, wie viele Passwörter Mitglieder dieser Organisation aufdecken können, mit Liste. Jeden Eintrag können Sie direkt dort einschränken.
- Schließt Ihr Kunde den Einladungs-Assistenten nicht ab, löscht OneGlue seine Angaben 30 Tage nach Ablauf der Einladung. Die Willkommensseite sagt ihm das vorher.
- Derselbe Domain-Name und dasselbe Zertifikat können jetzt in mehreren Organisationen geführt werden. Ein Duplikat wird nur innerhalb derselben Organisation abgelehnt.

**Domains und Uploads**

- Live-DNS und Registrar-Abgleich nutzen den Registrar-Zugang Ihres Tenants nur für Domains, die ein Tenant-Admin damit verknüpft hat.
- Eine Datei, die der Virenscanner nicht vollständig prüfen kann, zum Beispiel ein zu tief verschachteltes Archiv, wird abgelehnt. Die Meldung nennt die Grenze. Als virenfrei gespeichert wird eine Datei nur nach einer vollständigen Prüfung.

# OneGlue v0.157.0 — Neuigkeiten

**Veröffentlicht am:** 2026-07-02

Drei Dinge kommen in diesem Release zusammen: eine verständliche Übersicht über alle Neuerungen, ein KI-Assistent, der jetzt sicher auf Ihren Geräten handeln kann, und eine umfassende Sicherheitshärtung, die die gesamte Plattform im Hintergrund robuster macht. Das ist jetzt neu.

## Dieser Changelog & Release Notes

Wir öffnen unsere Release Notes. OneGlue verbessert sich ständig, doch bislang geschah das meiste davon still im Hintergrund — Sie bemerkten eine neue Schaltfläche oder eine schnellere Seite, aber die vollständige Geschichte lag in technischen Protokollen verborgen. Diese Seite ändert das: eine klare, verständliche Aufzeichnung der Neuerungen, geschrieben für die Menschen, die OneGlue tagtäglich nutzen.

- **Alle Änderungen auf einen Blick.** Updates werden zu aussagekräftigen Meilensteinen zusammengefasst — der Geschichte dessen, was wir ausgeliefert haben — statt zu einer Wand aus Versionsnummern, die Sie erst entschlüsseln müssten.
- **Der Nutzen zählt, nicht die Technik.** Jeder Eintrag erklärt, was Sie jetzt tun können und was sicherer, schneller oder einfacher wurde — in Alltagssprache statt in Ingenieursbegriffen.
- **In Ihrer Sprache, immer aktuell.** Der Changelog ist lokalisiert und wird mit jedem neuen Feature aktuell gehalten, sodass Sie nie lange suchen müssen, um zu erfahren, was neu ist.

## Ihr KI-Assistent, jetzt tatkräftig

Sobald Ihr OneGlue-Workspace mit oneAI verbunden ist, steht Ihnen ein integrierter KI-Assistent überall in der Anwendung zur Verfügung. Er versteht Ihre IT-Dokumentation und hilft Ihnen, Antworten in natürlicher Sprache zu finden — und kann, wenn Sie es genehmigen, echte Aktionen auf Ihren verbundenen Geräten ausführen. Das Ziel ist ein echter Arbeitspartner, der in OneGlue lebt, kein aufgesetzter Chatbot: Er arbeitet ausschließlich innerhalb dessen, was Sie ohnehin sehen und aufrufen können, und Sie behalten die Kontrolle über jede Aktion.

- **Fragen Sie über alles, was Sie sehen.** Öffnen Sie den Assistenten von jeder Geräteseite aus oder nutzen Sie den Workspace-weiten Assistenten, um im Gespräch nach Ihren Konfigurationen, Dokumenten und Assets zu fragen — Sie müssen nicht wissen, wo eine Information abgelegt ist. Da er innerhalb Ihrer eigenen Berechtigungen arbeitet, zeigt er ausschließlich Informationen, auf die Sie ohnehin Zugriff haben.
- **Echte Antworten zu laufenden Geräten.** Mit Ihrer ausdrücklichen Genehmigung kann der Assistent schreibgeschützte Prüfungen auf einem verbundenen Gerät ausführen — etwa zu Speicherbelegung oder Systemstatus — und erklärt Ihnen, was die Ergebnisse bedeuten. So diagnostizieren Sie direkt in OneGlue, statt zwischen Tools und Terminals zu wechseln.
- **Lassen Sie Korrekturen vorschlagen — Sie behalten die Kontrolle.** Der Assistent kann Korrekturen an Gerätedetails vorschlagen, etwa an Hostname, IP-Adressen, Betriebssystem, Notizen und mehr. Jeder Vorschlag wird als klarer Vorher-Nachher-Vergleich angezeigt und greift erst, wenn Sie ihn genehmigen; jede übernommene Änderung ist versioniert und vollständig umkehrbar, sodass an Ihren Datensätzen nichts ohne Ihre Zustimmung geschieht.
- **Jede Antwort mit einem Klick als Dokumentation sichern.** Wenn eine Antwort es wert ist, aufbewahrt zu werden, verwandeln Sie sie in ein gespeichertes Dokument, das dem passenden Gerät zugeordnet wird — samt Begründung und Ergebnis. So bleibt das Wissen bei Ihren Datensätzen, statt aus einem Chatfenster zu verschwinden.
- **Volle Transparenz bei jedem Durchlauf.** Jede Antwort zeigt, welches KI-Modell und welches Experten-Profil sie erzeugt hat, sodass Sie stets wissen, wie ein Ergebnis zustande kam, und ihm entsprechend vertrauen können.

> **Hinweis:** Der KI-Assistent und die hier beschriebenen Gerätefunktionen setzen voraus, dass Ihr OneGlue-Workspace mit oneAI gekoppelt ist. Falls Sie noch nicht verbunden sind: Die Kopplung ist eine einmalige Einrichtung, die alles in diesem Abschnitt freischaltet.

## Von Haus aus stärker: eine Sicherheitshärtung

Parallel zum neuen Assistenten haben wir eine umfassende Sicherheits- und Zuverlässigkeitsprüfung über die gesamte Plattform durchgeführt — jene tiefgreifende, unspektakuläre Arbeit, die nie als Feature sichtbar wird, aber genau das ist, was Sie von Ihrem Dokumentations- und Secret-Management-Werkzeug erwarten. Das meiste davon geschieht unsichtbar im Hintergrund; das Ergebnis ist schlicht ein OneGlue, dem Sie mit noch mehr Zuversicht vertrauen können.

- **Aktuelle, gehärtete Grundlagen.** Wir haben die Kernkomponenten, auf denen OneGlue aufbaut, aktualisiert und die neuesten Sicherheitsfixes über den gesamten Stack eingespielt, sodass bekannte Schwachstellen geschlossen sind, bevor sie je zu einem Problem für Sie werden können.
- **Strengere interne Abschottung.** Sensible Dienste — etwa die Datenbank mit Ihren Datensätzen — sind nun von den Systemteilen abgeschottet, die zum öffentlichen Internet hin offen liegen. Sollte eine einzelne Komponente je kompromittiert werden, begrenzt das drastisch, wie weit sich ein Problem ausbreiten könnte.
- **Stärkerer Schutz für automatisierte Aktionen.** Die mit dem KI-Assistenten eingeführten genehmigten Geräteaktionen nutzen jetzt eine einmalig verwendbare, manipulationssichere Autorisierung sowie eine verifizierte Geräteidentität. Im Klartext: Eine genehmigte Aktion lässt sich nicht abfangen und später erneut abspielen, und sie kann nicht auf das falsche Gerät umgelenkt werden.
- **Alles bleibt nachvollziehbar.** Sicherheitsrelevante Ereignisse werden weiterhin in einem manipulationssicheren Audit-Trail festgehalten, sodass es stets eine vertrauenswürdige, überprüfbare Aufzeichnung darüber gibt, was geschehen ist und wer es getan hat.

---
*This changelog was generated automatically. Source: [OneGlue Releases](https://github.com/oneai-eu/oneglue/releases)*

# OneGlue v0.261.0 — Neuigkeiten

**Veröffentlicht am:** 2026-08-16

**Ein paar gezielte Zuverlässigkeits-Fixes.** Dieses Release glättet einen Sonderfall bei der Passkey-Verwaltung, macht die Validierung von Netzwerkadressen klarer und verbessert einige Diagnosemöglichkeiten im Hintergrund.

## Zuverlässigere Passkey-Verwaltung

- **Das Hinzufügen eines Passkeys funktioniert jetzt zuverlässig — jedes Mal.** Manche angemeldeten Nutzer sahen gelegentlich die Fehlermeldung „No tenant matches", wenn sie unter Profil → Sicherheit einen weiteren Passkey hinzufügten — etwa als Backup oder von einem neuen Gerät aus. Das Hinzufügen eines Passkeys erfolgt jetzt vollständig innerhalb Ihrer bestehenden angemeldeten Sitzung und hängt daher nicht mehr davon ab, auf welchem Weg Sie OneGlue aufgerufen haben. Dies ist ein reiner Zuverlässigkeits-Fix für eine bestehende Sicherheitsfunktion — es ist keine Aktion Ihrerseits erforderlich.

## Klarere Netzwerk-Validierung

- **Hilfreiche, konkrete Fehlermeldungen bei der Eingabe von Netzwerkadressen.** Wenn Sie eine Netzwerkadresse mit zusätzlich gesetzten Bits über das Präfix hinaus eingegeben haben — zum Beispiel `192.168.2.1/24` statt der Netzwerkadresse `192.168.2.0/24` — zeigte OneGlue manchmal einen allgemeinen Serverfehler an, statt Sie zur Korrektur zu führen. Jetzt erscheint direkt bei der Eingabe eine klare Inline-Meldung mit dem korrekten Korrekturvorschlag. Dies gilt sowohl für Netzwerke als auch für die SSH-Ziel-Allowlist.

## Hinter den Kulissen

- Verbesserte Diagnoseprotokollierung für die SCVMM-Inventarsynchronisierung sowie eine zuverlässigere interne Nachverfolgung von Build-Fehlern, damit Probleme schneller erkannt und behoben werden.

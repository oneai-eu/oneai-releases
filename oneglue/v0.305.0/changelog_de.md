# OneGlue v0.305.0 — Neuigkeiten

**Veröffentlicht am:** 2026-11-07

**Verlangt Ihr Tenant zwei Passkeys, richtet ein gesperrtes Konto den zweiten Passkey jetzt direkt nach der Anmeldung ein.**

- **Pflichtseite für den zweiten Passkey.** Ein Konto, das gesperrt ist, weil ihm der zweite Passkey fehlt, meldet sich wie gewohnt mit seinem Passkey an und landet auf einer eigenen Seite. Dort kann es nur einen Passkey hinzufügen, seine Passkeys ansehen und sich abmelden. Bisher war ein solches Konto ganz gesperrt, bis über den Registrierungslink ein neuer Passkey registriert war.
- **Das Konto funktioniert automatisch wieder.** Sobald der zweite Passkey hinzugefügt ist, ist das Konto wieder aktiv, ohne dass ein Admin etwas tun muss. Das Audit-Log hält das fest.
- **Vorher kein anderer Zugriff.** Bis zum zweiten Passkey lehnt OneGlue jede andere Anfrage dieses Kontos ab, auch über API-Schlüssel und MCP. Die Anmeldung mit einem Wiederherstellungscode bleibt für gesperrte Konten abgelehnt.
- **Ohne Passkey.** Wer keinen Passkey mehr hat, fordert wie bisher den Registrierungslink auf der Seite für Wiederherstellungscodes an.

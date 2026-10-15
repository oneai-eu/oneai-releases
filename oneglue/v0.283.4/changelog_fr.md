# OneGlue v0.283.4 — Nouveautés

**Publié le :** 2026-10-15

**Vos clients peuvent désormais terminer la configuration initiale avec leur propre accès par passkey.**

- **Un accès personnel à la fin de la configuration initiale.** Si vous avez proposé un accès lors de l'invitation, le client le configure à la fin : confirmation par empreinte, code PIN ou téléphone, et codes d'urgence affichés une seule fois. Il se connecte ensuite avec sa passkey et ne voit que sa propre organisation.
- **Identifiants à la fin, facultatifs.** À la dernière étape, le client peut saisir des identifiants. Ils sont stockés chiffrés.
- **Reprendre plus tard.** Un client qui a déjà envoyé ses réponses peut revenir via le lien de l'invitation et configurer son accès ensuite.
- **Certificats :** les fichiers de certificat sans clé privée restent téléchargeables directement. Les fichiers contenant une clé sont scellés automatiquement et ne s'affichent qu'après une révélation journalisée.
- **Les e-mails d'invitation et de code** sont protégés contre les demandes répétées.

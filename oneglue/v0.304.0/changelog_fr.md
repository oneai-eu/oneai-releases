# OneGlue v0.304.0 — Nouveautés

**Publié le:** 2026-11-06

**La connexion Microsoft est plus sûre, Microsoft Entra ne synchronise que les utilisateurs et les groupes, et les entrées restreintes d'ITGlue restent restreintes à l'import.**

- **Connexion Microsoft plus sûre.** Lorsqu'une action exige une connexion récente, les personnes qui se connectent avec Microsoft doivent se reconnecter avec Microsoft (dans les 5 dernières minutes). Les sessions ouvertes avec Microsoft se terminent au plus tard après 24 heures.
- **Microsoft Entra ne synchronise que les utilisateurs et les groupes.** Entra n'attribue jamais de rôles, ni pour tout le tenant ni dans une organisation. Il ne remplit que des groupes personnalisés sans droits à l'échelle du tenant. Les rôles s'attribuent dans OneGlue.
- **Invitation en masse depuis un groupe Entra.** Vous choisissez vous-même le rôle dans la boîte de dialogue ; « aucun rôle » est possible. OneGlue ne déduit plus un rôle à partir du groupe.
- **Lier un compte Microsoft nécessite un domaine autorisé.** Un compte existant n'est lié à la connexion Microsoft que si l'adresse appartient à un domaine autorisé. Les comptes déjà liés ne sont pas concernés.
- **Les entrées restreintes d'ITGlue restent restreintes.** À l'import, les entrées marquées « restreintes » dans ITGlue restent restreintes dans OneGlue, avec les mots de passe et clés qui leur appartiennent (clés SSL, clés Wi-Fi). Si un export n'a pas de colonne « restreint », l'import s'arrête au lieu de tout rendre visible.
- **Invitations et messages plus clairs.** Les invitations expirées affichent un message clair. Les administrateurs du tenant sont informés lorsqu'une personne externe envoie une invitation. Les administrateurs d'organisation extérieurs à vos domaines sont évalués selon les domaines de votre tenant.
- **Sécurité de la plateforme renforcée.** Les administrateurs de la plateforme enregistrent un nouveau Passkey après une récupération uniquement via un lien envoyé par e-mail, et le changement de tenant conserve le type de la connexion en cours.
- **Textes corrigés.** Les messages et les erreurs lors de l'invitation, de la récupération et de la connexion disent désormais ce que OneGlue fait réellement.

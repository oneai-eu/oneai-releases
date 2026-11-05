# OneGlue v0.303.0 — Nouveautés

**Publié le :** 2026-11-05

**Les personnes externes disposant de rôles d'organisation voient et révèlent désormais ce que leur rôle autorise – et celui qui perd son Passkey dispose d'un chemin de retour.**

> Important : les lecteurs d'organisation, les éditeurs d'organisation et les lecteurs de tenant peuvent désormais révéler tous les mots de passe à accès par défaut de leur(s) organisation(s). Les entrées que seules certaines personnes doivent voir doivent être réglées sur « restreint » (« Révélation par défaut → Restreint »).

- **Personnes externes avec des rôles d'organisation.** Elles voient et révèlent désormais ce que leur rôle autorise. Les entrées importées se comportent comme celles créées dans OneGlue.
- **Un chemin de retour après la perte d'un Passkey – pour tous.** Vous recevez par e-mail un lien pour enregistrer un nouveau Passkey. Les codes de récupération seuls ne créent plus de Passkey.
- **Les invitations correspondent toujours à l'accès actuel.** Si un administrateur modifie le rôle ou bloque le compte avant que l'invitation ne soit utilisée, l'invitation devient caduque.
- **Un avertissement clair avant les rôles de grande portée.** Avant l'attribution d'un rôle valable pour tout le tenant, vous voyez un avertissement chiffré et confirmez une fois de plus – surtout pour les adresses extérieures à vos propres domaines.
- **Réactiver et réinviter fonctionne à nouveau.** Y compris pour les comptes et appartenances avec date de fin. Les comptes expirés voient un message clair.
- **L'accès prend fin quand l'accès prend fin.** Les sessions ouvertes et les sessions à distance sont terminées en une minute environ.
- **Les rôles de tenant s'attribuent dans OneGlue, pas via les groupes Microsoft Entra.** La synchronisation des groupes continue de fonctionner pour les autres groupes.
- **Connexion uniquement avec Microsoft.** Les utilisateurs qui se connectent uniquement avec Microsoft peuvent confirmer les actions sensibles en se reconnectant avec Microsoft.
- **Textes corrigés.** Les textes indiquant qui peut voir et révéler quoi ont été corrigés partout.
- **Sécurité de la plateforme renforcée.** Meilleure gestion des clés, notifications lorsqu'un Passkey est ajouté à partir d'un code de récupération, et le dernier Passkey d'un administrateur de plateforme ne peut plus être supprimé.

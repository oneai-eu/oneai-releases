# OneGlue v0.303.0 — Nouveautés

**Publié le :** 2026-11-05

**Les personnes externes disposant de rôles d'organisation voient et révèlent désormais ce que leur rôle autorise – et celui qui perd son Passkey dispose d'un chemin de retour.**

> Important : les lecteurs d'organisation, les éditeurs d'organisation et les lecteurs de tenant peuvent désormais révéler tous les mots de passe à accès par défaut de leur(s) organisation(s). Les entrées que seules certaines personnes doivent voir doivent être réglées sur « restreint » (« Révélation par défaut → Restreint »).

- **Personnes externes avec des rôles d'organisation.** Elles voient et révèlent désormais ce que leur rôle autorise. Les entrées importées se comportent comme celles créées dans OneGlue.
- **Un chemin de retour après la perte d'un Passkey – pour tous les comptes d'un tenant.** Vous recevez par e-mail un lien pour enregistrer un nouveau Passkey. Pour les comptes d'un tenant, les codes de récupération seuls ne créent plus de Passkey.
- **Les invitations correspondent toujours à l'accès actuel.** Si un administrateur modifie le rôle ou bloque le compte avant que l'invitation ne soit utilisée, l'invitation devient caduque.
- **Un avertissement clair avant les rôles de grande portée.** Avant l'attribution d'un rôle valable pour tout le tenant, OneGlue indique en chiffres ce que fait ce rôle. Les adresses extérieures à vos propres domaines exigent en plus une confirmation distincte.
- **Réactiver et réinviter fonctionne à nouveau.** Y compris pour les comptes et appartenances avec date de fin. Les comptes expirés voient un message clair.
- **L'accès prend fin quand l'accès prend fin.** Les sessions à distance ouvertes se terminent au plus tard environ une minute après le retrait de l'accès. Dans le navigateur, le changement s'applique dès l'action suivante.
- **Les rôles de tenant s'attribuent dans OneGlue, pas via les groupes Microsoft Entra.** La synchronisation des groupes continue de fonctionner pour les autres groupes.
- **Connexion uniquement avec Microsoft.** Lorsqu'une action exige une connexion récente, les personnes qui se connectent uniquement avec Microsoft peuvent se reconnecter avec Microsoft pour cela.
- **Textes corrigés.** Les textes indiquant qui peut voir et révéler quoi ont été corrigés partout.
- **Sécurité de la plateforme renforcée.** Meilleure gestion des clés, notifications lorsqu'un Passkey est ajouté à partir d'un code de récupération, et le dernier Passkey d'un administrateur de plateforme ne peut plus être supprimé.

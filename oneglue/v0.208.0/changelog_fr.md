# OneGlue v0.208.0 — Nouveautés

**Date de publication :** 2026-07-15

**Atteignez une VM même quand son réseau est injoignable.** OneGlue peut désormais ouvrir la **console d'une machine virtuelle via son hôte Hyper-V** — pour atteindre des VMs sur des réseaux clients isolés qu'une connexion bureau à distance directe ne pourra jamais toucher.

## Accès console via Hyper-V

- **Une nouvelle action « Console (via Hyper-V) »** sur chaque VM SCVMM. Au lieu de se connecter à l'adresse propre de la VM, OneGlue passe par l'**hôte Hyper-V** et ouvre la **console** de la VM — exactement comme devant son écran, même avant le démarrage du système ou lorsque la VM se trouve sur un réseau non routable.
- **Fonctionne là où le RDP direct ne peut pas.** C'est la réponse pour les VMs sur des réseaux clients isolés/segmentés : la session est relayée par l'agent OneGlue local vers l'hôte Hyper-V, sans jamais nécessiter de route vers la VM elle-même.
- **La séquence d'attention sécurisée (Ctrl-Alt-Suppr)** est à un clic pour l'écran de connexion.
- **Révélation des identifiants pour la connexion en un clic.** L'identifiant de domaine/partagé applicable à la VM peut être révélé pour que vous le saisissiez à la console (l'accès console s'authentifie auprès de l'hôte ; la connexion de l'invité reste entre vos mains) — chaque révélation est journalisée dans l'audit.

## Choisir le mode de sécurité RDP

- Lors d'une connexion **directe** à une machine par bureau à distance, vous pouvez maintenant choisir le **mode de sécurité** — **NLA** (par défaut) ou **TLS** — pour les machines dont le serveur RDP refuse la négociation par défaut.

## Contrôlé par conception

- L'accès console réutilise l'**autorisation « se connecter à la VM » attribuable par organisation** — sans droit distinct de gestion des identifiants.
- **L'accès entre organisations et entre locataires est impossible** par conception.
- **Chaque session console et chaque révélation d'identifiant est consignée dans le journal d'audit** — métadonnées uniquement, jamais le secret.

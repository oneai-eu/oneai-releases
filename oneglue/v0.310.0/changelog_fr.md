# OneGlue v0.310.0 — Nouveautés

**Publié le :** 2026-11-16

**Assistant IA**

- Si tu ne choisis pas de modèle, l'assistant utilise un modèle activé dans ton organisation oneAI. Le sélecteur de modèle l'affiche sous la forme « Par défaut (nom du modèle) ». Si tu choisis toi-même un modèle qui n'est pas activé, l'exécution ne démarre pas et le message indique les modèles disponibles.
- L'assistant reçoit les grandes listes et les grands documents sous forme abrégée, avec le nombre total. Si une demande reste trop volumineuse ou si oneAI n'est pas joignable, tu vois ce qui s'est passé et ce que tu peux faire.

**Accès pour l'assistant sur les appareils Linux**

- Lors d'une nouvelle installation du GlueAgent sous Linux, OneGlue crée un compte restreint sans droits d'administrateur et configure lui-même l'accès pour l'assistant. Les appareils existants obtiennent l'accès automatiquement dès que leur GlueAgent est en version 0.5.32 ou plus récente. Sinon, la carte « Accès pour l'assistant » de la page de configuration affiche la commande unique et le bouton « Configurer ».
- Les diagnostics de l'assistant passent par le GlueAgent tant qu'il est connecté.

**Autres améliorations**

- Les cartes réseau qu'un GlueAgent ne signale plus disparaissent de la configuration. Les réseaux de conteneurs de courte durée (p. ex. Docker) ne sont pas repris. Les informations que tu as saisies toi-même sont conservées.
- Les administrateurs du locataire peuvent révoquer des clés API personnelles. Lorsqu'un utilisateur est désactivé, ses clés sont révoquées automatiquement.

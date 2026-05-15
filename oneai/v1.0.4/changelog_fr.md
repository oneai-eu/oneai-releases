# OneAI v1.0.4 — Chat plus résilient, sources plus claires et meilleure transparence des prix

**Release Date:** 2026-05-15

Avec **OneAI v1.0.4**, AI Chat devient nettement plus fiable au quotidien — en particulier pour les réponses longues, les flux d’outils complexes et les workflows basés sur des documents. En parallèle, nous améliorons la transparence des abonnements et renforçons la confidentialité des sources web.

## Highlights

- **Les réponses longues ne disparaissent plus après de brèves coupures de connexion.** Si un flux est interrompu pendant une réponse, OneAI le restaure désormais automatiquement et conserve le texte déjà généré. Au lieu de perdre la question et la réponse, les utilisateurs peuvent reprendre sans interruption. Grâce à **Pascal**, AI Chat est désormais beaucoup plus résilient en cas de réseau instable.
- **Nouvelle barre d’appels d’outils et panneau de sources unifié.** Les étapes de raisonnement et l’activité des outils apparaissent désormais directement à l’endroit où elles se produisent dans la réponse. Les sources web et les fichiers sont également regroupés dans une vue unique **« All Sources »**, ce qui rend les réponses complexes bien plus faciles à suivre. Merci à **Oliver** et **Pascal** pour cette refonte majeure.
- **Les artefacts toujours à portée de main.** Les artefacts créés et référencés sont rassemblés dans un bandeau fixe juste au-dessus du champ de saisie. Ils restent ainsi faciles à retrouver, même dans les conversations longues. Les références intégrées ouvrent désormais les artefacts directement dans le panneau latéral, sans quitter le chat.
- **Tarification des modèles en temps réel dans l’espace Subscription.** Les prix des modèles disponibles ne sont plus codés en dur. Ils sont désormais mis à jour dynamiquement et affichés dans une nouvelle boîte de dialogue tarifaire, offrant aux administrateurs une vision plus claire et actualisée des coûts. Merci à **Obaid** pour cette livraison.

## Improvements

- **Traitement des documents plus rapide.** Les résumés et les embeddings s’exécutent désormais en parallèle, ce qui accélère sensiblement le traitement des documents.
- **Réduction de l’utilisation mémoire pour la recherche.** La recherche documentaire utilise désormais beaucoup moins de RAM tout en conservant la même qualité de résultats. Grâce à **Justus**, OneAI évolue plus efficacement pour les Knowledge Spaces de grande taille.
- **Plus de doublons dans les PDF.** Nous avons corrigé un problème pouvant entraîner une indexation en double du contenu PDF dans certains cas.
- **Meilleure expérience d’audit pour les équipes conformité.** Les messages bloqués longs sont désormais lisibles dans la boîte de dialogue d’audit, les contenus détectés sont affichés plus précisément et la détection d’IBAN génère moins de faux positifs.
- **Espace Subscription plus clair.** Les onglets Aperçu, Facturation, Utilisation, Quota d’équipe et Add-ons se comportent désormais de manière plus cohérente selon la taille de l’écran.

## Bug Fixes

- **Les prompts bloqués pour conformité sont conservés pour révision.** Lorsqu’un message est bloqué par une règle de conformité, le prompt original et ses pièces jointes restent accessibles aux administrateurs et peuvent être restaurés proprement après validation.
- **Les extraits de sources ne cassent plus la mise en page.** La vue des sources reste compacte et lisible, même avec des extraits complexes.
- **Les titres automatiques de chat restent désormais dans notre infrastructure européenne.** Cela améliore la confidentialité et évite de consommer le budget de tokens orienté utilisateur de votre organisation pour une tâche en arrière-plan.

## Security

- **Favicons respectueux de la vie privée pour les citations web.** Les favicons sont désormais chargés via un proxy sécurisé OneAI au lieu de services externes. Les adresses IP et le comportement de navigation des utilisateurs ne sont ainsi plus exposés à des fournisseurs tiers comme le CDN de Google.
- Nous avons également posé les bases de contrôles supplémentaires de sécurité de la chaîne d’approvisionnement en arrière-plan.

## Under the Hood

- Optimisations supplémentaires des performances pour la recherche, le stockage et le traitement des documents
- Nettoyage technique dans le stack chat et release
- Améliorations mineures des processus de facturation et de plateforme

Merci à **Pascal**, **Oliver**, **Obaid** et **Justus** pour cette release. Un merci particulier à Pascal pour avoir piloté une grande partie des améliorations de fiabilité et d’UX du chat dans cette version.

*71 fichiers modifiés · 20 commits · 4 contributeurs*

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

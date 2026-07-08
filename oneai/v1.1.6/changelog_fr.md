# OneAI v1.1.6 — Présentations alignées sur votre marque et chats beaucoup plus résilients

**Release Date:** 2026-07-08

## Highlights

**Les présentations reflètent désormais votre marque dès leur création.** Les decks générés peuvent automatiquement adopter vos couleurs de marque, en utilisant votre couleur principale de CI ainsi qu’un accent secondaire extrait de votre logo. Les présentations générées par l’IA sont ainsi beaucoup plus adaptées à un usage interne et client. Grâce à Pascal, les présentations dans OneAI sont désormais nettement plus professionnelles.

**Vous pouvez maintenant modifier les slides directement dans le viewer.** Réorganisez, dupliquez ou supprimez des slides par simple glisser-déposer — sans régénérer le deck ni relancer l’IA. Les présentations générées deviennent ainsi des bases de travail rapidement exploitables et faciles à affiner en équipe.

**Les designs peuvent être changés après génération.** Vous pouvez passer à tout moment entre Light, Dark, Corporate, Editorial et Slate, sans recréer la présentation.

**Les résultats Python dans AI Chat prennent désormais en charge le téléchargement complet des fichiers.** En plus des images, OneAI fournit désormais des fichiers Excel, PDF, Word, CSV et autres fichiers générés directement dans le chat avec leur nom de fichier d’origine. Grâce à Mirko, les analyses et rapports s’intègrent beaucoup plus facilement dans vos workflows réels.

**Les conversations longues sont désormais beaucoup plus fiables.** Lorsque les chats ou les contenus collés deviennent très volumineux, OneAI tronque automatiquement l’ancien contexte au lieu d’afficher une erreur « conversation too large ». Les nouveaux résumés générés sont également correctement réinjectés dans l’appel modèle suivant. Grâce à Pascal, les sessions de travail prolongées dans AI Chat sont désormais bien plus fiables.

## Improvements

- **Les anciens messages dans les longs chats se rechargent correctement** lors du défilement vers le haut. Thanks to Oliver.
- **Les chats basés sur GPT ne s’interrompent plus en cours de réponse** lorsqu’un modèle génère du texte avant d’appeler un outil. Thanks to Santi.
- **Les exports PDF sont plus complets**, incluant les diagrammes Mermaid rendus et le code avec coloration syntaxique.
- **HubSpot peut désormais être connecté de manière fiable depuis le Space wizard**, sans rester bloqué sur une page vide.
- **La synchronisation des Knowledge Spaces est plus résiliente**, même en cas de problèmes temporaires de connectivité du backend de stockage.
- **La synchronisation Outlook gère plus proprement les payloads Microsoft inhabituels**, évitant les boucles d’erreurs.
- **Le traitement des connecteurs GitHub est plus efficace**, permettant aux grands repositories de rester dans les limites API tout en étant traités plus fiablement.
- **Les PDF sont désormais systématiquement traités avec Vision**, améliorant les résultats pour les mises en page complexes, graphiques et documents à contenu mixte. Thanks to Justus.
- **Les descriptions d’images et de diagrammes dans les documents traités sont plus pertinentes**, améliorant la qualité des résultats dans les Knowledge Spaces. Thanks to Justus.
- **Les informations d’incident apparaissent désormais directement dans le produit**, facilitant l’identification rapide des problèmes connus de la plateforme.
- **Meilleure transparence des coûts pour les très grands contextes modèle :** le comportement tarifaire pour les chats particulièrement longs avec de grands modèles est désormais plus clairement reflété. Thanks to Obaid.

## Bug Fixes

- **Messages d’erreur plus clairs lorsque les fournisseurs d’IA sont surchargés ou soumis à des rate limits**, au lieu d’échecs génériques du chat. Thanks to Oliver.
- **Les outils Python et SQL basés sur Anthropic fonctionnent de nouveau de manière fiable**, même lorsqu’aucun fichier d’entrée n’est requis.
- **Claude Opus 4.6 et Sonnet 4.6 sont désormais alignés avec la configuration actuelle d’adaptive thinking**, améliorant la fiabilité des modèles.

## Security

- **Téléchargements de fichiers plus sûrs dans AI Chat :** les résultats Python non liés à des images sont désormais systématiquement fournis en téléchargement, fermant un vecteur potentiel d’attaque par rendu inline pour les fichiers HTML et SVG.
- **Contrôles de permissions plus stricts pour les données structurées dans les Knowledge Spaces :** les droits d’écriture sur le datastore d’un Space sont désormais correctement appliqués selon les permissions d’écriture du Space.

## Under the Hood

- Le traitement des documents a été considérablement accéléré et renforcé en plusieurs étapes, avec une pipeline plus rapide, un meilleur failover et des performances base de données améliorées. Thanks to Justus.
- Nous avons également étendu l’observabilité interne sur le traitement des embeddings et des PDF afin d’identifier plus rapidement les goulets d’étranglement et maintenir des performances stables.

Merci à Pascal, Justus, Mirko, Oliver, Santi et Obaid pour cette release.

*34 commits, 109 files changed*

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*

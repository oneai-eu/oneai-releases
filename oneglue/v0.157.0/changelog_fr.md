# OneGlue v0.157.0 — Nouveautés

**Date de publication :** 2026-07-02

Trois choses arrivent ensemble dans cette version : un compte rendu en langage clair des nouveautés, un assistant IA capable désormais d'agir en toute sécurité sur vos appareils, et une vaste passe de renforcement de la sécurité qui, discrètement, rend toute la plateforme plus solide. Voici ce qui est nouveau dès maintenant.

## Ce journal des modifications et les notes de version

Nous ouvrons nos notes de version. OneGlue s'améliore en permanence et, jusqu'ici, l'essentiel de ce travail se déroulait discrètement en coulisses : vous remarquiez un nouveau bouton ou une page plus rapide, mais l'histoire complète restait enfouie dans des journaux techniques. Cette page change la donne : un compte rendu clair et en langage simple des nouveautés, écrit pour les personnes qui utilisent OneGlue au quotidien.

- **Voyez d'un coup d'œil ce qui a changé.** Les mises à jour sont regroupées en jalons parlants — l'histoire de ce que nous avons livré — plutôt qu'en un mur de numéros de version à décoder.
- **Comprenez le bénéfice, pas la mécanique.** Chaque entrée explique ce que vous pouvez faire désormais et ce qui est devenu plus sûr, plus rapide ou plus simple, dans un langage de tous les jours plutôt qu'en termes d'ingénierie.
- **Dans votre langue, toujours à jour.** Le journal des modifications est localisé et tenu à jour au fil des nouvelles fonctionnalités, si bien que vous n'avez jamais à chercher pour savoir ce qui est nouveau.

## Votre assistant IA, désormais à l'œuvre

Dès que votre espace de travail OneGlue est connecté à oneAI, un assistant IA intégré devient disponible dans toute l'application. Il comprend votre documentation informatique et vous aide à trouver des réponses en langage naturel — et, lorsque vous l'y autorisez, à mener de vraies actions sur vos appareils connectés. L'objectif est un véritable partenaire de travail qui vit à l'intérieur de OneGlue, pas un chatbot rapporté : il opère uniquement dans le périmètre de ce que vous pouvez déjà voir et consulter, et vous gardez le contrôle de chaque action qu'il effectue.

- **Posez des questions sur tout ce que vous voyez.** Ouvrez l'assistant depuis n'importe quelle page d'appareil, ou utilisez l'assistant à l'échelle de l'espace de travail pour interroger vos configurations, documents et actifs de façon conversationnelle — sans avoir à savoir où une information est classée. Comme il travaille dans le cadre de vos propres autorisations, il ne fait jamais apparaître que des informations auxquelles vous avez déjà accès.
- **Obtenez de vraies réponses sur des appareils en direct.** Avec votre accord explicite, l'assistant peut exécuter des vérifications en lecture seule sur un appareil connecté — l'utilisation du disque ou l'état du système, par exemple — et vous expliquer ce que signifient les résultats, pour que vous diagnostiquiez depuis OneGlue au lieu de jongler entre outils et terminaux.
- **Laissez-le proposer des correctifs — vous gardez le contrôle.** L'assistant peut suggérer des corrections aux détails d'un appareil, comme le nom d'hôte, les adresses IP, le système d'exploitation, les notes et bien d'autres. Chaque proposition est présentée sous forme de comparaison claire avant/après et ne s'applique que lorsque vous l'approuvez ; chaque modification appliquée est versionnée et entièrement réversible, si bien que rien n'arrive à vos enregistrements sans votre accord.
- **Enregistrez n'importe quelle réponse comme documentation en un clic.** Lorsqu'une réponse mérite d'être conservée, transformez-la en document enregistré et rattaché à l'appareil concerné — capturant le raisonnement et le résultat pour que le savoir reste avec vos enregistrements au lieu de défiler hors d'une fenêtre de discussion.
- **Une transparence totale à chaque exécution.** Chaque réponse indique quel modèle d'IA et quel profil d'expertise l'ont produite, pour que vous sachiez toujours comment un résultat a été obtenu et puissiez lui faire confiance en conséquence.

> **Remarque :** L'assistant IA et les fonctions d'action sur les appareils décrites ici nécessitent que votre espace de travail OneGlue soit appairé avec oneAI. Si vous n'êtes pas encore connecté, l'appairage est une configuration unique qui débloque tout ce qui figure dans cette section.

## Plus solide par défaut : une passe de renforcement de la sécurité

Parallèlement au nouvel assistant, nous avons mené une vaste revue de sécurité et de fiabilité sur l'ensemble de la plateforme — ce travail de fond, peu spectaculaire, qui n'apparaît jamais comme une fonctionnalité mais qui est exactement ce que vous attendez de votre outil de documentation et de gestion des secrets. L'essentiel se déroule de façon invisible en arrière-plan ; le résultat est tout simplement un OneGlue auquel vous pouvez vous fier avec plus d'assurance.

- **Des fondations à jour et renforcées.** Nous avons rafraîchi les composants centraux sur lesquels OneGlue repose et appliqué les derniers correctifs de sécurité sur toute la pile, de sorte que les faiblesses connues sont refermées avant même de pouvoir devenir un problème pour vous.
- **Une isolation interne plus stricte.** Les services sensibles — comme la base de données qui contient vos enregistrements — sont désormais cloisonnés des parties du système exposées à l'internet public. Si un seul composant venait à être compromis, cela limite considérablement la portée d'un éventuel problème.
- **Une protection renforcée pour les actions automatisées.** Les actions d'appareil approuvées introduites avec l'assistant IA utilisent maintenant une autorisation à usage unique, inviolable, ainsi qu'une identité d'appareil vérifiée. En clair : une action approuvée ne peut pas être capturée puis rejouée plus tard, et elle ne peut pas être redirigée vers la mauvaise machine.
- **Tout reste auditable.** Les événements sensibles pour la sécurité continuent d'être consignés dans une piste d'audit inviolable, de sorte qu'il existe toujours une trace fiable et vérifiable de ce qui s'est passé et de qui l'a fait.

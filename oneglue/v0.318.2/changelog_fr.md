# OneGlue v0.318.2 — Nouveautés

**Publié le :** 2026-11-22

**Des documents plus agréables à lire**

- Les documents affichent désormais les diagrammes Mermaid (logigrammes, diagrammes de séquence, d'états, ER, de Gantt, etc.) directement dans la vue de lecture, en thème clair comme en thème sombre. Un clic sur un diagramme ouvre une vue agrandie avec zoom. Un diagramme erroné affiche le message d'erreur et son code source au lieu d'un espace vide.
- Les blocs de code et de scripts (PowerShell, C#, Python, Bash, SQL, JSON, YAML, etc.) bénéficient de la coloration syntaxique. Chaque bloc indique son langage et dispose d'un bouton de copie. L'éditeur colore désormais lui aussi le code.
- Les titres structurent le document en chapitres clairs, et `---` trace un séparateur bien visible. À partir de trois chapitres, un sommaire s'affiche à droite et suit votre lecture. Chaque titre dispose d'un lien que vous pouvez copier et partager.
- `> [!NOTE]`, `[!TIP]`, `[!IMPORTANT]`, `[!WARNING]` et `[!CAUTION]` s'affichent sous forme d'encadrés de couleur, les tableaux sont plus lisibles, et « Imprimer → Enregistrer au format PDF » produit un document propre, sans navigation.
- oneAI connaît cette mise en forme et l'utilise lorsqu'il crée ou modifie des documents pour vous.
- Dans la boîte de dialogue de révélation d'un document sensible, le code copié est effacé du presse-papiers au bout de 30 secondes.

**Inviter des clients**

- Lorsque vous invitez un client avec un compte permanent, la boîte de dialogue indique combien de mots de passe les membres de cette organisation peuvent révéler, avec la liste. Vous pouvez restreindre chaque entrée directement depuis cette liste.
- Si votre client ne termine pas l'assistant d'invitation, OneGlue supprime les informations saisies 30 jours après l'expiration de l'invitation. La page de bienvenue l'en informe avant qu'il ne commence.
- Un même nom de domaine et un même certificat peuvent désormais être suivis dans plusieurs organisations. Un doublon n'est refusé qu'au sein d'une même organisation.

**Domaines et téléversements**

- Le DNS en direct et la synchronisation avec le registrar n'utilisent l'accès au registrar de votre Tenant que pour les domaines qu'un administrateur du Tenant y a liés.
- Un fichier que l'antivirus ne peut pas analyser entièrement, par exemple une archive trop profondément imbriquée, est refusé. Le message indique la limite. Un fichier n'est enregistré comme sain qu'après une analyse complète.

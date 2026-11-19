# OneGlue v0.315.0 — Nouveautés

**Publié le :** 2026-11-19

**Téléversements plus robustes**

- Les téléversements sont plus robustes. Si un téléversement échoue, OneGlue en affiche la raison et vous pouvez téléverser immédiatement le fichier suivant, sans recharger la page. Un fichier que vous glissez sur un nouveau document est téléversé exactement une fois. Plusieurs téléversements simultanés sont désormais analysés en quelques secondes à la recherche de virus, et les signatures de virus sont mises à jour toutes les 2 heures. Pour un document avec un fichier joint, « Sensible » ne peut pas être sélectionné ; OneGlue affiche une courte indication.

**Assistant d'invitation**

- Lorsque votre client saisit des données via l'assistant d'invitation, OneGlue affiche à votre équipe les liens de ces documents sous forme de texte jusqu'à ce que quelqu'un les confirme avec « Reprendre », avant même que le client n'envoie le formulaire. Un nouveau clic sur « Envoyer » renvoie à votre équipe une notification qui s'était perdue. Lorsque l'accès d'un client prend fin, OneGlue révoque également toutes ses clés API.

**Agents et connexion**

- Lorsqu'un GlueAgent est révoqué, mis en pause, supprimé ou réenregistré, OneGlue coupe sa connexion et toutes les sessions distantes qui passent par elle en quelques secondes. Après chaque connexion avec un code de récupération, le compte reçoit un e-mail d'information indiquant l'heure, la plage d'adresses IP approximative et l'appareil. La page « Sessions actives » affiche désormais correctement les appareils Android et iOS.

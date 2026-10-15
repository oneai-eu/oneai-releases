# OneGlue v0.283.2 — Nouveautés

**Publié le :** 2026-10-15

**Invitez vos nouveaux clients à faire leurs premiers pas : le client répond à quelques questions simples, et son organisation dans OneGlue se remplit toute seule.**

## Inviter des clients à faire leurs premiers pas

- **Une invitation au lieu de longs appels.** Sur la page d'une organisation — ou directement lors de sa création — choisissez « Inviter le client aux premiers pas ». Le client reçoit un e-mail avec un lien vers quelques questions simples, dans sa langue (allemand, anglais, espagnol ou français). Cela prend environ dix minutes.
- **Guidé étape par étape :** adresse, autres sites, contact informatique, adresse de facturation, matériel, documents, ainsi que les services et prestataires utilisés. À la fin, le client voit un récapitulatif et envoie le tout.
- **Les réponses arrivent là où vous en avez besoin :** sous forme de sites, contacts, appareils et documents dans l'organisation du client — marqués comme fournis par le client, pour que vous sachiez ce qu'il reste à vérifier.
- **Des identifiants uniquement si le client le souhaite.** Tout à la fin, il peut saisir des identifiants s'il le veut. Ils sont stockés chiffrés, et le client lui-même ne peut plus les consulter ensuite.
- **Vous gardez la vue d'ensemble :** l'organisation indique si le client est invité, en train de remplir ou a déjà envoyé. Vous pouvez envoyer une nouvelle invitation ou mettre fin aux premiers pas à tout moment. Lors de l'invitation, vous définissez un message personnel et le délai (de 1 à 90 jours).
- **Un accès personnel, si vous le souhaitez :** à la fin, le client peut obtenir un accès permanent avec passkey — uniquement si vous l'avez proposé lors de l'invitation, et uniquement pour sa propre organisation. Les administrateurs du tenant et de l'organisation peuvent proposer cet accès.
- **Nouvelle autorisation d'invitation :** des collègues sans rôle d'administrateur peuvent aussi inviter des clients à faire leurs premiers pas.

## Davantage de protection pour vos données

- **Les mots de passe verrouillés restent verrouillés.** Seuls les administrateurs du tenant et les personnes à qui cette entrée précise a été expressément confiée peuvent modifier ses autorisations ou la déverrouiller. Le verrouillage supprime les autorisations générales par rôle, et les mots de passe verrouillés ne peuvent plus être utilisés via des accès partagés.
- **Les fichiers téléversés sont mieux protégés.** Chaque fichier est d'abord déposé, vérifié, puis seulement ensuite libéré ; il ne peut plus être remplacé à votre insu. Les clés privées au format PEM téléversées avec des certificats SSL sont détectées et stockées chiffrées.

## Corrections

- Le téléversement de fichiers pouvait provoquer une courte interruption. C'est corrigé.
- Les images peuvent de nouveau être insérées dans les documents, et les paramètres d'authentification unique d'une organisation peuvent de nouveau être enregistrés.
- Les tentatives de connexion échouées sont désormais signalées clairement et journalisées.

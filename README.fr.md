# &#128736; AI Skill Create - README français complet

<p align="center">
  &#127760; <strong>Documentation:</strong>
  <a href="README.de.md"><img src="https://flagcdn.com/w20/de.png" alt="Deutsch" width="20"></a> |
  <a href="README.es.md"><img src="https://flagcdn.com/w20/es.png" alt="Espa&#241;ol" width="20"></a> |
  <a href="README.md"><img src="https://flagcdn.com/w20/gb.png" alt="English" width="20"></a> |
  <a href="README.pt-BR.md"><img src="https://flagcdn.com/w20/br.png" alt="Portugu&#234;s (Brasil)" width="20"></a> |
  <a href="README.tr.md"><img src="https://flagcdn.com/w20/tr.png" alt="T&#252;rk&#231;e" width="20"></a> |
  <a href="README.fr.md"><img src="https://flagcdn.com/w20/fr.png" alt="Fran&#231;ais" width="20"></a>
</p>

> Ce fichier est une page d’entrée française complète, pas un court résumé. Il couvre objectif, limites, usage, validation, sécurité et publication.
>
> README canonique en anglais: [README.md](README.md)

Kit public de skill et plugin pour Codex, conçu pour créer, valider et empaqueter des skills de haute qualité.

Commencez par le README canonique si vous voulez la description anglaise la plus actuelle. Utilisez cette page pour lire le même contrat opérationnel en français.

## Statut et signaux de confiance

|Zone | Détail|
|--- | ---|
|Statut | Dépôt public: ucsahinn/ai-skill-create|
|Source de vérité | [README canonique en anglais](README.md)|
|Utilisateurs | Utilisateurs de Codex qui créent des skills réutilisables.; Mainteneurs qui préparent des dépôts publics de skills.|
|Validation | Le frontmatter de SKILL.md est valide et la description de déclenchement est placée au début.; Plugin JSON et agents/openai.yaml optionnel sont lus correctement.|
|Sécurité | Inclut un paquet plugin sous plugins/ai-skill-create.; Garde le SKILL.md de runtime concis et déplace la guidance détaillée vers references.|

## Ce que contient ce dépôt

- Une skill Codex prête pour un usage public qui aide à créer d'autres skills Codex.
- Un dépôt compatible plugin avec skill, références, scripts, modèles et docs.
- Un harnais de validation pour anatomie de skill, progressive disclosure, génération sûre et contrôles d'installation.
- Une référence mainteneur pour empaqueter une skill afin que d'autres utilisateurs puissent l'inspecter et l'installer.

## Ce que ce dépôt n’est pas

- Ce n'est pas un endroit pour stocker des prompts privés ni du matériel source client.
- Ce n'est pas un dépôt générique de prompts sans validation.
- Ce n'est pas un substitut a la documentation officielle actuelle de Codex ou Agent Skills.
- Ce n'est pas un installateur qui doit lancer un nettoyage destructif.

## Public visé

- Utilisateurs de Codex qui créent des skills réutilisables.
- Mainteneurs qui préparent des dépôts publics de skills.
- Relecteurs qui vérifient sécurité, déclenchement et qualité de packaging.
- Utilisateurs Windows qui ont besoin de flux d'installation et de validation compatibles PowerShell.

## Démarrage rapide

1. Clonez ou mettez à jour le dépôt.
2. Lisez README, sécurité et carte documentaire.
3. Lancez les validations adaptées.
4. Stagez uniquement les fichiers explicitement modifiés.
5. Avant push ou release, revérifiez remote, secrets et liens.

## Guide de décision

- Skill uniquement instructionnelle -> garder SKILL.md concis et eviter les scripts.
- Travail déterministe répété -> ajouter des scripts et les valider.
- Gros matériel de référence -> le placer dans references et le router depuis SKILL.md.
- Chemin d'installation public nécessaire -> empaqueter comme plugin et documenter l'usage de Skills CLI.

## Carte du dépôt

|Chemin | Pourquoi c’est important|
|--- | ---|
|[plugins/ai-skill-create/skills/ai-skill-create/SKILL.md](plugins/ai-skill-create/skills/ai-skill-create/SKILL.md) | point d'entree reel de la skill Codex|
|[plugins/ai-skill-create/skills/ai-skill-create/references/](plugins/ai-skill-create/skills/ai-skill-create/references/) | connaissance chargée par progressive disclosure|
|[plugins/ai-skill-create/skills/ai-skill-create/scripts/](plugins/ai-skill-create/skills/ai-skill-create/scripts/) | helpers déterministes de scaffold et validation|
|[templates/](templates/) | fichiers de départ pour skills et plugins générés|
|[tests/forward-prompts/](tests/forward-prompts/) | prompts realistes pour forward testing|
|[docs/](docs/) | guides d'installation, validation, plugin et dépôt public|
|[scripts/](scripts/) | validation du repo et helpers d'install dry-run|

## Flux de travail

1. Comprendre la skill demandée à partir des exemples et contraintes utilisateur.
2. Poser seulement les questions de clarification nécessaires.
3. Choisir le nom de skill, la structure de dossiers, les références, les scripts et le packaging plugin optionnel.
4. Générer un SKILL.md concis avec les fichiers de support.
5. Exécuter les contrôles de structure, liens, scripts, manifestes, installation et secrets.
6. Forward-tester les skills générées avec des prompts réalistes avant publication.

## Commandes et validation

Exécutez ces commandes seulement après avoir cloné le dépôt et compris ce qu’elles vérifient ou modifient.

```powershell
npm run validate
npm run validate:links
npm run validate:plugin
npm run validate:install
gitleaks dir . --no-banner --redact
```

## Liste de vérification

- Le frontmatter de SKILL.md est valide et la description de déclenchement est placée au début.
- Plugin JSON et agents/openai.yaml optionnel sont lus correctement.
- References et scripts sont liés uniquement quand ils sont nécessaires.
- Les forward prompts ont des résultats attendus consignés.
- Aucune skill générée ne contient de secrets, de chemins locaux ni de texte source privé.

## Limite de sécurité

- Inclut un paquet plugin sous plugins/ai-skill-create.
- Garde le SKILL.md de runtime concis et déplace la guidance détaillée vers references.
- Fournit des scripts de validation pour structure, frontmatter, manifestes plugin, metadata marketplace, scripts et liens.
- Inclut des forward-test prompts pour vérifier les skills générées face à des demandes réalistes.

Règle public-safe: ne pas ajouter de secrets, tokens, cookies, clés privées, prompts privés, données client, fichiers d'auth locaux, logs générés, archives ni sorties de build sauf si le README canonique dit explicitement qu'ils appartiennent au dépôt public.

## Hygiène de release et publication

- Utiliser docs/PUBLIC_REPO_CHECKLIST.md et PUBLISHING_CHECKLIST.md avant toute release.
- Commit uniquement du code source, des docs, des modeles et des scripts de validation relus.
- Ne pas publier de metadata marketplace tant que le chemin d'installation n'est pas reel et teste.
- Verifier remote HEAD et GitHub Actions apres le push.

## Maintenance

- Garder ce README localise aligne avec README.md lorsque le contrat du repo change.
- Preferer les liens factuels du repo aux affirmations marketing.
- Ne pas inventer de commandes d'installation, métriques, utilisateurs, releases ni promesses de support.
- Si une commande dépend d'une version, la revérifier avant de la documenter.
- Si un fichier localise ne peut pas etre mis a jour completement, laisser une note claire plutot qu'une traduction partielle.

## Chemin de contribution

- Ouvrir un changement cible sur le plus petit ensemble de fichiers.
- Lire AGENTS.md ou CONTRIBUTING.md lorsqu'ils existent avant edition.
- Executer les commandes de validation du repo listees ci-dessus.
- Relire explicitement les diffs stages avant le commit.
- Utiliser les canaux de divulgation sécurité plutôt que des issues publiques pour les rapports sensibles.

## Définition de terminé

Terminé signifie: contenu complet, liens corrects, limites de sécurité claires, validation exécutée, Git propre et remote HEAD vérifié après le push.

|Recommandation | Pourquoi c’est important|
|--- | ---|
|Contenu | Kit public de skill et plugin pour Codex, conçu pour créer, valider et empaqueter des skills de haute qualité.|
|Liens | Tous les fichiers locaux référencés doivent exister et se résoudre depuis la racine du dépôt.|
|Sécurité | Aucune skill générée ne contient de secrets, de chemins locaux ni de texte source privé.|
|Controle | Valider structure, liens, Markdown, secrets, scripts pertinents et remote HEAD avant toute annonce publique.|
|Remote | Apres le push, comparer le HEAD local avec origin/main et le remote HEAD GitHub.|

## Liens importants

|Chemin | Pourquoi c’est important|
|--- | ---|
|[README canonique](README.md) | README.md|
|[Docs d'installation](docs/INSTALL.md) | docs/INSTALL.md|
|[Docs de validation](docs/VALIDATION.md) | docs/VALIDATION.md|
|[Structure de skill](docs/SKILL_STRUCTURE.md) | docs/SKILL_STRUCTURE.md|
|[Plugin et marketplace](docs/PLUGIN_AND_MARKETPLACE.md) | docs/PLUGIN_AND_MARKETPLACE.md|
|[Modele de menace](THREAT_MODEL.md) | THREAT_MODEL.md|
|[Politique de sécurité](SECURITY.md) | SECURITY.md|

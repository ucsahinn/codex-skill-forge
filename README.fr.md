# &#128736; Codex Skill Forge - README français complet

[&#127468;&#127463; English](README.md) | [&#127465;&#127466; Deutsch](README.de.md) | [&#127466;&#127480; Español](README.es.md) | [&#127463;&#127479; Português (Brasil)](README.pt-BR.md) | [&#127481;&#127479; Türkçe](README.tr.md) | [&#127467;&#127479; Français](README.fr.md)

> Ce fichier est une page d’entrée française complète, pas un court résumé. Il couvre objectif, limites, usage, validation, sécurité et publication.
>
> README canonique en anglais: [README.md](README.md)

Public Codex skill and plugin toolkit for creating, validating and packaging high-quality Codex skills.

Commencez par le README canonique si vous voulez la description anglaise la plus actuelle. Utilisez cette page pour lire le même contrat opérationnel en français.

## Statut et signaux de confiance

|Zone | Détail|
|--- | ---|
|Statut | Public repository: ucsahinn/codex-skill-forge|
|Source de vérité | [README canonique en anglais](README.md)|
|Utilisateurs | Codex users creating reusable skills.; Maintainers preparing public skill repositories.|
|Validation | SKILL.md frontmatter is valid and trigger description is front-loaded.; Plugin JSON and optional agents/openai.yaml parse cleanly.|
|Sécurité | Includes a plugin package under plugins/codex-skill-forge.; Keeps the runtime SKILL.md lean and moves deep guidance into references.|

## Ce que contient ce dépôt

- A public-ready Codex skill that helps create other Codex skills.
- A plugin-compatible repo with skill, references, scripts, templates and docs.
- A validation harness for skill anatomy, progressive disclosure, safe generation and install checks.
- A maintainer reference for packaging a skill so other users can inspect and install it.

## Ce que ce dépôt n’est pas

- Not a place to store private prompts or customer source material.
- Not a generic prompt dump without validation.
- Not a substitute for current official Codex or Agent Skills documentation.
- Not an installer that should run destructive cleanup.

## Public visé

- Codex users creating reusable skills.
- Maintainers preparing public skill repositories.
- Reviewers checking skill safety, triggerability and packaging quality.
- Windows users who need PowerShell-friendly install and validation flows.

## Démarrage rapide

1. Clonez ou mettez à jour le dépôt.
2. Lisez README, sécurité et carte documentaire.
3. Lancez les validations adaptées.
4. Stagez uniquement les fichiers explicitement modifiés.
5. Avant push ou release, revérifiez remote, secrets et liens.

## Guide de décision

- Instruction-only skill -> keep SKILL.md concise and avoid scripts.
- Repeated deterministic work -> add scripts and validate them.
- Large reference material -> put it in references and route to it from SKILL.md.
- Public install path needed -> package as plugin and document Skills CLI usage.

## Carte du dépôt

|Chemin | Pourquoi c’est important|
|--- | ---|
|[plugins/codex-skill-forge/skills/codex-skill-forge/SKILL.md](plugins/codex-skill-forge/skills/codex-skill-forge/SKILL.md) | the actual Codex skill entrypoint|
|[plugins/codex-skill-forge/skills/codex-skill-forge/references/](plugins/codex-skill-forge/skills/codex-skill-forge/references/) | progressive-disclosure knowledge|
|[plugins/codex-skill-forge/skills/codex-skill-forge/scripts/](plugins/codex-skill-forge/skills/codex-skill-forge/scripts/) | deterministic scaffold and validation helpers|
|[templates/](templates/) | starter files for generated skills and plugins|
|[tests/forward-prompts/](tests/forward-prompts/) | realistic prompts for forward testing|
|[docs/](docs/) | install, validation, plugin and public repo guidance|
|[scripts/](scripts/) | repo-level validation and install dry-run helpers|

## Flux de travail

1. Understand the requested skill from examples and user constraints.
2. Ask only necessary clarifying questions.
3. Choose skill name, folder layout, references, scripts and optional plugin packaging.
4. Generate a lean SKILL.md plus supporting files.
5. Run structure, link, script, manifest, install and secret checks.
6. Forward-test generated skills with realistic prompts before publication.

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

- SKILL.md frontmatter is valid and trigger description is front-loaded.
- Plugin JSON and optional agents/openai.yaml parse cleanly.
- References and scripts are linked only when needed.
- Forward prompts have expected results recorded.
- No generated skill contains secrets, local-only paths or private source text.

## Limite de sécurité

- Includes a plugin package under plugins/codex-skill-forge.
- Keeps the runtime SKILL.md lean and moves deep guidance into references.
- Ships validation scripts for structure, frontmatter, plugin manifests, marketplace metadata, scripts and links.
- Includes forward-test prompts so generated skills can be checked against realistic requests.

Public-safe rule: do not add secrets, tokens, cookies, private keys, private prompts, customer data, local-only auth files, generated logs, archives or build outputs unless the canonical README explicitly says they belong in the public repo.

## Hygiène de release et publication

- Use docs/PUBLIC_REPO_CHECKLIST.md and PUBLISHING_CHECKLIST.md before any release.
- Commit only reviewed source, docs, templates and validation scripts.
- Do not publish marketplace metadata until the install path is real and tested.
- Verify remote HEAD and GitHub Actions after push.

## Maintenance

- Keep this localized README aligned with README.md when the repo contract changes.
- Prefer factual repo links over marketing claims.
- Do not invent install commands, metrics, users, releases or support promises.
- If a command is version-sensitive, re-check it before documenting it.
- When a localized file cannot be updated fully, leave a clear note instead of a partial translation.

## Chemin de contribution

- Open a focused change against the smallest set of files.
- Read AGENTS.md or CONTRIBUTING.md when present before editing.
- Run the repo validation commands listed above.
- Review staged diffs explicitly before commit.
- Use security disclosure paths instead of public issues for sensitive reports.

## Définition de terminé

Terminé signifie: contenu complet, liens corrects, limites de sécurité claires, validation exécutée, Git propre et remote HEAD vérifié après le push.

|Recommandation | Pourquoi c’est important|
|--- | ---|
|Content | Public Codex skill and plugin toolkit for creating, validating and packaging high-quality Codex skills.|
|Links | All referenced local files must exist and resolve from the repository root.|
|Security | No generated skill contains secrets, local-only paths or private source text.|
|Verification | Validez structure, liens, Markdown, secrets, scripts pertinents et remote HEAD avant toute annonce publique.|
|Remote | After push, compare local HEAD with origin/main and GitHub remote HEAD.|

## Liens importants

|Chemin | Pourquoi c’est important|
|--- | ---|
|[Canonical README](README.md) | README.md|
|[Install docs](docs/INSTALL.md) | docs/INSTALL.md|
|[Validation docs](docs/VALIDATION.md) | docs/VALIDATION.md|
|[Skill structure](docs/SKILL_STRUCTURE.md) | docs/SKILL_STRUCTURE.md|
|[Plugin and marketplace](docs/PLUGIN_AND_MARKETPLACE.md) | docs/PLUGIN_AND_MARKETPLACE.md|
|[Threat model](THREAT_MODEL.md) | THREAT_MODEL.md|
|[Security policy](SECURITY.md) | SECURITY.md|

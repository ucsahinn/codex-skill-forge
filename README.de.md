# &#128736; AI Skill Create - vollständige deutsche README

[🇬🇧](README.md) | [🇩🇪](README.de.md) | [🇪🇸](README.es.md) | [🇧🇷](README.pt-BR.md) | [🇹🇷](README.tr.md) | [🇫🇷](README.fr.md)

> Diese Datei ist eine vollständige deutsche Einstiegseite, kein kurzer Platzhalter. Sie fasst Zweck, Grenzen, Bedienung, Prüfung, Sicherheit und Veröffentlichung in einer Datei zusammen.
>
> Kanonische englische README: [README.md](README.md)

Public Codex skill and plugin toolkit for creating, validating and packaging high-quality Codex skills.

Beginnen Sie mit der kanonischen README, wenn Sie die aktuellste englische Beschreibung brauchen. Verwenden Sie diese Seite, wenn Sie den gleichen Vertrag auf Deutsch lesen wollen.

## Status und Vertrauensrahmen

|Bereich | Details|
|--- | ---|
|Status | Public repository: ucsahinn/ai-skill-create|
|Wahrheit | [Kanonische englische README](README.md)|
|Benutzer | Codex users creating reusable skills.; Maintainers preparing public skill repositories.|
|Prüfung | SKILL.md frontmatter is valid and trigger description is front-loaded.; Plugin JSON and optional agents/openai.yaml parse cleanly.|
|Sicherheit | Includes a plugin package under plugins/ai-skill-create.; Keeps the runtime SKILL.md lean and moves deep guidance into references.|

## Was dieses Repository ist

- A public-ready Codex skill that helps create other Codex skills.
- A plugin-compatible repo with skill, references, scripts, templates and docs.
- A validation harness for skill anatomy, progressive disclosure, safe generation and install checks.
- A maintainer reference for packaging a skill so other users can inspect and install it.

## Was es nicht ist

- Not a place to store private prompts or customer source material.
- Not a generic prompt dump without validation.
- Not a substitute for current official Codex or Agent Skills documentation.
- Not an installer that should run destructive cleanup.

## Für wen es gedacht ist

- Codex users creating reusable skills.
- Maintainers preparing public skill repositories.
- Reviewers checking skill safety, triggerability and packaging quality.
- Windows users who need PowerShell-friendly install and validation flows.

## Schnellstart

1. Repository klonen oder aktualisieren.
2. README, Sicherheitsdateien und Dokumentationskarte lesen.
3. Die passenden Prüfungen ausführen.
4. Nur explizit geänderte Dateien stagen.
5. Vor Push oder Release Remote-Status, Secrets und Links erneut prüfen.

## Entscheidungshilfe

- Instruction-only skill -> keep SKILL.md concise and avoid scripts.
- Repeated deterministic work -> add scripts and validate them.
- Large reference material -> put it in references and route to it from SKILL.md.
- Public install path needed -> package as plugin and document Skills CLI usage.

## Repository-Karte

|Pfad | Warum es wichtig ist|
|--- | ---|
|[plugins/ai-skill-create/skills/ai-skill-create/SKILL.md](plugins/ai-skill-create/skills/ai-skill-create/SKILL.md) | the actual Codex skill entrypoint|
|[plugins/ai-skill-create/skills/ai-skill-create/references/](plugins/ai-skill-create/skills/ai-skill-create/references/) | progressive-disclosure knowledge|
|[plugins/ai-skill-create/skills/ai-skill-create/scripts/](plugins/ai-skill-create/skills/ai-skill-create/scripts/) | deterministic scaffold and validation helpers|
|[templates/](templates/) | starter files for generated skills and plugins|
|[tests/forward-prompts/](tests/forward-prompts/) | realistic prompts for forward testing|
|[docs/](docs/) | install, validation, plugin and public repo guidance|
|[scripts/](scripts/) | repo-level validation and install dry-run helpers|

## Arbeitsablauf

1. Understand the requested skill from examples and user constraints.
2. Ask only necessary clarifying questions.
3. Choose skill name, folder layout, references, scripts and optional plugin packaging.
4. Generate a lean SKILL.md plus supporting files.
5. Run structure, link, script, manifest, install and secret checks.
6. Forward-test generated skills with realistic prompts before publication.

## Befehle und Prüfung

Führen Sie diese Befehle nur aus, wenn Sie das Repository lokal geclont haben und die Wirkung verstehen.

```powershell
npm run validate
npm run validate:links
npm run validate:plugin
npm run validate:install
gitleaks dir . --no-banner --redact
```

## Validierungs-Checkliste

- SKILL.md frontmatter is valid and trigger description is front-loaded.
- Plugin JSON and optional agents/openai.yaml parse cleanly.
- References and scripts are linked only when needed.
- Forward prompts have expected results recorded.
- No generated skill contains secrets, local-only paths or private source text.

## Sicherheitsgrenze

- Includes a plugin package under plugins/ai-skill-create.
- Keeps the runtime SKILL.md lean and moves deep guidance into references.
- Ships validation scripts for structure, frontmatter, plugin manifests, marketplace metadata, scripts and links.
- Includes forward-test prompts so generated skills can be checked against realistic requests.

Public-safe rule: do not add secrets, tokens, cookies, private keys, private prompts, customer data, local-only auth files, generated logs, archives or build outputs unless the canonical README explicitly says they belong in the public repo.

## Release- und Publikationshygiene

- Use docs/PUBLIC_REPO_CHECKLIST.md and PUBLISHING_CHECKLIST.md before any release.
- Commit only reviewed source, docs, templates and validation scripts.
- Do not publish marketplace metadata until the install path is real and tested.
- Verify remote HEAD and GitHub Actions after push.

## Wartung

- Keep this localized README aligned with README.md when the repo contract changes.
- Prefer factual repo links over marketing claims.
- Do not invent install commands, metrics, users, releases or support promises.
- If a command is version-sensitive, re-check it before documenting it.
- When a localized file cannot be updated fully, leave a clear note instead of a partial translation.

## Beitragspfad

- Open a focused change against the smallest set of files.
- Read AGENTS.md or CONTRIBUTING.md when present before editing.
- Run the repo validation commands listed above.
- Review staged diffs explicitly before commit.
- Use security disclosure paths instead of public issues for sensitive reports.

## Definition von fertig

Fertig bedeutet: Inhalt ist lokal vollständig, Links funktionieren, Sicherheitsgrenzen sind klar, Validierung ist gelaufen, Git ist sauber und der Remote-Stand ist nach dem Push geprüft.

|Empfehlung | Warum es wichtig ist|
|--- | ---|
|Content | Public Codex skill and plugin toolkit for creating, validating and packaging high-quality Codex skills.|
|Links | All referenced local files must exist and resolve from the repository root.|
|Security | No generated skill contains secrets, local-only paths or private source text.|
|Verification | Prüfen Sie Struktur, Links, Markdown, Secrets, relevante Skripte und Remote-HEAD, bevor Sie eine öffentliche Aussage machen.|
|Remote | After push, compare local HEAD with origin/main and GitHub remote HEAD.|

## Wichtige Links

|Pfad | Warum es wichtig ist|
|--- | ---|
|[Canonical README](README.md) | README.md|
|[Install docs](docs/INSTALL.md) | docs/INSTALL.md|
|[Validation docs](docs/VALIDATION.md) | docs/VALIDATION.md|
|[Skill structure](docs/SKILL_STRUCTURE.md) | docs/SKILL_STRUCTURE.md|
|[Plugin and marketplace](docs/PLUGIN_AND_MARKETPLACE.md) | docs/PLUGIN_AND_MARKETPLACE.md|
|[Threat model](THREAT_MODEL.md) | THREAT_MODEL.md|
|[Security policy](SECURITY.md) | SECURITY.md|

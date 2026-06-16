# &#128736; AI Skill Create - README completa em português do Brasil

[🇬🇧](README.md) | [🇩🇪](README.de.md) | [🇪🇸](README.es.md) | [🇧🇷](README.pt-BR.md) | [🇹🇷](README.tr.md) | [🇫🇷](README.fr.md)

> Este arquivo é uma porta de entrada completa em português do Brasil, não um resumo curto. Ele cobre objetivo, limites, uso, validação, segurança e publicação.
>
> README canônico em inglês: [README.md](README.md)

Public Codex skill and plugin toolkit for creating, validating and packaging high-quality Codex skills.

Comece pelo README canônico quando precisar da descrição em inglês mais atual. Use esta página para ler o mesmo contrato operacional em português do Brasil.

## Estado e sinais de confiança

|Área | Detalhe|
|--- | ---|
|Status | Public repository: ucsahinn/ai-skill-create|
|Fonte da verdade | [README canônico em inglês](README.md)|
|Usuários | Codex users creating reusable skills.; Maintainers preparing public skill repositories.|
|Validação | SKILL.md frontmatter is valid and trigger description is front-loaded.; Plugin JSON and optional agents/openai.yaml parse cleanly.|
|Segurança | Includes a plugin package under plugins/ai-skill-create.; Keeps the runtime SKILL.md lean and moves deep guidance into references.|

## O que este repositório é

- A public-ready Codex skill that helps create other Codex skills.
- A plugin-compatible repo with skill, references, scripts, templates and docs.
- A validation harness for skill anatomy, progressive disclosure, safe generation and install checks.
- A maintainer reference for packaging a skill so other users can inspect and install it.

## O que ele não é

- Not a place to store private prompts or customer source material.
- Not a generic prompt dump without validation.
- Not a substitute for current official Codex or Agent Skills documentation.
- Not an installer that should run destructive cleanup.

## Para quem é

- Codex users creating reusable skills.
- Maintainers preparing public skill repositories.
- Reviewers checking skill safety, triggerability and packaging quality.
- Windows users who need PowerShell-friendly install and validation flows.

## Início rápido

1. Clone ou atualize o repositório.
2. Leia README, segurança e mapa de documentação.
3. Execute as validações adequadas.
4. Stage somente os arquivos alterados de forma explícita.
5. Antes de push ou release, revise remoto, segredos e links novamente.

## Guia de decisão

- Instruction-only skill -> keep SKILL.md concise and avoid scripts.
- Repeated deterministic work -> add scripts and validate them.
- Large reference material -> put it in references and route to it from SKILL.md.
- Public install path needed -> package as plugin and document Skills CLI usage.

## Mapa do repositório

|Caminho | Por que importa|
|--- | ---|
|[plugins/ai-skill-create/skills/ai-skill-create/SKILL.md](plugins/ai-skill-create/skills/ai-skill-create/SKILL.md) | the actual Codex skill entrypoint|
|[plugins/ai-skill-create/skills/ai-skill-create/references/](plugins/ai-skill-create/skills/ai-skill-create/references/) | progressive-disclosure knowledge|
|[plugins/ai-skill-create/skills/ai-skill-create/scripts/](plugins/ai-skill-create/skills/ai-skill-create/scripts/) | deterministic scaffold and validation helpers|
|[templates/](templates/) | starter files for generated skills and plugins|
|[tests/forward-prompts/](tests/forward-prompts/) | realistic prompts for forward testing|
|[docs/](docs/) | install, validation, plugin and public repo guidance|
|[scripts/](scripts/) | repo-level validation and install dry-run helpers|

## Fluxo de trabalho

1. Understand the requested skill from examples and user constraints.
2. Ask only necessary clarifying questions.
3. Choose skill name, folder layout, references, scripts and optional plugin packaging.
4. Generate a lean SKILL.md plus supporting files.
5. Run structure, link, script, manifest, install and secret checks.
6. Forward-test generated skills with realistic prompts before publication.

## Comandos e validação

Execute estes comandos somente depois de clonar o repositório e entender o que eles verificam ou escrevem.

```powershell
npm run validate
npm run validate:links
npm run validate:plugin
npm run validate:install
gitleaks dir . --no-banner --redact
```

## Lista de verificação

- SKILL.md frontmatter is valid and trigger description is front-loaded.
- Plugin JSON and optional agents/openai.yaml parse cleanly.
- References and scripts are linked only when needed.
- Forward prompts have expected results recorded.
- No generated skill contains secrets, local-only paths or private source text.

## Limite de segurança

- Includes a plugin package under plugins/ai-skill-create.
- Keeps the runtime SKILL.md lean and moves deep guidance into references.
- Ships validation scripts for structure, frontmatter, plugin manifests, marketplace metadata, scripts and links.
- Includes forward-test prompts so generated skills can be checked against realistic requests.

Public-safe rule: do not add secrets, tokens, cookies, private keys, private prompts, customer data, local-only auth files, generated logs, archives or build outputs unless the canonical README explicitly says they belong in the public repo.

## Higiene de release e publicação

- Use docs/PUBLIC_REPO_CHECKLIST.md and PUBLISHING_CHECKLIST.md before any release.
- Commit only reviewed source, docs, templates and validation scripts.
- Do not publish marketplace metadata until the install path is real and tested.
- Verify remote HEAD and GitHub Actions after push.

## Manutenção

- Keep this localized README aligned with README.md when the repo contract changes.
- Prefer factual repo links over marketing claims.
- Do not invent install commands, metrics, users, releases or support promises.
- If a command is version-sensitive, re-check it before documenting it.
- When a localized file cannot be updated fully, leave a clear note instead of a partial translation.

## Caminho de contribuição

- Open a focused change against the smallest set of files.
- Read AGENTS.md or CONTRIBUTING.md when present before editing.
- Run the repo validation commands listed above.
- Review staged diffs explicitly before commit.
- Use security disclosure paths instead of public issues for sensitive reports.

## Definição de concluído

Concluído significa: conteúdo completo, links corretos, limites de segurança claros, validação executada, Git limpo e remote HEAD verificado depois do push.

|Recomendação | Por que importa|
|--- | ---|
|Content | Public Codex skill and plugin toolkit for creating, validating and packaging high-quality Codex skills.|
|Links | All referenced local files must exist and resolve from the repository root.|
|Security | No generated skill contains secrets, local-only paths or private source text.|
|Verification | Valide estrutura, links, Markdown, segredos, scripts relevantes e remote HEAD antes de afirmar que algo foi publicado.|
|Remote | After push, compare local HEAD with origin/main and GitHub remote HEAD.|

## Links importantes

|Caminho | Por que importa|
|--- | ---|
|[Canonical README](README.md) | README.md|
|[Install docs](docs/INSTALL.md) | docs/INSTALL.md|
|[Validation docs](docs/VALIDATION.md) | docs/VALIDATION.md|
|[Skill structure](docs/SKILL_STRUCTURE.md) | docs/SKILL_STRUCTURE.md|
|[Plugin and marketplace](docs/PLUGIN_AND_MARKETPLACE.md) | docs/PLUGIN_AND_MARKETPLACE.md|
|[Threat model](THREAT_MODEL.md) | THREAT_MODEL.md|
|[Security policy](SECURITY.md) | SECURITY.md|

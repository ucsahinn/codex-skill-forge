# 🛠️ AI Skill Create

<p align="center">
  <img src="assets/icon.svg" alt="AI Skill Create icon" width="120" />
  <br />
  <img src="assets/banner.svg" alt="AI Skill Create banner showing brief intake, skill design, validation, and plugin packaging" width="100%" />
</p>

<p align="center">
  <a href="https://github.com/ucsahinn/ai-skill-create/actions/workflows/ci.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/ucsahinn/ai-skill-create/ci.yml?branch=main&amp;style=for-the-badge&amp;label=CI&amp;logo=githubactions&amp;logoColor=white" alt="AI Skill Create CI status" />
  </a>
  <a href="https://github.com/ucsahinn/ai-skill-create/actions/workflows/secret-scan.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/ucsahinn/ai-skill-create/secret-scan.yml?branch=main&amp;style=for-the-badge&amp;label=Secret%20Scan&amp;logo=gitguardian&amp;logoColor=white" alt="AI Skill Create secret scan status" />
  </a>
  <a href="https://github.com/ucsahinn/ai-skill-create/stargazers">
    <img src="https://img.shields.io/github/stars/ucsahinn/ai-skill-create?style=for-the-badge&amp;logo=github&amp;label=Stars&amp;color=f59e0b" alt="AI Skill Create GitHub stars" />
  </a>
  <a href="https://github.com/ucsahinn/ai-skill-create/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/ucsahinn/ai-skill-create?style=for-the-badge&amp;color=111827" alt="AI Skill Create license" />
  </a>
</p>

<p align="center">
  🌐 <strong>Languages:</strong>
  <a href="README.de.md">🇩🇪 Deutsch</a> ·
  <a href="README.es.md">🇪🇸 Español</a> ·
  <a href="README.md">🇬🇧 English</a> ·
  <a href="README.pt-BR.md">🇧🇷 Português (Brasil)</a> ·
  <a href="README.tr.md">🇹🇷 Türkçe</a> ·
  <a href="README.fr.md">🇫🇷 Français</a>
</p>

**AI Skill Create** is a public-ready Codex skill and plugin package for creating better Codex skills from real briefs, examples, files, and constraints.

> ⭐ Build the skill, validate the structure, dry-run the install path, then package it for other Codex users.

It helps Codex design, scaffold, validate, forward-test, document, and package skills that are triggerable, concise, safe, progressive-disclosure friendly, and easy to install.

## ✨ What It Builds

- 🎯 strong `SKILL.md` trigger descriptions
- 🧭 lean workflows with one-level references
- ⚙️ deterministic helper scripts when reliability matters
- 🧪 validation and forward-test prompts
- 📦 plugin and marketplace metadata
- 🪟 Windows-first install and dry-run scripts
- 🔐 public repo safety checks and secret scanning

## 🚀 Quick Start

Clone the repo:

```powershell
git clone https://github.com/ucsahinn/ai-skill-create.git
cd ai-skill-create
```

Preview the direct skill install:

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File scripts/install.ps1 -DryRun
```

Install the skill into your Codex home:

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File scripts/install.ps1 -Yes
```

Then start a new Codex thread and invoke:

```text
Use $ai-skill-create to create a new Codex skill from this brief.
```

## 🧩 Plugin Layout

The plugin is self-contained:

```text
plugins/ai-skill-create/
  .codex-plugin/plugin.json
  skills/ai-skill-create/
    SKILL.md
    agents/openai.yaml
    references/
    scripts/
    assets/
```

The repo-local marketplace entry lives at [.agents/plugins/marketplace.json](.agents/plugins/marketplace.json).

## ✅ Validate Everything

Run the full local gate:

```powershell
npm run validate
```

The validation chain checks:

- repository structure
- `SKILL.md` frontmatter and routing terms
- `agents/openai.yaml`
- plugin manifest
- marketplace metadata
- markdown links
- script syntax
- install dry-run
- Gitleaks secret scan

## 🧠 Skill Workflow

When invoked, `$ai-skill-create` guides Codex through:

1. understanding concrete examples and user intent
2. choosing instruction-only vs references/scripts/assets/plugin packaging
3. writing a concise, trigger-strong `SKILL.md`
4. keeping detailed knowledge in references
5. creating deterministic helpers only when useful
6. validating structure and safety
7. forward-testing with realistic prompts
8. preparing public repo docs and release gates

## 📚 Documentation

- [Install Guide](docs/INSTALL.md)
- [Usage Guide](docs/USAGE.md)
- [Skill Structure](docs/SKILL_STRUCTURE.md)
- [Validation](docs/VALIDATION.md)
- [Plugin And Marketplace](docs/PLUGIN_AND_MARKETPLACE.md)
- [Windows Notes](docs/WINDOWS.md)
- [Public Repo Checklist](docs/PUBLIC_REPO_CHECKLIST.md)
- [SEO And Discoverability](docs/SEO.md)
- [GitHub Settings](docs/GITHUB_SETTINGS.md)
- [Sources](docs/SOURCES.md)

## 🔐 Safety Model

Generated skills can affect agent behavior. This repo treats briefs, examples, web pages, MCP output, GitHub issues, and generated text as untrusted input.

The project avoids:

- real secrets or private data
- broad default permissions
- hidden override instructions
- unreviewed global writes
- destructive cleanup
- curl-pipe-shell install patterns

See [SAFE_GENERATION.md](SAFE_GENERATION.md), [THREAT_MODEL.md](THREAT_MODEL.md), and [SECURITY.md](SECURITY.md).

## 🌍 Turkish Docs

Turkish documentation is available in [README.tr.md](README.tr.md).

## 📄 License

MIT. See [LICENSE](LICENSE).

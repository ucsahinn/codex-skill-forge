# GitHub Settings

Use this page when updating the public repository after local validation passes.

## Repository

- New repository name: `ai-skill-create`
- Legacy name: `codex-skill-forge`
- Visibility: public
- Website: leave blank unless a dedicated documentation site is published.
- Social preview image: `assets/social-preview.svg`

## About Description

AI Skill Create: toolkit for creating, validating, testing, and packaging reusable AI agent skills and Codex skills.

## Topics

`ai-skill-create`, `ai-skills`, `agent-skills`, `codex`, `openai`, `ai-agents`, `mcp`, `prompt-engineering`, `developer-tools`, `automation`, `plugins`, `windows`, `powershell`, `validation`, `security`

## Checks

Run locally before changing GitHub settings:

```powershell
npm run check
git diff --check
gitleaks detect --redact --no-banner --no-git --verbose
```

GitHub CLI metadata updates require a valid authenticated `gh` session. Do not store tokens in this repository.

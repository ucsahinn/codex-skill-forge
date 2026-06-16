# Release Notes

## v0.1.1

Validation and public-package hardening release for AI Skill Create.

Highlights:

- added `validate:contracts` to protect validator behavior
- rejected overlong normalized skill names instead of silently truncating them
- raised the runtime trigger-description quality threshold
- expanded repository structure checks for docs, examples, templates, references, scripts, and forward prompts
- added explicit expected checks to forward prompt fixtures
- clarified install smoke-test behavior in validation and install docs
- completed localized README content for German, Spanish, French, and Brazilian Portuguese

Install:

```powershell
git clone https://github.com/ucsahinn/ai-skill-create.git
cd ai-skill-create
powershell.exe -NoProfile -ExecutionPolicy Bypass -File scripts/install.ps1 -DryRun
powershell.exe -NoProfile -ExecutionPolicy Bypass -File scripts/install.ps1 -Yes
```

Validation:

```powershell
npm run validate
```

## v0.1.0

Initial public release of AI Skill Create.

Highlights:

- self-contained Codex plugin package
- `ai-skill-create` runtime skill
- progressive-disclosure references
- deterministic scaffold and validation helpers
- Windows-first install dry-run
- public repo docs in English and Turkish
- validation, CI, and secret-scan gates

Install:

```powershell
git clone https://github.com/ucsahinn/ai-skill-create.git
cd ai-skill-create
powershell.exe -NoProfile -ExecutionPolicy Bypass -File scripts/install.ps1 -DryRun
powershell.exe -NoProfile -ExecutionPolicy Bypass -File scripts/install.ps1 -Yes
```

Validation:

```powershell
npm run validate
```

# Release Notes

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

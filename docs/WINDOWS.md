# Windows Notes

PowerShell is the primary supported shell.

## Validate

```powershell
npm run validate
```

## Install Preview

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File scripts/install.ps1 -DryRun
```

## Install

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File scripts/install.ps1 -Yes
```

## Behavior

- The installer uses `$env:CODEX_HOME` when set.
- Otherwise it uses `$HOME\.codex`.
- It writes only `skills\ai-skill-create`.
- Existing installs are not replaced unless `-Force -Yes` is provided.
- Replacement creates a timestamped backup.

## Terminal Output

Success output is intentionally short. Failure output is explicit so users can copy it into an issue without exposing secrets.

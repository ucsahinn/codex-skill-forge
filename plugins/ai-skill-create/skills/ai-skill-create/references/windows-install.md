# Windows Install

Use this reference when creating install instructions or scripts for Windows users.

## Defaults

- Prefer PowerShell examples first.
- Do not require Bash for Windows installation.
- Support paths with spaces.
- Use `-LiteralPath` in PowerShell when operating on user paths.
- Keep success output quiet and ASCII.
- Print actionable errors on failure.

## Safe Install Pattern

For global skill installation:

1. Show a dry run first.
2. Write only the skill folder.
3. Do not edit Codex config unless the user explicitly asks.
4. Do not overwrite existing files unless `-Force` is passed.
5. Back up an existing target before replacing it.

## Environment Paths

Prefer:

- `$env:CODEX_HOME` when it is set
- otherwise `$HOME\.codex`

Install target:

```text
<CODEX_HOME or ~/.codex>/skills/<skill-name>
```

## Command Style

Use Windows-safe commands:

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File scripts/install.ps1 -DryRun
powershell.exe -NoProfile -ExecutionPolicy Bypass -File scripts/install.ps1 -Yes
```

When using Node CLIs on Windows, prefer `npx.cmd` in docs after the exact command has been verified.

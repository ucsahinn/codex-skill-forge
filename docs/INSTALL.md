# Install Guide

## Direct Skill Install

Preview:

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File scripts/install.ps1 -DryRun
```

Install:

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File scripts/install.ps1 -Yes
```

Install to a custom Codex home:

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File scripts/install.ps1 -DestinationRoot "$env:TEMP\codex-home" -AllowCustomDestination -Yes
```

Replace an existing install with a timestamped backup:

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File scripts/install.ps1 -Force -Yes
```

## Cross-Platform Shell Install

```bash
sh scripts/install.sh --dry-run
sh scripts/install.sh --yes
```

## Plugin Install

The plugin package lives at:

```text
plugins/ai-skill-create
```

The repo-local marketplace entry lives at:

```text
.agents/plugins/marketplace.json
```

After the repository is public, plugin installation should be verified from a clean clone before documenting any one-line marketplace command as canonical.

## Skills CLI

Skills CLI support should be verified against the installed CLI version before release notes call it canonical. The expected shape is:

```powershell
npx.cmd skills add <source> --skill ai-skill-create --agent codex --yes --global
```

Use a temporary Codex home for dry-run style testing when possible.

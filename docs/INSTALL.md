# Install Guide

## Direct Skill Install

Preview:

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File scripts/install.ps1 -DryRun
```

`-DryRun` prints the source and target and writes no files.

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

## Install Smoke Test

The repo validation path includes an isolated install smoke test:

```powershell
npm run validate:install
```

This creates a temporary Codex home under the system temp directory, copies the skill there, verifies overwrite refusal and `-Force` backup behavior, then removes only that temporary tree.

## Skills CLI

Skills CLI support should be verified against the installed CLI version before release notes call it canonical. The expected shape is:

```powershell
npx.cmd skills add <source> --skill ai-skill-create --agent codex --yes --global
```

Use a temporary Codex home for dry-run style testing when possible.

param(
  [string]$DestinationRoot,
  [switch]$DryRun,
  [switch]$Force,
  [switch]$Yes,
  [switch]$AllowCustomDestination
)

$ErrorActionPreference = "Stop"
$RepoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
$SourceSkill = Join-Path $RepoRoot "plugins\ai-skill-create\skills\ai-skill-create"

if (-not (Test-Path -LiteralPath $SourceSkill)) {
  throw "Source skill folder not found: $SourceSkill"
}

$DefaultDestinationRoot = if ($env:CODEX_HOME) { $env:CODEX_HOME } else { Join-Path $HOME ".codex" }
$CustomDestinationProvided = [bool]$DestinationRoot

if (-not $DestinationRoot) {
  if ($env:CODEX_HOME) {
    $DestinationRoot = $env:CODEX_HOME
  } else {
    $DestinationRoot = Join-Path $HOME ".codex"
  }
}

$DestinationRoot = [System.IO.Path]::GetFullPath($DestinationRoot)
if ($CustomDestinationProvided -and -not $AllowCustomDestination -and -not $DryRun) {
  throw "Custom DestinationRoot requires -AllowCustomDestination for write operations."
}
$RootOnly = [System.IO.Path]::GetPathRoot($DestinationRoot).TrimEnd('\')
if ($DestinationRoot.TrimEnd('\') -eq $RootOnly) {
  throw "Refusing to install to a drive root."
}
$HomeRoot = [System.IO.Path]::GetFullPath($HOME).TrimEnd('\')
if ($DestinationRoot.TrimEnd('\').Equals($HomeRoot, [System.StringComparison]::OrdinalIgnoreCase)) {
  throw "Refusing to install directly to the user home directory."
}
$TargetParent = Join-Path $DestinationRoot "skills"
$TargetSkill = Join-Path $TargetParent "ai-skill-create"

Write-Host "AI Skill Create installer"
Write-Host "Source: $SourceSkill"
Write-Host "Target: $TargetSkill"

if ($DryRun) {
  Write-Host "DRY RUN: no files were written"
  if (Test-Path -LiteralPath $TargetSkill) {
    Write-Host "DRY RUN: target already exists; use -Force with -Yes to replace with backup"
  }
  exit 0
}

if (-not $Yes) {
  Write-Host "No files written. Re-run with -Yes to install, or -DryRun to preview."
  exit 0
}

if ((Test-Path -LiteralPath $TargetSkill) -and -not $Force) {
  throw "Target already exists. Re-run with -Force -Yes to replace it with a timestamped backup."
}

New-Item -ItemType Directory -Path $TargetParent -Force | Out-Null

if (Test-Path -LiteralPath $TargetSkill) {
  $stamp = Get-Date -Format "yyyyMMdd-HHmmss"
  $backup = "$TargetSkill.backup-$stamp"
  Move-Item -LiteralPath $TargetSkill -Destination $backup
  Write-Host "Backed up existing skill to $backup"
}

Copy-Item -LiteralPath $SourceSkill -Destination $TargetSkill -Recurse
Write-Host "OK: installed ai-skill-create"

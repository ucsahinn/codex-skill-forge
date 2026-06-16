$ErrorActionPreference = "Stop"
$Root = Resolve-Path (Join-Path $PSScriptRoot "..")
$TempBase = [System.IO.Path]::GetFullPath([System.IO.Path]::GetTempPath())
$TempRoot = Join-Path $TempBase ("ai-skill-create-install-test-" + [Guid]::NewGuid().ToString("N"))
$PowerShellRunner = if (Get-Command powershell.exe -ErrorAction SilentlyContinue) { "powershell.exe" } else { "pwsh" }

function Invoke-Install {
  param([string[]]$Arguments)
  $global:LASTEXITCODE = 0
  $output = & $PowerShellRunner -NoProfile -ExecutionPolicy Bypass -File (Join-Path $Root "scripts/install.ps1") @Arguments
  if ($LASTEXITCODE -ne 0) {
    throw "install.ps1 failed with exit code $LASTEXITCODE. Output: $($output -join "`n")"
  }
  return $output
}

try {
  $output = Invoke-Install @("-DestinationRoot", $TempRoot, "-DryRun")
  if (($output -join "`n") -notmatch "DRY RUN") {
    throw "install.ps1 dry run did not report DRY RUN."
  }

  Invoke-Install @("-DestinationRoot", $TempRoot, "-AllowCustomDestination", "-Yes") | Out-Null
  $InstalledSkill = Join-Path $TempRoot "skills\ai-skill-create"
  if (-not (Test-Path -LiteralPath (Join-Path $InstalledSkill "SKILL.md"))) {
    throw "Temp install did not copy SKILL.md."
  }
  & node (Join-Path $InstalledSkill "scripts\validate_skill_project.mjs") $InstalledSkill | Out-Null
  if ($LASTEXITCODE -ne 0) {
    throw "Installed skill validation failed."
  }

  $global:LASTEXITCODE = 0
  $previousPreference = $ErrorActionPreference
  $ErrorActionPreference = "Continue"
  try {
    $repeatOutput = & $PowerShellRunner -NoProfile -ExecutionPolicy Bypass -File (Join-Path $Root "scripts/install.ps1") -DestinationRoot $TempRoot -AllowCustomDestination -Yes 2>&1
    $repeatExit = $LASTEXITCODE
  }
  finally {
    $ErrorActionPreference = $previousPreference
  }
  if ($repeatExit -eq 0) {
    throw "Install should refuse an existing target unless -Force is provided."
  }

  Invoke-Install @("-DestinationRoot", $TempRoot, "-AllowCustomDestination", "-Force", "-Yes") | Out-Null
  $backups = Get-ChildItem -LiteralPath (Join-Path $TempRoot "skills") -Directory -Filter "ai-skill-create.backup-*"
  if (-not $backups) {
    throw "Force install did not create a timestamped backup."
  }
}
finally {
  $ResolvedTempRoot = [System.IO.Path]::GetFullPath($TempRoot)
  if ((Test-Path -LiteralPath $ResolvedTempRoot) -and $ResolvedTempRoot.StartsWith($TempBase, [System.StringComparison]::OrdinalIgnoreCase)) {
    Remove-Item -LiteralPath $ResolvedTempRoot -Recurse -Force
  }
}

Write-Host "OK: install dry run and temp install smoke"

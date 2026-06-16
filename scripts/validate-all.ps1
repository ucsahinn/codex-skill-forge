param(
  [switch]$SkipSecrets
)

$ErrorActionPreference = "Stop"
$Root = Resolve-Path (Join-Path $PSScriptRoot "..")

function Invoke-Step {
  param(
    [string]$Name,
    [scriptblock]$Command
  )
  Write-Host "==> $Name"
  $global:LASTEXITCODE = 0
  & $Command
  if ($LASTEXITCODE -ne 0) {
    throw "$Name failed with exit code $LASTEXITCODE"
  }
}

Push-Location $Root
try {
  Invoke-Step "repository structure" { node scripts/validate-structure.mjs }
  Invoke-Step "skill frontmatter" { node scripts/validate-skill-frontmatter.mjs plugins/ai-skill-create/skills/ai-skill-create/SKILL.md }
  Invoke-Step "agents/openai.yaml" { node scripts/validate-openai-yaml.mjs plugins/ai-skill-create/skills/ai-skill-create/agents/openai.yaml }
  Invoke-Step "plugin manifest" { node scripts/validate-plugin-json.mjs plugins/ai-skill-create/.codex-plugin/plugin.json }
  Invoke-Step "marketplace metadata" { node scripts/validate-marketplace.mjs .agents/plugins/marketplace.json }
  Invoke-Step "markdown links" { node scripts/validate-markdown-links.mjs }
  Invoke-Step "script syntax" { powershell.exe -NoProfile -ExecutionPolicy Bypass -File scripts/check-script-syntax.ps1 }
  Invoke-Step "validator contracts" { node scripts/test-validator-contracts.mjs }
  Invoke-Step "install dry run" { powershell.exe -NoProfile -ExecutionPolicy Bypass -File scripts/test-install-dry-run.ps1 }
  if (-not $SkipSecrets) {
    Invoke-Step "secret scan" { powershell.exe -NoProfile -ExecutionPolicy Bypass -File scripts/security-scan.ps1 }
  }
  Write-Host "OK: all validation checks passed"
}
finally {
  Pop-Location
}

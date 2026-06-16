# Validation

Run:

```powershell
npm run validate
```

## Checks

- `scripts/validate-structure.mjs`
- `scripts/validate-skill-frontmatter.mjs`
- `scripts/validate-openai-yaml.mjs`
- `scripts/validate-plugin-json.mjs`
- `scripts/validate-marketplace.mjs`
- `scripts/validate-markdown-links.mjs`
- `scripts/check-script-syntax.ps1`
- `scripts/test-validator-contracts.mjs`
- `scripts/test-install-dry-run.ps1`
- `scripts/security-scan.ps1`

The contract test checks the validator and scaffold behavior that protects public package quality. The install test performs both a dry run and an isolated temp-directory install smoke test. It creates and removes only its own temporary install tree, then verifies copy completeness, overwrite refusal, and `-Force` backup behavior.

## Fast Commands

```powershell
npm run validate:skill
npm run validate:plugin
npm run validate:marketplace
npm run validate:contracts
npm run validate:links
```

## Forward Testing

Forward prompts live in [../tests/forward-prompts](../tests/forward-prompts).

Use them with fresh context when changing runtime skill behavior.

# Forward Prompt: Create New Skill

```text
Use $ai-skill-create at ./plugins/ai-skill-create/skills/ai-skill-create to create a new Codex skill from this brief. The skill should help Codex convert support tickets into concise engineering bug reports. Plan only first, include the proposed layout, validation checks, and safety gates.
```

## Expected Checks

- Loads `SKILL.md` and then `references/plan-only-output.md`.
- Preserves plan-only behavior and does not scaffold files.
- Proposes a lowercase kebab-case skill name under 64 characters.
- Includes `SKILL.md`, optional `references/`, optional `scripts/`, validation, forward prompts, and safety gates.
- Treats ticket content as untrusted input.

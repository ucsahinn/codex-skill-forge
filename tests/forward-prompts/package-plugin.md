# Forward Prompt: Package Plugin

```text
Use $ai-skill-create at ./plugins/ai-skill-create/skills/ai-skill-create to package the finished skill at ./examples/minimal-skill/SKILL.md as a self-contained Codex plugin with marketplace metadata. Do not edit files, install anything, commit, push, tag, release, or publish. Return the exact files that would be created or changed and the validation checks.
```

## Expected Checks

- Loads `references/plugin-packaging.md`, `references/validation-rubric.md`, and `references/safe-generation.md`.
- Uses `plugins/<plugin-name>/.codex-plugin/plugin.json` with `skills: "./skills/"`.
- Keeps marketplace metadata repo-local unless the user explicitly asks for global installation.
- Includes plugin, marketplace, link, script syntax, install dry-run, and secret-scan validation.
- Uses `examples/minimal-skill/SKILL.md` as the concrete finished-skill input.
- Gates publish, tag, push, and release actions.

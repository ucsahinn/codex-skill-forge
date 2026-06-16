# Skill Structure

AI Skill Create uses the plugin-compatible layout:

```text
plugins/ai-skill-create/
  .codex-plugin/plugin.json
  skills/ai-skill-create/
    SKILL.md
    agents/openai.yaml
    references/
    scripts/
    assets/
```

## Runtime Skill Folder

The runtime skill folder is:

```text
plugins/ai-skill-create/skills/ai-skill-create
```

It contains only files that help another Codex instance use the skill.

## Public Repo Files

Public repo files stay outside the runtime skill folder:

- README files
- install docs
- security docs
- changelog
- contributing guide
- GitHub workflows
- examples
- validation scripts

This keeps the skill lean and prevents marketing or maintenance text from entering the runtime context.

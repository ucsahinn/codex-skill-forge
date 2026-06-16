# Usage Guide

Invoke the skill in a new Codex thread:

```text
Use $ai-skill-create to create a Codex skill from this brief.
```

## Good Brief Inputs

Provide:

- the intended skill name or topic
- example user prompts
- expected outputs
- files or templates the skill should use
- whether scripts, references, assets, plugin packaging, or public repo docs are needed
- safety constraints and install target

## Common Modes

```text
Use $ai-skill-create to design a new skill. Plan only first.
```

```text
Use $ai-skill-create to improve this existing SKILL.md without bloating it.
```

```text
Use $ai-skill-create to package this skill as a plugin-ready public repo.
```

```text
Use $ai-skill-create to validate this skill folder and return actionable failures.
```

## Expected Output

For planning tasks, the skill should return:

- mission understanding
- proposed skill name and trigger description
- layout decision
- exact file plan
- validation plan
- safety gates

For execution tasks, the skill should create or edit files, run validation, fix failures, and report what passed.

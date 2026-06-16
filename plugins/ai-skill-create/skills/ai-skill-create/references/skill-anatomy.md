# Skill Anatomy

Use this reference when designing or reviewing the physical shape of a Codex skill.

## Required Core

Every skill folder must contain `SKILL.md`.

`SKILL.md` must start with YAML frontmatter containing only:

```yaml
---
name: skill-name
description: What the skill does and when Codex should use it.
---
```

Rules:

- `name` is lowercase kebab-case with letters, digits, and hyphens.
- Keep the name under 64 characters.
- The skill folder name must match `name`.
- `description` is the trigger surface. Include both action and usage contexts there.
- Do not rely on a body section called "when to use"; the body is loaded only after the skill triggers.

## Optional Resources

Use optional resources only when they improve reliability:

- `agents/openai.yaml`: UI metadata for skill lists and default prompts.
- `references/`: on-demand documentation loaded only when needed.
- `scripts/`: deterministic helpers for repeated or fragile steps.
- `assets/`: templates, icons, boilerplate, or static files used in outputs.

## What Not To Put Inside A Skill

Keep user-facing project docs out of the skill folder:

- no skill-folder README
- no install guide
- no changelog
- no release notes
- no marketing copy
- no public repo checklist

Put that material at the public repository root or under `docs/`.

## Naming Checklist

Before creating a skill:

1. Normalize the proposed title to lowercase kebab-case.
2. Collapse repeated hyphens.
3. Remove leading or trailing hyphens.
4. Reject names longer than 63 characters.
5. Prefer action-led names such as `skill-forge`, `gh-address-comments`, or `pdf-redline`.

## Description Checklist

A good description answers:

- What does this skill do?
- What concrete user requests should trigger it?
- What file types, workflows, tools, or distribution targets does it handle?
- What adjacent tasks should still trigger it?

Keep the description concise enough to survive truncation, but complete enough to route correctly.

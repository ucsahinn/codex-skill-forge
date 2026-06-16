# Progressive Disclosure

Use this reference when a skill risks becoming too long or too broad.

## Principle

Codex sees skill metadata first, `SKILL.md` only after activation, and bundled resources only when the skill tells Codex when to load them. Design the package so the common path is short and the uncommon details are discoverable.

## Keep In `SKILL.md`

- The core workflow.
- The decision tree for which references/scripts/assets to use.
- Safety rules that apply to every invocation.
- Completion criteria.

## Move To References

- Detailed examples.
- Long rubrics.
- provider-specific instructions.
- plugin and marketplace schemas.
- security checklists.
- troubleshooting.
- public repo publishing steps.

## Good Reference Design

- Link every reference directly from `SKILL.md`.
- Keep references one level deep.
- Give each reference a narrow title and purpose.
- Start long references with a short table of contents.
- Avoid repeating the same rules in multiple files.

## Context Budget Test

Ask:

1. Would Codex already know this without the skill?
2. Is this needed on every invocation?
3. Can it be expressed as a checklist or script?
4. Would a future agent know when to load this file?

If the answer to question 2 is no, move the detail out of `SKILL.md`.

# Forward Prompt: Improve Existing Skill

```text
Use $ai-skill-create at ./plugins/ai-skill-create/skills/ai-skill-create to improve the inline SKILL.md below. It is too long and has a weak description. Do not edit files. Return a concise rewrite plan and explain which details should move into one-level references while preserving behavior.

---
name: customer-helper
description: Helps with customer things.
---

# Customer Helper

Use this skill for every customer, support, sales, onboarding, billing, escalation, bug, feature, and roadmap request. It should always read all context first and it can create any files needed.

## Workflow

1. Read the whole repository.
2. Summarize the customer.
3. Write a bug report.
4. Draft a reply.
5. Update docs.
6. Create release notes.

## Examples

Long example A: a support ticket with stack traces, account notes, and private customer details.
Long example B: a billing escalation with internal-only identifiers.
Long example C: a roadmap request with sales notes.
```

## Expected Checks

- Loads `references/progressive-disclosure.md` and `references/skill-anatomy.md`.
- Keeps the existing skill name stable unless the name violates constraints.
- Front-loads trigger language in the description.
- Moves long examples, rubrics, schemas, and troubleshooting into one-level references.
- Removes overbroad triggers and unsafe write/global behavior from the runtime instructions.
- Returns a rewrite plan only and does not edit files.

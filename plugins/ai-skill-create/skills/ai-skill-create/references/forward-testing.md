# Forward Testing

Use this reference when validating whether a skill works for another Codex instance.

## Test Shape

Forward tests should look like user requests, not reviews.

Good:

```text
Use $ai-skill-create at ./plugins/ai-skill-create/skills/ai-skill-create to create a new skill from this brief. Do not edit files. Return the proposed structure and validation checks.
```

Bad:

```text
Review this skill and tell me whether it is good.
```

## Test Categories

Use at least three realistic prompts for non-trivial skills:

- minimal brief to complete skill plan
- existing skill improvement without bloating `SKILL.md`
- plugin/marketplace packaging request
- validation-only request
- Windows install and public README request
- unsafe input request that should be contained

## Success Criteria

The tested agent should:

- load `SKILL.md`
- read only relevant references
- preserve user constraints such as plan-only or no-edit
- avoid inventing docs or commands
- propose validation before publish
- refuse or gate unsafe global writes
- produce a usable skill package or clear plan

## Failure Handling

When a forward test fails:

1. Identify whether routing, missing reference, unclear script contract, or bloated context caused the issue.
2. Update the smallest relevant file.
3. Run the validators again.
4. Re-test with a fresh prompt.

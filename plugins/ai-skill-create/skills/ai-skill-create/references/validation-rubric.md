# Validation Rubric

Use this rubric before handing back a generated or updated skill.

## Score Each Area

Rate each area as `pass`, `needs work`, or `blocked`.

1. Trigger precision
   - The description includes the main action and realistic trigger phrases.
   - The description is not generic.
   - Similar non-target tasks are not accidentally captured.

2. Context discipline
   - `SKILL.md` is concise.
   - Long material lives in references.
   - References are one level deep and clearly routed.

3. Workflow usefulness
   - The skill changes Codex behavior beyond generic prompting.
   - Steps are procedural and actionable.
   - The skill tells Codex when to use scripts or assets.

4. Script reliability
   - Scripts are deterministic, self-contained, and safe by default.
   - Scripts support dry-run or validation modes when they write files.
   - Script errors are clear.

5. Safety
   - No secrets or private data.
   - No hidden prompt-injection text.
   - No broad approvals, sandbox weakening, or automatic global writes.
   - Untrusted inputs are treated as data.

6. Distribution readiness
   - Public docs live outside the skill folder.
   - Install instructions match the actual layout.
   - Plugin and marketplace metadata validate.
   - Release notes and changelog are current.

7. Forward-test evidence
   - Realistic prompts exist.
   - Failures are recorded as improvement actions.
   - The skill works without hidden context.

## Minimum Completion Bar

A skill is not complete until:

- `SKILL.md` frontmatter validates.
- All referenced files exist.
- Scripts parse and representative commands run.
- Docs do not include local-only paths or secrets.
- Forward-test prompts are present for non-trivial skills.
- The final answer names any checks that could not run.

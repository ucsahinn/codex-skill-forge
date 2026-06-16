# Plan-Only Output

Use this reference when the user asks for a plan, design, audit, or validation before file edits.

## Do Not Write

When the user says plan only, no edits, dry run, design first, or asks to stop before approval:

- do not create files
- do not run scaffold scripts
- do not install dependencies
- do not write global config
- do not publish, commit, push, tag, or release

## Required Plan Shape

Return:

1. Mission understanding.
2. Relevant source context and assumptions.
3. Proposed skill name.
4. Trigger description.
5. Expected user prompts.
6. Package shape: instruction-only, references, scripts, assets, plugin, marketplace, or public repo.
7. Proposed directory tree.
8. `SKILL.md` body outline.
9. Required references and when to load each one.
10. Required scripts and why they are deterministic.
11. Validation plan.
12. Forward-test prompts.
13. Security and privacy gates.
14. Approval phrase or next action.

## Design Validation Before Files Exist

Check the proposed design before implementation:

- The skill name is lowercase kebab-case and under 64 characters.
- The trigger description includes both action and concrete use cases.
- The body outline is shorter than the references.
- Each reference has a clear load condition.
- Scripts are justified by reliability, not convenience.
- Assets/templates are necessary for output generation.
- Public repo docs are outside the skill folder.
- Plugin packaging is included only when distribution needs it.
- Unsafe inputs are handled as data.
- The validation plan includes metadata, links, scripts, examples, and secret scanning.

## Plan-Only Completion

The plan is complete when a future implementation agent could create the package without guessing file names, validation commands, or safety boundaries.

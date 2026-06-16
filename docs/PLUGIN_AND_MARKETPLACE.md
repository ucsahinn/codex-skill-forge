# Plugin And Marketplace

## Decision Rule

Use a direct skill when a user needs only reusable workflow instructions.

Use a plugin when the skill should be installed, shared, surfaced in plugin UI, or bundled with additional Codex surfaces.

AI Skill Create ships both:

- the skill as runtime workflow
- the plugin as distribution wrapper

## Manifest

Manifest path:

```text
plugins/ai-skill-create/.codex-plugin/plugin.json
```

It points to:

```json
"skills": "./skills/"
```

## Marketplace

Marketplace path:

```text
.agents/plugins/marketplace.json
```

The entry points to:

```json
"path": "./plugins/ai-skill-create"
```

## Publication Rule

Do not claim that a marketplace install command works until it has been tested against the public repo and the final tag.

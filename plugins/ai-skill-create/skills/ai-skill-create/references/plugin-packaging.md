# Plugin Packaging

Use this reference when a generated skill should be shared as an installable Codex plugin or included in a marketplace.

## Skill vs Plugin

Use a direct skill when the user only needs a reusable workflow.

Use a plugin when the package should be installable, shared with other users, shown in plugin UI, or bundled with more than one Codex surface.

Use both when the plugin is just the distribution wrapper and the skill is the actual workflow.

## Recommended Public Layout

For a self-contained plugin:

```text
plugins/<plugin-name>/
  .codex-plugin/plugin.json
  skills/<skill-name>/
    SKILL.md
    agents/openai.yaml
    references/
    scripts/
    assets/
```

The plugin manifest should point at `./skills/`.

## Manifest Rules

`plugin.json` should include:

- `name`
- `version`
- `description`
- `author.name`
- `repository`
- `license`
- `skills`
- `interface.displayName`
- `interface.shortDescription`
- `interface.category`

Avoid `mcpServers`, `apps`, or other integration declarations unless the plugin actually ships and documents those files.

## Marketplace Rules

A repo-local marketplace can live at `.agents/plugins/marketplace.json`.

Each plugin entry needs:

```json
{
  "name": "plugin-name",
  "source": {
    "source": "local",
    "path": "./plugins/plugin-name"
  },
  "policy": {
    "installation": "AVAILABLE",
    "authentication": "ON_INSTALL"
  },
  "category": "Developer Tools"
}
```

Do not write to a user's personal marketplace during generation unless the user explicitly asks for global installation.

## Install Claims

Do not claim that a GitHub, marketplace, or Skills CLI command works until it has been verified against the final layout.

Before publishing install docs:

1. Validate the manifest.
2. Validate the marketplace entry.
3. Run a local dry-run install.
4. Verify the public remote exists.
5. Verify the command from a clean checkout or clearly label it as a source install.

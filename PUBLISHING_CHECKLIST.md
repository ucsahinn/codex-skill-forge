# Publishing Checklist

Run this checklist before commit, push, tag, release, or marketplace publication.

## Local

- `npm run validate` passes.
- `powershell.exe -NoProfile -ExecutionPolicy Bypass -File scripts/security-scan.ps1 -History` passes after git history exists.
- `git status --short` contains only intended files.
- `git diff --cached` has been reviewed.
- No archives, installers, logs, screenshots, local config, auth files, or AI state are staged.

## Docs

- README and README.tr install commands match the current repo layout.
- Changelog has the target version.
- Plugin version matches release tag.
- Sources are current enough for the claims being made.

## GitHub

- Remote repo is correct.
- Default branch is `main`.
- CI passes on GitHub.
- Secret scanning and push protection are enabled when available.
- Release notes match the tag.

## Release

- Use `v0.1.0` for the initial public release.
- For later releases, use a new semver tag that matches `package.json`, plugin manifest, changelog, and release notes.
- Do not upload generated archives unless they are intentional release assets.
- Verify remote HEAD after push.

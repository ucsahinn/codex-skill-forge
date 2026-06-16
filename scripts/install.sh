#!/usr/bin/env sh
set -eu

DRY_RUN=0
FORCE=0
YES=0
ALLOW_CUSTOM=0
DESTINATION_ROOT="${CODEX_HOME:-"$HOME/.codex"}"
CUSTOM_DESTINATION=0

while [ "$#" -gt 0 ]; do
  case "$1" in
    --dry-run) DRY_RUN=1 ;;
    --force) FORCE=1 ;;
    --yes) YES=1 ;;
    --allow-custom-destination) ALLOW_CUSTOM=1 ;;
    --destination-root)
      shift
      DESTINATION_ROOT="$1"
      CUSTOM_DESTINATION=1
      ;;
    *)
      echo "ERROR: unknown argument $1" >&2
      exit 1
      ;;
  esac
  shift
done

SCRIPT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
REPO_ROOT=$(CDPATH= cd -- "$SCRIPT_DIR/.." && pwd)
SOURCE_SKILL="$REPO_ROOT/plugins/ai-skill-create/skills/ai-skill-create"
TARGET_PARENT="$DESTINATION_ROOT/skills"
TARGET_SKILL="$TARGET_PARENT/ai-skill-create"

if [ ! -d "$SOURCE_SKILL" ]; then
  echo "ERROR: source skill folder not found: $SOURCE_SKILL" >&2
  exit 1
fi

echo "AI Skill Create installer"
echo "Source: $SOURCE_SKILL"
echo "Target: $TARGET_SKILL"

if [ "$DRY_RUN" -eq 1 ]; then
  echo "DRY RUN: no files were written"
  if [ -e "$TARGET_SKILL" ]; then
    echo "DRY RUN: target already exists; use --force with --yes to replace with backup"
  fi
  exit 0
fi

if [ "$YES" -ne 1 ]; then
  echo "No files written. Re-run with --yes to install, or --dry-run to preview."
  exit 0
fi

if [ "$CUSTOM_DESTINATION" -eq 1 ] && [ "$ALLOW_CUSTOM" -ne 1 ]; then
  echo "ERROR: custom --destination-root requires --allow-custom-destination for write operations." >&2
  exit 1
fi

case "$DESTINATION_ROOT" in
  "/"|"") echo "ERROR: refusing to install to filesystem root." >&2; exit 1 ;;
  "$HOME") echo "ERROR: refusing to install directly to the user home directory." >&2; exit 1 ;;
esac

if [ -e "$TARGET_SKILL" ] && [ "$FORCE" -ne 1 ]; then
  echo "ERROR: target already exists. Re-run with --force --yes to replace it with a timestamped backup." >&2
  exit 1
fi

mkdir -p "$TARGET_PARENT"

if [ -e "$TARGET_SKILL" ]; then
  STAMP=$(date -u +"%Y%m%d-%H%M%S")
  BACKUP="$TARGET_SKILL.backup-$STAMP"
  mv "$TARGET_SKILL" "$BACKUP"
  echo "Backed up existing skill to $BACKUP"
fi

cp -R "$SOURCE_SKILL" "$TARGET_SKILL"
echo "OK: installed ai-skill-create"

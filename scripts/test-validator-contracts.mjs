#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const failures = [];

test("scaffold rejects normalized names over 63 characters", () => {
  const longName = "enterprise ".repeat(8);
  const result = node([
    "plugins/ai-skill-create/skills/ai-skill-create/scripts/scaffold_skill.mjs",
    "--name",
    longName,
    "--dry-run"
  ]);
  assert(result.status !== 0, `expected scaffold to fail, got exit ${result.status}`);
  assert(/exceeds 63 characters|longer than 63/i.test(output(result)), "expected a length-specific error");
});

test("example normalizer rejects names over 63 characters", () => {
  const longName = "enterprise ".repeat(8);
  const result = node(["examples/scripted-skill/scripts/normalize_name.mjs", longName]);
  assert(result.status !== 0, `expected normalizer to fail, got exit ${result.status}`);
  assert(/exceeds 63 characters|longer than 63/i.test(output(result)), "expected a length-specific error");
});

test("structure validator protects every public support surface", () => {
  const source = read("scripts/validate-structure.mjs");
  const required = [
    "README.de.md",
    "README.es.md",
    "README.fr.md",
    "README.pt-BR.md",
    "docs/EXAMPLES.md",
    "docs/INSTALL.md",
    "docs/PLUGIN_AND_MARKETPLACE.md",
    "docs/PUBLIC_REPO_CHECKLIST.md",
    "docs/SKILL_STRUCTURE.md",
    "docs/SOURCES.md",
    "docs/USAGE.md",
    "docs/VALIDATION.md",
    "docs/WINDOWS.md",
    "templates/SKILL.md",
    "templates/plugin.json",
    "templates/marketplace-entry.json",
    "templates/agents-openai.yaml",
    "examples/minimal-skill/SKILL.md",
    "examples/scripted-skill/SKILL.md",
    "examples/scripted-skill/scripts/normalize_name.mjs",
    "examples/plugin-packaged-skill/plugin.json",
    "tests/forward-prompts/create-new-skill.md",
    "tests/forward-prompts/improve-existing-skill.md",
    "tests/forward-prompts/package-plugin.md",
    "tests/forward-prompts/unsafe-input.md",
    "tests/forward-prompts/RESULTS.md"
  ];
  for (const file of required) {
    assert(source.includes(`"${file}"`), `missing required structure guard for ${file}`);
  }
});

test("runtime skill validator uses repo-grade trigger threshold", () => {
  const source = read("plugins/ai-skill-create/skills/ai-skill-create/scripts/validate_skill_project.mjs");
  assert(source.includes("description.length < 80"), "runtime validator should reject descriptions under 80 chars");
});

if (failures.length) {
  console.error(failures.map((failure) => `FAIL: ${failure}`).join("\n"));
  process.exit(1);
}

console.log("OK: validator contracts");

function test(name, fn) {
  try {
    fn();
  } catch (error) {
    failures.push(`${name}: ${error.message}`);
  }
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function node(args) {
  return spawnSync(process.execPath, args, {
    cwd: root,
    encoding: "utf8",
    windowsHide: true
  });
}

function output(result) {
  return `${result.stdout || ""}\n${result.stderr || ""}`;
}

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

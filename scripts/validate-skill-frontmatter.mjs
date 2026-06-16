#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const target = process.argv[2] ? path.resolve(process.argv[2]) : path.resolve("plugins/ai-skill-create/skills/ai-skill-create/SKILL.md");
const errors = [];

if (!fs.existsSync(target)) {
  errors.push(`Missing ${target}`);
} else {
  const text = fs.readFileSync(target, "utf8");
  const parsed = parseFrontmatter(text);
  if (!parsed) {
    errors.push("SKILL.md must start with YAML frontmatter.");
  } else {
    const keys = Object.keys(parsed.data);
    for (const key of keys) if (!["name", "description"].includes(key)) errors.push(`Unsupported frontmatter key '${key}'.`);
    const { name = "", description = "" } = parsed.data;
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name)) errors.push("Skill name must be lowercase kebab-case.");
    if (name.length > 63) errors.push("Skill name must be under 64 characters.");
    if (path.basename(path.dirname(target)) !== name) errors.push("Skill folder name must match frontmatter name.");
    if (description.length < 80) errors.push("Description should be trigger-complete and at least 80 characters.");
    if (description.length > 1024) errors.push("Description must be 1024 characters or fewer.");
    for (const required of ["Create", "validate", "package", "Codex skills"]) {
      if (!description.toLowerCase().includes(required.toLowerCase())) errors.push(`Description should include '${required}'.`);
    }
    const lines = parsed.body.split(/\r?\n/).length;
    if (lines > 500) errors.push(`SKILL.md body is ${lines} lines; keep it under 500.`);
    validateResourceLinks(path.dirname(target), parsed.body, errors);
  }
}

if (errors.length) {
  console.error(errors.map((error) => `ERROR: ${error}`).join("\n"));
  process.exit(1);
}

console.log("OK: skill frontmatter");

function parseFrontmatter(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return null;
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const item = line.match(/^([A-Za-z0-9_-]+):\s*(.+)$/);
    if (!item) continue;
    data[item[1]] = item[2].trim().replace(/^["']|["']$/g, "");
  }
  return { data, body: match[2] };
}

function validateResourceLinks(root, body, targetErrors) {
  const resourcePattern = /`(references\/[^`]+|scripts\/[^`]+|assets\/[^`]+)`/g;
  let match;
  while ((match = resourcePattern.exec(body))) {
    const file = path.join(root, match[1]);
    if (!fs.existsSync(file)) targetErrors.push(`Referenced resource does not exist: ${match[1]}`);
  }
}

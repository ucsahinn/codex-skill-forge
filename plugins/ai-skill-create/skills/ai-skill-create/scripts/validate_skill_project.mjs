#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const skillRoot = path.resolve(process.argv[2] || process.cwd());
const skillFile = path.join(skillRoot, "SKILL.md");
const errors = [];

if (!fs.existsSync(skillFile)) {
  errors.push(`Missing ${skillFile}`);
} else {
  const text = fs.readFileSync(skillFile, "utf8");
  const frontmatter = parseFrontmatter(text);
  if (!frontmatter) {
    errors.push("SKILL.md must start with YAML frontmatter.");
  } else {
    const keys = Object.keys(frontmatter.data);
    for (const key of keys) {
      if (!["name", "description"].includes(key)) errors.push(`Unsupported frontmatter key '${key}'.`);
    }
    const name = frontmatter.data.name || "";
    const description = frontmatter.data.description || "";
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name)) errors.push("Skill name must be lowercase kebab-case.");
    if (name.length > 63) errors.push("Skill name must be under 64 characters.");
    if (path.basename(skillRoot) !== name) errors.push("Skill folder name must match frontmatter name.");
    if (description.length < 80) errors.push("Description is too short to route reliably.");
    if (description.length > 1024) errors.push("Description must be 1024 characters or fewer.");
    if (frontmatter.body.split(/\r?\n/).length > 500) errors.push("SKILL.md body should stay under 500 lines.");
    validateReferencedFiles(skillRoot, frontmatter.body, errors);
    validateBacktickedResources(skillRoot, frontmatter.body, errors);
  }
}

const openAiYaml = path.join(skillRoot, "agents", "openai.yaml");
if (fs.existsSync(openAiYaml)) {
  const yaml = fs.readFileSync(openAiYaml, "utf8");
  if (!yaml.includes("display_name:")) errors.push("agents/openai.yaml is missing interface.display_name.");
  if (!yaml.includes("short_description:")) errors.push("agents/openai.yaml is missing interface.short_description.");
  if (!yaml.includes("default_prompt:")) errors.push("agents/openai.yaml is missing interface.default_prompt.");
}

for (const bad of findForbiddenContent(skillRoot)) errors.push(bad);

if (errors.length) {
  console.error(errors.map((error) => `ERROR: ${error}`).join("\n"));
  process.exit(1);
}

console.log(`OK: ${path.relative(process.cwd(), skillRoot) || skillRoot}`);

function parseFrontmatter(text) {
  if (!text.startsWith("---\n") && !text.startsWith("---\r\n")) return null;
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return null;
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const item = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!item) continue;
    data[item[1]] = item[2].replace(/^["']|["']$/g, "");
  }
  return { data, body: match[2] };
}

function validateReferencedFiles(root, body, targetErrors) {
  const linkPattern = /\[[^\]]+\]\(([^)]+)\)/g;
  let match;
  while ((match = linkPattern.exec(body))) {
    const href = match[1];
    if (/^[a-z]+:/i.test(href) || href.startsWith("#")) continue;
    const withoutAnchor = href.split("#")[0];
    const target = path.resolve(root, withoutAnchor);
    if (!isInside(root, target)) targetErrors.push(`Reference escapes skill root: ${href}`);
    if (!fs.existsSync(target)) targetErrors.push(`Referenced file does not exist: ${href}`);
  }
}

function validateBacktickedResources(root, body, targetErrors) {
  const resourcePattern = /`(references\/[^`]+|scripts\/[^`]+|assets\/[^`]+)`/g;
  let match;
  while ((match = resourcePattern.exec(body))) {
    const target = path.resolve(root, match[1]);
    if (!isInside(root, target)) targetErrors.push(`Resource escapes skill root: ${match[1]}`);
    if (!fs.existsSync(target)) targetErrors.push(`Resource does not exist: ${match[1]}`);
  }
}

function isInside(parent, child) {
  const relative = path.relative(path.resolve(parent), path.resolve(child));
  return relative === "" || (!relative.startsWith("..") && !path.isAbsolute(relative));
}

function findForbiddenContent(root) {
  const problems = [];
  for (const file of walk(root)) {
    if (!/\.(md|yaml|yml|json|mjs|js|ps1|sh|txt)$/i.test(file)) continue;
    const text = fs.readFileSync(file, "utf8");
    if (/C:\\Users\\ulasc/i.test(text)) problems.push(`${path.relative(root, file)} contains a local machine path.`);
    if (/sk-[A-Za-z0-9_-]{20,}/.test(text)) problems.push(`${path.relative(root, file)} contains a secret-like token.`);
  }
  return problems;
}

function walk(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(full));
    else files.push(full);
  }
  return files;
}

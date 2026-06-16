#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const requiredFiles = [
  "README.md",
  "README.tr.md",
  "assets/icon.svg",
  "assets/banner.svg",
  "assets/social-preview.svg",
  "AGENTS.md",
  "LICENSE",
  "SECURITY.md",
  "CONTRIBUTING.md",
  "CHANGELOG.md",
  "THREAT_MODEL.md",
  "SAFE_GENERATION.md",
  "PUBLISHING_CHECKLIST.md",
  "llms.txt",
  "docs/SEO.md",
  "docs/GITHUB_SETTINGS.md",
  "package.json",
  ".gitignore",
  ".gitattributes",
  ".gitleaks.toml",
  ".agents/plugins/marketplace.json",
  "plugins/ai-skill-create/.codex-plugin/plugin.json",
  "plugins/ai-skill-create/skills/ai-skill-create/SKILL.md",
  "plugins/ai-skill-create/skills/ai-skill-create/agents/openai.yaml",
  "scripts/validate-all.ps1",
  "scripts/install.ps1",
  ".github/workflows/ci.yml",
  ".github/workflows/secret-scan.yml",
  ".github/workflows/release-check.yml"
];

const errors = [];
for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(root, file))) errors.push(`Missing required file: ${file}`);
}

const forbiddenDirs = ["node_modules", "dist", "build", "coverage", ".codex", ".agents/sessions"];
for (const item of walk(root)) {
  const rel = slash(path.relative(root, item));
  if (!rel || rel.startsWith(".git/")) continue;
  if (forbiddenDirs.some((bad) => rel === bad || rel.startsWith(`${bad}/`))) {
    errors.push(`Forbidden generated/local path present: ${rel}`);
  }
  if (/\.(zip|7z|tar|gz|msi|exe|dmg|log)$/i.test(rel)) errors.push(`Forbidden artifact present: ${rel}`);
  if (/\.(md|json|yaml|yml|mjs|ps1|sh|toml|txt)$/i.test(rel)) {
    const text = fs.readFileSync(item, "utf8");
    if (/C:\\Users\\ulasc/i.test(text)) errors.push(`${rel} contains a local machine path.`);
    const markers = [String.raw`\b${"TO"}${"DO"}\b`, String.raw`\bFIXME\b`, String.raw`\[${"TO"}${"DO"}:`];
    if (new RegExp(markers.join("|"), "i").test(text)) errors.push(`${rel} contains unfinished marker text.`);
    if (/sk-[A-Za-z0-9_-]{20,}/.test(text)) errors.push(`${rel} contains a secret-like token.`);
  }
}

const skillFiles = walk(root).filter((file) => path.basename(file) === "SKILL.md");
for (const file of skillFiles) {
  const rel = slash(path.relative(root, file));
  if (rel.startsWith("templates/")) continue;
  const folderName = path.basename(path.dirname(file));
  const text = fs.readFileSync(file, "utf8");
  const name = text.match(/^---\r?\n[\s\S]*?^name:\s*([^\r\n]+)\r?\n/m)?.[1]?.replace(/^["']|["']$/g, "");
  if (name && name !== folderName) errors.push(`${rel} folder name does not match frontmatter name.`);
}

if (errors.length) {
  console.error(errors.map((error) => `ERROR: ${error}`).join("\n"));
  process.exit(1);
}

console.log("OK: repository structure");

function walk(dir) {
  const output = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.name === ".git") continue;
    if (entry.isDirectory()) output.push(full, ...walk(full));
    else output.push(full);
  }
  return output;
}

function slash(value) {
  return value.replace(/\\/g, "/");
}

#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const args = parseArgs(process.argv.slice(2));
const name = normalizeName(args.name || "");
const outDir = args.out ? path.resolve(args.out) : process.cwd();
const resources = new Set((args.with || "references").split(",").map((item) => item.trim()).filter(Boolean));
const dryRun = Boolean(args["dry-run"]);
const force = Boolean(args.force);

if (!name) {
  fail("Pass --name <skill-name> using lowercase kebab-case words.");
}

const target = path.resolve(outDir, name);
if (!isInside(outDir, target)) {
  fail("Resolved target escaped the output directory.");
}

const plannedFiles = [
  path.join(target, "SKILL.md"),
  path.join(target, "agents", "openai.yaml")
];

for (const resource of resources) {
  if (!["references", "scripts", "assets"].includes(resource)) {
    fail(`Unsupported resource '${resource}'. Use references,scripts,assets.`);
  }
  plannedFiles.push(path.join(target, resource, ".gitkeep"));
}

if (fs.existsSync(target) && !force) {
  fail(`Target already exists: ${target}. Re-run with --force only when overwriting scaffold-managed files is intentional.`);
}

if (dryRun) {
  console.log("DRY RUN: would create");
  for (const file of plannedFiles) console.log(`- ${path.relative(process.cwd(), file)}`);
  process.exit(0);
}

fs.mkdirSync(path.join(target, "agents"), { recursive: true });
for (const resource of resources) fs.mkdirSync(path.join(target, resource), { recursive: true });

writeFile(path.join(target, "SKILL.md"), skillTemplate(name), force);
writeFile(path.join(target, "agents", "openai.yaml"), openAiYamlTemplate(name), force);
for (const resource of resources) writeFile(path.join(target, resource, ".gitkeep"), "", force);

console.log(`Created ${target}`);

function parseArgs(values) {
  const result = {};
  for (let i = 0; i < values.length; i += 1) {
    const value = values[i];
    if (!value.startsWith("--")) continue;
    const key = value.slice(2);
    const next = values[i + 1];
    if (!next || next.startsWith("--")) {
      result[key] = true;
    } else {
      result[key] = next;
      i += 1;
    }
  }
  return result;
}

function normalizeName(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 63);
}

function isInside(parent, child) {
  const relative = path.relative(path.resolve(parent), path.resolve(child));
  return relative === "" || (!relative.startsWith("..") && !path.isAbsolute(relative));
}

function writeFile(file, content, allowOverwrite) {
  if (fs.existsSync(file) && !allowOverwrite) {
    fail(`Refusing to overwrite ${file}.`);
  }
  fs.writeFileSync(file, content, "utf8");
}

function skillTemplate(skillName) {
  return `---\nname: ${skillName}\ndescription: Describe what ${skillName} does and the concrete user requests that should trigger it.\n---\n\n# ${titleCase(skillName)}\n\nUse this skill when the user's task matches the trigger description.\n\n## Workflow\n\n1. Understand the user's concrete goal and examples.\n2. Select only the references, scripts, or assets needed for the task.\n3. Execute the workflow with the smallest reliable change.\n4. Validate the output before reporting completion.\n\n## Completion Criteria\n\nThe task is complete when the requested output is produced, validation has run where applicable, and any unverified assumptions are reported.\n`;
}

function openAiYamlTemplate(skillName) {
  return `interface:\n  display_name: "${titleCase(skillName)}"\n  short_description: "Run ${skillName} workflow."\n  default_prompt: "Use $${skillName} to complete this task."\npolicy:\n  allow_implicit_invocation: true\n`;
}

function titleCase(skillName) {
  return skillName.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}

function fail(message) {
  console.error(`ERROR: ${message}`);
  process.exit(1);
}

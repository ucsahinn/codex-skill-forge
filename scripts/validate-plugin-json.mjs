#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const target = process.argv[2] ? path.resolve(process.argv[2]) : path.resolve("plugins/ai-skill-create/.codex-plugin/plugin.json");
const errors = [];

if (!fs.existsSync(target)) {
  errors.push(`Missing ${target}`);
} else {
  const pluginRoot = path.dirname(path.dirname(target));
  const data = parseJson(target, errors);
  if (data) {
    if (data.name !== "ai-skill-create") errors.push("plugin name must be ai-skill-create.");
    if (!/^\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)?$/.test(data.version || "")) errors.push("plugin version must be semver.");
    for (const field of ["description", "repository", "license", "skills"]) {
      if (!data[field]) errors.push(`plugin.json missing ${field}.`);
    }
    if (!data.author?.name) errors.push("plugin.json missing author.name.");
    if (!data.interface?.displayName) errors.push("plugin.json missing interface.displayName.");
    if (!data.interface?.shortDescription) errors.push("plugin.json missing interface.shortDescription.");
    if (!data.interface?.category) errors.push("plugin.json missing interface.category.");
    if (!String(data.skills || "").startsWith("./")) errors.push("skills path should be relative and start with ./.");
    const skillsPath = path.resolve(pluginRoot, data.skills || "");
    if (!isInside(pluginRoot, skillsPath)) errors.push("skills path must stay inside the plugin root.");
    if (!fs.existsSync(skillsPath)) errors.push(`skills path does not exist: ${data.skills}`);
    for (const forbidden of ["mcpServers", "apps", "hooks"]) {
      if (data[forbidden]) errors.push(`Do not declare ${forbidden} unless the plugin ships that integration.`);
    }
    for (const urlField of ["repository", "homepage"]) {
      if (data[urlField] && !/^https:\/\/.+/.test(data[urlField])) errors.push(`${urlField} must be an https URL.`);
    }
  }
}

if (errors.length) {
  console.error(errors.map((error) => `ERROR: ${error}`).join("\n"));
  process.exit(1);
}

console.log("OK: plugin manifest");

function isInside(parent, child) {
  const relative = path.relative(path.resolve(parent), path.resolve(child));
  return relative === "" || (!relative.startsWith("..") && !path.isAbsolute(relative));
}

function parseJson(file, targetErrors) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (error) {
    targetErrors.push(`${file} is invalid JSON: ${error.message}`);
    return null;
  }
}

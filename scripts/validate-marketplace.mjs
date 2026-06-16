#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const target = process.argv[2] ? path.resolve(process.argv[2]) : path.resolve(".agents/plugins/marketplace.json");
const errors = [];

if (!fs.existsSync(target)) {
  errors.push(`Missing ${target}`);
} else {
  const data = parseJson(target, errors);
  if (data) {
    if (!data.name) errors.push("marketplace missing name.");
    if (!data.interface?.displayName) errors.push("marketplace missing interface.displayName.");
    if (!Array.isArray(data.plugins) || data.plugins.length === 0) errors.push("marketplace plugins must be a non-empty array.");
    const entry = data.plugins?.find((item) => item.name === "ai-skill-create");
    if (!entry) errors.push("marketplace missing ai-skill-create entry.");
    if (entry) {
      if (entry.source?.source !== "local") errors.push("marketplace source.source must be local.");
      if (entry.source?.path !== "./plugins/ai-skill-create") errors.push("marketplace source.path must be ./plugins/ai-skill-create.");
      if (entry.policy?.installation !== "AVAILABLE") errors.push("marketplace policy.installation must be AVAILABLE.");
      if (entry.policy?.authentication !== "ON_INSTALL") errors.push("marketplace policy.authentication must be ON_INSTALL.");
      if (!entry.category) errors.push("marketplace entry missing category.");
      if (!fs.existsSync(path.resolve(path.dirname(path.dirname(path.dirname(target))), entry.source.path))) {
        errors.push(`marketplace plugin path does not exist: ${entry.source.path}`);
      }
    }
  }
}

if (errors.length) {
  console.error(errors.map((error) => `ERROR: ${error}`).join("\n"));
  process.exit(1);
}

console.log("OK: marketplace metadata");

function parseJson(file, targetErrors) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (error) {
    targetErrors.push(`${file} is invalid JSON: ${error.message}`);
    return null;
  }
}

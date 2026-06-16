#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const target = process.argv[2] ? path.resolve(process.argv[2]) : path.resolve("plugins/ai-skill-create/skills/ai-skill-create/agents/openai.yaml");
const errors = [];

if (!fs.existsSync(target)) {
  errors.push(`Missing ${target}`);
} else {
  const text = fs.readFileSync(target, "utf8");
  const parsed = parseSimpleYaml(text, errors);
  if (!parsed.interface) errors.push("Missing interface block.");
  if (!parsed.policy) errors.push("Missing policy block.");
  const display = parsed.interface?.display_name || "";
  const short = parsed.interface?.short_description || "";
  const prompt = parsed.interface?.default_prompt || "";
  if (!display) errors.push("Missing interface.display_name.");
  if (!short) errors.push("Missing interface.short_description.");
  if (!prompt) errors.push("Missing interface.default_prompt.");
  if (!prompt.includes("$ai-skill-create")) errors.push("default_prompt must mention $ai-skill-create.");
  if (short.length < 20 || short.length > 64) errors.push("short_description should be 20-64 characters.");
  if (parsed.policy?.allow_implicit_invocation !== "true" && parsed.policy?.allow_implicit_invocation !== "false") {
    errors.push("policy.allow_implicit_invocation must be true or false.");
  }
  if (/\t/.test(text)) errors.push("YAML should use spaces, not tabs.");
}

if (errors.length) {
  console.error(errors.map((error) => `ERROR: ${error}`).join("\n"));
  process.exit(1);
}

console.log("OK: agents/openai.yaml");

function parseSimpleYaml(text, targetErrors) {
  const result = {};
  let section = null;
  for (const [index, rawLine] of text.split(/\r?\n/).entries()) {
    if (!rawLine.trim() || rawLine.trim().startsWith("#")) continue;
    const top = rawLine.match(/^([A-Za-z0-9_-]+):\s*$/);
    if (top) {
      section = top[1];
      result[section] = {};
      continue;
    }
    const nested = rawLine.match(/^  ([A-Za-z0-9_-]+):\s*(.+)$/);
    if (nested && section) {
      result[section][nested[1]] = nested[2].trim().replace(/^["']|["']$/g, "");
      continue;
    }
    targetErrors.push(`Invalid YAML shape at line ${index + 1}: ${rawLine}`);
  }
  return result;
}

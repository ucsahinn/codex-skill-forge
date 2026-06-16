#!/usr/bin/env node
const input = process.argv.slice(2).join(" ");
const name = input
  .trim()
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/-+/g, "-")
  .replace(/^-|-$/g, "");

if (!name) {
  console.error("ERROR: provide a proposed skill name.");
  process.exit(1);
}
if (name.length > 63) {
  console.error("ERROR: normalized skill name exceeds 63 characters.");
  process.exit(1);
}

console.log(name);

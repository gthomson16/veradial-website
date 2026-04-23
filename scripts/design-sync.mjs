#!/usr/bin/env node
// Syncs the `colors:` block in DESIGN.md from the `@theme inline { ... }`
// block in src/app/globals.css. Source of truth is globals.css.
//
// Run: `npm run design:sync`
// Exits non-zero on failure. Idempotent.

import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "..");
const cssPath = resolve(repoRoot, "src/app/globals.css");
const mdPath = resolve(repoRoot, "DESIGN.md");

const css = readFileSync(cssPath, "utf8");
const md = readFileSync(mdPath, "utf8");

const themeMatch = css.match(/@theme\s+inline\s*\{([\s\S]*?)\}/);
if (!themeMatch) {
  console.error(`[design-sync] Could not find '@theme inline' block in ${cssPath}`);
  process.exit(1);
}

// Only `#rrggbb` values belong in the canonical `colors:` block — the Google
// design.md linter rejects 8-digit hex and rgba(). Alpha-bearing tokens go
// into an `effects:` extension block, which lints as free-form metadata.
const SOLID_HEX = /^#[0-9a-f]{6}$/i;

const colorTokens = [];
const effectTokens = [];
const tokenRe = /--color-([a-z0-9-]+):\s*([^;]+);/g;
let m;
while ((m = tokenRe.exec(themeMatch[1])) !== null) {
  const name = m[1].trim();
  const value = m[2].trim();
  (SOLID_HEX.test(value) ? colorTokens : effectTokens).push({ name, value });
}

if (colorTokens.length === 0) {
  console.error(`[design-sync] No solid hex --color-* tokens found in @theme block.`);
  process.exit(1);
}

const quote = (v) => `"${v}"`;

const colorsYaml =
  [
    "colors:",
    ...colorTokens.map((t) => `  ${t.name}: ${quote(t.value)}`),
  ].join("\n") + "\n\n";

const effectsYaml =
  effectTokens.length === 0
    ? ""
    : [
        "effects:",
        ...effectTokens.map((t) => `  ${t.name}: ${quote(t.value)}`),
      ].join("\n") + "\n\n";

// Match `colors:` and all indented child lines, then consume any number of
// trailing blank lines so replacement can restore exactly one separator.
const colorsBlockRe = /^colors:\n(?:[ \t]+[^\n]*\n|[ \t]*\n)*/m;
const effectsBlockRe = /^effects:\n(?:[ \t]+[^\n]*\n|[ \t]*\n)*/m;

if (!colorsBlockRe.test(md)) {
  console.error(
    `[design-sync] Could not locate an existing 'colors:' block in ${mdPath}. ` +
      `Aborting so we don't corrupt the file.`
  );
  process.exit(1);
}

let next = md.replace(colorsBlockRe, colorsYaml);
if (effectsBlockRe.test(next)) {
  next = next.replace(effectsBlockRe, effectsYaml);
} else if (effectsYaml) {
  // Insert `effects:` right after the `colors:` block if the file doesn't
  // already have one.
  next = next.replace(colorsYaml, colorsYaml + effectsYaml);
}

if (next === md) {
  console.log("[design-sync] colors block already up to date.");
  process.exit(0);
}

writeFileSync(mdPath, next);
console.log(
  `[design-sync] Updated colors block in DESIGN.md from ${colorTokens.length} globals.css tokens` +
    (effectTokens.length ? ` (+ ${effectTokens.length} effect tokens).` : ".")
);

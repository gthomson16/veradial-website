/**
 * Standalone SEO registry validator. Run via `npm run seo:validate`.
 *
 * Exit codes:
 *   0 — registry is valid (warnings only, if any)
 *   1 — registry has errors; details printed to stderr
 *
 * The same validator runs during `next build` via the sitemap call, so this
 * script's job is fast feedback without needing to spin up the full build.
 */

import { validateRegistry } from "../src/lib/seo/validatePages";
import { SEO_PAGES } from "../src/lib/seo/pageRegistry";
import { ROUTE_PREFIXES } from "../src/lib/seo/types";

function main(): void {
  const result = validateRegistry();
  const totalPages = SEO_PAGES.length;
  const publishedCount = SEO_PAGES.filter((p) => p.status === "published").length;
  const draftCount = SEO_PAGES.filter((p) => p.status === "draft").length;
  const noindexCount = SEO_PAGES.filter((p) => p.status === "noindex").length;
  const hiddenCount = SEO_PAGES.filter((p) => p.status === "hidden").length;

  const out = [
    "VeraDial SEO registry validation",
    "─".repeat(40),
    `Total pages: ${totalPages}`,
    `  published: ${publishedCount}`,
    `  draft:     ${draftCount}`,
    `  noindex:   ${noindexCount}`,
    `  hidden:    ${hiddenCount}`,
    "",
  ];

  if (Object.keys(result.scoresByPage).length > 0) {
    out.push("Quality scores (published pages):");
    const entries = Object.entries(result.scoresByPage).sort(
      ([a], [b]) => a.localeCompare(b),
    );
    for (const [key, score] of entries) {
      const [type, slug] = key.split(":");
      const path = `${ROUTE_PREFIXES[type as keyof typeof ROUTE_PREFIXES]}/${slug}`;
      out.push(`  ${score.toFixed(2)}  ${path}`);
    }
    out.push("");
  }

  if (result.warnings.length) {
    out.push(`Warnings (${result.warnings.length}):`);
    for (const w of result.warnings) {
      out.push(`  [${w.pageKey}] ${w.message}`);
    }
    out.push("");
  }

  if (result.errors.length) {
    out.push(`Errors (${result.errors.length}):`);
    for (const e of result.errors) {
      out.push(`  [${e.pageKey}] ${e.message}`);
    }
    out.push("");
  }

  if (result.ok) {
    out.push("OK — registry is valid.");
  } else {
    out.push("FAIL — fix the errors above before publishing.");
  }

  const stream = result.ok ? process.stdout : process.stderr;
  stream.write(out.join("\n") + "\n");
  process.exit(result.ok ? 0 : 1);
}

main();

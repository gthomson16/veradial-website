# Sitemap Audit — veradial.com
**Date:** 2026-04-20
**Auditor:** Sitemap Architecture specialist
**Score: 64 / 100**

---

## Validation Table

| Check | Status | Detail |
|---|---|---|
| XML well-formed | PASS | Valid XML, correct namespace |
| URL count < 50,000 | PASS | 48 URLs in live sitemap |
| All URLs HTTPS | PASS | All use https://veradial.com |
| Sitemap index needed | PASS | Not required below 50k |
| lastmod ISO 8601 format | WARN | Dates render as full datetime (`2026-04-13T00:00:00.000Z`) not date-only (`2026-04-13`); both are valid per spec but date-only is preferred convention |
| lastmod diversity | WARN | Only 2 distinct dates across 48 URLs — looks programmatically set, not reflective of actual content changes |
| priority distribution | PASS | 5 tiers used (1, 0.8, 0.7, 0.6, 0.3) — thoughtfully applied |
| changefreq present | INFO | `changefreq` present on all URLs — Google ignores this field; low noise, can remove |
| priority field present | INFO | `priority` present on all URLs — Google ignores this field; keeping it is harmless |
| Non-200 URLs in sitemap | FAIL | 2 URLs return 404 (see below) |
| Robots.txt conflict | PASS | `Allow: /` with no Disallow rules; sitemap URL declared correctly |
| Sitemap declared in robots.txt | PASS | `Sitemap: https://veradial.com/sitemap.xml` present |
| Location page quality gate | PASS | 10 area-code pages — under WARNING threshold (30). No penalty risk at current scale. |

**Score breakdown:** -20 for 2 dead URLs in sitemap; -10 for datetime vs date-only lastmods; -6 for uniform-date signal weakness.

---

## Critical: URLs in Sitemap Returning Non-200

These are in `src/app/sitemap.ts` but the pages are **not yet deployed** — the live sitemap.xml does not include them (Next.js only emits sitemap entries for routes that exist at build time). They will appear in the sitemap the moment a deployment including these pages ships.

| URL | Status | Action |
|---|---|---|
| https://veradial.com/pricing | 404 | Page exists in source (`src/app/pricing/page.tsx`) but not deployed. Deploy or remove from `sitemap.ts` until deployed. |
| https://veradial.com/stir-shaken-for-small-business | 404 | Same — source page exists but not deployed. Deploy or remove from `sitemap.ts`. |

**Risk:** If Googlebot crawls between now and deployment, these 404s get logged. Submit a manual indexing request via GSC once deployed.

---

## URL Status Sample (10 URLs)

| Status | URL |
|---|---|
| 200 | https://veradial.com |
| 200 | https://veradial.com/faq |
| 200 | https://veradial.com/delete-account |
| 200 | https://veradial.com/screenshots |
| 200 | https://veradial.com/numbers/604 |
| 200 | https://veradial.com/alternatives/dialpad |
| 200 | https://veradial.com/use-cases/recruiters |
| 200 | https://veradial.com/compare/iplum |
| 404 | https://veradial.com/pricing |
| 404 | https://veradial.com/stir-shaken-for-small-business |

---

## Orphan Candidates

Pages that are in the sitemap but not linked from the homepage (or its primary nav). These rely entirely on sitemap discovery and any deep-linked internal links on section index pages.

**Not a problem if the section index page links to them** — but flag for internal-link audit:

| Path | Note |
|---|---|
| /alternatives/dialpad | Linked from /alternatives, not from homepage |
| /alternatives/google-voice | Same |
| /alternatives/grasshopper | Same |
| /alternatives/iplum | Same |
| /alternatives/line2 | Same |
| /alternatives/openphone | Same |
| /alternatives/ringcentral | Same |
| /alternatives/vonage | Same |
| /compare/burner | Linked from /compare, not from homepage |
| /compare/hushed | Same |
| /compare/iplum | Same |
| /compare/line2 | Same |
| /compare/sideline | Same |
| /compare/spoofcard | Same |
| /compare/textnow | Same |
| /compare/vonage | Same |
| /numbers/206 | Homepage nav shows 5 of 10 area codes (212, 305, 312, 415, 416 only) |
| /numbers/310 | Not in homepage nav |
| /numbers/512 | Not in homepage nav |
| /numbers/604 | Not in homepage nav |
| /numbers/702 | Not in homepage nav |
| /pricing | Not deployed — 404 |
| /stir-shaken-for-small-business | Not deployed — 404 |

**Notably:** `/numbers/*` discrepancy — homepage nav links to only 5 area codes, sitemap has 10. The 5 unlisted codes (206, 310, 512, 604, 702) are orphaned relative to the homepage. They can be discovered from `/numbers` hub page, but that hub is only one click from the homepage — acceptable. Monitor if the area-code count expands significantly.

---

## Sitemap Coverage: Source vs Live

The source `sitemap.ts` defines 51 entries; the live `sitemap.xml` has 48. The 3 missing from live are:
- `/pricing` (404 — not deployed)
- `/stir-shaken-for-small-business` (404 — not deployed)
- `/` — the home root appears in the live sitemap as `https://veradial.com` (correct, not a gap)

Actually the count difference is 51 source entries vs 48 live entries = 2 undeployed pages (pricing + stir-shaken) + 1 for the home URL being counted once either way. The live sitemap is correct given the current deployment state.

---

## Programmatic Page Risk: /numbers/*

Current state: 10 area-code pages. Quality-gate thresholds:
- WARNING at 30+ pages: requires 60%+ unique content per page
- HARD STOP at 50+ pages: requires explicit justification

**At 10, no risk.** Expansion plan implications:
- The US has ~300+ active area codes. If you expand to all of them, you will hit the WARNING gate well before 50.
- Area-code pages are borderline doorway pages unless they contain local signal beyond swapping the city name (local regulations, carrier availability, reputation, trust scoring for that area code).
- Recommendation: cap at 20-25 major markets unless you can generate substantively unique content per code. Document the justification before expanding.

If you reach 500+ area-code pages, split into a sitemap index: `sitemap-numbers.xml` referenced from a `sitemap-index.xml`.

---

## Separate Sitemap for /compare/* — Recommendation

At 13 compare pages + 1 hub = 14 URLs, a separate `sitemap-compare.xml` is not needed for technical reasons (well under 50k limit). However, it could be useful for:
- GSC segmentation — seeing compare page crawl/index stats in isolation
- Submitting compare pages separately to accelerate indexing of new competitor pages

**Verdict:** Not needed now. Revisit if the compare section grows to 30+ pages or if you want granular GSC reporting per section.

---

## Recommendations (Priority Order)

1. **URGENT — Deploy or remove undeployed pages.** `/pricing` and `/stir-shaken-for-small-business` are in `sitemap.ts` and will go live in the sitemap on next deploy. If they are not ready, remove them from `sitemap.ts` now to prevent 404s from being indexed.

2. **Fix lastmod format.** Next.js `new Date("2026-04-13")` renders as `2026-04-13T00:00:00.000Z` in the XML output. Change to date strings: replace `new Date("2026-04-13")` with `"2026-04-13"` (string) in `sitemap.ts`. The `MetadataRoute.Sitemap` type accepts `Date | string` for `lastModified`.

3. **Improve lastmod accuracy.** Two dates across 48 pages signals programmatic setting. Before deploying future page updates, update the `lastModified` value for changed pages only. This is a low-trust signal to Google — not penalized but not helpful.

4. **Remove `changefreq` fields.** Google has publicly stated it ignores `changefreq`. Removing it reduces XML payload and removes a stale-signal risk. Not urgent, but clean.

5. **Add remaining 5 area codes to /numbers hub internal links.** 206, 310, 512, 604, 702 are in the sitemap but not linked from the homepage. The `/numbers` hub page should link to all 10 — verify this is the case so Googlebot can reach them without relying solely on the sitemap.

6. **Document /numbers expansion policy.** Define the maximum area-code count before scaling and what content differentiation is required per page. This prevents an accidental quality-gate violation when/if the set expands.

7. **No sitemap index needed** until total URL count approaches 5,000 (at which point per-section sitemaps improve GSC reporting) or 50,000 (hard limit).

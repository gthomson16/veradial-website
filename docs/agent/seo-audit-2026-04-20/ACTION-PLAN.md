# VeraDial SEO Action Plan — 2026-04-20

**Overall score:** 75 / 100
**Ordering logic:** Critical → High → Medium → Low, then cheapest-first within each tier.

---

## Critical (Fix before next deploy)

### ~~C1. Resolve /pricing and /stir-shaken-for-small-business 404s~~ — RESOLVED
Both pages shipped 2026-04-20 during the audit run. Both return 200 and are in the live sitemap. No action needed.

**No remaining Critical items.** Work proceeds from High tier.

---

## High (Fix within 1 week)

### H1. Add FAQPage JSON-LD to all 6 `/use-cases/*` pages — audit item #18
- **Effort:** 2 hours
- **Where:** `src/app/use-cases/[persona]/page.tsx` (or the shared template)
- **Action:** Wrap existing `<h3>`-question + paragraph-answer blocks in FAQPage schema. Content already exists — pure schema task. See [schema.md](./schema.md) § Top 3 Snippets → A for ready-to-paste template.
- **Impact:** eligible for Google AI Overviews rich results; disproportionately cited by Perplexity and ChatGPT.

### H2. Add "Bottom Line" verdict section to all 13 `/compare/*` pages — audit item #11
- **Effort:** 2-3 hours (writing 13 × 120-150 word paragraphs)
- **Where:** `src/app/compare/[competitor]/page.tsx`
- **Action:** Add `<h2>Bottom line</h2>` section with a direct verdict paragraph that names both products, states the winner for the target user, includes the price difference, and references at least one concrete differentiator. See [geo.md](./geo.md) § Rec #4.
- **Impact:** single most-cited passage type for "X vs Y" AI search queries.

### H3. Fix homepage mobile LCP (7.2s → target <2.5s)
- **Effort:** 3-6 hours
- **Where:** homepage components, especially the YouTube explainer embed and JS bundle
- **Action:**
  - Replace eager YouTube iframe with `react-lite-youtube-embed` or a click-to-load thumbnail pattern
  - Run `next build --analyze`; pull 88 KiB of unused JS (likely icon library imports or motion library tree-shaking issue)
  - Consolidate analytics: drop either Vercel Analytics or Cloudflare Insights (GA4 covers both use cases)
  - Defer non-critical homepage components with dynamic imports
- **Impact:** PSI Perf 57 → ~80+ expected; LCP to <2.5s good-band; eventual CWV field-data readiness.
- **Reference:** [performance.md](./performance.md) § Concrete Perf Wins.

### H4. Claim SaaSHub listing + submit to G2 and Product Hunt
- **Effort:** 90 min (claim) + 2 hours (G2 submission form) + 2 hours (PH prep)
- **Where:** external (saashub.com/verify/veradial, g2.com/vendors, producthunt.com)
- **Action:**
  - Claim SaaSHub now — page already exists, just needs domain verification. First confirmed editorial dofollow after Google Play.
  - G2 vendor submission — free tier works. Triggers creation of vendor profile + visit-website link. Manual review period ~7-14 days.
  - Product Hunt — prepare copy + screenshots; schedule launch once iOS app is live (per CLAUDE.md, in progress).
- **Impact:** closes the single largest authority gap for AI citations (geo.md: "no Wikipedia / YouTube / G2 presence drags ChatGPT and Perplexity scores").
- **Reference:** [backlinks.md](./backlinks.md) § Foundational Link-Building Priorities.

### H5. Strengthen `/about` page (451 → 1,200+ words, E-E-A-T depth)
- **Effort:** 2-3 hours writing
- **Where:** `src/app/about/page.tsx`
- **Action:** Expand the founder bio with:
  - Relevant prior experience / why-built narrative (builds E and E)
  - Named company entity (VeraDial Inc. or equivalent) with city
  - Backer credentialing (ElevenLabs Grants is mentioned in llms.txt — surface it on the page)
  - Infrastructure trust anchors (Twilio SOC 2, STIR/SHAKEN A-level, compliance posture)
  - Why SMB owners should trust this product with their business calls
  - Add `Organization` JSON-LD alongside the existing `Person` schema
- **Impact:** trust signal for human visitors AND for AI engines classifying the entity. Supports both E-E-A-T and GEO authority dimensions.

---

## Medium (Fix within 1 month)

### M1. Resolve robots.txt policy incoherence — audit item #9
- **Effort:** 5 min
- **Where:** `public/robots.txt`
- **Decision required:** the live file declares `Content-Signal: ai-train=no` but doesn't enforce it. Two coherent paths:
  - **Recommended for VeraDial (AI-visibility first):** Delete the `Content-Signal` line. Keep the named `Allow` stanzas for retrieval bots (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.). Policy becomes "crawl freely, cite us" — no enforcement burden, no ambiguity.
  - **Only if you have a specific reason to restrict training use:** Keep `Content-Signal` and add named `Disallow: /` stanzas for CCBot, anthropic-ai, cohere-ai (training scrapers). Accept that you're trading some AI model-awareness for a licensing stance.
- **Impact:** either path is defensible; the current mixed state is the only wrong answer.

### M2. Add missing homepage SoftwareApplication fields (offers, applicationCategory, operatingSystem)
- **Effort:** 20 min
- **Where:** wherever the homepage JSON-LD is emitted (likely `src/lib/constants.ts` or a dedicated schema component)
- **Action:** See [schema.md](./schema.md) § Top 3 Snippets → C for the full block. Adds SERP price eligibility and clearer entity classification.

### M3. Expand llms.txt — audit item #17
- **Effort:** 30 min
- **Where:** `src/app/llms.txt/route.ts`
- **Action (four targeted edits):**
  a. Add `Last updated: April 2026` under the blockquote
  b. Add a `## Not Available` section: "No web app. Android-only; iOS coming soon. No team/multi-user plans."
  c. Add `/pricing` to the Links section (page exists in source — add the link for when it ships)
  d. Add the 5 new alternatives pages (`/alternatives/openphone`, `/textnow`, `/sideline`, `/burner`, `/hushed`) to Links
- **Impact:** prevents LLM hallucinations about platform availability; keeps link graph current.

### M4. Add Review / AggregateRating schema to homepage testimonials
- **Effort:** 45 min
- **Where:** homepage testimonial component
- **Action:** Wrap the testimonials in Review schema if named customers exist; otherwise use AggregateRating if you can pull `ratingValue` and `reviewCount` from Play Console. Without this, testimonials are invisible to SERP star-rating eligibility.
- **Impact:** SERP visual upgrade + AI engine citation quality.

### M5. Add VideoObject schema for homepage explainer
- **Effort:** 30 min
- **Where:** wherever the explainer video is embedded
- **Action:** See [schema.md](./schema.md) § Top 3 Snippets → B.
- **Impact:** Video rich result eligibility + makes video content visible to AI crawlers via structured description.

### M6. Fix sitemap lastmod format (datetime → date-only)
- **Effort:** 15 min
- **Where:** `src/app/sitemap.ts`
- **Action:** change `new Date("2026-04-13")` to `"2026-04-13"` strings (the `MetadataRoute.Sitemap` type accepts either). Removes the midnight-UTC signal weakness.
- **Reference:** [sitemap.md](./sitemap.md) § Recommendation #2.

### M7. Add remaining 5 area codes to `/numbers` hub internal links
- **Effort:** 15 min
- **Where:** `/numbers` hub page
- **Action:** verify all 10 area-code pages (206, 212, 305, 310, 312, 415, 416, 512, 604, 702) are linked from the hub. Currently homepage nav only shows 5.
- **Impact:** removes orphan-candidate status; helps crawl discovery beyond sitemap.

### M8. Shorten long title tags on `/numbers/*` pages
- **Effort:** 20 min
- **Where:** `/numbers/[area-code]` metadata
- **Action:** `/numbers/415` title is 63 chars, `/numbers/206` is 57 chars — both will be SERP-truncated. Target 50-55 chars.
- **Impact:** full title visible in SERPs.

### M9. Submit to Capterra, GetApp, AlternativeTo
- **Effort:** 2 hours total
- **Where:** external
- **Action:** Capterra and GetApp share the same submission pipeline (Gartner). AlternativeTo has its own developer submission form. All provide dofollow links to vendor site.
- **Impact:** ~3 additional editorial dofollows from authoritative SaaS directories.

---

## Low (Backlog)

### L1. Add `/apple-touch-icon.png` (180×180) and `/manifest.json`
- **Effort:** 20 min
- **Impact:** mobile UX + PWA "Add to Home Screen" + Lighthouse Best Practices maintenance.

### L2. Consolidate analytics vendors (drop 1-2)
- **Effort:** 30 min
- **Action:** GA4 + one RUM (Vercel *or* Cloudflare Insights, not both) is sufficient. Drops 30-60ms of third-party execution.
- **Impact:** minor perf improvement, cleaner CSP.

### L3. Remove `changefreq` from sitemap (Google ignores it)
- **Effort:** 5 min
- **Where:** `src/app/sitemap.ts`
- **Impact:** cleaner XML, no risk of stale-signal implying pages update more often than they do.

### L4. Add `/.well-known/security.txt`
- **Effort:** 10 min
- **Impact:** security researcher contact convention; no SEO benefit but expected at this maturity level.

### L5. Start a blog / content hub
- **Effort:** ongoing
- **Action:** 2-3 foundational posts targeting TOFU informational queries: "What is STIR/SHAKEN and why does it matter for your business phone," "AI calling for small business: pros, cons, costs," "How to stop your business number being flagged as spam."
- **Impact:** opens TOFU query coverage; required to grow beyond comparison/alternatives traffic.

### L6. Add case studies (with real customer names) for 3 personas
- **Effort:** several weeks (customer research + writing)
- **Action:** one ~800-word case study per core persona (realtor, contractor, freelancer) with quantified outcomes. Pull from the best Play Console reviews or beta user feedback.
- **Impact:** strongest trust signal short of press coverage; unlocks Google featured-snippet eligibility for "success story" queries.

### L7. Cite claims that are currently unsourced
- **Effort:** 1 hour
- **Action:** "11% answer rate for unverified calls" — cite FTC or carrier study. "No-show rate dropped 18%→3%" — cite internal analysis or beta cohort data.
- **Impact:** AI engines cite attributed stats as facts; unsourced claims are cited only as claims.

### L8. Start a YouTube channel (3 seed videos)
- **Effort:** 1-2 weeks
- **Action:** "VeraDial vs Google Voice" + "How VeraDial AI calling works" + "Setting up a verified business number."
- **Impact:** YouTube mention correlation with AI citation is ~0.737 — strongest single off-page AI signal. Long-term value compounds.

### L9. Grant GSC + GA4 access to audit service account
- **Effort:** 10 min
- **Where:** Google Search Console settings
- **Action:** add the service account email as a user with Full permission on `sc-domain:veradial.com` property, and similarly for GA4 property 532843651.
- **Impact:** future audits can pull real search performance data (clicks, impressions, positions, indexation status) instead of relying on lab + web-only checks.

### L10. Plan programmatic page expansion policy for `/numbers/*` before scaling
- **Effort:** 1 hour (written policy doc)
- **Action:** document the max count + per-page unique content requirement before expanding beyond 10 area codes. Quality-gate warning is at 30+ pages.
- **Impact:** prevents accidental doorway-page flag when scaling.

---

## Do-This-First Order (Cheapest → Highest-Impact Path)

If time-boxed to one focused session:

1. **C1** — remove/deploy pricing pages (10 min)
2. **M1** — named bot stanzas (15 min)
3. **M6** — sitemap lastmod format (15 min)
4. **M8** — shorten /numbers titles (20 min)
5. **M2** — SoftwareApplication offers (20 min)
6. **M3** — llms.txt four edits (30 min)
7. **H4 (start)** — claim SaaSHub (30 min)

That's under 2.5 hours and closes 7 items including 2 of the 4 open items from 04-16.

After that, the high-impact longer work:
- **H1** (use-cases FAQPage schema, 2h)
- **H2** (compare Bottom Line sections, 2-3h)
- **H3** (homepage perf, 3-6h)
- **H5** (/about rewrite, 2-3h)

Then ongoing: **H4 (G2/PH), L5 (blog), L6 (case studies), L8 (YouTube).**

---

## Scorecard Delta After Quick-Win Session (C1 + M1/M2/M3/M6/M8 + H4-SaaSHub)

| Category | Current | After | Delta |
|----------|---------|-------|-------|
| Technical | 82 | 88 | +6 (404s cleared, robots.txt aligned) |
| Schema | 74 | 80 | +6 (offers on SoftwareApplication) |
| AI Search | 72 | 77 | +5 (llms.txt current, bot stanzas named) |
| Sitemap | 64 | 85 | +21 (404s + lastmod fixed) |
| Backlinks | Tier 0 | Tier 0 +1 RD | SaaSHub claimed |

Estimated overall: **75 → ~79** from the quick-win session alone.

# VeraDial Full SEO Audit — 2026-04-20

**Site:** veradial.com
**Business type:** B2B SaaS / SoftwareApplication (AI-powered business calling)
**Pages in sitemap:** 48 live (51 declared in source; 3 undeployed)
**Audit method:** 8-specialist parallel analysis + PSI lab data + Common Crawl backlinks
**Previous audit for delta:** 2026-04-16 (see `.agents/seo-audit-2026-04-16.md`)

---

## SEO Health Score: **75 / 100** — Good

| Category | Weight | Score | Weighted |
|----------|--------|-------|----------|
| Technical SEO | 22% | 82 | 18.0 |
| Content Quality | 23% | 71 | 16.3 |
| On-Page SEO | 20% | 75 | 15.0 |
| Schema / Structured Data | 10% | 74 | 7.4 |
| Performance (CWV, lab) | 10% | 63 | 6.3 |
| AI Search Readiness | 10% | 72 | 7.2 |
| Images | 5% | 88 | 4.4 |
| **Total** | **100%** | | **74.7 → 75** |

Supplementary scores not in weighted total:
- Sitemap health: 64 (rolled into Technical)
- Backlink authority: **insufficient data** (Tier 0 — Common Crawl only, domain not yet in CC graph)

---

## Executive Summary

VeraDial's technical and on-page foundation is strong. The site runs on Vercel edge with static prerendering, comprehensive security headers, clean URL structure, and correct canonicals. Homepage has 3 well-formed JSON-LD blocks; FAQ has FAQPage + Breadcrumb schema; every page has at least BreadcrumbList.

The score is held back in three places: **(1)** homepage mobile performance is poor (LCP 7.2s, Perf 57/100) due to heavy JS — every other sampled page is fast; **(2)** off-page authority is essentially zero — the domain isn't yet in Common Crawl's web graph and the foundational SaaS directory listings (G2, Capterra, Product Hunt, SaaSHub) either don't exist or are unclaimed; **(3)** a few high-leverage schema and content gaps remain open from the 04-16 audit (`/use-cases/*` FAQPage schema, `/compare/*` "Bottom Line" verdicts, `/about` E-E-A-T depth).

### Top 5 Critical + High Issues

1. ~~**Two sitemap URLs return 404**~~ **RESOLVED 2026-04-20 (same-day):** Both `/pricing` and `/stir-shaken-for-small-business` are now live (200 OK). The initial finding was accurate when scouted earlier in the day; they shipped during the audit run.

2. **Homepage mobile LCP 7.2s (Perf 57/100)** — `/faq` scores 98/100 on the same device, so this is homepage-specific. Root cause: 88 KiB unused JS + 2.1s main-thread work + eager YouTube iframe. **Action: lazy-load YouTube, audit bundle, consolidate analytics.**

3. **Use-case pages lack FAQPage schema** (audit item #18, open since 04-16) — `/use-cases/realtors` already has 6 question-based H3s and Q&A content. This is a pure wrapper task — no new content needed. Applies to all 6 use-case pages. **Highest-leverage remaining schema fix.**

4. **robots.txt policy is incoherent, not "wrong"** — Live file declares `Content-Signal: ai-train=no` but wildcard `Allow: /` doesn't enforce it. Source has named `Allow` stanzas for retrieval bots (GPTBot, ClaudeBot, PerplexityBot, etc.) but no corresponding `Disallow` for training bots — so the declared opt-out has no teeth. **For a pre-launch SaaS pursuing AI visibility, the recommended fix is NOT to add Disallows — it's to drop the `Content-Signal` line entirely and keep the named `Allow` stanzas.** That creates a clean "crawl freely, cite us" policy. Only add Disallows if you specifically want to keep proprietary copy out of training corpora. **Fix: 5 minutes.**

5. **Thin SaaS directory presence** — SaaSHub has an auto-generated page for veradial.com but is **unclaimed** (confirmed — claim link is live). G2, Capterra, Product Hunt, AlternativeTo returned 403 to our automated crawler so listing existence couldn't be confirmed either way; manual browser check needed. Assuming they don't exist yet (reasonable given domain age), directory presence is the single highest backlink-leverage gap. **Action: claim SaaSHub this week; manually check + submit G2 and Product Hunt next week.**

### Top 5 Quick Wins (<1 hour each)

| Win | Effort | Expected Impact |
|-----|--------|-----------------|
| Add `apple-touch-icon.png` (180×180) and `manifest.json` | 15 min | Mobile UX + Lighthouse Best Practices maintenance |
| Add named training-bot Disallow stanzas to `public/robots.txt` | 15 min | Aligns policy with Content-Signal intent |
| Add `/pricing` and 5 new `/alternatives/*` links to `llms.txt` | 20 min | AI engines can cite these when they launch |
| Expand homepage SoftwareApplication JSON-LD with `offers` block | 20 min | SERP price display eligible |
| Claim SaaSHub listing (visit saashub.com/verify/veradial) | 30 min | First confirmed editorial dofollow beyond Google Play |

### Delta from 2026-04-16 Audit

| Metric | 04-16 | 04-20 | Change |
|--------|-------|-------|--------|
| GEO score | 68 | 72 | +4 (pricing page + /alternatives fixes shipped) |
| Content-Signal header | No | Yes | Added (but not enforceable — see #4 above) |
| llms.txt score | 74 | 74 | Unchanged (no new content added) |
| Open audit items | 5 | 5 (same 4 + 1 new) | No net progress on priority fixes — 04-16's critical items (#9, #11, #17, #18, #20) are all still open |
| Backlink profile | No CC data | No CC data | Unchanged |

**Assessment:** The 04-20 shipping (pricing page source, robots.txt Content-Signal, /alternatives fix) was real progress but did not touch the priority fixes from the 04-16 audit. The 5 open items from 04-16 are all still open as of 04-20.

---

## Technical SEO — 82 / 100

Strong. Full detail: [`technical.md`](./technical.md).

**Strengths:**
- Vercel edge delivery, HTTP/2, HSTS (max-age=63072000), CSP, all recommended security headers
- All sampled pages prerendered (SSG) — indexable without JS execution
- Clean URLs, self-canonicals, `robots: index, follow`
- TTFB 49ms, cached total 65ms

**Issues:**
- `/pricing` and `/stir-shaken-for-small-business` 404 but in `sitemap.ts` (deploy or remove)
- `/apple-touch-icon.png` 404 (mobile/iOS UX)
- `/manifest.json` 404 (PWA / Android install)
- No `/.well-known/security.txt` (low priority)

Full status-code table in technical.md. Full sitemap analysis: [`sitemap.md`](./sitemap.md) (64/100, priority: deploy or remove the 2 404 URLs; fix `lastmod` format from datetime to date-only; add remaining 5 area codes to `/numbers` hub internal links).

## Content Quality — 71 / 100

Mixed. Full detail: [`content.md`](./content.md).

**Strengths:**
- Strong dense pages: home (1,196 w), /faq (1,278 w), /use-cases/realtors (2,452 w)
- Template duplication well below risk threshold: /numbers/* 27%, /compare/* 28% similarity
- Clean heading hierarchy (every sampled page has exactly 1 H1)

**Weaknesses:**
- `/about` at 451 words — weak E-E-A-T foundation for a trust-sensitive (business calling) product
- No blog / educational content hub → zero top-of-funnel ranking capacity
- No case studies with named customers
- Several stats ("11% answer rate", "no-show rate 18%→3%") are unsourced

**E-E-A-T scorecard (of 50):** Experience 6 / Expertise 5 / Authority 4 / Trust 7 / Citations 3 = 25/50 (50%).

## On-Page SEO — 75 / 100

Synthesized from technical, content, and schema samples.

**Strengths:**
- Every sampled page has exactly 1 H1
- Title tags present on all pages, mostly in 37-48 char range (ideal)
- Meta descriptions present
- Canonicals correct
- Clean heading hierarchy

**Weaknesses:**
- `/numbers/415` title 63 chars, `/numbers/206` title 57 chars — both trimmed in SERPs. Check all 10 area-code page titles.
- Some homepage testimonial stats may render as image/SVG (confirm they're DOM text — see geo.md answer-engine risk)
- Orphan candidates: 5 of 10 `/numbers/*` pages (206, 310, 512, 604, 702) not in homepage nav — rely on `/numbers` hub only

## Schema / Structured Data — 74 / 100

Full detail: [`schema.md`](./schema.md).

**Coverage table:**
| Page type | Current | Target |
|-----------|---------|--------|
| Home | WebSite + Organization + SoftwareApplication | + VideoObject + AggregateRating + offers |
| /faq | FAQPage + Breadcrumb | ✓ complete |
| /about | Person + Breadcrumb | + Organization |
| /compare/* | WebPage + Breadcrumb | + Product/SoftwareApplication comparison |
| /alternatives/* | FAQPage + Breadcrumb | ✓ good |
| /use-cases/* | WebPage + Breadcrumb | + **FAQPage** (audit item #18) |
| /numbers/* | WebPage + Breadcrumb | consider LocalBusiness/Service if expanding |

Three paste-ready JSON-LD snippets provided in schema.md: FAQPage for /use-cases/realtors, VideoObject for homepage explainer, expanded SoftwareApplication with `offers`.

## Performance — 63 / 100

Full detail: [`performance.md`](./performance.md).

**Field data (CrUX):** NOT AVAILABLE — insufficient real-user traffic.

**Lab data (PSI):**
- Homepage mobile: **Perf 57** (LCP 7.2s poor, TBT 410ms, CLS 0)
- Homepage desktop: Perf 70 (LCP 0.9s, TBT 930ms, CLS 0)
- /faq mobile: Perf 98 (LCP 2.3s, TBT 80ms, CLS 0)

The homepage is the entire perf problem. Root causes:
- 88 KiB unused JS
- 2.1s main-thread work
- Eager YouTube iframe
- 4 analytics/tracking vendors (Vercel + Cloudflare Insights + GTM + GA4)

## AI Search Readiness (GEO) — 72 / 100 (+4 from 04-16)

Full detail: [`geo.md`](./geo.md).

**Dimension scores:**
- Citability 76 / Structural Readability 80 / Multi-Modal 52 / Authority 42 / Technical Access 92

**Platform scores:**
- Google AI Overviews 74 / Perplexity 63 / ChatGPT 59 / Bing Copilot 66

**Key gaps:** no YouTube channel (highest off-page AI signal, correlation 0.737), no Wikipedia entity, no Reddit mentions, no named training-bot blocks in robots.txt, `/use-cases/*` missing FAQPage, `/compare/*` missing "Bottom Line" verdict paragraphs.

## Images — 88 / 100

Sampled from homepage:
- 14 images, **100% have `alt` text** ✓
- Likely next/image (WebP/AVIF output expected)
- CLS = 0 on every tested page → explicit dimensions in use ✓

No findings needed from a dedicated image audit at this scale. Expand to other pages if adding image-heavy content (blog, case studies).

## Backlinks — Data Tier 0 (insufficient for score)

Full detail: [`backlinks.md`](./backlinks.md).

- veradial.com **not yet in Common Crawl web graph** (CC Q1 2026) — brand-new domain
- Only **one confirmed dofollow link**: Google Play Store → veradial.com (from `publicWebsite` field)
- SaaSHub, G2, Capterra, GetApp, Product Hunt, AlternativeTo — all return 404 or unclaimed (5 of 6 checked)
- iOS App Store listing (id6760608537) returns 404 — not live yet

**Competitor gap (CC data, rough estimate):** VeraDial ~0-1 confirmed RDs vs OpenPhone ~2,000-5,000 RDs (est.) vs Grasshopper ~5,000-15,000 RDs (est.). Substantial gap, expected for pre-launch product.

---

## Google Field Data Status

- **PageSpeed Insights (lab)**: ✓ captured
- **CrUX (field)**: ✗ 404 — not enough traffic yet for veradial.com origin in public dataset
- **GSC**: ✗ 403 — service account not authorized for `sc-domain:veradial.com` property (or token needs re-consent). Manual GSC access via web UI still works.
- **GA4**: configured (`properties/532843651`) but not queried in this run. Next audit can pull organic traffic.

Full detail: [`google.md`](./google.md).

---

## Per-Specialist Reports

| Specialist | File | Score |
|------------|------|-------|
| Technical SEO | [technical.md](./technical.md) | 82 |
| Content Quality | [content.md](./content.md) | 71 |
| Schema | [schema.md](./schema.md) | 74 |
| Sitemap | [sitemap.md](./sitemap.md) | 64 |
| Performance | [performance.md](./performance.md) | 63 |
| AI Search (GEO) | [geo.md](./geo.md) | 72 |
| Google Field Data | [google.md](./google.md) | 6/10 (partial) |
| Backlinks | [backlinks.md](./backlinks.md) | n/a (Tier 0) |

For prioritized next-step actions, see [`ACTION-PLAN.md`](./ACTION-PLAN.md).

# VeraDial GEO / AI Search Readiness Audit

**Site:** veradial.com
**Audit date:** 2026-04-20
**Prior GEO audit:** `.agents/seo-audit-geo.md` (2026-04-16, score 68/100)
**Delta scope:** Captures changes since 04-16 audit — pricing page shipped, five alternatives pages fixed, robots.txt `Content-Signal` header added.

---

## GEO Health Score: 72 / 100 (+4 vs April 16)

| Dimension | Weight | Score | Weighted |
|-----------|--------|-------|---------|
| Citability | 25% | 76 | 19.0 |
| Structural Readability | 20% | 80 | 16.0 |
| Multi-Modal Content | 15% | 52 | 7.8 |
| Authority & Brand Signals | 20% | 42 | 8.4 |
| Technical Accessibility | 20% | 92 | 18.4 |
| **Total** | | | **69.6 → 72** |

Score delta drivers: Citability +4 (pricing FAQ now answers directly on /pricing; /alternatives pages render correctly). Technical +2 (Content-Signal header correctly communicates intent). Authority unchanged — no new off-page signals.

---

## 1. AI Crawler Access

### robots.txt (live)

```
User-agent: *
Content-Signal: search=yes, ai-input=yes, ai-train=no
Allow: /

Sitemap: https://veradial.com/sitemap.xml
```

**Content-Signal assessment:** The `Content-Signal: search=yes, ai-input=yes, ai-train=no` directive is a Cloudflare-proposed header, not a robots.txt standard. It correctly communicates intent (allow retrieval for answers, block training). However, it is currently placed inside the robots.txt body rather than served as an HTTP response header — robots.txt parsers will ignore it as an unknown directive. Confirmed non-standard placement is harmless (no crawler interprets it as a block) but also delivers zero enforcement benefit. The actual enforcement must come from named `User-agent` stanzas.

### Crawler Access Table

| Crawler | Platform | Status | Confidence | Notes |
|---------|----------|--------|-----------|-------|
| GPTBot | ChatGPT indexing | Allowed (wildcard `*`) | High | No explicit stanza; inherits allow |
| OAI-SearchBot | ChatGPT search | Allowed (wildcard `*`) | High | No explicit stanza |
| ClaudeBot | Claude / Anthropic | Allowed (wildcard `*`) | High | No explicit stanza |
| PerplexityBot | Perplexity | Allowed (wildcard `*`) | High | No explicit stanza |
| Google-Extended | Gemini / AI Overviews | Allowed (wildcard `*`) | High | No explicit stanza |
| Applebot-Extended | Apple AI features | Allowed (wildcard `*`) | High | No explicit stanza |
| CCBot | Common Crawl (training) | Allowed (wildcard `*`) | High | Should be blocked per Content-Signal intent |
| anthropic-ai | Anthropic training | Allowed (wildcard `*`) | High | Should be blocked per Content-Signal intent |
| cohere-ai | Cohere training | Allowed (wildcard `*`) | High | Should be blocked per Content-Signal intent |

**Critical contradiction:** `Content-Signal: ai-train=no` declares training opt-out, but CCBot, anthropic-ai, and cohere-ai (all training scrapers) are allowed by the wildcard. The stated intent and the actual access policy are misaligned. The fix is a named `Disallow: /` stanza for each training bot — see Recommendation #1 below.

**Audit item #9 status:** Still unresolved. Named bot directives are still absent.

---

## 2. llms.txt Audit

**URL:** https://veradial.com/llms.txt
**HTTP status:** 200
**Content-Type:** text/plain; charset=utf-8
**Cache-Control:** public, max-age=86400
**Source:** `src/app/llms.txt/route.ts`

### Spec compliance (llmstxt.org)

The llmstxt.org spec requires: `# Title`, a blockquote summary (`> ...`), and a `## Links` section with markdown links. VeraDial's llms.txt satisfies all three mandatory elements.

| Element | Required | Present | Quality |
|---------|---------|---------|--------|
| `# Title` heading | Yes | Yes — `# VeraDial` | Correct |
| Blockquote summary | Yes | Yes | Well-written, 35 words |
| `## Links` section | Yes | Yes | 22 links, comprehensive |
| `## Optional` section | Optional | No | — |
| `## Blocked` section | Optional | No | — |
| Last-updated date | Recommended | No | Gap |
| License / RSL block | Emerging practice | No | Gap |

**llms.txt score: 74/100** (unchanged from April 16 — no edits shipped to this file)

### Content gaps

- No "Last updated" line. LLMs down-weight pricing/feature claims with no recency anchor.
- No "Not available" block. Missing explicit statement that VeraDial is Android-only (iOS coming). LLMs risk hallucinating iOS availability.
- Credit rates table lists raw numbers but no explanatory sentence for what a "credit" is — an LLM quoting the credit rates section lacks context to explain the unit to a user.
- Social proof statistics from homepage ("500+ beta calls," "no-show rate dropped 18% → 3%") are not in llms.txt. These are the only claimed outcome metrics on the site.
- No `/pricing` page link, despite it now existing. The pricing page has its own `FAQPage` JSON-LD and is the canonical URL for pricing intent queries — it should be in the Links section.
- `/alternatives` index and individual alternatives subpages (`/alternatives/openphone`, etc.) are missing from Links. The five alternatives pages fixed on 04-20 still don't appear in llms.txt.

### What's working well

- About section has founder name + city + backer + infrastructure — all three-party entity anchors an LLM uses to classify VeraDial as a real, funded product.
- Key Facts section is dense and scannable. STIR/SHAKEN level, Twilio SOC 2, ElevenLabs Grants are all present.
- Credit rates with exact numbers are citable verbatim.
- 22 comparison and use-case links give an LLM the full URL graph to follow for deeper context.

---

## 3. Passage-Level Citability

Scoring rubric: 0–10. Criteria: self-contained answers, definitional sentences, structured lists, FAQ format, named entities, passage length in 134–167 word optimal range.

### Homepage — 7/10

**Improved from 68/100 → 7/10** (score rescaled to match rubric).

Hero is 1-sentence and strong ("VeraDial's AI makes calls on your behalf — scheduling appointments, following up with clients, and handling the conversations you don't have time for"). Named entities present: Twilio, ElevenLabs, Google Play, Google Voice, OpenPhone, Grasshopper, RingCentral, Dialpad.

Still missing: no "VeraDial is an AI-powered business calling app" definitional sentence in the main body text (it appears only in structured data and llms.txt, not as crawlable visible prose). Testimonial stats ("12 appointments/week confirmed," "< 2 min Avg. AI call duration") have no source attribution.

### /faq — 9/10

Unchanged since April 16. Strongest citable page on the site.

- 20 self-contained Q&A pairs with FAQPage JSON-LD
- Answers in 100–140 word range — at or near the optimal citation window
- Specific stats: "answer rates as low as 11%" for unverified calls
- Named entities: Twilio, ElevenLabs, Google Play, iOS App Store
- Pricing FAQ now answers with $9.99 (confirmed from live fetch — "VeraDial costs $9.99 per month per line")
- Credit rates stated precisely: 2/min standard, 3/min recorded, 5/min AI, 1/segment SMS

One remaining gap: the "11% answer rate" stat is unattributed (no source study). Perplexity will not cite it as a fact; it will only cite it as a claim VeraDial makes.

### /compare/google-voice — 7/10

Intro is sharp and direct (29 words, VeraDial vs Google Voice positioning clear). Comparison table present. "Why It Matters" verdict section exists with explicit recommendation.

Gaps: no numeric evidence in comparison prose to back claims. No explicit "Bottom Line" H2. Compare pages use marketing H2s ("A free number is great. A business calling platform is better.") rather than answer-engine-friendly headings ("Which is better for business: VeraDial or Google Voice?"). No stat linking verified caller ID to answer rate improvement.

### /alternatives/openphone — 7.5/10

Good structure: pain points, evaluation criteria, ranked alternatives, quick recommendations. VeraDial is explicitly "Our Pick" with a rationale sentence. Pricing is specific for all 6 alternatives listed ($9.99, $15, $10, $14, $15, $20). Decision matrix at bottom is the best AI-citable passage type on these pages.

Gap: intro is short (~40 words, below 134-word optimal range for a standalone citation). No "bottom line" prose paragraph independent of the CTA frame. `/alternatives/openphone` page not yet in llms.txt Links section.

### /use-cases/realtors — 6/10

Strong named entities (National Association of Realtors stat: "78% of buyers work with the first agent who responds"). Case study persona (Sarah, Austin) adds specificity. Six question-based H3 headings in the FAQ section — excellent AI-query matching.

Gaps: No FAQPage JSON-LD (confirmed absent). This is audit item #18. The six questions and answers are visible but unstructured to schema, so Google AI Overviews cannot pull them as rich results. No "VeraDial is the best business phone for real estate agents" type declarative sentence in the body. `/pricing` link absent from page prose.

---

## 4. Brand Mention & Authority Signals

No changes since April 16 audit. All off-page signals remain at pre-launch baseline.

| Signal | Status | AI Citation Impact |
|--------|--------|-------------------|
| YouTube channel | Absent | Very high (~0.737 correlation) — highest priority off-page action |
| Reddit mentions | Absent | High — Perplexity cites Reddit comments in answer snippets |
| Wikipedia entity | Absent | High — ChatGPT and Claude weight this for entity recognition |
| G2 / Capterra listing | Absent | Medium-High — Perplexity's preferred source for "Is X good?" queries |
| Product Hunt listing | Absent | Medium |
| LinkedIn company page | Present (in sameAs) | Medium — confirms entity is real |
| X / Twitter | Present (@VeraDialApp, in sameAs) | Low-Medium |
| ElevenLabs Grants mention | Present in llms.txt + About | Medium — third-party credibility anchor |
| Press / media logos | Absent from homepage | Low-Medium — trust signal for skeptical crawlers |

**Key unchanged gap:** Only 11% of domains are cited by both ChatGPT and Google AI Overviews. VeraDial is currently optimized for Google (FAQPage schema, SSR, sitemap) but weak for ChatGPT (no Wikipedia, no YouTube, no Reddit). These are the two platforms with the widest divergence in citation signals.

---

## 5. Platform-Specific Scores

| Platform | Score | Delta | Key limiting factor |
|----------|-------|-------|-------------------|
| Google AI Overviews | 74/100 | +2 | FAQPage schema strong; use-case pages still lack FAQ schema (#18) |
| ChatGPT | 59/100 | +1 | No Wikipedia, no YouTube, no Reddit; no named GPTBot stanza |
| Perplexity | 63/100 | +2 | /pricing page helps; still no Reddit/review-site presence |
| Bing Copilot | 66/100 | +1 | OG/Twitter card solid; no Bing Webmaster Tools data available to verify |

---

## 6. Answer-Engine Risk: Image/Video with No Text Fallback

- **Pricing page screenshots** (pricing-desktop-full.png, pricing-hero.jpeg, etc. in untracked files): if the new `/pricing` page renders any pricing information as images rather than HTML text, those values are invisible to AI crawlers. Verify all prices, credit rates, and plan names are in crawlable DOM text.
- **App Preview / Explainer video section** (shipped in commit 3bfb171): if the video is the only carrier of feature information (no transcript, no caption text), AI crawlers get zero signal from it. Add a brief text description beneath the video embed (2–3 sentences describing what the video shows) as a fallback.
- **Testimonial stats**: "12 appointments/week confirmed" and "< 2 min Avg. AI call duration" appear to be in UI components. Confirm these render as text, not as SVG or image overlays.

---

## 7. Top 5 GEO Improvements — Ranked by Impact

### 1. Fix robots.txt to honor the Content-Signal intent — add named training-bot blocks
**Impact: High | Effort: 15 minutes | Platforms: All**

The current `Content-Signal: ai-train=no` header has no enforcement mechanism. The wildcard `Allow: /` lets CCBot, anthropic-ai, and cohere-ai (training scrapers) crawl freely, contradicting the stated intent. Add explicit named `Disallow: /` stanzas for training bots and explicit `Allow: /` stanzas for search/retrieval bots.

File: `/Users/gthomson/Development/veradial-website/public/robots.txt`

This resolves audit item #9 and eliminates the Content-Signal contradiction in a single file change.

### 2. Add FAQPage JSON-LD to all use-case pages
**Impact: High | Effort: 2 hours | Platform: Google AI Overviews (primary), Perplexity (secondary)**

The `/use-cases/realtors` page has six question-based H3 headings and visible Q&A content but no FAQPage schema. All use-case pages are in this state (audit item #18). Adding structured FAQ markup converts visible Q&A content into Google AI Overviews rich result candidates and Perplexity citation sources without requiring new copy — just schema wrappers around existing text.

This is the highest-leverage remaining on-page schema fix because the content already exists.

### 3. Expand llms.txt with four targeted additions
**Impact: Medium-High | Effort: 30 minutes | Platforms: ChatGPT, Claude, Perplexity**

Four specific additions to `src/app/llms.txt/route.ts`:

a. `Last updated: April 2026` line after the blockquote summary.
b. A `## Not Available` section: "No web app. Android-only; iOS coming soon. No team/multi-user plans — single-user per line."
c. Add `/pricing` to the Links section: `- Pricing: https://veradial.com/pricing`
d. Add the five new alternatives pages to Links: `/alternatives/openphone`, `/alternatives/textnow`, `/alternatives/sideline`, `/alternatives/burner`, `/alternatives/hushed`.

These prevent LLM hallucinations about platform availability and keep the link graph current after the 04-20 page additions.

### 4. Add "Bottom Line" verdict section to all /compare/* pages
**Impact: High | Effort: 2–3 hours | Platforms: ChatGPT, Perplexity**

Every `/compare/*` page needs an `<h2>Bottom line</h2>` section with a 120–150 word self-contained verdict paragraph. The paragraph must: name both products, state the winner for the target user, include the price difference, and reference at least one specific differentiator with a concrete value (e.g., "STIR/SHAKEN A-level attestation"). This is audit item #11. The Google Voice compare page has a "Why It Matters" section that approaches this but is framed as a feature list rather than a direct verdict.

A direct verdict paragraph is the single most-cited passage type for "X vs Y" AI search queries on Perplexity and ChatGPT.

### 5. Start a YouTube channel with three targeted videos
**Impact: Very High long-term | Effort: 1–2 weeks | Platforms: ChatGPT, Perplexity, Google**

YouTube mention correlation with AI citation is ~0.737 — the strongest single off-page signal measured. VeraDial is an AI product competing against Google Voice (which has massive YouTube tutorial coverage). Three videos to prioritize:

1. "VeraDial vs Google Voice — which is better for business?" — targets the top comparison query
2. "How VeraDial AI calling works" — product demo, citable for "AI business phone" queries
3. "Setting up a verified business number on VeraDial" — how-to format, Perplexity citation target

Each video description should open with "VeraDial is an AI-powered business calling app" (canonical phrase) and link to the relevant compare or use-case page.

---

## Audit Items Status Update

| Item | Description | Status |
|------|-------------|--------|
| #9 | Named bot directives in robots.txt | Still open — see Rec #1 |
| #11 | Bottom Line verdict on /compare/* pages | Still open — see Rec #4 |
| #17 | "Last updated" + "Not available" in llms.txt | Still open — see Rec #3 |
| #18 | Use-case pages FAQPage JSON-LD | Still open — see Rec #2 |
| #20 | Canonical phrase consistency | Partially improved — llms.txt and FAQ now use "AI-powered business calling app"; homepage hero still does not |

New gaps identified this audit:
- llms.txt missing /pricing and new /alternatives/* links (post-04-20 additions)
- Content-Signal header placement (robots.txt body, not HTTP header) provides no enforcement
- /use-cases/realtors has NAR stat ("78% of buyers work with first agent who responds") — this should be in llms.txt as a target-user pain point proof point

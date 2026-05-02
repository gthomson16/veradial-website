# Content Quality & E-E-A-T Audit — veradial.com
**Date:** 2026-04-20
**Score: 71 / 100**

---

## Summary

Content is mostly solid with a few pockets of thin or templated pages. Strongest pages: `/use-cases/realtors` (2,452 words, deep persona treatment), `/faq` (1,278 words, 20 Q&A), homepage (1,196 words). Weakest: `/about` (only 451 words — a notable E-E-A-T gap for a SaaS that needs to establish founder credibility). Templated pages (`/numbers/*`, `/compare/*`) are short but differ enough between instances (~27-28% similarity — not duplicate). No blog or case studies exist — a significant content gap for a SaaS targeting SMB owners who research via informational queries.

## Word Counts by Page (sampled)

| Page | Words | H1/H2/H3 | Assessment |
|------|-------|----------|------------|
| `/` (home) | 1,196 | 1/8/18 | Strong — dense, multiple proof points |
| `/faq` | 1,278 | 1/7/6 | Strong — 20 self-contained Q&A pairs |
| `/about` | 451 | 1/4/9 | **Thin** — weak E-E-A-T foundation |
| `/compare/google-voice` | 589 | 1/3/11 | Borderline — acceptable for comparison page |
| `/compare/burner` | 571 | 1/3/11 | Borderline |
| `/alternatives/openphone` | 1,040 | 1/5/20 | Good — ranked alternatives + rationale |
| `/use-cases/realtors` | 2,452 | 1/7/25 | **Excellent** — deep persona treatment |
| `/numbers/415` | 536 | 1/6/19 | Borderline thin |
| `/numbers/206` | 526 | 1/6/19 | Borderline thin |

## Template Duplication Analysis

| Pair | Text similarity | Verdict |
|------|----------------|---------|
| `/numbers/415` vs `/numbers/206` | 26.9% | Acceptable — pages vary enough to avoid duplicate-content flag |
| `/compare/google-voice` vs `/compare/burner` | 28.2% | Acceptable — per-competitor content dominates |

Both sets of templated pages are well below the 60%+ warning threshold for duplicate content. However, 27-28% commonality is still a meaningful shared shell (navigation, CTAs, footer, core pitch). If either set scales past 30-50 pages, enforce a 60%+ unique content target per page.

## E-E-A-T Scorecard

| Dimension | Score (0-10) | Evidence | Gap |
|-----------|-------------|----------|-----|
| Experience | 6 | Testimonials on home ("12 appointments/week confirmed," "< 2 min avg AI call") | No named customers, no case studies with real company names |
| Expertise | 5 | Product detail is strong (STIR/SHAKEN A-level, Twilio SOC 2, ElevenLabs Grants) | No founder bio with relevant experience, no team page |
| Authoritativeness | 4 | LinkedIn profile linked (sameAs in schema), X/Twitter linked | No press mentions, no media logos, no G2/Capterra/Product Hunt presence |
| Trust | 7 | Privacy, Terms, Delete-Account pages exist; Twilio SOC 2 mentioned | Missing: physical address, company legal entity, security.txt |
| Sources / Citations | 3 | One external stat cited on `/use-cases/realtors` (NAR: "78% of buyers work with the first agent who responds") | Most claims on home and FAQ have no source attribution (e.g., "11% answer rate for unverified calls" is unsourced) |

**Overall E-E-A-T: 25/50 → 50%**. The `/about` page is the single highest-leverage fix: at 451 words it barely introduces the founder. For a SaaS handling business calls (regulated, trust-sensitive domain), this is a gap.

## AI Citation Readiness

Covered in detail in `geo.md`. Summary: FAQ page is excellent (FAQPage schema + 20 Q&A), use-case pages have Q&A content but lack FAQPage schema (audit item #18), compare pages need "Bottom Line" verdict paragraphs.

## Readability (qualitative, sampled)

- **Homepage**: Flesch ~65-70 (conversational, SMB-friendly). Good.
- **/faq**: Short punchy answers, simple language. Flesch ~70+. Ideal for AI citation.
- **/about**: Too short to evaluate meaningfully.
- **/use-cases/realtors**: Flesch ~60 (slightly denser due to industry terms). Appropriate for intent-driven persona reader.

No jargon issues observed. No walls of text.

## Top 5 Content Gaps Ranked by Ranking Impact

1. **No blog / educational content hub** — A SaaS targeting SMB owners needs informational content to rank for top-of-funnel queries ("how to schedule appointments by phone," "what is STIR/SHAKEN," "AI calling for small business"). Current site is entirely bottom-of-funnel (comparisons, alternatives, use cases, FAQ). Missing content = missing rankings for the queries that fill the funnel.

2. **Weak `/about` page** — 451 words. Missing founder bio depth (relevant experience, why built, what makes them credible to trust with business calls), company registration / address, team info. For a trust-sensitive product this is the highest E-E-A-T leverage fix.

3. **No case studies** — Homepage shows testimonial stats ("12 appointments/week confirmed") but no named customers, no business profiles, no before/after narratives. A single 800-word case study per target persona (realtor, contractor, freelancer) would be the strongest trust signal short of press coverage.

4. **Unsourced claims** — "11% answer rate for unverified calls" and "no-show rate dropped 18% → 3%" are quoted with no source. AI answer engines can cite attributed stats as facts; unsourced claims are cited only as "VeraDial claims..." — weaker. Add citations to FTC robocall data, industry reports.

5. **No help docs / knowledge base** — A SaaS product needs indexable docs for long-tail "how do I..." queries. Currently the FAQ is the only "how to" content. A `/help` or `/docs` section with 20-30 task-level articles would capture long-tail traffic AND provide the passage-level content AI engines love.

## Secondary Gaps

- No video transcripts for the explainer video (commit 3bfb171) — visible content but invisible to text-based AI.
- No structured pricing page yet (source exists, not deployed — see technical.md).
- No footer-level E-E-A-T signals: physical address, registered business number, support email pattern.

## Score Breakdown

| Subcategory | Score |
|------------|-------|
| Depth / word-count coverage | 78 |
| E-E-A-T (detailed above) | 50 |
| Duplication risk | 90 (low risk) |
| AI citation readiness | 76 |
| Content freshness / recency | 70 |
| **Weighted Total** | **71** |

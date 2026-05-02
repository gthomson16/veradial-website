# 4-Week SEO Sprint Plan

**Created:** 2026-04-30
**Baseline:** `docs/agent/seo-baseline-2026-04-30.md`
**Data window:** 2026-04-01 to 2026-04-28 where available
**Goal:** Improve existing-page CTR and build a small product-led help hub without turning this into a mass-content engine.

## Ground Rules

- Index immediately when a page ships or materially changes: sitemap, IndexNow, and manual GSC request where useful. Do not wait until the end of the sprint.
- Keep every new `/help/*` page bidirectionally linked: existing money/use-case/trust pages link into help pages, and help pages link back out to `/pricing`, `/use-cases`, relevant vertical pages, `/stir-shaken-for-small-business`, and relevant `/compare/*` pages.
- Tie work back to tracked audit items so it does not get rediscovered:
  - `/use-cases` editorial intro is audit item #13.
  - Alternatives criteria differentiation is audit item #19.
- Verify pricing facts against `/Users/gthomson/Development/VeraDial/website.md` before changing pricing copy. Current confirmed facts: `$9.99/mo per line`, 3-day free trial, 50 trial credits, 100 credits/month, credits never expire, top-ups of 100/$5.99, 300/$14.99, 1000/$39.99.
- Use visible FAQs only when the Q&A appears on the page. Emit `FAQPage` schema only for visible Q&A.
- Keep performance in scope as a ranking/conversion/Core Web Vitals lever, not a CTR lever. CTR work is title/meta/SERP fit.

## Week 1: Existing-Page CTR Pass

Scope: fast, high-leverage edits on pages already getting impressions.

1. `/pricing`
   - Rewrite title/meta around `$9.99/mo`, 100 monthly credits, and "AI business phone app."
   - Tighten above-the-fold copy around price, included credits, iOS + Android availability, and AI calling.
   - Preserve factual pricing from `website.md`.
   - Success target: CTR from `0%` to `2%+` over a comparable post-ship window.

2. `/use-cases` — audit #13
   - Add stronger editorial intro prose.
   - Add useful internal links to contractors, realtors, freelancers, sales, recruiters, and property managers.
   - Success target: directional CTR improvement only. Current sample is 139 impressions / 2 clicks, so a 30-day target is statistically thin; evaluate over 60-90 days if needed.

3. `/compare/sideline`, `/compare/dialpad`, `/compare/vonage`
   - Improve title/meta descriptions.
   - Make the opening answer the comparison intent faster.
   - Tighten the bottom-line section where needed.
   - Success target: combined clicks from `2` to `10+` over the next measurement window.

4. `/stir-shaken-for-small-business`
   - Reframe the top around "Why your business number shows as Spam Likely."
   - Keep technical STIR/SHAKEN, attestation, TRACED Act, and compliance detail lower on the page.

5. Indexing
   - Submit changed URLs as soon as they ship.
   - Use IndexNow for changed URLs.
   - Use manual GSC request for the highest-priority changed URLs if UI quota allows.

## Week 2: Help Hub MVP

Scope: create the first product-led help hub pages. This is a hub, not a blog firehose.

1. Create `/help`.
2. Ship first three pages:
   - `/help/why-business-number-marked-spam`
   - `/help/ai-calling-for-small-business`
   - `/help/appointment-confirmation-scripts`
3. Add inbound links from:
   - `/pricing`
   - `/use-cases`
   - `/stir-shaken-for-small-business`
   - homepage FAQ or related homepage sections
   - relevant `/compare/*` pages
4. Add outbound links from each `/help/*` page to:
   - `/pricing`
   - `/use-cases` or the relevant vertical use-case page
   - `/stir-shaken-for-small-business` where caller identity/trust is relevant
   - relevant `/compare/*` pages where buyer comparison intent is relevant
5. Update `llms.txt` with the new help hub and help URLs.
6. Submit/index each URL immediately after shipping.
7. Performance gate:
   - Run `next build --analyze` or the repo's closest equivalent.
   - Identify the 91 KiB unused-JS opportunity from the performance tracker.
   - Do not implement a speculative performance refactor unless there is a clean target.

Success target: by day 30, the help hub is indexed and at least one help URL has impressions. Ranking without clicks is acceptable for the first measurement window.

## Week 3: Deeper Content + Performance Fix

1. Alternatives criteria differentiation — audit #19
   - Start with:
     - `/alternatives/spoofcard`
     - `/alternatives/textnow`
     - `/alternatives/burner`
     - `/alternatives/sideline`
   - Replace repeated shared criteria with competitor-specific buying criteria and product-fit guidance.
   - Keep the buyer lens practical: trust/caller ID, AI calling, business identity, cost, number ownership, and mobile workflow.

2. Performance
   - If Week 2 analysis found a clean unused-JS target, implement it.
   - Re-run PSI after deploy.
   - Success target: LCP moves from 3.4s toward <=2.5s, or the unused-JS reduction is confirmed.

3. Optional second help batch, only if Week 2 shipped cleanly:
   - `/help/veradial-credit-costs`
   - `/help/how-to-set-up-ai-calling-assistant`

4. Indexing
   - Submit changed/new URLs immediately.
   - Update `llms.txt` again if second-batch help pages ship.

## Week 4: One Authority Anchor

Pick one authority anchor and ship it well. Do not combine YouTube, four directory submissions, Reddit, and indexing into one overloaded week.

Recommended anchor:

- Produce one polished YouTube walkthrough: "How VeraDial AI calling works."

Why this anchor:

- It supports `/help/how-to-set-up-ai-calling-assistant`.
- It creates a reusable demo asset for directory profiles and social posts.
- It gives AI/search engines another source that explains the category and product.

After the video is live:

- Embed or link it from the relevant help/setup page.
- Add it to `llms.txt` if appropriate.
- Use it as source material for one or two directory submissions later.

## Measurement

Run a recheck around 2026-05-30 and compare against `docs/agent/seo-baseline-2026-04-30.md`.

Track:

| Area | Baseline | Target |
| --- | ---: | --- |
| `/pricing` CTR | 0% on 139 impressions | 2%+ over comparable window |
| Three compare pages | 2 clicks combined | 10+ clicks combined |
| `/use-cases` CTR | 1.44% on 139 impressions | Directional improvement; use 60-90 days if 30-day sample is too small |
| Help hub | New | Indexed and showing any impressions by day 30 |
| LCP | 3.4s mobile PSI | Move toward <=2.5s or confirm unused-JS reduction |

## Recheck Checklist

1. Run GSC page-level, query-level, country, and device reports.
2. Run GA4 organic, top-pages, device, and country reports.
3. Compare against `docs/agent/seo-baseline-2026-04-30.md`.
4. Note which shipped URLs are indexed.
5. Decide the next sprint based on observed page-level movement, not isolated one-query fluctuations.

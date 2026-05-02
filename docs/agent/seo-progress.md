# VeraDial SEO / AIO Progress Tracker

**Last updated:** 2026-05-02 (moved durable agent docs into tracked `docs/agent/`)
**Source of truth for action items:** this tracker. Latest static audit: `docs/agent/seo-audit-2026-04-20/ACTION-PLAN.md`

Status legend: ✅ done · 🟡 in progress · ⬜ not started · ⏭️ deferred (with reason)

---

## Completed (2026-04-16)

### Foundation
- ✅ **Product marketing context created** → `docs/agent/product-marketing-context.md`
- ✅ **Full SEO audit run** (5 of 6 specialists completed; performance hit turn limits)
  - Saved consolidated audit + 4 per-specialist reports in local `.agents/seo-audit-*.md` drafts
- ✅ **Audit corrections applied** after follow-up review caught:
  - False positive on founder Person schema (it does exist)
  - Overstated spread of "11%" claim (FAQ-only, not comparison pages)
  - Removed deprecated Sitelinks Search Box recommendation
  - Moved per-specialist reports from `/tmp/` → local `.agents/` drafts; current durable docs now live in `docs/agent/`

### Play Store
- ✅ **Play Store listing copy drafted** → `docs/agent/play-store-listing.md`
- ✅ **Play Store listing applied to Play Console** (2026-04-16, edit `02271142273778806921`)
  - Title: `VeraDial: AI Business Phone` (27/30)
  - Short desc: `Get a business phone number with AI calling, SMS, voicemail & caller ID.` (72/80)
  - Full description: 2,920/4,000 chars
  - Pushed via Android Publisher API (Ruby env was too old for fastlane bundler 2.7)
  - Source files updated in mobile repo: `packages/mobile/fastlane/metadata/android/en-US/{title,short_description,full_description}.txt` — **uncommitted**
- ✅ **Developer name fixed** (CanScan AI → VeraDial). Side effect: CanScan AI listing now also shows "VeraDial" as developer (acceptable — no migration needed for now).

### App Store / iOS launch state (2026-04-30)
- ✅ **iOS app is public on the App Store** — `https://apps.apple.com/us/app/veradial/id6760608537` returns HTTP 200.
- ✅ **Platform state normalized in active marketing docs** — `docs/agent/product-marketing-context.md` and `docs/agent/directory-profile.md` now say both iOS and Android are live.

### GSC / Indexing (2026-04-21)
- ✅ **GSC API + Indexing API access unblocked** — OAuth flow run against `canscanapp` GCP project, published app (Testing → In production), granted siteOwner on `sc-domain:veradial.com`. Token at `~/.config/claude-seo/oauth-token.json` has indexing + webmasters + analytics scopes. Web Indexing API enabled in GCP.
- ✅ **Indexation baseline captured** via `gsc_inspect.py --batch` on 56 URLs — 7 indexed, 38 Discovered-not-indexed, 10 Unknown-to-Google. 38 "Discovered" bucket reflects new-domain crawl-budget throttling, not content issues — clears with authority signals, not on-page fixes.
- ✅ **Sitemap resubmitted via API** (was last submitted 2026-04-13, cached at 48 URLs; live sitemap serves 55).
- ✅ **Indexing API pings sent** for 10 "Unknown" URLs (pricing, stir-shaken, 5 new alternatives, /compare/dialpad, /numbers/305, /delete-account). Quota: 190/200 remaining today.
- ✅ **SEO API reporting auth fixed** (2026-04-30, docs commits `3d587e0`, `762f5ad`, `4886fb7`) — `veradial-seo-audit@canscanapp.iam.gserviceaccount.com`; `analyticsdata.googleapis.com`, `analyticsadmin.googleapis.com`, and `iamcredentials.googleapis.com` enabled; local `~/.claude/skills/seo/scripts/google_auth.py` supports IAM Credentials API impersonation via active `gcloud` login. Auth is intentionally split: GSC/Indexing use the existing site-owner OAuth token; GA4 uses service-account impersonation with `impersonate_services: ["ga4"]` in `~/.config/claude-seo/google-api.json`. GA4 Viewer access for property `532843651` was granted via Analytics Admin API and verified with `ga4_report.py`; GSC was verified with `gsc_query.py sites` showing `sc-domain:veradial.com`.
- ✅ **GSC + GA4 baseline captured** (2026-04-30) — see `docs/agent/seo-baseline-2026-04-30.md`. Data window 2026-04-01 to 2026-04-28 where available. GSC page-level data shows 1,404 impressions / 23 clicks; visible query-level data remains sparse. GA4 organic shows 70 sessions / 41 users / 102 pageviews. Decision: monthly review cadence, immediate CTR/snippet work on existing pages, then a small `/help` or `/guides` hub.
- ✅ **4-week SEO sprint compressed into immediate implementation** (2026-04-30, commits `ea8049e`, `3672a75`, `1a1f89b`, pushed to `origin/main`) — see `docs/agent/seo-sprint-plan-2026-04-30.md` for the original plan and `docs/agent/seo-baseline-2026-04-30.md` for the baseline. Shipped existing-page CTR copy updates, `/help` hub + 3 high-intent help pages, bidirectional internal links, `llms.txt` updates, sitemap entries, audit #13/#19 content work, and a clean performance/image-delivery fix.
  - Live deploy verified 2026-04-30: `/help`, `/help/why-business-number-marked-spam`, `/help/ai-calling-for-small-business`, and `/help/appointment-confirmation-scripts` all returned 200.
  - Sitemap resubmitted through Search Console API at `2026-04-30T04:52:22Z`.
  - Explicit IndexNow ping sent for `/help` + 3 help articles; API returned HTTP 200.
- ✅ **Explainer video surfaced for SEO/AIO** (2026-04-30, commit `26bcc5f`) — completes the Week 4 authority-anchor piece without producing a new video. `src/components/home/ExplainerVideo.tsx` refactored into a reusable `<ExplainerVideoPlayer>` with `default` (homepage hero) and `compact` (in-article) variants, sharing metadata from new `src/lib/explainer-video.ts`. `VideoObject` JSON-LD now emitted on the homepage and on `/help/ai-calling-for-small-business` (stable `@id` `https://veradial.com#explainer-video`, contentUrl/embedUrl, thumbnail array, ISO duration `PT1M1S`, uploadDate `2026-04-18`). `llms.txt` gains a "Demo Video" section pointing AI search engines at the YouTube watch URL. Compact player embedded between the intro and the first content card on the AI-calling help article with a single subtle "60-second walkthrough" eyebrow.
- 🟡 **Manual "Request Indexing"** in GSC URL Inspection — stronger signal than API ping for non-JobPosting pages. User working through the 10 URLs (rate limit ~10-12/day).
- ⬜ Re-run `gsc_inspect.py --batch /tmp/veradial-urls-clean.txt --delay 0.3 --json` in 3-5 days to measure bucket movement.

### Webmaster Tools / Domain config (2026-04-21)
- ✅ **`www.veradial.com` attached to Vercel project** — previously DNS'd to Vercel IPs but not configured in the project, so the hostname returned no TLS cert (any inbound `www` link was effectively broken).
- ✅ **`www` → apex 308 redirect** set via Vercel API (`PATCH /v10/projects/{id}/domains/www.veradial.com` with `redirect: veradial.com, redirectStatusCode: 308`). Consolidates link equity on the canonical apex.
- ✅ **Bing Webmaster Tools** — both `veradial.com` and `www.veradial.com` added + verified via DNS CNAME (`6daaa194d32b540e7322186dccd92d5c.veradial.com` → `verify.bing.com`, DNS-only in Cloudflare). Bing collapsed to a single property after verify; `GetLinkCounts` now queryable from both hostnames (0 links indexed, expected for new site).
- ✅ **GSC coverage confirmed** — `sc-domain:veradial.com` is a domain property that already covers all subdomains, so no separate www property needed there.
- ✅ **`bing_webmaster.py` script fixed** at `~/.claude/skills/seo/scripts/` — `counts` was calling non-existent `GetUrlTrafficInfo`-for-counts endpoint and `links` was calling non-existent `GetLinkDetails`. Now use real endpoints `GetLinkCounts` and `GetUrlLinks` (added `--url` flag for page-specific queries).
- ✅ **Bing sitemap submitted** via `SubmitFeed` API — `https://veradial.com/sitemap.xml` registered on `www.veradial.com` property. First crawl pending.
- ✅ **IndexNow deployed** (commit `ab7ef02`) — key `ac9e1ce6fb05470695cefc28a983842c` live at `https://veradial.com/ac9e1ce6fb05470695cefc28a983842c.txt` (verified HTTP 200, 2026-04-23). IndexNow pings to Bing (and Yandex, Seznam, Naver) now accept URL-change notifications. Ping endpoint: `https://api.indexnow.org/indexnow?url=<encoded-url>&key=ac9e1ce6fb05470695cefc28a983842c`.
- ⬜ **Geo targeting (US + CA)** — API returned `InvalidParameter` on `AddCountryRegionSettings`; do in Bing Webmaster UI instead (Site Settings → Geo Targeting). Low priority.

### New SEO pages (2026-04-20)
- ✅ **`/stir-shaken-for-small-business` trust/explainer page shipped** — standalone educational page targeting SMB search intent around "Scam Likely" filtering, A/B/C attestation, TRACED Act compliance
  - Hero with breadcrumb + H1 + brief anchor CTAs
  - Two-phone visual comparison ("Scam Likely" vs verified Austin Plumbing Co. with ShieldCheck)
  - Plain-English "What STIR/SHAKEN actually is" definition section (acronyms + TRACED Act + CRTC)
  - Three attestation-level cards (A=green, B=orange, C=red) explaining who gets each and how it displays
  - 4-card "Why small businesses care" grid (answer-rate collapse, brand damage, TRACED Act compliance, SMS/VM trust inheritance)
  - "How to check what you have" 3-step diagnostic guide
  - "Where providers fall short" 4-card grid naming TextNow/Hushed/Burner/Sideline/Line2/SpoofCard gaps
  - Dedicated "How VeraDial handles it" card explaining A-level on purchased numbers, B-level on verified existing numbers, SMS compliance caveat
  - 9-question FAQ with `FAQPage` JSON-LD
  - `WebPage` + `BreadcrumbList` + `FAQPage` JSON-LD
  - Added to sitemap at priority 0.7
- ✅ **Five orphaned `/alternatives/*` 404s fixed (audit #6)** — textnow, sideline, burner, hushed, spoofcard now render as full alternatives pages
  - Added `BURNER` Alternative profile in `src/lib/alternatives-data.ts`
  - Added 5 new `AlternativesPageData` entries with unique `painPoints`, `intro`, `alternatives` list, and `recommendations` tailored per product
  - Sitemap auto-picked up new slugs (uses `getAllAlternativesSlugs()`)
  - Verified all 5 URLs return 200 and appear in `sitemap.xml`
  - Still using `SHARED_CRITERIA` — audit #19 (differentiating criteria per page) remains pending
- ✅ **`/pricing` page shipped** — dedicated transactional pricing page to replace `/#pricing` homepage anchor in nav + footer
  - Hero with editorial `$9.99` display, proof chips (free trial, 100 credits/mo, no expiry, no seat fees)
  - 8-feature "what's included" grid
  - Main plan card with glow, full feature list, trial badge, and store badges
  - Credit math section (100 credits → concrete call/SMS examples) + per-use cost table
  - 3 top-up credit pack cards
  - Competitor price anchor table (Google Voice, OpenPhone Starter/Business, Grasshopper, RingCentral)
  - 10-item pricing FAQ with `FAQPage` JSON-LD
  - `WebPage` + `Offer` + `UnitPriceSpecification` + `BreadcrumbList` JSON-LD
  - Added to sitemap at priority 0.9
  - Updated `NAV_LINKS` and `FOOTER_LINKS` product section to point to `/pricing` (was `/#pricing`)

### Critical SEO fixes (commit `d913930`, pushed to main)
- ✅ **#1 Redeploy** — sitemap will pick up 16 missing URLs (compare + alternatives subpages)
- ✅ **#2 About page CTA** — was "request early access," then moved to store-download CTA; current site now presents App Store and Google Play availability
- ✅ **#3 SoftwareApplication schema** — bare `price` → `UnitPriceSpecification` for monthly subscription
- ✅ **#4 FAQ pricing answers (×3)** — three deflections ("see veradial.com") replaced with concrete pricing breakdown
- ✅ **#5 Alternatives FAQ schema** — removed hardcoded "Google Voice" reference appearing on every competitor's alternatives page

---

## Pending — High Priority (audit items #6-12)

Originally from the 2026-04-16 audit. Current status in this tracker supersedes old audit drafts.

- ✅ **#6 Five orphaned `/alternatives/[competitor]` 404s** — textnow, sideline, burner, hushed, spoofcard (shipped 2026-04-20)
- ✅ **#7 Testimonials relabel** — `Testimonials.tsx` header updated to "Illustrative Scenarios" with explicit disclaimer about pre-launch status; card subtitle "Beta user" → "Illustrative scenario" (2026-04-20)
- ✅ **#8 "11%" claim softened** — FAQ answer rewritten to "11–25% range...versus 50%+ for verified business calls" with "industry studies consistently" framing, matching the STIR/SHAKEN page language (2026-04-20)
- ✅ **#9 Named AI-bot directives in robots.txt** — added explicit Allow for GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web, Claude-SearchBot, PerplexityBot, Perplexity-User, Google-Extended, GoogleOther, Applebot-Extended, Bingbot, CCBot, Meta-ExternalAgent, Meta-ExternalFetcher, cohere-ai, cohere-training-data-crawler, Bytespider, DuckAssistBot, MistralAI-User, Amazonbot, YouBot; Content-Signal header still signals `ai-train=no` (2026-04-20)
- ✅ **#10 FAQPage schema on area-code pages** — dynamic `/numbers/[areaCode]` page now emits FAQPage JSON-LD built from `ac.faq` on all 10 area codes (2026-04-20)
- ✅ **#11 "Bottom Line" verdict on every /compare/* page** — new `src/lib/compare-verdicts.ts` holds per-competitor verdicts (pickVeraDialWhen, pickCompetitorWhen, summary); new `src/components/compare/BottomLine.tsx` renders two-card verdict + short-version passage; wired into all 13 compare pages (2026-04-20)
  - 2026-04-30 review note: sprint plan mentioned refreshing bottom-line copy on Dialpad/Sideline/Vonage, but the existing verdict copy was already passage-quality and citable, so only title/meta/opening copy and related help links were changed in commit `ea8049e`.
- ✅ **#12 (covered by #2 above — duplicate of launch status fix)** ✅

---

## Pending — Medium Priority (audit items #13-20)

- ✅ **#13 Add editorial intro prose** to hub pages — `/use-cases` now has an above-grid editorial intro and related guide links for the new `/help/*` hub (2026-04-30, commit `ea8049e`). Remaining hub intro opportunities on `/compare`, `/alternatives`, and `/numbers` are lower-priority follow-ons.
- ✅ **#14 Sitemap `lastmod` uses real file mtimes** — `src/app/sitemap.ts` rewritten with `statSync` helper reading page and data-file mtimes (2026-04-20)
- ✅ **#15 Dropped `<changefreq>` and `<priority>`** from sitemap (same commit as #14) (2026-04-20)
- ✅ **#16 Schema graph improvements** in `src/lib/metadata-helpers.ts`:
  - `@id` added to `hasPart` items in `buildCollectionPageJsonLd`
  - `mentions` in `buildComparisonPageJsonLd` now emits a stable `@id` (derived from path) plus `applicationCategory` and optional `url`
  - `buildUseCasePageJsonLd` accepts an `audienceKind` param (defaults to `BusinessAudience`); realtors and freelancers pages switched to `PeopleAudience` (2026-04-20)
- ✅ **#17 llms.txt has "Last updated" + "Not available" sections** — out-of-scope features explicitly listed to prevent LLM misattribution (2026-04-20)
- ✅ **#18 FAQPage JSON-LD + visible Q&As on all 6 use-case pages** — new `src/lib/use-case-faqs.ts` data (4 Q&As per vertical, tailored to industry pain points) + shared `src/components/use-cases/UseCaseFAQ.tsx` component emitting visible cards and JSON-LD from the same source (2026-04-20)
- ✅ **#19 Differentiate `SHARED_CRITERIA` block** across priority alternatives pages — TextNow, Sideline, Burner, and SpoofCard now use page-specific evaluation criteria instead of the shared generic framework (2026-04-30, commit `ea8049e`). Remaining alternatives can keep the shared criteria until they show search signal.
- ✅ **#20 Canonical phrase consistency** — "AI-powered calling" → "AI-powered business calling" normalized in user-facing copy across `/compare/*` descriptions and hero copy where it appears (2026-04-20)

---

## Pending — Play Store

From the ASO audit:
- ⬜ **Commit fastlane metadata files** in mobile repo so source matches what's live
- ⬜ **Upload 8th 10-inch tablet screenshot** (currently 7/8)
- ⬜ **Enable Play Developer Reporting API** in GCP project `canscan-df10bea4`:
  ```
  gcloud services enable playdeveloperreporting.googleapis.com --project=canscan-df10bea4
  ```
- ⬜ **Implement In-App Review API** at strategic moments (post first AI call, post first transcript)
- ⛔ **App version updates BLOCKED** — Play policy issue: "App must support 16 KB memory page sizes" (enforced Oct 31, 2025). Fix needed in mobile repo (not website). All listing-only updates still work.

---

## Pending — Off-page / Authority workstream

From the GEO audit. Compounding signals — start now, runs forever.

- ⬜ **YouTube channel** with 3+ videos: AI calling demo, "VeraDial vs Google Voice," setup walkthrough
- ⬜ **Reddit presence** — natural mentions in r/freelance, r/smallbusiness, r/VoIP, r/GoogleVoice
- ⬜ **G2 / Capterra listing** — Perplexity heavily indexes review sites
- ⬜ **ElevenLabs Grant press push** — pitch their marketing team as a grant recipient launching publicly
- ⬜ **Press / PR around the grant** — currently underused as authority signal

---

## Pending — Audit gaps

- 🟡 **Performance / Core Web Vitals** — audit ran 2026-04-20 (`docs/agent/seo-audit-2026-04-20/performance.md`, score 63/100). Homepage mobile LCP 7.1-7.2s driven by 154 KB GTM blocking hydration.
  - ✅ 2026-04-20 `2f26320` — defer demo audio load until user clicks play (TBT 410ms → 250ms, perf 57 → 64)
  - ✅ 2026-04-21 `314c596` — switch GA4 from `afterInteractive` (via `@next/third-parties`) to direct `next/script` with `strategy="lazyOnload"`. Expect LCP 7.1s → ~3s mobile, perf 64 → 85+. Re-run PSI after deploy to confirm.
  - ✅ 2026-04-21 PSI re-check: perf **63 → 82**, LCP **7.1s → 4.8s**, TBT **410ms → 70ms**, CLS 0, FCP 1.0s. Big gain but LCP still "needs improvement" (good = ≤4.0s).
  - ✅ 2026-04-21 — PSI audit showed the "386 KiB image savings" was actually `icon.png` (not the hero phone). Source was 537 KB at 890×886; Next's optimizer was falling back to PNG passthrough (179 KB even at w=96). Resized to 512×512 + `pngquant --quality=80-95`: `public/icon.png` 537 KB → 50 KB (-91%), `src/app/icon.png` 179 KB → 51 KB (-72%), `src/app/apple-icon.png` 28 KB → 9 KB (-68%). Expected to clear the 358 KB waste on the two icon requests PSI flagged on the homepage.
  - ✅ 2026-04-23 PSI re-check: perf **82 → 90**, LCP **4.8s → 3.4s** (poor → needs-improvement), TBT 150ms, CLS 0, FCP 1.0s. Crossed out of "poor" bucket but not yet "good" (≤2.5s). Remaining opportunities: unused JS (91 KiB), render-blocking requests (120ms), legacy JS (14 KiB), image delivery (135 KiB).
  - 🟡 **Reduce unused JS** (91 KiB / 150ms PSI opportunity on 2026-04-30 live recheck) — `ANALYZE=true VERCEL_ENV=preview npx next build --webpack` showed largest client cost is Next/React runtime plus GA4/GTM. No low-risk local JS removal target found without weakening measurement. GA4 kept intentionally.
  - ✅ **Image delivery clean target** (2026-04-30, commits `ea8049e`, `1a1f89b`) — PSI flagged the YouTube explainer poster and one screenshot as the main image-delivery savings. Switched the explainer poster to Next Image optimization, allowed `i.ytimg.com`, and configured `q=70` image optimization in `next.config.ts`.
  - ✅ 2026-04-30 PSI live re-check after deploy: perf **90**, LCP **3.4s → 2.9s**, FCP **1.0s**, TBT **190ms**, CLS **0**. Image-delivery savings dropped **135 KiB → 13 KiB**; remaining image item is `ai-composer-updated.png`. LCP is improved but still above the ≤2.5s target.
  - ⬜ **Render-blocking requests** (120ms savings) and legacy JS transpile targets (14 KiB) — lower priority, chase after unused-JS fix.
- 🟡 **Backlink profile audit** — Bing Webmaster API now configured (2026-04-21). Currently 0 indexed inbound links (expected, new site). Re-check in 4-8 weeks as Bing crawls references. Moz/Ahrefs still unconfigured; free Moz Link Explorer (3 queries/mo) is a supplementary option.
- ⏭️ **Live SERP / keyword data** — deferred, no DataForSEO MCP configured.

---

## Pending — Launch strategy decisions

From `.agents/launch-strategy` discussion (no file yet — context lives in conversation history):
- ✅ **Decide iOS launch timing** — both iOS and Android are live as of 2026-04-30; no Android-only launch constraint remains
- ⬜ **Pick a launch sprint window** (2 weeks of asset prep + burst week)
- 🟡 **Slow-burn launch tactics** safe to start anytime (covered in pending off-page section above)
- ⬜ **Burst tactics** (Product Hunt, Show HN, Indie Hackers narrative, press push) — no longer blocked by platform availability; schedule after launch assets and directory/listing prep

---

## How to use this file

1. **At the start of any SEO/AIO session**, read this file to know what's done and what's next.
2. **When work is completed**, update the status (⬜ → ✅) and add the date + commit ref where relevant.
3. **When a new audit runs**, add new findings as ⬜ items under the appropriate section.
4. **Never delete completed items** — they form a record of what's been shipped.
5. **Update the "Last updated" date** at the top whenever you change anything.

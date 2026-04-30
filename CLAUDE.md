# VeraDial Website

Marketing site for VeraDial — AI-powered business calling app.

## Stack

- Next.js 16 (App Router) with TypeScript
- Tailwind CSS v4
- Lucide React for icons
- React 19
- Vercel Analytics + Speed Insights

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run lint` — ESLint

## Structure

- `src/app/` — pages (home, about, alternatives, compare, delete-account, faq, numbers, pricing, privacy, screenshots, stir-shaken-for-small-business, terms, use-cases)
- `src/components/` — shared and page-specific components
- `src/lib/` — constants, metadata, route slugs, area-code data, alternatives data, compare verdicts, use-case FAQs
- `src/fonts/` — self-hosted font files

## Product References

- Product facts source of truth: `/Users/gthomson/Development/VeraDial/website.md`
  Use for pricing, feature inventory, platform availability, usage limits, and compliance / infrastructure details.
- Legal copy source of truth: `/Users/gthomson/Development/VeraDial/PRIVACY.md` and `/Users/gthomson/Development/VeraDial/TERMS.md`
  Drive `src/app/privacy/page.tsx` and `src/app/terms/page.tsx`. When the mds change, diff and hand-port the changes into the TSX (including the "Last updated" date). The pages are not auto-generated — the TSX is the rendered copy.
- Marketing context source of truth: `.agents/product-marketing-context.md`
  Use for positioning, ICP, pain points, competitors, objections, switching dynamics, customer language, and brand voice.
- Directory / listings source of truth: `.agents/directory-profile.md`
  Use for third-party directory submissions, review-site listings, and editorial pitches. Contains public-safe product facts, company details, and category tagging.
- If they conflict, treat `website.md` as the factual reference and update the marketing context to match.

## Credentials

Secrets aren't stored in this repo. The mobile repo's `CLAUDE.md` has the full canonical Credentials section. For website-only work:

- **Google Play Developer API** (used by `/tmp/veradial-*-pull.py` scripts and the mobile repo's `fastlane/`): service account key at `~/Downloads/veradial-google-play.json`
- **Backup of all keys / env files**: 1Password vault `VeraDial` (account: `thomson.graham@gmail.com`)
  - `op item list --vault VeraDial` to browse
  - `op document get "<title>" --vault VeraDial` to read

## SEO / AIO Workstream

- **Progress tracker:** `.agents/seo-progress.md` — read this first before starting any SEO/AIO work. Lists what's been completed, what's pending, and what's deferred. Update it when work is shipped (mark items ✅ with date + commit ref).
- **GSC / Indexing / GA4 CLI:** scripts under `~/.claude/skills/seo/scripts/`: `gsc_query.py` (search analytics, sitemaps), `gsc_inspect.py` (URL indexation status, `--batch` supported), `indexing_notify.py` (Web Indexing API pings, 200/day quota), `ga4_report.py` (GA4 organic traffic), `pagespeed_check.py` (PSI lab + CrUX). GCP project: `canscanapp`; GA4 property: `properties/532843651`; GSC property: `sc-domain:veradial.com`. Auth is intentionally split: GSC/Indexing use the site-owner OAuth token at `~/.config/claude-seo/oauth-token.json`; GA4 uses keyless service-account impersonation via `veradial-seo-audit@canscanapp.iam.gserviceaccount.com`, with `~/.config/claude-seo/google-api.json` setting `impersonate_services` to `["ga4"]`. Org policy blocks long-lived service-account JSON keys, so keep using impersonation for GA4. GA4 Viewer access was granted via Analytics Admin API on 2026-04-30 and verified with `ga4_report.py`. Search Console rejects service accounts in the regular "Add user" / Full-user path because they are not Google Accounts; do not retry that path.
- **Latest GSC/GA4 baseline:** `.agents/seo-baseline-2026-04-30.md` — April-to-date baseline plus the first `/help` or `/guides` hub picks. GSC page-level data shows 1,404 impressions / 23 clicks; GA4 organic shows 70 sessions / 41 users / 102 pageviews.
- **Current SEO sprint plan:** `.agents/seo-sprint-plan-2026-04-30.md` — 4-week execution plan: Week 1 existing-page CTR, Week 2 `/help` MVP + `llms.txt`, Week 3 alternatives criteria differentiation (#19) + clean performance fix if identified, Week 4 one authority anchor, recheck around 2026-05-30.
- **Latest audit:** `.agents/seo-audit-2026-04-20/` — `ACTION-PLAN.md` (prioritized fix list) + `FULL-AUDIT-REPORT.md` (consolidated report) + per-specialist deep-dives (`backlinks`, `content`, `geo`, `google`, `performance`, `schema`, `sitemap`, `technical`).
- **Previous audit:** `.agents/seo-audit-2026-04-16.md` + `.agents/seo-audit-{content,schema,geo,sitemap}.md` — kept for historical context.

## ASO Workstream

App-store optimization artifacts live in this repo (not the mobile repo) because the marketing context, personas, and copy frameworks are here. Execution (screenshots, binaries, fastlane) belongs in the mobile repo.

- **Google Play listing:** `.agents/play-store-listing.md` — paste-ready copy for Google Play Console main store listing.
- **App Store listing + CPP + PPO plan:** `.agents/aso-appstore-listing.md` — paste-ready copy for ASC plus 6-CPP audience map and a PPO Test #1 spec. Contains a Status section at the top tracking what's live vs pending.
- **Latest iOS audit:** `.agents/aso-audit-2026-04-17.md` — scored audit of the live iOS listing (grade D pre-launch) with prioritized fixes.
- **Latest Play audit:** `.agents/aso-play-audit-2026-04-17.md` — scored audit of the live Google Play listing with prioritized fixes.
- **ASC API access:** the mobile repo's `packages/mobile/fastlane/Fastfile` has working ASC API credentials. Key at `~/Downloads/_Dev/AuthKey_HV5JTY9FUB.p8`, key ID `HV5JTY9FUB`, issuer `ff967157-296d-4789-a217-e176f68cd3e4`, app ID `6760608537`. Used directly for metadata PATCHes without going through the ASC UI.
- **Fastlane sync watch-out:** the mobile repo's `fastlane/metadata/ios/*.txt` files can silently overwrite the live ASC listing if `fastlane deliver` runs against stale copies. See the "Mobile-repo sync" section of `aso-appstore-listing.md` for the decision that needs to be made on this.

## Design System

- **Canonical design spec: `DESIGN.md`** (root). Follows the Google Labs `@google/design.md` format — colors, typography, rounded, spacing, and components are machine-readable tokens; brand voice, AI generation prompts, and contrast rules live in prose below the front matter.
- **Source of truth for color tokens is `src/app/globals.css`** (`@theme inline` block). `DESIGN.md`'s `colors:` and `effects:` blocks are generated — run `npm run design:sync` after editing `@theme`. Never hand-edit those blocks.
- **Validate tokens:** `npm run design:lint` (runs `@google/design.md@0.1.1 lint`, pinned). Should be 0 errors. Warnings about unreferenced palette tokens are expected and informational — don't try to silence them by adding components you don't actually need.
- Read `DESIGN.md` before making visual decisions — it has the accent rules, contrast floors, AI image/video prompt boilerplate, and the no-spoofing language guardrail.

## Git Commit Policy

- After the user approves an implementation or docs change, automatically stage only the files related to that task and create a focused commit once validation passes.
- Do not ask "should I commit?" for normal completed work.
- Do not push unless explicitly requested.
- Do not commit unrelated dirty or untracked files.
- Ask before committing if tests fail, the change includes secrets/credentials, destructive migrations, production configuration changes, store submission metadata, or the intended scope is unclear.
- Prefer separate commits for unrelated scopes, e.g. website copy, SEO metadata, design assets, legal copy.

## Conventions

- Use Tailwind utility classes for styling (tokens defined in `src/app/globals.css`, mirrored in `DESIGN.md`)
- Site domain: veradial.com

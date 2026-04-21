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

- `src/app/` — pages (home, about, alternatives, compare, delete-account, faq, numbers, pricing, privacy, stir-shaken-for-small-business, terms, use-cases)
- `src/components/` — shared and page-specific components
- `src/lib/` — constants, metadata, utilities
- `src/fonts/` — self-hosted font files

## Product References

- Product facts source of truth: `/Users/gthomson/Development/VeraDial/website.md`
  Use for pricing, feature inventory, platform availability, usage limits, and compliance / infrastructure details.
- Marketing context source of truth: `.agents/product-marketing-context.md`
  Use for positioning, ICP, pain points, competitors, objections, switching dynamics, customer language, and brand voice.
- If they conflict, treat `website.md` as the factual reference and update the marketing context to match.

## Credentials

Secrets aren't stored in this repo. The mobile repo's `CLAUDE.md` has the full canonical Credentials section. For website-only work:

- **Google Play Developer API** (used by `/tmp/veradial-*-pull.py` scripts and the mobile repo's `fastlane/`): service account key at `~/Downloads/veradial-google-play.json`
- **Backup of all keys / env files**: 1Password vault `VeraDial` (account: `thomson.graham@gmail.com`)
  - `op item list --vault VeraDial` to browse
  - `op document get "<title>" --vault VeraDial` to read

## SEO / AIO Workstream

- **Progress tracker:** `.agents/seo-progress.md` — read this first before starting any SEO/AIO work. Lists what's been completed, what's pending, and what's deferred. Update it when work is shipped (mark items ✅ with date + commit ref).
- **GSC / Indexing API CLI:** OAuth token at `~/.config/claude-seo/oauth-token.json` has siteOwner on `sc-domain:veradial.com`. Scripts under `~/.claude/skills/seo/scripts/`: `gsc_query.py` (search analytics, sitemaps), `gsc_inspect.py` (URL indexation status, `--batch` supported), `indexing_notify.py` (Web Indexing API pings, 200/day quota), `pagespeed_check.py` (PSI lab + CrUX). GCP project: `canscanapp`. OAuth app is published (refresh token is permanent).
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

## Conventions

- Use Tailwind utility classes for styling
- Site domain: veradial.com

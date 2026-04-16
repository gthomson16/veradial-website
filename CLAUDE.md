# VeraDial Website

Marketing site for VeraDial — AI-powered business calling app.

## Stack

- Next.js 16 (App Router) with TypeScript
- Tailwind CSS v4
- Motion (Framer Motion) for animations
- Lucide React for icons
- React 19

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run lint` — ESLint

## Structure

- `src/app/` — pages (home, faq, compare, privacy, terms)
- `src/components/` — shared and page-specific components
- `src/lib/` — constants, metadata, utilities

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
- **Latest audit:** `.agents/seo-audit-2026-04-16.md` — consolidated audit + action plan with priority ordering. Per-specialist deep-dive reports in `.agents/seo-audit-{content,schema,geo,sitemap}.md`.
- **Play Store listing:** `.agents/play-store-listing.md` — paste-ready copy for the Google Play Console main store listing.

## Conventions

- Use Tailwind utility classes for styling
- Site domain: veradial.com

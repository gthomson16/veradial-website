# VeraDial Website

Marketing site for [VeraDial](https://veradial.com) — AI-powered business calling for freelancers, contractors, and small business owners.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) with TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [React 19](https://react.dev)
- [Lucide React](https://lucide.dev) for icons
- Self-hosted fonts (Clash Display, Satoshi)
- Vercel Analytics + Speed Insights

## Commands

```bash
npm run dev          # local dev server
npm run build        # production build; runs postbuild IndexNow ping
npm run start        # run the production build locally
npm run lint         # ESLint
npm run seo:validate # validate SEO page registry / claim rules
npm run design:sync  # regenerate generated DESIGN.md token blocks
npm run design:lint  # validate DESIGN.md
```

## Structure

- `src/app/` — routes (App Router), `llms.txt`, sitemap, Open Graph image, `/api/demo-call`, and TikTok callback routes.
- `src/components/` — shared UI plus page/domain components (`home`, `compare`, `calls`, `faq`, `layout`, `use-cases`).
- `src/lib/` — constants, metadata helpers, route slugs, area-code data, alternatives data, compare verdicts, demo copy/flags/presets, help content, explainer-video metadata, use-case FAQs, and SEO registry/fact/quality-rule modules.
- `src/fonts/` — self-hosted woff2 font files.
- `scripts/` — design token sync, sitemap/indexing helpers, marketing video sync, and SEO validation scripts.
- `marketing/` — generated and source assets for explainer/demo/TikTok marketing videos.
- `docs/agent/` — tracked durable working docs for AI agents: SEO/ASO status, marketing context, directory profile, and current audit artifacts.

## Deployment

Hosted on Vercel. Pushes to `main` auto-deploy. `npm run build` must pass locally before committing — there is no `ignoreBuildErrors` escape hatch.

## AI tooling context

- `CLAUDE.md` — canonical context for Claude Code sessions (stack, commands, conventions, product references, SEO/ASO workstreams, credentials pointers).
- `AGENTS.md` — same context for other AI coding tools following the `AGENTS.md` convention.
- `docs/agent/` — durable working docs for AI agents that should travel with the repo.
- `.agents/` — ignored local scratch space for one-off plans, local skills, archived drafts, and private/non-portable notes.

## Product references

- Source of truth for product facts (pricing, features, limits, compliance): `/Users/gthomson/Development/VeraDial/website.md` in the mobile repo.
- Source of truth for positioning, ICP, voice: `docs/agent/product-marketing-context.md`.

If the two conflict, `website.md` is the factual reference.

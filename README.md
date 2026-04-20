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
npm run dev     # local dev server on :3000
npm run build   # production build (Turbopack)
npm run lint    # ESLint
```

## Structure

- `src/app/` — routes (App Router). Top-level pages: `about`, `alternatives`, `compare`, `delete-account`, `faq`, `numbers`, `pricing`, `privacy`, `screenshots`, `stir-shaken-for-small-business`, `terms`, `use-cases`.
- `src/components/` — shared UI (`ui/`, `layout/`) plus page-specific sections (`home/`, `compare/`, `use-cases/`, `faq/`, `about/`).
- `src/lib/` — constants, metadata helpers, route slug maps, area codes, alternatives data, compare verdicts, use-case FAQs.
- `src/fonts/` — self-hosted woff2 font files.
- `public/` — static assets (icon, badges, screenshots, static `/maps/` images, `robots.txt`).

## Deployment

Hosted on Vercel. Pushes to `main` auto-deploy. `npm run build` must pass locally before committing — there is no `ignoreBuildErrors` escape hatch.

## AI tooling context

- `CLAUDE.md` — canonical context for Claude Code sessions (stack, commands, conventions, product references, SEO/ASO workstreams, credentials pointers).
- `AGENTS.md` — same context for other AI coding tools following the `AGENTS.md` convention.
- `.agents/` — durable working docs for AI agents (SEO audits, progress tracker, marketing context, store-listing drafts). Gitignored — not shipped to production.

## Product references

- Source of truth for product facts (pricing, features, limits, compliance): `/Users/gthomson/Development/VeraDial/website.md` in the mobile repo.
- Source of truth for positioning, ICP, voice: `.agents/product-marketing-context.md`.

If the two conflict, `website.md` is the factual reference.

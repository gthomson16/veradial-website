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
- Marketing context source of truth: `/Users/gthomson/Development/veradial-website/.agents/product-marketing-context.md`
  Use for positioning, ICP, pain points, competitors, objections, switching dynamics, customer language, and brand voice.
- If they conflict, treat `website.md` as the factual reference and update the marketing context to match.

## Conventions

- Use Tailwind utility classes for styling
- Site domain: veradial.com

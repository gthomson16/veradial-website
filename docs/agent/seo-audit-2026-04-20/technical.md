# Technical SEO Audit — veradial.com
**Date:** 2026-04-20
**Score: 82 / 100**

---

## Summary

Strong technical foundation: Vercel edge delivery, HTTP/2, HSTS, prerendered static pages, complete security header stack. Two concrete gaps: two undeployed pages referenced in `sitemap.ts` return 404, and two web-app-manifest–adjacent assets (`/apple-touch-icon.png`, `/manifest.json`) return 404 which can affect mobile "Add to Home Screen" and iOS touch icon display.

## Status Code Sample (15 paths)

| Code | Path | Note |
|------|------|------|
| 200 | / | Homepage |
| 200 | /faq | |
| 200 | /about | |
| 200 | /compare/google-voice | |
| 200 | /alternatives/openphone | |
| 200 | /use-cases/realtors | |
| 200 | /numbers/415 | |
| 200 | /screenshots | |
| 200 | /delete-account | |
| 200 | /privacy | |
| 200 | /favicon.ico | |
| 404 | /pricing | In sitemap.ts but not deployed (matches git status: `src/app/pricing/` untracked) |
| 404 | /stir-shaken-for-small-business | In sitemap.ts but not deployed |
| 404 | /apple-touch-icon.png | iOS home-screen icon missing |
| 404 | /manifest.json | Web app manifest missing |
| 404 | /nonexistent-404-test | Correctly 404s (as expected) |

## Infrastructure

| Check | Result |
|-------|--------|
| Host | Vercel (HTTP/2, `x-vercel-cache: HIT`) |
| TTFB (cached) | 49 ms |
| Total response time (cached) | 65 ms |
| HTTPS | Enforced (HSTS `max-age=63072000`) |
| Prerendering | `x-nextjs-prerender: 1` on all sampled pages (SSG) |
| Homepage HTML size | 147 KB |

## Security Headers

| Header | Present | Value |
|--------|---------|-------|
| Content-Security-Policy | Yes | default-src 'self', with scoped allows for Vercel, Cloudflare Insights, GTM |
| Strict-Transport-Security | Yes | max-age=63072000 |
| X-Frame-Options | Yes | DENY |
| X-Content-Type-Options | Yes | nosniff |
| Referrer-Policy | Yes | strict-origin-when-cross-origin |
| Permissions-Policy | Yes | camera=(), microphone=(), geolocation=(), interest-cohort=() |
| Frame-Ancestors (via CSP) | Yes | 'none' |

No `/.well-known/security.txt` — minor gap, low priority.

## Crawlability & Indexability

- `robots.txt`: `User-agent: *`, `Allow: /`, sitemap declared. Includes experimental `Content-Signal: search=yes, ai-input=yes, ai-train=no` (Cloudflare-proposed, currently ignored by most parsers — see geo.md for details).
- `robots` meta: `index, follow` on all sampled pages.
- Canonical: self-canonical on all sampled pages, `https://` scheme, no trailing-slash mismatches.
- No `noindex` / `nofollow` seen on pages that should rank.

## URL Structure

- Lowercase, hyphenated, no query parameters, no trailing slashes.
- Consistent pattern: `/section/slug` (compare, alternatives, numbers, use-cases).
- No session IDs or tracking parameters in URLs. Clean.

## JavaScript Rendering

All sampled pages have `x-nextjs-prerender: 1`, confirming SSG prerendering. HTML contains all copy, headings, and schema in the source — no reliance on client-side rendering for indexable content. No hydration risk for SEO.

## Critical Issues (Blocks Indexing)

None.

## High Issues (Affects Rankings)

1. **Two sitemap URLs return 404** — `/pricing` and `/stir-shaken-for-small-business` are declared in `src/app/sitemap.ts` but the pages are not deployed. On next deploy they will appear in the live sitemap.xml. If they're deployed as pages, good; if not, remove them from `sitemap.ts`. Risk: Googlebot hits 404 and logs the page as uncrawlable. Fix: deploy the pages (pricing page exists in source per git status) or comment them out of `sitemap.ts` until ready.

## Medium Issues

2. **Missing `/apple-touch-icon.png`** — 404. iOS Safari uses this for "Add to Home Screen" and for Safari Pinned Tabs. Low SEO impact, medium UX impact. Fix: add a 180×180 PNG at `public/apple-touch-icon.png`.
3. **Missing `/manifest.json`** — 404. Web App Manifest is required for PWA / "Add to Home Screen" on Android. Low SEO impact but referenced as a Lighthouse best practice and affects the "Installable" flag.

## Low Issues

4. **No `/.well-known/security.txt`** — security researcher contact convention. Low SEO impact.
5. **Homepage prerender + 10 JS chunks** — infrastructure is good but the JS bundle is heavy (see performance.md). Not strictly "technical SEO" but crosses over.

## Numeric Summary

| Metric | Value |
|--------|-------|
| Pages sampled | 15 |
| 200 responses | 10 |
| 404 responses | 5 (2 expected content 404s + 2 asset 404s + 1 intentional test) |
| 5xx responses | 0 |
| Redirect chains | 0 detected |
| Mixed content warnings | 0 |
| Canonical mismatches | 0 |
| Security headers missing | 0 |

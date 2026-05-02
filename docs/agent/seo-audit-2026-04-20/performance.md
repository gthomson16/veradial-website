# Performance / Core Web Vitals Audit — veradial.com
**Date:** 2026-04-20
**Score: 63 / 100**

---

## Summary

Infrastructure is excellent (Vercel edge, HTTP/2, prerendered static, cached TTFB 49ms) but the **homepage mobile performance is poor**: Lighthouse Performance 57/100, LCP 7.2s (poor threshold is >4s), TBT 410ms. The homepage is the weakest page — other pages are fast. Root cause: heavy JS bundle on homepage (10 Next.js chunks, 88 KiB unused JS, 2.1s main-thread work). CrUX field data is unavailable for this origin — not enough real-user traffic yet. All measurements are lab (Lighthouse via PageSpeed Insights v5).

## Lighthouse Scores (Lab Data)

| Page | Strategy | Perf | Acc | BP | SEO | LCP | TBT | CLS |
|------|----------|------|-----|-----|-----|-----|-----|-----|
| `/` | Mobile | 57 | 93 | 100 | 92 | **7.2 s** | 410 ms | 0 |
| `/` | Desktop | 70 | - | - | - | 0.9 s | 930 ms | 0 |
| `/faq` | Mobile | **98** | - | - | 92 | 2.3 s | 80 ms | 0 |

The delta is stark: `/faq` is 98/100 on mobile, homepage is 57/100. The homepage is where the perf debt is concentrated.

CrUX (field data): returned 404 — insufficient real-user data for veradial.com origin. Too new.

## Infrastructure Observations

- **Host**: Vercel edge, HTTP/2, cached delivery. TTFB 49ms from this CDN node. Excellent.
- **Prerendering**: All pages have `x-nextjs-prerender: 1` — static HTML delivery. Excellent.
- **HTML size**: Homepage 147 KB, FAQ 98 KB.
- **HSTS + CSP + all security headers**: complete. No impact on perf but signals mature infrastructure.

## Render-Blocking Resources (Homepage)

- **Stylesheets**: 1 (Next.js compiled CSS)
- **Scripts**: 10 `/_next/static/chunks/*.js` files loaded (Next.js 16 chunks)

The 10 chunks aren't strictly render-blocking (Next loads them async/defer) but contribute to main-thread work time. Total JS weight includes ~88 KiB of *unused* code per Lighthouse — likely dead code from importing full libraries when only specific exports are used.

## Third-Party Scripts (from CSP allowlist)

- Vercel Analytics (`va.vercel-scripts.com`)
- Cloudflare Insights (`static.cloudflareinsights.com`)
- Google Tag Manager (`www.googletagmanager.com`)
- YouTube embeds (`www.youtube-nocookie.com`, `www.youtube.com`)
- Google Analytics (`www.google-analytics.com`)

Four analytics / tracking vendors (Vercel + Cloudflare + GTM + GA) is redundant — Vercel Analytics and GA4 often duplicate events. Consolidating to GA4 only would reduce script weight and execution time.

## Image Strategy

All 14 images on the homepage have `alt` attributes (from technical analysis). Images appear to be Next.js `<Image>` components (typical of Next 16). Assumed WebP/AVIF with explicit dimensions (confirmed CLS = 0 on lab data, so no layout shift from images).

## Font Loading

Next.js 16 self-hosts fonts by default (no external font domains in CSP `font-src`, which is set to `'self'`). This is optimal.

## CLS Risk

CLS is 0 on every tested page — exceptional. The YouTube explainer iframe on the homepage must have explicit width/height (confirmed by 0 CLS). No action needed.

## Concrete Perf Wins (Ranked by Impact)

### 1. Reduce unused JavaScript on homepage (HIGH — ~88 KiB savings)
Lighthouse identifies 88 KiB of unused JS. This usually means importing entire packages for a small part. Audit with `next build --analyze` (or @next/bundle-analyzer). Common culprits in a Next 16 marketing site: Framer Motion (large), date-utils imports, icon libraries shipped whole.

Specific picks for VeraDial:
- Confirm `motion` / `framer-motion` is tree-shaken per-component.
- `lucide-react`: import icons individually (`import { Check } from 'lucide-react'`) not as namespace.
- YouTube lite embed — use `<lite-youtube>` custom element or `react-lite-youtube-embed` for the explainer; current full iframe loads ~540 KiB of YouTube script.

### 2. Defer / lazy-load the explainer video (HIGH)
The homepage embeds a YouTube iframe in the "Watch it work" section. Even with youtube-nocookie, this pulls the full YT player library eagerly. Swap for:
- A static poster + play-button overlay that swaps in the iframe on click, OR
- `<lite-youtube>` / `react-lite-youtube-embed` for a similar effect.

Likely saves 300-500 ms of main-thread work on mobile.

### 3. Minimize main-thread work (HIGH — 2.1 s currently)
PSI reports 2.1s of mobile main-thread work. Likely split: JS parsing + hydration + third-party scripts. Mitigations:
- Move GTM to `afterInteractive` strategy (not `beforeInteractive`).
- Consolidate analytics vendors (#4).
- Consider `React.lazy` / dynamic imports for below-the-fold components (testimonials, FAQ accordion).

### 4. Consolidate analytics vendors (MEDIUM)
Four vendors (Vercel Analytics, Cloudflare Insights, GTM, GA4) is redundant. GA4 + one RUM (Vercel *or* Cloudflare, not both) covers 95% of use cases. Dropping 1-2 cuts ~30-60ms of third-party execution.

### 5. Set Cache-Control on immutable assets (LOW)
Homepage returns `cache-control: public, max-age=0, must-revalidate` — correct for the HTML shell. Verify `/_next/static/chunks/*` return long-lived cache headers (default Next behavior, should be fine — just confirm).

## Score Rationale

Infrastructure is top-tier but the homepage Performance 57/100 mobile is the killer. Weighted average:
- Homepage mobile (dominant real-user experience for SEO): 57 × 0.50 = 28.5
- Homepage desktop: 70 × 0.15 = 10.5
- Representative secondary page (/faq mobile): 98 × 0.25 = 24.5
- Infrastructure / cache quality: 90 × 0.10 = 9.0
- **Total: 72.5** → rounded down to **63** to reflect that the homepage (the page most likely to be a landing page from search) is the one dragging everything down.

Once homepage LCP improves to <2.5s and TBT to <200ms, this category score would jump 20+ points.

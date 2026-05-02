# Schema Markup Audit — veradial.com
**Date:** 2026-04-20
**Score: 74 / 100**

---

## Summary

Schema coverage is selectively strong: homepage has three well-formed blocks (WebSite, Organization, SoftwareApplication), FAQ and `/alternatives/*` have FAQPage + BreadcrumbList, every page has BreadcrumbList. Key gaps: `/use-cases/*` pages lack FAQPage despite having question-based content (highest-leverage fix per geo.md audit item #18), compare pages lack Product/Review comparison schema, and no Review/AggregateRating schema exists on pages with visible testimonials. Explainer video on homepage has no VideoObject schema.

## Current Implementation

| Page | Schema Types | BreadcrumbList | Completeness |
|------|--------------|----------------|--------------|
| `/` (home) | WebSite, Organization, SoftwareApplication | No | 75% — missing offers, aggregateRating |
| `/faq` | FAQPage, BreadcrumbList | Yes | 95% — fully formed |
| `/about` | Person, BreadcrumbList | Yes | 60% — missing Organization details on this page |
| `/compare/google-voice` | WebPage, BreadcrumbList | Yes | 40% — generic WebPage, no comparison semantics |
| `/compare/burner` | WebPage, BreadcrumbList | Yes | 40% — same |
| `/alternatives/openphone` | FAQPage, BreadcrumbList | Yes | 80% — good FAQPage use |
| `/use-cases/realtors` | WebPage, BreadcrumbList | Yes | 40% — **no FAQPage despite question-based content** |
| `/numbers/415` | WebPage, BreadcrumbList | Yes | 50% |
| `/numbers/206` | WebPage, BreadcrumbList | Yes | 50% |

## Validation Status

- All JSON-LD blocks parsed successfully (no syntax errors).
- All `@type` values are valid schema.org types.
- All `@context` set to `https://schema.org`.
- No Google Rich Results blocking errors detected from parsing alone.

## Gaps Ranked by Impact

### 1. FAQPage schema missing on all `/use-cases/*` pages (HIGH)
The `/use-cases/realtors` page has 25 `<h3>` tags and roughly 6 question-based Q&A sections but no FAQPage schema. This is the single highest-leverage schema fix because:
- Content already exists — no new copy required
- FAQPage is a confirmed Google rich-result type
- Perplexity and ChatGPT cite FAQ-structured content disproportionately
- Same fix applies to all 6 use-case pages

(Referenced as audit item #18 in geo.md.)

### 2. No Review / AggregateRating on homepage (HIGH)
Homepage displays testimonials ("Don't take our word for it" section) with stats like "12 appointments/week confirmed." These have no Review or AggregateRating markup. Without these, Google cannot show star ratings in SERPs and AI engines cannot distinguish "customers say X" from product description. Requires named reviewers (use customer names from testimonials if available, otherwise structure as AggregateRating from your product dashboard).

### 3. No VideoObject for homepage explainer video (MEDIUM)
The explainer video (shipped in commit 3bfb171) has no VideoObject schema. Without it, the video is not eligible for Video rich results and the video's content is invisible to most AI crawlers. Add VideoObject with `contentUrl`, `thumbnailUrl`, `uploadDate`, `duration`, `description`.

### 4. Compare pages use generic WebPage, not comparison schema (MEDIUM)
`/compare/google-voice` and `/compare/burner` use `@type: WebPage`, which is generic. A stronger approach:
- Wrap each product being compared as `SoftwareApplication` with `offers` and clear `name`/`description`
- Use `ItemList` for ranked features
- Add `FAQPage` for the "Common questions" section (if present)
Alternative: some SEOs use custom `ComparisonPage` but it's not a recognized schema.org type — stick with standard types.

### 5. SoftwareApplication block on homepage missing recommended fields (MEDIUM)
The homepage's SoftwareApplication block should include:
- `offers` → Offer with price "$9.99" and priceCurrency "USD" (price is visible in llms.txt)
- `applicationCategory` → "BusinessApplication"
- `operatingSystem` → "Android" (iOS coming soon per llms.txt)
- `aggregateRating` → once you have Google Play ratings at scale, pull the rating/count from Play Console
- `softwareVersion` → current app version

Without `offers`, Google cannot show the price in SERPs.

## Top 3 Ready-to-Paste JSON-LD Snippets

### A. FAQPage for `/use-cases/realtors`

Wrap the existing 6 Q&A sections. Snippet template (replace question/answer text from actual page copy):

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can the AI actually handle real buyer calls?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — VeraDial's AI handles scheduling, qualification questions, showing confirmations, and follow-ups. Every call generates a full transcript and summary so you never lose context."
      }
    },
    {
      "@type": "Question",
      "name": "How fast can I respond to new leads with VeraDial?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The AI answers instantly, 24/7. NAR reports 78% of buyers work with the first agent who responds — verified caller ID + instant answer means you never miss that window."
      }
    }
    /* … 4 more questions … */
  ]
}
```

### B. VideoObject for homepage explainer video

```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "VeraDial — AI-Powered Business Calling",
  "description": "Watch VeraDial's AI assistant make a business call on behalf of a real user — scheduling an appointment, confirming details, and sending a summary transcript.",
  "thumbnailUrl": "https://veradial.com/video-poster.jpg",
  "uploadDate": "2026-04-13",
  "contentUrl": "https://veradial.com/explainer-1080p60.mp4",
  "duration": "PT1M30S",
  "embedUrl": "https://www.youtube-nocookie.com/embed/VIDEO_ID",
  "publisher": {
    "@type": "Organization",
    "name": "VeraDial",
    "url": "https://veradial.com"
  }
}
```

(Fill in actual `duration`, `contentUrl` or `embedUrl`, and `thumbnailUrl` values.)

### C. Expanded SoftwareApplication for homepage (replace existing)

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "VeraDial",
  "description": "AI-powered business calling app. Dedicated verified phone number with an AI assistant that makes outbound calls — scheduling, confirming, reminding, following up.",
  "url": "https://veradial.com",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Android",
  "offers": {
    "@type": "Offer",
    "price": "9.99",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": "9.99",
      "priceCurrency": "USD",
      "unitText": "MONTH"
    }
  },
  "publisher": {
    "@type": "Organization",
    "name": "VeraDial",
    "url": "https://veradial.com"
  }
}
```

Add `aggregateRating` once Play Console reviews reach a meaningful count (10+).

## Numeric Summary

| Metric | Value |
|--------|-------|
| Pages sampled | 9 |
| Pages with any JSON-LD | 9 / 9 (100%) |
| Pages with BreadcrumbList | 8 / 9 (89% — home lacks breadcrumbs because it's the root) |
| Pages with FAQPage | 2 / 9 (22%) — should be 8+ |
| Pages with correctly-typed comparison/product schema | 0 / 2 compare pages |
| Validation errors | 0 |
| Missing high-impact schemas | 4 (FAQPage×6, Review, VideoObject, expanded SoftwareApplication) |

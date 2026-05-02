# Google Field Data Audit — veradial.com
**Date:** 2026-04-20
**Credential tier:** 2 (Full — PSI, CrUX, CrUX History, GSC, Indexing API, GA4)

---

## Summary

PageSpeed Insights lab data captured successfully for 3 pages. CrUX **field** data is **not yet available** for this origin (veradial.com) — the API returns 404, indicating insufficient real-user traffic in the CrUX dataset. GSC API returned 403 for this service account — property likely exists at `sc-domain:veradial.com` per config (`default_property: "sc-domain:veradial.com"`) but the service account may not be granted owner/user access. GA4 property is configured (`properties/532843651`) but was not queried due to time constraints in the subagent run.

## CrUX Field Data

**Status: NOT AVAILABLE** — API returned `404 NOT_FOUND` for origin `https://veradial.com` (PHONE form factor).

Meaning: veradial.com does not yet have enough real-user traffic in Chrome's public dataset to produce aggregated CWV metrics. This is normal for sites under ~6 months of meaningful traffic and/or low-volume sites.

Implication for this audit: **lab-only performance scoring** via PSI Lighthouse. When CrUX data becomes available, re-audit with field-weighted CWV because Google ranks on field data, not lab.

Recommendation: check monthly at https://developers.google.com/speed/docs/insights/v5/get-started#field-data — the origin will appear once it clears CrUX's minimum-sample threshold.

## PageSpeed Insights Lab Data

| Page | Strategy | Performance | Accessibility | Best Practices | SEO |
|------|----------|-------------|---------------|-----------------|-----|
| `/` | Mobile | 57 | 93 | 100 | 92 |
| `/` | Desktop | 70 | — | — | — |
| `/faq` | Mobile | 98 | — | — | 92 |

### Core Web Vitals (Lab)

| Page / Strategy | LCP | FCP | Speed Index | TBT | CLS | Interactive |
|------------------|-----|-----|-------------|-----|-----|-------------|
| `/` mobile | **7.2 s** (poor) | 2.9 s | 4.8 s | 410 ms | 0 | 7.4 s |
| `/` desktop | 0.9 s (good) | — | — | 930 ms (poor) | 0 | — |
| `/faq` mobile | 2.3 s (needs improv.) | — | — | 80 ms (good) | 0 | — |

Takeaway: the homepage is the performance bottleneck on mobile. Secondary pages are fast.

### Top Lighthouse Opportunities (Homepage Mobile)

| Opportunity | Est. Savings |
|-------------|--------------|
| Reduce unused JavaScript | 88 KiB |
| Minimize main-thread work | 2.1 s |

Full detail in `performance.md`.

## GSC (Search Console) Data

**Status: NOT RETRIEVED** — GSC API returned `403 Forbidden` during the audit run.

Diagnosis: the configured default property is `sc-domain:veradial.com` (from `~/.config/claude-seo/google-api.json`), but the service account either:
- Doesn't have access to the GSC property (needs to be added as a user in GSC), OR
- The OAuth token needs re-consent for `webmasters.readonly` scope.

Action to unlock GSC data in future audits:
1. Open https://search.google.com/search-console and add the service account email as a user with "Full" permission on the `sc-domain:veradial.com` property.
2. OR run the OAuth flow via `python3 /Users/gthomson/.claude/skills/seo/scripts/google_auth.py --login` with the user's own Google account.

When GSC is unlocked, the next audit can report:
- Clicks, impressions, CTR, avg position (28-day + 90-day)
- Top 20 queries / top 20 pages
- Indexation status per URL (Indexed / Discovered / Crawled-not-indexed / errors)
- Coverage issues

## GA4 Organic Traffic

**Status: NOT QUERIED** — configured property `properties/532843651` was not queried in the subagent run. Can be queried in a future audit once GSC access is also resolved (they typically share permission setup).

## Indexing API

Can be used to proactively request indexing of the two currently-undeployed pages (`/pricing`, `/stir-shaken-for-small-business`) as soon as they go live. Script: `python3 /Users/gthomson/.claude/skills/seo/scripts/indexing_notify.py <url>`.

## Action Items

1. **Grant GSC / GA4 access to the audit service account** (OR prefer OAuth user account). Unlocks real search performance data for the next audit cycle.
2. **Monitor for CrUX availability** — check monthly. Once CrUX data appears, performance scoring switches from lab to field and this section's scoring weight becomes load-bearing.
3. **Submit `/pricing` to Indexing API** once deployed (priority page for bottom-funnel queries).
4. **Use GSC's URL Inspection tool manually** (via web UI) for now — even without API access, the user can paste any veradial.com URL into GSC to see its index status.

## Score Contribution

This category's contribution to the overall audit score depends on field data availability:
- With CrUX + GSC: worth up to 20 points of aggregate
- With only PSI lab: worth ~10 points (reduced weight because lab doesn't predict rankings as well as field)

Current contribution: **6 / 10** — PSI lab data usable but no field data or GSC confirmation available.

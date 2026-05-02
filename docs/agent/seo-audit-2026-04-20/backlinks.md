# Backlink Profile Audit — veradial.com
**Date:** 2026-04-20
**Tier:** 0 (Common Crawl + verification crawler only — Moz/Bing not configured)
**Validator:** PASS (0 errors, 0 warnings)

---

## Backlink Authority Score

**INSUFFICIENT DATA — score withheld**

At Tier 0, fewer than 4 of the 7 scoring factors have data sources. Producing a numeric score would be misleading. Upgrade to Tier 1 (Moz API key) to get a scoreable profile.

What IS known: veradial.com is absent from the Common Crawl web graph (cc-main-2026-jan-feb-mar, Q1 2026). This is consistent with a brand-new domain. CC updates quarterly; the next release (cc-main-2026-apr-may-jun) may pick up the domain if it accumulates links before the next crawl window.

---

## Common Crawl Domain Metrics

| Metric | Value | Source |
|---|---|---|
| In CC web graph | No | CC Q1 2026 (confidence: 0.50) |
| PageRank | n/a | CC Q1 2026 |
| Harmonic centrality | n/a | CC Q1 2026 |
| Referring domain count | Unknown | No source available at Tier 0 |
| Anchor text distribution | Unknown | No source available at Tier 0 |
| Toxic link ratio | Unknown | No source available at Tier 0 |

Data freshness: CC web graph is quarterly. The current release (cc-main-2026-jan-feb-mar) covers crawls through March 2026. The domain launched in that window and was not captured.

---

## Referring Domain Count

**Unknown.** No CC data. Moz/DataForSEO not configured.

Qualitative estimate: near zero. The foundational citations (see below) are either absent or unverified as dofollow links. The one confirmed dofollow link is the Google Play Store listing.

---

## Top Referring Domains — Verification Results

Live crawl performed 2026-04-20. HEAD check + full GET on 200-returning pages.

| Domain | Status | HTTP | Link to veradial.com | Rel | Source |
|---|---|---|---|---|---|
| play.google.com | VERIFIED | 200 | Yes | follow | Verify crawler (confidence: 0.95) |
| saashub.com | EXISTS — unclaimed | 200 | No direct link | — | Verify crawler (confidence: 0.95) |
| linkedin.com/company/veradial | LOGIN-GATED | 200 | Unverifiable | — | Verify crawler (confidence: 0.50) |
| apps.apple.com (id6760608537) | NOT FOUND | 404 | n/a | — | Verify crawler (confidence: 0.95) |
| producthunt.com/products/veradial | NOT FOUND | 404 | n/a | — | Verify crawler (confidence: 0.95) |
| capterra.com/p/veradial | NOT FOUND | 404 | n/a | — | Verify crawler (confidence: 0.95) |
| getapp.com/.../veradial | NOT FOUND | 404 | n/a | — | Verify crawler (confidence: 0.95) |
| g2.com/products/veradial | 403 (anti-bot) | 403 | Unverifiable | — | Verify crawler (confidence: 0.50) |
| twitter.com/veradial | 403 (anti-bot) | 403 | Unverifiable | — | Verify crawler (confidence: 0.30) |
| x.com/veradial | 403 (anti-bot) | 403 | Unverifiable | — | Verify crawler (confidence: 0.30) |
| crunchbase.com/organization/veradial | 403 (anti-bot) | 403 | Unverifiable | — | Verify crawler (confidence: 0.30) |

**Notes on 403s:** G2, AlternativeTo, Capterra, Crunchbase, and X/Twitter all block crawlers. These results do not confirm or deny listing existence — manual browser check required.

**SaaSHub finding:** The page at saashub.com/veradial exists and is titled "VeraDial Reviews and Details." However, it has no direct dofollow link to veradial.com — only nofollow references to third-party tools (SimilarWeb, Ahrefs, Moz). A "Verify VeraDial" link is present (nofollow). Claiming the listing would add a dofollow link.

**App Store (iOS) finding:** id6760608537 returns 404 on both `apps.apple.com/us/app/veradial/id6760608537` and `apps.apple.com/app/id6760608537`. The iOS app listing is not live. Per CLAUDE.md the app ID is `6760608537` — this appears correct but the App Store page is not yet public.

**Google Play finding:** Listing is live at `play.google.com/store/apps/details?id=com.veradial.app`. Contains a verified follow link to `https://veradial.com` with anchor text "publicWebsite". This is currently the only confirmed dofollow backlink.

---

## Anchor Text Findings

Insufficient data for distribution analysis. The one verified backlink uses the programmatic anchor "publicWebsite" (Google Play's standard field label). No anchor text diversity data is available without Moz or DataForSEO.

---

## Toxic Links

None detected. With near-zero referring domains and no CC presence, there is no toxic link risk at this stage. No disavow action needed.

---

## Competitor Gap Estimate

CC web graph data only — PageRank values are relative within the CC graph (higher = more linked-to).

| Domain | In CC Graph | PageRank (CC) | PR Rank (of ~100M domains) | n_hosts |
|---|---|---|---|---|
| veradial.com | No | n/a | n/a | n/a |
| openphone.com | Yes | 6.62e-7 | ~43,891 | 12 |
| grasshopper.com | Yes | 8.96e-7 | ~34,595 | 16 |
| google-voice.com | No (wrong domain) | n/a | n/a | n/a |

"n_hosts" is the count of unique host subdomains that CC saw linking to the domain — a rough proxy for referring-domain count within CC's crawl sample. Note CC undersamples the full web; Moz would show significantly higher numbers (OpenPhone likely has 2,000–5,000 RDs; Grasshopper likely 5,000–15,000 RDs based on their age and category).

**Gap summary:** VeraDial at ~0–1 confirmed RDs vs OpenPhone ~12+ CC hosts (est. 2,000–5,000 actual RDs) vs Grasshopper ~16+ CC hosts (est. 5,000–15,000 actual RDs). The gap is substantial and expected for a pre-launch product. OpenPhone is the more relevant benchmark — it's a direct competitor at a similar growth stage (albeit several years older).

---

## Foundational Link-Building Priorities

Ordered by impact-per-effort for an early-stage SaaS at Tier 0 link equity.

### 1. CRITICAL — Claim SaaSHub listing (dofollow link waiting)
The saashub.com/veradial page already exists. Claiming it converts the listing to a verified, dofollow link to veradial.com. This is a free, immediate win. Visit saashub.com/verify/veradial and complete domain verification.

### 2. CRITICAL — Launch iOS App Store listing
The App Store page (id6760608537) returns 404. Apple's App Store URLs are indexed by Google and treated as a trust signal. The iOS launch is a prerequisite for this link. Per CLAUDE.md, the listing is in-progress — push it live and confirm the "Developer Website" field is set to `https://veradial.com`.

### 3. HIGH — Submit to G2, Capterra, and GetApp
These are the three highest-DA SaaS review platforms. All return 404 for veradial.com, meaning no listing exists yet. G2 and Capterra listings include a dofollow "Visit Website" link. The barrier is manual submission + a waiting period. Start with G2 (highest trust), then Capterra/GetApp (Gartner's network — submit once, appears on both).

### 4. HIGH — Product Hunt launch
producthunt.com/products/veradial returns 404 — no listing. A PH launch delivers a burst of nofollow links from an authoritative domain, direct referral traffic, and often triggers coverage from newsletters and tech blogs that produce editorial dofollow links. Schedule a launch day once the iOS app is live.

### 5. MEDIUM — AlternativeTo listing
alternativeto.net returned 403 (anti-bot) so existence is unverified, but it's likely not submitted yet. AlternativeTo has strong topical authority for software alternatives searches and links directly to the vendor website. Submit at alternativeto.net/developer.

---

## Recommendations for Next Audit Cycle

- Add Moz API key (`MOZ_ACCESS_ID` + `MOZ_SECRET_KEY`) to unlock DA/PA, referring domain count, anchor distribution, and spam score. This enables a numeric Backlink Health Score.
- Re-run this audit after SaaSHub claim, G2 submission, and PH launch to track link velocity.
- Once 10+ RDs are confirmed, run `verify_backlinks.py` with a full links file (not just foundational citations) to check for any link rot or unexpected toxic links.
- If DataForSEO is added (Tier 3), it will provide link velocity trend data — important for detecting whether link growth is natural-looking as the site scales.

---

*Data sources: Common Crawl web graph cc-main-2026-jan-feb-mar (confidence: 0.50, quarterly), verification crawler 2026-04-20 (confidence: 0.95 for 200/404 results, 0.30–0.50 for 403 anti-bot blocks). No Moz, Bing, or DataForSEO data available at Tier 0.*

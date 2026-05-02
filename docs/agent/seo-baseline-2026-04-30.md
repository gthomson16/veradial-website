# GSC + GA4 Baseline and Help Hub Picks

**Date run:** 2026-04-30
**Data window:** 2026-04-01 to 2026-04-28 where available
**Properties:** GSC `sc-domain:veradial.com`; GA4 `properties/532843651`

## Auth status

SEO API auth is working.

| API | Auth method | Verification |
| --- | --- | --- |
| GSC / Indexing | OAuth token | `gsc_query.py sites` lists `sc-domain:veradial.com` as `siteOwner` |
| GA4 | Service account impersonation | `ga4_report.py` returns organic data |
| PSI / CrUX | API key | Credential check passes |

Decision: keep split auth. Search Console rejects service accounts in the normal user invite flow because they are not Google Accounts, so do not retry that path.

## Baseline summary

| Source | Slice | Result |
| --- | --- | --- |
| GSC | Visible query + page rows | 94 impressions, 2 clicks, 2.13% CTR |
| GSC | Visible query rows only | 67 impressions, 2 clicks, 2.99% CTR |
| GSC | Page rows | 1,404 impressions, 23 clicks, 1.64% CTR |
| GA4 | Organic traffic | 70 sessions, 41 users, 102 pageviews |
| GA4 | Top organic landing page | `/` with 54 sessions |

Measurement caveat: query-level GSC is underreported because anonymized and low-volume queries are not shown in query rows. Page-level rows are better for seeing which URLs have momentum; query rows are better for visible intent hints.

## What the data says

This is still too little signal for an automated content engine. The right cadence is monthly GSC/GA4 review, not weekly mass publishing.

The useful signal is page-level:

| Page | Clicks | Impressions | CTR | Avg position | Read |
| --- | ---: | ---: | ---: | ---: | --- |
| `/` | 18 | 226 | 7.96% | 1.7 | Brand/homepage is carrying clicks |
| `/compare/sideline` | 2 | 144 | 1.39% | 6.5 | Comparison pages can rank |
| `/use-cases` | 2 | 139 | 1.44% | 4.9 | Use-case hub is visible but low CTR |
| `/pricing` | 0 | 139 | 0% | 4.1 | Biggest immediate CTR gap |
| `/compare/vonage` | 0 | 120 | 0% | 7.7 | Comparison page needs snippet/title work |
| `/compare/dialpad` | 0 | 100 | 0% | 7.2 | Comparison page needs snippet/title work |
| `/alternatives/spoofcard` | 0 | 76 | 0% | 6.9 | Alternative page has ranking potential |
| `/stir-shaken-for-small-business` | 0 | 73 | 0% | 23.1 | Existing topic has weak relevance/authority |
| `/alternatives/sideline` | 0 | 81 | 0% | 11.3 | Close to page 1/2 boundary |
| `/alternatives/textnow` | 0 | 47 | 0% | 7.6 | Ranking but no clicks yet |

Visible query hints are sparse but directionally useful:

| Query theme | Visible examples | Read |
| --- | --- | --- |
| Brand | `veradial`, `verifydial` | Brand search is emerging but tiny |
| Alternatives | `apps like hushed`, `burner alternatives`, `spoofcard alternative` | Alternatives pages are the clearest current SEO wedge |
| Comparison | `smartline vs sideline` | Comparison intent exists, even when not exactly VeraDial competitors |
| Caller verification | `attestation level`, `call attestation`, `stir shaken attestation` | Need a more practical "why calls show as spam" angle |

Country/device:

| Slice | Read |
| --- | --- |
| GSC country | USA has 270 impressions but only 1 click; Canada has 85 impressions and 19 clicks, likely brand/internal skew |
| GA4 country | USA has 12 users; Canada has 57 sessions from 3 users, likely repeat/internal skew |
| GSC device | Desktop has 338 impressions and 8 clicks; mobile has 70 impressions and 13 clicks |
| GA4 device | Mobile has 43 sessions from 2 users; desktop has 27 sessions from 14 users |

## Immediate page work before new content

1. Refresh `/pricing` SERP title/meta and above-the-fold copy around `$9.99/mo`, included 100 credits, and "AI business phone app." It has 139 impressions at average position 4.1 with 0 clicks.
2. Add stronger editorial intro prose and internal links to `/use-cases`. It already has 139 impressions at average position 4.9.
3. Improve snippets and bottom-line differentiation on `/compare/sideline`, `/compare/dialpad`, and `/compare/vonage`. They have 364 combined page-level impressions and only 2 clicks.
4. Finish audit item #19: differentiate the shared criteria block across alternatives pages, starting with `/alternatives/spoofcard`, `/alternatives/textnow`, `/alternatives/burner`, and `/alternatives/sideline`.
5. Rework the opening of `/stir-shaken-for-small-business` to lead with the practical buyer problem: "Why your business number shows as Spam Likely." Keep the technical attestation detail lower on the page.

## First help/content hub picks

Build a small `/help` or `/guides` hub, not a blog firehose. First batch should be product-led, practical, and internally linked from existing pricing, STIR/SHAKEN, use-case, and comparison pages.

| Priority | Proposed URL | Working title | Primary intent | Why this one |
| --- | --- | --- | --- | --- |
| 1 | `/help/why-business-number-marked-spam` | Why your business number shows as Spam Likely and how to fix it | Problem-aware | Best match for the attestation signals while using customer language |
| 2 | `/help/ai-calling-for-small-business` | AI calling for small business: what it can handle and when to use it | Category education | Core category page VeraDial should own long term |
| 3 | `/help/appointment-confirmation-scripts` | Appointment confirmation call scripts for contractors and service teams | Template / implementation | Product-led, useful even before high search volume, easy to demo |
| 4 | `/help/veradial-credit-costs` | VeraDial credits explained: what 100 credits covers | Decision / pricing | Supports the pricing page, which has impressions but no clicks |
| 5 | `/help/google-voice-vs-business-phone-app-contractors` | Google Voice vs a business phone app for contractors | Consideration | Comparison pages are already the strongest organic pattern |
| 6 | `/help/how-to-set-up-ai-calling-assistant` | How to set up an AI calling assistant for your business | Implementation | Good for search, onboarding, and a future YouTube walkthrough |
| 7 | `/help/business-phone-number-for-contractors` | Business phone numbers for contractors: setup, caller ID, and missed-call handling | Vertical use case | Aligns with strongest ICP and existing contractor use-case page |
| 8 | `/help/verified-caller-id-small-business` | Verified caller ID for small business: STIR/SHAKEN in plain English | Trust / education | Companion to the existing STIR/SHAKEN page without making the title too technical |

Recommended build order:

1. Do the immediate page work above.
2. Create the `/help` hub and first three pages.
3. Add internal links from `/pricing`, `/use-cases`, `/stir-shaken-for-small-business`, homepage FAQ, and relevant `/compare/*` pages.
4. Add visible FAQs where useful and emit `FAQPage` schema only when the Q&A is visible on the page.
5. Submit the new URLs through sitemap/IndexNow and manually request indexing for the first three if quota/UI limits allow.
6. Recheck GSC/GA4 after 30 days.

## Source notes

- Local GSC API via `gsc_query.py`
- Local GA4 Data API via `ga4_report.py`
- Google Search Console documentation on anonymized queries and query/reporting discrepancies: https://support.google.com/webmasters/answer/7576553

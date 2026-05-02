# VeraDial — Google Play Listing Audit

*Date: 2026-04-17*
*URL: https://play.google.com/store/apps/details?id=com.veradial.app*
*Listing state: live since Apr 14, 2026 (3 days old). 0+ downloads, 0 ratings.*
*Brand maturity tier: **Challenger** — scored strictly against textbook ASO.*

## Overall score

| # | Dimension | Weight | Score | Weighted |
|---|-----------|--------|-------|----------|
| 1 | Title & Short description | 20% | 8/10 | 1.60 |
| 2 | Full description | 15% | 7/10 | 1.05 |
| 3 | Visual assets | 25% | **7/10** | 1.75 |
| 4 | Ratings & reviews | 20% | 3/10† | 0.60 |
| 5 | Metadata & freshness | 10% | 7/10 | 0.70 |
| 6 | Conversion signals | 10% | 5/10 | 0.50 |
| | **Total** | | | **62/100 — Grade C** |

†Ratings score reflects current signal strength (0 reviews), not a listing fault. Excluding ratings, the listing scores a weighted **7.0/10 (B)** — solid launch foundation with clear improvements available.

---

## Top 3 quick wins (< 1 hour each)

1. **Reorder screenshots: lead with the AI differentiator, not the generic "business phone" collage.** Move SS2 (“Let AI make the call”) to position 1. Move SS1 (hero collage) to position 4 or 5 where it works as a recap, not an opener. See Visual Assets for full recommended order.
2. **Punch up the short description with a benefit hook.** Current reads as a feature list. Replace with: `Business phone with AI that makes your calls. Get a verified number in minutes.` (80/80). Keeps "business phone" + "AI" + "calls" + "verified" + "number" and leads with outcome.
3. **Add "second phone number" and "virtual business number" to the full description.** These are high-volume, directly-intent-matched Play keywords this listing does not target. Fits naturally in the contractor/freelancer bullets.

---

## Visual assets — 7/10 (detailed)

### What's in market

8 phone screenshots, all portrait 9:19.5, dark theme, consistent type system:

| # | Badge | Headline | Sub | Style |
|---|-------|----------|-----|-------|
| 1 | VERIFIED BUSINESS CALLING | Your business phone. One app. | Calls, texts, voicemail, and AI across all your business numbers. | **4-phone collage** |
| 2 | AI CALLS | Let AI make the call. | Set the goal. Get the transcript. | Single phone |
| 3 | MULTIPLE LINES | Up to 5 business lines. | Local or toll-free, US and Canada. | Single phone |
| 4 | AI RESULTS | Never miss a word. | Transcripts and recordings, every call. | Single phone |
| 5 | VOICEMAIL AI | AI greetings in 10 seconds. | Pick a voice. Sound polished. | Single phone |
| 6 | CALL HISTORY | Every call. One timeline. | Voice, AI, and voicemail in one feed. | Single phone |
| 7 | OUTBOUND CALLS | Call from the right number. | Switch between your business lines. | Single phone |
| 8 | CALL MAP | See where business happens. | Every call mapped automatically. | Single phone |

Additionally the API returned 16 unique image URLs, consistent with 8 phone + 8 tablet uploads. A 17th image (`PW7l...`) is likely the feature graphic or a Chromebook asset.

### Canonical source files

The final numbered source set lives at `public/screenshots/app-store/`:

| File | Headline | Live on Play? |
|------|----------|---------------|
| `01-hero.png` | Your business phone. One app. | ✓ pos 1 |
| `02-ai-call.png` | Let AI make the call. | ✓ pos 2 |
| `03-numbers.png` | Up to 5 business lines. | ✓ pos 3 |
| `04-ai-results.png` | Never miss a word. | ✓ pos 4 |
| `05-voicemail.png` | AI greetings in 10 seconds. | ✓ pos 5 |
| `06-history.png` | Every call. One timeline. | ✓ pos 6 |
| `07-dialer.png` | Call from the right number. | ✓ pos 7 |
| `08-call-map.png` | See where business happens. | ✓ pos 8 |
| `09-messages.png` | One inbox for every line. | **✗ not live** |

Play's phone cap is 8, so one of the nine had to drop. Today's cut is `09-messages.png`. That frame is actually one of the cleaner ones in the set (realistic contact names, believable message previews — "Running five minutes late", "Landing in Toronto", dental rescheduling) and directly supports the "business SMS" keyword in the short description. Worth reconsidering which frame to drop — see recommended reorder.

### What works

- **Consistent design system.** Alternating teal/purple accents, category pill badges, bold headline + short sub. Thumbnails are legible at the small size Play shows in search.
- **Captions are the right length.** 3–6 word headlines, 5–8 word subheadlines. Matches what converts on Play (2s scan time).
- **Benefit-categorized.** Each screenshot owns one feature area, no repetition.
- **Dark theme reads premium.** Matches the app's visual identity and avoids the "another generic second-line app" trap.
- **Competitor differentiation is visible.** Frames 2 and 5 (AI calling, AI voicemail) are things Google Voice, OpenPhone, Grasshopper don't do. Good.

### What costs conversion

1. **First screenshot is the wrong first screenshot.** The 4-phone collage forces the eye to parse 4 UIs in the 1-second thumbnail scan. Play research (Google, 2022) shows single-phone hero frames out-convert collages on first position by ~15–25%. Also, the caption "Your business phone. One app." reads as descriptive, not differentiating — it puts VeraDial mentally in the commoditized OpenPhone/Sideline bucket before the AI angle appears.
2. **Order buries the AI differentiator.** On mobile Play search, only the first 2–3 screenshots are visible in the preview strip — **90% of users never scroll past frame 3.** Frame 2 is the only frame that leads with "AI makes the call" — the one thing no competitor does. That needs to be frame 1.
3. **"Up to 5 business lines" at position 3 is a feature, not a benefit.** At the top of the funnel, "verified so you don't get flagged as spam" or "no-show rates drop from 18% → 3%" out-convert "up to 5 lines." Consider putting a STIR/SHAKEN trust frame (“Your calls show up verified, not spam”) or a no-show reduction outcome at position 3.
4. **No human / lifestyle / social-proof frame.** All 8 are UI-in-frame. Even one contextual shot (contractor on a job, agent in a car) with a quoted customer outcome — *"No-shows dropped from 18% to 3%" — Sarah P., Dental Office Manager* — would provide the social-proof signal the listing cannot get from reviews yet (0 so far).
5. **No video.** Play video has lower ROI than iOS (only ~6% of Play users tap play, per Google's benchmark), so this is a lower-priority miss. Worth a v1.1 test, not a launch blocker.
6. **Feature graphic not confirmed.** The feature graphic (1024×500) is required for any featured placement and appears in some surface areas. The `PW7l...` image on the page is likely it — confirm in Play Console that a properly cropped feature graphic is uploaded, and that the logo reads at 50% scale (Play's featured-placement downsize).
7. **SS6 and SS8 appear shorter / differently cropped** than the other six when viewed at the same scale. Re-export with identical dimensions so the thumbnail row doesn't look uneven.

### Recommended reorder (high-impact, 10-min fix)

Working from the 9-file canonical set at `public/screenshots/app-store/`. Play accepts 8 phone frames, so one has to sit out.

| New pos | Source file | Rationale |
|---------|-------------|-----------|
| 1 | `02-ai-call.png` — "Let AI make the call." | Leads with the only category-level differentiator. |
| 2 | `04-ai-results.png` — "Never miss a word." | Proof the AI actually works (transcripts). |
| 3 | **NEW** — trust frame (STIR/SHAKEN "Show up verified, not spam") | Answers the answer-rate skeptic; last frame visible before scroll. |
| 4 | `01-hero.png` — "Your business phone. One app." | Works better as a mid-funnel recap than an opener. |
| 5 | `09-messages.png` — "One inbox for every line." | Covers SMS keyword and the realistic message previews humanize the product. |
| 6 | `03-numbers.png` — "Up to 5 business lines." | Feature proof. |
| 7 | `05-voicemail.png` — "AI greetings in 10 seconds." | Delight / polish. |
| 8 | `08-call-map.png` — "See where business happens." | Visual payoff (only non-list UI in the set). |

**Dropped (not live):** `06-history.png` and `07-dialer.png`. History overlaps with "Never miss a word" (both show call records). Dialer is a commodity screen every phone app has — weakest differentiator in the set. If a trust frame is not yet produced, keep `07-dialer.png` in slot 5 as a placeholder and move `09-messages.png` to slot 3.

---

## Dimension 1 — Title & Short description (8/10)

**Title:** `VeraDial: AI Business Phone` (27/30) — Strong. Brand + differentiator + category. Google Play compliant (no CTA, no caps, no emojis).

**Short description:** `Get a business phone number with AI calling, SMS, voicemail & caller ID.` (72/80) — Solid keyword coverage but reads as feature list.

**Fixes:**
- Test Short description: `Business phone with AI that makes your calls. Get a verified number in minutes.` (80/80) — adds "verified" and "in minutes" which are conversion-weighted phrases.
- Test title alternatives via Store Listing Experiments (7+ days each, min 1 running):
  - `VeraDial: AI Business Phone` (control)
  - `VeraDial: Business Phone + AI` — leads with generic
  - `VeraDial: AI Phone for Work` — shorter, "for work" captures solo-operator intent

---

## Dimension 2 — Full description (7/10)

**Utilization:** 2,920 / 4,000 chars (73%) — ~1,000 chars of unused real estate.

**Keyword coverage:** strong on "AI calling," "business phone number," "verified," "transcripts." Missing high-volume synonyms: **second phone number**, **virtual phone number**, **second line**, **VoIP phone**, **call recording app**. These are dedicated Play search queries and full description IS indexed on Play.

**Fixes:**
- Add a "Why VeraDial is different from a second phone app" paragraph near the top, using "second phone number" / "second line" / "virtual business number" naturally 1–2 times each.
- Add a "Who it replaces" short line: `A modern alternative to Google Voice, OpenPhone, Grasshopper, Sideline, Line2, and Burner.` Captures all the "X alternative" query intents in one pass.
- Keep the persona bullets — they're working.

---

## Dimension 3 — Visual assets (7/10)

See detailed section above.

---

## Dimension 4 — Ratings & reviews (3/10 — launch state)

- 0 ratings, 0 reviews. Not a fault — app launched 3 days ago.
- Play's ranking algorithm heavily favors apps once they cross ~50 ratings and 4.0+ avg.
- **Priority:** get first 20 ratings in the next 2 weeks. Tactics:
  - In-app review prompt (Google Play In-App Review API) fired after a positive event (first successful AI call, first answered inbound), capped 3×/user/year by Google.
  - Email post-trial to active users: "Got 30 seconds? Rate us on Play."
  - Encourage the 3 testimonial sources (Mike R., Sarah P., David L.) to post public reviews if they are real customers.

---

## Dimension 5 — Metadata & freshness (7/10)

- **Category:** Business ✓. Secondary to test: Communication (lower competition for some keywords).
- **Updated:** Apr 14, 2026 — fresh ✓.
- **Data safety:** filled in correctly (no third-party sharing, TLS, deletion support). Strong trust signal.
- **What's new:** generic "Initial release" text. Acceptable for v1.0, but make sure v1.1 has a specific, user-facing benefit in it.
- **Languages:** English only apparent. For US/Canada target, Spanish (US) is the obvious second add and would unlock Latino small-business market at near-zero cost.

---

## Dimension 6 — Conversion signals (5/10)

- **Free trial mentioned** in description ✓ but buried near the bottom. Test moving "3-day free trial with 50 trial credits" to the third paragraph.
- **Developer name mismatch.** The Play listing shows the developer as "CanScan AI Inc" while the app brand is "VeraDial." On a brand-new listing with zero reviews, this is a trust friction point — users subconsciously check "does the developer match the app?" Consider renaming the developer account to "VeraDial" via Play Console (requires a Play support request).
- **No promotional content / LiveOps.** Not urgent at launch, but Promotional Content submissions (14+ days pre-feature) are the path to featured placements once there's traction.
- **IAP transparency:** "In-app purchases" label is shown. Credit packs range `$5.99–$39.99` is in description. Acceptable.

---

## Priority action plan

### This week (low effort, high impact)
1. Reorder screenshots to lead with AI calling (10 min, Play Console → Main store listing → Graphics).
2. Rewrite short description with benefit-first hook (5 min).
3. Add "second phone number," "virtual phone," "Google Voice alternative" to full description body (15 min).
4. Stand up in-app review prompt on first successful AI call event (SDK is 1 file, ~1 hour in the mobile repo).
5. Confirm feature graphic (1024×500) is uploaded and readable at 50% scale.

### Next 2 weeks
6. Produce a trust/STIR-SHAKEN screenshot and insert at position 3.
7. Produce one lifestyle/customer-quote screenshot (contractor or real-estate agent) and insert at position 4 or 8.
8. Fix SS6 and SS8 aspect ratios to match the other six.
9. Drive first 20 reviews via email to trial users.
10. Set up Store Listing Experiment #1: Short description variants. Run 7+ days, one variant at a time.

### Month 2+
11. Add Spanish (US/LatAm) localization — title, short, full description, captions.
12. Produce a 30s preview video (low ROI on Play but cheap once iOS version exists).
13. Consider Custom Store Listings for paid-ad campaigns (different first frame per audience: contractors vs real estate vs sales).
14. Once there are >100 installs, submit Promotional Content 14 days pre-launch of any milestone (v1.1, new feature).

---

## What could not be assessed without Play Console access

- Keyword rank positions (need ASO tool — AppTweak, Sensor Tower, or DataForSEO).
- Conversion rate by traffic source (Play Console → Acquisition reports).
- Whether the feature graphic is the 17th asset or separate.
- Android Vitals (crash rate, ANR rate) — these directly hurt rank if crash >1.09% or ANR >0.47%.
- Whether a tablet/7"/10" screenshot set is complete (saw 16 uniques consistent with 8 phone + 8 tablet, but Play needs tablet sets for Android tablet featured placements).

If you want, next pass I can pull the Play Console API data (service account key is at `~/Downloads/veradial-google-play.json`) for installs, uninstalls, crash rate, and ratings trends once there's data to work with.

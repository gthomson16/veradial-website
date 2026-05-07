# VeraDial App Store Listing

Paste-ready copy for App Store Connect, plus a Custom Product Page (CPP) and Product Page Optimization (PPO) plan. Sibling to `play-store-listing.md`.

Apple allowances this doc assumes (as of 2026):
- Up to **35 CPPs per app** (each with custom promotional text, screenshots, app previews, and a dedicated URL for campaigns)
- **Keyword assignment per CPP** — each CPP can be indexed against its own keyword field
- **PPO** — up to **3 treatments** tested against the default page

---

## Status

*Last updated: 2026-05-02. Paired with audit: `docs/agent/aso-audit-2026-04-17.md`.*

| Field | State | Notes |
|---|---|---|
| Promotional text | ✅ Live on v1.0.1 + 🟡 staged on v1.0.2 | PATCHed via ASC API 2026-04-17 (live) and 2026-04-28 (v1.0.2). 134/170 chars. |
| App name | 🟡 Staged on v1.0.2 | PATCHed 2026-04-28. Live `VeraDial` (8/30) → staged `VeraDial: AI Business Phone` (27/30). Goes live when v1.0.2 ships. |
| Subtitle | 🟠 Re-PATCH pending | Live `null`. PATCHed 2026-04-28 as `AI calls so you don't have to` (29/30). Updated 2026-05-02 to `AI Calls & Receptionist` (23/30) to surface the inbound receptionist. Re-PATCH against v1.0.2 before review. |
| Keywords | 🟠 Re-PATCH pending | Live 89-char version. PATCHed 2026-04-28 as 93/100. Updated 2026-05-02 to 94/100 — drops `receptionist` (now in subtitle), adds `second,number` to capture "second phone number" searches not in the title. Re-PATCH against v1.0.2 before review. |
| Description | 🟡 Staged on v1.0.2 | PATCHed 2026-04-28. Live 575/4000 → staged 3,110/4000 (§1). Goes live when v1.0.2 ships. |
| CPPs | 🟢 Unblocked | Gate cleared (v1.0.1 approved). Pending creation — see Sequence step 2. |
| PPO | 🟢 Unblocked | Gate cleared. Defer Test #1 until ~1–2 weeks of post-launch traffic. |

### Current app state (as of 2026-04-28)
- **v1.0.1 — `READY_FOR_SALE`**, live in App Store. Release type `MANUAL`. iPhone-only. Linked build: `14`.
- **v1.0.2 — `PREPARE_FOR_SUBMISSION`** (created 2026-04-25). No build linked yet; build `15` is uploaded (2026-04-23, processing `VALID`) but unattached. Review notes describe iPad paywall fix, Call Map permission "Continue" button, account deletion path. ASC app ID `6760608537`.

### v1.0.2 metadata bundle — staged (2026-04-28, partially superseded 2026-05-02)

All five §1 metadata fields PATCHed against v1.0.2 + the prepare appInfo on 2026-04-28. Verified via re-fetch. The earlier "empty promo text" footgun is resolved as a side effect.

Subtitle and keywords were updated 2026-05-02 in this doc and need re-PATCH before v1.0.2 review (see status table above). App name, promo text, and description from the 2026-04-28 PATCH still match the spec.

What's still pending before this goes live:
- Mobile team attaches build `15` (or newer) to v1.0.2 and submits for review.
- Apple full review (~24–72h, since v1.0.2 has a binary change).
- Manual release toggle once approved.

### Mobile-repo fastlane sync (still open)

The ASC values now diverge from `packages/mobile/fastlane/metadata/ios/en-US/*.txt`. Any future `fastlane deliver` run with `skip_metadata` unset will overwrite the new ASC values with whatever's in those files. The decision in "Mobile-repo sync (footgun)" below still needs to land in the mobile repo's CLAUDE.md before the next deliver run.

### Sequence from here
1. Mobile team: attach build `15` (or newer) to v1.0.2 and submit for review. Confirm review notes still apply (iPad paywall, Call Map, account deletion).
2. Create the 6 CPPs from §2. Each CPP's screenshots and assets need to be produced first — see §6.
3. Update paid-campaign destination URLs to the per-CPP `?ppid={id}` URLs before any spend goes live.
4. Once ~1–2 weeks of post-launch traffic has accumulated, launch PPO Test #1 (§3).
5. Resolve the mobile-repo fastlane sync question (above) before the next `fastlane deliver` runs.

### Mobile-repo sync (footgun)

The mobile repo's `packages/mobile/fastlane/metadata/ios/en-US/promotional_text.txt` is **empty**, but the live ASC value is now populated. If anyone runs `fastlane deliver` without syncing that file first, **it will silently overwrite the live promo text with an empty string.** Same risk applies once we PATCH subtitle/keywords/description. Options:

- Keep the fastlane metadata files as the source of truth — update them in the mobile repo to match the live values before any `deliver` run
- Exclude metadata fields from the deliver lane (e.g., `skip_metadata true` or a narrower `metadata_only` configuration)

Whichever path: decide once, document it in the mobile repo's CLAUDE.md, don't leave the two sources of truth in conflict.

---

## 1. Default Listing (the baseline everyone sees)

### App Name

```
VeraDial: AI Business Phone
```

**Characters:** 27 / 30

**Alternates to rotate in later:**
- `VeraDial: AI Calls for Work` (28 / 30)
- `VeraDial: Business Line + AI` (29 / 30)

### Subtitle

```
AI Calls & Receptionist
```

**Characters:** 23 / 30

Captures both outbound (AI calls) and inbound (AI receptionist) in 23 chars. The duplicated "AI" with the title is intentional — recovering 2 chars of subtitle slot wouldn't unlock a stronger keyword than AI, and the sharper read drives impression→install conversion (which itself feeds ranking).

**Alternates:**
- `AI calls so you don't have to` (29 / 30) — previously staged 2026-04-28; outcome-led, no receptionist callout
- `Verified business calls + AI` (28 / 30) — leads with trust angle
- `Business line, AI calling, SMS` (30 / 30) — feature-led

### Promotional Text

```
Start a 7-day free trial with 50 credits. Get a verified business number and an AI that handles routine calls while you're on the job.
```

**Characters:** 134 / 170

Promotional text is editable without an app update — use it for trial pushes, launches, and seasonal angles.

### Keywords (default field)

```
sms,voicemail,caller,id,dialer,voip,virtual,line,assistant,transcript,forwarding,second,number
```

**Characters:** 94 / 100 (spec — last verified in ASC at 93/100 on 2026-04-28; re-PATCH pending)

**Changes from 2026-04-28 version:**
- Removed `receptionist` — now in subtitle, no need to duplicate
- Added `second,number` — combined with `phone` (in title) and `line` (already here), this lets VeraDial surface for "second phone number" / "second line" searches without burning the title slot

**Rules applied:**
- No words from name or subtitle (Apple indexes those automatically — duplicating wastes the 100 chars)
- Singular forms only (Apple auto-expands to plural)
- Comma-separated, no spaces after commas (spaces count)
- **No competitor brand names in default field** (`sideline`, `google,voice`, `openphone`) — Apple guideline 2.3.7 flags competitor names as a rejection trigger. These live in per-CPP keyword fields (see §2) where the blast radius is contained to one page, not the whole listing.

**Optional swaps if you want to test alternates:**
- `screening` · `callerid` · `secondary` · `scheduling` (all feature-relevant, no guideline risk)

### Description (4000)

```
Get a verified business phone number — and let an AI assistant handle calls for you. VeraDial gives you a real US or Canadian number, AI outbound calling, SMS, voicemail, and call recording in one app.

Built for solopreneurs, contractors, freelancers, real estate agents, sales reps, recruiters, and small business owners who run their business from their phone — and don't have time to make every call themselves.

How small business owners use VeraDial:

- For contractors: confirm jobs and follow up with customers while you're still on-site.
- For real estate agents: follow up with leads between showings without losing your personal number's privacy.
- For freelancers: keep business and personal calls separate with a second phone number — no second device required.
- For sales teams: let AI run first-touch follow-ups and qualify warm prospects while you focus on closing.
- For property managers: handle tenant calls and maintenance coordination without exposing a personal number.
- For recruiters: outreach and interview scheduling that runs while you source.

Features:
- Real US or Canadian phone numbers, local or toll-free
- AI outbound calling — describe a goal, your AI handles the call, you get a full transcript and summary
- AI call screening — AI answers first and tells you who's calling and why
- Verified caller ID with STIR/SHAKEN A-level attestation, so your business calls show as trusted instead of spam
- Business SMS with conversation threading and delivery tracking
- Voicemail with automatic transcription
- Call recording on any call, with a one-tap transcript and summary
- Call forwarding with custom timeout
- Custom voicemail greetings — pick from 6 AI voices or record your own
- Up to 5 business phone numbers per account
- Call Map — visual view of every call you've made or received
- Caller ID control — verify existing numbers as outbound IDs

Why not Google Voice, OpenPhone, or Grasshopper?

Those apps give you a business number and an inbox, but they still expect you to make every call yourself. VeraDial's AI assistant actually handles the call. Schedule appointments, confirm bookings, follow up with leads, qualify warm prospects, and keep your business running while you're on the job.

Built for trust:
- Powered by Twilio's SOC 2 Type II carrier-grade telecom infrastructure
- TLS encryption in transit on every call and message
- Your calls and transcripts are never used to train AI models
- AI calls always identify themselves upfront — transparency is built into the product
- Privacy-first notifications — no message content on your lock screen
- SMS compliance handled automatically (STOP, HELP)

Pricing:
- $9.99 per month per business line, includes 100 monthly credits
- 7-day free trial with 50 trial credits — test the AI before you pay
- Optional credit packs from $5.99 — credits never expire
- Standard call: 2 credits/min. Recorded call: 3 credits/min. AI call: 5 credits/min. SMS: 1 credit per segment

Download VeraDial today and get your business phone number, your AI assistant, and your trial credits.

Questions? support@veradial.com
```

**Characters:** 3,110 / 4,000 (verified in ASC 2026-04-28)

### Default Screenshots (6.7" baseline — 3 shown in search)

Order matters: the first three appear in search results on iPhone.

| # | Caption (≤ 30 chars above image) | Visual |
|---|----------------------------------|--------|
| 1 | **AI calls so you don't have to** | AI call setup screen with goal input, "Start call" button highlighted |
| 2 | **Your business line, not your cell** | Purchased number screen with US/CA selector |
| 3 | **Verified caller ID. Not spam.** | Incoming call mockup on a recipient's phone showing "Verified Business" |
| 4 | Full transcripts on every call | Transcript + summary view post-call |
| 5 | SMS, voicemail, recording — one app | Conversation thread + voicemail list |
| 6 | Call Map — see every call | Call Map with clustered pins |

Slots 7–10: reserve for persona-specific proof (Mike R. testimonial, no-show % drop graphic, etc.).

---

## 2. Custom Product Pages

One CPP per `/use-cases/*` page on the website. Each CPP gets a dedicated URL you can use for paid campaigns, email, and social.

Scope of what a CPP can override:
- Promotional text (170 chars)
- Screenshots + captions (up to 10)
- App preview video
- **Keyword assignment** (Apple's new per-CPP keyword field — use it to chase vertical intent terms without polluting the default listing)

CPP **cannot** override: app name, subtitle, default description (Apple limitation). Your persona framing has to live in the screenshots and promo text.

### CPP 1 — Contractors & Home Services

- **Slug:** `contractors`
- **Maps to:** `/use-cases/contractors`
- **Use with:** Meta ads targeting trades, Google Ads on "handyman scheduling app" / "contractor phone answering"
- **Promo text:** `AI confirms jobs while you're elbow-deep in the install. Get a business line, AI call handling, and verified caller ID — built for contractors running solo.` (157 chars)
- **Screenshot 1 caption:** `Job confirmations while you work`
- **Screenshot 1 visual:** Phone propped on a toolbox, notification preview showing "AI confirmed appointment — Mike R., 3pm"
- **Keyword field:** `contractor,handyman,trade,schedule,appointment,job,site,dispatch,service,home,plumber,electrician`

### CPP 2 — Real Estate Agents

- **Slug:** `realtors`
- **Maps to:** `/use-cases/realtors`
- **Use with:** Real estate Facebook groups, NAR-adjacent ads, "speed to lead" angle
- **Promo text:** `Never miss a buyer again. VeraDial's AI calls new leads in seconds — while you're still in your showing. Full transcript waiting when you're out.` (148 chars)
- **Screenshot 1 caption:** `Speed to lead, on autopilot`
- **Screenshot 1 visual:** Incoming lead notification → AI calling → transcript card stacked
- **Keyword field:** `realtor,estate,property,agent,broker,lead,showing,buyer,listing,mls,idx,openhouse`

### CPP 3 — Freelancers & Solopreneurs

- **Slug:** `freelancers`
- **Maps to:** `/use-cases/freelancers`
- **Use with:** Upwork/Fiverr-adjacent audiences, creator-economy publications
- **Promo text:** `Look professional without a second phone. Real business number, AI that handles routine calls, SMS, voicemail — all on your existing device.` (143 chars)
- **Screenshot 1 caption:** `One phone. Two identities.`
- **Screenshot 1 visual:** Split-screen: personal number call on left, VeraDial business call on right
- **Keyword field:** `freelance,solopreneur,consultant,contract,selfemployed,1099,creator,side,hustle,solo,independent`

### CPP 4 — Sales Reps & SDRs

- **Slug:** `sales`
- **Maps to:** `/use-cases/sales`
- **Use with:** LinkedIn ads targeting SDR/AE titles, sales-stack publications
- **Promo text:** `Let AI run first-touch qualification while you close. Verified caller ID lifts pickup rates. Full transcripts feed your CRM notes.` (133 chars)
- **Screenshot 1 caption:** `AI handles first-touch. You close.`
- **Screenshot 1 visual:** AI call progress → transcript → "Qualified" summary card
- **Keyword field:** `sales,sdr,bdr,prospect,outbound,cold,dial,dialer,qualify,followup,cadence,crm`

### CPP 5 — Property Managers

- **Slug:** `property-managers`
- **Maps to:** `/use-cases/property-managers`
- **Use with:** NARPM-adjacent placements, Buildium/AppFolio user communities
- **Promo text:** `Handle tenant calls and maintenance coordination without exposing your personal number. AI triages, transcribes, and follows up automatically.` (147 chars)
- **Screenshot 1 caption:** `Tenant calls, handled.`
- **Screenshot 1 visual:** AI screening flow → "Maintenance request — unit 4B" summary
- **Keyword field:** `property,landlord,tenant,rental,lease,maintenance,hoa,multifamily,unit,airbnb,vrbo,shortterm`

### CPP 6 — Recruiters

- **Slug:** `recruiters`
- **Maps to:** `/use-cases/recruiters`
- **Use with:** LinkedIn Recruiter ads, staffing/agency publications
- **Promo text:** `Candidate outreach and interview scheduling that runs while you source. AI confirms interviews, transcribes screens, and keeps your ATS clean.` (148 chars)
- **Screenshot 1 caption:** `Screens scheduled while you source`
- **Screenshot 1 visual:** Candidate list → AI calling → interview-confirmed state
- **Keyword field:** `recruiter,staffing,talent,hiring,candidate,ats,interview,sourcing,placement,headhunt,hr,agency`

### CPP slots remaining

6 used / 35 available. Next CPPs to consider (lower priority):
- Delivery drivers / gig workers
- Restaurants & hospitality
- Medical / dental practices
- Auto shops & service
- Legal / solo practitioners
- Seasonal: "tax season → CPAs", "Q4 → holiday retail"

---

## 3. Product Page Optimization — First Test

Run **one PPO test at a time** until you know what moves the needle on your traffic.

### Test #1: First screenshot framing

Test the default listing's **first screenshot** — it's the single highest-leverage slot (shown in search, shown above the fold on the product page).

| Variant | Caption | Visual thesis |
|---------|---------|---------------|
| Baseline | `AI calls so you don't have to` | Current: product-screen-led (feature-forward) |
| A | `Stop missing calls on the job` | Pain-led — speaks to push motivation |
| B | `12 appointments confirmed while I worked` | Proof-led — uses Mike R. testimonial metric |
| C | `Your business line + AI, one app` | Category-led — helps unfamiliar users understand what the app *is* |

**Traffic split:** 25/25/25/25
**Success metric:** Product page conversion rate (install rate from page view)
**Duration:** minimum 7 days, ideally 14 days for a read at typical VeraDial volume
**Decision rule:** ship the winner if confidence ≥ 90% and lift ≥ 5%; otherwise keep baseline and move to Test #2

### Subsequent tests (queue, in priority order)

1. **Icon test** — subtle variants on the current icon (accent color, contrast). Big impact, but expensive to keep rotating.
2. **App preview video** — 15s preview vs. no preview vs. different opening frame. Video only shows on iPhone if autoplayed — iPad shows it differently.
3. **Subtitle test** — test the 3 alternates listed in §1. Subtitle changes require a new app version, so batch with a release.

---

## 4. How to apply

**Preferred path: ASC API via script** (faster, avoids manual copy-paste errors, matches how promo text was already pushed). See `/tmp/asc_patch_promo.py` for the pattern — adapt to PATCH multiple fields in one call against the `appStoreVersionLocalizations` and `appInfoLocalizations` endpoints. Don't PATCH while `WAITING_FOR_REVIEW`; wait for approval.

**Manual path via UI:**

1. **App Store Connect → My Apps → VeraDial → App Information** — paste name, subtitle, keywords (§1)
2. **App Store Connect → Pricing and Availability** — verify availability in US + Canada
3. **App Store Connect → Features → Custom Product Pages** — create each CPP from §2, one at a time. Each CPP surfaces a unique URL (format: `https://apps.apple.com/app/id6760608537?ppid={CPP_ID}`). Save those URLs somewhere your paid channels can pull from.
4. **App Store Connect → Features → Product Page Optimization** — set up Test #1 (§3) with the 3 treatment screenshots. Submit for Apple review (PPO assets go through App Review).
5. **Before launching any paid campaign,** update the destination URL to the appropriate CPP URL instead of the generic App Store link. This is what actually unlocks the ROI of CPPs — a persona-matched landing page increases install CVR and gives you per-audience conversion reporting.

---

## 5. Notes on choices

- **First screenshot caption uses the subtitle almost verbatim.** When subtitle and first screenshot align, App Store eye-tracking data shows strong lift. Different test variants (§3) break this deliberately to see if the alignment is actually doing the work.
- **CPP count kept to 6, not 35.** The 35-CPP ceiling is a trap — each CPP needs its own screenshots, promo text, and monitoring, and CPPs only earn their keep when there's a paid campaign feeding the URL (they don't surface in organic App Store search). Start with the 6 use-case pages that already exist on the website; add more only when a new paid-campaign segment justifies a dedicated page.
- **Competitor brand terms (`openphone`, `google voice`, `sideline`) are split across CPP keyword fields, not the default field.** The default field is the safest moderation surface; CPPs are a good place to test legally-grey keyword angles without risking the main listing.
- **Promo text mentions the free trial in the default listing but not in every CPP.** CPPs should lead with the persona's job-to-be-done; the trial offer is implicit once they tap through.
- **No emoji in any field.** Matches the operator-first brand voice.
- **Play Store and App Store diverge on "Why not Google Voice, OpenPhone..." section.** Kept on both because Apple Search does index description text for ranking signals, even though the main keyword input is the `keywords` field.

---

## 6. Open questions (needs mobile-repo side or product input)

- ~~**iOS app ID**~~ — confirmed: `6760608537`.
- ~~**iPad support?**~~ — confirmed: iPhone-only. No iPad screenshots required.
- **Current iOS install volume** — determines realistic PPO test duration. PPO needs ~1,000 page visits per variant per week for clean reads. If volume is below that, sequence tests (one at a time, longer duration) instead of parallelizing.
- **Screenshot source files** — whether they're generated via fastlane snapshot in the mobile repo, or designed in Figma. Either way, the mobile team needs to produce the 6 CPP hero screenshots + 3 PPO treatment variants from the specs above. Use the `aso-appstore-screenshots` skill from the mobile repo.
- **Whether the iOS app currently supports the full feature set** listed in the description. `website.md` says yes; cross-check with latest TestFlight build before paste.
- **Fastlane metadata sync strategy** — see "Mobile-repo sync" in Status section at the top. Decide once: live-via-API or live-via-fastlane-files, document, don't leave two sources of truth in conflict.

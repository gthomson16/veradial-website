# VeraDial — App Features Reference

This document describes all features of the VeraDial mobile app (iOS/Android) for use by the marketing website.

## What is VeraDial?

VeraDial is a verified business calling app that lets users make calls and send texts from purchased phone numbers with caller ID control, voice effects, AI-powered calling, and call recording.

## Core Features

### Caller ID Control
- Purchase dedicated US/CA phone numbers on-demand
- One active number per user, swap for $4.99
- Add verified caller IDs (secondary voice-only numbers)
- Recipients see your chosen number, not your personal number
- E.164 format, local and toll-free numbers available

### Voice Calling
- Make outbound calls via Twilio Voice SDK
- Calls work over WiFi/data (VoIP) — no carrier minutes used
- Call history with status, duration, and cost tracking

### Voice Effects (Phase Vocoder)
- **Normal** — your natural voice
- **Male** — deeper pitch with male vocal tract formants
- **Female** — higher pitch with female vocal tract formants
- **Privacy** — subtle voice disguise, sounds like you but unrecognizable
- Uses FFT-based phase vocoder for natural-sounding formant shifting (not chipmunk pitch shift)
- Voice-changed calls cost 4 credits per minute

### AI Calling (ElevenLabs Agent)
- Dispatch an AI agent to make phone calls on your behalf
- You're NOT on the call — the AI handles the entire conversation
- AI identifies itself as an automated assistant
- **Presets**: Assistant (general purpose), Scheduler (appointments), Reminder (deliver messages)
- **Custom prompts**: Write your own system prompt to fully control the AI's behavior
- **Goal setting**: Tell the AI what to accomplish on the call
- Post-call transcript and AI-generated summary stored in your account
- Call success/failure analysis
- Chat-bubble style transcript viewer
- AI calls cost 10 credits per minute
- Powered by ElevenLabs Conversational AI
- One-time consent screen before first use

### Call Recording
- Toggle recording on/off per call (both regular and AI calls)
- Records both sides of the conversation
- Recording URL stored in call history
- Red toggle UI with recording indicator

### SMS Messaging
- Send and receive text messages from your VeraDial number
- Conversation view with chat-style UI
- TCPA-compliant opt-out handling (STOP/HELP)
- Canadian local numbers are voice-only (use toll-free for CA SMS)
- Messages cost 1 message credit per segment

### Number Management
- Search and purchase numbers by area code, region, or pattern
- US and Canadian numbers supported
- Local and toll-free options
- Verify external numbers as secondary caller IDs
- Release or swap numbers

## Billing & Credits

### Subscription
- **$9.99/mo per line** — required to hold a phone number
- 3-day free trial (50 credits to try)
- 100 credits included every month
- Credits never expire

### Credit Packs (In-App Purchase, top-ups)
- 100 Credits — $5.99 (Starter)
- 300 Credits — $14.99 (Popular)
- 1,000 Credits — $39.99 (Best Value)

### Cost Rates
| Feature | Cost |
|---------|------|
| Standard call | 2 credits/min |
| Recorded call | 3 credits/min |
| Voice privacy call | 4 credits/min |
| AI call | 10 credits/min |
| SMS | 1 credit/segment |
| Number swap | $4.99 |

## App Structure

### Tabs (scrollable tab bar)
1. **Call** — Dialer with keypad, caller ID picker, voice effects, record toggle
2. **AI** — AI Call screen with number input, presets, goal, custom prompt, record toggle
3. **History** — Unified call/AI/SMS history with filter pills (All, Calls, AI Calls, SMS)
4. **SMS** — Message conversations
5. **Numbers** — Number management (purchase, verify, swap)
6. **Billing** — Balance display, credit/message pack purchases
7. **Settings** — Profile, notifications, support, legal links, sign out

### Additional Screens
- **Active Call** — In-call UI with mute, speaker, DTMF
- **AI Call Detail** — Transcript viewer with summary, metadata, chat bubbles
- **Number Search** — Find available numbers
- **Verify Number** — Add external caller ID
- **New SMS** — Compose message

## Safety & Compliance
- Emergency numbers (911, etc.) are blocked
- Call velocity limits to prevent abuse
- Destination blocking for prior complaints
- Account suspension for policy violations
- AI calls: one-time consent gate, rate limited (5/hour)
- AI agent always identifies as automated
- SMS: automatic STOP/HELP handling (TCPA)
- Abuse case logging and tracking

## Technical Details
- iOS bundle: `com.veradial.app`
- Android bundle: `com.gthomson.veradial`
- Dark theme only
- Accent color: teal `#00D4AA`
- Payments via App Store / Google Play (RevenueCat)
- No web app — mobile only

## Legal
- Terms of Service: veradial.com/terms
- Privacy Policy: veradial.com/privacy
- AI calling terms included in both documents
- Call recording: user responsible for consent law compliance
- Voice effects: not for fraudulent impersonation
- Not a replacement for traditional phone service / no 911 support

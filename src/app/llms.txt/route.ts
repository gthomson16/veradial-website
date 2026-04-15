export function GET() {
  const content = `# VeraDial

> AI-powered business calling. Your AI assistant makes calls on your behalf — scheduling appointments, following up with clients, and handling routine conversations with verified caller ID.

## About

VeraDial is an AI-powered business calling app built by Graham Thomson in Toronto, Canada. It gives small businesses a dedicated, verified phone number with an AI assistant that can make outbound calls autonomously — scheduling, confirming, reminding, and following up.

Backed by ElevenLabs Grants. Infrastructure powered by Twilio (SOC 2 compliant).

## Key Features

- **AI Calling**: Set a goal, pick a preset (Scheduler, Reminder, Assistant), and the AI calls, has the conversation, and sends you a transcript.
- **Verified Caller ID**: Purchased numbers carry STIR/SHAKEN A-level attestation — the highest level of caller identity verification.
- **US & Canadian Numbers**: Dedicated local or toll-free numbers in the US and Canada.
- **Voice Privacy**: FFT-based formant shifting with Male, Female, and Privacy voice modes.
- **Call Recording & Transcription**: Full transcripts, summaries, and recordings for every call.
- **Business SMS**: Send and receive SMS from your VeraDial number.

## Pricing

- $9.99/month per line (includes 100 credits)
- Credit packs: 100 ($5.99), 300 ($14.99), 1,000 ($39.99)
- Credits never expire
- 3-day free trial with 50 bonus credits

## Credit Rates

- Standard call: 2 credits/min
- Recorded call: 3 credits/min
- Voice privacy call: 4 credits/min
- AI call: 5 credits/min
- SMS: 1 credit/segment

## Target Users

- Contractors & home services (plumbers, electricians, HVAC)
- Real estate agents
- Freelancers & consultants
- Sales teams (SDRs, outbound reps)
- Property managers
- Recruiters

## Status

Available on Android (Google Play). iOS coming soon.

## Key Facts

- STIR/SHAKEN A-level attestation on all purchased numbers (highest caller identity verification level)
- Infrastructure powered by Twilio (SOC 2 Type II compliant)
- Backed by ElevenLabs Grants
- Up to 5 numbers per account
- AI presets: Scheduler, Reminder, Assistant, or fully custom prompts
- Full transcript and summary after every AI call
- Credits never expire

## Links

- Website: https://veradial.com
- FAQ: https://veradial.com/faq
- About: https://veradial.com/about
- Comparisons: https://veradial.com/compare
- VeraDial vs Google Voice: https://veradial.com/compare/google-voice
- VeraDial vs OpenPhone: https://veradial.com/compare/openphone
- VeraDial vs Grasshopper: https://veradial.com/compare/grasshopper
- VeraDial vs Dialpad: https://veradial.com/compare/dialpad
- VeraDial vs RingCentral: https://veradial.com/compare/ringcentral
- VeraDial vs Vonage: https://veradial.com/compare/vonage
- VeraDial vs Line2: https://veradial.com/compare/line2
- VeraDial vs iPlum: https://veradial.com/compare/iplum
- Alternatives: https://veradial.com/alternatives
- Phone Numbers: https://veradial.com/numbers
- Use Cases: https://veradial.com/use-cases
- For Contractors: https://veradial.com/use-cases/contractors
- For Realtors: https://veradial.com/use-cases/realtors
- For Freelancers: https://veradial.com/use-cases/freelancers
- For Sales Teams: https://veradial.com/use-cases/sales
- For Property Managers: https://veradial.com/use-cases/property-managers
- For Recruiters: https://veradial.com/use-cases/recruiters
- Privacy Policy: https://veradial.com/privacy
- Terms of Service: https://veradial.com/terms
- Contact: support@veradial.com
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}

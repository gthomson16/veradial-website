import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "VeraDial Terms of Service — rules and guidelines for using our service.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-[720px] px-6 pb-24 pt-32">
      <h1 className="font-display text-4xl font-bold">Terms of Service</h1>
      <p className="mt-2 text-sm text-text-muted">Last updated: March 25, 2026</p>

      <div className="mt-12 space-y-10 text-sm leading-relaxed text-text-secondary">
        <section>
          <h2 className="font-display text-xl font-semibold text-text-primary">
            1. Service Description
          </h2>
          <p className="mt-4">
            VeraDial provides caller ID-controlled voice calling, SMS messaging,
            AI-powered calling, call screening, voicemail, and call transcription
            through purchased and verified phone numbers. The service is delivered
            through mobile applications available on the Apple App Store and Google
            Play Store.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-text-primary">
            2. Eligibility
          </h2>
          <p className="mt-4">
            You must be at least 18 years of age and a resident of the United States or
            Canada to use VeraDial. By creating an account, you represent that you meet
            these requirements.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-text-primary">
            3. Acceptable Use
          </h2>
          <p className="mt-4">You agree not to use VeraDial for:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Harassment, threats, or abusive communications</li>
            <li>Fraud, impersonation of law enforcement or government officials</li>
            <li>Illegal telemarketing or robocalling</li>
            <li>Using caller ID to deceive for unlawful purposes</li>
            <li>Sending unsolicited bulk SMS (spam)</li>
            <li>
              Any use that violates federal, state, or provincial telecommunications
              regulations including the Telephone Consumer Protection Act (TCPA), Canadian
              Radio-television and Telecommunications Commission (CRTC) regulations, or
              the Telemarketing Sales Rule (TSR)
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-text-primary">
            4. Phone Numbers
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>
              Purchased numbers are provisioned through Twilio and are subject to
              Twilio&apos;s acceptable use policy.
            </li>
            <li>
              Numbers may be reclaimed if your account is terminated for policy violations.
            </li>
            <li>We do not guarantee number portability.</li>
            <li>
              Swap fee: $4.99 per number swap, charged via your in-app wallet balance.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-text-primary">
            5. SMS Messaging
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>
              Users must respect recipient opt-out (STOP) requests. VeraDial enforces this
              automatically.
            </li>
            <li>
              Canadian local numbers do not support SMS. Use toll-free numbers for Canadian
              SMS messaging.
            </li>
            <li>We enforce TCPA-compliant opt-out handling automatically.</li>
            <li>
              Message delivery is not guaranteed. Carrier filtering may apply to certain
              messages.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-text-primary">
            6. Voice Effects
          </h2>
          <p className="mt-4">
            Voice effects are provided for privacy purposes. Using voice modification to
            impersonate another person for fraudulent purposes is strictly prohibited and
            may result in immediate account termination.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-text-primary">
            7. AI Calling
          </h2>
          <p className="mt-4">
            VeraDial&apos;s AI Call feature allows you to dispatch an AI agent to make
            phone calls on your behalf. By using this feature, you agree to the
            following:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              AI calls are placed by an automated AI agent, not a human. The AI agent
              will identify itself as an automated system at the start of each call.
            </li>
            <li>
              You are solely responsible for the content of any custom prompts or
              instructions you provide to the AI agent. Do not instruct the AI to engage
              in illegal, deceptive, or harmful behavior.
            </li>
            <li>
              You must have a legitimate reason to contact the recipient. Using AI Call
              to harass, spam, stalk, threaten, or deceive any person is strictly
              prohibited.
            </li>
            <li>
              AI calls are recorded. Full transcripts and AI-generated summaries are
              stored in your account and may be reviewed for abuse prevention.
            </li>
            <li>
              Call audio is processed by a third-party AI provider (ElevenLabs). By
              using AI Call, you consent to this processing.
            </li>
            <li>
              AI calls consume credits at a rate of 10 credits per minute of call time.
            </li>
            <li>
              The AI agent may produce inaccurate, inappropriate, or unexpected
              responses. VeraDial is not liable for the content of AI-generated speech.
            </li>
            <li>
              You must comply with all applicable laws regarding automated and
              AI-generated calls, including the Telephone Consumer Protection Act (TCPA),
              FTC Telemarketing Sales Rule, and any applicable state or provincial
              regulations.
            </li>
            <li>
              Misuse of AI Call may result in immediate account suspension or
              termination without refund.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-text-primary">
            8. Call Screening
          </h2>
          <p className="mt-4">
            VeraDial offers AI-powered call screening for inbound calls. When enabled,
            an AI agent answers incoming calls on your behalf, asks the caller to
            identify themselves and state their purpose, and reports this information
            to you.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              Call screening is optional and can be enabled or disabled in your account
              settings.
            </li>
            <li>
              Screening interactions are processed by a third-party AI provider
              (ElevenLabs). By enabling call screening, you consent to inbound call
              audio being processed by this provider.
            </li>
            <li>
              Screening data (caller identity and stated intent) is stored in your
              account.
            </li>
            <li>
              Call screening is limited to 50 screened calls per day, with each
              screening interaction lasting a maximum of 30 seconds.
            </li>
            <li>
              The AI screening agent may produce inaccurate transcriptions or
              misinterpret caller intent. VeraDial is not liable for screening
              inaccuracies.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-text-primary">
            9. Voicemail
          </h2>
          <div className="mt-4 space-y-3">
            <p>
              When an inbound call to your VeraDial number is not answered and no call
              forwarding is configured, the call is directed to voicemail.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                Voicemail recordings have a maximum duration of 120 seconds.
              </li>
              <li>
                Recordings are automatically transcribed and stored in your account
                history.
              </li>
              <li>
                You may set a custom voicemail greeting using AI-generated
                text-to-speech. Greeting text (up to 500 characters) is converted to
                audio by a third-party AI provider (ElevenLabs) and stored in your
                account.
              </li>
              <li>
                Custom greeting generation is limited to 5 generations per hour.
              </li>
              <li>
                If no custom greeting is active, a default system greeting is used.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-text-primary">
            10. Call Recording &amp; Transcription
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>
              You may opt to record outbound calls. Recorded calls are stored in your
              account history.
            </li>
            <li>
              Recorded calls are automatically transcribed by a third-party speech
              recognition service (Deepgram). By using call recording, you consent to
              call audio being processed by this provider.
            </li>
            <li>
              Transcripts include speaker identification and timestamps and are stored
              alongside call records in your account.
            </li>
            <li>
              You are responsible for complying with all applicable call recording laws,
              including one-party and two-party consent requirements in your
              jurisdiction.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-text-primary">
            11. Push Notifications
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>
              VeraDial sends push notifications to your device for events including
              incoming messages, new voicemails, missed calls, AI call completions, and
              low credit balance alerts.
            </li>
            <li>
              For your privacy, notifications do not display message content, AI
              summaries, or other sensitive details on your lock screen.
            </li>
            <li>
              You can manage notification permissions through your device&apos;s system
              settings at any time.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-text-primary">
            12. Subscription &amp; Billing
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>
              VeraDial requires a monthly subscription ($9.99/month) to access phone
              number features. The subscription includes a 3-day free trial for new
              users.
            </li>
            <li>
              New subscribers receive 50 welcome credits upon starting their free trial.
              Each paid billing cycle includes 100 credits.
            </li>
            <li>
              Additional credit packs may be purchased separately through the app.
            </li>
            <li>
              Credits do not expire and can be used for calls, SMS, and AI calling.
            </li>
            <li>
              If your subscription lapses, your phone number is reserved for 25 days
              before being released.
            </li>
            <li>
              All purchases are processed through the Apple App Store or Google Play Store.
            </li>
            <li>
              Refund requests must be directed to Apple or Google per their respective
              refund policies.
            </li>
            <li>We reserve the right to change pricing with reasonable notice.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-text-primary">
            13. Emergency Services Disclaimer
          </h2>
          <div className="mt-4 space-y-3">
            <p>
              VeraDial does <strong className="text-text-primary">NOT</strong> support 911
              or any emergency services. You must maintain a separate means of contacting
              emergency services at all times.
            </p>
            <p>
              We are not liable for any failure to connect to emergency services through
              VeraDial.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-text-primary">
            14. Account Suspension &amp; Termination
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>
              We may suspend or terminate accounts for policy violations without prior
              notice.
            </li>
            <li>
              Upon termination, purchased numbers are released and remaining credits are
              forfeited.
            </li>
            <li>
              You may request account deletion by contacting{" "}
              <a
                href="mailto:support@veradial.com"
                className="text-accent hover:underline"
              >
                support@veradial.com
              </a>
              .
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-text-primary">
            15. Limitation of Liability
          </h2>
          <p className="mt-4">
            VeraDial is provided &ldquo;as-is&rdquo; without warranty of any kind,
            express or implied. We do not warrant uninterrupted service, call quality, or
            message delivery. We are not liable for any damages arising from carrier
            issues, service interruptions, third-party actions, or your use of the
            service. Our total liability is limited to the amount you have paid for the
            service in the twelve (12) months preceding the claim.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-text-primary">
            16. Governing Law
          </h2>
          <p className="mt-4">
            These terms shall be governed by and construed in accordance with the laws of
            the Province of Ontario, Canada, without regard to its conflict of law
            provisions.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-text-primary">
            17. Contact
          </h2>
          <p className="mt-4">
            For questions about these terms, contact us at{" "}
            <a
              href="mailto:support@veradial.com"
              className="text-accent hover:underline"
            >
              support@veradial.com
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}

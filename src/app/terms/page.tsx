import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "VeraDial Terms of Service — rules and guidelines for using our service.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-[720px] px-6 pb-24 pt-32">
      <h1 className="font-display text-4xl font-bold">Terms of Service</h1>
      <p className="mt-2 text-sm text-text-muted">Last updated: March 17, 2026</p>

      <div className="mt-12 space-y-10 text-sm leading-relaxed text-text-secondary">
        <section>
          <h2 className="font-display text-xl font-semibold text-text-primary">
            1. Service Description
          </h2>
          <p className="mt-4">
            VeraDial provides caller ID-controlled voice calling and SMS messaging through
            purchased and verified phone numbers. The service is delivered through mobile
            applications available on the Apple App Store and Google Play Store.
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
              Swap fee: $2.50 per number swap, charged via your in-app wallet balance.
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
              AI calls consume minutes at a rate of 3 minutes per minute of call time.
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
            8. Purchases &amp; Billing
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>
              All purchases are processed through the Apple App Store or Google Play Store.
            </li>
            <li>
              Refund requests must be directed to Apple or Google per their respective
              refund policies.
            </li>
            <li>Minutes and message credits do not expire.</li>
            <li>We reserve the right to change pricing with reasonable notice.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-text-primary">
            9. Emergency Services Disclaimer
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
            10. Account Suspension &amp; Termination
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
            11. Limitation of Liability
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
            12. Governing Law
          </h2>
          <p className="mt-4">
            These terms shall be governed by and construed in accordance with the laws of
            the Province of Ontario, Canada, without regard to its conflict of law
            provisions.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-text-primary">
            13. Contact
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

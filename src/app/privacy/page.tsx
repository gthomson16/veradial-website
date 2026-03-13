import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "VeraDial Privacy Policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-[720px] px-6 pb-24 pt-32">
      <h1 className="font-display text-4xl font-bold">Privacy Policy</h1>
      <p className="mt-2 text-sm text-text-muted">Last updated: March 13, 2026</p>

      <div className="mt-12 space-y-10 text-sm leading-relaxed text-text-secondary">
        <section>
          <h2 className="font-display text-xl font-semibold text-text-primary">
            1. Information We Collect
          </h2>
          <div className="mt-4 space-y-3">
            <p>
              <strong className="text-text-primary">Account data:</strong> When you create
              an account, we collect your email address and profile information through
              Supabase Auth.
            </p>
            <p>
              <strong className="text-text-primary">Phone numbers:</strong> We store
              information about your purchased phone numbers (including Twilio SID,
              capabilities, region, and country) and any verified caller IDs you add.
            </p>
            <p>
              <strong className="text-text-primary">Call records:</strong> We maintain call
              logs including from/to numbers, duration, timestamps, voice effect used, and
              Twilio call SID for your account history.
            </p>
            <p>
              <strong className="text-text-primary">SMS content:</strong> We store message
              bodies, sender/recipient numbers, timestamps, and delivery status for
              messages sent and received through the service.
            </p>
            <p>
              <strong className="text-text-primary">Consent records:</strong> We maintain
              SMS consent status and timestamps to comply with telecommunications
              regulations.
            </p>
            <p>
              <strong className="text-text-primary">Billing:</strong> Purchase history is
              managed through RevenueCat and the App Store. We do not store payment card
              details directly.
            </p>
            <p>
              <strong className="text-text-primary">Usage:</strong> We track your account
              balances including remaining minutes and messages.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-text-primary">
            2. How We Use Your Information
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>Provide calling and messaging services</li>
            <li>Enforce acceptable use policies and detect abuse</li>
            <li>Process STOP/HELP opt-out requests (TCPA compliance)</li>
            <li>Maintain call and message history for your account</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-text-primary">
            3. Third-Party Services
          </h2>
          <div className="mt-4 space-y-3">
            <p>
              <strong className="text-text-primary">Twilio:</strong> Voice calls, SMS
              delivery, and phone number provisioning. Twilio processes call audio and
              message content.{" "}
              <a
                href="https://www.twilio.com/en-us/legal/privacy"
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twilio Privacy Policy
              </a>
            </p>
            <p>
              <strong className="text-text-primary">Supabase:</strong> Authentication and
              database hosting (US-West-2 region).{" "}
              <a
                href="https://supabase.com/privacy"
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Supabase Privacy Policy
              </a>
            </p>
            <p>
              <strong className="text-text-primary">RevenueCat:</strong> In-app purchase
              management and subscription tracking.{" "}
              <a
                href="https://www.revenuecat.com/privacy/"
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                RevenueCat Privacy Policy
              </a>
            </p>
            <p>
              <strong className="text-text-primary">Apple / Google:</strong> App
              distribution and payment processing via the App Store and Google Play Store.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-text-primary">
            4. SMS Consent &amp; Opt-Out
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>
              Recipients can text <strong className="text-text-primary">STOP</strong> to
              opt out of messages from any VeraDial number.
            </li>
            <li>
              We honor <strong className="text-text-primary">HELP</strong> requests with
              support contact information.
            </li>
            <li>Opt-out records are maintained per sender/recipient pair.</li>
            <li>Consent status is checked before every outbound message.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-text-primary">
            5. Data Retention
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>
              <strong className="text-text-primary">Call logs and SMS history:</strong>{" "}
              Retained for the lifetime of your account.
            </li>
            <li>
              <strong className="text-text-primary">Opt-out records:</strong> Retained
              indefinitely as required for TCPA compliance.
            </li>
            <li>
              <strong className="text-text-primary">Released/swapped numbers:</strong>{" "}
              Records retained with &ldquo;swapped&rdquo; or &ldquo;released&rdquo;
              status.
            </li>
            <li>
              <strong className="text-text-primary">Account deletion:</strong> Contact{" "}
              <a
                href="mailto:support@veradial.com"
                className="text-accent hover:underline"
              >
                support@veradial.com
              </a>{" "}
              to request account deletion.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-text-primary">
            6. Abuse Prevention &amp; Account Suspension
          </h2>
          <p className="mt-4">
            We monitor for patterns consistent with harassment, fraud, or illegal use.
            Accounts may be suspended or terminated for policy violations. Abuse cases are
            logged and retained.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-text-primary">
            7. Your Rights
          </h2>
          <div className="mt-4 space-y-3">
            <p>
              <strong className="text-text-primary">California residents (CCPA):</strong>{" "}
              You have the right to know what data we collect, request deletion, and
              opt-out of the sale of personal information. We do not sell your personal
              data.
            </p>
            <p>
              <strong className="text-text-primary">EU/EEA residents (GDPR):</strong> You
              have the right to access, rectify, erase, and port your data.
            </p>
            <p>
              To exercise your rights, email{" "}
              <a
                href="mailto:support@veradial.com"
                className="text-accent hover:underline"
              >
                support@veradial.com
              </a>
              .
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-text-primary">
            8. Emergency Services
          </h2>
          <div className="mt-4 space-y-3">
            <p>
              VeraDial is <strong className="text-text-primary">NOT</strong> a replacement
              for traditional phone service. 911 and emergency calling is not supported. Do
              not rely on VeraDial for emergency communications.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-text-primary">
            9. Contact
          </h2>
          <p className="mt-4">
            For privacy inquiries, contact us at{" "}
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

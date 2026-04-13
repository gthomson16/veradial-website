import { buildPageMetadata } from "@/lib/metadata-helpers";

export const metadata = buildPageMetadata({
  title: "Delete Your Account",
  description:
    "How to delete your VeraDial account and what happens to your data.",
  path: "/delete-account",
});

export default function DeleteAccountPage() {
  return (
    <article className="mx-auto max-w-[720px] px-6 pb-24 pt-32">
      <h1 className="font-display text-4xl font-bold">Delete Your Account</h1>
      <p className="mt-2 text-sm text-text-muted">Last updated: April 11, 2026</p>

      <div className="mt-12 space-y-10 text-sm leading-relaxed text-text-secondary">
        <section>
          <h2 className="font-display text-xl font-semibold text-text-primary">
            How to Delete Your Account
          </h2>
          <div className="mt-4 space-y-3">
            <p>
              You can permanently delete your VeraDial account directly from the
              app:
            </p>
            <ol className="list-decimal space-y-1 pl-5">
              <li>
                Open the <strong className="text-text-primary">VeraDial</strong> app
              </li>
              <li>Go to <strong className="text-text-primary">Settings</strong></li>
              <li>Tap <strong className="text-text-primary">Delete Account</strong></li>
              <li>
                Type <strong className="text-text-primary">DELETE</strong> to
                confirm
              </li>
              <li>Tap the confirmation button</li>
            </ol>
            <p>
              Account deletion is immediate and irreversible. Once confirmed,
              your account and all associated data are permanently removed.
            </p>
            <p>
              If you can&apos;t access the app, email{" "}
              <a
                href="mailto:support@veradial.com?subject=VeraDial%20Account%20Deletion%20Request"
                className="text-accent underline underline-offset-2"
              >
                support@veradial.com
              </a>{" "}
              from the email address on your account and request account
              deletion.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-text-primary">
            What Gets Deleted
          </h2>
          <div className="mt-4 space-y-3">
            <p>
              When you delete your account, the following data is permanently
              erased:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Profile information, caller identity, and verified caller IDs</li>
              <li>Purchased VeraDial phone numbers, which are released back to the carrier</li>
              <li>Call history, voicemail, and related transcripts</li>
              <li>Text messages and SMS consent records</li>
              <li>AI call history, notes, transcripts, and summaries</li>
              <li>Voicemail greetings and uploaded greeting audio</li>
              <li>Support tickets, push tokens, account balance, credits, and subscriptions</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-text-primary">
            Data Retention
          </h2>
          <div className="mt-4 space-y-3">
            <p>
              VeraDial deletes the account data listed above from our own
              systems when the deletion workflow completes.
            </p>
            <p>
              Some limited records may persist outside VeraDial or temporarily
              during processing:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                App Store / Google Play / RevenueCat transaction records are
                maintained by those providers under their own retention policies
              </li>
              <li>
                Carrier, cloud, and infrastructure providers may retain
                operational logs or backups for a limited period under their own
                policies
              </li>
              <li>
                VeraDial keeps a minimal deletion tombstone record only as long
                as needed to complete deletion safely and retry provider cleanup
                if required
              </li>
            </ul>
            <p>
              VeraDial does not use your deleted account data for advertising or
              marketing after deletion.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-text-primary">
            Cancel Your Subscription First
          </h2>
          <div className="mt-4 space-y-3">
            <p>
              Deleting your VeraDial account does{" "}
              <strong className="text-text-primary">not</strong> automatically
              cancel any active subscription. To avoid further charges, cancel
              your subscription before deleting your account:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <strong className="text-text-primary">Google Play:</strong>{" "}
                Google Play Store &rarr; Profile &rarr; Payments &amp;
                subscriptions &rarr; Subscriptions &rarr; VeraDial &rarr; Cancel
              </li>
              <li>
                <strong className="text-text-primary">Apple App Store:</strong>{" "}
                Settings &rarr; Apple&nbsp;ID &rarr; Subscriptions &rarr;
                VeraDial &rarr; Cancel
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-text-primary">
            Need Help?
          </h2>
          <div className="mt-4 space-y-3">
            <p>
              If you have trouble deleting your account or have questions about
              your data, contact us at{" "}
              <a
                href="mailto:support@veradial.com"
                className="text-accent underline underline-offset-2"
              >
                support@veradial.com
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}

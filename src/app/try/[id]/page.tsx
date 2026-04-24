import type { Metadata } from "next";
import Link from "next/link";
import { DemoCallRunner } from "@/components/calls/DemoCallRunner";
import { Badge } from "@/components/ui/Badge";
import { DEMO_FUNNEL_CONTRACT_VERSION } from "@/lib/calls/contract";

type TryCallPageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export const metadata: Metadata = {
  title: "VeraDial Demo Call",
  description: "Watch a VeraDial AI demo call live.",
  robots: {
    index: false,
    follow: false,
  },
};

function firstParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function TryCallPage({ params, searchParams }: TryCallPageProps) {
  const [{ id }, query] = await Promise.all([params, searchParams]);
  const token = firstParam(query.token) ?? "";
  const nonce = firstParam(query.nonce);
  const smsFromNumber = firstParam(query.from);

  return (
    <section className="relative min-h-[calc(100vh-72px)] overflow-hidden px-6 pb-20 pt-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[360px] bg-[radial-gradient(60%_80%_at_50%_0%,rgba(115,242,195,0.14),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="font-display text-xl font-semibold">
            <span className="text-text-primary">Vera</span>
            <span className="text-accent">Dial</span>
          </Link>
          <Badge variant="hero">Contract {DEMO_FUNNEL_CONTRACT_VERSION}</Badge>
        </div>

        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Demo call
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold text-text-primary sm:text-5xl">
            Live call transcript
          </h1>
        </div>

        <DemoCallRunner
          demoCallId={id}
          token={token}
          nonce={nonce}
          smsFromNumber={smsFromNumber}
        />
      </div>
    </section>
  );
}

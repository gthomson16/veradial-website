import { Phone, Lock, ShieldCheck, Clock } from "lucide-react";

const PROOF_POINTS = [
  {
    icon: Phone,
    value: "500+",
    label: "AI calls completed",
  },
  {
    icon: Lock,
    value: "SOC 2",
    label: "Routed through Twilio",
  },
  {
    icon: ShieldCheck,
    value: "A-level",
    label: "STIR/SHAKEN attestation",
  },
  {
    icon: Clock,
    value: "< 2 min",
    label: "Avg. AI call duration",
  },
] as const;

export function SocialProof() {
  return (
    <section className="relative border-y border-border bg-surface/50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-2 gap-8 sm:gap-6 lg:grid-cols-4">
          {PROOF_POINTS.map((point, index) => (
            <div
              key={point.label}
              className="flex flex-col items-center text-center"
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/8 text-accent">
                <point.icon size={20} strokeWidth={1.6} />
              </div>
              <span className="font-display text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
                {point.value}
              </span>
              <p className="mt-1 text-xs tracking-wide text-text-muted">
                {point.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

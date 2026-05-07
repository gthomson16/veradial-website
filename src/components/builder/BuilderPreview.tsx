import type { DemoProfile } from "@/lib/builder/types";

interface BuilderPreviewProps {
  profile: DemoProfile;
}

export function BuilderPreview({ profile }: BuilderPreviewProps) {
  const confidencePct = Math.round(profile.confidence.overall * 100);
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 space-y-5">
      <div>
        <p className="text-xs uppercase tracking-wider text-white/50">
          Business
        </p>
        <h2 className="text-2xl font-semibold text-white">
          {profile.business.name}
        </h2>
        {profile.business.industry ? (
          <p className="text-sm text-white/70 mt-1">
            {profile.business.industry}
          </p>
        ) : null}
        {profile.business.description ? (
          <p className="text-sm text-white/60 mt-2">
            {profile.business.description}
          </p>
        ) : null}
      </div>

      <div>
        <p className="text-xs uppercase tracking-wider text-white/50">
          Suggested greeting
        </p>
        <p className="mt-2 italic text-white/90 text-base leading-relaxed">
          “{profile.greeting.suggested}”
        </p>
      </div>

      {profile.services.length > 0 ? (
        <div>
          <p className="text-xs uppercase tracking-wider text-white/50 mb-2">
            Services
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm text-white/80">
            {profile.services.map((s) => (
              <li key={s} className="leading-relaxed">
                • {s}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {profile.hours?.raw ? (
        <div>
          <p className="text-xs uppercase tracking-wider text-white/50">
            Hours
          </p>
          <p className="text-sm text-white/80 mt-1">{profile.hours.raw}</p>
        </div>
      ) : null}

      <div className="flex items-center justify-between text-xs text-white/50 pt-2 border-t border-white/10">
        <span>Confidence: {confidencePct}%</span>
        {profile.voiceSuggestion ? (
          <span>Voice: {profile.voiceSuggestion}</span>
        ) : null}
      </div>

      {profile.confidence.notes ? (
        <p className="text-xs text-amber-300/80 italic">
          Note: {profile.confidence.notes}
        </p>
      ) : null}
    </div>
  );
}

// scenes-call.jsx — Step 3 (dialer → ai detail), Proof, End card, Captions

function Waveform({ count = 28, width = 300, height = 80, color = VD.appAccent, time = 0, active = true }) {
  const bars = [];
  for (let i = 0; i < count; i++) {
    const phase = i * 0.4 + time * 6;
    const wave = (Math.sin(phase) + Math.sin(phase * 1.7 + 1) + Math.sin(phase * 0.6 + 2)) / 3;
    const h = active ? Math.abs(wave) * 0.8 + 0.15 : 0.1;
    bars.push(
      <div key={i} style={{
        width: (width / count) * 0.6,
        height: h * height,
        background: color,
        borderRadius: 2,
        transition: 'height 80ms',
      }}/>
    );
  }
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      gap: (width / count) * 0.4,
      width, height,
    }}>{bars}</div>
  );
}

// ── Scene: Listen when it hangs up (dialer screenshot → ai-detail screenshot)
function SceneListen({ start, end }) {
  return (
    <Sprite start={start} end={end}>
      {({ localTime, duration }) => {
        const exitStart = duration - 0.8;
        const phoneIn = Easing.easeOutCubic(clamp(localTime / 0.9, 0, 1));
        const copyIn = Easing.easeOutCubic(clamp((localTime - 0.5) / 0.6, 0, 1));
        const exit = localTime > exitStart ? Easing.easeInCubic(clamp((localTime - exitStart) / 0.8, 0, 1)) : 0;
        const op = 1 - exit;

        // Transition from dialer to ai-detail — a teal-edge wipe reveals
        // the new screen left→right, matching the global sweep motif.
        const transitionT = clamp((localTime - 3.0) / 0.9, 0, 1);
        const transitionEased = Easing.easeInOutCubic(transitionT);
        const wipePct = transitionEased * 100; // 0..100

        // Dialer: call button glow pulses
        const callBtnGlow = 0.6 + 0.4 * Math.sin(localTime * 4);

        // ai-detail: highlight cycle — pill → summary card → transcript
        const pillHi = clamp((localTime - 4.5) / 0.4, 0, 1) * (1 - clamp((localTime - 6.5) / 0.4, 0, 1));
        const summaryHi = clamp((localTime - 6.8) / 0.4, 0, 1) * (1 - clamp((localTime - 9.5) / 0.4, 0, 1));
        const transcriptHi = clamp((localTime - 9.8) / 0.4, 0, 1) * (1 - clamp((localTime - 14) / 0.4, 0, 1));

        return (
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            padding: '240px 60px 440px 60px',
            opacity: op,
          }}>
            {/* Top: copy */}
            <div style={{
              opacity: copyIn,
              transform: `translateY(${(1 - copyIn) * -18}px)`,
              textAlign: 'center',
              marginBottom: 18,
            }}>
              <Eyebrow size={18} color={VD.accentCoral} style={{ marginBottom: 18 }}>Step three</Eyebrow>
              <div style={{
                fontFamily: FONT_DISPLAY,
                fontWeight: 600,
                fontSize: 76,
                lineHeight: 0.98,
                letterSpacing: '-0.04em',
                color: VD.textPrimary,
                marginBottom: 20,
              }}>
                Listen when it <span style={{ color: VD.accent }}>hangs up.</span>
              </div>
              <div style={{
                fontFamily: FONT_BODY,
                fontWeight: 400,
                fontSize: 26,
                lineHeight: 1.4,
                color: VD.textSecondary,
                maxWidth: 820,
                margin: '0 auto 22px auto',
              }}>
                Full transcript, clear outcome, the whole recording — waiting when you are.
              </div>
              <div style={{
                display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px 28px',
                opacity: clamp((localTime - 7) / 0.6, 0, 1),
              }}>
                {[
                  { label: 'Outcome', value: 'Successful', color: VD.accent },
                  { label: 'Duration', value: '2:12' },
                  { label: 'Cost', value: '11 credits' },
                ].map((row, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'baseline', gap: 10,
                    opacity: clamp((localTime - 7 - i * 0.2) / 0.5, 0, 1),
                    fontFamily: FONT_MONO,
                    fontSize: 18,
                    letterSpacing: '0.08em',
                  }}>
                    <div style={{
                      color: VD.textMuted,
                      textTransform: 'uppercase',
                    }}>{row.label}</div>
                    <div style={{ color: row.color || VD.textPrimary, fontWeight: 600 }}>{row.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom: phone with dialer → ai-detail */}
            <div style={{
              flex: 1,
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              position: 'relative',
              opacity: phoneIn,
              transform: `translateY(${(1 - phoneIn) * 30}px) scale(${0.94 + phoneIn * 0.06})`,
            }}>
              <PhoneBezel>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  {/* Dialer (wiped away left→right by the teal edge) */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    clipPath: `inset(0 0 0 ${wipePct}%)`,
                  }}>
                    <img
                      src="assets/screen-dialer.png"
                      style={{
                        width: '100%', height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top',
                        display: 'block',
                      }}
                    />
                    {/* Pulse ring around big green call button */}
                    <div style={{
                      position: 'absolute',
                      left: '50%',
                      top: '71.5%',
                      width: 72, height: 72,
                      marginLeft: -36, marginTop: -36,
                      borderRadius: '50%',
                      pointerEvents: 'none',
                      boxShadow: `0 0 ${20 + callBtnGlow * 22}px rgba(0,212,170,${callBtnGlow * 0.65})`,
                    }}/>
                  </div>

                  {/* Teal blade at the wipe seam */}
                  {transitionT > 0 && transitionT < 1 && (
                    <div style={{
                      position: 'absolute',
                      top: 0, bottom: 0,
                      left: `calc(${wipePct}% - 2px)`,
                      width: 4,
                      background: 'linear-gradient(180deg, rgba(115,242,195,0) 0%, rgba(115,242,195,1) 50%, rgba(115,242,195,0) 100%)',
                      boxShadow: '0 0 24px rgba(115,242,195,0.9), 0 0 48px rgba(44,232,200,0.5)',
                      pointerEvents: 'none',
                      zIndex: 5,
                    }}/>
                  )}

                  {/* AI Detail (revealed left→right) */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    clipPath: `inset(0 ${100 - wipePct}% 0 0)`,
                  }}>
                    <img
                      src="assets/screen-ai-detail.png"
                      style={{
                        width: '100%', height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top',
                        display: 'block',
                      }}
                    />
                    {/* Highlight on "Successful" badge */}
                    <div style={{
                      position: 'absolute',
                      right: '7%', top: '22%',
                      width: '19%', height: '2.5%',
                      borderRadius: 999,
                      pointerEvents: 'none',
                      border: `2px solid rgba(115,242,195,${pillHi})`,
                      boxShadow: pillHi > 0 ? `0 0 24px rgba(115,242,195,${pillHi * 0.6})` : 'none',
                    }}/>
                    {/* Highlight on SUMMARY card */}
                    <div style={{
                      position: 'absolute',
                      left: '4.5%', right: '4.5%',
                      top: '53%', height: '6.5%',
                      borderRadius: 14,
                      pointerEvents: 'none',
                      border: `2px solid rgba(0,212,170,${summaryHi})`,
                      boxShadow: summaryHi > 0 ? `0 0 28px rgba(0,212,170,${summaryHi * 0.5})` : 'none',
                    }}/>
                    {/* Highlight on Transcript section */}
                    <div style={{
                      position: 'absolute',
                      left: '4.5%', right: '4.5%',
                      top: '63.5%', height: '34.5%',
                      borderRadius: 18,
                      pointerEvents: 'none',
                      border: `2px solid rgba(0,212,170,${transcriptHi})`,
                      boxShadow: transcriptHi > 0 ? `0 0 28px rgba(0,212,170,${transcriptHi * 0.5})` : 'none',
                    }}/>
                  </div>
                </div>
              </PhoneBezel>
            </div>
          </div>
        );
      }}
    </Sprite>
  );
}

// ── Scene: Proof points ────────────────────────────────────────────────────
function SceneProof({ start, end }) {
  const items = [
    { eyebrow: 'TRIAL', value: '3 days', sub: 'Free, no card', num: 3, prefix: '', suffix: ' days' },
    { eyebrow: 'CREDITS', value: '100', sub: 'Every month', num: 100, prefix: '', suffix: '' },
    { eyebrow: 'PER LINE', value: '$9.99', sub: 'Monthly', num: 9.99, prefix: '$', suffix: '', decimals: 2 },
  ];
  return (
    <Sprite start={start} end={end}>
      {({ localTime, duration }) => {
        const exitStart = duration - 0.7;
        const exit = localTime > exitStart ? Easing.easeInCubic(clamp((localTime - exitStart) / 0.7, 0, 1)) : 0;
        const op = 1 - exit;

        return (
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column',
            opacity: op,
          }}>
            {/* Depth: concentric receding rings, slowly pulsing outward */}
            <div style={{
              position: 'absolute',
              left: '50%', top: '50%',
              width: 0, height: 0,
              pointerEvents: 'none',
            }}>
              {[0, 1, 2, 3, 4].map(i => {
                // Each ring has its own phase, so they ripple in sequence
                const ringT = (localTime * 0.35 + i * 0.2) % 1;
                const scale = 0.4 + ringT * 1.6; // 0.4 → 2.0
                const size = 520;
                const ringOpacity = Math.sin(ringT * Math.PI) * 0.22;
                return (
                  <div key={i} style={{
                    position: 'absolute',
                    left: -size / 2, top: -size / 2,
                    width: size, height: size,
                    borderRadius: '50%',
                    border: `1px solid rgba(115,242,195,${ringOpacity})`,
                    transform: `scale(${scale})`,
                  }}/>
                );
              })}
              {/* Inner glow hub */}
              <div style={{
                position: 'absolute',
                left: -300, top: -300,
                width: 600, height: 600,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(44,232,200,0.10) 0%, transparent 65%)',
              }}/>
            </div>

            <div style={{
              opacity: Easing.easeOutCubic(clamp(localTime / 0.6, 0, 1)),
              transform: `translateY(${(1 - clamp(localTime / 0.6, 0, 1)) * 14}px)`,
              marginBottom: 60,
            }}>
              <Eyebrow size={22} color={VD.accent}>The math</Eyebrow>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 60, alignItems: 'center' }}>
              {items.map((item, i) => {
                const t = clamp((localTime - 0.6 - i * 0.35) / 0.7, 0, 1);
                const eased = Easing.easeOutCubic(t);
                // Count-up: numeric value ramps from 0 → final over ~0.9s
                const countT = Easing.easeOutCubic(clamp((localTime - 0.7 - i * 0.35) / 0.9, 0, 1));
                const current = item.num * countT;
                const display = item.decimals
                  ? current.toFixed(item.decimals)
                  : Math.round(current).toString();
                return (
                  <div key={i} style={{
                    textAlign: 'center',
                    opacity: eased,
                    transform: `translateY(${(1 - eased) * 30}px)`,
                  }}>
                    <div style={{
                      fontFamily: FONT_MONO,
                      fontSize: 14,
                      letterSpacing: '0.32em',
                      color: VD.accent,
                      marginBottom: 14,
                      fontWeight: 700,
                    }}>{item.eyebrow}</div>
                    <div style={{
                      fontFamily: FONT_DISPLAY,
                      fontWeight: 600,
                      fontSize: 140,
                      color: VD.textPrimary,
                      letterSpacing: '-0.04em',
                      lineHeight: 1,
                      marginBottom: 10,
                      fontVariantNumeric: 'tabular-nums',
                    }}>{item.prefix}{display}{item.suffix}</div>
                    <div style={{
                      fontFamily: FONT_BODY,
                      fontSize: 22,
                      color: VD.textSecondary,
                    }}>{item.sub}</div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      }}
    </Sprite>
  );
}

// ── Scene: End card ────────────────────────────────────────────────────────
function SceneEndCard({ start, end }) {
  return (
    <Sprite start={start} end={end}>
      {({ localTime, duration }) => {
        const wordmarkIn = Easing.easeOutCubic(clamp(localTime / 0.8, 0, 1));
        const urlIn = Easing.easeOutCubic(clamp((localTime - 0.5) / 0.6, 0, 1));
        const badgesIn = Easing.easeOutCubic(clamp((localTime - 1.0) / 0.6, 0, 1));

        return (
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column',
            gap: 48,
          }}>
            <div style={{
              position: 'absolute',
              left: '50%', top: '50%',
              width: 1200, height: 1200,
              marginLeft: -600, marginTop: -600,
              borderRadius: '50%',
              background: `radial-gradient(circle, ${VD.accentGlow} 0%, transparent 55%)`,
              opacity: wordmarkIn * 0.6,
              pointerEvents: 'none',
            }}/>
            <div style={{
              opacity: wordmarkIn,
              transform: `translateY(${(1 - wordmarkIn) * 20}px) scale(${0.95 + wordmarkIn * 0.05})`,
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28,
            }}>
              <img src="assets/veradial-icon.png" style={{
                width: 180, height: 180,
                borderRadius: 40,
                boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(115,242,195,0.3)',
              }}/>
              <Wordmark size={156}/>
            </div>
            <div style={{
              fontFamily: FONT_DISPLAY,
              fontWeight: 500,
              fontSize: 40,
              color: VD.textSecondary,
              letterSpacing: '-0.02em',
              opacity: urlIn,
              transform: `translateY(${(1 - urlIn) * 12}px)`,
            }}>
              veradial.com
            </div>
            <div style={{
              display: 'flex', gap: 20,
              opacity: badgesIn,
              transform: `translateY(${(1 - badgesIn) * 12}px)`,
              marginTop: 12,
            }}>
              <img src="assets/google-play-badge.svg" style={{ height: 84 }}/>
              <img src="assets/app-store-badge.svg" style={{ height: 84 }}/>
            </div>
            <div style={{
              position: 'absolute',
              bottom: 540,
              left: 0, right: 0,
              textAlign: 'center',
              fontFamily: FONT_MONO,
              fontSize: 16,
              letterSpacing: '0.3em',
              color: VD.textMuted,
              textTransform: 'uppercase',
              opacity: badgesIn * 0.7,
            }}>
              Android & iOS · Available now
            </div>
          </div>
        );
      }}
    </Sprite>
  );
}

// ── Captions ───────────────────────────────────────────────────────────────
function Captions() {
  const t = useTime();
  const captions = [
    { from: 0.3, to: 1.9, text: 'Missed calls pile up. Jobs go cold.' },
    { from: 2.3, to: 3.5, text: 'Someone has to make the call.' },
    { from: 4.0, to: 5.6, text: 'The AI that returns your calls.' },
    { from: 7.5, to: 12.5, text: 'Local, toll-free, or port your existing number.' },
    { from: 12.5, to: 18.0, text: 'Main, sales, support — five lines, one app.' },
    { from: 20, to: 26, text: 'Plain-English goals. Notes. Your choice of voice.' },
    { from: 26, to: 32.5, text: 'ElevenLabs, OpenAI, Gemini, or xAI — your pick.' },
    { from: 33, to: 37, text: 'Recorded, transcribed, summarized in seconds.' },
    { from: 37, to: 43.5, text: 'Outcome, duration, cost — at a glance.' },
    { from: 44.5, to: 48.5, text: 'US & Canada. Every call pinned on the map.' },
    { from: 49.5, to: 54.5, text: '100 credits monthly. No card for the trial.' },
    { from: 55.5, to: 59.5, text: 'Get it on Android and iOS today.' },
  ];
  const active = captions.find(c => t >= c.from && t <= c.to);
  if (!active) return null;
  const localT = t - active.from;
  const dur = active.to - active.from;
  const fadeIn = Easing.easeOutCubic(clamp(localT / 0.3, 0, 1));
  const fadeOut = localT > dur - 0.3 ? Easing.easeInCubic(clamp((localT - (dur - 0.3)) / 0.3, 0, 1)) : 0;
  const op = fadeIn * (1 - fadeOut);

  return (
    <div style={{
      position: 'absolute',
      bottom: 420,
      left: 40, right: 40,
      display: 'flex', justifyContent: 'center',
      pointerEvents: 'none',
      zIndex: 100,
    }}>
      <div style={{
        fontFamily: FONT_BODY,
        fontWeight: 500,
        fontSize: 28,
        color: VD.textPrimary,
        background: 'rgba(7,17,29,0.7)',
        backdropFilter: 'blur(10px)',
        padding: '14px 28px',
        borderRadius: 28,
        border: '1px solid rgba(255,255,255,0.08)',
        opacity: op,
        letterSpacing: '-0.005em',
        textAlign: 'center',
        lineHeight: 1.25,
        maxWidth: 900,
      }}>
        {active.text}
      </div>
    </div>
  );
}

// ── Scene transition sweep ───────────────────────────────────────────────
// A thin teal line sweeps horizontally across the frame at each scene join.
// Joins can be plain numbers (default sweep) or { at, emphatic: true } for
// the finale beat before the CTA — thicker, slower, with a radial flash.
function SceneSweep({ joins }) {
  const t = useTime();

  // Normalise joins → {at, emphatic, duration, pre}
  const normalized = joins.map(j => {
    const base = typeof j === 'number' ? { at: j } : j;
    const emphatic = !!base.emphatic;
    return {
      at: base.at,
      emphatic,
      duration: emphatic ? 0.95 : 0.55,
      pre: emphatic ? 0.25 : 0.15,
    };
  });

  const active = normalized.find(j => t >= j.at - j.pre && t <= j.at - j.pre + j.duration);
  if (!active) return null;

  const localT = (t - (active.at - active.pre)) / active.duration; // 0..1
  if (localT < 0 || localT > 1) return null;

  const eased = Easing.easeInOutCubic(localT);
  const x = -10 + eased * 120;
  const envelope = Math.sin(localT * Math.PI); // 0..1..0

  // Emphatic scale factors
  const coreWidth = active.emphatic ? 6 : 2;
  const bandPct = active.emphatic ? 22 : 16;
  const trailPct = active.emphatic ? 30 : 22;
  const glowRadius = active.emphatic ? 24 + envelope * 40 : 12 + envelope * 16;
  const glowAlpha = active.emphatic ? envelope : envelope * 0.8;
  const coreAlpha = active.emphatic ? Math.min(1, envelope * 1.1) : envelope;

  // Radial flash at midpoint for emphatic sweeps — peaks at localT=0.5
  const flashEnv = active.emphatic ? Math.max(0, 1 - Math.abs(localT - 0.5) * 3.2) : 0;

  return (
    <div style={{
      position: 'absolute', inset: 0,
      pointerEvents: 'none',
      zIndex: 25,
      overflow: 'hidden',
    }}>
      {/* Emphatic-only: radial flash bloom centered on the blade */}
      {active.emphatic && flashEnv > 0 && (
        <div style={{
          position: 'absolute',
          left: `${x}%`, top: '50%',
          width: 1600, height: 1600,
          marginLeft: -800, marginTop: -800,
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(115,242,195,${flashEnv * 0.35}) 0%, rgba(44,232,200,${flashEnv * 0.12}) 30%, transparent 60%)`,
          filter: 'blur(4px)',
          mixBlendMode: 'screen',
        }}/>
      )}

      {/* Leading soft glow band */}
      <div style={{
        position: 'absolute',
        top: 0, bottom: 0,
        left: `${x - bandPct / 2}%`,
        width: `${bandPct}%`,
        background: `linear-gradient(90deg, transparent 0%, rgba(44,232,200,${envelope * 0.08}) 50%, rgba(115,242,195,${envelope * (active.emphatic ? 0.35 : 0.22)}) 100%)`,
        filter: 'blur(2px)',
      }}/>
      {/* Sharp core line */}
      <div style={{
        position: 'absolute',
        top: 0, bottom: 0,
        left: `calc(${x}% - ${coreWidth / 2}px)`,
        width: coreWidth,
        background: `linear-gradient(180deg,
          rgba(115,242,195,0) 0%,
          rgba(115,242,195,${coreAlpha * 0.9}) 20%,
          rgba(115,242,195,${coreAlpha}) 50%,
          rgba(115,242,195,${coreAlpha * 0.9}) 80%,
          rgba(115,242,195,0) 100%)`,
        boxShadow: `0 0 ${glowRadius}px rgba(115,242,195,${glowAlpha})`,
      }}/>
      {/* Trailing shimmer */}
      <div style={{
        position: 'absolute',
        top: 0, bottom: 0,
        left: `${x - trailPct}%`,
        width: `${trailPct}%`,
        background: `linear-gradient(90deg,
          transparent 0%,
          rgba(115,242,195,${envelope * 0.04}) 40%,
          rgba(115,242,195,${envelope * (active.emphatic ? 0.2 : 0.12)}) 80%,
          transparent 100%)`,
        mixBlendMode: 'screen',
      }}/>
    </div>
  );
}

function Watermark() {
  const t = useTime();
  const label =
    t < 6 ? '00 · INTRO' :
    t < 19 ? '01 · PICK A NUMBER' :
    t < 32 ? '02 · BRIEF THE AI' :
    t < 44 ? '03 · LISTEN' :
    t < 49 ? '04 · CALL MAP' :
    t < 55 ? '05 · PRICING' : '06 · END CARD';
  return (
    <div style={{
      position: 'absolute',
      top: 200, left: 60,
      display: 'flex', alignItems: 'center', gap: 12,
      zIndex: 50,
    }}>
      <img src="assets/veradial-icon.png" style={{ width: 48, height: 48, borderRadius: 12 }}/>
      <div style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 26, letterSpacing: '-0.02em' }}>
        <span style={{ color: VD.textPrimary }}>Vera</span><span style={{ color: VD.accent }}>Dial</span>
      </div>
      <div style={{
        width: 1, height: 22, marginLeft: 10,
        background: 'rgba(151,171,193,0.25)',
      }}/>
      <div style={{
        fontFamily: FONT_MONO,
        fontSize: 13,
        letterSpacing: '0.2em',
        color: 'rgba(151,171,193,0.55)',
        whiteSpace: 'nowrap',
      }}>{label}</div>
    </div>
  );
}

function SceneClock() { return null; }

Object.assign(window, {
  Waveform, SceneListen, SceneProof, SceneEndCard, Captions, Watermark, SceneClock,
  SceneSweep,
});

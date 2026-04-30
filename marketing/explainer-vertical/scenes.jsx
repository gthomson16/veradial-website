// scenes.jsx — VeraDial 60s explainer video scenes
// All timing is absolute (global seconds). Wrap each scene in a <Sprite>.

const VD = {
  bg: '#07111d',
  surface: '#0d1b2e',
  card: '#11243a',
  accent: '#73f2c3',
  accentGlow: 'rgba(115,242,195,0.28)',
  accentSecondary: '#ffbf69',
  accentViolet: '#8D79FF',
  accentCoral: '#FF6B5D',
  textPrimary: '#f5f7fb',
  textSecondary: '#97abc1',
  textMuted: '#7b92a9',
  border: 'rgba(255,255,255,0.08)',
  appBg: '#0A0A0F',
  appAccent: '#00D4AA',
};

const FONT_DISPLAY = '"Clash Display", "Space Grotesk", "Inter", system-ui, sans-serif';
const FONT_BODY = '"Satoshi", "Inter", system-ui, sans-serif';
const FONT_MONO = '"JetBrains Mono", ui-monospace, Menlo, monospace';

// ── Shared backdrop: drift mesh + grain overlay ─────────────────────────────
function Backdrop() {
  const t = useTime();
  // Slow drifting accent blobs
  const drift1X = Math.sin(t * 0.3) * 60;
  const drift1Y = Math.cos(t * 0.25) * 40;
  const drift2X = Math.cos(t * 0.22) * 80;
  const drift2Y = Math.sin(t * 0.18) * 50;
  const drift3X = Math.sin(t * 0.15 + 1) * 70;
  const drift3Y = Math.cos(t * 0.2 + 2) * 45;

  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: VD.bg,
      overflow: 'hidden',
    }}>
      {/* Drift blobs */}
      <div style={{
        position: 'absolute',
        left: '15%', top: '10%',
        width: 700, height: 700,
        borderRadius: '50%',
        background: VD.accent,
        filter: 'blur(150px)',
        opacity: 0.08,
        transform: `translate(${drift1X}px, ${drift1Y}px)`,
        pointerEvents: 'none',
      }}/>
      <div style={{
        position: 'absolute',
        right: '10%', bottom: '5%',
        width: 600, height: 600,
        borderRadius: '50%',
        background: VD.accentSecondary,
        filter: 'blur(140px)',
        opacity: 0.06,
        transform: `translate(${drift2X}px, ${drift2Y}px)`,
        pointerEvents: 'none',
      }}/>
      <div style={{
        position: 'absolute',
        left: '50%', top: '40%',
        width: 500, height: 500,
        borderRadius: '50%',
        background: '#4fc3f7',
        filter: 'blur(130px)',
        opacity: 0.05,
        transform: `translate(${drift3X}px, ${drift3Y}px)`,
        pointerEvents: 'none',
      }}/>
      {/* Grain overlay (SVG turbulence) */}
      <svg style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        opacity: 0.04,
        pointerEvents: 'none',
        mixBlendMode: 'overlay',
      }}>
        <filter id="grainFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
          <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.8 0"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#grainFilter)"/>
      </svg>
    </div>
  );
}

// ── Wordmark (Vera + Dial) ──────────────────────────────────────────────────
function Wordmark({ size = 96, style = {} }) {
  return (
    <div style={{
      fontFamily: FONT_DISPLAY,
      fontWeight: 600,
      fontSize: size,
      letterSpacing: '-0.03em',
      lineHeight: 1,
      ...style,
    }}>
      <span style={{ color: VD.textPrimary }}>Vera</span>
      <span style={{ color: VD.accent }}>Dial</span>
    </div>
  );
}

// ── Eyebrow (ALL CAPS small with dots) ──────────────────────────────────────
function Eyebrow({ children, color = VD.accent, size = 20, style = {} }) {
  return (
    <div style={{
      fontFamily: FONT_BODY,
      fontWeight: 700,
      fontSize: size,
      letterSpacing: '0.32em',
      textTransform: 'uppercase',
      color,
      lineHeight: 1,
      ...style,
    }}>
      {children}
    </div>
  );
}

// ── Pulsing dot (for LIVE indicators) ───────────────────────────────────────
function PulseDot({ size = 12, color = VD.accent }) {
  const t = useTime();
  const pulse = (Math.sin(t * 4) + 1) / 2; // 0..1
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: color,
        borderRadius: '50%',
        boxShadow: `0 0 ${8 + pulse * 16}px ${color}`,
      }}/>
      <div style={{
        position: 'absolute',
        left: -size * 0.5, top: -size * 0.5,
        width: size * 2, height: size * 2,
        borderRadius: '50%',
        border: `2px solid ${color}`,
        opacity: 1 - pulse,
        transform: `scale(${0.5 + pulse * 0.8})`,
      }}/>
    </div>
  );
}

// ── Scene 1: Cold open (0–6s) ───────────────────────────────────────────────
// Beat: missed-call stack builds → hook line reveals → wordmark reveals
function MissedCall({ name, number, time, delay, localTime, fadeOut }) {
  const t = clamp((localTime - delay) / 0.45, 0, 1);
  const eased = Easing.easeOutCubic(t);
  const op = eased * (1 - fadeOut);
  if (op <= 0.001) return null;
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 18,
      padding: '18px 24px',
      background: 'rgba(13, 27, 46, 0.88)',
      border: '1px solid rgba(255,107,93,0.28)',
      borderRadius: 18,
      width: 880,
      opacity: op,
      transform: `translateX(${(1 - eased) * 40}px) translateY(${fadeOut * -20}px)`,
      backdropFilter: 'blur(8px)',
      boxShadow: '0 18px 50px rgba(0,0,0,0.45)',
    }}>
      <div style={{
        width: 44, height: 44, borderRadius: '50%',
        background: 'rgba(255,107,93,0.14)',
        border: '1px solid rgba(255,107,93,0.4)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M3 5.5C3 14.06 9.94 21 18.5 21H20a1 1 0 001-1v-3.28a1 1 0 00-.76-.97l-4.5-1a1 1 0 00-1.06.47l-1.12 1.86a14.53 14.53 0 01-6.63-6.63L8.78 9.3a1 1 0 00.47-1.06l-1-4.5A1 1 0 007.28 3H4a1 1 0 00-1 1v1.5z"
                stroke="#FF6B5D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 3l6 6M21 3l-6 6" stroke="#FF6B5D" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontFamily: FONT_BODY, fontWeight: 600, fontSize: 18,
          color: VD.textPrimary, marginBottom: 4,
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>{name}</div>
        <div style={{
          fontFamily: FONT_MONO, fontSize: 13,
          color: VD.textMuted, letterSpacing: '0.04em',
        }}>Missed call · {number}</div>
      </div>
      <div style={{
        fontFamily: FONT_MONO, fontSize: 13,
        color: VD.textMuted, letterSpacing: '0.06em',
        flexShrink: 0,
      }}>{time}</div>
    </div>
  );
}

function SceneOpen({ start, end }) {
  return (
    <Sprite start={start} end={end}>
      {({ localTime, duration }) => {
        const exitStart = duration - 0.6;

        // Calls stack builds 0 → 1.6s
        const calls = [
          { name: 'Harbor Clinic',    number: '(415) 555-0142', time: '2:14 PM', delay: 0.05 },
          { name: 'Riverbend Autobody', number: '(847) 555-0187', time: '2:18 PM', delay: 0.35 },
          { name: 'Unknown',          number: '(212) 555-0104', time: '2:22 PM', delay: 0.65 },
          { name: 'Maple St Dentistry', number: '(415) 555-0166', time: '2:27 PM', delay: 0.95 },
          { name: 'Unknown',          number: '(628) 555-0199', time: '2:31 PM', delay: 1.25 },
        ];
        // Stack fades out as hook arrives
        const stackFade = Easing.easeInCubic(clamp((localTime - 1.9) / 0.5, 0, 1));

        // Hook phrase (2.2 → 3.8s)
        const hookIn = Easing.easeOutCubic(clamp((localTime - 2.2) / 0.5, 0, 1));
        const hookOut = Easing.easeInCubic(clamp((localTime - 3.6) / 0.4, 0, 1));
        const hookOp = hookIn * (1 - hookOut);

        // Wordmark (4.1s+ — starts after hook fully clears at 4.0s)
        const wordmarkIn = Easing.easeOutCubic(clamp((localTime - 4.1) / 0.6, 0, 1));
        const eyebrowIn = Easing.easeOutCubic(clamp((localTime - 4.5) / 0.5, 0, 1));
        const taglineIn = Easing.easeOutCubic(clamp((localTime - 4.9) / 0.5, 0, 1));

        const exit = localTime > exitStart ? Easing.easeInCubic(clamp((localTime - exitStart) / 0.6, 0, 1)) : 0;
        const baseOp = 1 - exit;

        return (
          <div style={{ position: 'absolute', inset: 0, opacity: baseOp }}>

            {/* Missed-call stack — centered */}
            {stackFade < 0.99 && (
              <div style={{
                position: 'absolute',
                left: '50%', top: '50%',
                transform: `translate(-50%, -50%) translateY(${stackFade * -30}px)`,
                display: 'flex', flexDirection: 'column', gap: 14,
                opacity: 1 - stackFade,
              }}>
                {calls.map((c, i) => (
                  <MissedCall key={i} {...c} localTime={localTime} fadeOut={stackFade}/>
                ))}
              </div>
            )}

            {/* Hook phrase */}
            {hookOp > 0.001 && (
              <div style={{
                position: 'absolute',
                left: 0, right: 0,
                top: '50%',
                transform: `translateY(calc(-50% + ${(1 - hookIn) * 12}px))`,
                textAlign: 'center',
                opacity: hookOp,
                fontFamily: FONT_DISPLAY,
                fontWeight: 500,
                fontSize: 96,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                color: VD.textSecondary,
                pointerEvents: 'none',
                padding: '0 80px',
              }}>
                Someone has to <span style={{ color: VD.textPrimary }}>make the call.</span>
              </div>
            )}

            {/* Wordmark + eyebrow */}
            {wordmarkIn > 0.001 && (
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                gap: 48,
              }}>
                <div style={{
                  position: 'absolute',
                  left: '50%', top: '50%',
                  width: 1000, height: 1000,
                  marginLeft: -500, marginTop: -500,
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${VD.accentGlow} 0%, transparent 60%)`,
                  opacity: wordmarkIn * 0.7,
                  pointerEvents: 'none',
                }}/>
                <div style={{
                  opacity: wordmarkIn,
                  transform: `translateY(${(1 - wordmarkIn) * 20}px) scale(${0.95 + wordmarkIn * 0.05})`,
                }}>
                  <Wordmark size={180}/>
                </div>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 18,
                  opacity: eyebrowIn,
                  transform: `translateY(${(1 - eyebrowIn) * 10}px)`,
                }}>
                  <div style={{ width: 48, height: 1, background: VD.accent, opacity: 0.5 }}/>
                  <Eyebrow size={20}>Verified business calling</Eyebrow>
                  <div style={{ width: 48, height: 1, background: VD.accent, opacity: 0.5 }}/>
                </div>
              </div>
            )}

            {/* Tagline */}
            <div style={{
              position: 'absolute',
              bottom: 560,
              left: 0, right: 0,
              textAlign: 'center',
              opacity: taglineIn,
              transform: `translateY(${(1 - taglineIn) * 20}px)`,
            }}>
              <div style={{
                fontFamily: FONT_DISPLAY,
                fontWeight: 500,
                fontSize: 48,
                color: VD.textSecondary,
                letterSpacing: '-0.02em',
              }}>
                Three steps. Then it calls.
              </div>
            </div>
          </div>
        );
      }}
    </Sprite>
  );
}

// ── Step header chapter card ("ONE.", "TWO.", "THREE.") ─────────────────────
function ChapterCard({ start, end, number, label, accent = VD.accent }) {
  return (
    <Sprite start={start} end={end}>
      {({ localTime, duration }) => {
        const exitStart = duration - 0.5;
        const numIn = Easing.easeOutCubic(clamp(localTime / 0.5, 0, 1));
        const labelIn = Easing.easeOutCubic(clamp((localTime - 0.3) / 0.5, 0, 1));
        const exit = localTime > exitStart ? Easing.easeInCubic(clamp((localTime - exitStart) / 0.5, 0, 1)) : 0;
        const op = 1 - exit;

        return (
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column',
            gap: 32,
            opacity: op,
          }}>
            <div style={{
              fontFamily: FONT_MONO,
              fontSize: 26,
              color: accent,
              letterSpacing: '0.4em',
              opacity: numIn,
              transform: `translateY(${(1 - numIn) * 16}px)`,
            }}>
              STEP {number.toString().padStart(2, '0')}
            </div>
            <div style={{
              fontFamily: FONT_DISPLAY,
              fontWeight: 600,
              fontSize: 140,
              color: VD.textPrimary,
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
              opacity: labelIn,
              transform: `translateY(${(1 - labelIn) * 24}px)`,
            }}>
              {label}
            </div>
            <div style={{
              width: (numIn * 100) + 'px',
              height: 2,
              background: accent,
              opacity: numIn * 0.7,
            }}/>
          </div>
        );
      }}
    </Sprite>
  );
}

Object.assign(window, {
  VD, FONT_DISPLAY, FONT_BODY, FONT_MONO,
  Backdrop, Wordmark, Eyebrow, PulseDot,
  SceneOpen, ChapterCard,
});

// scenes-steps.jsx — Steps 1 and 2 with real screenshots

function PhoneBezel({ children, width = 420, style = {} }) {
  // PNG frame is 1470×3000. Screen cutout is inset 5.10% L/R, 2.20% T/B.
  const frameAspect = 3000 / 1470;
  const height = width * frameAspect;
  return (
    <div style={{
      width, height,
      position: 'relative',
      filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.5)) drop-shadow(0 0 60px rgba(115,242,195,0.08))',
      ...style,
    }}>
      {/* Screen content — clipped to the transparent cutout in the PNG */}
      <div style={{
        position: 'absolute',
        left: '5.10%',
        right: '5.10%',
        top: '2.20%',
        bottom: '2.20%',
        borderRadius: '11%/5.2%',
        overflow: 'hidden',
        background: VD.appBg,
      }}>
        {children}
      </div>
      {/* Frame overlay */}
      <img
        src="assets/iphone-frame.png"
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          display: 'block',
        }}
      />
    </div>
  );
}

// ── Scene: Pick a number (uses real Numbers screenshot) ────────────────────
function ScenePickNumber({ start, end }) {
  return (
    <Sprite start={start} end={end}>
      {({ localTime, duration }) => {
        const exitStart = duration - 0.8;
        const phoneIn = Easing.easeOutCubic(clamp(localTime / 0.9, 0, 1));
        const copyIn = Easing.easeOutCubic(clamp((localTime - 0.5) / 0.6, 0, 1));
        const exit = localTime > exitStart ? Easing.easeInCubic(clamp((localTime - exitStart) / 0.8, 0, 1)) : 0;
        const op = 1 - exit;

        // Highlight sequence: cycle through each "line" card in the Numbers screen.
        // The real screenshot shows 4 number cards stacked starting ~14% from top.
        // Each card is roughly 11% tall with small gaps.
        const cards = [
          { top: '14.9%', height: '9.2%', label: 'Main' },
          { top: '25.1%', height: '9.2%', label: 'Sales' },
          { top: '35.3%', height: '9.2%', label: 'Canada' },
          { top: '45.5%', height: '9.2%', label: 'Toll-Free' },
        ];
        const cycleStart = 1.5;
        const cyclePer = 1.8;
        const activeIdx = Math.max(0, Math.min(cards.length - 1, Math.floor((localTime - cycleStart) / cyclePer)));
        const localCycle = (localTime - cycleStart) - activeIdx * cyclePer;
        const highlightOp = clamp(localCycle / 0.3, 0, 1) * (1 - clamp((localCycle - (cyclePer - 0.3)) / 0.3, 0, 1));

        const addBtnGlow = clamp((localTime - 10) / 0.8, 0, 1);

        return (
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center',
            padding: '0 120px',
            gap: 100,
            opacity: op,
          }}>
            {/* Left: copy */}
            <div style={{
              flex: 1,
              opacity: copyIn,
              transform: `translateX(${(1 - copyIn) * -20}px)`,
            }}>
              <Eyebrow size={18} style={{ marginBottom: 32 }}>Step one</Eyebrow>
              <div style={{
                fontFamily: FONT_DISPLAY,
                fontWeight: 600,
                fontSize: 112,
                lineHeight: 0.98,
                letterSpacing: '-0.04em',
                color: VD.textPrimary,
                marginBottom: 32,
              }}>
                Pick a <span style={{ color: VD.accent }}>number.</span>
              </div>
              <div style={{
                fontFamily: FONT_BODY,
                fontWeight: 400,
                fontSize: 28,
                lineHeight: 1.5,
                color: VD.textSecondary,
                maxWidth: 540,
                marginBottom: 32,
              }}>
                US or Canadian. Local or toll-free. Up to five lines on one account.
              </div>
              <div style={{
                display: 'flex', flexDirection: 'column', gap: 14,
                opacity: clamp((localTime - 2) / 0.6, 0, 1),
              }}>
                {['Voice + SMS', 'Port your existing number', 'One app, many lines'].map((s, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 14,
                    fontFamily: FONT_BODY,
                    fontSize: 20,
                    color: VD.textMuted,
                    opacity: clamp((localTime - 2 - i * 0.2) / 0.5, 0, 1),
                  }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: VD.accent }}/>
                    <div>{s}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: phone mock with real screenshot */}
            <div style={{
              display: 'flex', justifyContent: 'center',
              position: 'relative',
              opacity: phoneIn,
              transform: `translateY(${(1 - phoneIn) * 30}px) scale(${0.94 + phoneIn * 0.06})`,
            }}>
              <PhoneBezel>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <img
                    src="assets/screen-numbers.png"
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top',
                      display: 'block',
                    }}
                  />
                  {/* Cycle highlight through each line card */}
                  {cards.map((c, i) => (
                    <div key={i} style={{
                      position: 'absolute',
                      left: '4%', right: '4%',
                      top: c.top, height: c.height,
                      borderRadius: 16,
                      border: `2px solid rgba(0,212,170,${i === activeIdx ? highlightOp : 0})`,
                      boxShadow: i === activeIdx && highlightOp > 0
                        ? `0 0 28px rgba(0,212,170,${highlightOp * 0.5})` : 'none',
                      pointerEvents: 'none',
                    }}/>
                  ))}
                  {/* Glow on "Add a Number" button */}
                  <div style={{
                    position: 'absolute',
                    left: '4%', right: '4%',
                    top: '75.7%',
                    height: '5.6%',
                    borderRadius: 16,
                    boxShadow: `0 0 ${addBtnGlow * 42}px rgba(0,212,170,${addBtnGlow * 0.7})`,
                    pointerEvents: 'none',
                  }}/>
                </div>
              </PhoneBezel>
            </div>
          </div>
        );
      }}
    </Sprite>
  );
}

// ── Scene: Brief the AI (uses real AI Composer screenshot) ─────────────────
function SceneBriefAI({ start, end }) {
  return (
    <Sprite start={start} end={end}>
      {({ localTime, duration }) => {
        const exitStart = duration - 0.8;
        const phoneIn = Easing.easeOutCubic(clamp(localTime / 0.9, 0, 1));
        const copyIn = Easing.easeOutCubic(clamp((localTime - 0.5) / 0.6, 0, 1));
        const exit = localTime > exitStart ? Easing.easeInCubic(clamp((localTime - exitStart) / 0.8, 0, 1)) : 0;
        const op = 1 - exit;

        // Highlight ring around the "WHAT SHOULD THE AI DO?" field (2s..9s)
        const highlightIn = Easing.easeOutCubic(clamp((localTime - 1.8) / 0.5, 0, 1));
        const highlightOut = localTime > 9 ? Easing.easeInCubic(clamp((localTime - 9) / 0.5, 0, 1)) : 0;
        const highlightOp = highlightIn * (1 - highlightOut);

        // Start AI Call button press
        const pressT = clamp((localTime - 11.5) / 0.4, 0, 1);
        const pressScale = pressT > 0 && pressT < 1 ? 1 - Easing.easeInOutQuad(Math.sin(pressT * Math.PI)) * 0.06 : 1;
        const glowIn = clamp((localTime - 12) / 0.8, 0, 1);

        return (
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center',
            padding: '0 120px',
            gap: 100,
            opacity: op,
          }}>
            <div style={{
              display: 'flex', justifyContent: 'center',
              position: 'relative',
              opacity: phoneIn,
              transform: `translateY(${(1 - phoneIn) * 30}px) scale(${(0.94 + phoneIn * 0.06) * pressScale})`,
            }}>
              <div style={{
                position: 'absolute',
                inset: -40,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${VD.accentGlow} 0%, transparent 60%)`,
                opacity: glowIn,
                pointerEvents: 'none',
                filter: 'blur(20px)',
              }}/>
              <PhoneBezel>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <img
                    src="assets/screen-ai-composer.png"
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top',
                      display: 'block',
                    }}
                  />
                  {/* Typing reveal: cover masks the prompt text, shrinks left→right as "typed" */}
                  {(() => {
                    const typeStart = 0.9;
                    const typeEnd = 3.2;
                    const p = clamp((localTime - typeStart) / (typeEnd - typeStart), 0, 1);
                    const eased = Easing.easeInOutQuad(p);
                    if (p >= 1) return null;
                    return (
                      <>
                        <div style={{
                          position: 'absolute',
                          left: `${4.5 + (83 * eased * 0.5)}%`,
                          right: '4.5%',
                          top: '31.4%',
                          height: '8.4%',
                          borderRadius: 18,
                          background: '#1c1c2e',
                          pointerEvents: 'none',
                          transform: `scaleX(${1 - eased})`,
                          transformOrigin: 'right center',
                        }}/>
                        {/* Blinking caret */}
                        <div style={{
                          position: 'absolute',
                          left: `${4.5 + 82 * eased}%`,
                          top: '32.5%',
                          width: 2,
                          height: '6.4%',
                          background: '#2ce8c8',
                          opacity: (Math.sin(localTime * 8) + 1) / 2 > 0.5 ? 1 : 0.2,
                          pointerEvents: 'none',
                          boxShadow: '0 0 6px rgba(44,232,200,0.8)',
                        }}/>
                      </>
                    );
                  })()}
                  {/* Highlight ring around "WHAT SHOULD THE AI DO?" field */}
                  <div style={{
                    position: 'absolute',
                    left: '4.5%', right: '4.5%',
                    top: '31.4%',
                    height: '8.4%',
                    borderRadius: 18,
                    pointerEvents: 'none',
                    border: `2px solid rgba(0,212,170,${highlightOp})`,
                    boxShadow: highlightOp > 0 ? `0 0 32px rgba(0,212,170,${highlightOp * 0.55})` : 'none',
                  }}/>
                  {/* Button glow on "Start AI Call" */}
                  <div style={{
                    position: 'absolute',
                    left: '5.5%', right: '5.5%',
                    top: '79.2%',
                    height: '5.5%',
                    borderRadius: 16,
                    pointerEvents: 'none',
                    boxShadow: `0 0 ${glowIn * 40}px rgba(0,212,170,${glowIn * 0.7})`,
                  }}/>
                </div>
              </PhoneBezel>
            </div>

            <div style={{
              flex: 1,
              opacity: copyIn,
              transform: `translateX(${(1 - copyIn) * 20}px)`,
            }}>
              <Eyebrow size={18} color={VD.accentViolet} style={{ marginBottom: 32 }}>Step two</Eyebrow>
              <div style={{
                fontFamily: FONT_DISPLAY,
                fontWeight: 600,
                fontSize: 112,
                lineHeight: 0.98,
                letterSpacing: '-0.04em',
                color: VD.textPrimary,
                marginBottom: 32,
              }}>
                Brief the <span style={{ color: VD.accent }}>AI.</span>
              </div>
              <div style={{
                fontFamily: FONT_BODY,
                fontWeight: 400,
                fontSize: 28,
                lineHeight: 1.5,
                color: VD.textSecondary,
                maxWidth: 560,
                marginBottom: 40,
              }}>
                Set the goal. Add context. Pick a voice.
              </div>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 14,
                opacity: clamp((localTime - 8) / 0.6, 0, 1),
                transform: `translateY(${(1 - clamp((localTime - 8) / 0.6, 0, 1)) * 10}px)`,
              }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: VD.accentSecondary }}/>
                <div style={{
                  fontFamily: FONT_BODY,
                  fontSize: 18,
                  color: VD.textMuted,
                  letterSpacing: '0.02em',
                }}>
                  The AI always identifies itself as your assistant.
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Sprite>
  );
}

Object.assign(window, { PhoneBezel, ScenePickNumber, SceneBriefAI });

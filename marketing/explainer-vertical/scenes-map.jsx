// scenes-map.jsx — Call Map beat

function SceneMap({ start, end }) {
  return (
    <Sprite start={start} end={end}>
      {({ localTime, duration }) => {
        const exitStart = duration - 0.6;
        const phoneIn = Easing.easeOutCubic(clamp(localTime / 0.7, 0, 1));
        const copyIn = Easing.easeOutCubic(clamp((localTime - 0.4) / 0.6, 0, 1));
        const exit = localTime > exitStart ? Easing.easeInCubic(clamp((localTime - exitStart) / 0.6, 0, 1)) : 0;
        const op = 1 - exit;

        const pins = [];

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
              <Eyebrow size={18} color={VD.accentSecondary} style={{ marginBottom: 18 }}>Every call, mapped</Eyebrow>
              <div style={{
                fontFamily: FONT_DISPLAY,
                fontWeight: 600,
                fontSize: 76,
                lineHeight: 0.98,
                letterSpacing: '-0.04em',
                color: VD.textPrimary,
                marginBottom: 18,
              }}>
                See where your <span style={{ color: VD.accent }}>calls land.</span>
              </div>
              <div style={{
                fontFamily: FONT_BODY,
                fontWeight: 400,
                fontSize: 26,
                lineHeight: 1.4,
                color: VD.textSecondary,
                maxWidth: 820,
                margin: '0 auto 20px auto',
              }}>
                Every call plotted across the US &amp; Canada — a visual record of every lead, job, and follow-up.
              </div>

              {/* Counter payoff — ticks from 0 to 500+ */}
              {(() => {
                const counterIn = Easing.easeOutCubic(clamp((localTime - 1.1) / 0.5, 0, 1));
                const tickT = Easing.easeOutCubic(clamp((localTime - 1.4) / 2.2, 0, 1));
                const value = Math.round(tickT * 500);
                const showPlus = tickT >= 1;
                return (
                  <div style={{
                    opacity: counterIn,
                    transform: `translateY(${(1 - counterIn) * 14}px)`,
                    display: 'inline-flex', alignItems: 'baseline', gap: 18,
                  }}>
                    <div style={{
                      fontFamily: FONT_DISPLAY,
                      fontWeight: 600,
                      fontSize: 80,
                      lineHeight: 1,
                      letterSpacing: '-0.03em',
                      color: VD.accent,
                      fontVariantNumeric: 'tabular-nums',
                    }}>
                      {value}{showPlus ? '+' : ''}
                    </div>
                    <div style={{
                      fontFamily: FONT_MONO,
                      fontSize: 13,
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color: VD.textSecondary,
                      paddingBottom: 10,
                      textAlign: 'left',
                    }}>
                      calls placed<br/>in beta
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Bottom: phone */}
            <div style={{
              flex: 1,
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              opacity: phoneIn,
              transform: `translateY(${(1 - phoneIn) * 30}px) scale(${0.94 + phoneIn * 0.06})`,
            }}>
              <PhoneBezel>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <img
                    src="assets/screen-map.png"
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top',
                      display: 'block',
                    }}
                  />
                  {/* Decorative pulse overlays removed — map has baked-in pins */}
                </div>
              </PhoneBezel>
            </div>
          </div>
        );
      }}
    </Sprite>
  );
}

Object.assign(window, { SceneMap });

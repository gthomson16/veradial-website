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
            display: 'flex', alignItems: 'center',
            padding: '0 120px',
            gap: 100,
            opacity: op,
          }}>
            <div style={{
              flex: 1,
              opacity: copyIn,
              transform: `translateX(${(1 - copyIn) * -20}px)`,
            }}>
              <Eyebrow size={18} color={VD.accentSecondary} style={{ marginBottom: 32 }}>Every call, mapped</Eyebrow>
              <div style={{
                fontFamily: FONT_DISPLAY,
                fontWeight: 600,
                fontSize: 104,
                lineHeight: 0.98,
                letterSpacing: '-0.04em',
                color: VD.textPrimary,
                marginBottom: 28,
              }}>
                See where your <span style={{ color: VD.accent }}>calls land.</span>
              </div>
              <div style={{
                fontFamily: FONT_BODY,
                fontWeight: 400,
                fontSize: 26,
                lineHeight: 1.5,
                color: VD.textSecondary,
                maxWidth: 540,
                marginBottom: 56,
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
                    display: 'flex', alignItems: 'baseline', gap: 20,
                  }}>
                    <div style={{
                      fontFamily: FONT_DISPLAY,
                      fontWeight: 600,
                      fontSize: 88,
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
                      paddingBottom: 14,
                    }}>
                      calls placed<br/>in beta
                    </div>
                  </div>
                );
              })()}
            </div>

            <div style={{
              display: 'flex', justifyContent: 'center',
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

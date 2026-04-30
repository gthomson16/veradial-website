import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const PRODUCTION_HOST = "veradial.com";

export function ProductionAnalytics({
  gaId,
  enabled,
}: {
  gaId: string;
  enabled: boolean;
}) {
  if (!enabled) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="lazyOnload"
      />
      <Script id="ga-init" strategy="lazyOnload">
        {`if(window.location.hostname==='${PRODUCTION_HOST}'){window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${gaId}');}`}
      </Script>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

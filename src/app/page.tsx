import { buildPageMetadata } from "@/lib/metadata-helpers";
import { GOOGLE_PLAY_URL } from "@/lib/constants";
import { buildExplainerVideoJsonLd } from "@/lib/explainer-video";
import { SITE_URL } from "@/lib/metadata";
import { Hero } from "@/components/home/Hero";
import { SocialProof } from "@/components/home/SocialProof";
import { ExplainerVideo } from "@/components/home/ExplainerVideo";
import { AppPreview } from "@/components/home/AppPreview";
import { Features } from "@/components/home/Features";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Pricing } from "@/components/home/Pricing";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQPreview } from "@/components/home/FAQPreview";
import { CTA } from "@/components/home/CTA";

export const metadata = buildPageMetadata({
  title: "VeraDial \u2014 AI-Powered Business Calling",
  description:
    "Your AI assistant makes calls on your behalf \u2014 scheduling appointments, following up with clients, and handling routine conversations with verified caller ID.",
  path: "/",
  keywords: [
    "AI calling",
    "AI phone assistant",
    "business calling",
    "caller ID",
    "AI appointment scheduling",
    "verified calling",
    "call recording",
    "business SMS",
  ],
});

function WebSiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://veradial.com/#website",
    name: "VeraDial",
    url: "https://veradial.com",
    publisher: { "@id": "https://veradial.com/#organization" },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://veradial.com/#organization",
    name: "VeraDial",
    url: "https://veradial.com",
    logo: {
      "@type": "ImageObject",
      url: "https://veradial.com/icon.png",
      width: 512,
      height: 509,
    },
    description:
      "AI-powered business calling. Your AI assistant schedules, follows up, and handles the conversations you don't have time for.",
    founder: { "@id": "https://veradial.com/about#founder" },
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@veradial.com",
      contactType: "customer support",
    },
    sameAs: [
      "https://www.linkedin.com/company/112327687/",
      "https://x.com/VeraDialApp",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function ExplainerVideoJsonLd() {
  const jsonLd = buildExplainerVideoJsonLd(SITE_URL);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function SoftwareApplicationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://veradial.com/#app",
    name: "VeraDial",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Android",
    description:
      "AI-powered business calling app. Schedule appointments, follow up with clients, and handle routine conversations with verified caller ID.",
    image: "https://veradial.com/opengraph-image",
    author: { "@id": "https://veradial.com/#organization" },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: GOOGLE_PLAY_URL,
      description: "Subscription includes 100 monthly credits",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "9.99",
        priceCurrency: "USD",
        billingDuration: "P1M",
        unitCode: "MON",
        referenceQuantity: {
          "@type": "QuantitativeValue",
          value: 1,
          unitCode: "MON",
        },
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function Home() {
  return (
    <>
      <WebSiteJsonLd />
      <OrganizationJsonLd />
      <SoftwareApplicationJsonLd />
      <ExplainerVideoJsonLd />
      <Hero />
      <SocialProof />
      <ExplainerVideo />
      <AppPreview />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQPreview />
      <CTA />
    </>
  );
}

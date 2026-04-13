import { buildPageMetadata, buildBreadcrumbJsonLd } from "@/lib/metadata-helpers";
import { Hero } from "@/components/home/Hero";
import { SocialProof } from "@/components/home/SocialProof";
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
    "voice effects",
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
      width: 890,
      height: 890,
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

function SoftwareApplicationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://veradial.com/#app",
    name: "VeraDial",
    applicationCategory: "BusinessApplication",
    operatingSystem: ["iOS", "Android"],
    description:
      "AI-powered business calling app. Schedule appointments, follow up with clients, and handle routine conversations with verified caller ID.",
    image: "https://veradial.com/opengraph-image",
    author: { "@id": "https://veradial.com/#organization" },
    offers: {
      "@type": "Offer",
      price: "9.99",
      priceCurrency: "USD",
      availability: "https://schema.org/PreOrder",
      url: "https://veradial.com/#pricing",
      description: "Subscription includes 100 monthly credits",
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
      <Hero />
      <SocialProof />
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

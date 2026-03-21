import { Hero } from "@/components/home/Hero";
import { SocialProof } from "@/components/home/SocialProof";
import { AppPreview } from "@/components/home/AppPreview";
import { Features } from "@/components/home/Features";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Pricing } from "@/components/home/Pricing";
import { Testimonials } from "@/components/home/Testimonials";

import { FAQPreview } from "@/components/home/FAQPreview";
import { CTA } from "@/components/home/CTA";

function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VeraDial",
    url: "https://veradial.com",
    logo: "https://veradial.com/icon.png",
    description:
      "AI-powered business calling. Your AI assistant schedules, follows up, and handles the conversations you don't have time for.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@veradial.com",
      contactType: "customer support",
    },
    sameAs: [],
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
    name: "VeraDial",
    applicationCategory: "BusinessApplication",
    operatingSystem: "iOS, Android",
    description:
      "AI-powered business calling app. Schedule appointments, follow up with clients, and handle routine conversations with verified caller ID.",
    offers: {
      "@type": "Offer",
      price: "9.99",
      priceCurrency: "USD",
      description: "Starting at 60 call credits",
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

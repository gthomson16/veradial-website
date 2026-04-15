import type { MetadataRoute } from "next";
import { AREA_CODES } from "@/lib/area-codes";
import { getAllAlternativesSlugs } from "@/lib/alternatives-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://veradial.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compare`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compare/google-voice`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/textnow`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/sideline`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/burner`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/hushed`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/spoofcard`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/openphone`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/grasshopper`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/dialpad`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/ringcentral`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/vonage`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/line2`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/iplum`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/alternatives`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...getAllAlternativesSlugs().map((slug) => ({
      url: `${baseUrl}/alternatives/${slug}`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: `${baseUrl}/screenshots`,
      lastModified: new Date("2026-04-14"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/use-cases`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/use-cases/contractors`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/use-cases/realtors`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/use-cases/freelancers`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/use-cases/sales`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/use-cases/property-managers`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/use-cases/recruiters`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/numbers`,
      lastModified: new Date("2026-04-14"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...AREA_CODES.map((ac) => ({
      url: `${baseUrl}/numbers/${ac.code}`,
      lastModified: new Date("2026-04-14"),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/delete-account`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}

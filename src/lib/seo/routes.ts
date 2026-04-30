export type StaticSitePath = {
  path: `/${string}`;
  sourcePaths: readonly string[];
  sitemap: boolean;
};

export const STATIC_SITE_PATHS = [
  { path: "/", sourcePaths: ["page.tsx"], sitemap: true },
  { path: "/pricing", sourcePaths: ["pricing/page.tsx"], sitemap: true },
  {
    path: "/stir-shaken-for-small-business",
    sourcePaths: ["stir-shaken-for-small-business/page.tsx"],
    sitemap: true,
  },
  { path: "/faq", sourcePaths: ["faq/page.tsx"], sitemap: true },
  { path: "/about", sourcePaths: ["about/page.tsx"], sitemap: true },
  { path: "/compare", sourcePaths: ["compare/page.tsx"], sitemap: true },
  {
    path: "/alternatives",
    sourcePaths: ["alternatives/page.tsx", "alternatives/[competitor]/page.tsx"],
    sitemap: true,
  },
  { path: "/screenshots", sourcePaths: ["screenshots/page.tsx"], sitemap: true },
  { path: "/help", sourcePaths: ["help/page.tsx"], sitemap: true },
  { path: "/use-cases", sourcePaths: ["use-cases/page.tsx"], sitemap: true },
  { path: "/numbers", sourcePaths: ["numbers/page.tsx"], sitemap: true },
  { path: "/privacy", sourcePaths: ["privacy/page.tsx"], sitemap: true },
  { path: "/terms", sourcePaths: ["terms/page.tsx"], sitemap: true },
  {
    path: "/delete-account",
    sourcePaths: ["delete-account/page.tsx"],
    sitemap: true,
  },
  { path: "/try", sourcePaths: ["try/page.tsx"], sitemap: false },
] as const satisfies readonly StaticSitePath[];

export const STATIC_INTERNAL_PATHS = STATIC_SITE_PATHS.map(({ path }) => path);

export const STATIC_SITEMAP_PATHS = STATIC_SITE_PATHS.filter(
  ({ sitemap }) => sitemap,
);

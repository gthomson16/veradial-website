#!/usr/bin/env node
// Pings IndexNow (Bing/Yandex/Seznam/Naver) with URLs whose sitemap
// lastmod is within the last 7 days. Runs as postbuild on Vercel
// production deploys only.

const SITE = "https://veradial.com";
const KEY = "ac9e1ce6fb05470695cefc28a983842c";
const KEY_LOCATION = `${SITE}/${KEY}.txt`;
const SITEMAP_URL = `${SITE}/sitemap.xml`;
const RECENT_DAYS = 7;
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

async function main() {
  if (process.env.VERCEL_ENV !== "production") {
    console.log(
      `[indexnow] skipping (VERCEL_ENV=${process.env.VERCEL_ENV ?? "unset"})`,
    );
    return;
  }

  let xml;
  try {
    const res = await fetch(SITEMAP_URL);
    if (!res.ok) {
      console.log(`[indexnow] sitemap fetch returned ${res.status}, skipping`);
      return;
    }
    xml = await res.text();
  } catch (err) {
    console.log(`[indexnow] sitemap fetch failed: ${err.message}, skipping`);
    return;
  }

  const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => m[1]);
  if (entries.length === 0) {
    console.log("[indexnow] empty sitemap, skipping");
    return;
  }

  const cutoff = Date.now() - RECENT_DAYS * 24 * 60 * 60 * 1000;
  const recent = [];
  for (const entry of entries) {
    const loc = entry.match(/<loc>(.*?)<\/loc>/)?.[1];
    const lastmod = entry.match(/<lastmod>(.*?)<\/lastmod>/)?.[1];
    if (!loc) continue;
    if (!lastmod || new Date(lastmod).getTime() >= cutoff) {
      recent.push(loc);
    }
  }

  if (recent.length === 0) {
    console.log("[indexnow] no recently-changed URLs, skipping");
    return;
  }

  const host = new URL(SITE).host;
  const body = {
    host,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: recent,
  };

  try {
    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(body),
    });
    console.log(`[indexnow] pinged ${recent.length} URL(s) → HTTP ${res.status}`);
  } catch (err) {
    console.log(`[indexnow] ping failed: ${err.message}`);
  }
}

main().catch((err) => {
  console.log(`[indexnow] unexpected error: ${err.message}`);
});

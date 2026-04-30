const CLIENT_KEY = process.env.TIKTOK_CLIENT_KEY;
const CLIENT_SECRET = process.env.TIKTOK_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.TIKTOK_REFRESH_TOKEN;

if (!CLIENT_KEY || !CLIENT_SECRET || !REFRESH_TOKEN) {
  console.error("Missing TIKTOK_CLIENT_KEY, TIKTOK_CLIENT_SECRET, or TIKTOK_REFRESH_TOKEN in .env.");
  process.exit(1);
}

const res = await fetch("https://open.tiktokapis.com/v2/oauth/token/", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: new URLSearchParams({
    client_key: CLIENT_KEY,
    client_secret: CLIENT_SECRET,
    grant_type: "refresh_token",
    refresh_token: REFRESH_TOKEN,
  }).toString(),
});

const data = await res.json().catch(() => null);
if (!res.ok || !data || data.error) {
  console.error("Refresh failed:", JSON.stringify(data, null, 2));
  process.exit(1);
}

console.log("New tokens — paste into .env:\n");
console.log(JSON.stringify(data, null, 2));

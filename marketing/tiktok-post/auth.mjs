import { randomBytes } from "node:crypto";
import { spawn } from "node:child_process";

const CLIENT_KEY = process.env.TIKTOK_CLIENT_KEY;
const REDIRECT_URI = "https://veradial.com/tiktok/callback";
const SCOPES = "user.info.basic,video.upload";

if (!CLIENT_KEY) {
  console.error("Missing TIKTOK_CLIENT_KEY in .env");
  process.exit(1);
}

const state = randomBytes(16).toString("hex");
const url = new URL("https://www.tiktok.com/v2/auth/authorize/");
url.searchParams.set("client_key", CLIENT_KEY);
url.searchParams.set("scope", SCOPES);
url.searchParams.set("response_type", "code");
url.searchParams.set("redirect_uri", REDIRECT_URI);
url.searchParams.set("state", state);

const authUrl = url.toString();

console.log("Opening TikTok authorization page in your browser...\n");
console.log(authUrl);
console.log("\nAfter authorizing @veradialapp, veradial.com/tiktok/callback will");
console.log("display the token JSON. Copy these into marketing/tiktok-post/.env:\n");
console.log("  TIKTOK_ACCESS_TOKEN   = access_token");
console.log("  TIKTOK_REFRESH_TOKEN  = refresh_token");
console.log("  TIKTOK_OPEN_ID        = open_id");
console.log(`\nExpected state (for your sanity): ${state}`);

spawn("open", [authUrl], { stdio: "ignore", detached: true }).unref();

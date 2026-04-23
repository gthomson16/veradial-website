import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

const TIKTOK_TOKEN_ENDPOINT = "https://open.tiktokapis.com/v2/oauth/token/";
const REDIRECT_URI = "https://veradial.com/tiktok/callback";

function html(body: string, status = 200) {
  return new Response(
    `<!doctype html><meta charset="utf-8"><title>VeraDial · TikTok OAuth</title><style>body{font-family:ui-sans-serif,system-ui,sans-serif;max-width:640px;margin:3rem auto;padding:0 1.5rem;color:#111}code{background:#f3f4f6;padding:2px 6px;border-radius:4px;font-size:0.9em}pre{background:#0b0b0b;color:#f6f6f6;padding:1rem;border-radius:8px;overflow:auto;white-space:pre-wrap;word-break:break-all;font-size:0.85em}h1{font-size:1.25rem;margin-bottom:0.25rem}p{line-height:1.5}</style>${body}`,
    { status, headers: { "content-type": "text/html; charset=utf-8" } },
  );
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  const error = url.searchParams.get("error");
  const errorDescription = url.searchParams.get("error_description");
  const state = url.searchParams.get("state");

  if (error) {
    return html(
      `<h1>TikTok authorization failed</h1><p><strong>${error}</strong></p><p>${errorDescription ?? ""}</p>`,
      400,
    );
  }

  if (!code) {
    return html(
      `<h1>VeraDial TikTok callback</h1><p>This endpoint receives OAuth redirects from TikTok. No authorization code was present, so nothing to do.</p>`,
    );
  }

  const clientKey = process.env.TIKTOK_CLIENT_KEY;
  const clientSecret = process.env.TIKTOK_CLIENT_SECRET;

  if (!clientKey || !clientSecret) {
    return html(
      `<h1>Server not configured</h1><p>Missing <code>TIKTOK_CLIENT_KEY</code> or <code>TIKTOK_CLIENT_SECRET</code> environment variables.</p>`,
      500,
    );
  }

  const tokenRes = await fetch(TIKTOK_TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Cache-Control": "no-cache",
    },
    body: new URLSearchParams({
      client_key: clientKey,
      client_secret: clientSecret,
      code,
      grant_type: "authorization_code",
      redirect_uri: REDIRECT_URI,
    }).toString(),
  });

  const payload = await tokenRes.json().catch(() => null);

  if (!tokenRes.ok || !payload || payload.error) {
    return html(
      `<h1>Token exchange failed</h1><p>TikTok returned an error.</p><pre>${escapeHtml(JSON.stringify(payload, null, 2))}</pre>`,
      502,
    );
  }

  const stateBlock = state ? `<p><strong>State:</strong> <code>${escapeHtml(state)}</code></p>` : "";

  return html(
    `<h1>TikTok authorization complete</h1>
    <p>Copy the tokens below into your local <code>.env.local</code> for the poster script.</p>
    ${stateBlock}
    <pre>${escapeHtml(JSON.stringify(payload, null, 2))}</pre>
    <p style="color:#6b7280;font-size:0.85em">These tokens grant posting access to the connected TikTok account. Do not share. Close this tab once copied.</p>`,
  );
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

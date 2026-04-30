# tiktok-post

Local CLI that uploads a video to **@veradialapp**'s TikTok inbox as a draft. A human then opens the TikTok app, writes the caption, and publishes.

Runs against the VeraDial Poster app in TikTok for Developers sandbox mode — scope `video.upload`, rate limit ~6 posts/day per target user.

## Why drafts (not Direct Post)?

Direct Post via `video.publish` exists, but TikTok blocks unaudited apps from posting to **public** accounts — the `unaudited_client_can_only_post_to_private_accounts` error. You'd have to make @veradialapp private or submit the app for full review before Direct Post is usable on a public brand account. The draft flow sidesteps all of that and gives a free caption-review step.

## First-time setup

1. Copy the template:

   ```
   cp .env.example .env
   ```

2. Paste the **sandbox** client key + secret (portal → VeraDial Poster Sandbox → Credentials) into `.env`:

   ```
   TIKTOK_CLIENT_KEY=sb...
   TIKTOK_CLIENT_SECRET=...
   ```

3. Kick off the auth flow:

   ```
   npm run auth
   ```

   Your browser opens the TikTok consent screen. Log in as **@veradialapp**, approve `user.info.basic` + `video.upload`. TikTok redirects to `https://veradial.com/tiktok/callback`, which exchanges the code for a token server-side and prints the JSON.

4. Paste the three values into `.env`:

   ```
   TIKTOK_ACCESS_TOKEN=...
   TIKTOK_REFRESH_TOKEN=...
   TIKTOK_OPEN_ID=...
   ```

## Posting a video

```
npm run post -- /path/to/video.mp4
```

The script chunks the file (64 MB max per chunk), uploads to the URL TikTok returns from `/v2/post/publish/inbox/video/init/`, and prints the `publish_id`. Draft lands in the TikTok inbox for @veradialapp within a few seconds.

Open the TikTok app on the @veradialapp account → inbox → finalize caption → post.

## When the token expires

Access tokens last 24 hours. Refresh tokens last 365 days.

```
npm run refresh
```

Prints a new `access_token` + `refresh_token`. Paste both into `.env`.

If the refresh token has also expired (rare — 1 year idle), rerun `npm run auth`.

## Notes

- Videos stay as drafts because we're on the `video.upload` scope, not `video.publish`. A human always finalizes before anything goes live.
- Sandbox mode means only @veradialapp (added as the target user in the portal) can authorize this app.
- TikTok caps at ~6 posts/day per target user in sandbox. Plenty for a brand account.
- Videos must be MP4. Vertical 9:16 gets priority placement on TikTok — the `marketing/demo-video/` pipeline produces `veradial-preview-master.mp4` at 1080×1920.

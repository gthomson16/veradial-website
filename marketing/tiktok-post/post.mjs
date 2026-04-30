import { stat, open } from "node:fs/promises";
import { basename, resolve } from "node:path";

const ACCESS_TOKEN = process.env.TIKTOK_ACCESS_TOKEN;
const VIDEO_ARG = process.argv[2];

if (!ACCESS_TOKEN) {
  console.error("Missing TIKTOK_ACCESS_TOKEN in .env. Run `npm run auth` first.");
  process.exit(1);
}
if (!VIDEO_ARG) {
  console.error("Usage: npm run post -- <path-to-video.mp4>");
  process.exit(1);
}

const videoPath = resolve(VIDEO_ARG);
const fileStat = await stat(videoPath).catch(() => null);
if (!fileStat || !fileStat.isFile()) {
  console.error(`File not found: ${videoPath}`);
  process.exit(1);
}

const size = fileStat.size;
const CHUNK_SIZE = Math.min(size, 64 * 1024 * 1024);
const TOTAL_CHUNKS = Math.ceil(size / CHUNK_SIZE);

console.log(`Uploading ${basename(videoPath)} (${(size / 1024 / 1024).toFixed(2)} MB, ${TOTAL_CHUNKS} chunk${TOTAL_CHUNKS > 1 ? "s" : ""}) to @veradialapp's TikTok inbox as a draft...\n`);

// Step 1 — init upload
const initRes = await fetch(
  "https://open.tiktokapis.com/v2/post/publish/inbox/video/init/",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      source_info: {
        source: "FILE_UPLOAD",
        video_size: size,
        chunk_size: CHUNK_SIZE,
        total_chunk_count: TOTAL_CHUNKS,
      },
    }),
  },
);

const initData = await initRes.json().catch(() => null);
if (!initRes.ok || !initData || initData.error?.code !== "ok") {
  console.error("Init failed:", JSON.stringify(initData, null, 2));
  process.exit(1);
}

const { publish_id, upload_url } = initData.data;
console.log(`publish_id: ${publish_id}\n`);

// Step 2 — upload chunks
const fh = await open(videoPath, "r");
try {
  for (let i = 0; i < TOTAL_CHUNKS; i++) {
    const start = i * CHUNK_SIZE;
    const end = Math.min(start + CHUNK_SIZE, size) - 1;
    const bytes = end - start + 1;
    const buf = Buffer.alloc(bytes);
    await fh.read(buf, 0, bytes, start);

    const putRes = await fetch(upload_url, {
      method: "PUT",
      headers: {
        "Content-Range": `bytes ${start}-${end}/${size}`,
        "Content-Type": "video/mp4",
        "Content-Length": bytes.toString(),
      },
      body: buf,
    });

    if (!putRes.ok) {
      const text = await putRes.text();
      console.error(`Chunk ${i + 1}/${TOTAL_CHUNKS} failed: HTTP ${putRes.status}\n${text}`);
      process.exit(1);
    }
    console.log(`  chunk ${i + 1}/${TOTAL_CHUNKS} uploaded`);
  }
} finally {
  await fh.close();
}

console.log(`\nDone. Open the TikTok app on @veradialapp's phone — the draft is in your inbox, waiting for a caption + publish.`);

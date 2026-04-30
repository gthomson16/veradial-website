#!/usr/bin/env node
// Frame-by-frame capture of VeraDial Explainer.html via headless Chrome.
// Outputs a PNG sequence to --out dir. render.sh then encodes to MP4 via ffmpeg.

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const stripped = a.replace(/^--/, '');
    const eq = stripped.indexOf('=');
    return eq === -1 ? [stripped, true] : [stripped.slice(0, eq), stripped.slice(eq + 1)];
  })
);

const fps = parseInt(args.fps, 10) || 60;
const duration = parseFloat(args.duration) || 60;
const width = parseInt(args.width, 10) || 1920;
const height = parseInt(args.height, 10) || 1080;
const outDir = args.out || 'frames';
const url = args.url || 'http://localhost:8765/VeraDial%20Explainer.html?render=1';

const totalFrames = Math.round(duration * fps);
fs.mkdirSync(outDir, { recursive: true });

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    defaultViewport: { width, height, deviceScaleFactor: 1 },
    args: [
      `--window-size=${width},${height}`,
      '--autoplay-policy=no-user-gesture-required',
      '--disable-web-security',
      '--no-sandbox',
    ],
  });

  const page = await browser.newPage();
  page.on('pageerror', (err) => console.error('[page error]', err.message));
  page.on('console', (msg) => {
    if (msg.type() === 'error') console.error('[page console]', msg.text());
  });

  console.log(`→ loading ${url}`);
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

  // Wait for the seek hook to be installed by animations.jsx
  await page.waitForFunction('window.__vdReady === true', { timeout: 10000 });

  // Give Babel a beat to compile all JSX files and for fonts/images to settle
  await new Promise((r) => setTimeout(r, 1500));
  await page.evaluate(async () => {
    if (document.fonts && document.fonts.ready) await document.fonts.ready;
  });

  console.log(`→ capturing ${totalFrames} frames at ${fps}fps (${duration}s @ ${width}x${height})`);
  const t0 = Date.now();

  for (let i = 0; i < totalFrames; i++) {
    const t = i / fps;
    await page.evaluate((tt) => window.__vdSeek(tt), t);
    // One RAF tick so scene components rerender with the new time.
    await page.evaluate(
      () => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)))
    );
    const file = path.join(outDir, `frame_${String(i).padStart(5, '0')}.png`);
    await page.screenshot({ path: file, omitBackground: false, captureBeyondViewport: false });

    if (i % fps === 0 || i === totalFrames - 1) {
      const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
      process.stdout.write(`  frame ${i + 1}/${totalFrames}  (${elapsed}s)\r`);
    }
  }

  console.log(`\n→ captured ${totalFrames} frames in ${((Date.now() - t0) / 1000).toFixed(1)}s`);
  await browser.close();
})().catch((err) => {
  console.error(err);
  process.exit(1);
});

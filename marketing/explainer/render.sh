#!/usr/bin/env bash
# Renders VeraDial Explainer.html to an MP4 suitable for YouTube.
#
# Usage:  ./render.sh [--fps 60] [--width 1920] [--height 1080] [--out out.mp4]
#
# Requires:  node + puppeteer (via `yarn install` in this dir), ffmpeg, python3.
# Output:    H.264 high profile, CRF 16, AAC 384k. Upload at 1440p path on YouTube.

set -euo pipefail
cd "$(dirname "$0")"

FPS=60
DURATION=60
WIDTH=1920
HEIGHT=1080
OUT="veradial-explainer.mp4"
PORT=8765
MUSIC="assets/glass-interface.mp3"
BITRATE="12M"  # YouTube's recommended target for 1080p60 SDR

while [[ $# -gt 0 ]]; do
  case "$1" in
    --fps)     FPS="$2"; shift 2 ;;
    --width)   WIDTH="$2"; shift 2 ;;
    --height)  HEIGHT="$2"; shift 2 ;;
    --out)     OUT="$2"; shift 2 ;;
    --port)    PORT="$2"; shift 2 ;;
    --bitrate) BITRATE="$2"; shift 2 ;;
    *)         echo "Unknown arg: $1" >&2; exit 1 ;;
  esac
done

command -v ffmpeg >/dev/null || { echo "ffmpeg not installed" >&2; exit 1; }
command -v node   >/dev/null || { echo "node not installed"   >&2; exit 1; }
command -v python3>/dev/null || { echo "python3 not installed">&2; exit 1; }

if [[ ! -d node_modules/puppeteer ]]; then
  echo "→ installing puppeteer (one-time, ~200MB for bundled Chromium)"
  if command -v yarn >/dev/null; then yarn install; else npm install; fi
fi

FRAMES_DIR=".render-frames"
rm -rf "$FRAMES_DIR"
mkdir -p "$FRAMES_DIR"

# Start static server on $PORT, scoped to this directory.
echo "→ starting static server on http://localhost:$PORT"
python3 -m http.server "$PORT" > /tmp/veradial-explainer-render-server.log 2>&1 &
SERVER_PID=$!
cleanup() {
  kill "$SERVER_PID" 2>/dev/null || true
  rm -rf "$FRAMES_DIR"
}
trap cleanup EXIT

# Wait for server to come up.
for _ in $(seq 1 20); do
  if curl -sf "http://localhost:$PORT/VeraDial%20Explainer.html" -o /dev/null; then break; fi
  sleep 0.1
done

# 1. Capture PNG sequence.
node render.js \
  --fps="$FPS" --duration="$DURATION" \
  --width="$WIDTH" --height="$HEIGHT" \
  --out="$FRAMES_DIR" \
  --url="http://localhost:$PORT/VeraDial%20Explainer.html?render=1"

# 2. Encode MP4 with music. Target bitrate (not CRF) so YouTube's ingest has
#    enough data to avoid aggressive re-compression on re-encode.
MAXRATE=$(awk -v b="${BITRATE%M}" 'BEGIN{printf "%dM", b*1.25}')
BUFSIZE=$(awk -v b="${BITRATE%M}" 'BEGIN{printf "%dM", b*2}')
echo "→ encoding $OUT (target ${BITRATE}, maxrate ${MAXRATE})"
ffmpeg -y -hide_banner -loglevel warning -stats \
  -framerate "$FPS" -i "$FRAMES_DIR/frame_%05d.png" \
  -i "$MUSIC" \
  -map 0:v -map 1:a \
  -c:v libx264 -profile:v high -preset slow \
  -b:v "$BITRATE" -maxrate "$MAXRATE" -bufsize "$BUFSIZE" \
  -pix_fmt yuv420p -r "$FPS" \
  -movflags +faststart \
  -c:a aac -b:a 384k -ar 48000 \
  -shortest \
  "$OUT"

echo "→ done: $OUT"
ffprobe -v error -show_entries format=duration,bit_rate:stream=codec_name,width,height,r_frame_rate "$OUT" 2>/dev/null | grep -E 'duration|bit_rate|codec_name|width|height|r_frame_rate' || true

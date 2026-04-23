#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ASSETS_DIR="${SCRIPT_DIR}/assets"
INPUT_DIR="${SCRIPT_DIR}/input"
CLIPS_DIR="${INPUT_DIR}/clips"
BUILD_DIR="${SCRIPT_DIR}/build"
RENDER_DIR="${BUILD_DIR}/render"
FONT_BOLD="${ASSETS_DIR}/Poppins-Bold.ttf"
FONT_SEMIBOLD="${ASSETS_DIR}/Poppins-SemiBold.ttf"
LOGO_FILE="${ASSETS_DIR}/logo.png"
BEZEL_FILE="${ASSETS_DIR}/iphone-frame.png"
BG_COLOR="0x090C13"
ACCENT_COLOR="#00D4AA"
VIDEO_CRF=16
VIDEO_PRESET=slow
DEVICE_SCALE=0.82
DEVICE_OFFSET_Y=120
APP_INSET_Y=320
DEVICE_FRAME_WIDTH_SCALED="$(awk "BEGIN { printf \"%d\", 1080 * ${DEVICE_SCALE} }")"
DEVICE_FRAME_HEIGHT_SCALED="$(awk "BEGIN { printf \"%d\", 1920 * ${DEVICE_SCALE} }")"
APP_CONTENT_WIDTH_SCALED="$(awk "BEGIN { printf \"%d\", 720 * ${DEVICE_SCALE} }")"
APP_PAD_Y_SCALED="$(awk "BEGIN { printf \"%d\", ${DEVICE_OFFSET_Y} + ${APP_INSET_Y} * ${DEVICE_SCALE} }")"

mkdir -p "${RENDER_DIR}"

require_file() {
  if [[ ! -f "$1" ]]; then
    echo "Missing required file: $1" >&2
    exit 1
  fi
}

require_file "${FONT_BOLD}"
require_file "${FONT_SEMIBOLD}"
require_file "${LOGO_FILE}"
require_file "${BEZEL_FILE}"
require_file "${INPUT_DIR}/narration.m4a"

for clip in \
  01-dialer.mp4 \
  02-ai-transition.mp4 \
  03-messages-transition.mp4 \
  05-history.mp4 \
  06-numbers.mp4 \
  08-ai-payoff.mp4; do
  require_file "${CLIPS_DIR}/${clip}"
done

render_end_card() {
  local card_png="${RENDER_DIR}/99-outro.png"
  python3 - "$card_png" "${FONT_BOLD}" "${FONT_SEMIBOLD}" "${LOGO_FILE}" "${ACCENT_COLOR}" <<'PY'
from PIL import Image, ImageDraw, ImageFont
import sys

out_path, font_bold, font_semibold, logo_file, accent = sys.argv[1:6]
img = Image.new("RGBA", (1080, 1920), "#090C13")
draw = ImageDraw.Draw(img)

title_font = ImageFont.truetype(font_bold, 96)
sub_font = ImageFont.truetype(font_semibold, 38)

logo = Image.open(logo_file).convert("RGBA")
logo.thumbnail((180, 180), Image.LANCZOS)
logo_x = (1080 - logo.width) // 2
logo_y = 575
img.alpha_composite(logo, (logo_x, logo_y))

vera = "Vera"
dial = "Dial"
vera_box = draw.textbbox((0, 0), vera, font=title_font)
dial_box = draw.textbbox((0, 0), dial, font=title_font)
vera_w = vera_box[2] - vera_box[0]
dial_w = dial_box[2] - dial_box[0]
title_w = vera_w + dial_w
title_x = (1080 - title_w) / 2
draw.text((title_x, 790), vera, font=title_font, fill="white")
draw.text((title_x + vera_w, 790), dial, font=title_font, fill=accent)

items = [
    ("Calls, texts, and AI follow-up", sub_font, 930),
    ("from one business number", sub_font, 982),
]
for text, font, y in items:
    box = draw.textbbox((0, 0), text, font=font)
    draw.text(((1080 - (box[2] - box[0])) / 2, y), text, font=font, fill="white")
img.save(out_path)
PY
  ffmpeg -y \
    -loop 1 -framerate 30 -i "${card_png}" -t 1.4 \
    -c:v libx264 -crf "${VIDEO_CRF}" -preset "${VIDEO_PRESET}" -pix_fmt yuv420p -r 30 \
    -movflags +faststart "${RENDER_DIR}/99-outro.mp4"
}

render_segment() {
  local input_file="$1"
  local output_file="$2"
  local start_time="$3"
  local duration="$4"
  local caption="$5"
  local fade_in_duration="${6:-0.25}"
  local fade_out_start caption_png frame_count fade_in_filter
  caption_png="${RENDER_DIR}/$(basename "${output_file}" .mp4)-overlay.png"
  fade_out_start=$(awk "BEGIN { print ${duration} - 0.25 }")
  frame_count=$(awk "BEGIN { print int(${duration} * 30) }")
  fade_in_filter=""
  if awk "BEGIN { exit !(${fade_in_duration} > 0) }"; then
    fade_in_filter="fade=t=in:st=0:d=${fade_in_duration},"
  fi

  python3 - "$caption_png" "${FONT_BOLD}" "${FONT_SEMIBOLD}" "${ACCENT_COLOR}" "$caption" "$(basename "${output_file}")" <<'PY'
from PIL import Image, ImageDraw, ImageFont
import sys

out_path, bold_font_path, semibold_font_path, accent_hex, caption, output_name = sys.argv[1:7]
img = Image.new("RGBA", (1080, 1920), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)
title_font = ImageFont.truetype(bold_font_path, 46)
eyebrow_font = ImageFont.truetype(semibold_font_path, 20)
small_font = ImageFont.truetype(semibold_font_path, 26)
accent = tuple(int(accent_hex[i : i + 2], 16) for i in (1, 3, 5))

eyebrow_map = {
    "01-dialer.mp4": "BUSINESS CALLING",
    "02-ai-transition.mp4": "AI CALLING",
    "03-messages-transition.mp4": "MESSAGING",
    "05-history.mp4": "HISTORY",
    "06-numbers.mp4": "NUMBERS",
    "08-ai-payoff.mp4": "CALL SUMMARY",
}
eyebrow = eyebrow_map.get(output_name, "VERADIAL")

def wrap_text(text, font, max_width):
    words = text.split()
    lines = []
    current = []
    for word in words:
        trial = " ".join(current + [word])
        if draw.textbbox((0, 0), trial, font=font)[2] <= max_width:
            current.append(word)
            continue
        if current:
            lines.append(" ".join(current))
        current = [word]
    if current:
        lines.append(" ".join(current))
    return "\n".join(lines)

top_gradient = Image.new("RGBA", (1080, 420), (0, 0, 0, 0))
gradient_px = top_gradient.load()
for y in range(top_gradient.height):
    alpha = int(190 * (1 - y / top_gradient.height))
    for x in range(top_gradient.width):
        gradient_px[x, y] = (9, 12, 19, alpha)
img.alpha_composite(top_gradient, (0, 0))

title = wrap_text(caption, title_font, 540)
text_x = 84
eyebrow_y = 98
title_y = 142

eyebrow_box = draw.textbbox((0, 0), eyebrow, font=eyebrow_font)
eyebrow_width = eyebrow_box[2] - eyebrow_box[0]
pill_right = text_x + eyebrow_width + 32
draw.rounded_rectangle((text_x, eyebrow_y - 8, pill_right, eyebrow_y + 28), radius=18, fill=(*accent, 52))
draw.text((text_x + 16, eyebrow_y), eyebrow, font=eyebrow_font, fill=accent)
draw.rounded_rectangle((text_x, eyebrow_y + 44, text_x + 64, eyebrow_y + 50), radius=3, fill=accent)

shadow_color = (0, 0, 0, 110)
draw.multiline_text(
    (text_x, title_y + 4),
    title,
    font=title_font,
    fill=shadow_color,
    spacing=6,
    align="left",
)
draw.multiline_text(
    (text_x, title_y),
    title,
    font=title_font,
    fill="white",
    spacing=6,
    align="left",
)

if output_name == "02-ai-transition.mp4":
    draw.rounded_rectangle((165, 1110, 915, 1255), radius=28, fill=(9, 12, 19, 255))
    note = "AI calls cost 5 credits per minute of call time"
    note_box = draw.textbbox((0, 0), note, font=small_font)
    note_w = note_box[2] - note_box[0]
    note_x = (1080 - note_w) / 2
    draw.rounded_rectangle((220, 1662, 860, 1712), radius=20, fill=(9, 12, 19, 255))
    draw.text((note_x, 1672), note, font=small_font, fill=(175, 180, 190, 255))

img.save(out_path)
PY

  ffmpeg -y \
    -i "${input_file}" \
    -loop 1 -framerate 30 -i "${BEZEL_FILE}" \
    -loop 1 -framerate 30 -i "${caption_png}" \
    -filter_complex "[0:v]trim=start=${start_time}:duration=${duration},setpts=PTS-STARTPTS,fps=30,scale=${APP_CONTENT_WIDTH_SCALED}:-2,pad=1080:1920:(ow-iw)/2:${APP_PAD_Y_SCALED}:color=${BG_COLOR}[base];[1:v]scale=${DEVICE_FRAME_WIDTH_SCALED}:${DEVICE_FRAME_HEIGHT_SCALED}:flags=lanczos,pad=1080:1920:(ow-iw)/2:${DEVICE_OFFSET_Y}:color=0x00000000[bezel];[base][bezel]overlay=0:0:format=auto[framed];[framed][2:v]overlay=0:0:format=auto,${fade_in_filter}fade=t=out:st=${fade_out_start}:d=0.25[v]" \
    -map "[v]" -an -frames:v "${frame_count}" -c:v libx264 -crf "${VIDEO_CRF}" -preset "${VIDEO_PRESET}" -pix_fmt yuv420p -r 30 \
    -movflags +faststart "${output_file}"
}

render_end_card

render_segment "${CLIPS_DIR}/01-dialer.mp4" "${RENDER_DIR}/01-dialer.mp4" 0.0 2.8 \
  "Call from your business number" 0
render_segment "${CLIPS_DIR}/02-ai-transition.mp4" "${RENDER_DIR}/02-ai-transition.mp4" 7.0 4.0 \
  "Let AI confirm appointments for you"
render_segment "${CLIPS_DIR}/03-messages-transition.mp4" "${RENDER_DIR}/03-messages-transition.mp4" 2.5 3.8 \
  "Follow up by text from the same number"
render_segment "${CLIPS_DIR}/05-history.mp4" "${RENDER_DIR}/05-history.mp4" 1.0 3.8 \
  "See calls, AI calls, and voicemail together"
render_segment "${CLIPS_DIR}/06-numbers.mp4" "${RENDER_DIR}/06-numbers.mp4" 1.0 3.8 \
  "Manage multiple business numbers"
render_segment "${CLIPS_DIR}/08-ai-payoff.mp4" "${RENDER_DIR}/08-ai-payoff.mp4" 0.6 4.0 \
  "Read the transcript and summary after the call"

cat > "${RENDER_DIR}/concat.txt" <<EOF
file '${RENDER_DIR}/01-dialer.mp4'
file '${RENDER_DIR}/02-ai-transition.mp4'
file '${RENDER_DIR}/03-messages-transition.mp4'
file '${RENDER_DIR}/05-history.mp4'
file '${RENDER_DIR}/06-numbers.mp4'
file '${RENDER_DIR}/08-ai-payoff.mp4'
file '${RENDER_DIR}/99-outro.mp4'
EOF

ffmpeg -y -f concat -safe 0 -i "${RENDER_DIR}/concat.txt" -c copy -movflags +faststart "${RENDER_DIR}/video-only.mp4"

ffmpeg -y \
  -i "${RENDER_DIR}/video-only.mp4" \
  -an -c:v copy -movflags +faststart "${BUILD_DIR}/veradial-demo-vertical-silent.mp4"

ffmpeg -y \
  -i "${BUILD_DIR}/veradial-demo-vertical-silent.mp4" \
  -i "${INPUT_DIR}/narration.m4a" \
  -filter_complex "[1:a]adelay=800|800,volume=1.15,apad=pad_dur=1[a]" \
  -map 0:v -map "[a]" \
  -c:v copy -c:a aac -b:a 192k -shortest -movflags +faststart "${BUILD_DIR}/veradial-demo-vertical.mp4"

ffmpeg -y \
  -i "${BUILD_DIR}/veradial-demo-vertical-silent.mp4" \
  -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2:color=${BG_COLOR}" \
  -an -c:v libx264 -crf "${VIDEO_CRF}" -preset "${VIDEO_PRESET}" -movflags +faststart \
  "${BUILD_DIR}/veradial-demo-widescreen-silent.mp4"

ffmpeg -y \
  -i "${BUILD_DIR}/veradial-demo-widescreen-silent.mp4" \
  -i "${INPUT_DIR}/narration.m4a" \
  -filter_complex "[1:a]adelay=800|800,volume=1.15,apad=pad_dur=1[a]" \
  -map 0:v -map "[a]" \
  -c:v copy -c:a aac -b:a 192k -shortest -movflags +faststart "${BUILD_DIR}/veradial-demo-widescreen.mp4"

echo
echo "Rendered demo video assets:"
echo "  ${BUILD_DIR}/veradial-demo-vertical.mp4"
echo "  ${BUILD_DIR}/veradial-demo-vertical-silent.mp4"
echo "  ${BUILD_DIR}/veradial-demo-widescreen.mp4"
echo "  ${BUILD_DIR}/veradial-demo-widescreen-silent.mp4"

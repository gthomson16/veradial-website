#!/usr/bin/env bash
# Landscape 1920x1080 variant of the App Store preview for Google Play's
# promo-video slot. Same shot structure, copy, music, and 21.77s runtime as
# the portrait version — text on the left, phone on the right.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ASSETS_DIR="${SCRIPT_DIR}/assets"
BUILD_DIR="${SCRIPT_DIR}/build"
BASE_DIR="${BUILD_DIR}/base"
SHOTS_DIR="${BUILD_DIR}/shots-landscape"
BACK_DIR="${BUILD_DIR}/backplates-landscape"
INPUT_DIR="${SCRIPT_DIR}/input"
FONT_BOLD="${ASSETS_DIR}/Poppins-Bold.ttf"
FONT_SEMIBOLD="${ASSETS_DIR}/Poppins-SemiBold.ttf"
LOGO_FILE="${ASSETS_DIR}/logo.png"
BEZEL_FILE="${ASSETS_DIR}/iphone-frame.png"
MUSIC_FILE="${INPUT_DIR}/Glass_Interface.mp3"

VIDEO_CRF=18
VIDEO_PRESET=slow
FPS=30

# Canvas: 16:9 landscape
CANVAS_W=1920
CANVAS_H=1080

# Phone: right-anchored, ~89% of canvas height. Scale 0.50 → 540x960.
PHONE_SCALE=0.50
PHONE_RIGHT_MARGIN=120
PHONE_TOP=30

# Text layer positions (left-side text column)
TEXT_X=100
BRAND_Y=50
TITLE_Y=180
SUB_Y=470
BULLETS_Y=580
STRIP_Y=920

mkdir -p "${SHOTS_DIR}" "${BACK_DIR}"

require_file() {
  [[ -f "$1" ]] || { echo "Missing: $1" >&2; exit 1; }
}

require_file "${FONT_BOLD}"
require_file "${FONT_SEMIBOLD}"
require_file "${LOGO_FILE}"
require_file "${BEZEL_FILE}"
require_file "${BASE_DIR}/01-numbers.png"
require_file "${BASE_DIR}/02-brief.png"
require_file "${BASE_DIR}/03-payoff.png"
require_file "${BASE_DIR}/04-map.png"

# --- Shot metadata (identical to portrait version) ---------------------------

SHOT_NAMES=(01 02 03 04)
SHOT_BASES=("01-numbers.png" "02-brief.png" "03-payoff.png" "04-map.png")

SHOT_SEGMENT=("NUMBERS" "BRIEF" "CALL" "MAP")
SHOT_BRAND_SUFFIX=(
  "01 · YOUR NUMBERS"
  "02 · BRIEF THE AI"
  "03 · THE CALL"
  "04 · CALL MAP"
)
SHOT_TITLE1=("Your business." "Tell it"        "It calls."      "See where")
SHOT_TITLE2=("Your numbers."  "what to ask."   "It handles it." "calls land.")
SHOT_SUB1=(
  "US or Canadian. Local or toll-free."
  "Describe a goal. The AI handles the conversation."
  "Full transcript and summary after every call."
  "A visual map — outbound, inbound, and AI."
)
SHOT_BULLETS=(
  "Up to 5 lines per user
Voice + SMS
Verify existing numbers"
  "Powered by leading AI models
Persistent caller profile
Per-call notes"
  "Optional recording
Automatic transcription
Per-call summary"
  "Clustered by location
Week, month, or quarter
Tap for details"
)
SHOT_STRIP=(
  "One app, many numbers."
  "5 AI calls per hour."
  "Every conversation, captured."
  "Every call plotted."
)

SHOT_DURATIONS=(4 5 8 4)
SHOT_ZOOM_START=(1.00 1.00 1.08 1.00)
SHOT_ZOOM_END=(  1.00 1.00 1.08 1.00)
SHOT_CX_FRAC=(   0.50 0.50 0.50 0.50)
SHOT_CY_FRAC=(   0.50 0.50 0.25 0.50)
SHOT_CY_END=(    0.50 0.50 0.75 0.50)

# --- Backplate: gradient + rings + phone glow + shadow (centered right) ------
render_backplate_bg() {
  local out_png="$1"
  CANVAS_W="${CANVAS_W}" CANVAS_H="${CANVAS_H}" \
  PHONE_SCALE="${PHONE_SCALE}" PHONE_RIGHT_MARGIN="${PHONE_RIGHT_MARGIN}" \
  PHONE_TOP="${PHONE_TOP}" \
  python3 - "$out_png" <<'PY'
import os, sys, math
from PIL import Image, ImageDraw, ImageFilter

out_path = sys.argv[1]
W = int(os.environ["CANVAS_W"])
H = int(os.environ["CANVAS_H"])
phone_scale = float(os.environ["PHONE_SCALE"])
phone_right_margin = int(os.environ["PHONE_RIGHT_MARGIN"])
phone_top = int(os.environ["PHONE_TOP"])

BG_DARK = (3, 6, 12)
BG_MID  = (24, 38, 62)
ACCENT  = (0, 212, 170)

# Phone geometry (right-anchored)
phone_w_native = 1080
phone_h_native = 1920
phone_w = int(phone_w_native * phone_scale)
phone_h = int(phone_h_native * phone_scale)
phone_x = W - phone_w - phone_right_margin
phone_y = phone_top
phone_cx = phone_x + phone_w // 2
phone_cy = phone_y + phone_h // 2

# Radial gradient, lit from phone center
grad = Image.new("RGB", (W, H))
max_r = math.hypot(W, H)
px = grad.load()
for y in range(H):
    for x in range(W):
        d = math.hypot(x - phone_cx, y - phone_cy)
        t = min(1.0, d / (max_r * 0.75))
        r = int(BG_MID[0] * (1 - t) + BG_DARK[0] * t)
        g = int(BG_MID[1] * (1 - t) + BG_DARK[1] * t)
        b = int(BG_MID[2] * (1 - t) + BG_DARK[2] * t)
        px[x, y] = (r, g, b)
img = grad.convert("RGBA")

# Concentric rings
rings = Image.new("RGBA", (W, H), (0, 0, 0, 0))
rdraw = ImageDraw.Draw(rings)
for radius in (300, 460, 620, 800, 960):
    rdraw.ellipse(
        (phone_cx - radius, phone_cy - radius, phone_cx + radius, phone_cy + radius),
        outline=(*ACCENT, 55),
        width=2,
    )
rings = rings.filter(ImageFilter.GaussianBlur(radius=1.2))
img = Image.alpha_composite(img, rings)

# Teal halo glow behind phone
glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gdraw = ImageDraw.Draw(glow)
for radius, alpha in [(500, 22), (360, 28), (240, 28)]:
    gdraw.ellipse(
        (phone_cx - radius, phone_cy - radius, phone_cx + radius, phone_cy + radius),
        fill=(*ACCENT, alpha),
    )
glow = glow.filter(ImageFilter.GaussianBlur(radius=150))
img = Image.alpha_composite(img, glow)

# Drop shadow beneath phone
shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sdraw = ImageDraw.Draw(shadow)
shadow_y = phone_y + phone_h - 20
shadow_w = int(phone_w * 0.9)
shadow_h = 50
sx = phone_cx - shadow_w // 2
sdraw.ellipse((sx, shadow_y, sx + shadow_w, shadow_y + shadow_h), fill=(0, 0, 0, 180))
shadow = shadow.filter(ImageFilter.GaussianBlur(radius=25))
img = Image.alpha_composite(img, shadow)

img.save(out_path)
PY
}

# --- Phone body backing (same as portrait, 1080x1920 native) -----------------
render_phone_backing() {
  local out_png="$1"
  python3 - "$out_png" <<'PY'
import sys
from PIL import Image, ImageDraw
W, H = 1080, 1920
img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)
draw.rounded_rectangle((165, 335, 915, 1920), radius=92, fill=(0, 0, 0, 255))
img.save(sys.argv[1])
PY
}

# --- Layer: brand row (top-left) ---------------------------------------------
render_brand_layer() {
  local out_png="$1"
  local brand_suffix="$2"
  CANVAS_W="${CANVAS_W}" CANVAS_H="${CANVAS_H}" \
  BRAND_Y="${BRAND_Y}" TEXT_X="${TEXT_X}" \
  FONT_BOLD="${FONT_BOLD}" FONT_SEMIBOLD="${FONT_SEMIBOLD}" LOGO_FILE="${LOGO_FILE}" \
  python3 - "$out_png" "$brand_suffix" <<'PY'
import os, sys
from PIL import Image, ImageDraw, ImageFont

out_path, brand_suffix = sys.argv[1:3]
W = int(os.environ["CANVAS_W"]); H = int(os.environ["CANVAS_H"])
brand_y = int(os.environ["BRAND_Y"])
text_x = int(os.environ["TEXT_X"])
font_bold = os.environ["FONT_BOLD"]
font_semi = os.environ["FONT_SEMIBOLD"]
logo_file = os.environ["LOGO_FILE"]

ACCENT = (0, 212, 170)
WHITE = (255, 255, 255)
SUFFIX_GRAY = (155, 170, 190)

img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)

logo = Image.open(logo_file).convert("RGBA")
logo = logo.crop(logo.getbbox())
logo.thumbnail((44, 44), Image.LANCZOS)
img.alpha_composite(logo, (text_x, brand_y))

brand_size = 28
brand_font = ImageFont.truetype(font_bold, brand_size)
bx = text_x + logo.width + 18
wordmark_y = brand_y + (logo.height - brand_size) // 2 - 2
vb = draw.textbbox((0, 0), "Vera", font=brand_font)
vw = vb[2] - vb[0]
draw.text((bx, wordmark_y), "Vera", font=brand_font, fill=WHITE)
draw.text((bx + vw, wordmark_y), "Dial", font=brand_font, fill=ACCENT)
db = draw.textbbox((0, 0), "Dial", font=brand_font)
dial_end = bx + vw + (db[2] - db[0])

dot_cx = dial_end + 18
dot_cy = wordmark_y + brand_size // 2
draw.ellipse((dot_cx - 3, dot_cy - 3, dot_cx + 3, dot_cy + 3), fill=ACCENT)

suffix_font = ImageFont.truetype(font_semi, 20)
sx = dot_cx + 16
sy = wordmark_y + (brand_size - 20) // 2 + 1
tracking_px = 2
for ch in brand_suffix:
    draw.text((sx, sy), ch, font=suffix_font, fill=SUFFIX_GRAY)
    cw = draw.textbbox((0, 0), ch, font=suffix_font)[2]
    sx += cw + tracking_px

img.save(out_path)
PY
}

# --- Layer: eyebrow (disabled) -----------------------------------------------
render_eyebrow_layer() {
  local out_png="$1"
  CANVAS_W="${CANVAS_W}" CANVAS_H="${CANVAS_H}" \
  python3 - "$out_png" <<'PY'
import os, sys
from PIL import Image
W = int(os.environ["CANVAS_W"]); H = int(os.environ["CANVAS_H"])
Image.new("RGBA", (W, H), (0, 0, 0, 0)).save(sys.argv[1])
PY
}

# --- Title line renderer (shared) --------------------------------------------
_render_title_line() {
  local out_png="$1"
  local text="$2"
  local color_name="$3"
  local line_index="$4"

  CANVAS_W="${CANVAS_W}" CANVAS_H="${CANVAS_H}" \
  TITLE_Y="${TITLE_Y}" TEXT_X="${TEXT_X}" \
  FONT_BOLD="${FONT_BOLD}" \
  python3 - "$out_png" "$text" "$color_name" "$line_index" <<'PY'
import os, sys
from PIL import Image, ImageDraw, ImageFont

out_path, text, color_name, line_index = sys.argv[1:5]
line_index = int(line_index)
W = int(os.environ["CANVAS_W"]); H = int(os.environ["CANVAS_H"])
title_y = int(os.environ["TITLE_Y"])
text_x = int(os.environ["TEXT_X"])
font_bold = os.environ["FONT_BOLD"]

ACCENT = (0, 212, 170)
WHITE = (255, 255, 255)
color = ACCENT if color_name == "accent" else WHITE

img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)

# Text zone is ~1100px wide (left side). Max title size 120 (landscape can be bigger).
max_w = 1100
for size in range(120, 72, -2):
    f = ImageFont.truetype(font_bold, size)
    tb = draw.textbbox((0, 0), text, font=f)
    if (tb[2] - tb[0]) <= max_w:
        break
else:
    size = 72
font = ImageFont.truetype(font_bold, size)
line_h = int(size * 1.05)
y = title_y + (line_index * line_h)
draw.text((text_x, y), text, font=font, fill=color)

img.save(out_path)
PY
}

render_title1_layer() { _render_title_line "$1" "$2" "white" 0; }
render_title2_layer() { _render_title_line "$1" "$2" "accent" 1; }

# --- Layer: subtitle ---------------------------------------------------------
render_subtitle_layer() {
  local out_png="$1"
  local line1="$2"
  local line2="$3"
  CANVAS_W="${CANVAS_W}" CANVAS_H="${CANVAS_H}" \
  SUB_Y="${SUB_Y}" TEXT_X="${TEXT_X}" \
  FONT_SEMIBOLD="${FONT_SEMIBOLD}" \
  python3 - "$out_png" "$line1" "$line2" <<'PY'
import os, sys
from PIL import Image, ImageDraw, ImageFont

out_path, line1, line2 = sys.argv[1:4]
W = int(os.environ["CANVAS_W"]); H = int(os.environ["CANVAS_H"])
y0 = int(os.environ["SUB_Y"])
text_x = int(os.environ["TEXT_X"])
font_semi = os.environ["FONT_SEMIBOLD"]

LABEL_GRAY = (170, 185, 205)

img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)

font = ImageFont.truetype(font_semi, 36)
line_h = 50
for i, line in enumerate((line1, line2)):
    if line:
        draw.text((text_x, y0 + i * line_h), line, font=font, fill=LABEL_GRAY)

img.save(out_path)
PY
}

# --- Layer: bullets ----------------------------------------------------------
render_bullets_layer() {
  local out_png="$1"
  local bullets="$2"
  CANVAS_W="${CANVAS_W}" CANVAS_H="${CANVAS_H}" \
  BULLETS_Y="${BULLETS_Y}" TEXT_X="${TEXT_X}" \
  FONT_SEMIBOLD="${FONT_SEMIBOLD}" \
  python3 - "$out_png" "$bullets" <<'PY'
import os, sys
from PIL import Image, ImageDraw, ImageFont

out_path, bullets_raw = sys.argv[1:3]
W = int(os.environ["CANVAS_W"]); H = int(os.environ["CANVAS_H"])
y0 = int(os.environ["BULLETS_Y"])
text_x = int(os.environ["TEXT_X"])
font_semi = os.environ["FONT_SEMIBOLD"]

ACCENT = (0, 212, 170)
LABEL_GRAY = (180, 195, 215)

img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)

font = ImageFont.truetype(font_semi, 30)
line_h = 50
x_dot = text_x + 14
x_text = text_x + 46
bullets = [b for b in bullets_raw.split("\n") if b.strip()]
for i, b in enumerate(bullets):
    cy = y0 + i * line_h + 20
    draw.ellipse((x_dot - 5, cy - 5, x_dot + 5, cy + 5), fill=ACCENT)
    draw.text((x_text, y0 + i * line_h), b, font=font, fill=LABEL_GRAY)

img.save(out_path)
PY
}

# --- Layer: bottom strip (left-aligned to match layout) ----------------------
render_strip_layer() {
  local out_png="$1"
  local text="$2"
  CANVAS_W="${CANVAS_W}" CANVAS_H="${CANVAS_H}" \
  STRIP_Y="${STRIP_Y}" TEXT_X="${TEXT_X}" \
  FONT_SEMIBOLD="${FONT_SEMIBOLD}" \
  python3 - "$out_png" "$text" <<'PY'
import os, sys
from PIL import Image, ImageDraw, ImageFont

out_path, text = sys.argv[1:3]
W = int(os.environ["CANVAS_W"]); H = int(os.environ["CANVAS_H"])
y0 = int(os.environ["STRIP_Y"])
text_x = int(os.environ["TEXT_X"])
font_semi = os.environ["FONT_SEMIBOLD"]

STRIP_GRAY = (160, 175, 200)

img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)

font = ImageFont.truetype(font_semi, 30)
draw.text((text_x, y0), text, font=font, fill=STRIP_GRAY)

img.save(out_path)
PY
}

# --- End-card (wordmark) still --------------------------------------------------
render_wordmark_still() {
  local out_png="$1"
  CANVAS_W="${CANVAS_W}" CANVAS_H="${CANVAS_H}" \
  FONT_BOLD="${FONT_BOLD}" LOGO_FILE="${LOGO_FILE}" \
  python3 - "$out_png" <<'PY'
import os, sys, math
from PIL import Image, ImageDraw, ImageFont, ImageFilter
W = int(os.environ["CANVAS_W"]); H = int(os.environ["CANVAS_H"])
font_bold = os.environ["FONT_BOLD"]; logo_file = os.environ["LOGO_FILE"]
BG_DARK = (5, 8, 16); BG_MID = (14, 22, 40)
ACCENT = (0, 212, 170); WHITE = (255, 255, 255)

img = Image.new("RGB", (W, H), BG_DARK)
cx, cy = W / 2, H / 2
max_r = math.hypot(W, H)
px = img.load()
for y in range(H):
    for x in range(W):
        d = math.hypot(x - cx, y - cy)
        t = min(1.0, d / (max_r * 0.55))
        r = int(BG_MID[0] * (1 - t) + BG_DARK[0] * t)
        g = int(BG_MID[1] * (1 - t) + BG_DARK[1] * t)
        b = int(BG_MID[2] * (1 - t) + BG_DARK[2] * t)
        px[x, y] = (r, g, b)

img = img.convert("RGBA")
glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(glow)
for r, a in [(420, 50), (300, 60), (180, 60)]:
    gd.ellipse((W/2 - r, H/2 - r, W/2 + r, H/2 + r), fill=(*ACCENT, a))
glow = glow.filter(ImageFilter.GaussianBlur(radius=110))
img = Image.alpha_composite(img, glow)

logo = Image.open(logo_file).convert("RGBA")
logo = logo.crop(logo.getbbox())
logo.thumbnail((140, 140), Image.LANCZOS)
# Stack icon above wordmark, centered vertically
title_font = ImageFont.truetype(font_bold, 128)
draw = ImageDraw.Draw(img)
vb = draw.textbbox((0, 0), "Vera", font=title_font)
db = draw.textbbox((0, 0), "Dial", font=title_font)
vw, dw = vb[2]-vb[0], db[2]-db[0]
tw = vw + dw
# Total height: logo + gap + text
gap = 30
text_h = title_font.size
block_h = logo.height + gap + text_h
block_y0 = (H - block_h) // 2
img.alpha_composite(logo, ((W - logo.width) // 2, block_y0))
tx = (W - tw) / 2
ty = block_y0 + logo.height + gap
draw.text((tx, ty), "Vera", font=title_font, fill=WHITE)
draw.text((tx + vw, ty), "Dial", font=title_font, fill=ACCENT)
img.save(sys.argv[1])
PY
}

# --- Shot renderer -----------------------------------------------------------
render_shot() {
  local out_file="$1"
  local base_png="$2"
  local bg_png="$3"
  local brand_png="$4"
  local eyebrow_png="$5"
  local title1_png="$6"
  local title2_png="$7"
  local sub_png="$8"
  local bullets_png="$9"
  local strip_png="${10}"
  local duration="${11}"
  local zoom_start="${12}"
  local zoom_end="${13}"
  local cx_frac="${14}"
  local cy_frac="${15}"
  local cy_end_frac="${16:-${cy_frac}}"

  local total_frames last_frame zoom_delta
  total_frames="$(awk "BEGIN { printf \"%d\", ${duration} * ${FPS} }")"
  last_frame="$((total_frames - 1))"
  zoom_delta="$(awk "BEGIN { print ${zoom_end} - ${zoom_start} }")"

  local phone_w phone_h phone_x phone_y
  phone_w="$(awk "BEGIN { printf \"%d\", 1080 * ${PHONE_SCALE} }")"
  phone_h="$(awk "BEGIN { printf \"%d\", 1920 * ${PHONE_SCALE} }")"
  phone_x="$((CANVAS_W - phone_w - PHONE_RIGHT_MARGIN))"
  phone_y="${PHONE_TOP}"

  local app_w app_h app_x app_y
  app_w="$(awk "BEGIN { printf \"%d\", 720 * ${PHONE_SCALE} }")"
  app_h="$(awk "BEGIN { printf \"%d\", 1482 * ${PHONE_SCALE} }")"
  app_x="$(awk "BEGIN { printf \"%d\", ${phone_x} + 180 * ${PHONE_SCALE} }")"
  app_y="$(awk "BEGIN { printf \"%d\", ${phone_y} + 402 * ${PHONE_SCALE} }")"

  local zoom_expr="${zoom_start}+${zoom_delta}*on/${last_frame}"
  local x_expr="${cx_frac}*iw-(iw/zoom)/2"
  local cy_delta
  cy_delta="$(awk "BEGIN { print ${cy_end_frac} - ${cy_frac} }")"
  local cy_expr="${cy_frac}+${cy_delta}*on/${last_frame}"
  local y_expr="(${cy_expr})*ih-(ih/zoom)/2"

  local fade_out_start
  fade_out_start="$(awk "BEGIN { print ${duration} - 0.3 }")"

  local FI_BRAND=0.00 FI_EYEBROW=0.15 FI_T1=0.30 FI_T2=0.45
  local FI_SUB=0.60 FI_BULL=0.75 FI_STRIP=0.90

  ffmpeg -y \
    -loop 1 -framerate "${FPS}" -t "${duration}" -i "${bg_png}" \
    -loop 1 -framerate "${FPS}" -t "${duration}" -i "${base_png}" \
    -loop 1 -framerate "${FPS}" -t "${duration}" -i "${BEZEL_FILE}" \
    -loop 1 -framerate "${FPS}" -t "${duration}" -i "${brand_png}" \
    -loop 1 -framerate "${FPS}" -t "${duration}" -i "${eyebrow_png}" \
    -loop 1 -framerate "${FPS}" -t "${duration}" -i "${title1_png}" \
    -loop 1 -framerate "${FPS}" -t "${duration}" -i "${title2_png}" \
    -loop 1 -framerate "${FPS}" -t "${duration}" -i "${sub_png}" \
    -loop 1 -framerate "${FPS}" -t "${duration}" -i "${bullets_png}" \
    -loop 1 -framerate "${FPS}" -t "${duration}" -i "${strip_png}" \
    -loop 1 -framerate "${FPS}" -t "${duration}" -i "${BACK_DIR}/phone-backing.png" \
    -filter_complex "\
[1:v]zoompan=z='${zoom_expr}':x='${x_expr}':y='${y_expr}':d=${total_frames}:s=1320x2868:fps=${FPS}[motion];\
[motion]scale=${app_w}:-2,crop=${app_w}:${app_h}:0:0[app];\
[10:v]scale=${phone_w}:${phone_h}:flags=lanczos[backing];\
[0:v][backing]overlay=${phone_x}:${phone_y}[bgb];\
[bgb][app]overlay=${app_x}:${app_y}[bai];\
[2:v]scale=${phone_w}:${phone_h}:flags=lanczos[bezel];\
[bai][bezel]overlay=${phone_x}:${phone_y}:format=auto[framed];\
[3:v]fade=t=in:st=${FI_BRAND}:d=0.3:alpha=1[l_brand];\
[4:v]fade=t=in:st=${FI_EYEBROW}:d=0.3:alpha=1[l_eye];\
[5:v]fade=t=in:st=${FI_T1}:d=0.3:alpha=1[l_t1];\
[6:v]fade=t=in:st=${FI_T2}:d=0.3:alpha=1[l_t2];\
[7:v]fade=t=in:st=${FI_SUB}:d=0.3:alpha=1[l_sub];\
[8:v]fade=t=in:st=${FI_BULL}:d=0.3:alpha=1[l_bull];\
[9:v]fade=t=in:st=${FI_STRIP}:d=0.3:alpha=1[l_strip];\
[framed][l_brand]overlay=0:0:format=auto[f1];\
[f1][l_eye]overlay=0:0:format=auto[f2];\
[f2][l_t1]overlay=0:0:format=auto[f3];\
[f3][l_t2]overlay=0:0:format=auto[f4];\
[f4][l_sub]overlay=0:0:format=auto[f5];\
[f5][l_bull]overlay=0:0:format=auto[f6];\
[f6][l_strip]overlay=0:0:format=auto,fade=t=out:st=${fade_out_start}:d=0.3[v]" \
    -map "[v]" -an -frames:v "${total_frames}" \
    -c:v libx264 -crf "${VIDEO_CRF}" -preset "${VIDEO_PRESET}" -pix_fmt yuv420p -r "${FPS}" \
    -movflags +faststart "${out_file}"
}

render_wordmark_shot() {
  local out_file="$1"
  local duration="$2"
  local card_png="${SHOTS_DIR}/wordmark.png"
  render_wordmark_still "${card_png}"
  ffmpeg -y \
    -loop 1 -framerate "${FPS}" -t "${duration}" -i "${card_png}" \
    -vf "fade=t=in:st=0:d=0.3" \
    -c:v libx264 -crf "${VIDEO_CRF}" -preset "${VIDEO_PRESET}" -pix_fmt yuv420p -r "${FPS}" \
    -movflags +faststart "${out_file}"
}

# --- Run ---------------------------------------------------------------------
echo "→ Rendering bg backplate"
render_backplate_bg "${BACK_DIR}/bg.png"

echo "→ Rendering phone backing"
render_phone_backing "${BACK_DIR}/phone-backing.png"

for i in 0 1 2 3; do
  n="${SHOT_NAMES[$i]}"
  echo "→ Rendering shot ${n} text layers"
  render_brand_layer    "${BACK_DIR}/${n}-brand.png"    "${SHOT_BRAND_SUFFIX[$i]}"
  render_eyebrow_layer  "${BACK_DIR}/${n}-eyebrow.png"
  render_title1_layer   "${BACK_DIR}/${n}-title1.png"   "${SHOT_TITLE1[$i]}"
  render_title2_layer   "${BACK_DIR}/${n}-title2.png"   "${SHOT_TITLE2[$i]}"
  render_subtitle_layer "${BACK_DIR}/${n}-sub.png"      "${SHOT_SUB1[$i]}" ""
  render_bullets_layer  "${BACK_DIR}/${n}-bullets.png"  "${SHOT_BULLETS[$i]}"
  render_strip_layer    "${BACK_DIR}/${n}-strip.png"    "${SHOT_STRIP[$i]}"
done

for i in 0 1 2 3; do
  n="${SHOT_NAMES[$i]}"
  echo "→ Rendering shot ${n} (${SHOT_SEGMENT[$i]})"
  render_shot \
    "${SHOTS_DIR}/${n}.mp4" \
    "${BASE_DIR}/${SHOT_BASES[$i]}" \
    "${BACK_DIR}/bg.png" \
    "${BACK_DIR}/${n}-brand.png" \
    "${BACK_DIR}/${n}-eyebrow.png" \
    "${BACK_DIR}/${n}-title1.png" \
    "${BACK_DIR}/${n}-title2.png" \
    "${BACK_DIR}/${n}-sub.png" \
    "${BACK_DIR}/${n}-bullets.png" \
    "${BACK_DIR}/${n}-strip.png" \
    "${SHOT_DURATIONS[$i]}" \
    "${SHOT_ZOOM_START[$i]}" \
    "${SHOT_ZOOM_END[$i]}" \
    "${SHOT_CX_FRAC[$i]}" \
    "${SHOT_CY_FRAC[$i]}" \
    "${SHOT_CY_END[$i]}"
done

echo "→ Rendering intro card (00)"
render_wordmark_shot "${SHOTS_DIR}/00.mp4" 1

echo "→ Rendering end card (05)"
render_wordmark_shot "${SHOTS_DIR}/05.mp4" 1

echo "→ Concatenating"
SILENT_MASTER="${BUILD_DIR}/veradial-preview-master-landscape-silent.mp4"
ffmpeg -y \
  -i "${SHOTS_DIR}/00.mp4" \
  -i "${SHOTS_DIR}/01.mp4" \
  -i "${SHOTS_DIR}/02.mp4" \
  -i "${SHOTS_DIR}/03.mp4" \
  -i "${SHOTS_DIR}/04.mp4" \
  -i "${SHOTS_DIR}/05.mp4" \
  -filter_complex "\
[0:v][1:v]xfade=transition=fade:duration=0.25:offset=0.75[v00];\
[v00][2:v]xfade=transition=fade:duration=0.25:offset=4.50[v01];\
[v01][3:v]xfade=transition=fade:duration=0.25:offset=9.25[v02];\
[v02][4:v]xfade=transition=fade:duration=0.25:offset=17.00[v03];\
[v03][5:v]xfade=transition=fade:duration=0.25:offset=20.75[v]" \
  -map "[v]" -an \
  -c:v libx264 -crf "${VIDEO_CRF}" -preset "${VIDEO_PRESET}" -pix_fmt yuv420p -r "${FPS}" \
  -movflags +faststart "${SILENT_MASTER}"

MASTER="${BUILD_DIR}/veradial-preview-master-landscape.mp4"
if [[ -f "${MUSIC_FILE}" ]]; then
  echo "→ Muxing music into master"
  DURATION="$(ffprobe -v error -show_entries format=duration -of default=nw=1:nk=1 "${SILENT_MASTER}")"
  FADE_OUT_START="$(awk "BEGIN { print ${DURATION} - 2.0 }")"
  ffmpeg -y \
    -i "${SILENT_MASTER}" \
    -ss 29 -i "${MUSIC_FILE}" \
    -filter_complex "[1:a]atrim=0:${DURATION},asetpts=PTS-STARTPTS,afade=t=in:st=0:d=1,afade=t=out:st=${FADE_OUT_START}:d=2,loudnorm=I=-16:TP=-1.5:LRA=7,aresample=48000[a]" \
    -map 0:v -map "[a]" \
    -c:v copy -c:a aac -b:a 192k -ar 48000 -shortest -movflags +faststart "${MASTER}"
else
  echo "⚠ ${MUSIC_FILE} not found — skipping audio mux."
  cp "${SILENT_MASTER}" "${MASTER}"
fi

echo
echo "Silent master (landscape): ${SILENT_MASTER}"
echo "Master (landscape, audio): ${MASTER}"
ls -lh "${SILENT_MASTER}" "${MASTER}"

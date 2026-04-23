#!/usr/bin/env bash
# Purpose-built 1280×720 YouTube thumbnail. Phone on right, big headline left,
# VeraDial wordmark top-left. Matches the landscape video's design language
# but optimized for tiny thumbnail display (legible at 120px wide).

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ASSETS_DIR="${SCRIPT_DIR}/assets"
BUILD_DIR="${SCRIPT_DIR}/build"
BASE_DIR="${BUILD_DIR}/base"
FONT_BOLD="${ASSETS_DIR}/Poppins-Bold.ttf"
FONT_SEMIBOLD="${ASSETS_DIR}/Poppins-SemiBold.ttf"
LOGO_FILE="${ASSETS_DIR}/logo.png"
BEZEL_FILE="${ASSETS_DIR}/iphone-frame.png"
APP_SCREEN="${BASE_DIR}/01-numbers.png"
OUT_PNG="${BUILD_DIR}/youtube-thumbnail.png"

for f in "${FONT_BOLD}" "${FONT_SEMIBOLD}" "${LOGO_FILE}" "${BEZEL_FILE}" "${APP_SCREEN}"; do
  [[ -f "$f" ]] || { echo "Missing: $f" >&2; exit 1; }
done

OUT_PNG="${OUT_PNG}" FONT_BOLD="${FONT_BOLD}" FONT_SEMIBOLD="${FONT_SEMIBOLD}" \
LOGO_FILE="${LOGO_FILE}" BEZEL_FILE="${BEZEL_FILE}" APP_SCREEN="${APP_SCREEN}" \
python3 <<'PY'
import os, math
from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 1280, 720
OUT = os.environ["OUT_PNG"]
FONT_BOLD = os.environ["FONT_BOLD"]
FONT_SEMI = os.environ["FONT_SEMIBOLD"]
LOGO_FILE = os.environ["LOGO_FILE"]
BEZEL_FILE = os.environ["BEZEL_FILE"]
APP_SCREEN = os.environ["APP_SCREEN"]

BG_DARK = (3, 6, 12)
BG_MID  = (24, 38, 62)
ACCENT  = (0, 212, 170)
WHITE   = (255, 255, 255)
LABEL_GRAY = (170, 185, 205)
SUFFIX_GRAY = (155, 170, 190)

# Phone geometry — right-anchored, large enough to read app content at thumb size
phone_scale = 0.32  # 1080x1920 * 0.32 = 346x614
phone_w = int(1080 * phone_scale)
phone_h = int(1920 * phone_scale)
phone_right_margin = 80
phone_x = W - phone_w - phone_right_margin
phone_y = (H - phone_h) // 2 - 10
phone_cx = phone_x + phone_w // 2
phone_cy = phone_y + phone_h // 2

# --- Background gradient, lit from phone center ---
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

# --- Concentric rings (subtle, behind phone) ---
rings = Image.new("RGBA", (W, H), (0, 0, 0, 0))
rd = ImageDraw.Draw(rings)
for radius in (220, 320, 440, 560):
    rd.ellipse(
        (phone_cx - radius, phone_cy - radius, phone_cx + radius, phone_cy + radius),
        outline=(*ACCENT, 60),
        width=2,
    )
rings = rings.filter(ImageFilter.GaussianBlur(radius=1.2))
img = Image.alpha_composite(img, rings)

# --- Teal halo glow ---
glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(glow)
for radius, alpha in [(320, 28), (220, 36), (150, 40)]:
    gd.ellipse(
        (phone_cx - radius, phone_cy - radius, phone_cx + radius, phone_cy + radius),
        fill=(*ACCENT, alpha),
    )
glow = glow.filter(ImageFilter.GaussianBlur(radius=100))
img = Image.alpha_composite(img, glow)

# --- Drop shadow beneath phone ---
shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(shadow)
shadow_y = phone_y + phone_h - 12
sw = int(phone_w * 0.9)
sd.ellipse((phone_cx - sw//2, shadow_y, phone_cx + sw//2, shadow_y + 36), fill=(0, 0, 0, 180))
shadow = shadow.filter(ImageFilter.GaussianBlur(radius=18))
img = Image.alpha_composite(img, shadow)

# --- Phone body backing (solid black rounded-rect) ---
backing_native = Image.new("RGBA", (1080, 1920), (0, 0, 0, 0))
bd = ImageDraw.Draw(backing_native)
bd.rounded_rectangle((165, 335, 915, 1920), radius=92, fill=(0, 0, 0, 255))
backing = backing_native.resize((phone_w, phone_h), Image.LANCZOS)
img.alpha_composite(backing, (phone_x, phone_y))

# --- App screenshot (cropped to screen area) ---
app_native = Image.open(APP_SCREEN).convert("RGBA")
# Scale to phone screen width (720 native), crop to screen height (1482 native)
screen_w_native = 720
screen_h_native = 1482
src_aspect = app_native.width / app_native.height
target_aspect = screen_w_native / screen_h_native
# Scale so width fits 720 native
scale = screen_w_native / app_native.width
new_w = screen_w_native
new_h = int(app_native.height * scale)
app_scaled = app_native.resize((new_w, new_h), Image.LANCZOS)
# Crop from top to screen height
app_cropped = app_scaled.crop((0, 0, screen_w_native, screen_h_native))
# Now scale to thumbnail-target size
app_w_t = int(screen_w_native * phone_scale)
app_h_t = int(screen_h_native * phone_scale)
app_final = app_cropped.resize((app_w_t, app_h_t), Image.LANCZOS)
app_x = phone_x + int(180 * phone_scale)
app_y = phone_y + int(402 * phone_scale)
img.alpha_composite(app_final, (app_x, app_y))

# --- Bezel on top ---
bezel = Image.open(BEZEL_FILE).convert("RGBA").resize((phone_w, phone_h), Image.LANCZOS)
img.alpha_composite(bezel, (phone_x, phone_y))

# --- Text elements on left ---
draw = ImageDraw.Draw(img)
TEXT_X = 60

# Brand row (logo + VeraDial + accent dot + suffix)
logo = Image.open(LOGO_FILE).convert("RGBA")
logo = logo.crop(logo.getbbox())
logo.thumbnail((56, 56), Image.LANCZOS)
brand_y = 50
img.alpha_composite(logo, (TEXT_X, brand_y))
brand_font = ImageFont.truetype(FONT_BOLD, 36)
bx = TEXT_X + logo.width + 20
wordmark_y = brand_y + (logo.height - 36) // 2 - 2
vb = draw.textbbox((0, 0), "Vera", font=brand_font)
vw = vb[2] - vb[0]
draw.text((bx, wordmark_y), "Vera", font=brand_font, fill=WHITE)
draw.text((bx + vw, wordmark_y), "Dial", font=brand_font, fill=ACCENT)

# Big headline (split white/accent) — tight 2 lines
title_font = ImageFont.truetype(FONT_BOLD, 90)
line_h = 96
title_y = 200
draw.text((TEXT_X, title_y), "Your business.", font=title_font, fill=WHITE)
draw.text((TEXT_X, title_y + line_h), "Your numbers.", font=title_font, fill=ACCENT)

# Subtitle (supporting gray)
sub_font = ImageFont.truetype(FONT_SEMI, 30)
draw.text((TEXT_X, title_y + line_h * 2 + 30), "AI-powered business calling.", font=sub_font, fill=LABEL_GRAY)

img.convert("RGB").save(OUT, quality=92, optimize=True)
print(f"Thumbnail: {OUT}")
PY

ls -lh "${OUT_PNG}"

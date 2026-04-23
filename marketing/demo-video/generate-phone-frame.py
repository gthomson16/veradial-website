#!/usr/bin/env python3
"""Generate the phone bezel overlay used by render.sh."""

from pathlib import Path

from PIL import Image

HERE = Path(__file__).resolve().parent
BEZEL_SRC = HERE / "assets" / "apple-bezels" / "iphone-17-pro-max-silver.png"
OUT = HERE / "assets" / "iphone-frame.png"

CANVAS_W, CANVAS_H = 1080, 1920
APP_W, APP_H = 720, 1567
APP_X = (CANVAS_W - APP_W) // 2
APP_Y = 320

BEZEL_SRC_W, BEZEL_SRC_H = 1470, 3000
SCREEN_INSET_X = 75
SCREEN_INSET_Y = 66


def main() -> None:
    if not BEZEL_SRC.exists():
        raise SystemExit(f"bezel source missing: {BEZEL_SRC}")

    scale = APP_W / 1320
    scaled_w = round(BEZEL_SRC_W * scale)
    scaled_h = round(BEZEL_SRC_H * scale)

    bezel = Image.open(BEZEL_SRC).convert("RGBA").resize(
        (scaled_w, scaled_h), Image.LANCZOS
    )

    canvas = Image.new("RGBA", (CANVAS_W, CANVAS_H), (0, 0, 0, 0))
    offset_x = APP_X - round(SCREEN_INSET_X * scale)
    offset_y = APP_Y - round(SCREEN_INSET_Y * scale)
    canvas.alpha_composite(bezel, (offset_x, offset_y))

    OUT.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(OUT)
    print(
        f"wrote {OUT} ({CANVAS_W}x{CANVAS_H}) "
        f"bezel {scaled_w}x{scaled_h} at ({offset_x},{offset_y})"
    )


if __name__ == "__main__":
    main()

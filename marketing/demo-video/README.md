## Demo Video Workflow

Repo-local render pipeline for the shorter product demo cut.

### Dependencies

- `ffmpeg`
- `python3`
- Pillow: `python3 -m pip install Pillow`

### Layout

- `assets/` — logo, fonts, bezel assets
- `input/clips/` — source screen recordings
- `input/narration.m4a` — narration track
- `input/voiceover.txt` — current script copy
- `build/` — generated outputs (ignored)

### Commands

- `npm run video:frame` — regenerate `assets/iphone-frame.png`
- `npm run video:render` — render the silent + narrated demo cuts
- `npm run video:mix -- /absolute/path/to/music-file` — add background music to the rendered cuts

### Outputs

`npm run video:render` writes:

- `marketing/demo-video/build/veradial-demo-vertical.mp4`
- `marketing/demo-video/build/veradial-demo-vertical-silent.mp4`
- `marketing/demo-video/build/veradial-demo-widescreen.mp4`
- `marketing/demo-video/build/veradial-demo-widescreen-silent.mp4`

This pipeline is separate from the current 60-second explainer in `marketing/explainer/`.

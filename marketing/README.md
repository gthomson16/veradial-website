## Marketing Video

This repo now owns the local marketing video workflow.

- `explainer/` holds the current exported 60-second explainer assets.
- `demo-video/` holds the editable ffmpeg/Pillow pipeline and source inputs for the shorter product demo cut.

Notes:

- The homepage currently embeds YouTube, not these local MP4 files.
- `public/veradial-explainer*.mp4` remains ignored in git. Use `npm run video:sync-public` if you want local copies in `public/` for uploads or manual testing.
- The current 60-second explainer only exists as exported MP4s here. The checked-in render pipeline is for the shorter `demo-video` cut.

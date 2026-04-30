## Marketing Video

This repo now owns the local marketing video workflow.

- `explainer/` holds the editable 16:9 60-second explainer render source.
- `explainer-vertical/` holds the editable 9:16 60-second explainer render source.
- `demo-video/` holds the editable ffmpeg/Pillow pipeline and source inputs for shorter product demo and app-preview cuts.

Notes:

- The homepage currently embeds YouTube, not these local MP4 files.
- Generated MP4s stay ignored in git. Use `npm run video:sync-public` if you want local copies in `public/` for uploads or manual testing.
- The checked-in explainer folders contain source assets and render scripts; rendered videos should be uploaded or stored outside git.

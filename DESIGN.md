---
name: VeraDial Website
version: 1.0.0
description: >
  Canonical design tokens and brand guidance for veradial.com. The token
  values below are generated from src/app/globals.css — do not hand-edit the
  colors block. Run `npm run design:sync` after changing globals.css.

# ---- Canonical token layer (exportable by @google/design.md) ----

colors:
  bg: "#07111d"
  surface: "#0d1b2e"
  card: "#11243a"
  card-hover: "#17314f"
  accent: "#73f2c3"
  accent-secondary: "#ffbf69"
  text-primary: "#f5f7fb"
  text-secondary: "#97abc1"
  text-muted: "#7b92a9"
  primary: "#73f2c3"
  on-accent: "#07111d"
  on-bg: "#f5f7fb"

effects:
  accent-glow: "#73f2c347"
  border: "#ffffff14"

typography:
  display:
    fontFamily: Clash Display, system-ui, sans-serif
  body:
    fontFamily: Satoshi, system-ui, sans-serif
  h1:
    fontFamily: Clash Display, system-ui, sans-serif
    fontSize: 3.75rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  h2:
    fontFamily: Clash Display, system-ui, sans-serif
    fontSize: 2.5rem
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  h3:
    fontFamily: Clash Display, system-ui, sans-serif
    fontSize: 1.75rem
    fontWeight: 600
    lineHeight: 1.2
  body-lg:
    fontFamily: Satoshi, system-ui, sans-serif
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: Satoshi, system-ui, sans-serif
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Satoshi, system-ui, sans-serif
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5
  label-sm:
    fontFamily: Satoshi, system-ui, sans-serif
    fontSize: 0.75rem
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.02em"

rounded:
  sm: 6px
  md: 12px
  lg: 16px
  xl: 24px
  full: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  "2xl": 64px
  section-y-mobile: 56px
  section-y-desktop: 96px

components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 14px 22px
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.text-primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 14px 22px
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.accent}"
    typography: "{typography.label-sm}"
    padding: 10px 14px
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: 24px
  card-hover:
    backgroundColor: "{colors.card-hover}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: 24px
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: 12px 16px
  badge-verified:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.full}"
    padding: 4px 10px

# ---- Extension metadata (not part of the canonical schema) ----

brand:
  product: VeraDial
  domain: veradial.com
  one_liner: AI-powered business calling. Your AI assistant makes calls so you don't have to.
  category: Business phone / second-line app with AI outbound calling
  audience: Freelancers, solopreneurs, small business owners, contractors, sales pros who work from their phone
  tone: [confident, practical, warm, non-hypey, no-spoofing]
  avoid_language: [spoof, prank, fake caller id, burner, untraceable, robocall]

source_of_truth:
  tokens: src/app/globals.css
  copy_facts: ../VeraDial/website.md
  marketing_context: docs/agent/product-marketing-context.md
  sync_command: npm run design:sync

ai_generation:
  image_style_prompt: >
    Deep navy (#07111d, #0d1b2e) environment with soft volumetric light.
    Mint-teal (#73f2c3) as a signal/accent color used sparingly — a glow, a
    highlight edge, a verified checkmark, never a flood. Optional warm amber
    (#ffbf69) for human touchpoints (a hand, a ceramic mug, warm window light).
    Professional small-business context (tradespeople on a job, a realtor in a
    car, a solo operator at a desk). Photographic, shallow depth of field,
    35mm-equivalent feel. No neon, no cyberpunk, no stock-photo gloss, no
    generic AI-assistant robot imagery. No text overlays unless specified.
  video_style_prompt: >
    Quiet, confident product-explainer tone. Real-world small-business
    settings. Mint-teal UI accents appear only on the phone screen, not in
    the environment. Motion is slow and considered — dolly-ins, steady
    handheld, phone-mockup pushes. No whip pans, no beat-drop edits.
  forbidden:
    - Pure black (#000) backgrounds
    - Neon or cyberpunk aesthetics
    - Generic humanoid AI robots or "Her"-style floating orbs
    - Spoofing, prank, or anonymity imagery
    - Teal floods on large surfaces (keep accent under ~10% of frame)
---

# VeraDial Website — DESIGN.md

Canonical design reference for humans and AI agents (Claude, Codex, image/video
models) working in this repo. The token layer in the front matter is the
source of truth *for this file*; the **ultimate source of truth for colors is
`src/app/globals.css`**. Run `npm run design:sync` after editing the
`@theme` block to regenerate the `colors:` section here.

## Overview

VeraDial's website is dark-only, navy-based, with a mint-teal signal color.
The moodier palette is a deliberate contrast to the mobile app, which uses
a brighter teal (`#00D4AA`) and supports light + dark modes. Do not "sync"
them without an explicit brand decision.

## Colors

1. **Backgrounds are navy, never black.** Use `bg` for page background, `surface` for section backgrounds, `card` / `card-hover` for raised surfaces.
2. **`accent` (`#73f2c3`) is a signal color, not decoration.** Reserve it for primary CTAs, verified/trust cues (STIR/SHAKEN badges, checkmarks), active states, and links on dark. If more than ~10–15% of a section is mint, something is wrong.
3. **`accent-secondary` (`#ffbf69`) is for warmth.** Use it for secondary highlights, testimonial accents, or emotional beats — not as a second CTA color. Never place next to `accent` in hover/pressed states.
4. **On-color tokens** (`on-accent`, `on-bg`) exist so button/surface pairings don't drift. Use them rather than re-picking `text-primary` manually.
5. **Contrast floors (WCAG AA, normal text = 4.5:1):**
   - `text-primary` on `bg` — 15.8:1 ✅
   - `text-primary` on `card` — 12.3:1 ✅
   - `text-secondary` on `bg` — 6.9:1 ✅
   - `text-secondary` on `card-hover` — 4.7:1 ✅ (tight, OK)
   - `text-muted` on `card-hover` — **4.1:1 ❌ fails AA.** Not for body copy. Captions/meta only, or switch to `text-secondary`.

## Typography

- **Display faces** (`h1`–`h3`) use Clash Display. Headings are tight (`-0.02em` to `-0.015em`), bold (700) at `h1`/`h2`, semibold (600) at `h3`.
- **Body faces** use Satoshi. Default body copy is `body-md` (1rem / 1.6 line-height). Use `body-lg` for hero paragraphs, `body-sm` for supporting copy and tables.
- **Labels** (`label-sm`) are uppercase-feeling — semibold, 0.02em tracking — for buttons, nav items, and eyebrow text.

## Layout & Spacing

- Section padding: `section-y-mobile` (56px) / `section-y-desktop` (96px).
- Max content width: `max-w-6xl` (home), `max-w-4xl` (prose pages like privacy/terms).
- Card padding: `spacing.lg` (24px) minimum; hero cards get `spacing.xl` (40px).
- Grid gutters: `spacing.md` (16px) mobile, `spacing.lg` (24px) desktop.

## Components

Component definitions are in the front matter under `components:`. Rules of use:

- **Primary CTA per section: at most one.** Two mint-fill buttons side by side is a bug, not a choice.
- **`button-secondary`** is the companion to a primary CTA — ghost/outline style, `text-primary` on transparent.
- **`button-ghost`** is for tertiary actions inside dense UI (footer links, table actions). Mint text only, no background.
- **Cards default to `card`.** Only use `card-hover` on interactive cards, and only on `:hover` / `:focus-visible`.
- **`badge-verified`** is reserved for trust/verification UI — STIR/SHAKEN badges, "verified caller" pills. Do not reuse it as a generic pill.

## Do's and Don'ts

**Do:**
- Use Tailwind token classes (`bg-bg`, `text-accent`, `rounded-lg`) — never raw hex.
- Add new tokens to `globals.css` first, then run `npm run design:sync`.
- Treat mint as scarce. If in doubt, use `text-primary` or `text-secondary`.
- Keep copy confident and practical. Product does what it says.

**Don't:**
- Use the words *spoof*, *prank*, *burner*, *anonymous*, *untraceable*. VeraDial is the opposite of SpoofCard.
- Use pure black (`#000`) anywhere. Navy is the floor.
- Stack `accent` on `accent-secondary`. They clash at small sizes.
- Use `text-muted` for body copy on `card-hover` — it fails WCAG AA.
- Sync the website palette to the mobile app palette. The split is intentional.

## AI image and video generation

When prompting Gemini, nano-banana, Veo, Midjourney, or similar for marketing
visuals, prepend `ai_generation.image_style_prompt` or
`ai_generation.video_style_prompt` from the front matter, then describe the
scene.

**Good scene prompt:**
> `{image_style_prompt}` — A contractor in a work truck, phone in hand, answering a confirmed appointment. Mint-teal verified badge visible on the phone screen. Golden-hour amber light through the windshield. Shot on 35mm.

**Bad (do not use):**
> A futuristic AI assistant hologram making phone calls in a neon cityscape.

For app UI shots, use real captures from
`../VeraDial/packages/mobile/screenshots/` — do not synthesize UI.

## Maintenance

- **Source of truth is `src/app/globals.css`** for colors. `DESIGN.md`'s `colors:` block is generated.
- After editing the `@theme` block: run `npm run design:sync`, commit both files together.
- When the brand voice shifts: update this file and `docs/agent/product-marketing-context.md` in the same commit.
- When adding a new AI asset class (OG images, social clips, etc.): add a prompt template under `ai_generation:`.
- Validate with `npx @google/design.md lint DESIGN.md` before committing significant token changes.

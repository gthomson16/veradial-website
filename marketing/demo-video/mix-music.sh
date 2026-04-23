#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BUILD_DIR="${SCRIPT_DIR}/build"

if [[ $# -lt 1 ]]; then
  echo "Usage: $(basename "$0") /absolute/path/to/music-media" >&2
  exit 1
fi

MUSIC_FILE="$1"
VERTICAL_INPUT="${BUILD_DIR}/veradial-demo-vertical.mp4"
VERTICAL_SILENT_INPUT="${BUILD_DIR}/veradial-demo-vertical-silent.mp4"
WIDE_INPUT="${BUILD_DIR}/veradial-demo-widescreen.mp4"
WIDE_SILENT_INPUT="${BUILD_DIR}/veradial-demo-widescreen-silent.mp4"
VERTICAL_OUTPUT="${BUILD_DIR}/veradial-demo-vertical-music.mp4"
WIDE_OUTPUT="${BUILD_DIR}/veradial-demo-widescreen-music.mp4"
VERTICAL_MUSIC_ONLY_OUTPUT="${BUILD_DIR}/veradial-demo-vertical-music-only.mp4"
WIDE_MUSIC_ONLY_OUTPUT="${BUILD_DIR}/veradial-demo-widescreen-music-only.mp4"

require_file() {
  if [[ ! -f "$1" ]]; then
    echo "Missing required file: $1" >&2
    exit 1
  fi
}

require_file "${MUSIC_FILE}"
require_file "${VERTICAL_INPUT}"
require_file "${VERTICAL_SILENT_INPUT}"
require_file "${WIDE_INPUT}"
require_file "${WIDE_SILENT_INPUT}"

canonical_path() {
  python3 -c 'import os, sys; print(os.path.realpath(sys.argv[1]))' "$1"
}

MUSIC_SOURCE="${MUSIC_FILE}"
for candidate in \
  "${VERTICAL_OUTPUT}" \
  "${WIDE_OUTPUT}" \
  "${VERTICAL_MUSIC_ONLY_OUTPUT}" \
  "${WIDE_MUSIC_ONLY_OUTPUT}"; do
  if [[ "$(canonical_path "${MUSIC_FILE}")" == "$(canonical_path "${candidate}")" ]]; then
    MUSIC_SOURCE="$(mktemp /tmp/veradial-demo-music-source.XXXXXX)"
    cp "${MUSIC_FILE}" "${MUSIC_SOURCE}"
    trap 'rm -f "${MUSIC_SOURCE}"' EXIT
    break
  fi
done

duration_for() {
  ffprobe -v error -show_entries format=duration -of default=nw=1:nk=1 "$1"
}

mix_with_narration() {
  local input_video="$1"
  local output_video="$2"
  local duration
  local fade_out_start

  duration="$(duration_for "${input_video}")"
  fade_out_start="$(awk "BEGIN { print (${duration} > 2.5) ? ${duration} - 2.0 : 0 }")"

  ffmpeg -y \
    -i "${input_video}" \
    -i "${MUSIC_SOURCE}" \
    -filter_complex "[1:a]atrim=0:${duration},asetpts=PTS-STARTPTS,afade=t=in:st=0:d=1,afade=t=out:st=${fade_out_start}:d=2,loudnorm=I=-20:TP=-2:LRA=7,volume=0.45[music];[0:a][music]amix=inputs=2:weights='1 1':normalize=0[a]" \
    -map 0:v -map "[a]" \
    -c:v copy -c:a aac -b:a 192k -shortest -movflags +faststart "${output_video}"
}

mix_music_only() {
  local input_video="$1"
  local output_video="$2"
  local duration
  local fade_out_start

  duration="$(duration_for "${input_video}")"
  fade_out_start="$(awk "BEGIN { print (${duration} > 2.5) ? ${duration} - 2.0 : 0 }")"

  ffmpeg -y \
    -i "${input_video}" \
    -i "${MUSIC_SOURCE}" \
    -filter_complex "[1:a]atrim=0:${duration},asetpts=PTS-STARTPTS,afade=t=in:st=0:d=1,afade=t=out:st=${fade_out_start}:d=2,loudnorm=I=-15:TP=-1.5:LRA=7[a]" \
    -map 0:v -map "[a]" \
    -c:v copy -c:a aac -b:a 192k -shortest -movflags +faststart "${output_video}"
}

mix_with_narration "${VERTICAL_INPUT}" "${VERTICAL_OUTPUT}"
mix_with_narration "${WIDE_INPUT}" "${WIDE_OUTPUT}"
mix_music_only "${VERTICAL_SILENT_INPUT}" "${VERTICAL_MUSIC_ONLY_OUTPUT}"
mix_music_only "${WIDE_SILENT_INPUT}" "${WIDE_MUSIC_ONLY_OUTPUT}"

echo
echo "Rendered music-backed demo assets:"
echo "  ${VERTICAL_OUTPUT}"
echo "  ${WIDE_OUTPUT}"
echo "  ${VERTICAL_MUSIC_ONLY_OUTPUT}"
echo "  ${WIDE_MUSIC_ONLY_OUTPUT}"

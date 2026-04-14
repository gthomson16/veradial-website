#!/bin/bash
# Generate static Mapbox map images for area code pages
# Usage: MAPBOX_TOKEN=pk.xxx ./scripts/generate-maps.sh
#
# Uses Mapbox Static Images API with dark-v11 style
# Free tier: 50,000 requests/month

set -e

if [ -z "$MAPBOX_TOKEN" ]; then
  echo "Error: Set MAPBOX_TOKEN environment variable"
  echo "Get a free token at https://account.mapbox.com/access-tokens/"
  exit 1
fi

STYLE="mapbox/dark-v11"
WIDTH=800
HEIGHT=400
ZOOM=10
OUTDIR="public/maps"

mkdir -p "$OUTDIR"

declare -A CODES
CODES[212]="40.7128,-74.006"
CODES[310]="34.0522,-118.2437"
CODES[415]="37.7749,-122.4194"
CODES[305]="25.7617,-80.1918"
CODES[312]="41.8781,-87.6298"
CODES[512]="30.2672,-97.7431"
CODES[206]="47.6062,-122.3321"
CODES[416]="43.6532,-79.3832"
CODES[604]="49.2827,-123.1207"
CODES[702]="36.1699,-115.1398"

for CODE in "${!CODES[@]}"; do
  COORDS="${CODES[$CODE]}"
  LNG=$(echo "$COORDS" | cut -d, -f2)
  LAT=$(echo "$COORDS" | cut -d, -f1)
  URL="https://api.mapbox.com/styles/v1/${STYLE}/static/${LNG},${LAT},${ZOOM},0/${WIDTH}x${HEIGHT}@2x?access_token=${MAPBOX_TOKEN}&attribution=false&logo=false"

  echo "Fetching map for ${CODE}..."
  curl -sL "$URL" -o "${OUTDIR}/${CODE}.png"
done

echo "Done! Maps saved to ${OUTDIR}/"

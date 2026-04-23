import fs from "node:fs";
import path from "node:path";

const rootDir = path.resolve(import.meta.dirname, "..");
const sourceDir = path.join(rootDir, "marketing", "explainer");
const publicDir = path.join(rootDir, "public");

const files = [
  "veradial-explainer.mp4",
  "veradial-explainer-1080p60.mp4",
];

for (const file of files) {
  const source = path.join(sourceDir, file);
  const destination = path.join(publicDir, file);

  if (!fs.existsSync(source)) {
    console.error(`Missing source file: ${source}`);
    process.exitCode = 1;
    continue;
  }

  fs.copyFileSync(source, destination);
  console.log(`synced ${file}`);
}

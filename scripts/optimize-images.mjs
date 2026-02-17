import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";

const IMAGES_DIR = path.resolve("public/images");

const QUALITY_WEBP = 72;
const QUALITY_AVIF = 45;

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function optimizeOne(jpgPath) {
  const base = jpgPath.replace(/\.JPG$/i, "");
  const webpPath = `${base}.webp`;
  const avifPath = `${base}.avif`;

  const input = sharp(jpgPath, { failOn: "none" });

  if (!(await fileExists(webpPath))) {
    await input.clone().webp({ quality: QUALITY_WEBP }).toFile(webpPath);
  }

  if (!(await fileExists(avifPath))) {
    await input
      .clone()
      .avif({ quality: QUALITY_AVIF, effort: 4 })
      .toFile(avifPath);
  }
}

async function main() {
  const entries = await fs.readdir(IMAGES_DIR);
  const jpgs = entries
    .filter((name) => name.toLowerCase().endsWith(".jpg"))
    .map((name) => path.join(IMAGES_DIR, name));

  // Default: only optimize images used on the initial route (home)
  const defaultSet = new Set([
    path.join(IMAGES_DIR, "32162656.JPG"), // Hero LCP
    path.join(IMAGES_DIR, "32162735.JPG"), // Apartment card
    path.join(IMAGES_DIR, "32162845.JPG"), // Apartment card
  ]);

  const mode = process.argv[2] || "home";
  const targets = mode === "all" ? jpgs : jpgs.filter((p) => defaultSet.has(p));

  if (targets.length === 0) {
    console.log("No JPG images found to optimize.");
    return;
  }

  console.log(`Optimizing ${targets.length} image(s) (${mode})...`);

  for (const jpgPath of targets) {
    await optimizeOne(jpgPath);
  }

  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

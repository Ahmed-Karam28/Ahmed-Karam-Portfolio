import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const source = path.join(root, "public");
const output = path.join(source, "generated");
await mkdir(output, { recursive: true });
// Keep original captures intact. Generate smaller, cacheable derivatives at build time.
const sources = new Map();
for (const file of (await readdir(path.join(source, "projects"))).sort()) {
  if (/\.(png|jpe?g)$/i.test(file)) sources.set(path.parse(file).name, file);
}
await Promise.all(
  [...sources].map(async ([name, file]) => {
    await sharp(path.join(source, "projects", file))
      .rotate()
      .resize({ width: 1400, withoutEnlargement: true })
      .webp({ quality: 82, effort: 5 })
      .toFile(path.join(output, `${name}.webp`));
  }),
);
await sharp(path.join(source, "profile.jpg"))
  .rotate()
  .resize({ width: 640, withoutEnlargement: true })
  .webp({ quality: 85 })
  .toFile(path.join(output, "profile.webp"));
await sharp(path.join(output, "profile.webp"))
  .extract({ left: 140, top: 60, width: 340, height: 340 })
  .resize(200)
  .grayscale()
  .webp({ quality: 88 })
  .toFile(path.join(output, "headshot.webp"));
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#0B0B0C"/><path d="M70 534H1130" stroke="#343436"/><text x="194" y="119" fill="#F2F0EA" font-family="sans-serif" font-size="40" font-weight="500" letter-spacing="-1">Ahmed Karam</text><text x="196" y="153" fill="#AAA8A2" font-family="sans-serif" font-size="17">Software Engineering / Cairo</text><text x="1130" y="117" text-anchor="end" fill="#92908B" font-family="monospace" font-size="15" letter-spacing="2">PORTFOLIO 2026</text><text x="70" y="308" fill="#F2F0EA" font-family="sans-serif" font-size="82" font-weight="500" letter-spacing="-4">Web interfaces.</text><text x="70" y="406" fill="#AAA8A2" font-family="sans-serif" font-size="82" font-weight="500" letter-spacing="-4">Systems thinking.</text><text x="70" y="482" fill="#C9A96A" font-family="sans-serif" font-size="21">React / Next.js / Linux / Automation</text><text x="70" y="580" fill="#92908B" font-family="monospace" font-size="15" letter-spacing="2">SELECTED WORK / ENGINEERING PORTFOLIO</text></svg>`;
const portrait = await sharp(path.join(output, "headshot.webp"))
  .resize(96, 96)
  .ensureAlpha()
  .composite([
    {
      input: Buffer.from(
        '<svg width="96" height="96"><circle cx="48" cy="48" r="48" fill="white"/></svg>',
      ),
      blend: "dest-in",
    },
  ])
  .png()
  .toBuffer();
await sharp(Buffer.from(og))
  .composite([{ input: portrait, left: 70, top: 74 }])
  .png()
  .toFile(path.join(output, "og-image.png"));
console.log(`Prepared ${sources.size + 3} optimized portfolio assets.`);

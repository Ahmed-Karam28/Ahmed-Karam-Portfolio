import sharp from "sharp";
import { readdir, mkdir, readFile } from "node:fs/promises";
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
const portrait = (await readFile(path.join(output, "profile.webp"))).toString(
  "base64",
);
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#0B0B0C"/><path d="M70 68H1130M70 555H1130" stroke="#343436"/><text x="70" y="112" fill="#C9A96A" font-family="sans-serif" font-size="15" letter-spacing="3">SOFTWARE ENGINEERING / CAIRO</text><text x="70" y="240" fill="#F2F0EA" font-family="sans-serif" font-size="74" font-weight="500" letter-spacing="-3">Ahmed Karam.</text><text x="70" y="329" fill="#F2F0EA" font-family="sans-serif" font-size="43" letter-spacing="-1">From interface</text><text x="70" y="388" fill="#E3C98F" font-family="serif" font-style="italic" font-size="56" letter-spacing="-1">to infrastructure.</text><text x="70" y="477" fill="#AAA8A2" font-family="sans-serif" font-size="19">Full-stack development / Linux systems</text><rect x="861" y="148" width="270" height="337" fill="#151619" stroke="#343436"/><image href="data:image/webp;base64,${portrait}" x="869" y="156" width="254" height="321" preserveAspectRatio="xMidYMid slice"/><text x="70" y="593" fill="#92908B" font-family="sans-serif" font-size="14">SELECTED WORK / ENGINEERING PORTFOLIO</text></svg>`;
await sharp(Buffer.from(og)).png().toFile(path.join(output, "og-image.png"));
console.log(`Prepared ${sources.size + 2} optimized portfolio assets.`);

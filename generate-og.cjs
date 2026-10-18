const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="topGlow" cx="50%" cy="0%" r="60%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.08" />
      <stop offset="60%" stop-color="#ffffff" stop-opacity="0.01" />
      <stop offset="100%" stop-color="#0A0A0A" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="cornerGlow" cx="10%" cy="100%" r="50%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.03" />
      <stop offset="100%" stop-color="#0A0A0A" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Solid Dark Background -->
  <rect width="1200" height="630" fill="#0A0A0A" />

  <!-- Ambient Glows -->
  <rect width="1200" height="400" fill="url(#topGlow)" />
  <rect width="1200" height="630" fill="url(#cornerGlow)" />

  <!-- Glass Inner Frame -->
  <rect x="48" y="48" width="1104" height="534" rx="28" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1.5" />

  <!-- Top Metadata Row -->
  <text x="100" y="116" fill="#888888" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="600" letter-spacing="4">AHMED KARAM</text>

  <!-- Status Pill -->
  <g transform="translate(775, 94)">
    <rect width="275" height="34" rx="17" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.1)" stroke-width="1" />
    <circle cx="20" cy="17" r="4" fill="#34d399" />
    <text x="34" y="22" fill="#D4D4D4" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="600" letter-spacing="1">SYSTEMS • CLOUD ARCHITECTURE</text>
  </g>

  <!-- Main H1 Headline -->
  <text x="100" y="236" fill="#FFFFFF" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="52" font-weight="700" letter-spacing="-1.2">Building Scalable Web Applications &amp;</text>
  <text x="100" y="298" fill="#FFFFFF" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="52" font-weight="700" letter-spacing="-1.2">The Infrastructure Behind Them.</text>

  <!-- Subtitle Paragraph -->
  <text x="100" y="365" fill="#888888" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="400">Software Engineering student bridging modern Full-Stack development</text>
  <text x="100" y="396" fill="#888888" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="400">with resilient Linux system administration and cloud architecture.</text>

  <!-- Bottom Divider Line -->
  <line x1="100" y1="465" x2="1100" y2="465" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1" />

  <!-- Bottom Tags & Link -->
  <text x="100" y="508" fill="#A3A3A3" font-family="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" font-size="14" font-weight="500" letter-spacing="1">FULL-STACK  •  CLOUD  •  DEVOPS  •  LINUX</text>
  <text x="1100" y="508" text-anchor="end" fill="#525252" font-family="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" font-size="14">ahmed-portofolio.vercel.app</text>
</svg>
`;

async function generate() {
  const outputPath = path.join(__dirname, 'public', 'og-image.png');
  await sharp(Buffer.from(svg))
    .png()
    .toFile(outputPath);
  console.log('Successfully generated clean dark-mode og-image.png at:', outputPath);
}

generate().catch(console.error);

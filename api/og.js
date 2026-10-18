export const config = {
  runtime: 'edge',
};

export default async function handler() {
  // Generate polished SVG image for OG with ShieldCheck icon
  const svg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Enhanced gradients for smoother orbs -->
        <radialGradient id="orb1" cx="50%" cy="50%">
          <stop offset="0%" style="stop-color:rgba(6, 182, 212, 0.2);stop-opacity:1" />
          <stop offset="50%" style="stop-color:rgba(6, 182, 212, 0.08);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgba(6, 182, 212, 0);stop-opacity:0" />
        </radialGradient>
        <radialGradient id="orb2" cx="50%" cy="50%">
          <stop offset="0%" style="stop-color:rgba(59, 130, 246, 0.15);stop-opacity:1" />
          <stop offset="50%" style="stop-color:rgba(59, 130, 246, 0.06);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgba(59, 130, 246, 0);stop-opacity:0" />
        </radialGradient>
        <radialGradient id="orb3" cx="50%" cy="50%">
          <stop offset="0%" style="stop-color:rgba(168, 85, 247, 0.12);stop-opacity:1" />
          <stop offset="50%" style="stop-color:rgba(168, 85, 247, 0.04);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgba(168, 85, 247, 0);stop-opacity:0" />
        </radialGradient>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#06b6d4" />
          <stop offset="50%" style="stop-color:#3b82f6" />
          <stop offset="100%" style="stop-color:#8b5cf6" />
        </linearGradient>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#020617" />
          <stop offset="50%" style="stop-color:#0a1628" />
          <stop offset="100%" style="stop-color:#020617" />
        </linearGradient>
        <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1.2" fill="rgba(6, 182, 212, 0.15)" />
        </pattern>
        <!-- Subtle vignette -->
        <radialGradient id="vignette" cx="50%" cy="50%">
          <stop offset="0%" style="stop-color:rgba(2, 6, 23, 0);stop-opacity:0" />
          <stop offset="100%" style="stop-color:rgba(2, 6, 23, 0.5);stop-opacity:1" />
        </radialGradient>
      </defs>
      
      <!-- Background with gradient -->
      <rect width="1200" height="630" fill="url(#bgGradient)" />
      
      <!-- Larger, more diffused orbs -->
      <ellipse cx="350" cy="100" rx="300" ry="300" fill="url(#orb1)" />
      <ellipse cx="1000" cy="250" rx="280" ry="280" fill="url(#orb2)" />
      <ellipse cx="600" cy="550" rx="240" ry="240" fill="url(#orb3)" />
      
      <!-- Dot pattern overlay -->
      <rect width="1200" height="630" fill="url(#dots)" opacity="0.25" />
      
      <!-- Vignette -->
      <rect width="1200" height="630" fill="url(#vignette)" />
      
      <!-- Top decorative line with glow -->
      <line x1="1050" y1="60" x2="1115" y2="60" stroke="#06b6d4" stroke-width="2" opacity="0.8" />
      <text x="1125" y="67" font-family="'Courier New', monospace" font-size="15" font-weight="600" fill="#06b6d4" letter-spacing="1">PORTFOLIO 2026</text>
      
      <!-- Brand icon background with glow -->
      <rect x="80" y="120" width="52" height="52" rx="13" fill="rgba(6, 182, 212, 0.12)" stroke="rgba(6, 182, 212, 0.4)" stroke-width="1.5" />
      
      <!-- ShieldCheck icon (matching lucide-react) -->
      <g transform="translate(106, 146) scale(1.4)">
        <path d="M 0 -10 L 0 -14 L -6 -16 L 6 -16 L 0 -14 Z M -6 -16 L -6 -10 C -6 -6 0 -2 0 -2 C 0 -2 6 -6 6 -10 L 6 -16" 
              fill="none" stroke="#3b82f6" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <polyline points="-3,-10 -1,-8 3,-12" fill="none" stroke="#3b82f6" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
      </g>
      
      <!-- Brand text with better spacing -->
      <text x="145" y="156" font-family="'Inter', system-ui, sans-serif" font-size="30" font-weight="800" fill="white" letter-spacing="-1">
        AHMED<tspan fill="#64748b">.SEC</tspan>
      </text>
      
      <!-- Status indicator with glow -->
      <circle cx="84" cy="200" r="5" fill="#06b6d4">
        <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="84" cy="200" r="8" fill="none" stroke="#06b6d4" stroke-width="1" opacity="0.3" />
      <text x="102" y="206" font-family="'Courier New', monospace" font-size="16" font-weight="500" fill="#06b6d4" letter-spacing="0.5">System Active • Cairo, EG</text>
      
      <!-- Main heading with better positioning -->
      <text x="80" y="295" font-family="'Inter', system-ui, sans-serif" font-size="76" font-weight="800" fill="white" letter-spacing="-3">AHMED</text>
      <text x="80" y="380" font-family="'Inter', system-ui, sans-serif" font-size="76" font-weight="800" fill="url(#gradient)" letter-spacing="-3">KARAM</text>
      
      <!-- Subtitle with improved readability -->
      <text x="80" y="432" font-family="'Inter', system-ui, sans-serif" font-size="24" fill="#94a3b8" letter-spacing="0">
        Software Engineering Student specializing in
      </text>
      <text x="80" y="462" font-family="'Inter', system-ui, sans-serif" font-size="24" font-weight="700" fill="#e2e8f0" letter-spacing="0">
        QA Testing, Cybersecurity &amp; Full-Stack Development
      </text>
      
      <!-- Polished skills badges with shadows -->
      <g opacity="0.95">
        <!-- Badge 1 -->
        <rect x="80" y="495" width="158" height="44" rx="10" fill="rgba(15, 23, 42, 0.9)" stroke="rgba(100, 116, 139, 0.4)" stroke-width="1.5" />
        <text x="159" y="522" font-family="'Inter', system-ui, sans-serif" font-size="17" font-weight="600" fill="#06b6d4" text-anchor="middle" letter-spacing="0.3">ISTQB Certified</text>
        
        <!-- Badge 2 -->
        <rect x="254" y="495" width="105" height="44" rx="10" fill="rgba(15, 23, 42, 0.9)" stroke="rgba(100, 116, 139, 0.4)" stroke-width="1.5" />
        <text x="306.5" y="522" font-family="'Inter', system-ui, sans-serif" font-size="17" font-weight="600" fill="#06b6d4" text-anchor="middle" letter-spacing="0.3">Selenium</text>
        
        <!-- Badge 3 -->
        <rect x="375" y="495" width="82" height="44" rx="10" fill="rgba(15, 23, 42, 0.9)" stroke="rgba(100, 116, 139, 0.4)" stroke-width="1.5" />
        <text x="416" y="522" font-family="'Inter', system-ui, sans-serif" font-size="17" font-weight="600" fill="#06b6d4" text-anchor="middle" letter-spacing="0.3">React</text>
        
        <!-- Badge 4 -->
        <rect x="473" y="495" width="170" height="44" rx="10" fill="rgba(15, 23, 42, 0.9)" stroke="rgba(100, 116, 139, 0.4)" stroke-width="1.5" />
        <text x="558" y="522" font-family="'Inter', system-ui, sans-serif" font-size="17" font-weight="600" fill="#06b6d4" text-anchor="middle" letter-spacing="0.3">Network Security</text>
      </g>
      
      <!-- Enhanced bottom accent bar with glow -->
      <rect y="624" width="1200" height="6" fill="url(#gradient)" opacity="0.9" />
      <rect y="624" width="1200" height="2" fill="url(#gradient)" opacity="0.4" filter="blur(4)" />
    </svg>
  `;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}

import fs from 'fs';
import https from 'https';

// Simple script to download and resize the OG image using canvas
const downloadAndResize = async () => {
  const sharp = await import('sharp').catch(() => null);
  
  if (!sharp) {
    console.log('Sharp not available, using simple resize...');
    // Fallback: Just tell user to resize manually or we can use the HTML generator
    console.log('Please open og-image.html in browser at exactly 1200x630 and take screenshot');
    console.log('OR: Install sharp with: npm install sharp');
    return;
  }

  // Resize the existing PNG to 1200x630
  await sharp.default('public/og-image.png')
    .resize(1200, 630, {
      fit: 'cover',
      position: 'center'
    })
    .png({ quality: 95, compressionLevel: 9 })
    .toFile('public/og-image-resized.png');
  
  // Replace the original
  fs.copyFileSync('public/og-image-resized.png', 'public/og-image.png');
  fs.unlinkSync('public/og-image-resized.png');
  
  console.log('✓ Resized og-image.png to 1200x630');
};

downloadAndResize().catch(console.error);

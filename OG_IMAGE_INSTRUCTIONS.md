# OG Image Creation Guide

## Exact Specifications

**Dimensions:** 1200 x 630 pixels
**File Name:** `og-image.jpg`
**Location:** Save to `public/og-image.jpg`

## Design Template

### Colors (from your portfolio):
- Background: `#020617` (navy)
- Text Primary: `#FFFFFF` (white)
- Text Accent: `#06B6D4` (cyan)
- Text Secondary: `#94A3B8` (slate-gray)

### Layout:
```
┌─────────────────────────────────────────────────┐
│ [Cyan line 4px height]                          │
│                                                 │
│                  AHMED KARAM                    │
│       QA Engineer | Software Testing &          │
│              Cybersecurity                      │
│                                                 │
│   ISTQB • Selenium • Postman • React • Python   │
│                                                 │
└─────────────────────────────────────────────────┘
```

## Quick Canva Instructions:

1. **Create Canvas**
   - Go to Canva.com
   - Click "Custom size" → 1200 x 630 px
   - Click "Create new design"

2. **Background**
   - Click background → "Color" → Enter `#020617`

3. **Top Accent Line**
   - Add Element → Shape → Rectangle
   - Resize: 1200px wide x 4px tall
   - Position at very top
   - Color: `#06B6D4`

4. **Main Title**
   - Add Text → Heading
   - Type: "AHMED KARAM"
   - Font: Montserrat Bold or Inter Bold
   - Size: 72px
   - Color: White `#FFFFFF`
   - Center align

5. **Subtitle**
   - Add Text → Subheading
   - Type: "QA Engineer | Software Testing & Cybersecurity"
   - Font: Montserrat Medium
   - Size: 32px
   - Color: `#06B6D4` (cyan)
   - Center align
   - Position below title

6. **Skills Line**
   - Add Text → Body
   - Type: "ISTQB • Selenium • Postman • React • Python"
   - Font: Inter Regular
   - Size: 24px
   - Color: `#94A3B8` (light gray)
   - Center align
   - Position near bottom

7. **Export**
   - Click "Share" → "Download"
   - File type: JPG
   - Quality: Standard
   - Download

8. **Save**
   - Save downloaded file as `og-image.jpg`
   - Move to `c:\Users\A7MED\Ahmed-portofolio\public\og-image.jpg`

## Alternative: Figma Template

If you prefer Figma, use the same specs above in a 1200x630 frame.

## After Creating:

Run this in terminal to verify file exists:
```powershell
Test-Path "public/og-image.jpg"
```

Should return `True`

Then deploy to Vercel for the changes to take effect!

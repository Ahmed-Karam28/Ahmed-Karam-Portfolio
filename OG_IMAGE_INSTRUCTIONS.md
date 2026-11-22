# Sharing image

`npm run build` creates `public/generated/og-image.png` from the same portrait and visual direction as the site. The original portrait is preserved. No screenshot, external image service or manual asset copy is needed.

The metadata in `index.html` uses the generated PNG. The legacy `/api/og` URL redirects to it so old links do not show a different design or obsolete credential badges.

If the production hostname changes, update the canonical, Open Graph and Twitter URLs in `index.html`, plus `public/robots.txt` and `public/sitemap.xml`, together before release.

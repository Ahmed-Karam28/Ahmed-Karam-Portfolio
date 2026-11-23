# Ahmed Karam / Engineering portfolio

A responsive React portfolio for full-stack development, Linux systems and engineering projects. The editorial design uses a dark surface, warm typography, original project captures and a focused reading flow.

## Run locally

Use Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

The build generates optimized WebP captures, a portrait derivative and sharing artwork from the original files in `public/`. Do not copy generated assets manually. `predev`, `prebuild` and `pretest` prepare them automatically. Original images, the CV and certificates are preserved.

## Checks

```sh
npm test
npx playwright install chromium
npm run test:e2e
```

The browser suite runs against the production build at 320, 390, 768, 1024 and 1440px. It checks project filters, every project dialog, gallery controls, keyboard focus, mobile navigation, overflow, images, PDFs, the 404 page and automated WCAG A/AA checks. Browser installation is a development/test step, not a site build requirement.

For an existing Chromium installation, set `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` when running the browser suite. Tests write reports to ignored `playwright-report/` and `test-results/` folders.

## Content and layout

- `src/data/portfolioData.js`: original project, experience, contact and certificate data.
- `src/components/sections/Projects.jsx`: curated project summaries and detail viewer. `?project=moodfood` opens a project directly.
- `src/index.css`: layout tokens, controls and responsive rules.
- `scripts/prepare-assets.mjs`: deterministic image preparation and social artwork.
- `public/generated/`: build output, deliberately ignored by Git.

All eight original projects remain available. The default view gives three web projects more space, with a compact index for the rest. Filters show all web applications or systems/hardware work. Project details use a native dialog with keyboard controls and document scroll locking.

## Content review before production

- Contact email is ahmedemara.se@gmail.com, confirmed by the owner and consistent with the unchanged CV.
- DEPI scholarship: November 2025 through June 2026, completed, confirmed by the owner. The original CV is preserved.
- Three original GitHub project destinations returned 404 during review. Their unavailable source buttons are omitted; their former URLs are retained as `previousGithubLink`.
- Existing project claims are not new measured business outcomes. No employer endorsement or official hiring-standard certification is implied.

Development is on `redesign/editorial-relaunch`. Merge and production release remain the owner's decision. Existing hosting integrations may create preview deployments automatically when branch commits land.

For a second engine, install Firefox with `npx playwright install firefox`, then run `PLAYWRIGHT_BROWSER=firefox npm run test:e2e`. Chromium is the default. WebKit requires platform libraries that may need to be installed on the test machine; it is not part of the default run.

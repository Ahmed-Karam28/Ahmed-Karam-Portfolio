import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  workers: 2,
  timeout: 30000,
  expect: { timeout: 5000 },
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    browserName: process.env.PLAYWRIGHT_BROWSER || "chromium",
    baseURL: "http://127.0.0.1:4173",
    reducedMotion: "reduce",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    launchOptions:
      process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH &&
      (!process.env.PLAYWRIGHT_BROWSER ||
        process.env.PLAYWRIGHT_BROWSER === "chromium")
        ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH }
        : {},
  },
  projects: [
    { name: "mobile-small", use: { viewport: { width: 320, height: 740 } } },
    { name: "mobile", use: { viewport: { width: 390, height: 844 } } },
    { name: "tablet", use: { viewport: { width: 768, height: 1024 } } },
    { name: "laptop", use: { viewport: { width: 1024, height: 768 } } },
    { name: "desktop", use: { viewport: { width: 1440, height: 1000 } } },
  ],
  webServer: {
    command:
      "npm run build && npm run preview -- --host 127.0.0.1 --port 4173 --strictPort",
    url: "http://127.0.0.1:4173",
    reuseExistingServer: false,
    timeout: 90000,
  },
});

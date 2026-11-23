import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.locator("h1").waitFor();
  await page.evaluate(() => document.fonts.ready);
});

test("layout remains inside the viewport and all images load", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  for (const id of [
    "home",
    "work",
    "expertise",
    "experience",
    "about",
    "contact",
  ]) {
    await page.locator(`#${id}`).scrollIntoViewIfNeeded();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth - innerWidth,
      ),
    ).toBe(0);
  }
  const outside = await page.evaluate(() =>
    [...document.querySelectorAll("body *")]
      .filter((node) => {
        const r = node.getBoundingClientRect();
        return r.width && (r.left < -1 || r.right > innerWidth + 1);
      })
      .map((node) => node.className),
  );
  expect(outside).toEqual([]);
  await page.evaluate(() =>
    Promise.all(
      [...document.images].map((image) => image.decode().catch(() => {})),
    ),
  );
  expect(
    await page.evaluate(() =>
      [...document.images]
        .filter((image) => !image.naturalWidth)
        .map((image) => image.src),
    ),
  ).toEqual([]);
  expect(errors).toEqual([]);
});

test("project filters retain all eight projects", async ({ page }) => {
  await expect(page.locator(".project-card")).toHaveCount(3);
  await expect(page.locator(".project-index article")).toHaveCount(5);
  await page.getByRole("button", { name: "Web applications" }).click();
  await expect(page.locator(".project-card")).toHaveCount(6);
  await page.getByRole("button", { name: "Systems & hardware" }).click();
  await expect(page.locator(".project-card")).toHaveCount(2);
  await expect(page.locator(".systems-visual")).toBeVisible();
  await page.getByRole("button", { name: "All work" }).click();
  await expect(page.locator(".project-index article")).toHaveCount(5);
});

test("project dialog, gallery, focus trap and Escape work", async ({
  page,
}) => {
  const trigger = page.getByRole("button", {
    name: "MoodFood Explore project",
  });
  await trigger.click();
  const dialog = page.getByRole("dialog", { name: "MoodFood" });
  await expect(dialog).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Close project details" }),
  ).toBeFocused();
  await page.getByRole("button", { name: "Next project image" }).click();
  await expect(page.locator(".gallery-controls")).toContainText("02 / 03");
  await page.getByRole("button", { name: "Previous project image" }).click();
  await expect(page.locator(".gallery-controls")).toContainText("01 / 03");
  for (let count = 0; count < 12; count++) {
    await page.keyboard.press("Tab");
    expect(
      await page.evaluate(() => !!document.activeElement.closest("dialog")),
    ).toBe(true);
  }
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await expect(page.locator("body")).not.toHaveCSS("overflow", "hidden");
});

test("all project records open and close without losing page position", async ({
  page,
}) => {
  const names = [
    "MoodFood",
    "NASJ",
    "Hekayah",
    "EasyRent",
    "Dental practice platform",
    "Architecture portfolio",
    "Headless Linux & ROS 2",
    "Bluetooth control unit",
  ];
  for (const name of names) {
    await page
      .getByRole("button", {
        name: `${name} Explore project`,
        exact: true,
      })
      .click();
    await expect(page.getByRole("dialog", { name, exact: true })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Implementation", exact: true }),
    ).toBeVisible();
    await page.getByRole("button", { name: "Close project details" }).click();
    await expect(page.locator("dialog")).toHaveCount(0);
  }
});

test("section navigation and mobile menu support keyboard use", async ({
  page,
}) => {
  if (page.viewportSize().width < 1024) {
    await page.getByRole("button", { name: "Open menu" }).click();
    await expect(page.locator("#mobile-navigation")).toBeVisible();
    for (let i = 0; i < 9; i++) {
      await page.keyboard.press("Tab");
      expect(
        await page.evaluate(() => !!document.activeElement.closest("header")),
      ).toBe(true);
    }
    await page.keyboard.press("Escape");
    await expect(page.getByRole("button", { name: "Open menu" })).toBeFocused();
    await page.getByRole("button", { name: "Open menu" }).click();
    await page
      .locator("#mobile-navigation")
      .getByRole("link", { name: "Contact" })
      .click();
    await expect(page.locator("#mobile-navigation")).toHaveCount(0);
    expect(await page.locator("main").evaluate((node) => node.inert)).toBe(
      false,
    );
  } else {
    await page
      .locator(".desktop-navigation")
      .getByRole("link", { name: "Contact" })
      .click();
  }
  await expect(page).toHaveURL(/#contact$/);
  await expect(page.locator("#contact h2")).toBeFocused();
  await page.goto("/#work");
  await expect(page.locator("#work h2")).toBeVisible();
});

test("PDFs, mail target and not-found page are intact", async ({
  page,
  request,
}) => {
  const files = await page
    .locator('a[href$=".pdf"]')
    .evaluateAll((nodes) => [
      ...new Set(nodes.map((node) => node.getAttribute("href"))),
    ]);
  expect(files).toHaveLength(6);
  for (const file of files) {
    const response = await request.get(file);
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("application/pdf");
  }
  await expect(page.locator(".contact-email > a")).toHaveAttribute(
    "href",
    "mailto:ahmedemara.se@gmail.com",
  );
  await page.goto("/not-a-page");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Nothing",
  );
  await page.getByRole("link", { name: "Back to portfolio" }).click();
  await expect(page.locator("h1")).toBeVisible();
  await expect(page.locator("h1")).toHaveCount(1);
});

test("automated accessibility checks pass on page and project dialog", async ({
  page,
}) => {
  for (const id of ["work", "expertise", "experience", "about", "contact"])
    await page.locator(`#${id}`).scrollIntoViewIfNeeded();
  const pageResults = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(pageResults.violations).toEqual([]);
  await page.getByRole("button", { name: "MoodFood Explore project" }).click();
  const dialogResults = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(dialogResults.violations).toEqual([]);
});

test("direct project links and capability evidence open the right record", async ({
  page,
}) => {
  await page.goto("/?project=nasj");
  await expect(
    page.getByRole("dialog", { name: "NASJ", exact: true }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Close project details" }).click();
  await expect(page).not.toHaveURL(/project=/);
  await page.locator(".capability-evidence").nth(1).click();
  await expect(
    page.getByRole("dialog", { name: "Headless Linux & ROS 2", exact: true }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator(".capability-evidence").nth(1)).toBeFocused();
});

test("font loading failure does not break the layout", async ({ page }) => {
  await page.route(/fonts\.(googleapis|gstatic)\.com/, (route) =>
    route.abort(),
  );
  await page.reload();
  await page.locator("#contact").scrollIntoViewIfNeeded();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth - innerWidth,
    ),
  ).toBe(0);
  await page.locator("#home").scrollIntoViewIfNeeded();
  await expect(
    page.getByRole("link", { name: "Explore my work" }),
  ).toBeVisible();
});

test("clipboard failures give an honest fallback", async ({ page }) => {
  await page.evaluate(() =>
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: {
        writeText: async () => {
          throw new Error("Not allowed");
        },
      },
    }),
  );
  await page.getByRole("button", { name: "Copy email address" }).click();
  await expect(page.getByRole("status")).toContainText("Copy is unavailable");
});

test("alternative project filter and mobile navigation are accessible", async ({
  page,
}) => {
  await page.getByRole("button", { name: "Systems & hardware" }).click();
  const systems = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(systems.violations).toEqual([]);
  if (page.viewportSize().width < 1024) {
    await page.getByRole("button", { name: "Open menu" }).click();
    const menu = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(menu.violations).toEqual([]);
  }
});

test("copy email succeeds in a permitted Chromium context", async ({
  page,
  context,
  browserName,
}) => {
  test.skip(
    browserName !== "chromium",
    "Clipboard permission control differs by engine.",
  );
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.getByRole("button", { name: "Copy email address" }).click();
  await expect(page.getByRole("status")).toContainText("Email address copied");
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
    "ahmedemara.se@gmail.com",
  );
});

test("menu resize and normal-motion navigation stay usable", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.reload();
  if (page.viewportSize().width < 1024) {
    await page.getByRole("button", { name: "Open menu" }).click();
    await page.setViewportSize({ width: 1280, height: 900 });
    await expect(page.locator("#mobile-navigation")).toHaveCount(0);
    expect(await page.locator("main").evaluate((node) => node.inert)).toBe(
      false,
    );
    await expect(page.locator("body")).not.toHaveCSS("overflow", "hidden");
  }
  await page.locator("#work").scrollIntoViewIfNeeded();
  await expect(page.locator("#work h2")).toBeVisible();
  await page.getByRole("button", { name: "MoodFood Explore project" }).click();
  await expect(page.getByRole("dialog", { name: "MoodFood" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator("dialog")).toHaveCount(0);
});


test("all contact links use the confirmed email", async ({ page }) => {
  const links = page.locator('a[href^="mailto:"]');
  await expect(links).toHaveCount(2);
  for (const link of await links.all()) {
    await expect(link).toHaveAttribute("href", "mailto:ahmedemara.se@gmail.com");
  }
  await expect(page.locator(".contact-email > a")).toHaveText("ahmedemara.se@gmail.com");
});


test("DEPI shows the confirmed completed scholarship period", async ({ page }) => {
  const depi = page.locator(".experience-ledger article").filter({ hasText: "DEPI Scholar" });
  await expect(depi.locator(".timeline-period")).toHaveText("Nov 2025 – Jun 2026 · Completed");
  await expect(depi.locator(".timeline-desc")).toContainText("7-month national scholarship");
  await depi.getByText("Training topics").click();
  await expect(depi.locator("details li")).toHaveCount(6);
});

test("Contact copy stays discreet, beside the email and keyboard accessible", async ({ page }) => {
  const copy = page.getByRole("button", { name: "Copy email address" });
  const email = page.locator(".contact-email > a");
  await copy.scrollIntoViewIfNeeded();
  await expect(copy).toHaveCSS("background-color", "rgba(0, 0, 0, 0)");
  await expect(copy).toHaveCSS("border-radius", "4px");
  await expect(copy).toHaveCSS("border-width", "0px");
  const c = await copy.boundingBox();
  const e = await email.boundingBox();
  expect(c.width).toBeGreaterThanOrEqual(44);
  expect(c.height).toBeGreaterThanOrEqual(44);
  expect(Math.abs((c.y + c.height / 2) - (e.y + e.height / 2))).toBeLessThan(2);
  expect(c.x - (e.x + e.width)).toBeLessThanOrEqual(24);
  expect(c.x + c.width).toBeLessThanOrEqual(page.viewportSize().width);
  await email.focus();
  await page.keyboard.press("Tab");
  await expect(copy).toBeFocused();
  await expect(copy).toHaveAttribute("title", "Copy email address");
});

test("Contact presents three prominent hiring actions without decorative italic", async ({ page }) => {
  await expect(page.locator("#contact h2")).toHaveText("Let's buildwhat's next.");
  await expect(page.locator("#contact h2 em")).toHaveCount(0);
  const actions = page.locator(".contact-links > a");
  await expect(actions).toHaveCount(3);
  const names = ["GitHub", "LinkedIn", "Résumé"];
  const widths = [];
  for (let i = 0; i < names.length; i++) {
    const action = actions.nth(i);
    await expect(action.locator("strong")).toHaveText(names[i]);
    await action.scrollIntoViewIfNeeded();
    const box = await action.boundingBox();
    expect(box.height).toBeGreaterThanOrEqual(80);
    expect(box.width).toBeGreaterThan(200);
    widths.push(box.width);
    await action.focus();
    await expect(action).toBeFocused();
  }
  expect(Math.max(...widths) - Math.min(...widths)).toBeLessThan(1);
  await expect(actions.nth(0)).toHaveAttribute("href", "https://github.com/Ahmed-Karam28");
  await expect(actions.nth(1)).toHaveAttribute("href", /linkedin\.com/);
  await expect(actions.nth(2)).toHaveAttribute("download", "");
});

test("reading text has a usable size and reference menu keeps its actions", async ({ page }) => {
  await expect(page.locator("h1")).toHaveCSS("font-family", /Inter/);
  for (const selector of [".identity-context > p", ".section-heading > p", ".timeline-desc", ".contact-heading p"]) {
    for (const node of await page.locator(selector).all()) {
      expect(await node.evaluate(el => parseFloat(getComputedStyle(el).fontSize))).toBeGreaterThanOrEqual(16);
    }
  }
  if (page.viewportSize().width < 1024) {
    await page.getByRole("button", { name: "Open menu" }).click();
    const panel = page.locator("#mobile-navigation");
    await expect(panel.locator("li a > span")).toHaveText(["Overview", "About", "Expertise", "Work", "Contact"]);
    await expect(panel.locator(".menu-socials a")).toHaveCount(3);
    for (const label of await panel.locator("li a > span").all()) {
      expect(await label.evaluate(el => parseFloat(getComputedStyle(el).fontSize))).toBeGreaterThanOrEqual(30);
      await expect(label).toHaveCSS("font-style", "normal");
    }
    await expect(panel.getByRole("link", { name: "Get in Touch" })).toBeVisible();
    await panel.getByRole("link", { name: "Overview" }).click();
    await expect(page).toHaveURL(/#home$/);
    await expect(page.locator("h1")).toBeFocused();
    await expect(panel).toHaveCount(0);
  }
});

test("project captures have no fake browser, padding or overlapping control", async ({ page }) => {
  await expect(page.locator(".capture-bar, .image-open")).toHaveCount(0);
  for (const button of await page.locator(".project-image-button").all()) {
    await button.scrollIntoViewIfNeeded();
    await expect(button).toHaveCSS("padding", "0px");
    const img = button.locator("img");
    const dimensions = await img.evaluate(el => ({ w: el.clientWidth, h: el.clientHeight, nw: el.naturalWidth, nh: el.naturalHeight }));
    expect(Math.abs(dimensions.w / dimensions.h - dimensions.nw / dimensions.nh)).toBeLessThan(.02);
  }
  await page.getByRole("button", { name: "MoodFood Explore project" }).focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("dialog", { name: "MoodFood", exact: true })).toBeVisible();
});

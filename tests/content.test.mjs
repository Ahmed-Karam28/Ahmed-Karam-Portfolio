import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import {
  personalInfo,
  projects,
  certifications,
} from "../src/data/portfolioData.js";
const root = path.resolve(import.meta.dirname, "..");
test("eight projects have stable unique identifiers and implementation evidence", () => {
  assert.equal(projects.length, 8);
  assert.equal(
    new Set(projects.map((project) => project.id)).size,
    projects.length,
  );
  assert.equal(
    new Set(projects.map((project) => project.number)).size,
    projects.length,
  );
  projects.forEach((project) => {
    assert.ok(project.title);
    assert.ok(project.description);
    assert.ok(project.implementation.length);
    assert.ok(project.tags.length);
  });
});
test("every referenced image is generated and present", () => {
  const images = [
    personalInfo.profileImage,
    ...projects.flatMap((project) => [
      project.image,
      ...project.images.map((image) => image.src),
    ]),
  ].filter(Boolean);
  images.forEach((file) =>
    assert.ok(existsSync(path.join(root, "public", file)), file),
  );
});
test("original CV and five certificate downloads exist and are PDFs", () => {
  assert.equal(certifications.length, 5);
  [personalInfo.cvPath, ...certifications.map((cert) => cert.file)].forEach(
    (file) => {
      const data = readFileSync(path.join(root, "public", file));
      assert.equal(data.subarray(0, 5).toString(), "%PDF-", file);
    },
  );
});
test("unavailable source URLs stay out of clickable destinations", () => {
  projects
    .filter((project) => project.previousGithubLink)
    .forEach((project) => assert.equal(project.githubLink, null));
});
test("external project and credential destinations use HTTPS", () => {
  [
    ...projects.flatMap((project) => [project.liveLink, project.githubLink]),
    ...certifications.map((cert) => cert.verifyUrl),
  ]
    .filter(Boolean)
    .forEach((url) => assert.equal(new URL(url).protocol, "https:"));
});
test("metadata refers to the generated sharing artwork", () => {
  const html = readFileSync(path.join(root, "index.html"), "utf8");
  assert.match(html, /generated\/og-image\.png/);
  assert.match(html, /<html lang="en">/);
});

test("legacy social endpoint redirects to the current sharing image", async () => {
  const { default: handler } = await import("../api/og.js");
  const response = await handler(
    new Request("https://portfolio.example/api/og"),
  );
  assert.equal(response.status, 307);
  assert.equal(
    response.headers.get("location"),
    "https://portfolio.example/generated/og-image.png",
  );
});

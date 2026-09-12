import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { basePath, siteOrigin, sitePath } from "../site.config.mjs";

const output = path.resolve("out");
const routes = ["/", "/research/", "/writing/", "/teaching/", "/service/", "/file-drawer/", "/publications/"];
const routeFile = (route) => path.join(output, route, "index.html");
const pages = new Map(await Promise.all(routes.map(async (route) => [route, await readFile(routeFile(route), "utf8")])));

// Check the exported documents, not the development server: this is what Pages serves.
test("every public route exports a complete, accessible document", () => {
  for (const [route, html] of pages) {
    assert.match(html, /<html[^>]*lang="en-GB"/, route);
    assert.match(html, /<title>[^<]*Jacob Edenhofer/, route);
    assert.match(html, /<main[^>]*id="main-content"/, route);
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, route);
    assert.ok(!html.includes('name="codex-preview"'), route);
  }
});

test("local links, downloadable files and generated assets exist", async () => {
  for (const [route, html] of pages) {
    for (const tag of html.matchAll(/<(?:a|img|script|link)\b[^>]*>/g)) {
      for (const attribute of tag[0].matchAll(/\b(?:href|src)="([^"]+)"/g)) {
        const value = attribute[1].replaceAll("&amp;", "&");
        if (/^(?:[a-z]+:|\/\/)/i.test(value)) continue;
        const url = new URL(value, `https://example.test${basePath}${route}`);
        const pathname = decodeURIComponent(url.pathname);
        assert.ok(pathname.startsWith(`${basePath}/`), `${route}: URL outside repository path ${value}`);
        let target = path.join(output, pathname.slice(basePath.length));
        let info;
        try { info = await stat(target); } catch { assert.fail(`${route}: missing ${value}`); }
        if (info.isDirectory()) { target = path.join(target, "index.html"); await stat(target); }
        if (url.hash && path.extname(target) === ".html") {
          const linkedHtml = await readFile(target, "utf8");
          const id = decodeURIComponent(url.hash.slice(1));
          assert.ok(linkedHtml.includes(`id="${id}"`), `${route}: missing anchor ${value}`);
        }
      }
    }
  }
});

test("homepage reflects the requested introduction and navigation", () => {
  const html = pages.get("/");
  assert.match(html, /About me/);
  const about = html.match(/<section[^>]*class="home-about[^>]*>[\s\S]*?<\/section>/)?.[0] || "";
  assert.equal((about.match(/<p>/g) || []).length, 3);
  assert.ok(!html.includes("Selected research"));
  const header = html.match(/<header\b[^>]*>[\s\S]*?<\/header>/)?.[0] || "";
  const main = html.match(/<main\b[^>]*>[\s\S]*?<\/main>/)?.[0] || "";
  const footer = html.match(/<footer\b[^>]*>[\s\S]*?<\/footer>/)?.[0] || "";
  assert.match(header, new RegExp(`href="${basePath}/service/?">Service</a>`));
  assert.match(header, /File drawer/);
  assert.match(main, /mailto:jacob.edenhofer@nuffield.ox.ac.uk/);
  assert.match(footer, /mailto:jacob.edenhofer@nuffield.ox.ac.uk/);
  assert.match(footer, /https:\/\/www.researchgate.net\/profile\/Jacob-Edenhofer/);
});

test("old publications URL retains a usable research link", () => {
  assert.ok(pages.get("/publications/").includes(`href="${sitePath("/research/#papers")}"`));
});

test("social preview images use the public repository address", () => {
  for (const html of pages.values()) {
    assert.ok(html.includes(`content="${siteOrigin}${sitePath("/og.png")}"`));
    assert.ok(!html.includes("jacob-edenhofer98.chatgpt.site"));
  }
});

import assert from "node:assert/strict";
import { mkdtemp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import vm from "node:vm";
import { buildLegacyPaths, redirectHtml } from "../scripts/legacy-paths.mjs";

const siteOrigin = "https://jacob-edenhofer.github.io";

test("legacy redirects retain queries and fragments without trusting an external destination", () => {
  for (const [route, search, hash] of [
    ["/", "?utm_source=email", "#about-me"],
    ["/research/", "?next=https%3A%2F%2Fexample.com&x=1", "#uncertain-mandates-durable-stringency"],
    ["/file-drawer/", "", "#file-drawer-note-1"],
    ["/publications/", "?a=%23&b=%26", "#papers"],
  ]) {
    const html = redirectHtml(route, siteOrigin);
    let destination;
    vm.runInNewContext(html.match(/<script>\n([\s\S]*?)<\/script>/)[1], {
      URL,
      window: { location: { origin: siteOrigin, search, hash, replace: (value) => { destination = new URL(value); } } },
    });
    assert.equal(destination.origin, siteOrigin);
    assert.equal(destination.pathname, route);
    assert.equal(destination.search, search);
    assert.equal(destination.hash, hash);
    assert.ok(html.includes(`<a href="${route}">`));
    assert.ok(html.includes(`<link rel="canonical" href="${siteOrigin}${route}">`));
    assert.ok(html.includes(`<meta http-equiv="refresh" content="0; url=${route}">`));
  }
  assert.throws(() => redirectHtml("//example.com/", siteOrigin));
});

async function fixture(t) {
  const directory = await mkdtemp(path.join(os.tmpdir(), "website-legacy-test-"));
  t.after(() => rm(directory, { recursive: true, force: true }));
  const outputDir = path.join(directory, "out");
  const publicDir = path.join(directory, "public");
  await mkdir(publicDir);
  for (const route of ["", "research", "publications", "_not-found", "404"]) {
    await mkdir(path.join(outputDir, route), { recursive: true });
    await writeFile(path.join(outputDir, route, "index.html"), "<!doctype html><html lang=\"en-GB\"><body>Example</body></html>");
  }
  const pdf = Buffer.from([37, 80, 68, 70, 45, 49, 46, 55, 10, 0, 255, 128, 10]);
  await writeFile(path.join(publicDir, "CV.pdf"), pdf);
  await writeFile(path.join(outputDir, "CV.pdf"), pdf);
  return { outputDir, publicDir, basePath: "", siteOrigin, pdf };
}

test("compatibility export preserves page URLs and PDF bytes and can be rerun safely", async (t) => {
  const options = await fixture(t);
  const first = await buildLegacyPaths(options);
  assert.deepEqual(first.routes.sort(), ["/", "/publications/", "/research/"]);
  assert.deepEqual(first.assets, ["CV.pdf"]);
  const pdfPath = path.join(options.outputDir, "Website/CV.pdf");
  assert.deepEqual(await readFile(pdfPath), options.pdf);
  const firstPage = await readFile(path.join(options.outputDir, "Website/research/index.html"));
  const manifest = await readFile(path.join(options.outputDir, "Website/.legacy-paths.json"));
  await buildLegacyPaths(options);
  assert.deepEqual(await readFile(pdfPath), options.pdf);
  assert.deepEqual(await readFile(path.join(options.outputDir, "Website/research/index.html")), firstPage);
  assert.deepEqual(await readFile(path.join(options.outputDir, "Website/.legacy-paths.json")), manifest);
  await assert.rejects(readFile(path.join(options.outputDir, "Website/404/index.html")), { code: "ENOENT" });
});

test("migration refuses an old base path, altered assets, or an unowned compatibility directory", async (t) => {
  const options = await fixture(t);
  await assert.rejects(buildLegacyPaths({ ...options, basePath: "/Website" }), /empty basePath/);
  await writeFile(path.join(options.outputDir, "CV.pdf"), "changed PDF");
  await assert.rejects(buildLegacyPaths(options), /Exported asset differs/);
  await writeFile(path.join(options.outputDir, "CV.pdf"), options.pdf);
  await mkdir(path.join(options.outputDir, "Website"));
  await writeFile(path.join(options.outputDir, "Website/index.html"), "An unrelated page");
  await assert.rejects(buildLegacyPaths(options), /not generated/);
  assert.equal(await readFile(path.join(options.outputDir, "Website/index.html"), "utf8"), "An unrelated page");
});

test("migration refuses unexpected files in its prior output", async (t) => {
  const options = await fixture(t);
  await buildLegacyPaths(options);
  await writeFile(path.join(options.outputDir, "Website/keep-me.txt"), "An unrelated file");
  await assert.rejects(buildLegacyPaths(options), /unexpected files/);
});

test("built website retains every shared page and the original public asset bytes", async () => {
  const outputDir = path.resolve("out");
  for (const route of ["", "research", "writing", "teaching", "service", "file-drawer", "publications"]) {
    const target = route ? `/${route}/` : "/";
    const html = await readFile(path.join(outputDir, "Website", route, "index.html"), "utf8");
    assert.equal(html, redirectHtml(target, siteOrigin), `Legacy ${target} should redirect to its root equivalent`);
  }
  async function checkAssets(relative = "") {
    for (const entry of await readdir(path.join("public", relative), { withFileTypes: true })) {
      const filename = path.join(relative, entry.name);
      if (entry.isDirectory()) await checkAssets(filename);
      else {
        assert.deepEqual(await readFile(path.join(outputDir, "Website", filename)), await readFile(path.join("public", filename)), filename);
      }
    }
  }
  await checkAssets();
  await assert.rejects(readFile(path.join(outputDir, "Website/content/about.md")), { code: "ENOENT" });
});

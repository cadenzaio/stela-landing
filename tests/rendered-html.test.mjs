import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Stela landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Stela - Verifiable Physical Identity<\/title>/i);
  assert.match(html, /Permanent marks\./);
  assert.match(html, /Verified records\./);
  assert.match(html, /Trusted assets\./);
  assert.match(html, /Precision made permanent/);
  assert.match(html, /Mark\. Record\. Verify\./);
  assert.match(html, /Built with ambition\. Presented with transparency\./);
  assert.match(html, /Build trust into the asset itself\./);
  assert.match(html, /property="og:image" content="http:\/\/localhost(?::3000)?\/og\.png"/);
  assert.doesNotMatch(html, /Verid|safeSingleMark|codex-preview|react-loading-skeleton/i);
});

test("keeps the starter preview removed from the finished site", async () => {
  const [page, layout, packageJson, landing] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../components/landing/StelaLanding.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(page, /<StelaLanding \/>/);
  assert.match(layout, /generateMetadata/);
  assert.match(layout, /\/og\.png/);
  assert.match(landing, /PrecisionMarkVisual/);
  assert.match(landing, /pre-commercial development/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.doesNotMatch(page + layout + landing, /Verid|safeSingleMark|SkeletonPreview|codex-preview/i);

  await assert.rejects(access(new URL("app/_sites-preview", projectRoot)));
});

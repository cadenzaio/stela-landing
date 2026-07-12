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
  assert.match(html, /Machine identity verified/);
  assert.match(html, /Marked/);
  assert.match(html, /Recovered/);
  assert.match(html, /Stela gives the record a physical point of origin\./);
  assert.match(html, /Identity should not depend on something temporary\./);
  assert.match(html, /Where asset identity needs to hold\./);
  assert.match(html, /Not a generic engraver\. A controlled marking system\./);
  assert.match(html, /Built carefully\./);
  assert.match(html, /Validated openly\./);
  assert.match(html, /Build trust into the asset itself\./);
  assert.match(html, /property="og:image" content="http:\/\/localhost(?::3000)?\/og\.png"/);
  assert.doesNotMatch(
    html,
    /Verid|safeSingleMark|codex-preview|react-loading-skeleton|Every mark becomes part of an asset trust history|A physical anchor for digital confidence/i,
  );
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
  assert.match(landing, /<h1 className="hero-title font-semibold text-white">/);
  assert.equal((landing.match(/<span>Permanent marks\.<\/span>|<span>Verified records\.<\/span>|<span>Trusted assets\.<\/span>/g) ?? []).length, 3);
  assert.doesNotMatch(landing, /hero-title text-balance|lg:text-8xl/);
  assert.match(landing, /stela-mark stela-mark-nav/);
  assert.match(landing, /stela-mark stela-mark-small/);
  assert.match(landing, /glass-reflection/);
  assert.match(landing, /surface-depth/);
  assert.match(landing, /incision-core/);
  assert.match(landing, /proof-link/);
  assert.match(landing, /device-trust-line/);
  assert.match(landing, /final-trust-line/);
  assert.match(landing, /lifecycle-timeline/);
  assert.match(landing, /sequence-track/);
  assert.match(landing, /device-module/);
  assert.match(landing, /FinalSection/);
  assert.match(landing, /pre-commercial development/);
  assert.doesNotMatch(landing, /PhysicalAnchor|PlatformSection|AudiencePathways|CurrentStage|FinalCTA/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.doesNotMatch(page + layout + landing, /Verid|safeSingleMark|SkeletonPreview|codex-preview/i);

  await assert.rejects(access(new URL("app/_sites-preview", projectRoot)));
});

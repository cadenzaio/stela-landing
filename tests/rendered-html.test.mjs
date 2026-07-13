import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
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
  const [page, layout, packageJson, landing, brand, identity, favicon] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../components/landing/StelaLanding.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/brand/StelaMark.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/identity/StelaIdentity.tsx", import.meta.url), "utf8"),
    readFile(new URL("../public/favicon.svg", import.meta.url), "utf8"),
  ]);

  assert.match(page, /<StelaLanding \/>/);
  assert.match(layout, /generateMetadata/);
  assert.match(layout, /\/og\.png/);
  assert.match(landing, /PrecisionMarkVisual/);
  assert.match(landing, /const HERO_VARIANT: HeroVariant = "etched-origin"/);
  assert.match(landing, /const MATERIAL_TREATMENT: MaterialTreatment = "optical-incision"/);
  assert.match(landing, /<h1 className="hero-title font-semibold text-white">/);
  assert.equal((landing.match(/<span>Permanent marks\.<\/span>|<span>Verified records\.<\/span>|<span>Trusted assets\.<\/span>/g) ?? []).length, 3);
  assert.doesNotMatch(landing, /hero-title text-balance|lg:text-8xl/);
  assert.match(landing, /import \{ StelaMark \}/);
  assert.match(landing, /<StelaMark variant="compact" size="nav" \/>/);
  assert.match(landing, /hero-variant-\$\{HERO_VARIANT\}/);
  assert.match(landing, /material-\$\{MATERIAL_TREATMENT\}/);
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
  assert.match(brand, /type StelaMarkVariant = "full" \| "compact"/);
  assert.match(brand, /stela-mark-\$\{variant\}/);
  assert.match(identity, /Production masters/);
  assert.match(identity, /Favicon scale/);
  assert.match(identity, /Engraved material/);
  assert.match(identity, /Balanced refinement/);
  assert.match(favicon, /<circle cx="24" cy="24"/);
  assert.doesNotMatch(brand + identity, /arrow|shield|monogram/i);

  await assert.rejects(access(new URL("app/_sites-preview", projectRoot)));
});

test("server-renders the Stela identity validation surface", async () => {
  const response = await render("/identity");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Origin\. Incision\. Provenance\./);
  assert.match(html, /Full Mark/);
  assert.match(html, /Compact Mark/);
  assert.match(html, /16(?:<!-- -->)?px/);
  assert.match(html, /Dark architectural glass/);
  assert.match(html, /Selected concept/);
  assert.match(html, /Refined master/);
});

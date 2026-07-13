import { StelaMark } from "@/components/brand/StelaMark";
import Image from "next/image";

function Lockup() {
  return (
    <div className="identity-lockup" aria-label="Stela compact logo lockup">
      <StelaMark variant="compact" size="nav" />
      <span>STELA</span>
    </div>
  );
}

function LegacyBalancedMark() {
  return (
    <span className="legacy-balanced-mark" aria-label="Original selected Balanced mark" role="img">
      <span className="legacy-outline" />
      <span className="legacy-inner" />
      <span className="legacy-trace" />
      <span className="legacy-point" />
    </span>
  );
}

function LegacyHeroMark() {
  return (
    <span className="legacy-hero-mark" aria-label="Previous atmospheric hero mark" role="img">
      <span className="legacy-hero-outline" />
      <span className="legacy-hero-inner" />
      <span className="legacy-hero-trace" />
      <span className="legacy-hero-point" />
    </span>
  );
}

export function StelaIdentity() {
  return (
    <main className="identity-page">
      <header className="identity-header">
        {/* vinext currently duplicates React when next/link hydrates this server-only sheet. */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/" aria-label="Back to Stela landing page">
          <Lockup />
        </a>
        <span>Identity validation</span>
      </header>

      <section className="identity-intro">
        <p>Working identity</p>
        <h1>Origin. Incision. Provenance.</h1>
      </section>

      <section className="identity-section" aria-labelledby="masters-title">
        <div className="identity-section-heading">
          <p>01</p>
          <h2 id="masters-title">Production masters</h2>
        </div>
        <div className="master-grid">
          <article className="master-specimen dark-specimen">
            <StelaMark variant="full" size="display" label="Refined Full Stela mark" />
            <div>
              <strong>Full Mark</strong>
              <span>Brand, certificates, machine UI, physical previews</span>
            </div>
          </article>
          <article className="master-specimen dark-specimen">
            <StelaMark variant="compact" size="display" label="Refined Compact Stela mark" />
            <div>
              <strong>Compact Mark</strong>
              <span>Navbar, favicon, app icon, tiny engraving</span>
            </div>
          </article>
        </div>
      </section>

      <section className="identity-section" aria-labelledby="lockup-title">
        <div className="identity-section-heading">
          <p>02</p>
          <h2 id="lockup-title">Navbar lockup</h2>
        </div>
        <div className="lockup-test dark-specimen">
          <Lockup />
          <span>Compact optical master · 36px symbol</span>
        </div>
      </section>

      <section className="identity-section" aria-labelledby="tiny-title">
        <div className="identity-section-heading">
          <p>03</p>
          <h2 id="tiny-title">Favicon scale</h2>
        </div>
        <div className="favicon-row dark-specimen">
          {[16, 24, 32].map((size) => (
            <figure key={size}>
              {/* The actual shipped favicon asset is tested at each target size. */}
              <Image src="/favicon.svg" width={size} height={size} alt={`Stela favicon at ${size} pixels`} />
              <figcaption>{size}px</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="identity-section" aria-labelledby="contrast-title">
        <div className="identity-section-heading">
          <p>04</p>
          <h2 id="contrast-title">Monochrome</h2>
        </div>
        <div className="contrast-grid">
          <article className="contrast-specimen dark-specimen">
            <StelaMark variant="full" size="display" tone="light" label="Warm white Stela mark on black" />
            <span>Warm white on black</span>
          </article>
          <article className="contrast-specimen light-specimen">
            <StelaMark variant="full" size="display" tone="dark" label="Black Stela mark on warm white" />
            <span>Black on warm white</span>
          </article>
        </div>
      </section>

      <section className="identity-section" aria-labelledby="material-title">
        <div className="identity-section-heading">
          <p>05</p>
          <h2 id="material-title">Engraved material</h2>
        </div>
        <div className="material-grid">
          <article className="material-specimen material-glass">
            <StelaMark variant="full" size="display" tone="etched" label="Stela mark engraved in dark glass" />
            <span>Dark architectural glass</span>
          </article>
          <article className="material-specimen material-metal">
            <StelaMark variant="full" size="display" tone="etched" label="Stela mark engraved in dark metal" />
            <span>Precision-finished metal</span>
          </article>
        </div>
      </section>

      <section className="identity-section" aria-labelledby="comparison-title">
        <div className="identity-section-heading">
          <p>06</p>
          <h2 id="comparison-title">Balanced refinement</h2>
        </div>
        <div className="comparison-row dark-specimen">
          <figure>
            <LegacyBalancedMark />
            <figcaption>Selected concept</figcaption>
          </figure>
          <span className="comparison-divider" aria-hidden="true" />
          <figure>
            <StelaMark variant="full" size="display" label="Refined Balanced Stela mark" />
            <figcaption>Refined master</figcaption>
          </figure>
        </div>
      </section>

      <section className="identity-section" aria-labelledby="hero-alignment-title">
        <div className="identity-section-heading">
          <p>07</p>
          <h2 id="hero-alignment-title">Hero mark alignment</h2>
        </div>
        <div className="hero-mark-comparison">
          <figure className="hero-mark-specimen">
            <LegacyHeroMark />
            <figcaption>Previous surface mark</figcaption>
          </figure>
          <figure className="hero-mark-specimen">
            <StelaMark variant="full" size="hero" tone="etched" label="Refined hero-scale Stela mark" />
            <figcaption>Logo-derived surface mark</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

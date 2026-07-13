import { StelaMark } from "@/components/brand/StelaMark";

const navItems = ["Platform", "Marking System", "Use Cases", "Investors", "Contact"];

type HeroVariant = "etched-origin" | "refracted-surface" | "proof-emergence";
type MaterialTreatment = "subtle-incision" | "optical-incision";

// Development review switch. Keep production on the recommended defaults.
const HERO_VARIANT: HeroVariant = "etched-origin";
const MATERIAL_TREATMENT: MaterialTreatment = "optical-incision";

const evidenceRows = [
  "Machine identity verified",
  "Operator authorized",
  "Timestamp recorded",
  "Certificate issued",
];

const permanenceStages = [
  "Marked",
  "Registered",
  "Insured",
  "Maintained",
  "Transferred",
  "Recovered",
  "Verified",
];

const workflowSteps = [
  {
    label: "Mark",
    body: "A controlled marking system creates a permanent physical identifier.",
  },
  {
    label: "Record",
    body: "The action becomes a signed evidence event with machine, operator, asset, time, location, and proof.",
  },
  {
    label: "Verify",
    body: "A certificate lets authorized parties check the asset identity and supporting record.",
  },
];

const markingFeatures = [
  "Portable precision marking",
  "Authorized operator workflow",
  "Machine identity and session control",
  "Timestamp and location evidence",
  "Photo-supported verification",
  "Digitally signed certificate",
];

const useCases = [
  {
    tag: "Insurers",
    title: "Vehicles and insurance",
    body: "Claims, recovery, fraud prevention, ownership verification.",
  },
  {
    tag: "Asset owners",
    title: "Solar and distributed energy assets",
    body: "Field asset identity, maintenance evidence, warranty, recovery workflows.",
  },
  {
    tag: "Operators",
    title: "Industrial and high-value equipment",
    body: "Durable identity for equipment, tools, machines, and components.",
  },
  {
    tag: "Partners",
    title: "Glass and architectural assets",
    body: "Permanent identification for glass installations, facades, panels, and high-value surfaces.",
  },
];

const milestones = [
  "Technical validation",
  "Prototype development",
  "IP filings",
  "Pilot partnerships",
  "Market validation",
];

export function StelaLanding() {
  return (
    <main className="stela-page min-h-screen overflow-hidden bg-[var(--stela-black)] text-[var(--stela-ivory)]">
      <Header />
      <Hero />
      <TrustGap />
      <Mechanism />
      <PermanenceLifecycle />
      <MarkingSystem />
      <UseCases />
      <FinalSection />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#050506]/70 backdrop-blur-2xl">
      <div className="mx-auto flex h-15 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="stela-lockup group flex items-center" aria-label="Stela home">
          <StelaMark variant="compact" size="nav" />
          <span className="stela-wordmark text-white">STELA</span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${slugify(item)}`} className="nav-link">
              {item}
            </a>
          ))}
        </nav>
        <a href="#contact" className="header-cta">
          Request brief
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden px-5 pt-28 sm:px-8 lg:pt-34">
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 pb-16 lg:grid-cols-[1fr_0.92fr] lg:pb-24">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.42em] text-[var(--stela-champagne)]">
            Precision made permanent
          </p>
          <h1 className="hero-title font-semibold text-white">
            <span>Permanent marks.</span>
            <span>Verified records.</span>
            <span>Trusted assets.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-pretty text-xl leading-8 text-white/76 sm:text-2xl sm:leading-9">
            Stela creates a lasting link between physical assets and digital proof — through precision marking, signed
            evidence events, and verifiable certificates.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/54 sm:text-lg">
            For assets that need to be identified, insured, maintained, recovered, transferred, and trusted across
            their lifecycle.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#platform" className="button-primary">
              Explore Stela
            </a>
            <a href="#investors" className="button-secondary">
              Request investor brief
            </a>
          </div>
        </div>
        <PrecisionMarkVisual />
      </div>
    </section>
  );
}

function PrecisionMarkVisual() {
  return (
    <div
      className={`precision-wrap hero-variant-${HERO_VARIANT} material-${MATERIAL_TREATMENT}`}
      aria-label="Permanent physical mark connected to a digital certificate"
    >
      <div className="glass-reflection" aria-hidden="true" />
      <div className="origin-surface">
        <div className="surface-depth" />
        <div className="surface-horizon" />
        <div className="surface-glint" />
        <div className="surface-refraction" />
        <div className="surface-etch top" />
        <div className="engraved-origin">
          <StelaMark variant="full" size="hero" tone="etched" label="Stela mark engraved into the surface" />
        </div>
        <div className="origin-label">Physical origin</div>
      </div>

      <svg className="proof-link" viewBox="0 0 242 108" preserveAspectRatio="none" aria-hidden="true">
        <path d="M1 10 L241 107" />
      </svg>

      <div className="proof-certificate">
        <div className="cert-top">
          <span>Signed proof</span>
          <strong>Verified</strong>
        </div>
        <div className="cert-mark">
          <StelaMark variant="compact" size="small" />
          <div>
            <p>STELA CERTIFICATE</p>
            <h3>Asset identity linked</h3>
          </div>
        </div>
        <div className="evidence-ledger">
          {evidenceRows.map((row) => (
            <div key={row}>
              <span />
              {row}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TrustGap() {
  return (
    <Section eyebrow="The trust gap" className="border-t border-white/10">
      <div className="grid gap-10 lg:grid-cols-[0.96fr_1fr] lg:items-center">
        <div>
          <SectionHeading>
            The asset is physical.
            <br />
            The decision is digital.
            <br />
            The trust gap is in between.
          </SectionHeading>
          <p className="section-copy mt-7">
            Organizations rely on digital records to make decisions about insurance, recovery, maintenance,
            ownership, compliance, and asset value. But when the physical asset cannot be confidently linked to the
            record, every decision built on that record becomes weaker.
          </p>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-white">
            Stela gives the record a physical point of origin.
          </p>
        </div>
        <div className="trust-diagram">
          <div className="diagram-row muted">
            <span>Physical asset</span>
            <em><i />weak link<i /></em>
            <span>Digital record</span>
          </div>
          <div className="diagram-row strong">
            <span>Physical asset</span>
            <em><i />Stela trust anchor<i /></em>
            <span>Digital record</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Mechanism() {
  return (
    <Section id="platform" eyebrow="Mechanism" className="relative">
      <div className="section-hairline" aria-hidden="true" />
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <SectionHeading>Mark. Record. Verify.</SectionHeading>
        <p className="max-w-lg text-lg leading-8 text-white/62">
          One controlled action creates the physical anchor, the signed event, and the certificate path.
        </p>
      </div>
      <div className="sequence-track mt-12">
        <div className="sequence-beam" aria-hidden="true" />
        {workflowSteps.map((step, index) => (
          <article className="sequence-step" key={step.label}>
            <div className="sequence-node">{String(index + 1).padStart(2, "0")}</div>
            <p className="sequence-label">{step.label}</p>
            <p>{step.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function PermanenceLifecycle() {
  return (
    <Section id="permanence" eyebrow="Permanence" className="material-section">
      <div className="max-w-4xl">
        <SectionHeading>
          A mark that remains.
          <br />
          A record that holds.
        </SectionHeading>
        <p className="section-copy mt-7">
          Labels fall off. Records drift. Ownership changes. Components move. But important decisions still depend on
          knowing whether the physical asset is the asset the record says it is.
        </p>
        <p className="mt-6 text-xl leading-8 text-white">Identity should not depend on something temporary.</p>
      </div>
      <div className="lifecycle-timeline etched" aria-label="Asset identity lifecycle">
        <span className="persistent-mark" aria-hidden="true" />
        {permanenceStages.map((stage, index) => (
          <div className="lifecycle-stage" key={stage}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{stage}</strong>
          </div>
        ))}
      </div>
    </Section>
  );
}

function MarkingSystem() {
  return (
    <Section id="marking-system" eyebrow="Controlled field marking">
      <div className="marking-layout">
        <div>
          <SectionHeading>Built for controlled field marking.</SectionHeading>
          <p className="product-line">Not a generic engraver. A controlled marking system.</p>
          <p className="section-copy mt-6">
            Stela&apos;s marking system is designed for authorized, auditable operation - combining precision physical
            marking with controlled workflows, operator identity, machine identity, and signed event records.
          </p>
        </div>
        <div className="device-module" aria-label="Abstract controlled marking system visual">
          <div className="device-trust-line" aria-hidden="true" />
          <div className="device-head">
            <span className="device-aperture" />
            <span className="device-tip" />
          </div>
          <div className="device-surface">
            <span />
            <span />
            <span />
          </div>
          <div className="session-panel">
            <p>Controlled session</p>
            <strong>Authorized</strong>
            <div>Machine identity active</div>
          </div>
        </div>
      </div>
      <div className="feature-rail compact">
        {markingFeatures.map((feature) => (
          <div key={feature} className="feature-chip">
            <span />
            {feature}
          </div>
        ))}
      </div>
    </Section>
  );
}

function UseCases() {
  return (
    <Section id="use-cases" eyebrow="Applications">
      <span id="investors" className="anchor-offset" aria-hidden="true" />
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <SectionHeading>Where asset identity needs to hold.</SectionHeading>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/58">
            Initial target applications for Stela&apos;s pre-commercial development and pilot conversations.
          </p>
        </div>
      </div>
      <div className="use-case-panels editorial">
        {useCases.map((card) => (
          <article className="case-panel" key={card.title}>
            <p>{card.tag}</p>
            <h3>{card.title}</h3>
            <strong>{card.body}</strong>
          </article>
        ))}
      </div>
    </Section>
  );
}

function FinalSection() {
  return (
    <section id="contact" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="final-panel mx-auto max-w-7xl">
        <div className="final-trust-line" aria-hidden="true" />
        <div>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.42em] text-[var(--stela-champagne)]">
            Current stage
          </p>
          <SectionHeading>
            Built carefully.
            <br />
            Validated openly.
          </SectionHeading>
          <p className="section-copy mt-7">
            Stela is in pre-commercial development. The architecture, trust model, and validation path are defined.
            The next milestones are prototype validation, IP filings, selected pilot partnerships, and
            market-specific proof of value.
          </p>
          <div className="mt-10">
            <h2 className="text-balance text-4xl font-semibold leading-none tracking-[-0.04em] text-white sm:text-5xl">
              Build trust into the asset itself.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/64">
              Stela is preparing a physical-digital identity system for assets that need to remain verifiable beyond
              the moment of registration.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="mailto:brief@stela.example" className="button-primary">
                Request investor brief
              </a>
              <a href="mailto:pilot@stela.example" className="button-secondary">
                Discuss a pilot use case
              </a>
            </div>
          </div>
        </div>
        <div className="milestone-stack compact">
          {milestones.map((milestone) => (
            <div key={milestone}>
              <span />
              {milestone}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-white/44 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <StelaMark variant="compact" size="small" />
          <span>Stela</span>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {navItems.map((item) => (
            <a key={item} href={`#${slugify(item)}`} className="transition hover:text-white">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function Section({
  id,
  eyebrow,
  className = "",
  children,
}: {
  id?: string;
  eyebrow: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`section-block px-5 py-20 sm:px-8 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-7xl">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.36em] text-[var(--stela-platinum)]/60">
          {eyebrow}
        </p>
        {children}
      </div>
    </section>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl">
      {children}
    </h2>
  );
}

function slugify(value: string) {
  return value.toLowerCase().replace(/\s+/g, "-");
}

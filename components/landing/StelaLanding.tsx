const navItems = ["Platform", "Marking System", "Use Cases", "Investors", "Contact"];

const permanenceCards = [
  {
    title: "Physical permanence",
    body: "A precision mark becomes part of the asset, not a temporary label attached to it.",
  },
  {
    title: "Digital permanence",
    body: "Each marking event becomes a signed record that can be preserved, verified, and referenced later.",
  },
  {
    title: "Lifecycle trust",
    body: "Identity can remain verifiable across owners, operators, insurers, and systems.",
  },
];

const workflowSteps = [
  {
    label: "Mark",
    title: "Permanent mark",
    body: "A controlled marking system creates a durable physical identifier on the asset.",
  },
  {
    label: "Record",
    title: "Signed event",
    body: "The marking event is captured with machine, operator, asset, timestamp, location, and evidence.",
  },
  {
    label: "Verify",
    title: "Verifiable certificate",
    body: "A digital certificate allows authorized parties to verify the asset identity and supporting proof.",
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
    title: "Vehicles and insurance",
    body: "Support theft deterrence, recovery, claims evidence, fraud prevention, and ownership verification.",
  },
  {
    title: "Solar and distributed energy assets",
    body: "Help connect panels, inverters, and field assets to lifecycle records, maintenance evidence, warranty, and recovery workflows.",
  },
  {
    title: "Industrial and high-value equipment",
    body: "Create durable identity for tools, machines, components, and equipment that must remain traceable over time.",
  },
  {
    title: "Glass and architectural assets",
    body: "Enable permanent identification for glass installations, facades, panels, and high-value surfaces.",
  },
];

const audiences = [
  {
    title: "For insurers",
    body: "Reduce uncertainty in claims, recovery, fraud, and proof of asset identity.",
  },
  {
    title: "For asset owners",
    body: "Maintain confidence that the physical asset matches the record across its lifecycle.",
  },
  {
    title: "For operators and service networks",
    body: "Perform verified marking operations through controlled workflows and certificate-backed service delivery.",
  },
  {
    title: "For investors and partners",
    body: "Explore a hardware-enabled trust infrastructure company with recurring software, service, and network potential.",
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
      <ProblemSection />
      <PermanenceSection />
      <HowItWorks />
      <PhysicalAnchor />
      <MarkingSystem />
      <PlatformSection />
      <UseCases />
      <AudiencePathways />
      <CurrentStage />
      <FinalCTA />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#060607]/65 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-3" aria-label="Stela home">
          <span className="brand-mark" aria-hidden="true" />
          <span className="text-sm font-medium tracking-[0.36em] text-white">STELA</span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${slugify(item)}`}
              className="text-sm text-white/62 transition hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-white/18 bg-white/[0.07] px-4 py-2 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] transition hover:border-white/32 hover:bg-white/[0.11]"
        >
          Request brief
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden px-5 pt-28 sm:px-8 lg:pt-36">
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 pb-20 lg:grid-cols-[1fr_0.92fr] lg:pb-28">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.42em] text-[var(--stela-champagne)]">
            Precision made permanent
          </p>
          <h1 className="text-balance text-6xl font-semibold leading-[0.93] tracking-[-0.045em] text-white sm:text-7xl lg:text-8xl">
            Permanent marks.
            <br />
            Verified records.
            <br />
            Trusted assets.
          </h1>
          <p className="mt-8 max-w-2xl text-pretty text-xl leading-8 text-white/76 sm:text-2xl sm:leading-9">
            Stela creates a lasting link between physical assets and digital proof - combining precision marking,
            signed evidence events, and verifiable certificates.
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
    <div className="precision-wrap" aria-label="Permanent physical mark connected to a digital certificate">
      <div className="precision-surface">
        <div className="surface-glint" />
        <div className="engraved-code">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="engraved-mark">
          <div className="diamond-cut" />
          <div className="mark-line mark-line-a" />
          <div className="mark-line mark-line-b" />
          <div className="mark-line mark-line-c" />
        </div>
        <div className="evidence-pulse" />
      </div>

      <div className="signal-line" />

      <div className="certificate-card">
        <div className="cert-top">
          <span>Evidence event</span>
          <strong>Verified</strong>
        </div>
        <div className="cert-mark">
          <span className="brand-mark small" />
          <div>
            <p>STELA CERTIFICATE</p>
            <h3>Asset identity linked</h3>
          </div>
        </div>
        <div className="meta-grid">
          {["Machine ID", "Operator", "Timestamp", "Certificate"].map((chip) => (
            <span key={chip}>{chip}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProblemSection() {
  return (
    <Section eyebrow="The trust gap" className="border-t border-white/10">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1fr] lg:items-center">
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
          <p className="mt-6 text-xl leading-8 text-white">
            Stela closes that gap with a permanent physical identifier and a durable digital record.
          </p>
        </div>
        <div className="trust-diagram">
          <div className="diagram-row muted">
            <span>Physical asset</span>
            <em>weak link</em>
            <span>Digital record</span>
          </div>
          <div className="diagram-row strong">
            <span>Physical asset</span>
            <em>Stela trust anchor</em>
            <span>Digital record</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

function PermanenceSection() {
  return (
    <Section id="permanence" eyebrow="Permanence">
      <div className="max-w-4xl">
        <SectionHeading>
          A mark that remains.
          <br />
          A record that holds.
        </SectionHeading>
        <p className="section-copy mt-7">
          Labels fall off. Records drift. Ownership changes. Components move. But important decisions still depend on
          knowing whether the physical asset in front of you is the asset the record says it is.
        </p>
        <p className="section-copy mt-5">
          Stela is built for assets that need to remain identifiable long after the first registration, sale,
          inspection, claim, or transfer.
        </p>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {permanenceCards.map((card) => (
          <GlassCard key={card.title} title={card.title} body={card.body} />
        ))}
      </div>
    </Section>
  );
}

function HowItWorks() {
  return (
    <Section id="marking-system" eyebrow="How it works" className="relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/24 to-transparent" />
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <SectionHeading>Mark. Record. Verify.</SectionHeading>
        <p className="max-w-xl text-lg leading-8 text-white/62">
          A controlled physical action becomes a structured evidence event. The result is identity that can be checked
          later by the people and systems that depend on it.
        </p>
      </div>
      <div className="process-line mt-14">
        {workflowSteps.map((step, index) => (
          <article className="process-step" key={step.label}>
            <span className="step-index">{String(index + 1).padStart(2, "0")}</span>
            <p className="text-sm uppercase tracking-[0.32em] text-[var(--stela-champagne)]">{step.label}</p>
            <h3 className="mt-5 text-2xl font-semibold text-white">{step.title}</h3>
            <p className="mt-4 leading-7 text-white/62">{step.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function PhysicalAnchor() {
  return (
    <Section id="physical-anchor" eyebrow="Physical anchor">
      <div className="anchor-panel">
        <div>
          <SectionHeading>A physical anchor for digital confidence.</SectionHeading>
          <p className="section-copy mt-7">
            Digital records alone cannot prove that the asset in front of you is the correct asset. Stela strengthens
            existing systems by giving them a more trustworthy connection to the physical world.
          </p>
          <p className="mt-7 text-2xl font-medium tracking-[-0.02em] text-white">
            The mark anchors the asset. The record preserves the proof.
          </p>
        </div>
        <div className="anchor-visual" aria-hidden="true">
          <div className="anchor-slab">
            <span />
            <span />
            <span />
          </div>
          <div className="anchor-certificate">
            <p>Certificate</p>
            <strong>Verified origin</strong>
          </div>
        </div>
      </div>
    </Section>
  );
}

function MarkingSystem() {
  return (
    <Section id="marking-system" eyebrow="Controlled field marking">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-start">
        <div>
          <SectionHeading>Built for controlled field marking.</SectionHeading>
          <p className="section-copy mt-7">
            Stela&apos;s marking system is designed for authorized, auditable operation - combining precision physical
            marking with controlled workflows, operator identity, machine identity, and signed event records.
          </p>
        </div>
        <div className="feature-grid">
          {markingFeatures.map((feature) => (
            <div key={feature} className="feature-chip">
              {feature}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function PlatformSection() {
  return (
    <Section id="platform" eyebrow="Trust history">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div>
          <SectionHeading>Every mark becomes part of an asset trust history.</SectionHeading>
          <p className="section-copy mt-7">
            Stela turns a physical marking event into structured evidence that can support insurance, recovery,
            maintenance, compliance, ownership, warranty, and lifecycle decisions.
          </p>
          <p className="section-copy mt-5">
            Stela does not ask organizations to replace their systems. It gives those systems a more trustworthy
            connection to the physical asset.
          </p>
        </div>
        <div className="chain">
          {["Asset", "Mark", "Evidence event", "Certificate", "Trust history"].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </Section>
  );
}

function UseCases() {
  return (
    <Section id="use-cases" eyebrow="Target applications">
      <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
        <div>
          <SectionHeading>Built for assets where identity matters.</SectionHeading>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/58">
            Initial target applications for Stela&apos;s pre-commercial development and pilot conversations.
          </p>
        </div>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {useCases.map((card) => (
          <GlassCard key={card.title} title={card.title} body={card.body} />
        ))}
      </div>
    </Section>
  );
}

function AudiencePathways() {
  return (
    <Section id="investors" eyebrow="Audience pathways">
      <SectionHeading>For organizations that need asset identity to hold.</SectionHeading>
      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {audiences.map((card) => (
          <GlassCard key={card.title} title={card.title} body={card.body} compact />
        ))}
      </div>
    </Section>
  );
}

function CurrentStage() {
  return (
    <Section eyebrow="Current stage">
      <div className="stage-panel">
        <div>
          <SectionHeading>Built with ambition. Presented with transparency.</SectionHeading>
          <p className="section-copy mt-7">
            Stela is in pre-commercial development. The system architecture, technical validation plan, trust model,
            and business model have been defined. The next milestones are prototype validation, formal IP filings,
            pilot partnerships, and market-specific proof of value.
          </p>
        </div>
        <div className="milestone-stack">
          {milestones.map((milestone) => (
            <div key={milestone}>
              <span />
              {milestone}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <section id="contact" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="cta-panel mx-auto max-w-7xl">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.42em] text-[var(--stela-champagne)]">
          Physical-digital trust infrastructure
        </p>
        <h2 className="max-w-4xl text-balance text-5xl font-semibold leading-none tracking-[-0.045em] text-white sm:text-7xl">
          Build trust into the asset itself.
        </h2>
        <p className="mt-7 max-w-2xl text-xl leading-8 text-white/66">
          Stela is preparing the next generation of physical-digital asset identity - permanent in the real world,
          verifiable in the digital one.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href="mailto:brief@stela.example" className="button-primary">
            Request investor brief
          </a>
          <a href="mailto:pilot@stela.example" className="button-secondary">
            Discuss a pilot use case
          </a>
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
          <span className="brand-mark small" aria-hidden="true" />
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
    <section id={id} className={`px-5 py-24 sm:px-8 sm:py-32 ${className}`}>
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
    <h2 className="text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
      {children}
    </h2>
  );
}

function GlassCard({
  title,
  body,
  compact = false,
}: {
  title: string;
  body: string;
  compact?: boolean;
}) {
  return (
    <article className={`glass-card ${compact ? "min-h-56" : "min-h-64"}`}>
      <span className="card-rule" aria-hidden="true" />
      <h3 className="text-2xl font-semibold tracking-[-0.02em] text-white">{title}</h3>
      <p className="mt-5 leading-7 text-white/62">{body}</p>
    </article>
  );
}

function slugify(value: string) {
  return value.toLowerCase().replace(/\s+/g, "-");
}

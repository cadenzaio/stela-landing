import { StelaMark } from "@/components/brand/StelaMark";
import { SiteFooter, SiteHeader } from "@/components/site/SiteShell";
import { contactPath, pagePath, type Locale } from "@/lib/i18n/config";
import { en } from "@/lib/i18n/locales/en";
import type { HomeMessages } from "@/lib/i18n/types";

type HeroVariant = "etched-origin" | "refracted-surface" | "proof-emergence";
type MaterialTreatment = "subtle-incision" | "optical-incision";

// Development review switch. Keep production on the recommended defaults.
const HERO_VARIANT: HeroVariant = "etched-origin";
const MATERIAL_TREATMENT: MaterialTreatment = "optical-incision";

export function StelaLanding({ messages = en.home, locale = "en" }: { messages?: HomeMessages; locale?: Locale }) {
  return (
    <main className="stela-page min-h-screen overflow-hidden bg-[var(--stela-black)] text-[var(--stela-ivory)]">
      <SiteHeader />
      <Hero messages={messages} locale={locale} />
      <TrustGap messages={messages.trust} />
      <Mechanism messages={messages.mechanism} />
      <PermanenceLifecycle messages={messages.permanence} />
      <MarkingSystem messages={messages.marking} />
      <UseCases messages={messages.applications} />
      <FinalSection messages={messages.final} locale={locale} />
      <SiteFooter />
    </main>
  );
}

function Hero({ messages, locale }: { messages: HomeMessages; locale: Locale }) {
  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden px-5 pt-28 sm:px-8 lg:pt-34">
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-layout mx-auto grid w-full max-w-7xl items-center gap-12 pb-16 lg:grid-cols-[1fr_0.92fr] lg:pb-24">
        <div className="hero-copy max-w-3xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.42em] text-[var(--stela-champagne)]">
            {messages.hero.eyebrow}
          </p>
          <h1 className="hero-title font-semibold text-white">
            {messages.hero.title.map((line) => <span key={line}>{line}</span>)}
          </h1>
          <p className="mt-8 max-w-2xl text-pretty text-xl leading-8 text-white/76 sm:text-2xl sm:leading-9">
            {messages.hero.copy}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/54 sm:text-lg">
            {messages.hero.note}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href={pagePath(locale, "platform")} className="button-primary">
              {messages.hero.explore}
            </a>
            <a href={contactPath(locale, "investor")} className="button-secondary">
              {messages.hero.investor}
            </a>
          </div>
        </div>
        <PrecisionMarkVisual messages={messages.visual} />
      </div>
    </section>
  );
}

function PrecisionMarkVisual({ messages }: { messages: HomeMessages["visual"] }) {
  return (
    <div
      className={`precision-wrap hero-variant-${HERO_VARIANT} material-${MATERIAL_TREATMENT}`}
      aria-label={messages.aria}
    >
      <div className="glass-reflection" aria-hidden="true" />
      <div className="origin-surface">
        <div className="surface-depth" />
        <div className="surface-horizon" />
        <div className="surface-glint" />
        <div className="surface-refraction" />
        <div className="surface-etch top" />
        <div className="engraved-origin">
          <StelaMark variant="full" size="hero" tone="etched" label={messages.markLabel} />
        </div>
        <div className="origin-label">{messages.physicalOrigin}</div>
      </div>

      <svg className="proof-link" viewBox="0 0 242 108" preserveAspectRatio="none" aria-hidden="true">
        <path d="M1 10 L241 107" />
      </svg>

      <div className="proof-certificate">
        <div className="cert-top">
          <span>{messages.signedProof}</span>
          <strong>{messages.verified}</strong>
        </div>
        <div className="cert-mark">
          <StelaMark variant="compact" size="small" />
          <div>
            <p>{messages.certificate}</p>
            <h3>{messages.assetLinked}</h3>
          </div>
        </div>
        <div className="evidence-ledger">
          {messages.evidenceRows.map((row) => (
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

function TrustGap({ messages }: { messages: HomeMessages["trust"] }) {
  return (
    <Section eyebrow={messages.eyebrow} className="border-t border-white/10">
      <div className="grid gap-10 lg:grid-cols-[0.96fr_1fr] lg:items-center">
        <div>
          <SectionHeading>
            {messages.title[0]}
            <br />
            {messages.title[1]}
            <br />
            {messages.title[2]}
          </SectionHeading>
          <p className="section-copy mt-7">
            {messages.copy}
          </p>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-white">
            {messages.emphasis}
          </p>
        </div>
        <div className="trust-diagram">
          <div className="diagram-row muted">
            <span>{messages.physicalAsset}</span>
            <em><i />{messages.weakLink}<i /></em>
            <span>{messages.digitalRecord}</span>
          </div>
          <div className="diagram-row strong">
            <span>{messages.physicalAsset}</span>
            <em><i />{messages.trustAnchor}<i /></em>
            <span>{messages.digitalRecord}</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Mechanism({ messages }: { messages: HomeMessages["mechanism"] }) {
  return (
    <Section id="platform" eyebrow={messages.eyebrow} className="relative">
      <div className="section-hairline" aria-hidden="true" />
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <SectionHeading>{messages.title}</SectionHeading>
        <p className="max-w-lg text-lg leading-8 text-white/62">
          {messages.intro}
        </p>
      </div>
      <div className="sequence-track mt-12">
        <div className="sequence-beam" aria-hidden="true" />
        {messages.steps.map((step, index) => (
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

function PermanenceLifecycle({ messages }: { messages: HomeMessages["permanence"] }) {
  return (
    <Section id="permanence" eyebrow={messages.eyebrow} className="material-section">
      <div className="max-w-4xl">
        <SectionHeading>
          {messages.title[0]}
          <br />
          {messages.title[1]}
        </SectionHeading>
        <p className="section-copy mt-7">
          {messages.copy}
        </p>
        <p className="mt-6 text-xl leading-8 text-white">{messages.emphasis}</p>
      </div>
      <div className="lifecycle-timeline etched" aria-label={messages.aria}>
        <span className="persistent-mark" aria-hidden="true" />
        {messages.stages.map((stage, index) => (
          <div className="lifecycle-stage" key={stage}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{stage}</strong>
          </div>
        ))}
      </div>
    </Section>
  );
}

function MarkingSystem({ messages }: { messages: HomeMessages["marking"] }) {
  return (
    <Section id="marking-system" eyebrow={messages.eyebrow}>
      <div className="marking-layout">
        <div>
          <SectionHeading>{messages.title}</SectionHeading>
          <p className="product-line">{messages.productLine}</p>
          <p className="section-copy mt-6">
            {messages.copy}
          </p>
        </div>
        <div className="device-module" aria-label={messages.visualAria}>
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
            <p>{messages.controlledSession}</p>
            <strong>{messages.authorized}</strong>
            <div>{messages.machineActive}</div>
          </div>
        </div>
      </div>
      <div className="feature-rail compact">
        {messages.features.map((feature) => (
          <div key={feature} className="feature-chip">
            <span />
            {feature}
          </div>
        ))}
      </div>
    </Section>
  );
}

function UseCases({ messages }: { messages: HomeMessages["applications"] }) {
  return (
    <Section id="use-cases" eyebrow={messages.eyebrow}>
      <span id="investors" className="anchor-offset" aria-hidden="true" />
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <SectionHeading>{messages.title}</SectionHeading>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/58">
            {messages.intro}
          </p>
        </div>
      </div>
      <div className="use-case-panels editorial">
        {messages.items.map((card) => (
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

function FinalSection({ messages, locale }: { messages: HomeMessages["final"]; locale: Locale }) {
  return (
    <section id="contact" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="final-panel mx-auto max-w-7xl">
        <div className="final-trust-line" aria-hidden="true" />
        <div>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.42em] text-[var(--stela-champagne)]">
            {messages.eyebrow}
          </p>
          <SectionHeading>
            {messages.title[0]}
            <br />
            {messages.title[1]}
          </SectionHeading>
          <p className="section-copy mt-7">
            {messages.stageCopy}
          </p>
          <div className="mt-10">
            <h2 className="text-balance text-4xl font-semibold leading-none tracking-[-0.04em] text-white sm:text-5xl">
              {messages.ctaTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/64">
              {messages.ctaCopy}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={contactPath(locale, "investor")} className="button-primary">
                {messages.investor}
              </a>
              <a href={contactPath(locale, "pilot")} className="button-secondary">
                {messages.pilot}
              </a>
            </div>
          </div>
        </div>
        <div className="milestone-stack compact">
          {messages.milestones.map((milestone) => (
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

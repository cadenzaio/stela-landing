import { Buildings } from "@phosphor-icons/react/dist/ssr/Buildings";
import { Certificate } from "@phosphor-icons/react/dist/ssr/Certificate";
import { Cube } from "@phosphor-icons/react/dist/ssr/Cube";
import { Factory } from "@phosphor-icons/react/dist/ssr/Factory";
import { Fingerprint } from "@phosphor-icons/react/dist/ssr/Fingerprint";
import { LinkSimple } from "@phosphor-icons/react/dist/ssr/LinkSimple";
import { PenNibStraight } from "@phosphor-icons/react/dist/ssr/PenNibStraight";
import { SealCheck } from "@phosphor-icons/react/dist/ssr/SealCheck";
import { ShieldCheck } from "@phosphor-icons/react/dist/ssr/ShieldCheck";
import { Sun } from "@phosphor-icons/react/dist/ssr/Sun";
import Image from "next/image";
import { StelaMark } from "@/components/brand/StelaMark";
import { StelaHomepagePrototype } from "@/components/landing/StelaHomepagePrototype";
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
  if (locale === "en" || locale === "es") return <StelaHomepagePrototype locale={locale} />;
  return <LegacyStelaLanding messages={messages} locale={locale} />;
}

function LegacyStelaLanding({ messages, locale }: { messages: HomeMessages; locale: Locale }) {
  return (
    <main className="stela-page stela-home-page min-h-screen overflow-hidden bg-[var(--stela-black)] text-[var(--stela-ivory)]">
      <SiteHeader />
      <Hero messages={messages} locale={locale} />
      <HowItWorksBand messages={messages.mechanism} />
      <LuminousStandard messages={messages} />
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
    <section id="top" className="luminous-hero relative isolate min-h-screen overflow-hidden px-5 pt-28 sm:px-8 lg:pt-34">
      <div className="luminous-hero-shade" aria-hidden="true" />
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-layout luminous-hero-layout mx-auto grid w-full max-w-7xl items-center gap-12 pb-16 lg:grid-cols-[1fr_0.92fr] lg:pb-24">
        <div className="hero-copy max-w-3xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.42em] text-[var(--stela-champagne)]">
            {messages.hero.eyebrow}
          </p>
          <h1 className="hero-title font-semibold text-white">
            {messages.hero.title.map((line) => <span key={line}>{line}</span>)}
          </h1>
          <p className="luminous-hero-copy mt-8 max-w-xl text-pretty text-xl leading-8 text-white/76 sm:text-2xl sm:leading-9">
            {messages.hero.concise}
          </p>
          <div className="hero-actions mt-10 flex flex-col gap-3 sm:flex-row">
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
      <div className="proof-assembly proof-assembly-vehicle">
        <svg className="proof-link" viewBox="0 0 242 108" preserveAspectRatio="none" aria-hidden="true">
          <path d="M102 20 L241 34" />
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
    </div>
  );
}

function HowItWorksBand({ messages }: { messages: HomeMessages["mechanism"] }) {
  const icons = [PenNibStraight, Fingerprint, SealCheck];

  return (
    <section className="hero-process-band" aria-labelledby="hero-process-title">
      <div className="hero-process-band-inner">
        <p id="hero-process-title">{messages.howItWorks}</p>
        <div className="hero-process-band-steps">
          {messages.steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <div key={step.label}>
                <Icon size={48} weight="thin" aria-hidden="true" />
                <strong>{step.label}</strong>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LuminousStandard({ messages }: { messages: HomeMessages }) {
  const principles = [
    { label: messages.trust.physicalAsset, Icon: Cube },
    { label: messages.visual.signedProof, Icon: Fingerprint },
    { label: messages.trust.digitalRecord, Icon: Certificate },
  ];

  return (
    <section id="material-standard" className="luminous-standard px-5 py-16 sm:px-8 sm:py-20">
      <div className="luminous-standard-inner mx-auto w-full max-w-7xl">
        <div className="luminous-standard-copy">
          <p className="luminous-standard-eyebrow">{messages.trust.eyebrow}</p>
          <h2>{messages.applications.title}</h2>
          <p className="luminous-standard-copyline">{messages.trust.emphasis}</p>
          <div className="luminous-principles">
            {principles.map(({ label, Icon }) => (
              <div key={label}>
                <Icon size={42} weight="thin" aria-hidden="true" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustGap({ messages }: { messages: HomeMessages["trust"] }) {
  return (
    <Section id="trust-gap" eyebrow={messages.eyebrow} className="trust-gap-section border-t border-white/10">
      <div className="grid gap-10 lg:grid-cols-[0.96fr_1fr] lg:items-center">
        <div>
          <SectionHeading>
            {messages.title[0]}
            <br />
            {messages.title[1]}
            <br />
            {messages.title[2]}
          </SectionHeading>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-white">
            {messages.emphasis}
          </p>
        </div>
        <div className="trust-comparison" aria-label={`${messages.weakLink}; ${messages.trustAnchor}`}>
          <div className="trust-comparison-row weak">
            <div className="trust-comparison-node">
              <Cube size={28} weight="thin" aria-hidden="true" />
              <span>{messages.physicalAsset}</span>
            </div>
            <div className="trust-comparison-link">
              <i />
              <em>{messages.weakLink}</em>
              <i />
            </div>
            <div className="trust-comparison-node">
              <Certificate size={28} weight="thin" aria-hidden="true" />
              <span>{messages.digitalRecord}</span>
            </div>
          </div>
          <div className="trust-comparison-row strong">
            <div className="trust-comparison-node">
              <Cube size={28} weight="thin" aria-hidden="true" />
              <span>{messages.physicalAsset}</span>
            </div>
            <div className="trust-comparison-link">
              <i />
              <span className="trust-anchor-label">
                <StelaMark variant="compact" size="small" />
                <em>{messages.trustAnchor}</em>
              </span>
              <i />
            </div>
            <div className="trust-comparison-node">
              <Certificate size={28} weight="thin" aria-hidden="true" />
              <span>{messages.digitalRecord}</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Mechanism({ messages }: { messages: HomeMessages["mechanism"] }) {
  const icons = [PenNibStraight, Fingerprint, SealCheck];

  return (
    <Section id="platform" eyebrow={messages.eyebrow} className="mechanism-section relative">
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
            <div className="sequence-node">
              {(() => {
                const Icon = icons[index];
                return <Icon size={24} weight="thin" aria-hidden="true" />;
              })()}
            </div>
            <p className="sequence-label">{step.label}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function PermanenceLifecycle({ messages }: { messages: HomeMessages["permanence"] }) {
  return (
    <Section id="permanence" eyebrow={messages.eyebrow} className="permanence-section material-section">
      <div className="max-w-4xl">
        <SectionHeading>
          {messages.title[0]}
          <br />
          {messages.title[1]}
        </SectionHeading>
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
  const featureIcons = [PenNibStraight, ShieldCheck, Fingerprint, LinkSimple, Cube, Certificate];

  return (
    <Section id="marking-system" eyebrow={messages.eyebrow} className="marking-section">
      <div className="marking-layout">
        <div>
          <SectionHeading>{messages.title}</SectionHeading>
          <p className="product-line">{messages.productLine}</p>
        </div>
        <div className="device-stack" aria-label={messages.visualAria}>
          <div className="device-module" aria-hidden="true">
            <div className="device-trust-line" />
            <div className="device-head">
              <span className="device-aperture" />
              <span className="device-tip" />
            </div>
            <div className="device-surface">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="session-panel">
            <p>{messages.controlledSession}</p>
            <strong>{messages.authorized}</strong>
            <div>{messages.machineActive}</div>
          </div>
        </div>
      </div>
      <div className="feature-rail compact">
        {messages.features.map((feature, index) => {
          const Icon = featureIcons[index];
          return (
          <div key={feature} className="feature-chip">
            <Icon size={22} weight="thin" aria-hidden="true" />
            {feature}
          </div>
          );
        })}
      </div>
    </Section>
  );
}

function UseCases({ messages }: { messages: HomeMessages["applications"] }) {
  const applicationIcons = [ShieldCheck, Sun, Factory, Buildings];
  const applicationImages = [
    "/images/stela-application-vehicle-rear.jpg",
    "/images/stela-application-solar-sunrise-v2.jpg",
    "/images/stela-application-equipment.webp",
    "/images/stela-application-glass.webp",
  ];

  return (
    <Section id="use-cases" eyebrow={messages.eyebrow} className="applications-section">
      <span id="investors" className="anchor-offset" aria-hidden="true" />
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <SectionHeading>{messages.title}</SectionHeading>
        </div>
      </div>
      <div className="use-case-panels editorial">
        {messages.items.map((card, index) => {
          const Icon = applicationIcons[index];
          return (
          <article className="case-panel" key={card.title}>
            <div className="case-media" aria-hidden="true">
              <Image
                src={applicationImages[index]}
                alt=""
                fill
                unoptimized
                sizes="(max-width: 760px) 100vw, (max-width: 1180px) 50vw, 25vw"
              />
            </div>
            <Icon size={36} weight="thin" aria-hidden="true" />
            <p>{card.tag}</p>
            <h3>{card.title}</h3>
          </article>
          );
        })}
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

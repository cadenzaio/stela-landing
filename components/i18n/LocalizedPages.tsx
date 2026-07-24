import { ContactForm } from "@/components/contact/ContactForm";
import { StelaLanding } from "@/components/landing/StelaLanding";
import {
  ContentPage,
  ContentSection,
  ConversionSection,
  EditorialEntries,
  PageHero,
  RuledList,
  Sequence,
} from "@/components/site/ContentPage";
import { contactPath, type Locale, type SupportingPageSlug } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

export function LocalizedPage({
  locale,
  slug,
  dictionary,
  intent,
}: {
  locale: Locale;
  slug?: SupportingPageSlug;
  dictionary: Dictionary;
  intent?: string;
}) {
  if (!slug) return <StelaLanding messages={dictionary.home} locale={locale} />;
  if (slug === "platform") return <LocalizedPlatform locale={locale} dictionary={dictionary} />;
  if (slug === "applications") return <LocalizedApplications locale={locale} dictionary={dictionary} />;
  if (slug === "partners") return <LocalizedPartners locale={locale} dictionary={dictionary} />;
  if (slug === "investors") return <LocalizedInvestors locale={locale} dictionary={dictionary} />;
  return <LocalizedContact dictionary={dictionary} intent={intent} />;
}

function LocalizedPlatform({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  const page = dictionary.platform;
  return (
    <ContentPage variant="platform">
      <PageHero
        {...page.hero}
        primary={{ label: page.hero.actions.primary, href: contactPath(locale, "use-case") }}
        secondary={{ label: page.hero.actions.secondary, href: contactPath(locale, "technical-brief") }}
      />
      <ContentSection id="physical-anchor" eyebrow={page.physical.eyebrow} title={page.physical.title} aside={<p>{page.physical.note}</p>}>
        <p>{page.physical.copy}</p>
      </ContentSection>
      <ContentSection eyebrow={page.event.eyebrow} title={page.event.title}>
        <p>{page.event.copy}</p>
        <Sequence
          items={page.event.sequence}
          icons={[IdentificationCard, UserCircleCheck, MapPin, Fingerprint]}
          label={page.event.sequenceLabel}
        />
      </ContentSection>
      <ContentSection eyebrow={page.proof.eyebrow} title={page.proof.title} aside={<p>{page.proof.note}</p>}>
        <p>{page.proof.copy}</p>
        <Sequence
          items={page.proof.sequence}
          icons={[PenNibStraight, Fingerprint, Certificate, SealCheck]}
          label={page.proof.sequenceLabel}
        />
      </ContentSection>
      <ContentSection eyebrow={page.lifecycle.eyebrow} title={page.lifecycle.title}>
        <p>{page.lifecycle.copy}</p>
        <Sequence
          items={page.lifecycle.sequence}
          icons={[PenNibStraight, IdentificationCard, ShieldCheck, Clock, Certificate, Fingerprint, SealCheck]}
          label={page.lifecycle.sequenceLabel}
        />
      </ContentSection>
      <ConversionSection
        eyebrow={dictionary.common.nextConversation}
        title={page.conversion.title}
        copy={page.conversion.copy}
        primary={{ label: page.conversion.actions.primary, href: contactPath(locale, "use-case") }}
        secondary={{ label: page.conversion.actions.secondary, href: contactPath(locale, "technical-brief") }}
      />
    </ContentPage>
  );
}

function LocalizedApplications({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  const page = dictionary.applications;
  const intents = ["insurer", "use-case", "use-case", "use-case"];
  return (
    <ContentPage variant="applications">
      <PageHero
        {...page.hero}
        primary={{ label: page.hero.actions.primary, href: contactPath(locale, "use-case") }}
        secondary={{ label: page.hero.actions.secondary, href: contactPath(locale, "partner") }}
      />
      <ContentSection title={page.criteriaTitle}><RuledList items={page.criteria} /></ContentSection>
      <section className="content-section application-section">
        <div className="content-shell">
          <EditorialEntries
            entries={page.entries.map((entry, index) => ({
              ...entry,
              action: { label: entry.action, href: contactPath(locale, intents[index]) },
              image: [
                "/images/stela-application-vehicle-inspection-v2.jpg",
                "/images/stela-application-solar-sunrise-v4.jpg",
                "/images/stela-application-equipment.webp",
                "/images/stela-application-glass.webp",
              ][index],
              imageAlt: "",
              icon: [CarProfile, SolarPanel, Factory, Buildings][index],
            }))}
          />
        </div>
      </section>
      <ConversionSection
        eyebrow={dictionary.common.nextConversation}
        title={page.conversion.title}
        copy={page.conversion.copy}
        primary={{ label: page.conversion.actions.primary, href: contactPath(locale, "use-case") }}
        secondary={{ label: page.conversion.actions.secondary, href: contactPath(locale, "partner") }}
      />
    </ContentPage>
  );
}

function LocalizedPartners({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  const page = dictionary.partners;
  return (
    <ContentPage variant="partners">
      <PageHero
        {...page.hero}
        primary={{ label: page.hero.actions.primary, href: contactPath(locale, "pilot") }}
        secondary={{ label: page.hero.actions.secondary, href: contactPath(locale, "partner") }}
      />
      <ContentSection title={page.audiencesTitle}><RuledList items={page.audiences} /></ContentSection>
      <ContentSection eyebrow={page.collaboration.eyebrow} title={page.collaboration.title} aside={<p>{page.collaboration.note}</p>}>
        <Sequence
          items={page.collaboration.sequence}
          icons={[Cube, FlowArrow, Target, Flask, ClipboardText, CheckCircle]}
          label={page.collaboration.sequenceLabel}
        />
        <RuledList items={page.collaboration.topics} />
      </ContentSection>
      <ContentSection eyebrow={page.value.eyebrow} title={page.value.title}>
        <p>{page.value.copy}</p>
        <RuledList items={page.value.outcomes} />
      </ContentSection>
      <ContentSection eyebrow={page.stage.eyebrow} title={page.stage.title}><p>{page.stage.copy}</p></ContentSection>
      <ConversionSection
        eyebrow={dictionary.common.nextConversation}
        title={page.conversion.title}
        copy={page.conversion.copy}
        primary={{ label: page.conversion.actions.primary, href: contactPath(locale, "pilot") }}
        secondary={{ label: page.conversion.actions.secondary, href: contactPath(locale, "partner") }}
      />
    </ContentPage>
  );
}

function LocalizedInvestors({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  const page = dictionary.investors;
  return (
    <ContentPage variant="investors">
      <PageHero
        {...page.hero}
        primary={{ label: page.hero.actions.primary, href: contactPath(locale, "investor") }}
        secondary={{ label: page.hero.actions.secondary, href: contactPath(locale, "investor") }}
      />
      <ContentSection eyebrow={page.thesis.eyebrow} title={page.thesis.title}>
        <p>{page.thesis.copy}</p><p className="content-emphasis">{page.thesis.emphasis}</p>
      </ContentSection>
      <ContentSection eyebrow={page.approach.eyebrow} title={page.approach.title}>
        <Sequence
          items={page.approach.sequence}
          icons={[PenNibStraight, Fingerprint, Certificate, SealCheck, ShieldCheck]}
          label={page.approach.sequenceLabel}
        /><p>{page.approach.copy}</p>
      </ContentSection>
      <ContentSection eyebrow={page.model.eyebrow} title={page.model.title}>
        <RuledList items={page.model.items} /><p className="content-note">{page.model.note}</p>
      </ContentSection>
      <ContentSection eyebrow={page.difference.eyebrow} title={page.difference.title}>
        <p>{page.difference.copy}</p><RuledList items={page.difference.items} />
      </ContentSection>
      <ContentSection eyebrow={page.stage.eyebrow} title={page.stage.title}><RuledList items={page.stage.items} /></ContentSection>
      <ContentSection eyebrow={page.private.eyebrow} title={page.private.title}><RuledList items={page.private.items} /></ContentSection>
      <ConversionSection
        eyebrow={dictionary.common.nextConversation}
        title={page.conversion.title}
        copy={page.conversion.copy}
        primary={{ label: page.conversion.actions.primary, href: contactPath(locale, "investor") }}
        secondary={{ label: page.conversion.actions.secondary, href: contactPath(locale, "investor") }}
      />
    </ContentPage>
  );
}

function LocalizedContact({ dictionary, intent }: { dictionary: Dictionary; intent?: string }) {
  const page = dictionary.contact;
  return (
    <ContentPage variant="contact">
      <section className="contact-hero">
        <div className="content-shell contact-hero-inner">
          <p className="content-eyebrow">{page.hero.eyebrow}</p>
          <h1>{page.hero.title}</h1>
          <p>{page.hero.copy}</p>
        </div>
      </section>
      <section className="contact-section">
        <div className="content-shell contact-layout">
          <aside>
            <p className="content-eyebrow">{page.aside.eyebrow}</p>
            <h2>{page.aside.title}</h2>
            <p>{page.aside.copy}</p>
          </aside>
          <ContactForm initialIntent={intent} messages={page.form} />
        </div>
      </section>
    </ContentPage>
  );
}
import {
  Buildings,
  CarProfile,
  Certificate,
  CheckCircle,
  ClipboardText,
  Clock,
  Cube,
  Factory,
  Fingerprint,
  Flask,
  FlowArrow,
  IdentificationCard,
  MapPin,
  PenNibStraight,
  SealCheck,
  ShieldCheck,
  SolarPanel,
  Target,
  UserCircleCheck,
} from "@phosphor-icons/react/dist/ssr";

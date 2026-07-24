import {
  Certificate,
  Fingerprint,
  PenNibStraight,
  SealCheck,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";
import { pageMetadata } from "@/lib/metadata";
import {
  ContentPage,
  ContentSection,
  ConversionSection,
  PageHero,
  RuledList,
  Sequence,
} from "@/components/site/ContentPage";

export const metadata = pageMetadata({
  title: "Investors | Stela",
  description: "The Stela investment thesis, intended platform model, current development stage, and private brief path.",
  slug: "investors",
});

export default function InvestorsPage() {
  return (
    <ContentPage variant="investors">
      <PageHero
        eyebrow="Investors"
        title="A permanent identity layer for physical assets."
        copy="Stela combines direct asset marking with secure evidence and later verification, beginning with vehicles and solar panels."
        note="The opportunity is a hardware-enabled platform whose value can continue through insurance, maintenance, transfer, recovery, and other lifecycle events."
        primary={{ label: "Request investor brief", href: "/contact?intent=investor" }}
        secondary={{ label: "Discuss the investment thesis", href: "/contact?intent=investor" }}
      />

      <ContentSection eyebrow="The thesis" title="The asset is physical. The decision is digital.">
        <p>
          Organizations increasingly make consequential decisions about physical assets using digital information.
          The value of those records depends on whether the physical object can be confidently linked to the identity,
          history, and evidence represented in the system.
        </p>
        <p className="content-emphasis">Stela is being built to strengthen that connection.</p>
      </ContentSection>

      <ContentSection eyebrow="The approach" title="A physical anchor connected to digital proof.">
        <Sequence
          items={["Permanent mark", "Controlled evidence event", "Signed record", "Verifiable certificate", "Lifecycle trust history"]}
          icons={[PenNibStraight, Fingerprint, Certificate, SealCheck, ShieldCheck]}
          label="Intended Stela platform approach"
        />
        <p>
          The intended platform combines a physical marking system with potential recurring software, evidence,
          certificate, integration, and service opportunities.
        </p>
      </ContentSection>

      <ContentSection eyebrow="Potential business model" title="Hardware-enabled, with recurring platform potential.">
        <RuledList
          items={[
            "Physical marking system or deployment",
            "Marking usage or credits",
            "Recurring platform access",
            "Certificate and verification services",
            "Service-network participation",
            "Integrations and enterprise services",
          ]}
        />
        <p className="content-note">
          The commercial model remains under validation and may differ by market, workflow, and partner structure.
        </p>
      </ContentSection>

      <ContentSection eyebrow="Why Stela is different" title="The defensibility is in the complete system.">
        <p>
          Labels can be removed, records can drift away from the object, and permanent marking methods often stop at
          the mark itself. Stela combines the physical identifier, the controlled creation event, and the record used
          for later verification.
        </p>
        <RuledList
          items={[
            "A direct identifier on the physical asset",
            "A controlled and attributable marking process",
            "Evidence captured when the identity is created",
            "A record designed for later verification",
            "Industry workflows that create recurring lifecycle value",
          ]}
        />
      </ContentSection>

      <ContentSection eyebrow="Current stage" title="Built carefully. Validated openly.">
        <RuledList
          items={[
            "Product and system architecture defined",
            "Trust and evidence model developed",
            "Technical prototype development underway",
            "Market research and customer discovery underway",
            "IP strategy and planned filings",
            "Pilot and validation partner conversations",
          ]}
        />
      </ContentSection>

      <ContentSection eyebrow="Private material" title="Further information is available by request.">
        <RuledList
          items={[
            "Investor brief",
            "Product architecture",
            "Market research",
            "Validation roadmap",
            "Business model",
            "Current risks",
            "Development milestones",
            "Team experience and operating plan",
          ]}
        />
      </ContentSection>

      <ConversionSection
        title="Request the Stela investor brief."
        copy="We share further information directly with investors and strategic partners who want to understand the thesis, current stage, risks, and validation plan in more detail."
        primary={{ label: "Request investor brief", href: "/contact?intent=investor" }}
        secondary={{ label: "Discuss the investment thesis", href: "/contact?intent=investor" }}
      />
    </ContentPage>
  );
}

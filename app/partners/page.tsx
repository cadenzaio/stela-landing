import type { Metadata } from "next";
import { languageAlternates } from "@/lib/i18n/config";
import {
  ContentPage,
  ContentSection,
  ConversionSection,
  PageHero,
  RuledList,
  Sequence,
} from "@/components/site/ContentPage";

export const metadata: Metadata = {
  title: "Partners and Pilots | Stela",
  description: "Explore pre-commercial Stela pilot, validation, technical, and market collaboration.",
  alternates: { canonical: "/partners", languages: languageAlternates("partners") },
};

export default function PartnersPage() {
  return (
    <ContentPage>
      <PageHero
        eyebrow="Partners and pilots"
        title="Bring us a difficult asset-identity problem."
        copy="Stela is looking for organizations with real workflows where confidence in physical asset identity affects operational, financial, insurance, maintenance, compliance, or recovery decisions."
        primary={{ label: "Discuss a pilot", href: "/contact?intent=pilot" }}
        secondary={{ label: "Become a validation partner", href: "/contact?intent=partner" }}
      />

      <ContentSection title="We are interested in conversations with:">
        <RuledList
          items={[
            "Asset owners",
            "Insurers",
            "O&M organizations",
            "Manufacturers",
            "Fleet and equipment operators",
            "Maintenance and service networks",
            "Technical development partners",
            "Distribution or market partners",
            "Research and validation organizations",
          ]}
        />
      </ContentSection>

      <ContentSection
        eyebrow="Collaboration model"
        title="A focused collaboration begins with the decision workflow."
        aside={<p>Before discussing deployment, we examine where uncertainty occurs, what evidence exists, and whether permanent identity could create measurable value.</p>}
      >
        <Sequence
          items={[
            "Define the asset",
            "Map the decision",
            "Identify the trust gap",
            "Test marking feasibility",
            "Define evidence requirements",
            "Design validation",
          ]}
          label="Potential validation collaboration"
        />
        <RuledList
          items={[
            "Target asset and material",
            "Current identity method",
            "Operational workflow",
            "Decision or claim affected",
            "Evidence and integration requirements",
            "Measurable success criteria and disqualifying conditions",
          ]}
        />
      </ContentSection>

      <ContentSection eyebrow="Partner value" title="A serious assessment, not a generic sales process.">
        <p>
          A validation partner can help shape how Stela is developed for a real workflow and receive an early
          assessment of whether the system is likely to be technically and commercially relevant.
        </p>
        <RuledList
          items={[
            "Tailored use-case assessment",
            "Direct input into product requirements",
            "Technical feasibility discussion",
            "Evidence and workflow mapping",
            "Early access to pilot planning",
            "Clear identification of limitations and unresolved risks",
          ]}
        />
      </ContentSection>

      <ContentSection eyebrow="Current stage" title="Pre-commercial collaboration.">
        <p>
          Stela is currently in system development, technical validation, market research, and pilot-partner
          discovery. Collaboration at this stage is intended to validate the problem, solution fit, operational
          feasibility, and measurable value before commercial deployment.
        </p>
      </ContentSection>

      <ConversionSection
        title="Where does asset identity become uncertain in your organization?"
        copy="Describe the asset, the workflow, and the decision that depends on it. We will review whether it is relevant to Stela's current validation program."
        primary={{ label: "Start a pilot conversation", href: "/contact?intent=pilot" }}
        secondary={{ label: "Contact the founders", href: "/contact?intent=partner" }}
      />
    </ContentPage>
  );
}

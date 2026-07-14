import type { Metadata } from "next";
import { languageAlternates } from "@/lib/i18n/config";
import {
  ContentPage,
  ContentSection,
  ConversionSection,
  EditorialEntries,
  PageHero,
  RuledList,
} from "@/components/site/ContentPage";

export const metadata: Metadata = {
  title: "Applications | Stela",
  description: "Potential Stela applications where physical asset identity must remain connected to the correct record.",
  alternates: { canonical: "/applications", languages: languageAlternates("applications") },
};

const relevanceCriteria = [
  "Assets are distributed across many sites",
  "Labels or tags may be removed, replaced, or damaged",
  "Multiple organizations handle the same asset",
  "Maintenance, inspection, ownership, or claim records must match a specific physical object",
  "Theft, substitution, fraud, or recovery creates uncertainty",
  "Assets remain in service for years",
  "Evidence must remain defensible after transfer or operational change",
];

const applications = [
  {
    label: "Vehicles and insurance",
    title: "Identity that can support claims, ownership, recovery, and fraud prevention.",
    copy: "Potential applications include theft deterrence, recovery identification, ownership verification, component identity, claims evidence, and fraud reduction.",
    note: "The underlying permanent-marking principle has historical use in vehicle-related anti-theft applications. The new Stela evidence and platform model is being rebuilt and validated for modern workflows.",
    action: { label: "Discuss an insurance or vehicle use case", href: "/contact?intent=insurer" },
  },
  {
    label: "Renewable energy",
    title: "Physical identity for distributed energy assets.",
    copy: "Potential applications include linking panels, inverters, batteries, transformers, turbine components, and field equipment to maintenance, inspection, warranty, contractor, theft, and recovery records.",
    note: "Stela is researching where renewable-energy asset owners, O&M teams, insurers, and service providers experience costly asset-to-record uncertainty.",
    action: { label: "Contribute operational insight", href: "/contact?intent=use-case" },
  },
  {
    label: "Industrial equipment",
    title: "Durable identity for equipment that moves through operations, service, and ownership.",
    copy: "Potential applications include equipment identity, tool and component traceability, maintenance history, inspection, custody, contractor-issued assets, ownership transfer, and theft recovery.",
    action: { label: "Discuss an equipment workflow", href: "/contact?intent=use-case" },
  },
  {
    label: "Glass and architectural assets",
    title: "Permanent identification for surfaces where temporary labels are not enough.",
    copy: "Potential applications include installation identity, manufacturer and installer evidence, warranty history, facade and panel traceability, inspection, replacement matching, and project handover.",
    note: "This application reflects the historical strengths of the physical marking principle and remains subject to technical and market-specific validation.",
    action: { label: "Discuss a marking application", href: "/contact?intent=use-case" },
  },
];

export default function ApplicationsPage() {
  return (
    <ContentPage>
      <PageHero
        eyebrow="Applications"
        title="Where asset identity needs to hold."
        copy="Stela is being developed for environments where important decisions depend on confidently matching a physical asset to the correct digital record and evidence history."
        note="The value and evidence requirements differ by industry. Current applications are being investigated through research, technical validation, and partner conversations."
        primary={{ label: "Discuss an application", href: "/contact?intent=use-case" }}
        secondary={{ label: "Join a validation conversation", href: "/contact?intent=partner" }}
      />

      <ContentSection title="Stela may be relevant when:">
        <RuledList items={relevanceCriteria} />
      </ContentSection>

      <section className="content-section application-section">
        <div className="content-shell">
          <EditorialEntries entries={applications} />
        </div>
      </section>

      <ConversionSection
        title="Every industry has different evidence requirements."
        copy="Tell us where identity breaks down in your workflow. We are interested in concrete operational problems, not generic expressions of interest."
        primary={{ label: "Discuss an application", href: "/contact?intent=use-case" }}
        secondary={{ label: "Become a validation partner", href: "/contact?intent=partner" }}
      />
    </ContentPage>
  );
}

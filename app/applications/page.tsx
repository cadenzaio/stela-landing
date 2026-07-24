import { Buildings, CarProfile, Factory, SolarPanel } from "@phosphor-icons/react/dist/ssr";
import { pageMetadata } from "@/lib/metadata";
import {
  ContentPage,
  ContentSection,
  ConversionSection,
  EditorialEntries,
  PageHero,
  RuledList,
} from "@/components/site/ContentPage";

export const metadata = pageMetadata({
  title: "Applications | Stela",
  description: "Potential Stela applications where physical asset identity must remain connected to the correct record.",
  slug: "applications",
});

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
    title: "Permanent identity for vehicle glass.",
    copy: "A visible identifier on the vehicle can support theft deterrence, recovery, ownership checks, claims handling, and fraud investigation.",
    note: "The permanent-marking principle has decades of practical use in vehicle protection. Stela is rebuilding it around modern evidence and verification workflows.",
    action: { label: "Discuss an insurance or vehicle use case", href: "/contact?intent=insurer" },
    image: "/images/stela-application-vehicle-inspection-v2.jpg",
    imageAlt: "A contemporary vehicle being inspected",
    icon: CarProfile,
  },
  {
    label: "Renewable energy",
    title: "Identity attached to the panel itself.",
    copy: "Permanent identification can keep panels and other distributed energy assets connected to installation, maintenance, warranty, insurance, theft, and recovery records.",
    note: "The initial focus is on workflows where owners, installers, O&M teams, insurers, and financiers need to know which physical panel a record describes.",
    action: { label: "Contribute operational insight", href: "/contact?intent=use-case" },
    image: "/images/stela-application-solar-sunrise-v4.jpg",
    imageAlt: "Solar panels at sunrise",
    icon: SolarPanel,
  },
  {
    label: "Industrial equipment",
    title: "Durable identity for equipment that moves through operations, service, and ownership.",
    copy: "Equipment identity can remain connected to maintenance, inspection, custody, ownership transfer, and recovery records even as the asset moves between sites and operators.",
    action: { label: "Discuss an equipment workflow", href: "/contact?intent=use-case" },
    image: "/images/stela-application-equipment.webp",
    imageAlt: "Industrial equipment in operation",
    icon: Factory,
  },
  {
    label: "Glass and architectural assets",
    title: "Permanent identification for surfaces where temporary labels are not enough.",
    copy: "A direct identifier can connect installed glass to manufacturer, installer, warranty, inspection, replacement, and project handover records.",
    note: "Material suitability and the right evidence model must be validated for each application.",
    action: { label: "Discuss a marking application", href: "/contact?intent=use-case" },
    image: "/images/stela-application-glass.webp",
    imageAlt: "Architectural glass installed in a modern building",
    icon: Buildings,
  },
];

export default function ApplicationsPage() {
  return (
    <ContentPage variant="applications">
      <PageHero
        eyebrow="Applications"
        title="Built for assets where trusted identity matters."
        copy="Stela is designed for physical assets that are distributed, valuable, long-lived, and difficult to match confidently to the right record."
        note="Vehicles and solar panels are the first focus. Other applications follow the same test: does uncertainty about the physical asset create real operational or financial cost?"
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

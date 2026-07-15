import type { Metadata } from "next";
import { languageAlternates } from "@/lib/i18n/config";
import {
  ContentPage,
  ContentSection,
  ConversionSection,
  PageHero,
  Sequence,
} from "@/components/site/ContentPage";

export const metadata: Metadata = {
  title: "Platform | Stela",
  description: "How Stela connects a permanent physical mark to controlled evidence and a verifiable digital record.",
  alternates: { canonical: "/platform", languages: languageAlternates("platform") },
};

export default function PlatformPage() {
  return (
    <ContentPage variant="platform">
      <PageHero
        eyebrow="The Stela platform"
        title="A trustworthy connection between the asset and its record."
        copy="Stela combines permanent physical marking, controlled evidence capture, and verifiable digital records to strengthen confidence that the physical asset is the asset the system says it is."
        note="It is designed to complement existing asset, insurance, maintenance, and operational systems - not replace them."
        primary={{ label: "Discuss your use case", href: "/contact?intent=use-case" }}
        secondary={{ label: "Request technical brief", href: "/contact?intent=technical-brief" }}
      />

      <ContentSection
        id="physical-anchor"
        eyebrow="Physical origin"
        title="Identity begins with the asset itself."
        aside={<p>The physical mark is an anchor. Confidence also depends on how, when, where, and by whom it was created.</p>}
      >
        <p>
          A permanent precision mark creates a durable point of reference on the physical asset. Unlike a detached
          document or removable label, the identifier is intended to remain part of the asset over time.
        </p>
      </ContentSection>

      <ContentSection eyebrow="Evidence at creation" title="The marking action becomes an evidence event.">
        <p>
          The Stela system is designed to associate the physical marking action with relevant context such as the
          asset, authorized operator, machine identity, timestamp, location, marking session, and supporting evidence.
          The exact evidence model remains subject to technical and workflow validation.
        </p>
        <Sequence items={["Asset", "Authorized session", "Permanent mark", "Evidence event"]} label="Controlled marking event" />
      </ContentSection>

      <ContentSection
        eyebrow="Verifiable record"
        title="The physical origin is preserved digitally."
        aside={<p>Certificate access can depend on the organization, user role, and purpose of verification.</p>}
      >
        <p>
          A signed record and certificate are intended to allow authorized parties to verify the asset identity and
          inspect the evidence connected to the marking event. The certificate is not intended to expose every asset
          record publicly.
        </p>
        <Sequence items={["Physical mark", "Signed evidence", "Certificate", "Verification"]} label="Digital proof path" />
      </ContentSection>

      <ContentSection eyebrow="Beyond registration" title="Identity should remain useful across the lifecycle.">
        <p>
          The same physical-digital identity is intended to support later events such as inspection, maintenance,
          insurance, transfer, recovery, warranty, compliance, and disposal.
        </p>
        <Sequence
          items={["Marked", "Registered", "Insured", "Maintained", "Transferred", "Recovered", "Verified"]}
          label="Potential asset identity lifecycle"
        />
      </ContentSection>

      <ConversionSection
        title="Have a workflow where physical identity must hold?"
        copy="Tell us where the connection between an asset and its records becomes uncertain. We can examine whether Stela is relevant and what would need to be validated."
        primary={{ label: "Discuss your use case", href: "/contact?intent=use-case" }}
        secondary={{ label: "Request technical brief", href: "/contact?intent=technical-brief" }}
      />
    </ContentPage>
  );
}

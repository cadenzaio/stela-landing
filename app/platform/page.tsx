import {
  Certificate,
  Clock,
  Fingerprint,
  IdentificationCard,
  MapPin,
  PenNibStraight,
  SealCheck,
  ShieldCheck,
  UserCircleCheck,
} from "@phosphor-icons/react/dist/ssr";
import { pageMetadata } from "@/lib/metadata";
import {
  ContentPage,
  ContentSection,
  ConversionSection,
  PageHero,
  Sequence,
} from "@/components/site/ContentPage";

export const metadata = pageMetadata({
  title: "Platform | Stela",
  description: "How Stela connects a permanent physical mark to controlled evidence and a verifiable digital record.",
  slug: "platform",
});

export default function PlatformPage() {
  return (
    <ContentPage variant="platform">
      <PageHero
        eyebrow="The Stela platform"
        title="Permanent identification, recorded at its source."
        copy="Stela places a durable identifier on the asset, records the authorized marking event, and creates a digital record that can be checked later."
        note="It strengthens the physical identity layer beneath existing asset, insurance, maintenance, and operational systems."
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
          A controlled diamond-marking process places a unique identifier directly on an approved area of the asset.
          Unlike a detached document or removable label, that identifier is intended to remain with the physical
          object throughout its useful life.
        </p>
      </ContentSection>

      <ContentSection eyebrow="Evidence at creation" title="The marking action becomes an evidence event.">
        <p>
          The marking session records the people, equipment, place, time, and supporting evidence involved. That
          context makes the origin of the identifier explainable rather than simply asserting that a mark exists.
        </p>
        <Sequence
          items={["Asset identified", "Operator authorized", "Location and time recorded", "Evidence captured"]}
          icons={[IdentificationCard, UserCircleCheck, MapPin, Fingerprint]}
          label="Controlled marking event"
        />
      </ContentSection>

      <ContentSection
        eyebrow="Verifiable record"
        title="The physical origin is preserved digitally."
        aside={<p>Certificate access can depend on the organization, user role, and purpose of verification.</p>}
      >
        <p>
          A signed Stela record connects the on-asset identifier to the evidence captured at origin. Authorized users
          can later check that identifier and confirm the asset matches the record presented to them.
        </p>
        <Sequence
          items={["Physical identifier", "Signed evidence", "Stela record", "Later verification"]}
          icons={[PenNibStraight, Fingerprint, Certificate, SealCheck]}
          label="Digital proof path"
        />
      </ContentSection>

      <ContentSection eyebrow="Beyond registration" title="Identity should remain useful across the lifecycle.">
        <p>
          The same physical-digital identity is intended to support later events such as inspection, maintenance,
          insurance, transfer, recovery, warranty, compliance, and disposal.
        </p>
        <Sequence
          items={["Marked", "Registered", "Insured", "Maintained", "Transferred", "Recovered", "Verified"]}
          icons={[PenNibStraight, IdentificationCard, ShieldCheck, Clock, Certificate, Fingerprint, SealCheck]}
          label="Potential asset identity lifecycle"
          variant="timeline"
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

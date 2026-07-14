import type { Metadata } from "next";
import { languageAlternates } from "@/lib/i18n/config";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContentPage } from "@/components/site/ContentPage";
import { en } from "@/lib/i18n/locales/en";

export const metadata: Metadata = {
  title: "Contact | Stela",
  description: "Start a focused conversation with Stela about a use case, pilot, partnership, or investor brief.",
  alternates: { canonical: "/contact", languages: languageAlternates("contact") },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ intent?: string | string[] }>;
}) {
  const params = await searchParams;
  const initialIntent = Array.isArray(params.intent) ? params.intent[0] : params.intent;

  return (
    <ContentPage>
      <section className="contact-hero">
        <div className="content-shell contact-hero-inner">
          <p className="content-eyebrow">Contact Stela</p>
          <h1>Where does asset identity become uncertain in your organization?</h1>
          <p>
            Tell us what kind of asset is involved, which workflow depends on its identity, and what decision becomes
            difficult when the physical asset cannot be confidently matched to the record.
          </p>
        </div>
      </section>
      <section className="contact-section">
        <div className="content-shell contact-layout">
          <aside>
            <p className="content-eyebrow">Start with context</p>
            <h2>The right conversation begins with the trust gap.</h2>
            <p>
              A concise description is enough. Detailed architecture, commercial material, and validation planning
              can remain private until there is a relevant reason to continue.
            </p>
          </aside>
          <ContactForm initialIntent={initialIntent} messages={en.contact.form} />
        </div>
      </section>
    </ContentPage>
  );
}

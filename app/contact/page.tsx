import { ContactForm } from "@/components/contact/ContactForm";
import { ContentPage } from "@/components/site/ContentPage";
import { en } from "@/lib/i18n/locales/en";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact | Stela",
  description: "Start a focused conversation with Stela about a use case, pilot, partnership, or investor brief.",
  slug: "contact",
});

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ intent?: string | string[] }>;
}) {
  const params = await searchParams;
  const initialIntent = Array.isArray(params.intent) ? params.intent[0] : params.intent;

  return (
    <ContentPage variant="contact">
      <section className="contact-hero">
        <div className="content-shell contact-hero-inner">
          <p className="content-eyebrow">Contact Stela</p>
          <h1>Could your assets benefit from permanent identity?</h1>
          <p>
            Tell us what the asset is, where its identity becomes uncertain, and which decision or workflow would
            improve if the physical object could be matched confidently to its record.
          </p>
        </div>
      </section>
      <section className="contact-section">
        <div className="content-shell contact-layout">
          <aside>
            <p className="content-eyebrow">Start with context</p>
            <h2>Start with the asset and the decision that depends on it.</h2>
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

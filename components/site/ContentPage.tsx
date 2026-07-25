import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site/SiteShell";

type Action = {
  label: string;
  href: string;
};

type ContentIcon = React.ComponentType<{
  "aria-hidden"?: boolean;
  className?: string;
  size?: number | string;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
}>;

export function ContentPage({ children, variant }: { children: React.ReactNode; variant?: "platform" | "applications" | "partners" | "investors" | "contact" }) {
  return (
    <main className={`stela-page content-page${variant ? ` content-page-${variant}` : ""}`}>
      <SiteHeader />
      {children}
      <SiteFooter />
    </main>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
  note,
  primary,
  secondary,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  note?: string;
  primary: Action;
  secondary: Action;
}) {
  return (
    <section className="content-hero">
      <div className="content-hero-grid" aria-hidden="true" />
      <div className="content-shell content-hero-inner">
        <div>
          <p className="content-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
        </div>
        <div className="content-hero-copy">
          <p>{copy}</p>
          {note ? <p className="content-note">{note}</p> : null}
          <ActionPair primary={primary} secondary={secondary} />
        </div>
      </div>
    </section>
  );
}

export function ContentSection({
  id,
  eyebrow,
  title,
  children,
  aside,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <section id={id} className="content-section">
      <div className="content-shell content-section-grid">
        <div className="content-section-heading">
          {eyebrow ? <p className="content-eyebrow">{eyebrow}</p> : null}
          <h2>{title}</h2>
        </div>
        <div className="content-section-body">
          {children}
          {aside ? <div className="content-aside">{aside}</div> : null}
        </div>
      </div>
    </section>
  );
}

export function Sequence({
  items,
  label,
  icons,
  variant = "cards",
}: {
  items: string[];
  label: string;
  icons?: ContentIcon[];
  variant?: "cards" | "timeline";
}) {
  return (
    <ol className={`content-sequence content-sequence-${variant}`} aria-label={label}>
      {items.map((item, index) => {
        const Icon = icons?.[index];
        return (
          <li key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {Icon ? <Icon className="content-sequence-icon" size={38} weight="light" aria-hidden /> : null}
            <strong>{item}</strong>
          </li>
        );
      })}
    </ol>
  );
}

export function RuledList({ items }: { items: string[] }) {
  return (
    <ul className="ruled-list">
      {items.map((item) => (
        <li key={item}>
          <CheckCircle size={24} weight="light" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function EditorialEntries({
  entries,
}: {
  entries: Array<{
    label: string;
    title: string;
    copy: string;
    note?: string;
    action?: Action;
    image?: string;
    imageAlt?: string;
    icon?: ContentIcon;
  }>;
}) {
  return (
    <div className="editorial-entries">
      {entries.map((entry, index) => (
        <article key={entry.title}>
          <div className="editorial-index">{String(index + 1).padStart(2, "0")}</div>
          <div>
            {entry.icon ? <entry.icon className="editorial-icon" size={44} weight="light" aria-hidden /> : null}
            <p className="content-eyebrow">{entry.label}</p>
            <h2>{entry.title}</h2>
          </div>
          <div className="editorial-copy">
            <p>{entry.copy}</p>
            {entry.note ? <p className="content-note">{entry.note}</p> : null}
            {entry.action ? <Link href={entry.action.href}>{entry.action.label}<span aria-hidden="true">&#8599;</span></Link> : null}
          </div>
          <div className="editorial-media">
            {entry.image ? (
              <Image
                src={entry.image}
                alt={entry.imageAlt ?? ""}
                fill
                sizes="(max-width: 760px) calc(100vw - 92px), (max-width: 1180px) 60vw, 320px"
                unoptimized
              />
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}

export function ConversionSection({
  title,
  copy,
  primary,
  secondary,
  eyebrow = "Next conversation",
}: {
  title: string;
  copy: string;
  primary: Action;
  secondary: Action;
  eyebrow?: string;
}) {
  return (
    <section className="conversion-section">
      <div className="conversion-line" aria-hidden="true" />
      <div className="content-shell conversion-inner">
        <div>
          <p className="content-eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </div>
        <div>
          <p>{copy}</p>
          <ActionPair primary={primary} secondary={secondary} />
        </div>
      </div>
    </section>
  );
}

function ActionPair({ primary, secondary }: { primary: Action; secondary: Action }) {
  return (
    <div className="content-actions">
      <Link href={primary.href} className="button-primary">
        {primary.label}
      </Link>
      <Link href={secondary.href} className="button-secondary">
        {secondary.label}
      </Link>
    </div>
  );
}

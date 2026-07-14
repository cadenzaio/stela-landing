"use client";

import { FormEvent, useMemo, useState } from "react";
import type { ContactMessages } from "@/lib/i18n/types";

const reasonValues = ["use-case", "pilot", "insurer", "partner", "investor", "brief", "other"] as const;

const knownIntents = new Set<string>(reasonValues);

export function ContactForm({ initialIntent, messages }: { initialIntent?: string; messages: ContactMessages["form"] }) {
  const normalizedIntent = initialIntent === "technical-brief" ? "brief" : initialIntent;
  const [reason, setReason] = useState(knownIntents.has(normalizedIntent ?? "") ? normalizedIntent! : "use-case");
  const [submitted, setSubmitted] = useState(false);
  const showWorkflowFields = useMemo(() => ["use-case", "pilot", "insurer"].includes(reason), [reason]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form-status" role="status" aria-live="polite">
        <span aria-hidden="true" />
        <p className="content-eyebrow">{messages.validated}</p>
        <h2>{messages.thanks}</h2>
        <p>{messages.success}</p>
        <p className="form-delivery-note">{messages.prototypeNotice}</p>
        <button type="button" className="button-secondary" onClick={() => setSubmitted(false)}>
          {messages.edit}
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <fieldset className="intent-fieldset">
        <legend>{messages.legend}</legend>
        <div className="intent-options">
          {reasonValues.map((value) => (
            <label key={value}>
              <input
                type="radio"
                name="contactReason"
                value={value}
                checked={reason === value}
                onChange={() => setReason(value)}
              />
              <span>{messages.reasons[value]}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="form-grid">
        <Field label={messages.name} name="name" autoComplete="name" required />
        <Field label={messages.organization} name="organization" autoComplete="organization" required />
        <Field label={messages.role} name="role" autoComplete="organization-title" required />
        <Field label={messages.email} name="email" type="email" autoComplete="email" required />
        <Field label={messages.country} name="country" autoComplete="country-name" required />
        <label className="form-field">
          <span>{messages.reason}</span>
          <select name="reason" value={reason} onChange={(event) => setReason(event.target.value)} required>
            {reasonValues.map((value) => (
              <option key={value} value={value}>
                {messages.reasons[value]}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="form-field form-field-full">
        <span>{messages.message}</span>
        <textarea
          name="message"
          rows={5}
          required
          minLength={20}
          placeholder={messages.messagePlaceholder}
        />
      </label>

      {showWorkflowFields ? (
        <details className="optional-context">
          <summary>{messages.optionalSummary}</summary>
          <div className="form-grid">
            <Field label={messages.assetType} name="assetType" />
            <Field label={messages.identificationMethod} name="identificationMethod" />
            <Field label={messages.workflow} name="workflow" />
            <Field label={messages.scale} name="scale" />
            <Field label={messages.urgency} name="urgency" />
          </div>
        </details>
      ) : null}

      <div className="form-submit-row">
        <p>{messages.deliveryDisclosure}</p>
        <button type="submit" className="button-primary">
          {messages.review}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="form-field">
      <span>{label}</span>
      <input type={type} name={name} autoComplete={autoComplete} required={required} />
    </label>
  );
}

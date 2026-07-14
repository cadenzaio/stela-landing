"use client";

import { FormEvent, useMemo, useState } from "react";

const reasons = [
  { value: "use-case", label: "I have a potential use case" },
  { value: "pilot", label: "I am interested in a pilot" },
  { value: "insurer", label: "I represent an insurer or asset owner" },
  { value: "partner", label: "I am interested in partnership" },
  { value: "investor", label: "I am an investor" },
  { value: "brief", label: "I want to request a brief" },
  { value: "other", label: "Other" },
];

const knownIntents = new Set(reasons.map((reason) => reason.value));

export function ContactForm({ initialIntent }: { initialIntent?: string }) {
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
        <p className="content-eyebrow">Context validated</p>
        <h2>Thank you.</h2>
        <p>
          We will review the context and respond directly if the request is relevant to Stela&apos;s current development
          and validation work.
        </p>
        <p className="form-delivery-note">
          Prototype notice: form delivery is not connected yet, so this submission has not been sent. The delivery
          endpoint must be configured before launch.
        </p>
        <button type="button" className="button-secondary" onClick={() => setSubmitted(false)}>
          Edit details
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <fieldset className="intent-fieldset">
        <legend>What would you like to discuss?</legend>
        <div className="intent-options">
          {reasons.map((option) => (
            <label key={option.value}>
              <input
                type="radio"
                name="contactReason"
                value={option.value}
                checked={reason === option.value}
                onChange={() => setReason(option.value)}
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="form-grid">
        <Field label="Name" name="name" autoComplete="name" required />
        <Field label="Organization" name="organization" autoComplete="organization" required />
        <Field label="Role" name="role" autoComplete="organization-title" required />
        <Field label="Work email" name="email" type="email" autoComplete="email" required />
        <Field label="Country" name="country" autoComplete="country-name" required />
        <label className="form-field">
          <span>Contact reason</span>
          <select name="reason" value={reason} onChange={(event) => setReason(event.target.value)} required>
            {reasons.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="form-field form-field-full">
        <span>Short message</span>
        <textarea
          name="message"
          rows={5}
          required
          minLength={20}
          placeholder="Describe the asset, workflow, and decision that depends on its identity."
        />
      </label>

      {showWorkflowFields ? (
        <details className="optional-context">
          <summary>Add optional workflow context</summary>
          <div className="form-grid">
            <Field label="Asset type" name="assetType" />
            <Field label="Current identification method" name="identificationMethod" />
            <Field label="Workflow or decision affected" name="workflow" />
            <Field label="Approximate number of assets" name="scale" />
            <Field label="Current stage or urgency" name="urgency" />
          </div>
        </details>
      ) : null}

      <div className="form-submit-row">
        <p>No information is sent until a delivery service is connected and disclosed.</p>
        <button type="submit" className="button-primary">
          Review request
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

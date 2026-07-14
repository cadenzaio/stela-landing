# Stela Conversion Paths

## Contact Intent Routing

The contact page reads the `intent` query parameter and preselects the relevant conversation type.

| Query | Selected reason |
| --- | --- |
| `/contact?intent=use-case` | I have a potential use case |
| `/contact?intent=pilot` | I am interested in a pilot |
| `/contact?intent=insurer` | I represent an insurer or asset owner |
| `/contact?intent=partner` | I am interested in partnership |
| `/contact?intent=investor` | I am an investor |
| `/contact?intent=brief` | I want to request a brief |
| `/contact?intent=technical-brief` | I want to request a brief |

Unknown or missing values default to the potential use-case path.

All paths are locale-aware. Non-English routes retain their locale prefix, for example `/de/contact?intent=pilot` or `/pt/contact?intent=investor`. Changing language preserves both the current page and the contact query parameter.

## Primary Journeys

### Product evaluator

`/` -> `/platform` -> `/contact?intent=use-case` or `/contact?intent=technical-brief`

### Industry stakeholder

`/` -> `/applications` -> application-specific CTA -> `/contact?intent=use-case` or `/contact?intent=insurer`

### Pilot or validation partner

`/partners` -> `/contact?intent=pilot` or `/contact?intent=partner`

### Investor

`/` or `/investors` -> `/contact?intent=investor`

### General brief request

Persistent header CTA -> `/contact?intent=brief`

## Form Behavior

The form requires name, organization, role, work email, country, reason, and a short message. Use-case, pilot, and insurer paths reveal an optional collapsed workflow-context section.

The current form performs browser validation and presents a clearly labeled review state. It does not deliver data to a backend, send email, or persist submissions. A production delivery service, privacy notice, recipient workflow, and abuse protection must be selected before launch.

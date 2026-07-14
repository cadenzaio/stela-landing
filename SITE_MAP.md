# Stela Site Map

The public website is intentionally compact. The homepage presents the full idea; supporting pages answer one focused visitor question and move the visitor toward a relevant conversation.

| Route | Visitor question | Primary audience | Primary CTA | Secondary CTA |
| --- | --- | --- | --- | --- |
| `/` | What is Stela, and why does it matter? | All visitors | Explore Stela | Request investor brief |
| `/platform` | What exactly is Stela, and how is it intended to work? | Asset owners, operators, insurers, technical evaluators | Discuss your use case | Request technical brief |
| `/applications` | Where could Stela create value? | Industry and operational stakeholders | Discuss an application | Join a validation conversation |
| `/partners` | How can my organization participate? | Pilot, validation, technical, and market partners | Discuss a pilot | Become a validation partner |
| `/investors` | Is this a serious venture worth learning more about? | Investors and strategic partners | Request investor brief | Speak with the founders |
| `/contact` | How do I start the right conversation? | All qualified visitors | Review request | Context-specific intent selection |

## Navigation

The primary navigation contains only Platform, Applications, Partners, Investors, and Contact. The Stela mark returns to `/`. The persistent Request brief action routes to `/contact?intent=brief`.

The internal `/identity` route remains a design-validation surface and is not included in public navigation.

## Languages and URL Structure

English remains at the unprefixed canonical routes above. Spanish, French, Italian, German, and Portuguese use stable locale prefixes while retaining the same page slugs:

- Spanish: `/es`, `/es/platform`, `/es/applications`, `/es/partners`, `/es/investors`, `/es/contact`
- French: `/fr`, `/fr/platform`, `/fr/applications`, `/fr/partners`, `/fr/investors`, `/fr/contact`
- Italian: `/it`, `/it/platform`, `/it/applications`, `/it/partners`, `/it/investors`, `/it/contact`
- German: `/de`, `/de/platform`, `/de/applications`, `/de/partners`, `/de/investors`, `/de/contact`
- Portuguese: `/pt`, `/pt/platform`, `/pt/applications`, `/pt/partners`, `/pt/investors`, `/pt/contact`

Every public route publishes canonical and language-alternate metadata. Language switching preserves the current page and query string. Portuguese currently uses European Portuguese and Spanish uses neutral international Spanish.

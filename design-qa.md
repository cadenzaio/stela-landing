# Stela Homepage Design QA

## Sources And Evidence

- Browser annotations: hero application, solar wedge, trust-gap comparison, mechanism spacing, machine-session separation, and proof-card scale.
- Generated automotive identity asset: `/Users/emilforsvall/Documents/Stela/public/images/stela-hero-vehicle-identity.webp`
- Solar application asset: `/Users/emilforsvall/Documents/Stela/public/images/stela-application-solar.webp`
- Equipment application asset: `/Users/emilforsvall/Documents/Stela/public/images/stela-application-equipment.webp`
- English hero and process band: `/Users/emilforsvall/Documents/Stela/output/design-qa/homepage-vehicle-identity-hero-1100x998.png`
- Spanish hero and process band: `/Users/emilforsvall/Documents/Stela/output/design-qa/homepage-vehicle-identity-hero-es-1100x998.png`
- Solar and trust-gap sections: `/Users/emilforsvall/Documents/Stela/output/design-qa/homepage-solar-and-trust-gap-1100x998.png`
- Mechanism boxes: `/Users/emilforsvall/Documents/Stela/output/design-qa/homepage-mechanism-boxes-1100x998.png`
- Field-marking session: `/Users/emilforsvall/Documents/Stela/output/design-qa/homepage-marking-session-1100x998.png`
- Mobile proof and process band: `/Users/emilforsvall/Documents/Stela/output/design-qa/homepage-mobile-proof-process-390x844-stage.png`
- Mobile solar section: `/Users/emilforsvall/Documents/Stela/output/design-qa/homepage-mobile-solar-390x844-stage.png`
- Mobile trust comparison: `/Users/emilforsvall/Documents/Stela/output/design-qa/homepage-mobile-trust-390x844-stage.png`
- Mobile controlled session: `/Users/emilforsvall/Documents/Stela/output/design-qa/homepage-mobile-session-390x844-stage.png`
- Spanish hero overlap correction: `/Users/emilforsvall/Documents/Stela/output/design-qa/homepage-es-hero-no-overlap-1100.png`
- Mobile solar visibility correction: `/Users/emilforsvall/Documents/Stela/output/design-qa/homepage-mobile-solar-visible-390x844-stage.png`
- Spanish laptop hero correction: `/Users/emilforsvall/Documents/Stela/output/design-qa/homepage-es-laptop-hero-1440x900.png`
- Mobile lifecycle mark correction: `/Users/emilforsvall/Documents/Stela/output/design-qa/homepage-mobile-lifecycle-mark-430x932.png`

## Annotation Review

- The hero now shows a real automotive application: the lower windscreen corner, Stela mark, wordmark, synthetic VIN, and QR code are visible in the first viewport.
- The old floating geometric hero mark was removed. The proof line now originates from the engraved identity block and lands at the enlarged signed-proof card.
- The hero process icons were moved into a full-width `How it works` band. They are larger, evenly spaced, and independent of headline length.
- The first supporting section now uses the solar asset, establishing the vehicle-insurance and solar wedges immediately.
- The trust gap uses a real equipment background and restores both states: a faded weak link and a stronger Stela trust anchor.
- The three mechanism steps are separated, taller, and centered with larger icons; no horizontal connector crosses the icons.
- The controlled-session panel is a separate row below the marking machine, so its label and status remain visible without covering the equipment.

## Responsive And Localization QA

- English and Spanish desktop captures retain exactly three authored headline lines.
- Localized copy does not move the engraving, proof line, proof card, or process band.
- Narrow desktop and tablet headline sizing keeps every localized title in a dedicated text zone, with the engraved identity and proof assembly remaining to the right or below.
- At 1440 x 900, the Spanish headline clears the engraved identity and the complete proof card stays inside the hero.
- At 390 px, the engraved identity and proof card remain connected, and the process band keeps three stable icon columns.
- The solar principles collapse into readable rows over a deliberate asset crop.
- The mobile solar crop reserves the lower image field for visible panel cells, frame edges, and installation context.
- The trust comparison stacks each physical-to-digital state without horizontal clipping.
- Mechanism cards and the controlled-session panel remain separated and readable on mobile.
- At 430 px, the persistent mark has its own row above the lifecycle sequence and no longer covers stage `04`.

## Verification

- `npm run lint`: passed.
- `npm run build`: passed.
- `npm test`: passed.
- `git diff --check`: passed.
- In-app browser review completed for desktop English, desktop Spanish, and staged 390 px mobile views.
- No remaining P0, P1, or P2 visual findings.

final result: passed

## Supporting Page System

- Platform material hero: `/Users/emilforsvall/Documents/Stela/output/design-qa/platform-material-hero-1440x900.png`
- Applications material hero: `/Users/emilforsvall/Documents/Stela/output/design-qa/applications-material-hero-1440x900.png`
- Application industry rows: `/Users/emilforsvall/Documents/Stela/output/design-qa/applications-industry-rows-1440x900.png`
- Spanish mobile applications page: `/Users/emilforsvall/Documents/Stela/output/design-qa/applications-mobile-es-390x844.png`
- Investor material hero: `/Users/emilforsvall/Documents/Stela/output/design-qa/investors-material-hero-1440x900.png`
- Contact material hero: `/Users/emilforsvall/Documents/Stela/output/design-qa/contact-material-hero-1440x900.png`

- Each focused route now carries a distinct real-world or material image while retaining the shared Stela glass-panel hierarchy.
- Supporting sections alternate between dark evidence surfaces and brighter material bands for continuity with the homepage.
- Application entries visibly distinguish vehicle, solar, equipment, and architectural-glass contexts.
- Spanish mobile review confirms that the hero hierarchy, actions, and imagery remain readable at 390 px.

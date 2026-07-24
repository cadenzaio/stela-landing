# Stela Physical Identity Architecture

Status: Approved system constraint  
Decision date: 23 July 2026

## Principle

Stela separates permanent asset identity from brand communication.

The physical engraving is the durable trust anchor. It contains only a unique identifier. The Stela logo, QR code, and any web address or verification instruction belong to a separate transparent companion label.

## Layer 1: Permanent Engraving

The engraving:

- contains only the unique identifier;
- is applied directly to the asset;
- remains readable without the transparent label;
- is sufficient to locate or recover the authoritative digital record;
- is not dependent on a QR code, logo, or web address;
- uses a format designed for human transcription and machine-assisted capture.

The engraving is the durable identity of the asset, not an advertising surface.

## Layer 2: Transparent Companion Label

The protected internal label may contain:

- the Stela symbol and inscription;
- a QR code that routes to verification;
- a short verification instruction;
- an optional web address;
- minimal regulatory or partner information when required.

The label helps people recognize Stela and reach the record quickly. It is replaceable and may be adapted to the application context. Removing or damaging it must not invalidate the asset identity.

## Layer 3: Digital Record

The digital system:

- resolves both the engraved identifier and the QR route;
- presents the authoritative asset record and signed evidence;
- preserves the relationship between physical origin, evidence events, and certificate history;
- distinguishes an identifier lookup from proof that a current presenter controls or owns the asset.

## Design Consequences

- The Stela logo does not need to be optimized for direct engraving.
- The logo must remain legible at small sizes on transparent material and in digital interfaces.
- The transparent label and engraving should read as one coordinated system without visually merging.
- Photography must show the identifier as engraved and the logo/QR as printed on a separate internal layer.
- Proof graphics should connect conceptually to the identifier, not imply that the QR code or sticker is the trust anchor.
- The identifier must remain usable when glare, dirt, damage, or label removal affects the companion layer.

## Required Application Tests

Final identity and website work should test:

- identifier-only engraving at realistic scale;
- transparent label on automotive glass in daylight and low light;
- logo and QR legibility through reflections and tint;
- label removal with the identifier still discoverable;
- identifier lookup without QR access;
- replacement-label issuance without changing the permanent identifier;
- clear distinction between the physical identifier and the digital certificate.

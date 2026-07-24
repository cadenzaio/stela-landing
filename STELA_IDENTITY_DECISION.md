# Stela Identity Decision

Status: Selected direction  
Decision date: 23 July 2026

## Selected System

The selected identity combines:

- the corrected P01 Registered Inscription;
- the P02 Balanced Origin symbol;
- a baseline aligned to the horizontal extent of the inscription.

The Round 2 comparison code for this system was `R2-A`.

## Selection Rationale

External review strongly preferred the P01 inscription. Reviewers found it clear, permanent, technical, and credible. The only repeated correction was that the registration baseline should align with the inscription rather than extending beyond it.

The P02 symbol was preferred over the P05 symbol. Reviewers associated its complete diamond geometry more strongly with diamond marking than with blockchain or cryptocurrency.

The symbol also carries controlled deterrent authority. Theft prevention is an important product benefit, and the outward-pointing diamond gives the mark a slightly repelling presence without making it heavy, hostile, or industrial.

## Meaning Hierarchy

1. The inscription is the primary identity.
2. The diamond symbol is the accompanying recognition mark.
3. The origin point represents the physical point of inscription.
4. The short internal trace represents the controlled marking action.
5. The complete outer geometry communicates permanence, protection, and a record that remains with the asset.

## Physical Identity Architecture

The brand and the permanent identifier are related, but they are not the same physical mark.

1. **Permanent engraving:** contains only the unique identifier. It is the durable trust anchor and must remain useful without any label.
2. **Transparent companion label:** carries the Stela symbol and inscription, a QR code, and optionally a web address or short verification instruction. It is applied inside a vehicle window or in another protected position appropriate to the asset.
3. **Digital record:** resolves the identifier and QR route to the authoritative evidence and certificate history.

The transparent label is a communication and access layer. It may be replaced, damaged, or removed without invalidating the engraved identifier or its digital record. The QR code provides a convenient route to verification; it is not the sole identity key.

This separation gives the logo greater optical freedom. The master identity does not need to survive direct engraving, but it must remain clear in small transparent-label printing, compact interfaces, and one-color fallback applications.

## Guardrails

Preserve:

- the complete outer diamond;
- the restrained inner contour;
- the small origin point;
- the short internal trace;
- light, precise line weight;
- the aligned inscription baseline.

Do not introduce:

- spikes, blades, shields, or heavier outlines;
- longer arrow-like traces;
- additional nested geometry;
- glow, gradients, or decorative effects in the master artwork;
- security-badge or cryptocurrency styling.

## Production Masters

- `public/brand/stela-symbol.svg`
- `public/brand/stela-inscription.svg`
- `public/brand/stela-lockup.svg`

These files establish the selected geometry. Final pre-release work should convert the inscription lettering to approved outlined vector paths and produce light, dark, transparent-label, one-color, and minimum-size masters.

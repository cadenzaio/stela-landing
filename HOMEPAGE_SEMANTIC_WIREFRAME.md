# Stela Homepage Semantic Wireframe

Status: Current implementation review draft v2.0  
Source language: English  
Scope: Current production copy, semantic hierarchy, evidence responsibilities, and conversion paths  
Implementation source: `components/landing/StelaHomepagePrototype.tsx`

This document defines what the current homepage says, in what order, and what each visual must communicate. It does not prescribe final typography, color, spacing, animation, or optical treatment.

Text under **Production copy** is public-facing. Text under **Semantic role**, **Evidence required**, and **Implementation note** is internal review guidance and must not appear on the public page.

## Page Contract

The homepage should allow an untechnical visitor to understand:

1. Stela gives a real asset a permanent identifier.
2. The identifier is linked to a digital record.
3. The identity can remain useful as ownership, location, condition, or status changes.
4. Vehicles and solar panels are the first applications.
5. Stela records the origin of the identity, not only the mark.
6. Stela is in development, testing, and technical validation.
7. The company is seeking relevant pilot, validation, and strategic partners.

The primary conversion is **Discuss a pilot**.

---

## Global Header

**Semantic element:** `header`

### Production copy

**Brand**

Stela

**Primary navigation**

- Platform
- Applications
- Partners
- Investors
- Contact

**Persistent action**

Discuss a pilot

**Language control label**

Language

### Implementation note

- The brand links to the localized homepage.
- Navigation links to dedicated supporting pages.
- **Discuss a pilot** links to the localized contact page with `intent=pilot`.
- The language control preserves the current route.

---

## Main Content

**Semantic element:** `main`

## 1. Hero: Identity That Stays

**Semantic element:** `section`  
**Anchor:** `top`

### Semantic role

Introduce the product in ordinary language and connect the physical identifier to a later verification record.

### Production copy

**Eyebrow**

Permanent asset identification

**Primary heading**

Identity that stays with the asset.

**Supporting copy**

Stela gives vehicles and solar panels a permanent identifier and links it to a digital record. So the identity stays with the real object, even as ownership, location, or condition changes.

**Primary action**

See how it works

**Secondary action**

Discuss a pilot

**Status line**

Now in development, testing, and technical validation.

### Verification certificate

**Eyebrow**

Stela verification

**Title**

Vehicle identity verified

**Fields**

| Field | Value |
|---|---|
| Identifier | STLA A7K4 92X8 |
| Identifier match | Confirmed |
| Marking session | Authorized |
| Evidence | Time · location · photos |

### Evidence required

The primary visual shows:

1. a recognizable contemporary vehicle in an ordinary owner context;
2. a visible Stela identifier and QR code on the lower passenger-side windshield area;
3. a secondary verification certificate that demonstrates later checking without becoming the main subject.

### Implementation note

- The certificate is semantic HTML, not text baked into the photograph.
- The certificate has no connector line in the current version.
- The identifier and certificate must remain visually separate at every breakpoint.
- The vehicle, owner context, and physical identifier remain more important than the certificate.
- The image is illustrative and must not imply that final mark composition, placement, or regulatory approval is complete.
- **See how it works** links to Section 3.

---

## 2. The Identity Problem

**Semantic element:** `section`  
**Anchor:** `identity-problem`

### Semantic role

Explain why records become unreliable when they lose a provable relationship with the physical object.

### Production copy

**Eyebrow**

The identity problem

**Heading**

Records lose their value when they lose touch with reality.

**Body**

Labels come off. Serial plates can be hidden or replaced. Paperwork gets misplaced, and databases drift away from the object they were meant to describe.

When that happens, an owner, insurer, buyer, or authority may have plenty of information but no simple way to prove it belongs to the asset in front of them.

**Closing statement**

Stela keeps the physical asset and its identity together.

### Evidence model

**Physical asset**

Installed solar panels

**Rear label**

SN 74-AX-1903

Removable / replaceable

**Asset record**

Which panel?

### Evidence required

Show a concrete mismatch between an installed solar asset, a removable rear label, and a record that can no longer identify one specific panel with confidence.

### Implementation note

- The failure should feel ordinary and understandable, not criminal or theatrical.
- Do not introduce the marking equipment here.
- The evidence should make the phrase **Which panel?** immediately understandable.

---

## 3. How Stela Works

**Semantic element:** `section`  
**Anchor:** `how-it-works`

### Semantic role

Explain the complete process as three sequential actions.

### Production copy

**Eyebrow**

How it works

**Heading**

Mark it. Record it. Check it later.

**Introduction**

One careful process gives the asset its identity, records where it came from, and keeps it ready for future checks.

### Step 1

**Label**

Mark

**Heading**

Give the asset its permanent identity.

**Body**

A trained operator places a unique identifier directly on an approved part of the asset.

### Step 2

**Label**

Record

**Heading**

Capture the moment it was created.

**Body**

The session records the asset, operator, equipment, time, location, and supporting photos in one place.

### Step 3

**Label**

Verify

**Heading**

Come back to the same identity.

**Body**

Authorized users can check the linked Stela record during insurance, inspection, transfer, recovery, maintenance, or retirement.

**Qualification**

Each surface and material will be tested and approved before use.

### Evidence required

Use three related photographic moments:

1. a trained operator focused on placing the identifier, with equipment secondary;
2. a session record being captured with asset and photographic evidence;
3. a later identity check on the same class of asset.

### Implementation note

- Use an ordered list.
- The icon is the primary communicator within each step.
- Keep the images documentary and plausible.
- Do not imply that the final machine design is complete.

---

## 4. First Applications

**Semantic element:** `section`  
**Anchor:** `applications`

### Semantic role

Make the initial markets explicit without overloading the homepage with application detail.

### Production copy

**Eyebrow**

Where Stela starts

**Heading**

For assets that change hands and keep working.

### Application 1

**Category**

Vehicles and insurance

**Heading**

An identity that travels with the vehicle.

**Audience**

For owners, insurers, fleets, and recovery authorities.

**Action**

Explore vehicle applications

### Application 2

**Category**

Solar energy

**Heading**

An identity that stays with every panel.

**Audience**

For manufacturers, installers, owners, insurers, financiers, and maintenance providers.

**Action**

Explore solar applications

### Evidence required

- Vehicle imagery shows a contemporary vehicle in a credible insurance or ownership context.
- Solar imagery shows installed panels in a real operating environment.
- The cards communicate application before atmosphere.

### Implementation note

- Use two equally important `article` elements.
- Link each action to its application-page anchor.
- Keep detailed claims on the application page.

---

## 5. Value Over Time

**Semantic element:** `section`  
**Anchor:** `value`

### Semantic role

Translate the system into practical outcomes that appear after the identifier is created.

### Production copy

**Eyebrow**

Value over time

**Heading**

The mark is only the beginning.

**Introduction**

Its value grows whenever the asset changes hands, location, condition, or status.

### Outcome 1

**Heading**

Make tampering easier to spot

**Body**

A visible identifier on the asset is harder to hide or remove without leaving signs behind.

### Outcome 2

**Heading**

Help identify recovered property

**Body**

If an asset is found away from its owner or installation, its recorded identity gives people something reliable to check.

### Outcome 3

**Heading**

Give insurers clearer evidence

**Body**

The record shows which asset was marked, when it happened, and who was authorized to do it.

### Outcome 4

**Heading**

Keep the identity through every change

**Body**

The same identity can stay relevant through maintenance, transfer, inspection, insurance, recovery, and retirement.

**Qualification**

These are the benefits Stela is being built to deliver. They will be tested through technical validation and pilot programs.

### Evidence required

Each outcome has a strong, centered icon and should be understandable before its body copy is read.

### Implementation note

- Present these as intended benefits, not measured results.
- Keep the qualification attached to the group.

---

## 6. More Than a Mark

**Semantic element:** `section`  
**Anchor:** `complete-system`

### Semantic role

Show that Stela creates a recorded origin and verification path, not only a physical engraving.

### Production copy

**Eyebrow**

More than a mark

**Heading**

The mark tells you which asset. The record tells you why you can trust it.

**Body**

The identifier points to one real object. The marking session records who created it, where, when, and with what evidence. Later, the Stela record brings that information back when someone needs to check.

**Action**

See the full Stela system

### Evidence record

**Identifier**

STLA A7K4 92X8 1847

**Status**

Origin recorded

| Field | Value |
|---|---|
| Operator | Authorized |
| Evidence | Captured |
| Location | Recorded |
| Timestamp | Signed |

**Certificate**

Stela record

Asset identity linked

### Questions

Together, Stela helps answer:

1. Is this the asset that was originally recorded?
2. Who marked it, and under whose authority?
3. When and where did the marking happen?
4. What evidence supports the record?
5. Has its status or ownership changed?

### Evidence required

Show a coherent record surface in which the authorization, evidence, location, timestamp, and linked identity are visually related.

### Implementation note

- Icons are the main communicator for the four evidence fields.
- The five questions remain an ordered list.
- The action links to the localized platform page.

---

## 7. Identification-Method Comparison

**Semantic element:** `section`  
**Anchor:** `comparison`

### Semantic role

Explain that permanence alone does not provide a recorded origin or later verification.

### Production copy

**Eyebrow**

Identification methods

**Heading**

A permanent mark is not the same as a trusted identity.

**Introduction**

What matters is not only how the mark is made. It is whether its origin was recorded and whether the identity can still be checked later.

### Comparison matrix

| Method | Permanent on asset | Portable field use | Authorized session | Origin evidence | Linked record | Later verification |
|---|---|---|---|---|---|---|
| Labels and printed codes | Not included | Supported | Not included | Not included | Varies | Varies |
| Acid etching | Supported | Supported | Not included | Not included | Not included | Not included |
| Sandblasting | Supported | Varies | Not included | Not included | Not included | Not included |
| Industrial laser | Supported | Not included | Varies | Varies | Varies | Varies |
| Stela | Supported | Supported | Supported | Supported | Supported | Supported |

**Qualification**

Performance will be tested under controlled conditions before claims are made about specific materials or marking methods.

### Evidence required

Use an accessible supported-feature table. Stela is the only current row that supports the complete intended workflow, while partial or context-dependent capabilities are labeled **Varies**.

### Implementation note

- This is a capability comparison, not a superiority score.
- Use explicit text with icons; do not rely on color alone.
- Preserve row and column headers and horizontal exploration on smaller screens.

---

## 8. Experience Behind Stela

**Semantic element:** `section`  
**Anchor:** `experience`

### Semantic role

Ground the project in relevant operational experience without making founder personalities the story.

### Production copy

**Eyebrow**

Built from experience

**Heading**

Built on decades of protecting real assets.

**Body**

Stela brings together hands-on experience in vehicle security and diamond marking with modern software, digital records, and verification.

**Principles**

- Controlled marking
- Authorized operations
- Later verification

### Evidence required

Use restrained material or documentary imagery that suggests real operational knowledge. Avoid futuristic machinery, staged laboratory claims, or founder portraits.

### Implementation note

- Do not name the founders.
- Do not mention Verid or present Stela as inherited technology.
- Keep the experience claim collective.

---

## 9. Development and Partnership

**Semantic element:** `section`  
**Anchor:** `partners`

### Semantic role

State the current maturity and invite organizations that can help test, validate, and prepare the system.

### Production copy

**Eyebrow**

Building with partners

**Heading**

Building Stela with the industries it is made for.

**Body**

Stela is in pre-commercial development. We are working with partners to test the marking system, refine each material-specific process, shape the evidence workflow, and prepare the platform for regulated use.

### Partner group 1

**Heading**

Pilot partners

**Body**

Insurers, asset owners, fleets, solar operators, and industry groups helping us test real use cases.

### Partner group 2

**Heading**

Validation partners

**Body**

Glass, vehicle, solar, laboratory, and technical specialists helping us prove what works.

### Partner group 3

**Heading**

Strategic partners

**Body**

Organizations helping with development, market access, and the path to regulated deployment.

### Evidence required

Use clear partner categories and practical descriptions. Do not present unconfirmed organizations as current partners.

---

## 10. Final Conversion

**Semantic element:** `div` within the partnership section

### Semantic role

Turn the homepage argument into one practical question about an asset the visitor manages.

### Production copy

**Descriptor**

Permanent asset identification

**Heading**

Could an asset you manage benefit from an identity that lasts?

**Body**

Tell us what the asset is, how it is identified today, and what becomes difficult when that identity is lost, removed, or disputed.

**Primary action**

Discuss your use case

### Implementation note

- The action links to the localized contact page with `intent=pilot`.
- Do not add a secondary CTA in the current version.

---

## Global Footer

**Semantic element:** `footer`

### Production copy

**Brand**

Stela

**Navigation**

- Platform
- Applications
- Partners
- Investors
- Contact

**Stage line**

Pre-commercial development and validation.

### Implementation note

- The footer matches the header's navigation model.
- Do not display legal links until corresponding pages or controls exist.

---

## Responsive Reading Order

The semantic and mobile order remains:

1. Header
2. Hero statement
3. Hero verification certificate
4. Identity problem and mismatch evidence
5. How Stela works
6. First applications
7. Value over time
8. Complete system
9. Identification-method comparison
10. Experience
11. Development and partner groups
12. Final conversion
13. Footer

Visual layouts may place copy and evidence side by side on larger screens, but the source order must remain coherent when linearized.

## External Review Questions

1. After the hero, can a first-time visitor explain Stela in one sentence?
2. Does the difference between a physical identifier and a trusted identity feel clear?
3. Does the verification certificate clarify the value, or distract from the asset?
4. Are vehicles and solar panels clearly understood as the first applications?
5. Does the three-step process feel credible without implying the final machine design is complete?
6. Are the intended benefits understandable without sounding like validated performance claims?
7. Does the comparison table feel fair and useful?
8. Does the development-stage language inspire confidence while remaining honest?
9. Is **Discuss a pilot** the natural next step for a relevant organization?

## Claim Checks Before Publication

- Confirm that **permanent** remains acceptable while material performance is under validation.
- Confirm the intended marking method and approved public terminology.
- Confirm all historical experience claims retained in the collective statement.
- Confirm public use of **record**, **verification**, **certificate**, and **authorized**.
- Confirm vehicle-glass and solar-panel positions after material and regulatory review.
- Confirm whether the illustrative windshield logo and QR code represent the intended final physical treatment.
- Confirm the comparison matrix through controlled technical review.
- Confirm legal footer, privacy, and cookie requirements before production launch.

# Stela v3 Handoff

This workspace contains the v3 Stela landing page refinement.

## Original production site

- URL: https://stela-landing.emfai-soluti-1706.chatgpt.site
- Previous Sites project ID in this local workspace: `appgprj_6a50e6d262108191bcf1d4dfe3931294`
- Current Codex user cannot manage that Sites project. The deployed URL is shared, but the project is not visible to this account through the Sites connector.

## V3 source commit

- Commit: `ac3ab35` (`Compress Stela landing page for v3`)

## What changed

- Removed standalone Physical Anchor, Trust History, Audience Pathways, and separate Final CTA sections.
- Merged trust-history meaning into the Permanence/Lifecycle section.
- Merged audience pathways into Use Cases via compact audience tags.
- Merged Current Stage and Final CTA into one final close.
- Shortened copy and reduced repeated explanations.
- Tightened visual treatment with thinner borders, reduced glow, smaller spacing, sharper geometry, and a more precise product-introduction rhythm.

## Validation

These commands passed locally:

```bash
npm run lint
npm run build
npm test
```

## Owner deployment path

The owner of the original Sites project can deploy this commit by applying or pulling the v3 source and saving/deploying a new Sites version from their account.

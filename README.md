# GOOD INTERVAL

An independent fictional specialty-coffee e-commerce portfolio concept. This phase implements the responsive homepage and approved design-system foundation only.

## Local development

```sh
npm ci
npm run dev
```

## Validation

```sh
npm run lint
npm run typecheck
npm run build
```

Read [AGENTS.md](AGENTS.md) and the canonical [brand guidelines](../docs/BRAND_GUIDELINES.md) before editing. The project uses Next.js 16.4 App Router, React 19.3, strict TypeScript, and the existing Tailwind 4/Turbopack setup.

## Foundation

- `src/app/globals.css`: approved palette, typography, spacing, controls, grid, focus, motion, responsive rules.
- `src/content/brand.ts`: approved messaging, section navigation, suggested starting brew recipe.
- `src/content/catalog.ts`: fictional catalog; prices are integer USD cents.
- `src/components/`: reusable header, temporary wordmark, image slots, coffee cards. Only the mobile menu needs a client boundary; it uses a native modal dialog.
- `src/app/fonts/`: self-hosted Latin variable WOFF2 files for Manrope 700–800 and DM Sans 400–600, obtained from the official Google Fonts CSS API. No browser/build-time Google Fonts requests.
- `public/licenses/`: respective original SIL Open Font License and copyright notices. Font source CSS request: `https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400..600&family=Manrope:wght@700..800&display=swap`.

Image slots are explicitly labeled temporary placeholders with reserved proportions. They are not approved photography or packaging artwork. The stacked live-text wordmark is provisional pending the canonical outlined vector master. Do not generate substitutes during this phase.

Homepage navigation uses section anchors. Purchase/cart controls are disabled and accompanied by a visible preview notice; no collection, product-detail, cart, checkout, persistence, or transactional behavior is implemented. The Brew Guide expands a brief suggested starting filter recipe within the homepage. Future routes/shopping behavior require a separate implementation task.

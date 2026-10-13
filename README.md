# GOOD INTERVAL

An independent fictional specialty-coffee e-commerce portfolio concept. The current implementation includes the responsive homepage, Shop Coffee collection, and four product-detail pages using the approved design system.

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
- `src/components/`: reusable header, temporary wordmark, image slots, coffee cards. Client boundaries are limited to the native-dialog mobile menu, collection taste filters, and local quantity controls.
- `src/app/fonts/`: self-hosted Latin variable WOFF2 files for Manrope 700–800 and DM Sans 400–600, obtained from the official Google Fonts CSS API. No browser/build-time Google Fonts requests.
- `public/licenses/`: respective original SIL Open Font License and copyright notices. Font source CSS request: `https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400..600&family=Manrope:wght@700..800&display=swap`.

Image slots are explicitly labeled temporary placeholders with reserved proportions. They are not approved photography or packaging artwork. The stacked live-text wordmark is provisional pending the canonical outlined vector master. Do not generate substitutes during this phase.

Routes: `/shop`, `/products/midday`, `/products/daybreak`, `/products/after-hours`, `/products/the-good-set`. Header/footer navigation reaches the collection and homepage approach/brew sections. Product images and names link to detail pages; all four explicit product routes share a detail template backed by the catalog. Unknown product URLs receive an HTTP 404 and branded recovery page.

The collection defaults to all entries and supports the three approved taste filters with accessible selected states, result announcements, and reset controls. Each detail page presents the approved product information, quantity UI, brew recipe, fictional-product disclosure, and proposed demo shipping terms. Quantity is local UI state only. Purchase/cart controls are disabled with a visible preview notice; no cart, checkout, persistence, payment, or transactional behavior is implemented.

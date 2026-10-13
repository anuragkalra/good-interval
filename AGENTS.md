<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# GOOD INTERVAL project instructions

## Authority and scope

- Read `../docs/BRAND_GUIDELINES.md` thoroughly before changes. It is the canonical brand/production reference; this file summarizes it. Preserve synced `sources/` and `../docs/` files.
- The current authorized scope includes the homepage foundation, Shop Coffee collection, and four product-detail pages with labeled image placeholders. Cart behavior, checkout, image generation, and deployment remain deferred.
- Explain and obtain user approval before changing approved creative decisions. Ordinary responsive rearrangement and optical corrections within the brief are allowed.
- This is an independent fictional portfolio concept, not a real coffee business. Include a readable footer disclosure. Do not invent provenance, commercial activity, reviews, or measured results.

## Approved identity and copy

- Name: GOOD INTERVAL. Primary line: “Make room for good coffee.” Creative emphasis: 70% Sensory Modernism / 30% Modern Coffee House (not a color-area quota).
- Only opaque identity colors: Cream `#F3EBDD`, Dark Cherry `#49252D`, Persimmon `#D85A36`, Cobalt `#3155B7`. Cream grounds shopping; Dark Cherry supplies text/buttons/footer; Persimmon leads campaigns; Cobalt is the controlled accent. No white/black identity colors, gradients, ornamental shadows, or automatic dark theme.
- Manrope 800: wordmark/hero; 700: other headings/product names. DM Sans 400: body; 500: navigation; 600: controls/labels/prices. Use actual local licensed webfonts, retain OFL/copyright notices, system sans-serif fallbacks, and no synthesized styles. No third family.
- Wordmark: GOOD above INTERVAL, same font size, native kerning, -0.025em tracking, optically aligned left edges, naturally shorter GOOD. Gap between capital rows: 0.18 × cap height. Clear space: at least half a cap height. Header width: 136px desktop / 112px mobile; minimum 104px. No stretching, justification, symbols, ligatures, or monogram. Current live type is provisional; use the future approved outlined vector master when supplied.
- Signature: stacked wordmark, decisive color, offset Cream information panel. Straight edges and stable grids. Warmth comes from materials, directional light, ritual, and approved language.
- Use exact hero copy/canonical story. Short, specific, relaxed, taste-first tone. No invented founder, year, city, farms, varieties, elevations, scores, harvest/roast dates, awards, certifications, testimonials, sustainability/health claims, or caffeine percentages. Notes are sensory descriptions, not added ingredients; decaf is not caffeine-free or sleep-promoting.
- No Open Frame, segmented band, paired circles, bean icon, sunburst, ripples, taste radar, measurement scales, imitation identity assets, or empty ornamental sections.

## Catalog and imagery

- Single catalog source: `src/content/catalog.ts`; prices are integer USD cents. Preserve identifiers, notes/order, fictional country/process/roast, size, format, color, and decaf status. UI title casing does not rename canonical products.
- MIDDAY / GI-MID-250: Colombia; washed; medium-light; Sweet & Rounded; Caramel · Orange · Cocoa; 250g whole bean; $20; Persimmon.
- DAYBREAK / GI-DAY-250: Ethiopia; washed; light; Bright & Juicy; Apricot · Bergamot · Honey; 250g whole bean; $22; Cobalt.
- AFTER HOURS / GI-AFT-250: Colombia; ethyl acetate decaffeination; medium; Deep & Comforting; Dark Chocolate · Almond · Brown Sugar; 250g whole bean, decaf; $22; Dark Cherry.
- THE GOOD SET / GI-SET-750: one of each existing 250g bag, including decaf; 750g total; $58. Individuals total $64; show $6 savings only where those prices are shown. No fourth roast, miniature sampler bags, gift box, size/grind variants, equipment, merch, or subscription.
- This phase uses clearly labeled image slots with reserved aspect ratios. No generated images, speculative packaging artwork, or unrelated stock photography. Placeholders are temporary scaffolding, not approved campaign artwork.
- Future bags share the matte upright flat-bottom 123 × 200 × 80mm architecture, assigned full color, upper-left Cream wordmark, square lower-right Cream panel. Follow exact front/rear coordinates, typography, seal/zipper/rear-valve rules and artwork workflow in the brief before producing assets.
- Future hero: MIDDAY, brewed cup on wood, credible pouring hand; 3:2 desktop and composed 4:5 mobile. Ritual: DAYBREAK with glass dripper/filter/grounds/carafe. Collection: equal bags, DAYBREAK left, MIDDAY center slightly forward, AFTER HOURS right; 5:4. Catalog fronts: 4:5, uniform scale, no props. No fruit/nut ingredient props or false provenance imagery.
- Keep high-resolution masters separate from responsive exports; track SKU/shot/crop/version; provide dimensions, useful alt text, appropriate loading. No editorial copy baked into photographs.

## Design system and layout

- Centralize tokens in `src/app/globals.css`, copy in `src/content/brand.ts`. No competing design system.
- Maximum content width 1280px; desktop/tablet/mobile side padding 48/32/20px. Desktop editorial grid: 12 columns / 24px gutters.
- Spacing rhythm: 8, 12, 16, 24, 32, 48, 64, 96, 128px. Major sections: 96px desktop / 56px mobile.
- Breakpoints: mobile <768px, tablet 768–1023px, desktop ≥1024px. Support 320px without horizontal scrolling. Hero stacks copy before image on mobile; no fixed viewport-height sections. Product grid: 3/2/1 columns.
- Type desktop → mobile (size/line): hero 80/84 → 40/44; page H1 56/60 → 36/40; H2 44/48 → 30/34; H3 28/34 → 24/30; product 24/30 → 22/28; intro 20/30 → 18/28; body 18/28 → 16/25. Controls 16/24; metadata 14/21; eyebrow 12/18 (+0.08em). Interpolate tablet. Tracking: hero -0.03em, H1/H2 -0.025em, H3/product -0.015em.
- Sentence case UI/headlines; uppercase only wordmark, packaging names, short eyebrows, occasional taste labels. Paragraphs approximately 55–70 characters; essential body copy is full-strength Dark Cherry on Cream.
- Buttons: ≥48px tall, 4px radius, DM Sans 600 16px. Primary Dark Cherry/Cream; secondary Cream/Dark Cherry with 1px Dark Cherry border. Interactive targets ≥44 × 44px. Optional simple line icons: 20–24px, 1.5–2px stroke.
- Homepage order: compact header; 45/55 Persimmon-copy/MIDDAY-image hero with Cream supporting panel; “Find your good interval” cards in MIDDAY/DAYBREAK/AFTER HOURS order; ritual/story; THE GOOD SET; short brewing note; Dark Cherry footer/disclosure.
- No announcement strip, sale badges, newsletter popup, testimonials, feeds, countdowns, forced quizzes, carousels, or unrelated shopping features.

## Accessibility and truthful behavior

- Semantic landmarks, one H1, ordered headings, skip link, descriptive controls/links, visible focus. Cobalt focus on Cream; two-color focus on strong colors. No hover-only actions.
- Dark Cherry/Cream and Cobalt/Cream support normal text. Cream/Persimmon and Dark Cherry/Persimmon only for large text (≥24px regular or ≥19px bold). Avoid Dark Cherry/Cobalt and Persimmon/Cobalt for information/essential controls. Do not change palette hex values to fix contrast.
- Translucent Dark Cherry only for nonessential dividers; essential boundaries/states need contrast. Selected state needs cues beyond color.
- Mobile Menu: keyboard-accessible sheet, visible Close, focus containment, Escape, focus restoration. Prefer native dialog over heavy dependencies.
- Shared navigation links Shop Coffee to `/shop` and Our Approach/Brew Guide to homepage sections. Product image/name links use `/products/[slug]`. Shopping controls remain disabled with a visible explanation. Quantity controls are local presentation state only; no cart effects, persistence, or subtotal calculations.
- Optional transitions: 150–220ms; respect reduced motion. No parallax, scroll hijacking, looping logo, autoplay video, or motion-dependent content.
- Validate keyboard, zoom/text resizing, representative widths including 320px, reduced motion. Do not claim WCAG compliance from this brief alone.
- Brew recipe: suggested filter starting point, not tested product performance; 15g coffee, 250g water, approximately 93°C, medium grind, 2:30–3:30. Adjust to equipment/taste; whole beans require a grinder.
- Every product page includes “Fictional coffee product created for a portfolio concept.” Future checkout must be unmistakably non-transactional; no real personal/card data, external communications, or order-placement claim. Cart/persistence/bundle/shipping tests belong to the future authorized scope.

## Repository and validation conventions

- Stack: Next.js 16.4 App Router, React 19.3, strict TypeScript, ESLint 9, existing Tailwind 4/Turbopack loader. Preserve configuration unless a demonstrated issue requires adjustment.
- `src/app/`: routes/root layout; `src/components/`: reusable UI; `src/content/`: canonical content. Use `@/` imports. Pages/layouts stay server-rendered; `"use client"` only on interactive boundaries.
- Use CSS custom properties/named classes for the foundation; align Tailwind mappings with approved tokens. Avoid backends, services, unnecessary libraries/dependencies, or data collection.
- Read relevant installed Next.js guides before coding; do not assume older APIs, routing types, lint integration, or caching behavior. Preserve the generated Next.js instructions above.
- Run `npm run lint`, `npm run typecheck` (route type generation + `tsc --noEmit`), and `npm run build`. Validate implemented layout/interactions; report limits candidly.
- Do not publish/deploy, generate assets, manufacture packaging, process purchases, send communications, or implement deferred features based solely on the brand brief. Current work is local homepage, collection, and product-detail implementation.

## Collection and product-page conventions

- `src/app/shop/page.tsx` renders the collection. Four explicit routes under `src/app/products/` share `src/components/product-detail.tsx` and centralized catalog data. Keep this finite route set aligned with the approved catalog; unknown product URLs receive a routing-level HTTP 404 and branded recovery page.
- Shared header/footer/skip link live in the root layout. Avoid duplicate landmarks or duplicate disclosure IDs.
- Use the same `CoffeeCard` component on homepage and collection. Collection defaults to all four entries in approved order; single-level taste filters show only the matching coffee, never the bundle. Cobalt/Cream selected filters include a checkmark and `aria-pressed`; announce the result count and offer “Show all coffee” in filtered states.
- Detail pages show taste, exact notes, price, fixed format, quantity, and a disabled Add to cart control. Include approved short descriptions, grinder requirement, proposed brew suitability, fictional origin/process/roast, ingredient/storage information, suggested filter recipe, demo shipping terms, and concept disclosure. No unapproved variants or product attributes.
- THE GOOD SET derives its contents from existing coffee IDs and states each 250g bag’s caffeination status and total 750g. No fourth packaging format.
- Use reserved front/three-quarter image slots for individual coffees and the collection slot for the bundle; no rear-photo claims or hover-dependent galleries. Mobile images precede purchase information.

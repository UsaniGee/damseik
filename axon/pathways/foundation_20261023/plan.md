# Implementation Plan — Performance & Technical SEO Foundation

Pathway: `foundation_20261023` · Spec: [spec.md](./spec.md) ·
Workflow: [workflow.md](../../workflow.md) (adapted TDD: tests first for logic;
build/render/Lighthouse verification for presentational changes)

## Phase 1: Tooling & Baseline Audit [checkpoint: a4a9637]

- [x] Task: Add test tooling f64fc91
    - [x] Install `vitest`, `@vitest/coverage-v8`, `jsdom`, `@testing-library/react`, `@testing-library/jest-dom` (dev)
    - [x] Add `test` and `test:coverage` scripts; `vitest` config in `vite.config.js` (jsdom env, setup file)
    - [x] Add a smoke test and confirm `CI=true npx vitest run` passes
- [x] Task: Record performance baseline (FR-1) 2b9f774
    - [x] Build current `main` and run Lighthouse (mobile + desktop) against `https://www.damseik.com` for `/`, `/services`, `/services/valve-services`, `/projects`, `/projects/well-intervention-rivers-state`, `/contact`
    - [x] Record PSI field data (CrUX) where available, labelled as field data
    - [x] Generate a bundle composition report (`rollup-plugin-visualizer`, temporary) and list the largest modules
    - [x] List render-blocking resources, fonts, image sizes/formats, third-party requests
    - [x] Write `docs/audit/baseline.md` with test conditions and a prioritized bottleneck list
- [x] Task: Record URL & SEO inventory (FR-1) a4a9637
    - [x] For every route in `src/App.jsx` + live sitemap: status code, title, description, canonical, H1
    - [x] Write `docs/audit/url-inventory.md`
- [x] Task: Phase Verification & Checkpoint (Refer to workflow.md)

## Phase 2: Site Config & Route Manifest

- [x] Task: Site configuration module (FR-2) 105d96f
    - [x] Write tests: `canonicalUrl()` builds `https://www.damseik.com` URLs, strips trailing slash (except root), lowercases host, ignores query/hash
    - [x] Implement `src/config/site.js` (`SITE_URL` from `VITE_SITE_URL`, `BRAND_NAME = "Dam Seik"`, default OG image path)
    - [x] Replace all `damseikservices.com` references in `src/`, `scripts/`, `public/` with the config
- [x] Task: Route manifest (FR-3) baa2509
    - [x] Write tests: every manifest path is unique, lowercase-safe, has title + description, matches an existing page; indexable routes exclude 404
    - [x] Implement `src/routes/manifest.js` (path, lazy import, title, description, indexable, lastmod) seeded from existing page copy (no new claims)
    - [x] Refactor `src/App.jsx` to build the router from the manifest; verify every existing URL still renders
- [ ] Task: SEO tag builder
    - [ ] Write tests: builder returns title, description, canonical, robots, OG/Twitter tags, JSON-LD for a manifest entry; brand is "Dam Seik"; no `keywords` tag
    - [ ] Implement `src/lib/seo.js`; refactor `src/components/SEO` to use it
- [ ] Task: Brand metadata correction (FR-9)
    - [ ] Update `index.html` and `StructuredData` to remove "Damsiek Limited" / "Dam Seik Services" as the site name and the `meta keywords` tag
    - [ ] Verify with `grep` over `dist/` after build
- [ ] Task: Phase Verification & Checkpoint (Refer to workflow.md)

## Phase 3: Build-Time Prerendering & Status Codes

- [ ] Task: Server render entry (FR-4)
    - [ ] Write test: rendering a manifest route server-side produces HTML containing its H1 and the head tags from `src/lib/seo.js`
    - [ ] Implement `src/entry-server.jsx` using `createStaticHandler` / `createStaticRouter` + `renderToPipeableStream` (`onAllReady`), with Chakra/Emotion style extraction
    - [ ] Guard browser-only code (`window`, `document`, Swiper, framer-motion) so SSR does not crash
- [ ] Task: Client hydration (FR-4)
    - [ ] In `src/main.jsx`, preload the current route's lazy chunk, then `hydrateRoot` (fallback to `createRoot` when no prerendered markup)
    - [ ] Verify zero hydration warnings on every route in `npm run preview`
- [ ] Task: Prerender script (FR-4)
    - [ ] Write tests: script writes `dist/<path>/index.html` per indexable route and `dist/404.html`; injects head tags and rendered markup into the template
    - [ ] Implement `scripts/prerender.js`; chain in `build` (`vite build && vite build --ssr src/entry-server.jsx --outDir dist-ssr && node scripts/prerender.js`)
- [ ] Task: Vercel routing & 404 (FR-4)
    - [ ] Replace the SPA catch-all rewrite in `vercel.json`; set `cleanUrls`, `trailingSlash: false`
    - [ ] Verify on a Vercel preview: indexable routes 200 with real HTML, `/does-not-exist` 404 with `404.html`
- [ ] Task: Phase Verification & Checkpoint (Refer to workflow.md)

## Phase 4: robots.txt, Sitemap & Redirects

- [ ] Task: robots.txt (FR-5)
    - [ ] Add `public/robots.txt` (allow all, `Sitemap: https://www.damseik.com/sitemap.xml`)
- [ ] Task: Manifest-driven sitemap (FR-5)
    - [ ] Write tests: sitemap includes only indexable manifest routes on `SITE_URL`, valid XML, excludes 404/noindex, `lastmod` only when set
    - [ ] Rewrite `scripts/generate-sitemap.js` to consume the manifest; remove the committed stale `public/sitemap.xml`
- [ ] Task: Redirect map (FR-6)
    - [ ] Write tests: redirect map has no chains or loops, no target is the homepage unless intended, every target is an indexable manifest route
    - [ ] Implement redirects in `vercel.json` (trailing slash, case-variant project URL) and document in `docs/seo/redirects.md` (old, new, reason, status, verification)
- [ ] Task: Phase Verification & Checkpoint (Refer to workflow.md)

## Phase 5: Performance Fixes

- [ ] Task: Bundle & dependency cleanup (FR-7)
    - [ ] Remove `reactChunkFirstPlugin`, custom `manualChunks`, `optimizeDeps.force`, and the React path aliases; rely on route-level splitting
    - [ ] Remove unused dependencies (confirm usage first: `next-themes`, `@chakra-ui/icons` vs `react-icons`, unused Swiper modules)
    - [ ] Compare bundle report with baseline; record the reduction
- [ ] Task: Fonts (FR-7)
    - [ ] Self-host Inter and Poppins `woff2` for weights actually used, `font-display: swap`; remove Google Fonts `<link>`s
- [ ] Task: Images (FR-7)
    - [ ] Write tests: Cloudinary helper returns `f_auto,q_auto` URLs, a `srcset` for the configured widths, and requires width/height
    - [ ] Implement `src/lib/cloudinary.js` + `ResponsiveImage` component; apply to hero (eager, `fetchpriority="high"`) and below-the-fold images (lazy)
- [ ] Task: Third-party scripts (FR-7)
    - [ ] Load GA after `load`/idle without blocking; keep the existing page-view behaviour
- [ ] Task: Caching headers (FR-7)
    - [ ] `vercel.json` headers: `/assets/*` → `public, max-age=31536000, immutable`; HTML left revalidating
- [ ] Task: Remove the service worker (FR-8)
    - [ ] Replace `public/sw.js` with a self-unregistering worker that deletes its caches; remove registration from `src/main.jsx`
- [ ] Task: Phase Verification & Checkpoint (Refer to workflow.md)

## Phase 6: Verification & Handoff

- [ ] Task: Post-change measurement
    - [ ] Re-run Lighthouse under identical conditions on the same routes (Vercel preview); write `docs/audit/post-foundation.md` with before/after comparison and remaining bottlenecks
- [ ] Task: SEO verification
    - [ ] `curl` every indexable route: 200, unique title/description, correct canonical, H1 in HTML
    - [ ] Validate `sitemap.xml` and `robots.txt`; verify each redirect is a single 301 hop; validate JSON-LD
    - [ ] Confirm no `damseikservices.com` / "Damsiek Limited" metadata in `dist/`
- [ ] Task: Regression check
    - [ ] Navigation, existing contact form UI, links, and Swiper carousels still work; no console errors
    - [ ] `npm run lint`, `CI=true npx vitest run --coverage` (≥80% on `src/lib`, `src/config`, `src/routes`, `scripts`), `npm run build`
- [ ] Task: Phase Verification & Checkpoint (Refer to workflow.md)

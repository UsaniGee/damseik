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

## Phase 2: Site Config & Route Manifest [checkpoint: b5f8d0d]

- [x] Task: Site configuration module (FR-2) 105d96f
    - [x] Write tests: `canonicalUrl()` builds `https://www.damseik.com` URLs, strips trailing slash (except root), lowercases host, ignores query/hash
    - [x] Implement `src/config/site.js` (`SITE_URL` from `VITE_SITE_URL`, `BRAND_NAME = "Dam Seik"`, default OG image path)
    - [x] Replace all `damseikservices.com` references in `src/`, `scripts/`, `public/` with the config
- [x] Task: Route manifest (FR-3) baa2509
    - [x] Write tests: every manifest path is unique, lowercase-safe, has title + description, matches an existing page; indexable routes exclude 404
    - [x] Implement `src/routes/manifest.js` (path, lazy import, title, description, indexable, lastmod) seeded from existing page copy (no new claims)
    - [x] Refactor `src/App.jsx` to build the router from the manifest; verify every existing URL still renders
- [x] Task: SEO tag builder 6047d63
    - [x] Write tests: builder returns title, description, canonical, robots, OG/Twitter tags, JSON-LD for a manifest entry; brand is "Dam Seik"; no `keywords` tag
    - [x] Implement `src/lib/seo.js`; refactor `src/components/SEO` to use it
- [x] Task: Brand metadata correction (FR-9) b5f8d0d
    - [x] Update `index.html` and `StructuredData` to remove "Damsiek Limited" / "Dam Seik Services" as the site name and the `meta keywords` tag
    - [x] Verify with `grep` over `dist/` after build
- [x] Task: Phase Verification & Checkpoint (Refer to workflow.md)

## Phase 3: Build-Time Prerendering & Status Codes [checkpoint: 9ab4367]

- [x] Task: One H1 per page (plan amendment — required by spec §4.3 and this pathway's acceptance criteria) 216384f
    - [x] Write test: `Pageshero` renders its title as the page's only `h1`
    - [x] Render `Pageshero` title as `h1` (no visual change) and the homepage hero's first slide heading as `h1`
    - [x] Verify exactly one `h1` per route in the rendered DOM
- [x] Task: Server render entry (FR-4) e106607
    - [x] Write test: rendering a manifest route server-side produces HTML containing its H1 and the head tags from `src/lib/seo.js`
    - [x] Implement `src/entry-server.jsx` using `createStaticHandler` / `createStaticRouter` + `renderToPipeableStream` (`onAllReady`), with Chakra/Emotion style extraction
    - [x] Guard browser-only code (`window`, `document`, Swiper, framer-motion) so SSR does not crash
- [x] Task: Client hydration (FR-4) 687826c
    - [x] In `src/main.jsx`, preload the current route's lazy chunk, then `hydrateRoot` (fallback to `createRoot` when no prerendered markup)
    - [x] Verify zero hydration warnings on every route in `npm run preview`
- [x] Task: Prerender script (FR-4) ea0583c
    - [x] Write tests: script writes `dist/<path>/index.html` per indexable route and `dist/404.html`; injects head tags and rendered markup into the template
    - [x] Implement `scripts/prerender.js`; chain in `build` (`vite build && vite build --ssr src/entry-server.jsx --outDir dist-ssr && node scripts/prerender.js`)
- [x] Task: Vercel routing & 404 (FR-4) 9ab4367
    - [x] Replace the SPA catch-all rewrite in `vercel.json`; set `cleanUrls`, `trailingSlash: false`
    - [x] Verify locally with an equivalent static server (cleanUrls, no trailing slash): routes 200, `/does-not-exist` 404 with `404.html`
    - [ ] Verify on a Vercel preview — deferred to Phase 4 (user decision), see Phase 4 task "Vercel preview verification"
- [x] Task: Phase Verification & Checkpoint (Refer to workflow.md)

## Phase 4: robots.txt, Sitemap & Redirects

- [x] Task: robots.txt (FR-5) 764bd79
    - [x] Generate `dist/robots.txt` at build from `SITE_URL` (allow all, `Sitemap: https://www.damseik.com/sitemap.xml`)
- [x] Task: Manifest-driven sitemap (FR-5) ef05599
    - [x] Write tests: sitemap includes only indexable manifest routes on `SITE_URL`, valid XML, excludes 404/noindex, `lastmod` only when set
    - [x] Rewrite `scripts/generate-sitemap.js` to consume the manifest; remove the committed stale `public/sitemap.xml`
- [x] Task: Redirect map (FR-6) 5ec9c7a
    - [x] Write tests: redirect map has no chains or loops, no target is the homepage unless intended, every target is an indexable manifest route
    - [x] Implement redirects in `vercel.json` (trailing slash, case-variant project URL) and document in `docs/seo/redirects.md` (old, new, reason, status, verification)
- [~] Task: Vercel preview verification (moved from Phase 3)
    - [ ] With user approval, push the branch for a Vercel preview deployment
    - [ ] Verify on the preview: routes 200 with prerendered HTML, `/does-not-exist` 404, trailing-slash and legacy-URL redirects are single permanent hops, **lowercase canonical project URLs return 200 (no self-redirect loop)**, `robots.txt` is `text/plain`, `sitemap.xml` lists 15 URLs
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

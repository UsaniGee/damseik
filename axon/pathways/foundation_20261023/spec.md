# Pathway Spec — Performance & Technical SEO Foundation

**Pathway ID:** `foundation_20261023` · **Type:** Feature (brownfield) ·
**Part 1 of 4** of the redesign defined in [`/spec.md`](../../../spec.md)

| # | Pathway | Spec sections |
|---|---|---|
| **1** | **Performance & Technical SEO Foundation (this)** | §3.1, §3.5, §4.1–4.4, §4.8, §15.1 |
| 2 | Content Models, Layout & Pages | §2, §5–11, §14, §4.5–4.7 |
| 3 | Contact / RFQ Backend & Analytics | §12, §13, §3.5 |
| 4 | QA, Accessibility & Launch | §3.2–3.4, §4.9, §15.3, §16, §17 |

## 1. Overview

The live site (`https://www.damseik.com`, Vercel) is a client-rendered Vite +
React SPA. Crawlers receive an empty `<div id="root">`, unknown URLs return
HTTP 200, `robots.txt` does not exist (the SPA HTML is served instead), the
sitemap lists a non-resolving domain (`damseikservices.com`), and a single
563 KB (193 KB brotli) `vendor-react` chunk blocks first render.

This pathway measures the baseline, then lays the rendering, delivery, and
technical SEO foundation every later pathway builds on — without changing page
designs or publishing new content.

## 2. Audit Evidence (2026-10-23, `curl` from a single location)

| Check | Result |
|---|---|
| `https://damseik.com`, `http://www.damseik.com` | 308 → `https://www.damseik.com/` ✓ |
| Homepage TTFB | 0.8–6.2 s across requests |
| `/does-not-exist` | **200** (soft 404) |
| `/robots.txt` | **200, returns SPA HTML** |
| `/sitemap.xml` | 200, all `<loc>` on `damseikservices.com` |
| HTML `cache-control` | `public, max-age=0, must-revalidate` |
| `vendor-react-*.js` | 562,592 B raw / 192,672 B brotli |
| Served metadata | Generic; `og:title` / `og:site_name` = "Damsiek Limited" |
| Contact form | Simulated success; no backend (fixed in pathway 3) |

These are indicative only. The formal baseline (FR-1) is the reference for
before/after comparison.

## 3. Functional Requirements

### FR-1 Baseline audit (§3.1.1, §4.1, §15.1)
- Run Lighthouse (mobile + desktop) on `/`, `/services`, one service detail,
  `/projects`, one project detail, `/contact`; record LCP, CLS, TBT (INP proxy),
  Performance score, and test conditions.
- Record PageSpeed Insights / CrUX field data where available, labelled as
  field data; lab results are never presented as field data.
- Record bundle composition (`rollup-plugin-visualizer` or equivalent), render-
  blocking resources, font/image/third-party requests.
- Inventory every existing public URL (routes in `src/App.jsx` + live sitemap)
  with its current title, description, canonical, H1, and status code.
- Output: `docs/audit/baseline.md` and `docs/audit/url-inventory.md`, with a
  prioritized bottleneck list.

### FR-2 Single source of site configuration
- `VITE_SITE_URL` (default `https://www.damseik.com`) and brand constants in one
  module; remove all 24 hard-coded `damseikservices.com` references.
- Canonical policy: HTTPS, `www` host, **no trailing slash** (`/path/` → 301
  `/path`); homepage canonical is `https://www.damseik.com/`.

### FR-3 Route manifest
- A single route manifest (path, page component, title, description, indexable
  flag, lastmod) drives the router, prerendering, sitemap, and SEO tags, so
  they cannot drift apart.
- All existing URLs are preserved; none are renamed in this pathway.

### FR-4 Build-time prerendering (§3.1.3, §4.4)
- Every indexable route is emitted as its own static HTML file containing the
  fully rendered page content, unique `<title>`, meta description, canonical,
  robots directive, Open Graph/Twitter tags, and JSON-LD in the initial HTML.
- Client hydrates the prerendered markup without hydration mismatch warnings.
- The client-side `SEO` component keeps head tags correct on in-app navigation.
- A real `404.html` is generated; unknown paths return **HTTP 404**.
- `vercel.json` SPA catch-all rewrite is removed/replaced so static files and
  the 404 are served correctly.

### FR-5 robots.txt and sitemap (§4.4)
- Static `public/robots.txt` allowing crawling, referencing
  `https://www.damseik.com/sitemap.xml`.
- `sitemap.xml` generated from the route manifest: canonical, indexable,
  production URLs only; excludes 404/redirect/noindex routes; `lastmod` only
  where known.

### FR-6 Redirects (§4.8)
- `vercel.json` `redirects` for trailing-slash normalisation and any URL whose
  canonical form differs (e.g. case variants such as
  `/projects/high-Pressure-...`): document old → new, reason, status, and
  verification result in `docs/seo/redirects.md`.
- No redirect chains; no blanket redirects to the homepage.

### FR-7 Performance fixes (§3.1.3) — prioritized by FR-1 findings
- Replace the custom `manualChunks` / `reactChunkFirstPlugin` / `optimizeDeps.force`
  setup with route-level code splitting so each route loads only what it needs.
- Remove unused dependencies (verify `next-themes`, duplicate icon sets, etc.).
- Self-host fonts (`woff2`, `font-display: swap`, only used weights) instead of
  render-blocking Google Fonts CSS; preload only the LCP-critical font if
  measurement justifies it.
- Cloudinary images: automatic format (AVIF/WebP), responsive `srcset`/`sizes`,
  explicit dimensions; hero/LCP image eager + `fetchpriority="high"`; below-the-
  fold images lazy.
- Defer GA script loading so it never blocks render or interaction.
- Cache headers: `public, max-age=31536000, immutable` for hashed `/assets/*`;
  HTML revalidated.

### FR-8 Remove the service worker (§3.1.3)
- Replace `public/sw.js` with a self-unregistering worker that clears its
  caches; remove registration from `src/main.jsx`.

### FR-9 Brand metadata correction (§2.1)
- Replace "Damsiek Limited" / "Dam Seik Services" in site-level metadata with
  **Dam Seik**; legacy names remain only where legally required.
- Remove the `meta keywords` tag (no SEO value).

## 4. Non-Functional Requirements

- No visual redesign in this pathway; rendered pages must look the same as
  before, apart from fixes.
- No invented content: metadata descriptions are derived from existing page
  copy. Gaps are logged, not filled with claims.
- Build stays a single `npm run build` on Vercel with `npm install`.

## 5. Acceptance Criteria

- [ ] `docs/audit/baseline.md` and `docs/audit/url-inventory.md` exist with
      test conditions stated.
- [ ] `curl` of every indexable route returns 200 and HTML containing the page
      H1, a unique title/description, and a correct `https://www.damseik.com`
      canonical.
- [ ] `/does-not-exist` returns **404**; `/robots.txt` returns `text/plain`.
- [ ] `sitemap.xml` contains only `https://www.damseik.com` canonical URLs that
      return 200.
- [ ] `/services/` → 301 → `/services` (single hop).
- [ ] No hydration warnings in the browser console on any route.
- [ ] No "Damsiek Limited" / `damseikservices.com` in built output metadata.
- [ ] Service worker unregistered for returning visitors.
- [ ] Post-change Lighthouse (same conditions) recorded and compared with
      baseline; regressions explained. Targets: LCP ≤ 2.5 s, CLS ≤ 0.1,
      Performance ≥ 90 where practical.
- [ ] Unit tests for route manifest, SEO tag builder, sitemap generator, and
      redirect map pass; `npm run lint` and `npm run build` pass.

## 6. Out of Scope

- New pages (Equipment, HSE), content models, design changes → pathway 2.
- Contact/RFQ backend and analytics events → pathway 3.
- Full accessibility audit, cross-browser QA, Search Console submission → pathway 4.
- Framework migration (e.g. Next.js).

## 7. Dependencies & Open Items

- Vercel project access to confirm headers/redirects after deploy (preview
  deployment is sufficient for verification).
- Google Search Console / GA4 access for field data and indexing baseline
  (optional; recorded as unavailable if not provided).
- Approved 1200×630 social share image (`og-image.jpg` is referenced but does
  not exist in `public/`) — placeholder logged until supplied.

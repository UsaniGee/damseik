# Performance Baseline

- **Date:** 2026-10-23
- **Target:** production, `https://www.damseik.com` (Vercel, `lhr1` edge)
- **Code measured:** build of commit `3687bdd`. The locally built
  `vendor-react-C9drRnJC.js` hash is identical to production, so bundle
  analysis reflects the live site.

## Test Conditions

| Item | Value |
|---|---|
| Tool | Lighthouse 12.6.1 CLI, performance category only |
| Browser | Google Chrome (stable), `--headless=new` |
| Mobile | Lighthouse default: Moto G Power emulation, simulated slow 4G (150 ms RTT, 1.6 Mbps), 4× CPU slowdown |
| Desktop | `--preset=desktop` (simulated 40 ms RTT, 10 Mbps, no CPU slowdown) |
| Runs | 3 per route × form factor; table shows the **median-score run** |
| Location | Single residential connection; not representative of all users |

**These are lab results.** They are not equivalent to real-user (field) Core
Web Vitals.

**Field data (CrUX / PageSpeed Insights): unavailable.** The PSI API returned
HTTP 429 (shared anonymous quota exhausted) and no Search Console or GA access
was provided. INP cannot be measured in the lab; TBT is reported as a proxy.

## Results (lab, median of 3)

| Route | Form | Perf | LCP (s) | FCP (s) | TBT (ms) | CLS | Speed Index (s) | Transfer (MB) |
|---|---|---|---|---|---|---|---|---|
| `/` | mobile | **25** | **14.9** | 7.2 | **47,076** | 0.000 | 52.3 | **342.9** |
| `/` | desktop | 33 | 4.0 | 1.8 | 2,601 | 0.000 | 18.3 | **253.7** |
| `/services` | mobile | 30 | 8.6 | 4.2 | 1,923 | 0.033 | 12.5 | 10.7 |
| `/services` | desktop | 31 | 6.0 | 1.1 | 1,869 | **0.117** | 5.4 | 10.7 |
| `/services/valve-services` | mobile | 27 | 7.9 | 5.2 | 5,787 | 0.002 | 38.3 | 0.3 |
| `/services/valve-services` | desktop | 64 | 1.4 | 1.1 | 467 | 0.000 | 7.2 | 0.3 |
| `/projects` | mobile | 29 | 8.3 | 3.9 | 2,782 | 0.000 | 17.1 | 3.5 |
| `/projects` | desktop | 55 | 16.3 | 6.6 | 0 | 0.000 | 15.5 | 0.6 |
| `/projects/well-intervention-rivers-state` | mobile | 35 | 6.9 | 3.7 | 2,124 | 0.000 | 7.2 | 0.5 |
| `/projects/well-intervention-rivers-state` | desktop | 61 | 6.6 | 1.2 | 147 | 0.000 | 3.9 | 0.5 |
| `/contact` | mobile | 34 | 5.5 | 3.6 | 4,270 | 0.000 | 12.3 | 0.3 |
| `/contact` | desktop | 48¹ | 4.7 | 1.1 | 402 | 0.000 | 7.4 | 0.8 |

¹ Only 1 of 3 desktop `/contact` runs completed (one DevTools protocol timeout,
one `NO_FCP`); treat it as low confidence. The `/projects` desktop run
(LCP 16.3 s with 0 ms TBT) is an outlier driven by late image loading; re-test
under identical conditions after fixes.

**Against targets (§3.1.2):** no route meets LCP ≤ 2.5 s on mobile; no route
reaches Performance ≥ 90 on either form factor; CLS passes everywhere except
`/services` desktop (0.117).

## Bundle Composition (production build)

| Chunk | Raw | Brotli (live) | Loaded on |
|---|---|---|---|
| `vendor-react` | 562.6 KB | 192.7 KB | **every page, render-blocking** |
| `vendor-swiper` (+ 8 KB CSS) | 89.7 KB | — | home |
| `vendor` | 35.6 KB | 14.2 KB | every page |
| `index` (entry) | 14.8 KB | 5.4 KB | every page |

Contents of `vendor-react` (rendered size before minification):

| Package | KiB | Notes |
|---|---|---|
| framer-motion | 331.0 | Used in 7 components (Hero, Footer, Testimonials, OurClients, landing sections, Services index) |
| react-router | 196.6 | |
| react-dom | 131.6 | |
| @chakra-ui/react + theme + styled-system | 249.6 | |
| react-hook-form | 72.5 | **Only used on `/contact`**, but bundled for every page by `manualChunks` |
| react-focus-lock / react-remove-scroll | 29.0 | Chakra modal/drawer dependencies |

The custom `manualChunks` function in `vite.config.js` forces any module
imported by or importing React into `vendor-react`, which defeats route-level
code splitting even though pages are `lazy()`-loaded.

## Prioritized Bottlenecks

| # | Bottleneck | Evidence | Impact | Fix (plan task) |
|---|---|---|---|---|
| 1 | **Hero background videos** — 3 autoplaying MP4s of 67 MB, 40 MB (3840×2160 4K) and 62 MB in a looping Swiper carousel | Home mobile transfers 343 MB; `aPipe_azt6w2.mp4` downloaded **4×** (Swiper `loop` clones slides, creating duplicate `<video>` elements); 112 s main-thread work, 47 s TBT | Critical — dominates home LCP/TBT and mobile data usage | Phase 5 Images: replace with an optimized poster image as LCP; any retained video must be Cloudinary-transcoded (≤ 720p, `q_auto`, `f_auto`), only the active slide loaded, no `loop` clones. Spec §6.1 discourages video backgrounds — final hero treatment is a pathway 2 design decision |
| 2 | **Unoptimized Cloudinary images** — originals served with no `f_auto`/`q_auto`/width transform | 8.2 MB `ship-drydock_m7izeg.jpg` on `/services`; hero images 270–830 KB; Lighthouse estimates 9.4 MB responsive-image and 6.9 MB modern-format savings on `/services` | High — LCP element on `/services` and `/projects` is an untransformed JPEG | Phase 5 Images: `src/lib/cloudinary.js` + `ResponsiveImage` |
| 3 | **Render-blocking Google Fonts CSS** — 2 families, 8 weights | 0.8–1.7 s render-blocking on every route | High — delays FCP on all pages | Phase 5 Fonts: self-host `woff2`, used weights only |
| 4 | **Monolithic `vendor-react` chunk** (563 KB) incl. framer-motion and react-hook-form on every page | Bundle report above; 2–6 s TBT on mobile for text-only pages like `/services/valve-services` | High on mobile CPU | Phase 5 Bundle: remove `manualChunks` / `reactChunkFirstPlugin` / `optimizeDeps.force`; contact-only deps load with `/contact` |
| 5 | **Client-side rendering only** — empty HTML shell, content and LCP wait for JS | FCP 3.6–7.2 s on mobile even for 0.3 MB pages | High for LCP and SEO | Phase 3 Prerendering |
| 6 | **Logo as 128 KB PNG** on every page | Network requests on every route | Medium | Phase 5 Images: Cloudinary transform (`f_auto`, sized) or SVG if supplied |
| 7 | **Layout shift on `/services`** | CLS 0.117 desktop | Medium | Phase 5 Images: explicit dimensions / aspect ratios |
| 8 | **HTML not cacheable at the edge between deploys beyond revalidation; hashed assets need immutable caching confirmed** | `cache-control: public, max-age=0, must-revalidate` on HTML | Low–medium | Phase 5 Caching headers |
| 9 | **Service worker caching HTML routes** | `public/sw.js` | Correctness risk (stale content) more than speed | Phase 5 Remove service worker |
| 10 | **Slow / variable TTFB** | 0.8–6.2 s TTFB observed via `curl` | Unknown — needs Vercel analytics to separate cold edge cache from network | Re-measure after prerendering (static files are edge-cached) |

## Other Issues Found (not performance)

- **Lint baseline:** `npm run lint` reports 18 errors / 5 warnings before any
  pathway change, including a real React Rules-of-Hooks violation
  (`useColorModeValue` called inside a callback in
  `src/components/Navbar/Links/index.jsx:144`). The remaining errors are unused
  variables/imports and irregular whitespace. These must be cleared for the
  Phase 6 quality gate.
- **Contact form** simulates success without sending anything
  (`src/Pages/ContactUS/ContactForm/index.jsx`) — pathway 3.
- SEO findings are recorded in [`url-inventory.md`](./url-inventory.md).

# URL & SEO Inventory — Baseline

- **Date:** 2026-10-23
- **Production origin:** `https://www.damseik.com` (Vercel)
- **Sources:** routes in `src/App.jsx` (commit `3687bdd`), live `/sitemap.xml`,
  `curl` status checks, source review of `<SEO>` usage.
- **Search Console / analytics data:** not available to this audit. Pages with
  backlinks, organic traffic, or indexing status are therefore **unknown**;
  every existing URL is treated as potentially valuable and preserved.

## Host & Protocol

| Request | Result |
|---|---|
| `https://damseik.com/` | 308 → `https://www.damseik.com/` |
| `http://www.damseik.com/` | 308 → `https://www.damseik.com/` |
| `https://www.damseik.com/services/` (trailing slash) | **200** (duplicate of `/services`, no redirect) |
| `https://www.damseik.com/does-not-exist` | **200** (soft 404 — SPA catch-all) |
| `https://www.damseik.com/robots.txt` | **200, `text/html`** (SPA shell; no robots.txt exists) |
| `https://www.damseik.com/sitemap.xml` | 200; all 21 `<loc>` use `https://damseikservices.com` (**does not resolve in DNS**) |

## Routes

All 21 routes are in both `src/App.jsx` and the live sitemap; there are no
orphans in either direction. Every route returns HTTP 200 with the same
1,781-byte client-rendered shell (`<div id="root"></div>`).

"Meta source" describes what a crawler or first-load visitor gets after
JavaScript runs:

- **SEO** — the page renders `<SEO>`: title `"<Title> | Dam Seik Services"`,
  its own description, canonical = current URL.
- **none** — the page does not render `<SEO>`. On a direct load the title is
  `Dam Seik` and the description is the generic `index.html` text ("Since it's
  inception, Damsiek has…"); on in-app navigation the **previous page's** title,
  description, and canonical remain. These pages have duplicated, incorrect
  metadata.

| # | Path | Status | Meta source | Source title / notes |
|---|---|---|---|---|
| 1 | `/` | 200 | SEO | "Home"; description claims "Over 36 years of excellence" ⚠ unverified |
| 2 | `/about` | 200 | SEO | "About Us"; "Over 36 years of excellence" ⚠ unverified |
| 3 | `/careers` | 200 | SEO | "Careers" |
| 4 | `/contact` | 200 | SEO | "Contact Us" |
| 5 | `/media` | 200 | SEO | "Media" |
| 6 | `/projects` | 200 | SEO | "Projects" |
| 7 | `/services` | 200 | SEO | "Our Services" |
| 8 | `/services/equipment-leasing` | 200 | **none** | |
| 9 | `/services/coating-and-repair-products` | 200 | **none** | |
| 10 | `/services/process-instrumentation` | 200 | **none** | |
| 11 | `/services/quality-control-services` | 200 | **none** | |
| 12 | `/services/pipeline-facility-production-maintenace` | 200 | **none** | slug misspells "maintenance"; keep (existing URL), consider 301 to corrected slug only with SEO evidence |
| 13 | `/services/valve-services` | 200 | **none** | |
| 14 | `/services/marine-support-services` | 200 | **none** | |
| 15 | `/services/procurement` | 200 | **none** | |
| 16 | `/services/well-service` | 200 | **none** | |
| 17 | `/services/production-chemical-services` | 200 | **none** | |
| 18 | `/projects/water-re-injection-project-umusadege-1-kwale-delta-state` | 200 | **none** | |
| 19 | `/projects/well-intervention-rivers-state` | 200 | **none** | |
| 20 | `/projects/high-Pressure-pumping-support-for-coil-tubing-operation-rivers-state` | 200 | **none** | **mixed case** (`Pressure`); canonical form should be lowercase with a 301 from this URL |
| 21 | `/projects/nitrogen-lift-operation-cawc-well-45T-rivers-state-swamp` | 200 | **none** | **mixed case** (`45T`); canonical form should be lowercase with a 301 from this URL |

## Site-Wide Findings

1. **No `<h1>` on any page.** Chakra `<Heading>` renders `<h2>` by default and
   no component sets `as="h1"`.
2. **Client-only metadata.** The served HTML contains only the generic
   `index.html` head: `og:title` / `og:site_name` = "Damsiek Limited",
   description with a grammatical error, and a `meta keywords` tag. Crawlers
   that do not execute JavaScript, and all social link previews, see this for
   every URL.
3. **Brand name inconsistency:** "Dam Seik" (`<title>`), "Dam Seik Services"
   (`<SEO>`), "Dam Seik Services Limited" (descriptions/JSON-LD), "Damsiek
   Limited" (OG). Spec §2.1 requires **Dam Seik**.
4. **Missing social image:** `<SEO>` defaults `og:image` to `/og-image.jpg`,
   which does not exist in `public/`.
5. **Hard-coded dead domain:** 24 references to `https://damseikservices.com`
   in `src/`, `scripts/`, `public/` (canonical fallback, sitemap, JSON-LD).

## Content Requiring Verification (spec §2.3)

| Claim | Location | Action |
|---|---|---|
| "Over 36 years of excellence" | Home & About `<SEO>` descriptions (and possibly page copy) | Confirm with company records before carrying into new metadata; omitted from rewritten metadata until verified |
| Client logos (Shell, Total, NNPC, …) | `OurClients` component | Confirm permission to display (pathway 2) |
| Testimonials | `Testimonials` component | Confirm authenticity/approval (pathway 2) |

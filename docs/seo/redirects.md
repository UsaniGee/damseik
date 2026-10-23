# Redirect Map

Source of truth: `aliases` in [`src/routes/manifest.js`](../../src/routes/manifest.js).
[`vercel.json`](../../vercel.json) must declare exactly the list produced by
`buildRedirects()` (`src/routes/redirects.js`); `src/routes/redirects.test.js`
fails if they drift, if a redirect chains or loops, or if a target is not an
indexable canonical route.

## URL-Specific Redirects

| Old URL | New URL | Reason | Status | Verification |
|---|---|---|---|---|
| `/projects/high-Pressure-pumping-support-for-coil-tubing-operation-rivers-state` | `/projects/high-pressure-pumping-support-for-coil-tubing-operation-rivers-state` | Canonical URLs are lowercase (spec §4.2); internal links updated to the new URL | 301 | Pending Vercel preview (see below) |
| `/projects/nitrogen-lift-operation-cawc-well-45T-rivers-state-swamp` | `/projects/nitrogen-lift-operation-cawc-well-45t-rivers-state-swamp` | Canonical URLs are lowercase (spec §4.2); internal links updated to the new URL | 301 | Pending Vercel preview (see below) |

## Site-Wide Normalisation (vercel.json)

| Rule | Example | Status | Verification |
|---|---|---|---|
| `trailingSlash: false` | `/services/` → `/services` | 308 (Vercel's built-in permanent redirect; treated like 301 by search engines) | Local equivalent: single hop to 200. Vercel preview pending |
| `cleanUrls: true` | `/services.html` → `/services` | 308 | Local equivalent: single hop to 200. Vercel preview pending |
| Unknown paths | `/does-not-exist` | 404 with `404.html` | Local equivalent: 404. Vercel preview pending |

`http://` and apex `damseik.com` already redirect to `https://www.damseik.com`
at the Vercel domain level (308, verified on production 2026-10-23).

## Known Risk: Case-Insensitive Matching

The two redirects differ from their destination only by letter case. Vercel
compiles redirect sources as case-sensitive patterns
(`@vercel/routing-utils`, `pathToRegexp(..., { sensitive: true })`), but the
local test server (`serve`) matches case-insensitively and loops. **The Vercel
preview must confirm that each lowercase destination returns 200 rather than
redirecting to itself.** If it loops, replace the two redirects with
prerendered copies at the legacy paths whose canonical tag points to the
lowercase URL (static file lookup is exact-match), and update this document.

## Not Redirected

- No URLs are retired in this pathway; all 21 existing URLs remain live.
- Older URLs from previous site versions are unknown (no Search Console or
  analytics access). Review Search Console "Not found (404)" reports after
  launch and add redirects here.
- Stub service pages are kept live with `noindex` rather than redirected
  (user decision, 2026-10-23).

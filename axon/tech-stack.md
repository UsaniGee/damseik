# Tech Stack

## Current (as audited 2026-10-23)

| Layer | Technology |
|---|---|
| Language | JavaScript (ES modules, JSX) — no TypeScript |
| Build | Vite 6 (`@vitejs/plugin-react`), custom `manualChunks` in `vite.config.js` |
| UI | React 18.3, React Router 7 (`createBrowserRouter`, lazy routes) |
| Styling | Chakra UI 2 + Emotion, Tailwind CSS 4 (`@tailwindcss/vite`) |
| Motion / carousels | framer-motion 11, Swiper 11 |
| Forms | react-hook-form 7 (no backend wired — submission is simulated) |
| Images | Cloudinary (`@cloudinary/react`, `@cloudinary/url-gen`) |
| Icons | react-icons, `@chakra-ui/icons` |
| SEO | Client-side `useEffect` meta tags (`src/components/SEO`), `StructuredData` component, build-time `scripts/generate-sitemap.js` |
| Analytics | GA4 via gtag, injected client-side (`VITE_GA_MEASUREMENT_ID`) |
| PWA | `public/sw.js` service worker caching HTML routes |
| Hosting | Vercel (SPA rewrite of all paths to `/index.html`) |
| Lint | ESLint 9 (react-hooks, react-refresh) |
| Runtime | Node 22 |

## Known Issues (from audit)

- Pure CSR: crawlers/social scrapers receive an empty `<div id="root">` and
  generic `index.html` metadata (still branded "Damsiek Limited").
- Contact form shows success without sending anything.
- Single oversized `vendor-react` chunk bundles React, Chakra, Emotion,
  framer-motion, Cloudinary, router, icons; `optimizeDeps.force: true`.
- Two styling systems (Chakra + Tailwind) and render-blocking Google Fonts CSS.
- Service worker caches HTML routes — risk of stale content after deploys.
- Catch-all rewrite means unknown URLs return HTTP 200 (soft 404).

## Approved Direction (2026-10-23)

1. **Rendering:** Keep Vite + React. Add **build-time prerendering (static
   generation)** of all public routes so every page ships real HTML, title,
   meta description, canonical, OG tags, and JSON-LD. Hydrate on the client.
   No Next.js migration.
2. **Content:** Structured content modules (JS/JSON data files in `src/content/`)
   for services, projects, equipment, locations, certificates, and contact/RFQ
   config, with slugs, publication status, metadata, and relationships. No new
   CMS or database without approval.
3. **Forms:** **Vercel Serverless Function** (`api/enquiry.js`) with server-side
   validation, honeypot + rate limiting, enquiry-type routing (general vs.
   tender/RFQ), and transactional email via a provider (e.g. Resend). Secrets
   in Vercel environment variables only.
4. **Services:** Keep all 10 existing service URLs (rebuilt on the shared
   service template); feature Pipeline Maintenance, Marine, Completion Pumping,
   Coiled Tubing. New service pages only once content is approved.
5. **Testing:** Vitest + React Testing Library (+ jsdom) for logic and
   components; axe-core for automated accessibility checks; Lighthouse for
   performance.
6. **Redirects / status codes:** Managed in `vercel.json` (`redirects`, and
   per-route prerendered files so unknown paths return a real 404).

Any deviation must be recorded here, with a dated note, before implementation.

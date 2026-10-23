# Product Guidelines

## Brand

- **Canonical public brand:** **Dam Seik**. Use it in the logo/header, titles,
  headings, navigation, footer, metadata, OG tags, alt text, PDFs, structured
  data, and confirmation messages.
- The legacy name **"Damsiek Limited"** must not be used as the primary brand.
  Do not alter legal company names inside certificates, contracts, or other
  legally significant documents.
- **Brand color:** `#D10205` (existing theme color). **Typography:** Poppins
  (headings), Inter (body) — limit loaded weights to those actually used.
- Use only approved logo, photography, and certification assets. If an asset is
  missing, use a clearly identified temporary placeholder and log it as a
  pre-launch dependency. Never present stock or generated imagery as authentic
  company/project photography.

## Voice & Tone

- **Professional, precise, technical.** Write for procurement officers and
  engineers evaluating a tender, not for consumers.
- Lead with capability and evidence; state scope, environments, and limits
  plainly.
- No superlatives ("best", "largest", "most experienced") without proof.
- No keyword stuffing; write naturally for the reader first.
- Use consistent units; show metric and imperial together where both are
  verified (e.g. `10,000 psi / 698 bar`).

## Content Accuracy Rules

Never publish unverified: years of experience, project/client counts, client
identities, project outcomes, equipment specifications, certifications, safety
statistics, addresses/phone/email, service availability or coverage, or response
time commitments. Never ship placeholder text like "XX years" to production.
Respect client confidentiality — use approved generic descriptions where needed.

## UX Principles

1. **Find evidence fast.** Every service, project, and equipment item is one or
   two clicks from the header and cross-linked to related records.
2. **One consistent conversion action:** **Request a Quote**, carrying context
   (service/equipment) into the enquiry form where practical.
3. **Mobile first.** Mobile sticky action bar (Call + Request a Quote) that
   respects safe-area insets and never covers content or form fields.
4. **Honest states.** Clear empty states for filters; real success/failure
   states for forms and downloads; no fake loading or counters implying false
   precision.
5. **Performance is a feature.** No video backgrounds or heavy animation that
   degrades mobile LCP/INP; respect `prefers-reduced-motion`.

## Accessibility (WCAG 2.1 AA)

- Contrast ≥ 4.5:1 normal text, ≥ 3:1 large text and UI components.
- Full keyboard operation, visible focus, logical heading hierarchy,
  semantic landmarks, skip link.
- Labelled form fields with announced, human-readable errors.
- Informative images get meaningful alt text; decorative images use `alt=""`.
- Touch targets ≥ 44 × 44 CSS px where practical.
- Never rely on color alone.

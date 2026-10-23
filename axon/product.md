# Product Definition

## Product

**Dam Seik — Corporate Website** (`https://damseikservices.com`)

A fast, accessible, SEO-ready B2B corporate website presenting Dam Seik as a
credible, technically capable pipeline and marine services company in Nigeria's
oil and gas sector. The site exists to help procurement and technical tender
evaluators find service information, equipment specifications, project evidence,
and compliance documents, and to convert them into qualified enquiries and formal
tender/RFQ requests.

Full requirements: [`../spec.md`](../spec.md) (source of truth for the redesign).

## Business Objectives

1. Present Dam Seik as a credible pipeline and marine services company.
2. Let procurement and tender evaluators quickly find services, equipment specs,
   project evidence, and HSE/compliance documents.
3. Generate qualified service enquiries and formal procurement (RFQ) requests.
4. Fix the existing slow-loading experience and meet Core Web Vitals targets.
5. Improve organic visibility for real services, equipment, and locations.
6. Provide a responsive, WCAG 2.1 AA experience on mobile, tablet, and desktop.
7. Preserve existing search equity, useful content, and working functionality.

## Target Audience

- B2B procurement and purchasing teams
- Technical tender evaluation teams
- Oil and gas operators; pipeline and marine service buyers
- EPC contractors, industry partners, subcontractors
- HSE and quality assurance personnel

## Core Surfaces

| Route | Purpose |
|---|---|
| `/` | Hero, featured services, verified proof metrics, featured projects, equipment & HSE teasers, quote CTA |
| `/services`, `/services/[slug]` | Filterable service index (Onshore / Offshore / Marine) and reusable service template |
| `/projects`, `/projects/[slug]` | Filterable case studies (service category, year) with confidentiality controls |
| `/equipment`, `/equipment/[slug]` | Equipment library with flexible technical specs and PDF spec sheets |
| `/hse` | HSE policy, certifications, safety record methodology, four-step quality process |
| `/contact` | General enquiry vs. formal tender/RFQ routing with honest submission states |

Existing pages (`/about`, `/careers`, `/media`) and all 10 existing service URLs
are retained unless an SEO evaluation justifies a 301 redirect.

## Scope

**In scope:** informational corporate site, lead generation, performance, technical
and content SEO, analytics/conversion tracking, accessibility, QA.

**Out of scope:** e-commerce, carts, checkout, payments, online sales,
subscriptions, and anything not approved in `spec.md`.

## Non-Negotiables

- **No fabricated content:** no invented statistics, clients, specs,
  certifications, safety records, contact details, or SLAs. Missing data stays
  unpublished until verified.
- **No false success:** forms confirm only after the backend accepts the enquiry.
- **Measure before optimizing; verify before declaring done.**

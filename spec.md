# SPEC.md — Dam Seik Website Redesign, Performance Optimization & SEO

## 1. Project Overview

### 1.1 Project Type

Brownfield website redesign, performance optimization, technical SEO improvement, and B2B lead-generation optimization.

### 1.2 Business Objectives

The redesigned website must:

1. Present Dam Seik as a credible, technically capable pipeline and marine services company.
2. Help B2B procurement teams and technical tender evaluators quickly find service information, equipment specifications, project evidence, and compliance documents.
3. Generate qualified service enquiries and formal procurement requests.
4. Reduce existing website loading times and improve Core Web Vitals.
5. Improve organic search visibility for relevant services, equipment, locations, and industry-specific keywords.
6. Provide a responsive, accessible, professional experience across mobile, tablet, and desktop devices.
7. Preserve existing search equity, useful content, and working functionality during the redesign.

### 1.3 Target Audience

- B2B procurement and purchasing teams.
- Technical tender evaluation teams.
- Oil and gas operators.
- Pipeline and marine service buyers.
- Engineering, procurement, and construction (EPC) contractors.
- Industry partners and subcontractors.
- HSE and quality assurance personnel.

### 1.4 Scope Boundaries

**Included:**

- Public corporate website.
- Service and technical capability pages.
- Project and case study pages.
- Equipment library and specification downloads.
- HSE and quality documentation.
- Contact, enquiry, and tender/RFQ capture.
- Performance optimization.
- Technical, on-page, local, and content SEO.
- Analytics and conversion tracking.
- Accessibility, responsive design, and quality assurance.

**Excluded:**

- E-commerce functionality.
- Shopping carts, checkout, and payment processing.
- Online equipment sales or paid subscriptions.
- Any other functionality not explicitly approved in this specification.

### 1.5 Implementation Approach

This is a brownfield project. Before making changes, inspect the existing website, source code, framework, routes, content, integrations, hosting configuration, and available analytics.

The implementation must:

- Reuse suitable existing components and infrastructure.
- Avoid unnecessary framework migrations or wholesale rewrites.
- Preserve functional features unless a change is required by this specification.
- Identify and resolve existing performance bottlenecks.
- Preserve valuable existing URLs and organic search visibility.
- Document assumptions, missing assets, unsupported claims, and external dependencies.

Do not claim a requirement has been implemented or verified unless the relevant functionality has been tested.

---

## 2. Brand Identity and Content Governance

### 2.1 Canonical Brand Name

Use **Dam Seik** consistently as the primary public-facing brand.

Apply the naming convention to:

- Website logo and header.
- Page titles and headings.
- Navigation and footer.
- Metadata and social sharing metadata.
- Image alternative text where appropriate.
- PDF presentation and document branding.
- Structured data and organization information.
- Contact and enquiry confirmation messages.

The legacy name "Damsiek Limited" must not be used as the primary public-facing brand.

However, do not alter legal company names in official certificates, contracts, or other legally significant documents. Preserve historical references where required for accuracy.

### 2.2 Brand Assets

Audit existing brand assets before creating replacements.

Use approved assets for:

- Logo.
- Brand colors.
- Typography.
- Company photography.
- Project photography.
- Equipment photography.
- HSE and certification documents.

Do not fabricate an official logo or represent unapproved imagery as authentic company photography.

If approved assets are unavailable, use clearly identified temporary placeholders and document what is required before launch.

### 2.3 Content Accuracy

The website must not publish fabricated:

- Years of experience.
- Project or client counts.
- Client identities.
- Project outcomes.
- Technical equipment specifications.
- Certifications.
- Safety statistics.
- Office addresses or contact details.
- Service availability or geographic coverage.

Use approved company records as the source of truth.

If information is missing, display an internal placeholder or leave the relevant field unpublished until verified. Do not publish placeholder text such as "XX years" or invented figures on the live website.

---

## 3. Global Technical and Non-Functional Requirements

### 3.1 Website Performance

The existing website takes too long to load. Performance optimization is a core project requirement, not an optional enhancement.

#### 3.1.1 Initial Performance Audit

Before implementing the redesign:

1. Measure the existing website's performance on mobile and desktop.
2. Identify the routes with the slowest loading times.
3. Audit JavaScript bundle sizes and unnecessary dependencies.
4. Identify render-blocking CSS and JavaScript.
5. Audit image sizes, formats, dimensions, and loading behavior.
6. Inspect fonts, third-party scripts, analytics, embeds, and external requests.
7. Review server response times, caching, compression, and asset delivery.
8. Investigate layout shifts, hydration delays, and unnecessary client-side rendering where applicable.
9. Record baseline Lighthouse scores and Core Web Vitals.
10. Produce a prioritized list of bottlenecks and recommended fixes.

Use Chrome DevTools, Lighthouse, PageSpeed Insights, and available real-user monitoring data as appropriate.

Do not assume the cause of the existing slowness before measuring it.

#### 3.1.2 Performance Targets

| Metric | Acceptance Target |
|---|---|
| Largest Contentful Paint (LCP) | ≤ 2.5 seconds |
| Interaction to Next Paint (INP) | ≤ 200 milliseconds |
| Cumulative Layout Shift (CLS) | ≤ 0.1 |
| Lighthouse Performance | Target ≥ 90 on representative production pages |
| Mobile usability | No horizontal overflow or unusable controls |
| Initial JavaScript | Minimized; no unnecessary large client bundles |
| Image delivery | Responsive, compressed, appropriately sized |
| Caching | Configured appropriately for static and cacheable assets |

Core Web Vitals targets should be assessed at the 75th percentile of real-user visits where sufficient field data is available. Lab testing is required during development and must not be presented as equivalent to real-user field data.

The Lighthouse score is a supporting target, not a substitute for Core Web Vitals.

#### 3.1.3 Required Optimization Techniques

Apply the following where appropriate to the existing stack:

- Use AVIF or WebP for raster images where supported and beneficial.
- Provide explicit image width and height or aspect ratios.
- Generate responsive image variants and use `srcset` and `sizes` where applicable.
- Serve appropriately sized images rather than full-resolution originals.
- Prioritize the actual LCP resource and avoid lazy-loading the above-the-fold hero image.
- Lazy-load below-the-fold images and nonessential embeds.
- Use modern image optimization features provided by the existing framework where suitable.
- Minimize unused JavaScript and CSS.
- Remove unnecessary packages, scripts, polyfills, and duplicate dependencies.
- Defer or delay nonessential third-party scripts where safe.
- Use code splitting and route-level loading strategies.
- Prefer server rendering or static generation for indexable content where supported by the existing framework.
- Avoid unnecessary client-side rendering and hydration.
- Use appropriate font formats, font-display settings, and limited font weights.
- Preload only critical resources where justified by measurement.
- Configure Brotli or Gzip compression where supported.
- Apply sensible cache-control policies and long-lived caching for versioned static assets.
- Reduce unnecessary redirects, API calls, and sequential network dependencies.
- Prevent layout shifts by reserving space for images, embeds, and dynamic content.
- Keep error logging and analytics from blocking the primary user experience.

Do not introduce caching or rendering behavior that causes stale business information, broken forms, or incorrect metadata.

#### 3.1.4 Performance Verification

After implementation:

- Re-test the homepage, services index, at least one service detail page, projects index, project detail page, equipment index, equipment detail page, HSE page, and contact page.
- Run mobile and desktop performance tests.
- Compare results with the baseline.
- Record any remaining bottlenecks.
- Verify that optimization has not broken forms, downloads, navigation, tracking, or SEO rendering.

The final handoff must include baseline results, post-implementation results, test conditions, and outstanding limitations.

### 3.2 Responsive Design and Mobile UX

The website must work across mobile, tablet, laptop, and desktop viewports.

Requirements:

- No unintended horizontal scrolling.
- Responsive layouts and image assets.
- Legible text without forced zooming.
- Navigation suitable for touch interaction.
- Forms that are usable on small screens.
- Tables that remain readable through responsive layouts or controlled horizontal scrolling.
- Touch targets of at least 44 × 44 CSS pixels for interactive controls, where practical.
- Adequate spacing between adjacent controls.
- A mobile sticky action area containing **Call** and **Request a Quote** actions.

The sticky action area must:

- Appear on mobile viewports only, unless a desktop equivalent is explicitly justified.
- Avoid obscuring content, form fields, cookie notices, or system controls.
- Respect mobile safe-area insets.
- Use the verified company telephone number.
- Open the contact or RFQ form using a working destination.
- Maintain accessible focus behavior and sufficient contrast.

### 3.3 Accessibility and Compliance

Target WCAG 2.1 Level AA across the website.

Requirements include:

- Minimum 4.5:1 contrast for normal text.
- Minimum 3:1 contrast for large text.
- Minimum 3:1 contrast for relevant interface components and graphical objects.
- Keyboard-accessible navigation and forms.
- Visible focus indicators.
- Semantic HTML and appropriate heading hierarchy.
- Accessible form labels and error messages.
- Descriptive link text.
- Meaningful alternative text for informative images.
- Empty alternative text for purely decorative images.
- Accessible dialogs with focus management.
- Reduced-motion support where appropriate.
- No reliance on color alone to convey information.

Test representative pages with automated accessibility tools and manual keyboard checks. Automated testing alone is insufficient to establish WCAG conformance.

### 3.4 Browser and Device Compatibility

Support current stable versions of major browsers:

- Google Chrome.
- Mozilla Firefox.
- Microsoft Edge.
- Safari.

Test responsive layouts on representative mobile and desktop devices.

Do not introduce browser-specific functionality without a suitable fallback where required.

### 3.5 Security and Reliability

- Use HTTPS throughout the public website.
- Validate and sanitize all submitted form data on the server.
- Protect enquiry endpoints against spam and automated abuse.
- Use appropriate rate limiting and validation.
- Avoid exposing API keys, credentials, or sensitive server configuration.
- Keep dependencies reasonably up to date.
- Use secure handling for uploaded documents and downloadable files.
- Provide meaningful user-facing error states.
- Do not expose raw server exceptions to visitors.
- Avoid collecting unnecessary personal information.
- Configure appropriate privacy and consent behavior for analytics where legally required.

---

## 4. SEO Strategy and Architecture

SEO must be implemented as part of the website architecture and content system, not added only through page titles.

### 4.1 SEO Audit and Preservation

Before changing routes or metadata:

1. Inventory existing public URLs.
2. Crawl the existing website where possible.
3. Identify pages currently indexed by search engines.
4. Review existing titles, descriptions, headings, canonical URLs, and internal links.
5. Identify pages with backlinks, organic traffic, or existing search visibility where data is available.
6. Identify duplicate, thin, outdated, or competing content.
7. Record legacy service names and keyword variations.
8. Map every existing URL that will change to an appropriate destination.
9. Preserve valuable content and search intent when redesigning pages.
10. Establish a baseline for organic traffic and indexing where analytics and Search Console data are available.

Do not delete or redirect useful pages without evaluating their SEO value.

### 4.2 SEO-Friendly URL Architecture

Use descriptive, lowercase, hyphen-separated URLs.

Recommended routes:

```text
/
 /services
 /services/pipeline-maintenance
 /services/marine-services
 /services/completion-pumping
 /services/coiled-tubing
 /projects
 /projects/[project-slug]
 /equipment
 /equipment/[equipment-slug]
 /hse
 /contact
```

Additional routes may include:

```text
/locations/[location-slug]
/services/[service-slug]/[location-slug]
```

Location and service-location pages must only be created where Dam Seik has verified service relevance, useful location-specific information, and sufficient unique content.

Do not generate large numbers of near-identical location pages solely to target keywords.

Every published service, project, and equipment detail page must have a stable, descriptive URL.

### 4.3 Page Titles and Meta Descriptions

Every indexable page must have:

- A unique, descriptive HTML title.
- A unique meta description.
- A canonical URL.
- An appropriate indexability directive.
- A meaningful H1.
- A logical heading hierarchy.
- Relevant internal links.
- Appropriate social sharing metadata.

Titles and descriptions must accurately describe the page and reflect its intended search query.

Avoid keyword stuffing, duplicated metadata, generic titles, and unsupported promotional claims.

Example patterns:

**Homepage title**

`Dam Seik | Pipeline & Marine Services in Nigeria`

**Homepage description**

`Explore Dam Seik's pipeline maintenance, marine services, completion pumping, coiled tubing, and technical capabilities for industrial projects.`

**Service page title**

`Pipeline Maintenance Services in Nigeria | Dam Seik`

**Equipment page title**

`[Equipment Name] Specifications | Dam Seik`

These are templates. Final metadata must reflect approved service coverage and actual page content.

### 4.4 Technical SEO

Implement and verify:

- XML sitemap generation.
- `robots.txt` configuration.
- Canonical URL tags.
- Appropriate HTTP status codes.
- Correct 404 and 410 behavior where applicable.
- Permanent 301 redirects for retired or changed URLs.
- Internal linking between related services, projects, and equipment.
- Breadcrumb navigation where useful.
- Correct pagination and filtering behavior.
- Search-engine-readable content in the rendered HTML.
- Open Graph metadata.
- Appropriate social sharing images.
- HTTPS canonicalization.
- A consistent preferred hostname and trailing-slash policy.
- No accidental staging-domain references in production metadata.
- No accidental `noindex` directives on pages intended for search indexing.
- No important pages blocked by `robots.txt`.
- No broken internal links or redirect chains.

The sitemap must include canonical, indexable, production URLs only. It must exclude staging URLs, redirects, error pages, and pages intentionally excluded from indexing.

Where practical, include accurate modification dates for pages that have genuinely changed.

### 4.5 Structured Data

Implement structured data only where the content and entity information support it.

Potential schema types include:

- `Organization`.
- `WebSite`.
- `BreadcrumbList`.
- `Service`.
- `Product` only where it accurately describes the equipment information and complies with applicable structured-data guidelines.
- `Article` for genuine editorial articles or case studies where appropriate.

Do not use fabricated reviews, ratings, prices, product availability, or unsupported business details.

Use valid JSON-LD, verify it with appropriate validation tools, and ensure it matches visible page content.

Structured data does not guarantee enhanced search results.

### 4.6 Keyword and Content Strategy

Develop a keyword map aligned with actual company capabilities and buyer intent.

Potential keyword themes include:

- Pipeline maintenance services Nigeria.
- Marine services Nigeria.
- Offshore pipeline support.
- Completion pumping services.
- Coiled tubing services.
- Triplex pump technical specifications.
- Oil and gas equipment capabilities.
- Pipeline and marine project experience.
- HSE policies and technical compliance documentation.

These are candidate themes, not claims that Dam Seik provides every related service in every location. Confirm actual service availability before publishing.

Each primary page should have a defined search intent and avoid competing unnecessarily with another page on the same topic.

### 4.7 SEO Content Quality

Service pages, case studies, and equipment pages must provide substantive, accurate information.

Avoid:

- Repeated keyword phrases written unnaturally.
- Duplicate service descriptions across many URLs.
- Automatically generated pages with little original value.
- Hidden keyword text.
- Fake client testimonials.
- Unsupported claims about being the best, largest, or most experienced provider.

Content should answer the questions procurement and technical evaluation teams actually need answered.

### 4.8 301 Redirect Plan

Create a redirect mapping before retiring or changing any existing URLs.

For each changed URL, document:

- Old URL.
- New destination URL.
- Reason for the change.
- Expected HTTP status.
- Verification result.

Rules:

- Use 301 redirects for permanently moved content.
- Redirect to the closest relevant replacement page.
- Do not redirect all removed URLs to the homepage.
- Avoid redirect chains and loops.
- Preserve query parameters where necessary.
- Update internal links to point directly to the new canonical destination.
- Retain redirects for as long as they remain useful.

### 4.9 SEO Verification

Before launch:

- Validate the XML sitemap.
- Validate `robots.txt`.
- Check canonical URLs.
- Check titles and descriptions for duplication and omissions.
- Crawl the website for broken links and unexpected status codes.
- Validate structured data.
- Confirm important content is crawlable.
- Verify redirects.
- Inspect representative URLs in Google Search Console when access is available.
- Submit the sitemap to Google Search Console after launch where access is available.

SEO results such as rankings and organic traffic cannot be guaranteed by implementation alone. Establish a baseline and monitor changes after launch.

---

## 5. Global Layout and Navigation

### 5.1 Header

The global header must contain:

- Official Dam Seik logo.
- Services.
- Projects.
- Equipment.
- HSE.
- Contact.
- Primary CTA: **Request a Quote**.

Requirements:

- Responsive navigation.
- Clear active-page indication where appropriate.
- Accessible mobile navigation.
- Descriptive navigation labels.
- No dead links.
- Consistent layout across public pages.

The logo must link to the homepage and have an accessible name.

### 5.2 Footer

Include:

- Official company name and approved logo.
- Short company description.
- Links to key services.
- Links to projects and equipment.
- HSE and quality links.
- Verified telephone number and email address.
- Verified office address where approved for publication.
- Privacy policy and relevant legal notices.
- Copyright information.
- Social links only where official company accounts exist.

The footer must not contain invented contact details or unapproved social profiles.

### 5.3 Persistent Conversion Actions

Use a consistent Request a Quote action throughout the website.

The action must:

- Navigate to the correct RFQ experience.
- Preserve relevant context, such as the service or equipment being viewed, when practical.
- Work with keyboard and touch input.
- Be tracked through the analytics system.

---

## 6. Homepage (`/`)

### 6.1 Hero Section

Required elements:

- Approved high-quality image featuring an offshore vessel, pipeline crew, or relevant industrial operation.
- Main value proposition: **Reliable Pipeline & Marine Services**.
- Concise supporting copy describing verified company capabilities.
- Primary CTA: **Request a Quote**.
- Optional secondary CTA: Explore Our Services.

Requirements:

- Use a responsive, optimized image.
- Maintain sufficient text contrast over the background.
- Reserve image dimensions to prevent layout shifts.
- Prioritize the hero image if it is the LCP element.
- Avoid unnecessary video backgrounds, heavy animation, or oversized assets that impair mobile performance.

### 6.2 Service Grid

Display the following four services:

1. Pipeline Maintenance.
2. Marine Services.
3. Completion Pumping.
4. Coiled Tubing.

Each card must contain:

- Relevant image.
- Service title.
- Concise, approved service description.
- Link to the corresponding service detail page.

Only publish services confirmed by the company.

### 6.3 Proof and Social Metrics

Display verified company information for:

- Years of experience.
- Completed projects.
- Clients served.
- HSE or safety record.

Use approved values and clearly define what each metric measures.

Do not publish placeholder figures, animated counters that imply false precision, or unverified safety claims.

If verified data is unavailable, omit the metric until approved.

### 6.4 Featured Projects

Show selected approved projects with:

- Project title.
- Relevant image.
- Service category.
- Location where disclosure is permitted.
- Concise description.
- Link to the complete case study.

Confidential client identities must remain protected.

### 6.5 Equipment Capability Teaser

Display selected equipment or technical capability cards with:

- Equipment name.
- Representative image.
- Short technical summary.
- Link to the equipment detail page.

Only show verified technical information.

### 6.6 HSE and Quality Teaser

Include a concise summary of the company's approved HSE and quality approach, with a link to the HSE page.

### 6.7 Final Conversion Section

Provide a clear Request a Quote CTA and a short statement explaining how procurement teams can contact the company.

---

## 7. Services Index (`/services`)

### 7.1 Service Discovery

Provide service cards for all approved service offerings.

Each card must include:

- Thumbnail image.
- Service title.
- One-line outcome or capability statement.
- Relevant sector tags.
- `Learn more` link to the service detail page.

### 7.2 Sector Filtering

Provide filters for:

- Onshore.
- Offshore.
- Marine.

Rules:

- A service may belong to multiple sectors if the company confirms that applicability.
- Filters must update the displayed results correctly.
- An empty state must appear if no services match.
- Filtering must remain keyboard accessible.
- Filtered views must not create unnecessary duplicate indexable URLs.

If sector metadata is missing, do not assign sectors based on guesswork.

### 7.3 Persistent Quote CTA

Provide a visible Request a Quote action without obstructing content or navigation.

---

## 8. Individual Service Pages (`/services/[service-slug]`)

Create a reusable template for each service.

### 8.1 Hero and Summary

Include:

- Service title.
- Concise summary.
- Relevant applications and sectors.
- Supporting image.
- Request a Quote CTA.

### 8.2 Scope of Work

Describe verified capabilities, service boundaries, applicable operating environments, and relevant technical considerations.

Do not invent equipment capabilities, operating limits, or certifications.

### 8.3 Service Execution Process

Provide a step-by-step overview of the actual service delivery process.

Each step should explain the purpose and relevant activity.

If the operational process has not been supplied or approved, request clarification rather than inventing a company-specific procedure.

### 8.4 Equipment Used

Show relevant equipment cards linked to the equipment library.

Display only equipment confirmed as applicable to the service.

### 8.5 Related Projects

Show approved case studies related to the service.

Each project card must link to its detail page.

### 8.6 HSE and Quality

Include a concise summary of relevant HSE and quality considerations, linked to the main HSE page.

Avoid claiming compliance with a standard or certification unless verified.

### 8.7 Context-Aware Enquiry

Include an enquiry form with the relevant service preselected.

The visitor must be able to change the selection.

Successful submission must be confirmed only after the backend has accepted the enquiry.

### 8.8 Service SEO

Each service page must have unique metadata, an appropriate canonical URL, a meaningful H1, relevant internal links, and substantive service-specific content.

---

## 9. Projects and Case Studies (`/projects`)

### 9.1 Projects Index

Display approved case studies in a responsive grid or list.

Each project card should include:

- Project title.
- Service category.
- Year, where available.
- Location, where disclosure is permitted.
- Representative image.
- Short description.
- Link to the project detail page.

### 9.2 Project Filtering

Provide filters for:

- Service category.
- Year.

Requirements:

- Filters must work correctly in combination.
- Provide a clear reset action.
- Provide an empty state.
- Use consistent date and category metadata.
- Avoid unnecessary duplicate crawlable pages for filter combinations.

### 9.3 Individual Project Pages (`/projects/[project-slug]`)

Each case study must support the following fields:

1. Project title.
2. Client type.
3. Client name, only if disclosure is approved.
4. Location and relevant visual assets.
5. Year or project period.
6. Service category.
7. The Challenge.
8. The Solution / Work Done.
9. The Result / Value Delivered.
10. Linked equipment.
11. Related services.
12. Related projects, where relevant.

### 9.4 Confidentiality

Where client confidentiality applies:

- Use an approved generic client description.
- Remove identifying information from text and images where required.
- Do not imply endorsement by an unnamed client.
- Publish only approved results and project details.

### 9.5 Project SEO

Every public case study must have a unique URL, page title, description, canonical URL, descriptive headings, and appropriate image alternative text.

Only publish indexable case studies that provide meaningful information.

---

## 10. Equipment and Technical Capability Library (`/equipment`)

### 10.1 Equipment Index

Provide a searchable or filterable equipment library.

Each equipment card should include:

- Equipment image.
- Equipment name.
- Reference ID, where available.
- Short description.
- Relevant service category.
- Link to the detailed equipment page.

### 10.2 Equipment Filtering

Allow filtering by service category.

Filters must work correctly, remain accessible, and display a clear empty state.

### 10.3 Equipment Detail Pages (`/equipment/[equipment-slug]`)

Each equipment page must support:

- Equipment name.
- Reference ID.
- Photo gallery or primary image.
- Description.
- Relevant service categories.
- Technical specifications table.
- Downloadable specification sheet, where available.
- Related services.
- Related projects, where applicable.
- Request a Quote CTA.

### 10.4 Technical Specifications

The data model must support the following fields where applicable:

| Field | Example Value |
|---|---|
| Equipment name | Skid Mounted Triplex Pump HT400 |
| Reference ID | DSSL/001 |
| Maximum flow | 7 bpm |
| Maximum pressure | 10,000 psi / 698 bar |
| Engine | Detroit Diesel V8-71 |
| Transmission | Allison CLT 750 |
| Dimensions (L × W × H) | 6.60 × 1.30 × 2.50 m |
| Weight | 7.80 tons |

**Important:** These are specification examples supplied for the redesign brief. They must be verified against approved equipment records before publication.

The content model must support optional fields, additional specifications, units, and equipment-specific differences. Do not force every equipment item into an identical fixed set of technical fields.

Display metric and imperial units consistently where both are available and verified.

### 10.5 Specification Downloads

Allow direct downloads of approved PDF specification sheets.

Requirements:

- Clear download action.
- Descriptive filenames.
- Correct file type and content.
- Working file URLs.
- Appropriate document metadata where practical.
- No fabricated technical documents.

Track successful download events where technically feasible.

### 10.6 Equipment SEO

Each equipment item must have a unique detail page, descriptive metadata, accurate specifications, and appropriate internal links.

Do not expose internal or unpublished technical data.

---

## 11. HSE and Quality (`/hse`)

### 11.1 HSE Policy

Include:

- Approved HSE policy statement.
- Relevant safety principles and commitments.
- Downloadable HSE policy PDF.
- Policy version or effective date where available.

Do not write an unapproved policy and present it as the company's official policy.

### 11.2 Certifications and Compliance

Display approved certifications and industry credentials.

Each certificate entry should support:

- Certification or document title.
- Issuing organization.
- Certificate identifier, where approved.
- Validity or expiry information, where applicable.
- Logo or certificate image, where permitted.
- Downloadable PDF.

Expired or superseded certificates must not be represented as current.

Use official logos and certification marks only where authorized.

### 11.3 Safety Record and Incident Reporting

Include an approved safety record summary and a description of the formal incident reporting methodology.

Only publish safety metrics with documented definitions, reporting periods, and approval.

Do not invent incident rates or imply a zero-incident record without supporting evidence.

If an incident-reporting contact route is provided, define its destination and responsible recipient.

### 11.4 Four-Step Quality Process

Present the company's approved four-step quality assurance process as a clear visual sequence.

Each step must include a title and a short explanation.

The process must be supplied or approved by the company rather than invented during implementation.

### 11.5 HSE SEO and Downloads

Use descriptive metadata and accessible document links. Ensure downloadable PDFs are valid, readable, and branded appropriately.

---

## 12. Contact and Procurement Enquiries (`/contact`)

### 12.1 Standard Contact Form

Required fields:

- Name.
- Company Name.
- Service Needed — dropdown.
- Message.

Additional fields may include business email and telephone number where approved and operationally necessary.

Requirements:

- Clear labels.
- Appropriate required-field validation.
- Server-side validation.
- Human-readable error messages.
- Spam protection.
- Accessible success and failure states.

Do not show a success message before the enquiry has actually been accepted by the backend.

### 12.2 Tender / RFQ Routing

Provide an explicit option for formal tender or procurement requests.

Users must be able to distinguish between:

- General enquiry.
- Formal tender / Request for Quotation (RFQ).

The selected route must determine the appropriate backend handling and notification destination.

If separate routing is unavailable, the system must not falsely claim that a tender request has been sent to a dedicated procurement team.

### 12.3 Additional Procurement Fields

If required by the actual procurement workflow, support optional fields such as:

- Tender reference.
- Project reference.
- Required service.
- Supporting document attachments.

Do not make additional fields mandatory without a documented business need.

Any attachment feature must enforce appropriate file-type and size restrictions, validate uploads on the server, and handle files securely.

### 12.4 Contact Details

Display verified company details:

- Telephone number.
- Business email.
- Physical office address, if approved for public display.

Phone links must use a valid `tel:` destination. Email links must use a valid `mailto:` destination.

### 12.5 Submission Confirmation

After successful submission, display a confirmation message or accessible modal containing:

- Confirmation that the enquiry was received.
- An enquiry reference number, if the backend generates one.
- A response-time commitment, only if approved by the company.
- Appropriate next steps.

Do not invent an SLA or response-time guarantee.

### 12.6 Form Reliability

Verify:

- Successful submissions reach the correct destination.
- Invalid submissions return useful errors.
- Failed submissions do not display false success.
- Duplicate submissions are handled appropriately.
- User-entered data is preserved where safe after recoverable failures.
- Confirmation behavior works on mobile and desktop.

---

## 13. Analytics and Conversion Tracking

### 13.1 Required Events

Track the following events:

| Event | Trigger |
|---|---|
| `quote_button_click` | Visitor activates a Request a Quote CTA |
| `form_submit_enquiry` | General enquiry is successfully accepted |
| `form_submit_tender` | Tender/RFQ is successfully accepted |
| `spec_sheet_download` | A specification sheet download is successfully initiated |
| `certificate_download` | A certificate or HSE document download is successfully initiated |

For form events, distinguish a submission attempt from a successful submission. Use the required event names for successful acceptance and, if useful, separate names for failed attempts.

Do not record sensitive form content, personal information, or confidential tender details in analytics event parameters.

### 13.2 Event Parameters

Where useful and privacy-compliant, include:

- Page path.
- Service slug.
- Equipment slug.
- Project slug.
- CTA placement.
- Enquiry type.
- Document type.
- Document identifier.

Avoid collecting full URLs containing sensitive query parameters.

### 13.3 Conversion Funnel

Implement tracking for:

`Landing Visit → Service View → Quote CTA Click → Enquiry Successfully Sent`

Additional funnels may cover equipment discovery and specification downloads.

Ensure events fire once per intended action and are not duplicated by rerenders, route transitions, or repeated listeners.

### 13.4 Analytics Configuration

Use the company's approved analytics platform and existing account where available.

Requirements:

- Preserve existing valid analytics integrations.
- Avoid duplicate tracking installations.
- Respect applicable privacy and consent requirements.
- Document the event names and trigger conditions.
- Verify events in the analytics debugging interface before launch.

Do not invent analytics credentials or assume access to an account that has not been provided.

### 13.5 A/B Testing

Plan experiments for:

- Hero headline.
- Primary CTA wording.
- CTA placement.

Run experiments only when sufficient traffic, appropriate analytics, and an approved testing approach are available.

Do not allow testing scripts to materially degrade performance, accessibility, indexing, or user privacy.

---

## 14. Content Management and Data Requirements

### 14.1 Reusable Content Models

Where the existing stack supports structured content, create reusable content models for:

- Services.
- Projects.
- Equipment.
- Locations.
- Certificates and HSE documents.
- Contact and RFQ configuration.

Each model must support unique slugs, publication status, relevant metadata, and appropriate relationships.

### 14.2 Relationships

Support relationships such as:

- Service ↔ Equipment.
- Service ↔ Projects.
- Project ↔ Equipment.
- Service ↔ Location.
- Equipment ↔ Related Projects.

Only display relationships supported by actual data.

### 14.3 Content Publication

Unpublished or draft content must not appear as public pages or in the XML sitemap.

Provide sensible missing-data behavior and avoid broken links when optional images, documents, or related records are unavailable.

Do not introduce a new CMS or database without assessing the existing architecture and obtaining approval where the change materially affects scope.

---

## 15. Brownfield Implementation and Deployment

### 15.1 Initial Audit

Before development, document:

- Existing framework and version.
- Routing architecture.
- Hosting and deployment setup.
- Existing components.
- Current content and assets.
- Current metadata and URL structure.
- Available analytics and search data.
- Existing form and email integrations.
- Current performance bottlenecks.
- Existing errors or broken functionality.

### 15.2 Implementation Order

Recommended sequence:

1. Audit the current website and establish baselines.
2. Confirm brand assets, company information, and content requirements.
3. Finalize the sitemap and page templates.
4. Fix major performance bottlenecks.
5. Implement the shared layout and navigation.
6. Implement the homepage and service pages.
7. Implement project and equipment libraries.
8. Implement HSE and contact/RFQ functionality.
9. Add structured metadata, redirects, and technical SEO.
10. Configure analytics.
11. Conduct accessibility, performance, functional, and SEO testing.
12. Deploy and verify the production website.

This sequence may be adjusted to address critical technical dependencies, but existing working functionality must not be broken unnecessarily.

### 15.3 Environment and Deployment Safety

- Keep development and production environments distinct.
- Do not overwrite production configuration without authorization.
- Use environment variables for secrets.
- Validate build output before deployment.
- Confirm redirects and environment-specific URLs.
- Verify that production forms, downloads, and analytics work after deployment.
- Provide a rollback plan for significant releases.

---

## 16. Testing and Acceptance Criteria

### 16.1 Functional Testing

- [ ] All primary navigation links work.
- [ ] All published service cards link to the correct pages.
- [ ] Project filters work individually and together.
- [ ] Equipment filters work correctly.
- [ ] Service, project, and equipment detail pages load successfully.
- [ ] All approved PDF downloads work.
- [ ] General enquiry form submits successfully.
- [ ] Tender/RFQ requests reach the correct destination.
- [ ] Form errors are clear and accessible.
- [ ] Confirmation messages reflect actual backend outcomes.
- [ ] Telephone and email links work.
- [ ] Mobile sticky CTAs work without obscuring content.
- [ ] Analytics events are triggered correctly.
- [ ] No unintended console errors or broken network requests remain.

### 16.2 Performance Testing

- [ ] Baseline performance results are documented.
- [ ] Post-optimization results are documented.
- [ ] Representative routes are tested on mobile and desktop.
- [ ] LCP is ≤ 2.5 seconds under the defined measurement conditions.
- [ ] INP is ≤ 200 milliseconds when sufficient field data is available.
- [ ] CLS is ≤ 0.1.
- [ ] Lighthouse Performance target of ≥ 90 is achieved on representative pages where practical.
- [ ] Images are compressed and appropriately sized.
- [ ] Critical resources are prioritized correctly.
- [ ] Unnecessary JavaScript and third-party requests are minimized.
- [ ] Caching and compression are verified.
- [ ] No significant regressions are introduced.

### 16.3 SEO Testing

- [ ] Existing URLs have been inventoried.
- [ ] Redirect mapping is documented.
- [ ] All intended redirects return the correct status and destination.
- [ ] Every indexable page has unique metadata.
- [ ] Canonical URLs are correct.
- [ ] XML sitemap is valid.
- [ ] `robots.txt` is correct.
- [ ] No unintended `noindex` directives remain.
- [ ] Important content is crawlable.
- [ ] Structured data validates where implemented.
- [ ] No significant broken internal links remain.
- [ ] No unintended staging URLs appear in production metadata.
- [ ] Search Console verification and sitemap submission are completed where access is available.

### 16.4 Accessibility Testing

- [ ] Text contrast meets WCAG 2.1 AA requirements.
- [ ] Interactive controls meet the 44 × 44 CSS pixel target where applicable.
- [ ] Navigation and forms work with a keyboard.
- [ ] Focus indicators are visible.
- [ ] Form errors are announced and understandable.
- [ ] Images have appropriate alternative text.
- [ ] Dialogs manage focus correctly.
- [ ] Responsive layouts do not obscure content.

### 16.5 Content and Brand Verification

- [ ] All public-facing brand references use Dam Seik consistently.
- [ ] Official logos and brand assets are used.
- [ ] No invented statistics or company claims are published.
- [ ] Technical specifications have been approved.
- [ ] Client confidentiality requirements are respected.
- [ ] HSE policies and certificates are authentic and current where applicable.
- [ ] Contact details are verified.
- [ ] No unresolved placeholder content appears on production pages.

### 16.6 Handoff Deliverables

The implementation handoff must include:

- Final sitemap and route inventory.
- Implemented page templates.
- Content and data model documentation.
- Redirect mapping.
- Performance audit and before/after results.
- SEO verification results.
- Accessibility testing results.
- Analytics event documentation.
- List of verified assets and downloadable documents.
- Known limitations and outstanding dependencies.
- Deployment and rollback notes.

---

## 17. Definition of Done

The redesign is complete when:

1. All approved public pages and templates are implemented.
2. Existing valuable URLs and search visibility have been considered and protected through appropriate migration practices.
3. Core Web Vitals and performance acceptance criteria have been tested and documented.
4. Technical SEO requirements are implemented and verified.
5. All enquiry and tender/RFQ routes work correctly.
6. Analytics events have been verified.
7. Accessibility and responsive behavior have been tested.
8. All published company claims, technical specifications, certificates, and contact details are approved.
9. The production build is stable and no known critical defects remain.
10. The handoff documentation is complete.

A requirement must not be marked complete solely because its code has been written. Completion requires verification appropriate to that requirement.

---

## 18. Final Instructions to the Implementing Developer or AI Agent

Treat this specification as the source of truth for the redesign.

Before making changes, inspect the existing codebase and identify the current framework, routes, integrations, content sources, and performance problems.

Prioritize the following:

1. **Fix the existing slow-loading experience.** Diagnose the causes, implement targeted improvements, and measure the results.
2. **Build a clear, professional B2B corporate website** that helps procurement and technical teams evaluate Dam Seik's actual capabilities.
3. **Implement complete technical and on-page SEO** without sacrificing performance, accessibility, or content accuracy.
4. **Preserve existing functionality and SEO equity** wherever possible.
5. **Keep the scope strictly informational and lead-generating.** Do not add e-commerce or payment processing.
6. **Use verified company data.** Never invent technical capabilities, client identities, project results, safety records, or certifications.
7. **Test before declaring completion.** Report what was implemented, what was tested, the measured results, and any outstanding issues.

If a requirement depends on unavailable company information, credentials, assets, documents, or infrastructure, document the dependency and continue with the portions that can be completed safely.

Do not silently invent missing requirements, make unnecessary architectural changes, or claim successful implementation without evidence.

The final result must be a fast, accessible, SEO-ready, mobile-friendly corporate website that converts relevant B2B visitors into qualified enquiries and procurement opportunities without introducing e-commerce functionality.

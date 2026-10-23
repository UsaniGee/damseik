import {
  BRAND_NAME,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  DEFAULT_OG_IMAGE,
  LOGO_URL,
  SITE_URL,
  canonicalUrl,
} from '../config/site'

/**
 * @typedef {{ tag: 'meta' | 'link', attrs: Record<string, string> }} HeadTag
 * @typedef {{ title: string, tags: HeadTag[], jsonLd: object[] }} Head
 */

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: BRAND_NAME,
  url: SITE_URL,
  logo: LOGO_URL,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    telephone: CONTACT_PHONE.replace(/\s+/g, '-'),
    email: CONTACT_EMAIL,
  },
}

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: BRAND_NAME,
  url: `${SITE_URL}/`,
}

/**
 * Build every head element for a manifest route. Used by the client `<SEO />`
 * component and by the prerender step, so both always agree.
 * @param {import('../routes/manifest').RouteEntry} route
 * @returns {Head}
 */
export function buildHead(route) {
  const isNotFound = route.path === '*'
  const url = isNotFound ? null : canonicalUrl(route.path)
  const meta = (key, name, content) => ({ tag: 'meta', attrs: { [key]: name, content } })

  const tags = [
    meta('name', 'description', route.description),
    meta('name', 'robots', route.indexable ? 'index, follow' : 'noindex, follow'),
    ...(url ? [{ tag: 'link', attrs: { rel: 'canonical', href: url } }] : []),
    meta('property', 'og:type', 'website'),
    meta('property', 'og:site_name', BRAND_NAME),
    meta('property', 'og:locale', 'en_GB'),
    meta('property', 'og:title', route.title),
    meta('property', 'og:description', route.description),
    ...(url ? [meta('property', 'og:url', url)] : []),
    meta('property', 'og:image', DEFAULT_OG_IMAGE),
    meta('name', 'twitter:card', 'summary_large_image'),
    meta('name', 'twitter:title', route.title),
    meta('name', 'twitter:description', route.description),
    meta('name', 'twitter:image', DEFAULT_OG_IMAGE),
  ]

  return {
    title: route.title,
    tags,
    jsonLd: route.path === '/' ? [organization, website] : [organization],
  }
}

const escapeHtml = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/**
 * Serialize a head to HTML for static prerendering.
 * @param {Head} head
 * @returns {string}
 */
export function headToHtml(head) {
  const tags = head.tags.map(({ tag, attrs }) => {
    const attrHtml = Object.entries(attrs)
      .map(([key, value]) => `${key}="${escapeHtml(value)}"`)
      .join(' ')
    return `<${tag} ${attrHtml}>`
  })
  const scripts = head.jsonLd.map(
    (data) =>
      `<script type="application/ld+json" data-seo>${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`,
  )
  return [`<title>${escapeHtml(head.title)}</title>`, ...tags, ...scripts].join('\n    ')
}

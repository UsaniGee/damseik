import { buildHead, headToHtml } from './seo'
import { findRoute, notFoundRoute } from '../routes/manifest'

const tag = (head, key, value) => head.tags.find((t) => t.attrs[key] === value)?.attrs

describe('buildHead', () => {
  it('builds title, description, canonical and robots for an indexable page', () => {
    const head = buildHead(findRoute('/services'))
    expect(head.title).toBe('Oil & Gas Services | Dam Seik')
    expect(tag(head, 'name', 'description').content).toMatch(/^Dam Seik oil and gas services/)
    expect(tag(head, 'rel', 'canonical').href).toBe('https://www.damseik.com/services')
    expect(tag(head, 'name', 'robots').content).toBe('index, follow')
  })

  it('marks non-indexable pages noindex but keeps links followable', () => {
    const head = buildHead(findRoute('/services/valve-services'))
    expect(tag(head, 'name', 'robots').content).toBe('noindex, follow')
  })

  it('omits the canonical link on the 404 page', () => {
    const head = buildHead(notFoundRoute)
    expect(tag(head, 'rel', 'canonical')).toBeUndefined()
    expect(tag(head, 'name', 'robots').content).toBe('noindex, follow')
  })

  it('canonicalizes legacy mixed-case paths', () => {
    const head = buildHead(findRoute('/projects/nitrogen-lift-operation-cawc-well-45T-rivers-state-swamp'))
    expect(tag(head, 'rel', 'canonical').href).toBe(
      'https://www.damseik.com/projects/nitrogen-lift-operation-cawc-well-45t-rivers-state-swamp',
    )
  })

  it('adds Open Graph and Twitter tags with the Dam Seik brand', () => {
    const head = buildHead(findRoute('/'))
    expect(tag(head, 'property', 'og:site_name').content).toBe('Dam Seik')
    expect(tag(head, 'property', 'og:title').content).toBe(head.title)
    expect(tag(head, 'property', 'og:url').content).toBe('https://www.damseik.com/')
    expect(tag(head, 'property', 'og:image').content).toMatch(/^https:\/\/res\.cloudinary\.com\//)
    expect(tag(head, 'property', 'og:locale').content).toBe('en_GB')
    expect(tag(head, 'name', 'twitter:card').content).toBe('summary_large_image')
    expect(tag(head, 'name', 'twitter:title').content).toBe(head.title)
  })

  it('does not emit a keywords meta tag', () => {
    expect(tag(buildHead(findRoute('/')), 'name', 'keywords')).toBeUndefined()
  })

  it('includes Organization JSON-LD everywhere and WebSite JSON-LD on the homepage only', () => {
    const home = buildHead(findRoute('/'))
    const about = buildHead(findRoute('/about'))
    expect(home.jsonLd.map((d) => d['@type'])).toEqual(['Organization', 'WebSite'])
    expect(about.jsonLd.map((d) => d['@type'])).toEqual(['Organization'])
    const org = home.jsonLd[0]
    expect(org.name).toBe('Dam Seik')
    expect(org.url).toBe('https://www.damseik.com')
    expect(org.contactPoint.email).toBe('info@damseik.com')
    expect(org).not.toHaveProperty('sameAs')
  })
})

describe('headToHtml', () => {
  it('serializes the head with escaped attribute values', () => {
    const html = headToHtml(buildHead(findRoute('/services')))
    expect(html).toContain('<title>Oil &amp; Gas Services | Dam Seik</title>')
    expect(html).toContain('<link rel="canonical" href="https://www.damseik.com/services">')
    expect(html).toContain('<meta name="robots" content="index, follow">')
    expect(html).toContain('<script type="application/ld+json" data-seo>')
  })

  it('escapes closing script tags inside JSON-LD', () => {
    const html = headToHtml({ title: 't', tags: [], jsonLd: [{ x: '</script><b>' }] })
    expect(html).not.toContain('</script><b>')
    expect(html).toContain('\\u003c/script>')
  })
})

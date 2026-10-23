import { BRAND_NAME, CONTACT_EMAIL, DEFAULT_OG_IMAGE, SITE_URL, canonicalUrl } from './site'

describe('site config', () => {
  it('defaults to the production origin without a trailing slash', () => {
    expect(SITE_URL).toBe('https://www.damseik.com')
  })

  it('uses Dam Seik as the canonical brand', () => {
    expect(BRAND_NAME).toBe('Dam Seik')
  })

  it('publishes the verified contact email', () => {
    expect(CONTACT_EMAIL).toBe('info@damseik.com')
  })

  it('resolves the default social image to an absolute URL', () => {
    expect(DEFAULT_OG_IMAGE).toMatch(/^https:\/\//)
  })
})

describe('canonicalUrl', () => {
  it('returns the origin with a slash for the homepage', () => {
    expect(canonicalUrl('/')).toBe('https://www.damseik.com/')
    expect(canonicalUrl('')).toBe('https://www.damseik.com/')
  })

  it('strips trailing slashes from other paths', () => {
    expect(canonicalUrl('/services/')).toBe('https://www.damseik.com/services')
    expect(canonicalUrl('/services//')).toBe('https://www.damseik.com/services')
  })

  it('adds a leading slash when missing', () => {
    expect(canonicalUrl('contact')).toBe('https://www.damseik.com/contact')
  })

  it('drops query strings and fragments', () => {
    expect(canonicalUrl('/projects?year=2024#top')).toBe('https://www.damseik.com/projects')
  })

  it('lowercases the path', () => {
    expect(canonicalUrl('/projects/nitrogen-lift-operation-cawc-well-45T-rivers-state-swamp')).toBe(
      'https://www.damseik.com/projects/nitrogen-lift-operation-cawc-well-45t-rivers-state-swamp',
    )
  })

  it('accepts an absolute URL on any host and rewrites it to the canonical origin', () => {
    expect(canonicalUrl('http://damseik.com/about/')).toBe('https://www.damseik.com/about')
  })
})

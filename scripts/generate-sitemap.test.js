// @vitest-environment node
import { buildRobotsTxt, buildSitemap } from './generate-sitemap.js'
import { indexableRoutes, routes } from '../src/routes/manifest.js'

describe('buildSitemap', () => {
  const xml = buildSitemap(routes)
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])

  it('is a urlset document', () => {
    expect(xml).toMatch(/^<\?xml version="1.0" encoding="UTF-8"\?>\n<urlset xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9">/)
    expect(xml.trim().endsWith('</urlset>')).toBe(true)
  })

  it('lists exactly the indexable routes as canonical URLs', () => {
    expect(locs).toHaveLength(indexableRoutes.length)
    expect(new Set(locs).size).toBe(locs.length)
    for (const loc of locs) expect(loc).toMatch(/^https:\/\/www\.damseik\.com\/([a-z0-9-]+(\/[a-z0-9-]+)*)?$/)
    expect(locs).toContain('https://www.damseik.com/')
    expect(locs).toContain('https://www.damseik.com/projects/nitrogen-lift-operation-cawc-well-45t-rivers-state-swamp')
  })

  it('excludes noindex pages', () => {
    expect(locs).not.toContain('https://www.damseik.com/services/valve-services')
  })

  it('only emits lastmod when a route declares one', () => {
    expect(xml).not.toContain('<lastmod>')
    const withDate = buildSitemap([{ path: '/about', indexable: true, lastmod: '2026-10-01' }])
    expect(withDate).toContain('<loc>https://www.damseik.com/about</loc>\n    <lastmod>2026-10-01</lastmod>')
  })

  it('escapes XML special characters', () => {
    expect(buildSitemap([{ path: '/a&b', indexable: true }])).toContain('<loc>https://www.damseik.com/a&amp;b</loc>')
  })
})

describe('buildRobotsTxt', () => {
  const robots = buildRobotsTxt('https://www.damseik.com')

  it('allows crawling of the whole site', () => {
    expect(robots).toMatch(/^User-agent: \*\nAllow: \/\n/)
    expect(robots).not.toMatch(/Disallow: \/\s*$/m)
  })

  it('points crawlers at the canonical sitemap', () => {
    expect(robots).toContain('Sitemap: https://www.damseik.com/sitemap.xml')
  })
})

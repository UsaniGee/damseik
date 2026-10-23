// @vitest-environment node
import { buildRobotsTxt } from './generate-sitemap.js'

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

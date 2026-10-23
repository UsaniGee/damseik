import { findRoute, indexableRoutes, notFoundRoute, routes } from './manifest'

describe('route manifest', () => {
  it('lists every existing public URL', () => {
    expect(routes).toHaveLength(21)
  })

  it('has unique, lowercase, slash-free canonical paths', () => {
    const paths = routes.map((r) => r.path)
    expect(new Set(paths).size).toBe(paths.length)
    for (const path of paths) {
      expect(path).toBe(path.toLowerCase())
      expect(path).toMatch(/^\/[a-z0-9/-]*$/)
      if (path !== '/') expect(path.endsWith('/')).toBe(false)
    }
  })

  it('gives every route a unique branded title and a unique description', () => {
    const titles = routes.map((r) => r.title)
    const descriptions = routes.map((r) => r.description)
    expect(new Set(titles).size).toBe(titles.length)
    expect(new Set(descriptions).size).toBe(descriptions.length)
    for (const { title, description } of routes) {
      expect(title).toContain('Dam Seik')
      expect(title.length).toBeLessThanOrEqual(70)
      expect(description.length).toBeGreaterThanOrEqual(50)
      expect(description.length).toBeLessThanOrEqual(170)
    }
  })

  it('does not publish legacy brand names or unverified claims in metadata', () => {
    for (const { title, description } of routes) {
      expect(`${title} ${description}`).not.toMatch(/Damsiek|Dam Seik Services|36 years/i)
    }
  })

  it('keeps legacy mixed-case URLs as aliases of their canonical path', () => {
    const aliases = routes.flatMap((r) => r.aliases ?? [])
    expect(aliases).toContain('/projects/high-Pressure-pumping-support-for-coil-tubing-operation-rivers-state')
    expect(aliases).toContain('/projects/nitrogen-lift-operation-cawc-well-45T-rivers-state-swamp')
    for (const route of routes) {
      for (const alias of route.aliases ?? []) expect(alias.toLowerCase()).toBe(route.path)
    }
  })

  it('excludes stub service pages and the 404 page from indexing', () => {
    const noindex = routes.filter((r) => !r.indexable).map((r) => r.path)
    expect(noindex.sort()).toEqual(
      [
        '/services/coating-and-repair-products',
        '/services/equipment-leasing',
        '/services/process-instrumentation',
        '/services/procurement',
        '/services/quality-control-services',
        '/services/valve-services',
      ].sort(),
    )
    expect(indexableRoutes).toHaveLength(15)
    expect(notFoundRoute.indexable).toBe(false)
  })

  it('finds routes regardless of case or trailing slash, falling back to 404', () => {
    expect(findRoute('/').path).toBe('/')
    expect(findRoute('/Services/').path).toBe('/services')
    expect(findRoute('/projects/nitrogen-lift-operation-cawc-well-45T-rivers-state-swamp').path).toBe(
      '/projects/nitrogen-lift-operation-cawc-well-45t-rivers-state-swamp',
    )
    expect(findRoute('/does-not-exist')).toBe(notFoundRoute)
  })

  it('loads a page component for every route', async () => {
    for (const route of [...routes, notFoundRoute]) {
      const mod = await route.load()
      expect(typeof mod.default, route.path).toBe('function')
    }
  }, 60_000)
})

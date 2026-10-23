// @vitest-environment node
import fs from 'node:fs'
import path from 'node:path'
import { buildRedirects } from './redirects'
import { indexableRoutes, routes } from './manifest'

const vercelConfig = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../vercel.json'), 'utf8'))

describe('buildRedirects', () => {
  const redirects = buildRedirects(routes)

  it('redirects each legacy alias to its canonical path with a 301', () => {
    expect(redirects).toContainEqual({
      source: '/projects/nitrogen-lift-operation-cawc-well-45T-rivers-state-swamp',
      destination: '/projects/nitrogen-lift-operation-cawc-well-45t-rivers-state-swamp',
      statusCode: 301,
    })
    expect(redirects).toContainEqual({
      source: '/projects/high-Pressure-pumping-support-for-coil-tubing-operation-rivers-state',
      destination: '/projects/high-pressure-pumping-support-for-coil-tubing-operation-rivers-state',
      statusCode: 301,
    })
  })

  it('has no chains, loops or redirects to the homepage', () => {
    const sources = new Set(redirects.map((r) => r.source))
    for (const { source, destination } of redirects) {
      expect(destination).not.toBe(source)
      expect(sources.has(destination)).toBe(false)
      expect(destination).not.toBe('/')
    }
  })

  it('only targets indexable canonical routes', () => {
    const indexable = new Set(indexableRoutes.map((r) => r.path))
    for (const { destination } of redirects) expect(indexable.has(destination)).toBe(true)
  })

  it('never shadows a live canonical route', () => {
    const live = new Set(routes.map((r) => r.path))
    for (const { source } of redirects) expect(live.has(source)).toBe(false)
  })
})

describe('vercel.json', () => {
  it('declares exactly the redirects derived from the manifest', () => {
    expect(vercelConfig.redirects).toEqual(buildRedirects(routes))
  })

  it('serves clean URLs without trailing slashes and has no SPA catch-all', () => {
    expect(vercelConfig.cleanUrls).toBe(true)
    expect(vercelConfig.trailingSlash).toBe(false)
    expect(vercelConfig.rewrites).toBeUndefined()
  })
})

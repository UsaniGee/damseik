// @vitest-environment node
import { render } from './entry-server'

describe('server render', () => {
  it('renders an indexable page with its content, head tags and critical styles', async () => {
    const result = await render('/services/well-service')
    expect(result.status).toBe(200)
    expect(result.html).toMatch(/<h1[^>]*>\s*Well Services\s*<\/h1>/)
    expect(result.html).toContain('id="main-content"')
    expect(result.head).toContain('<title>Well Services | Dam Seik</title>')
    expect(result.head).toContain('<link rel="canonical" href="https://www.damseik.com/services/well-service">')
    expect(result.styles).toMatch(/<style data-emotion="css[ "]/)
  }, 60_000)

  it('does not inline emotion style tags inside the markup', async () => {
    const { html } = await render('/about')
    expect(html).not.toContain('<style')
  }, 60_000)

  it('renders unknown URLs with the 404 page and status', async () => {
    const result = await render('/does-not-exist')
    expect(result.status).toBe(404)
    expect(result.html).toContain('Page Not Found')
    expect(result.head).toContain('<meta name="robots" content="noindex, follow">')
    expect(result.head).not.toContain('rel="canonical"')
  }, 60_000)

  it('renders the homepage hero heading', async () => {
    const { html } = await render('/')
    expect(html).toMatch(/<h1[^>]*>Pipeline Integrity<\/h1>/)
  }, 60_000)
})

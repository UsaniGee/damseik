import { act, render } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import SEO from '.'

const renderAt = (path) => {
  const router = createMemoryRouter([{ path: '*', element: <SEO /> }], { initialEntries: [path] })
  render(<RouterProvider router={router} />)
  return router
}

const head = (selector, attr = 'content') => document.head.querySelector(selector)?.getAttribute(attr)

describe('<SEO />', () => {
  beforeEach(() => {
    document.head.innerHTML = '<meta name="keywords" content="legacy">'
    document.title = ''
  })

  it('applies the manifest metadata for the current route', () => {
    renderAt('/services')
    expect(document.title).toBe('Oil & Gas Services | Dam Seik')
    expect(head('meta[name="description"]')).toMatch(/^Dam Seik oil and gas services/)
    expect(head('link[rel="canonical"]', 'href')).toBe('https://www.damseik.com/services')
    expect(head('meta[name="robots"]')).toBe('index, follow')
    expect(head('meta[name="twitter:card"]')).toBe('summary_large_image')
    expect(document.head.querySelectorAll('script[data-seo]')).toHaveLength(1)
  })

  it('removes the legacy keywords tag', () => {
    renderAt('/')
    expect(document.head.querySelector('meta[name="keywords"]')).toBeNull()
  })

  it('updates tags on client-side navigation without duplicating them', async () => {
    const router = renderAt('/')
    expect(document.head.querySelectorAll('script[data-seo]')).toHaveLength(2)
    await act(() => router.navigate('/services/valve-services'))
    expect(document.title).toBe('Valve Services | Dam Seik')
    expect(head('meta[name="robots"]')).toBe('noindex, follow')
    expect(document.head.querySelectorAll('meta[name="description"]')).toHaveLength(1)
    expect(document.head.querySelectorAll('script[data-seo]')).toHaveLength(1)
  })

  it('drops canonical and og:url on the 404 page', async () => {
    const router = renderAt('/about')
    await act(() => router.navigate('/does-not-exist'))
    expect(document.title).toBe('Page Not Found | Dam Seik')
    expect(document.head.querySelector('link[rel="canonical"]')).toBeNull()
    expect(document.head.querySelector('meta[property="og:url"]')).toBeNull()
  })
})

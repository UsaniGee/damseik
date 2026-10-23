// @vitest-environment node
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { injectIntoTemplate, outputPathFor, prerender } from './prerender.js'

const template = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Default description" />
    <meta property="og:title" content="Default" />
    <meta property="og:site_name" content="Dam Seik" />
    <title>Default title</title>
    <script type="module" crossorigin src="/assets/index-abc.js"></script>
  </head>
  <body >
    <div id="root"></div>
  </body>
</html>`

describe('outputPathFor', () => {
  it('maps routes to clean-URL html files', () => {
    expect(outputPathFor('/')).toBe('index.html')
    expect(outputPathFor('/services')).toBe('services.html')
    expect(outputPathFor('/services/well-service')).toBe('services/well-service.html')
    expect(outputPathFor('*')).toBe('404.html')
  })
})

describe('injectIntoTemplate', () => {
  const page = {
    html: '<main><h1>Well Services</h1></main>',
    head: '<title>Well Services | Dam Seik</title>\n    <meta name="description" content="Wells">',
    styles: '<style data-emotion="css abc">.css-abc{color:red}</style>',
  }
  const out = injectIntoTemplate(template, page)

  it('puts the rendered markup inside the root element', () => {
    expect(out).toContain('<div id="root"><main><h1>Well Services</h1></main></div>')
  })

  it('replaces the default title, description and Open Graph tags', () => {
    expect(out).not.toContain('Default title')
    expect(out).not.toContain('Default description')
    expect(out).not.toContain('og:title" content="Default"')
    expect(out.match(/<title>/g)).toHaveLength(1)
    expect(out).toContain('<title>Well Services | Dam Seik</title>')
  })

  it('keeps charset, viewport and the module script', () => {
    expect(out).toContain('<meta charset="UTF-8" />')
    expect(out).toContain('name="viewport"')
    expect(out).toContain('src="/assets/index-abc.js"')
  })

  it('places head tags and critical styles before </head>', () => {
    const headEnd = out.indexOf('</head>')
    expect(out.indexOf('<title>Well Services')).toBeLessThan(headEnd)
    expect(out.indexOf('<style data-emotion')).toBeLessThan(headEnd)
  })

  it('fails loudly when the template has no empty root element', () => {
    expect(() => injectIntoTemplate('<html><head></head><body></body></html>', page)).toThrow(/root/)
  })
})

describe('prerender', () => {
  it('writes one html file per route plus 404.html and reports statuses', async () => {
    const dist = fs.mkdtempSync(path.join(os.tmpdir(), 'prerender-'))
    fs.writeFileSync(path.join(dist, 'index.html'), template)
    const render = async (url) => ({
      html: `<p>${url}</p>`,
      head: `<title>${url}</title>`,
      styles: '',
      status: url === '/__not-found__' ? 404 : 200,
    })
    const results = await prerender({
      distDir: dist,
      render,
      routes: [{ path: '/' }, { path: '/services' }, { path: '/services/well-service' }],
    })

    expect(results.map((r) => r.file)).toEqual([
      'index.html',
      'services.html',
      'services/well-service.html',
      '404.html',
    ])
    expect(fs.readFileSync(path.join(dist, 'services/well-service.html'), 'utf8')).toContain(
      '<div id="root"><p>/services/well-service</p></div>',
    )
    expect(fs.readFileSync(path.join(dist, '404.html'), 'utf8')).toContain('<p>/__not-found__</p>')
    expect(results.at(-1).status).toBe(404)
  })

  it('refuses to write a page whose render status is unexpected', async () => {
    const dist = fs.mkdtempSync(path.join(os.tmpdir(), 'prerender-'))
    fs.writeFileSync(path.join(dist, 'index.html'), template)
    const render = async () => ({ html: '', head: '', styles: '', status: 404 })
    await expect(prerender({ distDir: dist, render, routes: [{ path: '/about' }] })).rejects.toThrow(/\/about/)
  })
})

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const NOT_FOUND_URL = '/__not-found__'

// Head tags in index.html that each prerendered page replaces with its own.
const REPLACED_HEAD_TAGS = [
  /\s*<title>[\s\S]*?<\/title>/g,
  /\s*<meta name="description"[^>]*>/g,
  /\s*<meta property="og:[^"]*"[^>]*>/g,
]

/**
 * Map a manifest path to its output file. Vercel `cleanUrls` serves
 * `services.html` at `/services`, and `404.html` for unknown URLs.
 * @param {string} routePath
 * @returns {string}
 */
export function outputPathFor(routePath) {
  if (routePath === '*') return '404.html'
  if (routePath === '/') return 'index.html'
  return `${routePath.replace(/^\//, '')}.html`
}

/**
 * Insert a rendered page into the client build's index.html.
 * @param {string} template
 * @param {{ html: string, head: string, styles: string }} page
 * @returns {string}
 */
export function injectIntoTemplate(template, { html, head, styles }) {
  const root = '<div id="root"></div>'
  if (!template.includes(root)) throw new Error(`Template is missing an empty ${root}`)

  let out = REPLACED_HEAD_TAGS.reduce((doc, pattern) => doc.replace(pattern, ''), template)
  out = out.replace('</head>', `    ${head}\n    ${styles}\n  </head>`)
  return out.replace(root, () => `<div id="root">${html}</div>`)
}

/**
 * Prerender every route (and the 404 page) into `distDir`.
 * @param {{ distDir: string, render: (url: string) => Promise<{ html: string, head: string, styles: string, status: number }>, routes: { path: string }[] }} options
 * @returns {Promise<{ file: string, status: number }[]>}
 */
export async function prerender({ distDir, render, routes }) {
  const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8')
  const jobs = [
    ...routes.map((route) => ({ path: route.path, url: route.path, expected: 200 })),
    { path: '*', url: NOT_FOUND_URL, expected: 404 },
  ]

  const results = []
  for (const job of jobs) {
    const page = await render(job.url)
    if (page.status !== job.expected) {
      throw new Error(`Rendering ${job.url} returned ${page.status}, expected ${job.expected}`)
    }
    const file = outputPathFor(job.path)
    const target = path.join(distDir, file)
    fs.mkdirSync(path.dirname(target), { recursive: true })
    fs.writeFileSync(target, injectIntoTemplate(template, page))
    results.push({ file, status: page.status })
  }
  return results
}

const isMain = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href
if (isMain) {
  const projectRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
  const distDir = path.join(projectRoot, 'dist')
  const serverEntry = path.join(projectRoot, 'dist-server', 'entry-server.js')
  const { render, routes } = await import(pathToFileURL(serverEntry).href)

  const results = await prerender({ distDir, render, routes })
  for (const { file, status } of results) console.log(`  ${status} ${file}`)
  console.log(`Prerendered ${results.length} pages into ${distDir}`)
}

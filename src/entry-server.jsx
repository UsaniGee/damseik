import React from 'react'
import { Writable } from 'node:stream'
import { renderToPipeableStream } from 'react-dom/server'
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from 'react-router-dom'
import createEmotionServer from '@emotion/server/create-instance'
import AppShell from './AppShell'
import { SITE_URL } from './config/site'
import { createEmotionCache } from './lib/emotionCache'
import { buildHead, headToHtml } from './lib/seo'
import { findRoute, notFoundRoute } from './routes/manifest'
import { routeObjects } from './routes/routeObjects'

// Waits for every lazy route chunk to resolve, then returns the full markup.
const renderToStringAsync = (element) =>
  new Promise((resolve, reject) => {
    let html = ''
    const sink = new Writable({
      write(chunk, _encoding, callback) {
        html += chunk
        callback()
      },
      final(callback) {
        resolve(html)
        callback()
      },
    })
    const { pipe } = renderToPipeableStream(element, {
      onAllReady: () => pipe(sink),
      onShellError: reject,
      onError: reject,
    })
  })

/**
 * Render a URL to static HTML for prerendering.
 * @param {string} url pathname to render
 * @returns {Promise<{ html: string, head: string, styles: string, status: number }>}
 */
export async function render(url) {
  const handler = createStaticHandler(routeObjects)
  const context = await handler.query(new Request(new URL(url, SITE_URL)))
  if (context instanceof Response) throw new Error(`Unexpected redirect while rendering ${url}`)
  const router = createStaticRouter(handler.dataRoutes, context)

  const emotionCache = createEmotionCache()
  const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(emotionCache)

  const markup = await renderToStringAsync(
    <AppShell emotionCache={emotionCache}>
      <StaticRouterProvider router={router} context={context} hydrate={false} />
    </AppShell>,
  )
  const chunks = extractCriticalToChunks(markup)
  const route = findRoute(url)

  return {
    html: chunks.html,
    head: headToHtml(buildHead(route)),
    styles: constructStyleTagsFromChunks(chunks),
    status: route === notFoundRoute ? 404 : 200,
  }
}

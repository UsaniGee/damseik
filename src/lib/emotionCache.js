import createCache from '@emotion/cache'

/**
 * Emotion cache with a fixed key on client and server. On the server `compat`
 * stops Emotion inlining <style> tags in the markup so critical CSS can be
 * extracted into <head>; the client cache then adopts those tags on hydration.
 */
export function createEmotionCache() {
  const cache = createCache({ key: 'css' })
  if (typeof document === 'undefined') cache.compat = true
  return cache
}

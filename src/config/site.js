/**
 * Site-wide constants shared by the app, the prerender step, and build scripts.
 * Runs in both Vite (import.meta.env) and plain Node (process.env).
 */

const env = (key) => import.meta.env?.[key] ?? globalThis.process?.env?.[key]

/** Canonical origin: HTTPS, www host, no trailing slash. */
export const SITE_URL = (env('VITE_SITE_URL') || 'https://www.damseik.com').replace(/\/+$/, '')

/** Canonical public-facing brand name (spec §2.1). */
export const BRAND_NAME = 'Dam Seik'

/** Verified business email. */
export const CONTACT_EMAIL = 'info@damseik.com'

/** Verified business telephone. */
export const CONTACT_PHONE = '+234 803 343 3350'

export const LOGO_URL =
  'https://res.cloudinary.com/dnu4lxiie/image/upload/f_auto,q_auto,w_400/v1744211989/Dam_Seik_Services_Limited_Logo_2-removebg-preview_xuimnd.png'

/**
 * Temporary social share image: the approved logo padded to 1200×630.
 * Replace with an approved branded share image before launch.
 */
export const DEFAULT_OG_IMAGE =
  'https://res.cloudinary.com/dnu4lxiie/image/upload/c_pad,w_1200,h_630,b_white,f_jpg,q_auto/v1744211989/Dam_Seik_Services_Limited_Logo_2-removebg-preview_xuimnd.png'

/**
 * Build the canonical URL for a path or URL: canonical origin, lowercase path,
 * no trailing slash (except the homepage), no query string or fragment.
 * @param {string} pathOrUrl
 * @returns {string}
 */
export function canonicalUrl(pathOrUrl = '/') {
  let path = pathOrUrl
  if (/^https?:\/\//i.test(path)) path = new URL(path).pathname
  path = path.split(/[?#]/)[0].toLowerCase()
  if (!path.startsWith('/')) path = `/${path}`
  path = path.replace(/\/+$/, '')
  return `${SITE_URL}${path || '/'}`
}

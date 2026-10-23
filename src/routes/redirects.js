/**
 * Permanent redirects from legacy URLs (manifest `aliases`) to canonical paths.
 * `vercel.json` must declare exactly this list; a test keeps them in sync.
 * @param {import('./manifest').RouteEntry[]} routeList
 * @returns {{ source: string, destination: string, statusCode: 301 }[]}
 */
export function buildRedirects(routeList) {
  return routeList.flatMap((route) =>
    (route.aliases ?? []).map((alias) => ({ source: alias, destination: route.path, statusCode: 301 })),
  )
}

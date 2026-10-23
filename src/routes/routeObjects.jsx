import React, { lazy } from 'react'
import Root from '../Layout/Root'
import { notFoundRoute, routes } from './manifest'

const toRouteObject = (route) => {
  const Page = lazy(route.load)
  return route.path === '/'
    ? { index: true, element: <Page /> }
    : { path: route.path, element: <Page /> }
}

/** React Router route tree built from the manifest; shared by client and server. */
export const routeObjects = [
  {
    path: '/',
    element: <Root />,
    children: [...routes, notFoundRoute].map(toRouteObject),
  },
]

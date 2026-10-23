import React, { Suspense, lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ChakraProvider, theme, Spinner, Center } from '@chakra-ui/react'
import Root from './Layout/Root'
import ErrorBoundary from './components/ErrorBoundary'
import { notFoundRoute, routes } from './routes/manifest'

// Loading fallback component
const PageLoader = () => (
  <Center minH="100vh">
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="#D10205"
      size="xl"
    />
  </Center>
)

const toRouteObject = (route) => {
  const Page = lazy(route.load)
  return route.path === '/'
    ? { index: true, element: <Page /> }
    : { path: route.path, element: <Page /> }
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [...routes, notFoundRoute].map(toRouteObject),
  },
])

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <RouterProvider router={router} />
        </Suspense>
      </ErrorBoundary>
    </ChakraProvider>
  )
}

export default App

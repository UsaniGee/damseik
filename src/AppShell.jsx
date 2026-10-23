import React, { Suspense } from 'react'
import { CacheProvider } from '@emotion/react'
import { ChakraProvider, theme, Spinner, Center } from '@chakra-ui/react'
import ErrorBoundary from './components/ErrorBoundary'

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

/** Providers shared by the client and server renders, so their markup matches. */
const AppShell = ({ emotionCache, children }) => (
  <CacheProvider value={emotionCache}>
    <ChakraProvider theme={theme}>
      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>{children}</Suspense>
      </ErrorBoundary>
    </ChakraProvider>
  </CacheProvider>
)

export default AppShell

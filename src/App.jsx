import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppShell from './AppShell'
import { createEmotionCache } from './lib/emotionCache'
import { routeObjects } from './routes/routeObjects'

const router = createBrowserRouter(routeObjects)
const emotionCache = createEmotionCache()

const App = () => {
  return (
    <AppShell emotionCache={emotionCache}>
      <RouterProvider router={router} />
    </AppShell>
  )
}

export default App

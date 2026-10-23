import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { findRoute } from './routes/manifest'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('Service Worker registered:', registration.scope);
      })
      .catch((error) => {
        console.log('Service Worker registration failed:', error);
      });
  });
}

const container = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Load the current page's chunk first so hydration does not fall back to the spinner.
findRoute(window.location.pathname)
  .load()
  .finally(() => {
    if (container.hasChildNodes()) {
      hydrateRoot(container, app)
    } else {
      createRoot(container).render(app)
    }
  })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      jsxRuntime: 'automatic',
    })
  ],
  resolve: {
    dedupe: ['react', 'react-dom', 'scheduler'],
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react/jsx-runtime'],
    force: true,
  },
  build: {
    chunkSizeWarningLimit: 1500,
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (
              id.includes('/react/') ||
              id.includes('/react-dom/') ||
              id.includes('/scheduler/') ||
              id.includes('react/jsx-runtime') ||
              id.includes('react/jsx-dev-runtime') ||
              id.includes('react-is') ||
              id.includes('react-refresh')
            ) {
              return 'vendor-react'
            }
            if (id.includes('react-router')) return 'vendor-react-router'
            if (id.includes('@chakra-ui') || id.includes('@emotion')) return 'vendor-chakra'
            if (id.includes('framer-motion')) return 'vendor-framer-motion'
            if (id.includes('swiper')) return 'vendor-swiper'
            return 'vendor'
          }
        },
      },
    },
  },
})

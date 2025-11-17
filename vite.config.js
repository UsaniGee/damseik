import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      jsxRuntime: 'automatic',
    })
  ],
  resolve: {
    dedupe: ['react', 'react-dom', 'scheduler'],
    alias: {
      'react': resolve(__dirname, 'node_modules/react'),
      'react-dom': resolve(__dirname, 'node_modules/react-dom'),
    },
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
              id.includes('react-refresh') ||
              id.includes('react-router') ||
              id.includes('react-hook-form') ||
              id.includes('react-icons') ||
              id.includes('react-focus-lock') ||
              id.includes('react-remove-scroll') ||
              id.includes('react-style-singleton') ||
              id.includes('react-clientside-effect') ||
              id.includes('@chakra-ui') ||
              id.includes('@emotion') ||
              id.includes('framer-motion')
            ) {
              return 'vendor-react'
            }
            if (id.includes('swiper')) return 'vendor-swiper'
            return 'vendor'
          }
        },
      },
    },
  },
})

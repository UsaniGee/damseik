import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  build: {
    chunkSizeWarningLimit: 1500, // raise limit to reduce noisy warnings
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-router')) return 'vendor-react-router'
            if (id.includes('@chakra-ui') || id.includes('@emotion')) return 'vendor-chakra'
            if (id.includes('framer-motion')) return 'vendor-framer-motion'
            if (id.includes('swiper')) return 'vendor-swiper'
            if (id.includes('react') || id.includes('react-dom')) return 'vendor-react'
            return 'vendor'
          }
        },
      },
    },
  },
})

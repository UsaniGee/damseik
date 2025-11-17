import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

const reactChunkFirstPlugin = () => {
  return {
    name: 'react-chunk-first',
    generateBundle(options, bundle) {
    },
    transformIndexHtml(html) {
      const reactChunkRegex = /<link[^>]*vendor-react[^>]*>/g
      const otherVendorRegex = /<link[^>]*vendor-[^>]*>/g
      
      const reactChunks = html.match(reactChunkRegex) || []
      const otherVendors = html.match(otherVendorRegex) || []
      const otherVendorsFiltered = otherVendors.filter(link => !link.includes('vendor-react'))
      
      if (reactChunks.length > 0 && otherVendorsFiltered.length > 0) {
        const allVendors = [...reactChunks, ...otherVendorsFiltered]
        let newHtml = html
        
        allVendors.forEach(link => {
          newHtml = newHtml.replace(link, '')
        })
        
        const scriptMatch = newHtml.match(/<script[^>]*type="module"[^>]*>/)
        if (scriptMatch) {
          const scriptTag = scriptMatch[0]
          const reactPreloads = reactChunks.join('\n    ')
          const otherPreloads = otherVendorsFiltered.join('\n    ')
          const allPreloads = reactPreloads + (otherPreloads ? '\n    ' + otherPreloads : '')
          newHtml = newHtml.replace(scriptTag, allPreloads + '\n    ' + scriptTag)
        }
        
        return newHtml
      }
      
      return html
    }
  }
}

export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      jsxRuntime: 'automatic',
    }),
    reactChunkFirstPlugin()
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
        manualChunks(id, { getModuleInfo }) {
          if (id.includes('node_modules')) {
            const moduleInfo = getModuleInfo(id)
            if (moduleInfo) {
              const hasReactDep = moduleInfo.importers?.some(importer => 
                importer.includes('/react/') || 
                importer.includes('react-dom') ||
                importer.includes('vendor-react')
              ) || moduleInfo.dynamicImporters?.some(importer =>
                importer.includes('/react/') || 
                importer.includes('react-dom') ||
                importer.includes('vendor-react')
              )
              
              if (hasReactDep && !id.includes('swiper')) {
                return 'vendor-react'
              }
            }
            
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
              id.includes('@cloudinary/react') ||
              id.includes('framer-motion') ||
              id.includes('next-themes')
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

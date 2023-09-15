import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build:{
    assetsDir: './',
    rollupOptions:{
      output:{
        manualChunks:{
          react: ['react', 'react-dom'],
          mermaid: ['mermaid'],
          reactflow: ['reactflow'],
          spectacle: ['spectacle']
        }
      }
    }
  },
})

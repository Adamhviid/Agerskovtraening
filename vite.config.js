import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      // Make sure to include your assets directory
      // in the external option to prevent Rollup from bundling them.
      external: ['src/assets/new/banner.jpeg'],
    },
  },
})

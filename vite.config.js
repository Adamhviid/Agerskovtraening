import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      //add external assets to the bundle
      external: [
        'src/assets/new/banner.jpeg',
        'src/assets/new/image00004.jpeg'
      ],
    },
  },
});

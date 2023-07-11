import { fileURLToPath, URL } from 'node:url'
import inject from '@rollup/plugin-inject';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    inject({
      $: 'jquery',
      jQuery: 'jquery',
      'windows.jQuery': 'jquery',
    }),
      
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

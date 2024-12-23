import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  server:{
    port: 3000,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },  
  plugins: [
    vue(),
    UnoCSS(),
    vueDevTools(),
   
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})

// @ts-check
import { defineConfig } from 'astro/config';
import Macros from 'unplugin-macros/vite'

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  base: '/2025',

  experimental: {
    serializeConfig: true,
  },

  redirects: {
    '/': '/2025/ja',
    '/2025': '/2025/ja',
  },

  vite:{
    optimizeDeps: {
      exclude: [
        '@resvg/resvg-js'
      ]
    },
    plugins: [
      Macros()
    ]
  },

  integrations: [react()]
});
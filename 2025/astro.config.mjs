// @ts-check
import { defineConfig } from 'astro/config';

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
});

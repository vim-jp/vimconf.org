import react from '@astrojs/react';
import dsv from '@rollup/plugin-dsv';
import tailwindcss from '@tailwindcss/vite';

// @ts-check
import { defineConfig } from 'astro/config';

import Macros from 'unplugin-macros/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://vimconf.org/',
	base: '/2025',

	vite: {
		optimizeDeps: {
			exclude: [
				'@resvg/resvg-js',
			],
		},
		plugins: [
			Macros(),
			tailwindcss(),
      dsv(),
		],
	},

	integrations: [react()],
});

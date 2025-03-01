import react from '@astrojs/react';
// @ts-check
import { defineConfig } from 'astro/config';

import Macros from 'unplugin-macros/vite';

// https://astro.build/config
export default defineConfig({
	base: '/2025',

	experimental: {
		serializeConfig: true,
	},

	vite: {
		optimizeDeps: {
			exclude: [
				'@resvg/resvg-js',
			],
		},
		plugins: [
			Macros(),
		],
	},

	integrations: [react()],
});

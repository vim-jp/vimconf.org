import { ryoppippi } from '@ryoppippi/eslint-config';

export default ryoppippi({
	type: 'app', // or 'lib'
	svelte: false,
	astro: true,
	stylistic: false,
	typescript: {
		tsconfigPath: './tsconfig.json',
	},
});

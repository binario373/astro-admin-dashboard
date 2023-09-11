// vite.config.js
import sveltePreprocess from 'svelte-preprocess';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [
    svelte ({
			configFile: 'svelte.config.js',
      preprocess: [sveltePreprocess({ typescript: true })]
    }),
  ],
});
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  // Relative paths keep the export portable between project sites and custom domains.
  base: './',
  plugins: [sveltekit()]
});

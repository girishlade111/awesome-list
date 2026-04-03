// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/repository-name',
  output: 'static',
  build: {
    format: 'file'
  }
});

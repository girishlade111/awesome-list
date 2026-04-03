// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // UPDATE THESE VALUES FOR YOUR REPO:
  // Replace 'yourusername' with your GitHub username
  // Replace 'devhub' with your repository name (without trailing slash)
  site: 'https://yourusername.github.io',
  base: '/devhub',
  output: 'static',
  build: {
    format: 'file'
  },
  integrations: [sitemap()]
});
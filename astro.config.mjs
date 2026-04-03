// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

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
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
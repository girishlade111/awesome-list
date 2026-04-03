# Awesome Toolbox - Developer Resources Hub

A community-driven collection of resources for developers, featuring AI agents, prompts, instructions, plugins, and workflows.

## Features

- **Resource Catalog** - Searchable collection of community-contributed tools
- **Learning Hub** - Tutorials and guides for all skill levels
- **Multiple Categories** - Agents, Prompts, Instructions, Plugins, Workflows
- **Filter & Search** - Find exactly what you need with powerful filters
- **Dark/Light Mode** - Developer-first design with theme toggle
- **SEO Optimized** - Sitemap, RSS feed, and Open Graph metadata

## Tech Stack

- [Astro](https://astro.build) - Static site generator
- Vanilla CSS with custom properties
- [Fuse.js](https://fusejs.io) - Client-side search
- GitHub Pages for hosting

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/girishlade111/awesome-toolbox.git
   cd awesome-toolbox
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Project Structure

```
├── src/
│   ├── components/           # UI components
│   ├── content/
│   │   └── tutorials/        # MDX tutorial files
│   ├── data/
│   │   └── resources.json    # Resource data
│   ├── layouts/
│   │   └── Layout.astro      # Main layout
│   ├── pages/
│   │   ├── index.astro       # Home page
│   │   ├── browse.astro      # Browse resources
│   │   ├── learn.astro       # Learning hub
│   │   └── submit.astro      # Contribution page
│   ├── styles/
│   │   └── global.css        # Global styles
│   └── types.ts              # TypeScript types
├── public/                   # Static assets
├── .github/workflows/        # GitHub Actions
└── SPEC.md                   # Project specification
```

## Adding Resources

To add a new resource, edit `src/data/resources.json`:

```json
{
  "id": "unique-id",
  "title": "Resource Name",
  "description": "Short description",
  "category": "agent|prompt|instruction|plugin|workflow",
  "author": "GitHub username",
  "authorUrl": "https://github.com/username",
  "tags": ["tag1", "tag2"],
  "url": "https://link-to-resource",
  "addedAt": "2026-04-03",
  "stars": 100
}
```

## Adding Tutorials

Create a new MDX file in `src/content/tutorials/`:

```mdx
---
title: "Tutorial Title"
description: "Brief description"
difficulty: "beginner|intermediate|advanced"
duration: "15 min"
category: "getting-started|advanced|integration"
author: "Your Name"
publishedDate: "2026-04-03"
---

## Introduction

Your tutorial content here...
```

## Deployment

The site is configured to deploy automatically to GitHub Pages via GitHub Actions.

1. Push to main branch
2. Enable GitHub Pages in repository settings (select "GitHub Actions")
3. The workflow will deploy automatically

Live site: https://girishlade111.github.io/awesome-toolbox/

## License

MIT License - See LICENSE file for details.

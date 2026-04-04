# Awesome Toolbox - Developer Resources Hub

A community-driven collection of resources for developers, featuring AI agents, prompts, instructions, plugins, and workflows.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Adding Resources](#adding-resources)
- [Adding Tutorials](#adding-tutorials)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Stats](#stats)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Resource Catalog** - Searchable collection of community-contributed tools
- **Learning Hub** - Tutorials and guides for all skill levels
- **Multiple Categories** - Agents, Prompts, Instructions, Plugins, Workflows
- **Filter & Search** - Find exactly what you need with powerful filters
- **Dark/Light Mode** - Developer-first design with theme toggle
- **SEO Optimized** - Sitemap, RSS feed, and Open Graph metadata
- **Real-time Search** - Instant search with Fuse.js
- **Tag-based Navigation** - Browse resources by tags
- **Responsive Design** - Works on mobile, tablet, and desktop
- **Command Palette** - Quick access to all features
- **RSS Feed** - Stay updated with new resources

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [Astro](https://astro.build) | Static site generator |
| [Fuse.js](https://fusejs.io) | Client-side fuzzy search |
| Vanilla CSS | Styling with custom properties |
| [MDX](https://mdxjs.com) | Markdown with components |
| [Shiki](https://shiki.style) | Code syntax highlighting |
| GitHub Pages | Hosting & deployment |
| GitHub Actions | CI/CD pipeline |

---

## Getting Started

### Prerequisites

- **Node.js**: v22.12.0 or higher
- **npm**: v9.0.0 or higher

### Installation

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

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## Project Structure

```
awesome-toolbox/
├── .github/
│   ├── workflows/           # GitHub Actions workflows
│   │   └── deploy.yml      # Deployment configuration
│   ├── ISSUE_TEMPLATE/     # Issue templates
│   │   └── submit-resource.yml
│   └── pull_request_template.md
├── public/
│   ├── favicon.ico         # Site favicon
│   ├── favicon.svg
│   └── robots.txt          # SEO robots file
├── scripts/
│   ├── validate-data.js    # Data validation script
│   ├── validate-resources.js
│   └── resources-schema.json
├── src/
│   ├── components/         # UI components
│   │   ├── BackToTop.astro
│   │   ├── BaseHead.astro
│   │   ├── CommandPalette.astro
│   │   ├── Footer.astro
│   │   ├── GlobalSearch.astro
│   │   ├── Navigation.astro
│   │   ├── ResourceCard.astro
│   │   ├── ResourceFilter.astro
│   │   ├── ThemeToggle.astro
│   │   └── TutorialCard.astro
│   ├── content/
│   │   └── tutorials/      # MDX tutorial files
│   ├── data/
│   │   └── resources.json  # Resource data
│   ├── layouts/
│   │   └── Layout.astro   # Main layout
│   ├── pages/
│   │   ├── index.astro    # Home page
│   │   ├── browse.astro   # Browse resources
│   │   ├── learn.astro    # Learning hub
│   │   ├── submit.astro   # Contribution page
│   │   ├── rss.xml.js     # RSS feed
│   │   └── tags/
│   │       └── [tag].astro # Tag pages
│   ├── styles/
│   │   └── global.css     # Global styles
│   └── types.ts           # TypeScript types
├── astro.config.mjs       # Astro configuration
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── SPEC.md               # Project specification
├── CONTRIBUTING.md       # Contribution guidelines
└── README.md             # This file
```

---

## Configuration

### Astro Configuration

The project uses `astro.config.mjs` with the following settings:

```javascript
export default defineConfig({
  site: 'https://girishlade111.github.io',
  base: '/awesome-toolbox',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  },
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
```

### Key Configuration Options

| Option | Value | Description |
|--------|-------|-------------|
| `site` | `https://girishlade111.github.io` | Production site URL |
| `base` | `/awesome-toolbox` | Base path for deployment |
| `output` | `static` | Static site generation |
| `trailingSlash` | `always` | Trailing slash behavior |

### Environment Variables

Create a `.env` file for local development:

```bash
PUBLIC_SITE_URL=https://girishlade111.github.io
PUBLIC_BASE=/awesome-toolbox
```

---

## Adding Resources

To add a new resource, edit `src/data/resources.json`:

```json
{
  "id": "unique-id",
  "title": "Resource Name",
  "description": "Short description of the resource",
  "category": "agent|prompt|instruction|plugin|workflow",
  "author": "GitHub username",
  "authorUrl": "https://github.com/username",
  "tags": ["tag1", "tag2", "tag3"],
  "url": "https://link-to-resource",
  "addedAt": "2026-04-03",
  "stars": 100,
  "featured": false
}
```

### Resource Schema

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique identifier (slug format) |
| `title` | string | Yes | Resource name |
| `description` | string | Yes | Short description (max 200 chars) |
| `category` | enum | Yes | agent, prompt, instruction, plugin, workflow |
| `author` | string | Yes | GitHub username |
| `authorUrl` | string | Yes | Author's GitHub profile URL |
| `tags` | array | Yes | Array of tag strings |
| `url` | string | Yes | Link to the resource |
| `addedAt` | string | Yes | Date added (YYYY-MM-DD) |
| `stars` | number | No | Star count |
| `featured` | boolean | No | Featured status |

---

## Adding Tutorials

Create a new MDX file in `src/content/tutorials/`:

```mdx
---
title: "Tutorial Title"
description: "Brief description of what users will learn"
difficulty: "beginner|intermediate|advanced"
duration: "15 min"
category: "getting-started|advanced|integration"
author: "Your Name"
authorUrl: "https://github.com/username"
publishedDate: "2026-04-03"
tags: ["tag1", "tag2"]
---

## Introduction

Your tutorial content here...

## Prerequisites

- Requirement 1
- Requirement 2

## Step-by-Step Guide

### Step 1: Getting Started

Content for step 1...

### Step 2: Implementation

Content for step 2...

## Conclusion

Summary and next steps...
```

### Tutorial Frontmatter Schema

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | Tutorial title |
| `description` | string | Yes | Brief description |
| `difficulty` | enum | Yes | beginner, intermediate, advanced |
| `duration` | string | Yes | Estimated time (e.g., "15 min") |
| `category` | enum | Yes | getting-started, advanced, integration |
| `author` | string | Yes | Author name |
| `authorUrl` | string | Yes | Author profile URL |
| `publishedDate` | string | Yes | Publication date |
| `tags` | array | No | Tutorial tags |

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production (includes validation) |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |
| `npm run validate` | Validate resource data |

---

## Deployment

### Automatic Deployment (GitHub Actions)

The site is configured to deploy automatically to GitHub Pages via GitHub Actions.

**Workflow:**
1. Push to main branch
2. GitHub Actions triggers the deployment workflow
3. Site deploys to `https://girishlade111.github.io/awesome-toolbox/`

### Manual Deployment

```bash
# Build the project
npm run build

# Preview locally
npm run preview

# Deploy to GitHub Pages
# (handled automatically by GitHub Actions)
```

### GitHub Pages Settings

1. Go to Repository Settings
2. Navigate to Pages section
3. Select "GitHub Actions" as source
4. The workflow file is at `.github/workflows/deploy.yml`

---

## Stats

| Metric | Value |
|--------|-------|
| Total Resources | 50+ |
| Categories | 5 |
| Tutorials | 10+ |
| GitHub Stars | ~100 |
| Last Updated | 2026-04-03 |

### Resource Categories

- **AI Agents** - Autonomous AI agents for development tasks
- **Prompts** - Curated prompts for various AI models
- **Instructions** - Detailed instructions and guides
- **Plugins** - Browser extensions and IDE plugins
- **Workflows** - Automated workflows and templates

---

## Contributing

Contributions are welcome! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Ways to Contribute

- **Add new resources** - Submit via GitHub Issues
- **Improve documentation** - Update README or tutorials
- **Report bugs** - Create an issue
- **Suggest features** - Open a discussion
- **Share the project** - Star and recommend

### Submitting Resources

1. Open a GitHub Issue using the "Submit Resource" template
2. Fill in the required information
3. Wait for review and approval
4. Your resource will be added to the catalog

---

## License

MIT License - See [LICENSE](LICENSE) file for details.

---

## Live Site

🔗 **https://girishlade111.github.io/awesome-toolbox/**

---

## Support

- **Issues**: https://github.com/girishlade111/awesome-toolbox/issues
- **Discussions**: https://github.com/girishlade111/awesome-toolbox/discussions
- **RSS Feed**: https://girishlade111.github.io/awesome-toolbox/rss.xml

---

*Built with Astro and modern web technologies.*

# SPEC.md - Developer Tool Hub

## 1. Project Overview

- **Project Name**: DevHub - Developer Tool Community Hub
- **Type**: Static website (GitHub Pages)
- **Core Functionality**: A searchable, filterable catalog of community-contributed resources (agents, prompts, plugins) plus a Learning Hub for beginners
- **Target Users**: Developers looking to enhance their workflow with community tools

---

## 2. UI/UX Specification

### Layout Structure

**Pages:**
1. **Home** (`/`) - Hero + featured items + categories overview
2. **Browse** (`/browse`) - Full searchable/filterable catalog
3. **Learning Hub** (`/learn`) - Tutorials and guides
4. **Submit** (`/submit`) - Contribution form
5. **Item Detail** (modal or separate page) - Individual resource view

**Responsive Breakpoints:**
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Visual Design

**Color Palette:**
- Background: `#0a0a0f` (deep night)
- Surface: `#12121a` (card background)
- Surface Elevated: `#1a1a24`
- Primary: `#6366f1` (indigo)
- Primary Hover: `#818cf8`
- Accent: `#22d3ee` (cyan)
- Text Primary: `#f4f4f5`
- Text Secondary: `#a1a1aa`
- Text Muted: `#71717a`
- Border: `#27272a`
- Success: `#10b981`
- Warning: `#f59e0b`

**Typography:**
- Headings: `"Outfit", sans-serif` (weights: 600, 700)
- Body: `"DM Sans", sans-serif` (weights: 400, 500)
- Code/Mono: `"JetBrains Mono", monospace`
- H1: 3rem / 700
- H2: 2rem / 600
- H3: 1.5rem / 600
- Body: 1rem / 400
- Small: 0.875rem

**Spacing System:**
- Base unit: 4px
- Section padding: 80px vertical, 24px horizontal
- Card padding: 24px
- Gap between cards: 24px

**Visual Effects:**
- Card hover: translateY(-4px) + glow effect
- Subtle gradient mesh background on hero
- Glassmorphism on navigation: backdrop-blur(12px)
- Smooth transitions: 0.2s ease

### Components

**Navigation:**
- Fixed top, glassmorphic background
- Logo + nav links (Home, Browse, Learn, Submit)
- Mobile: hamburger menu

**Hero Section:**
- Large heading + subtext
- Search bar prominent
- Animated gradient background

**Resource Cards:**
- Icon/badge for type (agent/prompt/plugin)
- Title, description, author, tags
- Hover state with glow
- Click to view details

**Filter Sidebar:**
- Category checkboxes
- Tag filters
- Clear filters button

**Search Bar:**
- Full-text search
- Debounced input
- Search icon

**Learning Hub Cards:**
- Tutorial thumbnail/gradient
- Difficulty badge (Beginner/Intermediate/Advanced)
- Estimated time
- Author info

**Footer:**
- GitHub link
- Credits
- Navigation links

---

## 3. Functionality Specification

### Core Features

1. **Resource Catalog**
   - JSON-based data storage
   - Categories: Agents, Prompts, Instructions, Plugins
   - Each item: title, description, author, tags, category, link, date

2. **Search & Filter**
   - Real-time search by title/description/tags
   - Filter by category
   - Filter by tags
   - Sort by date/newest

3. **Learning Hub**
   - Tutorial entries with difficulty, duration, content
   - Categorized guides

4. **Contribute Flow**
   - GitHub Issues link for submissions
   - Contribution guidelines

### Data Structure

```json
{
  "resources": [
    {
      "id": "slug",
      "title": "Name",
      "description": "Short desc",
      "category": "agent|prompt|instruction|plugin",
      "author": "GitHub username",
      "authorUrl": "profile URL",
      "tags": ["tag1", "tag2"],
      "url": "link to resource",
      "addedAt": "2026-04-03"
    }
  ],
  "tutorials": [
    {
      "id": "slug",
      "title": "Tutorial Title",
      "description": "Description",
      "difficulty": "beginner|intermediate|advanced",
      "duration": "10 min",
      "category": "getting-started|advanced|integration"
    }
  ]
}
```

---

## 4. Acceptance Criteria

- [x] Home page loads with hero, search, and featured resources
- [x] Browse page shows all resources with working search
- [x] Filters (category, tags) work correctly
- [x] Learning Hub displays tutorials with difficulty badges
- [x] Submit page links to GitHub Issues
- [x] Responsive on mobile/tablet/desktop
- [x] Navigation works between all pages
- [x] Site builds successfully with Astro
- [x] GitHub Pages deployment config included
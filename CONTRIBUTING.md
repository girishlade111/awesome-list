# Contributing to DevHub

Thank you for your interest in contributing to DevHub! We welcome contributions from the community and are grateful for any help you can provide.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
  - [Submitting a Resource](#submitting-a-resource)
  - [Writing a Tutorial](#writing-a-tutorial)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Features](#suggesting-features)
- [Development Setup](#development-setup)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Style Guide](#style-guide)
- [License](#license)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the maintainers.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
   ```bash
   git clone https://github.com/yourusername/devhub.git
   cd devhub
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Start the development server**
   ```bash
   npm run dev
   ```
5. **Create a branch** for your changes
   ```bash
   git checkout -b feature/my-contribution
   ```

## How to Contribute

### Submitting a Resource

Resources are stored in `src/data/resources.json`. To add a new resource:

1. Open `src/data/resources.json`
2. Add a new entry to the `resources` array:

```json
{
  "id": "unique-resource-id",
  "title": "Resource Name",
  "description": "A clear, concise description of what this resource does.",
  "category": "agent|prompt|instruction|plugin|workflow",
  "author": "your-github-username",
  "authorUrl": "https://github.com/yourusername",
  "tags": ["tag1", "tag2", "tag3"],
  "url": "https://link-to-resource",
  "addedAt": "2026-04-03",
  "stars": 0
}
```

3. Test your changes locally: `npm run dev`
4. Commit and push your changes
5. Open a Pull Request

#### Resource Guidelines

- **Unique ID**: Use kebab-case (e.g., `code-review-agent`)
- **Title**: Clear, descriptive, and concise
- **Description**: 1-2 sentences explaining what the resource does
- **Category**: Must be one of the allowed values
- **Tags**: Add 3-5 relevant tags for discoverability
- **URL**: Link to the actual resource (GitHub repo, demo, docs)

### Writing a Tutorial

Tutorials are stored as Markdown files in `src/content/tutorials/`. To add a tutorial:

1. Create a new `.md` file in `src/content/tutorials/`
2. Include the required frontmatter:

```markdown
---
title: "Your Tutorial Title"
description: "A brief summary of what this tutorial covers."
difficulty: beginner|intermediate|advanced
duration: "30 min"
category: getting-started|tutorials|advanced|best-practices|case-studies|integration
author: your-github-username
publishedDate: 2026-04-03
---

# Your Tutorial Title

## Introduction

...

## Prerequisites

...

## Steps

...

## Conclusion

...
```

3. Write your tutorial content in Markdown
4. Test locally: `npm run dev`
5. Commit and open a Pull Request

#### Tutorial Guidelines

- Use clear, concise language
- Include code examples where appropriate
- Test all code snippets before submitting
- Use proper Markdown formatting
- Specify accurate difficulty level and duration

### Reporting Bugs

Found a bug? Please open an issue!

1. Check if the bug has already been reported
2. Open a new issue at [GitHub Issues](https://github.com/yourusername/devhub/issues)
3. Use the bug report template
4. Include as much detail as possible:
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Browser/OS information
   - Screenshots (if applicable)

### Suggesting Features

Have an idea for improvement? We'd love to hear it!

1. Open a new issue with the "feature request" label
2. Describe the problem your feature would solve
3. Explain your proposed solution
4. Provide examples or mockups if possible

## Development Setup

### Prerequisites

- Node.js 22.12.0 or higher
- npm or yarn

### Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Project Structure

```
├── src/
│   ├── components/       # Reusable Astro components
│   ├── content/          # Tutorial Markdown files
│   │   └── tutorials/
│   ├── data/             # JSON data files
│   │   ├── resources.json
│   │   └── collections.json
│   ├── layouts/          # Page layouts
│   ├── pages/            # Route pages
│   ├── styles/           # Global CSS
│   └── types.ts          # TypeScript type definitions
├── public/               # Static assets
├── .github/              # GitHub templates
│   ├── ISSUE_TEMPLATE/
│   └── workflows/
└── package.json
```

## Pull Request Guidelines

1. **Keep it focused**: One feature/fix per PR
2. **Follow the template**: Use the PR template provided
3. **Write clear descriptions**: Explain what and why, not how
4. **Test your changes**: Ensure the site builds and runs locally
5. **Update documentation**: If your change affects user-facing features
6. **Be responsive**: Address review comments promptly

### PR Checklist

- [ ] I have read the Contributing Guidelines
- [ ] I have followed the code style of this project
- [ ] I have tested my changes locally
- [ ] I have updated documentation (if needed)
- [ ] My changes generate no new warnings or errors

## Style Guide

### Code Style

- Use TypeScript for type safety
- Follow existing code formatting (Prettier config if added)
- Use meaningful variable and function names
- Keep components focused and reusable

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): description

Examples:
feat(resources): add code review agent
fix(browse): resolve pagination issue
docs(tutorials): update getting started guide
ci(workflow): add automated testing
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Test additions or changes
- `ci`: CI/CD configuration changes

### Resource Naming

- IDs: kebab-case (`code-review-agent`)
- Tags: lowercase, hyphenated (`unit-tests`, `best-practices`)
- Categories: lowercase, singular where applicable

## License

By contributing to DevHub, you agree that your contributions will be licensed under the [MIT License](LICENSE).

---

Thank you for contributing to DevHub! 🎉

If you have any questions, feel free to open an issue or reach out to the maintainers.

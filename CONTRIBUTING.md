# Contributing to rspress-language-tabs

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Testing](#testing)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Submitting a Pull Request](#submitting-a-pull-request)
- [Project Structure](#project-structure)

## Code of Conduct

Please be respectful and constructive in all interactions. We're here to build something great together.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/rspress-language-tabs.git
   cd rspress-language-tabs
   ```
3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/maccuaa/rspress-language-tabs.git
   ```

## Development Setup

This project uses [Bun](https://bun.sh/) as the package manager and runtime.

### Prerequisites

- Bun 1.3.1 or higher
- Node.js 20+ (for npm publishing)

### Install Dependencies

```bash
bun install
```

### Available Scripts

```bash
bun run dev       # Build in watch mode
bun run build     # Build the plugin
bun run lint      # Run Biome linter
bun run lint:commits  # Validate commit messages (last 10 commits)
```

### Test Project

The `test-project` directory contains an Rspress site for testing the plugin:

```bash
cd test-project
bun run dev       # Start dev server at http://localhost:3000
bun run build     # Build the test site
```

## Making Changes

1. **Create a feature branch** from `main`:

   ```bash
   git checkout -b feat/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. **Make your changes** following the code style:

   - We use [Biome](https://biomejs.dev/) for linting and formatting
   - Run `bun run lint` to check your code
   - TypeScript is required for all source files

3. **Test your changes**:
   - Build the plugin: `bun run build`
   - Test in the test-project: `cd test-project && bun run dev`
   - Verify icons display correctly in light and dark modes

## Testing

Currently, the project uses manual testing via the test-project. When adding new features:

1. Add examples to `test-project/docs/examples.mdx`
2. Test in both light and dark modes
3. Verify icons display for all added languages
4. Check that the build completes successfully

Future: We plan to add automated tests.

## Commit Message Guidelines

This project uses [Conventional Commits](https://www.conventionalcommits.org/) for automated changelog generation and semantic versioning.

## Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## Types

- **feat**: A new feature (triggers minor version bump)
- **fix**: A bug fix (triggers patch version bump)
- **docs**: Documentation only changes
- **style**: Changes that don't affect code meaning (formatting, etc.)
- **refactor**: Code change that neither fixes a bug nor adds a feature
- **perf**: Performance improvement
- **test**: Adding or updating tests
- **chore**: Maintenance tasks, dependency updates
- **ci**: CI/CD configuration changes
- **build**: Build system or dependency changes
- **revert**: Revert a previous commit

## Breaking Changes

Add `!` after the type or add `BREAKING CHANGE:` in the footer:

```bash
feat!: drop support for Node 16

BREAKING CHANGE: Node 16 is no longer supported
```

This triggers a major version bump.

## Examples

### Good ✅

```bash
feat: add dark mode support for language icons
fix: resolve black icons in dark mode
docs: update installation instructions
chore: upgrade dependencies
feat(icons)!: change icon API to support custom colors
```

### Bad ❌

```bash
Added new feature          # Missing type
fix: Fixed the bug.        # Capital letter, ends with period
updated readme             # Missing type
WIP                        # Not descriptive
```

## Validation

Commits are automatically validated in CI. Non-compliant commits will fail the build.

### Test locally (optional)

```bash
bun run lint:commits
```

### Skip validation (not recommended)

If you absolutely need to bypass validation for a merge commit or similar:

```bash
git commit -m "Merge branch 'feature'" --no-verify
```

Note: CI will still validate, so this only helps locally.

## Why This Matters

- 📝 **Automated Changelog**: Good commits = good changelog
- 🔢 **Semantic Versioning**: Commit types determine version bumps
- 🤖 **Release Automation**: Release Please uses commits to create releases
- 📖 **Clear History**: Easy to understand what changed and why

## Submitting a Pull Request

1. **Push your branch** to your fork:

   ```bash
   git push origin feat/your-feature-name
   ```

2. **Create a Pull Request** on GitHub:

   - Use a clear, descriptive title following conventional commit format
   - Describe what changes you made and why
   - Reference any related issues
   - Include screenshots for UI changes

3. **Wait for review**:

   - CI checks must pass (build, lint, commit messages)
   - A maintainer will review your PR
   - Address any feedback or requested changes

4. **Merge**:
   - Once approved, a maintainer will merge your PR
   - Your contribution will be included in the next release!

## Project Structure

```
rspress-language-tabs/
├── src/                          # Source code
│   ├── index.ts                  # Main entry point
│   ├── languageIcons.tsx         # Icon utilities and mappings
│   └── LanguageTabs.tsx          # Tab components
├── test-project/                 # Test Rspress site
│   ├── docs/                     # Test documentation
│   │   ├── index.mdx
│   │   └── examples.mdx
│   └── rspress.config.ts         # Test site config
├── .github/workflows/            # CI/CD pipelines
│   ├── build.yaml               # Build and lint checks
│   └── release-please.yml       # Automated releases
├── commitlint.config.js         # Commit message validation
├── release-please-config.json   # Release automation config
└── rslib.config.ts              # Build configuration
```

## Adding Support for New Languages

To add a new language icon:

1. Check if the icon exists in [Simple Icons](https://simpleicons.org/)
2. Add the import to `src/languageIcons.tsx`:
   ```typescript
   import { siNewLanguage } from "simple-icons";
   ```
3. Add the mapping in `languageToIconMap`:
   ```typescript
   newlang: siNewLanguage,
   ```
4. Update the type definition:
   ```typescript
   export type SupportedLanguage = keyof typeof languageToIconMap;
   ```
5. Add examples to `test-project/docs/examples.mdx`
6. Update README.md with the new language

## Questions?

- **Bug reports**: [Open an issue](https://github.com/maccuaa/rspress-language-tabs/issues)
- **Feature requests**: [Open an issue](https://github.com/maccuaa/rspress-language-tabs/issues)
- **General questions**: [Open a discussion](https://github.com/maccuaa/rspress-language-tabs/discussions)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

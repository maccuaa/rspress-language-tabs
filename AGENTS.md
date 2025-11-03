# AI Agent Instructions

This document provides context and guidelines for AI coding assistants (like GitHub Copilot, Cursor, Cline, etc.) working on this project.

## Project Overview

**rspress-language-tabs** is a TypeScript-based Rspress v2 component library that provides tabbed code examples with programming language icons from Simple Icons.

- **Language**: TypeScript (ESM)
- **Framework**: React 18/19
- **Build Tool**: Rslib (Rspack-based)
- **Package Manager**: Bun
- **Linter/Formatter**: Biome
- **Target**: Rspress v2.0.0-beta.35+

## Key Features

1. **Language Icons**: Automatically displays icons for 40+ programming languages
2. **Dark Mode Support**: Icons adjust colors for light/dark themes using Rspress's `useDark()` hook
3. **TypeScript**: Fully typed with exported type definitions
4. **Zero Config**: Works out of the box in Rspress projects

## Architecture

### Component Structure

```
LanguageTabs (Container)
  ├── Uses Rspress's <Tabs> component
  ├── Maps children to extract language info
  └── Renders language icons alongside tab labels

LanguageTab (Individual Tab)
  └── Wraps Rspress's <Tab> component
```

### Icon System

- Icons from `simple-icons` package (40+ languages)
- `getLanguageIcon()` function returns React SVG elements
- `adjustColorForDarkMode()` ensures visibility in dark mode
- Supports language aliases (js→javascript, py→python, etc.)

### Dark Mode

The plugin uses Rspress's `useDark()` hook to detect theme:

```typescript
const isDark = useDark();
const icon = getLanguageIcon(language, { isDark });
```

Color adjustment logic:

- Very dark colors (brightness < 50): Boost by 2.5x + add base 100
- Moderately dark (50-127): Boost by 2.0x
- Light colors: Slightly dim by 0.9x

## Development Guidelines

### Code Style

- **Biome** handles linting and formatting
- Use TypeScript for all source files
- Prefer functional components with hooks
- Export types for public API

### Commit Messages

**IMPORTANT**: This project uses **Conventional Commits** for automated releases.

Format: `<type>[optional scope]: <description>`

Common types:

- `feat`: New feature (minor version bump)
- `fix`: Bug fix (patch version bump)
- `docs`: Documentation changes
- `chore`: Maintenance tasks
- `refactor`: Code refactoring
- `perf`: Performance improvement

Breaking changes: Add `!` after type (e.g., `feat!: change API`)

**CI automatically validates** commit messages. Non-compliant commits will fail the build.

### Dependency Management

- Use **Bun catalog** for shared dependencies like `@rspress/core`
- Catalog defined in root `package.json`:
  ```json
  "workspaces": {
    "catalog": {
      "@rspress/core": "2.0.0-beta.35"
    }
  }
  ```
- Install deps: `bun add <package>`
- Update catalog version in one place to update everywhere

### Testing

Manual testing via `test-project`:

```bash
bun run build              # Build plugin
cd test-project
bun run dev               # Test at http://localhost:3000
```

Always test:

- Light and dark modes
- New language icons
- TypeScript compilation
- Build output

### Adding New Languages

1. Check icon exists: https://simpleicons.org/
2. Import from simple-icons
3. Add to `languageToIconMap`
4. Add common aliases
5. Add to `SupportedLanguage` type
6. Test in test-project
7. Update README

Example:

```typescript
import { siNewLang } from "simple-icons";

const languageToIconMap = {
  newlang: siNewLang,
  nl: siNewLang, // alias
  // ...
};
```

## CI/CD

### Workflows

1. **build.yaml**: Runs on PRs and pushes to main

   - Lints commit messages
   - Runs Biome linter
   - Builds the plugin
   - Verifies package contents

2. **release-please.yml**: Automated releases
   - Creates release PRs based on conventional commits
   - Auto-publishes to npm when merged
   - Uses npm Trusted Publishing (OIDC, no tokens needed)

### Release Process

1. Merge PRs with conventional commits to main
2. Release Please creates/updates a release PR
3. Review the changelog in the PR
4. Merge the release PR
5. GitHub Action automatically publishes to npm

**Do not**:

- Manually bump versions
- Create tags manually
- Run `npm publish` locally

## Important Files

- `src/languageIcons.tsx` - Icon utilities and mappings
- `src/LanguageTabs.tsx` - Main components
- `commitlint.config.js` - Commit validation (uses @commitlint/config-conventional)
- `release-please-config.json` - Release automation config
- `.release-please-manifest.json` - Current version tracking
- `rslib.config.ts` - Build configuration

## Common Tasks

### Add Dark Mode Support to Icons

Icons already support dark mode via `isDark` prop. The `useDark()` hook detects theme automatically.

### Update Rspress Version

Update catalog in root `package.json`, then run `bun install`.

### Fix Lint Errors

```bash
bun run lint
```

### Validate Commits Locally

```bash
bun run lint:commits  # Checks last 10 commits
```

## Gotchas

1. **Icon colors**: Very dark icons need special handling in dark mode. Use `adjustColorForDarkMode()`.
2. **Workspace structure**: Root package + test-project. Don't install deps in wrong location.
3. **Bun vs npm**: Use Bun for dev, but npm for publishing (configured in CI).
4. **Conventional commits**: Commit validation runs in CI. Bad commits = failed build.
5. **Release Please**: Only works with conventional commits. Random commits won't trigger releases.

## Resources

- [Rspress Documentation](https://rspress.dev/)
- [Rspress Runtime API](https://rspress.dev/api/client-api/api-runtime)
- [Simple Icons](https://simpleicons.org/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Release Please](https://github.com/googleapis/release-please)

## Questions?

Refer to CONTRIBUTING.md for detailed contribution guidelines, or check the README.md for usage examples.

# rspress-language-tabs

[![npm version](https://img.shields.io/npm/v/rspress-language-tabs.svg?style=flat-square)](https://www.npmjs.com/package/rspress-language-tabs)
[![npm downloads](https://img.shields.io/npm/dm/rspress-language-tabs.svg?style=flat-square)](https://www.npmjs.com/package/rspress-language-tabs)
[![license](https://img.shields.io/npm/l/rspress-language-tabs.svg?style=flat-square)](https://github.com/maccuaa/rspress-language-tabs/blob/main/LICENSE)

An Rspress v2 component library for creating tabbed code examples with programming language icons from [Simple Icons](https://simpleicons.org/).

## Features

- 🎨 **Language Icons** - Automatically displays icons for 40+ programming languages
- 🌓 **Dark Mode Support** - Icons automatically adjust colors for light/dark themes
- 🔄 **Easy to Use** - Simple MDX syntax similar to Rspress's built-in components
- 🎯 **TypeScript Support** - Fully typed with TypeScript
- 📦 **Zero Config** - Works out of the box
- ⚡️ **Rspress v2** - Built for Rspress v2.0.0-beta and above

## Installation

```bash
npm install rspress-language-tabs
# or
pnpm add rspress-language-tabs
# or
yarn add rspress-language-tabs
# or
bun add rspress-language-tabs
```

## Usage

Import the components in your MDX file:

````mdx
import { LanguageTabs, LanguageTab } from "rspress-language-tabs";

<LanguageTabs>
  <LanguageTab language="javascript">
```javascript
console.log("Hello from JavaScript!");
````

  </LanguageTab>
  <LanguageTab language="python">
```python
print("Hello from Python!")
```
  </LanguageTab>
  <LanguageTab language="go">
```go
fmt.Println("Hello from Go!")
```
  </LanguageTab>
</LanguageTabs>
```

## Supported Languages

The plugin automatically recognizes and displays icons for the following languages:

### Popular Languages

- JavaScript / TypeScript
- Python
- Java
- Go / Golang
- Rust
- C / C++ / C#
- PHP
- Ruby
- Swift
- Kotlin

### Scripting Languages

- Shell / Bash
- PowerShell
- Perl
- Lua

### Functional Languages

- Haskell
- Elixir
- Erlang
- OCaml
- Clojure
- Scala

### Other Languages

- Dart
- R
- Julia
- Nim
- Crystal
- Zig
- V / Vlang
- Groovy

### Markup & Data

- HTML
- CSS / SCSS / Sass / Less
- JSON
- XML
- YAML / YML
- TOML
- Markdown

## API

### `<LanguageTabs>`

The container component for language tabs.

```tsx
interface LanguageTabsProps {
  children: ReactNode;
}
```

### `<LanguageTab>`

Individual tab component that holds code for a specific language.

```tsx
interface LanguageTabProps {
  language: string;
  label?: string;
  children: ReactNode;
}
```

**Props:**

- `language` (required): The programming language name. Case-insensitive. Use common names like "javascript", "python", "go", etc.
- `label` (optional): Custom label to display instead of the capitalized language name.
- `children` (required): The content to display in the tab. Typically a code block.

## Examples

### Basic Example

````mdx
import { LanguageTabs, LanguageTab } from "rspress-language-tabs";

<LanguageTabs>
  <LanguageTab language="javascript">
```javascript
const greeting = "Hello World";
console.log(greeting);
````

  </LanguageTab>
  <LanguageTab language="typescript">
```typescript
const greeting: string = "Hello World";
console.log(greeting);
```
  </LanguageTab>
</LanguageTabs>
```

### Multiple Languages

````mdx
<LanguageTabs>
  <LanguageTab language="javascript">
```javascript
// JavaScript implementation
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));
````

  </LanguageTab>
  <LanguageTab language="python">
```python
# Python implementation
import requests

response = requests.get('https://api.example.com/data')
data = response.json()
print(data)

````
  </LanguageTab>
  <LanguageTab language="go">
```go
// Go implementation
package main

import (
    "encoding/json"
    "net/http"
)

func main() {
    resp, _ := http.Get("https://api.example.com/data")
    defer resp.Body.Close()

    var data interface{}
    json.NewDecoder(resp.Body).Decode(&data)
}
````

  </LanguageTab>
</LanguageTabs>
```

### Language Aliases

The plugin supports common aliases for languages:

- `js` → JavaScript
- `ts` → TypeScript
- `py` → Python
- `rs` → Rust
- `cpp` → C++
- `cs` → C#
- `rb` → Ruby
- `kt` → Kotlin
- `sh` → Shell/Bash

## Requirements

This package requires the following peer dependencies:

- **@rspress/core**: `^2.0.0` (v2.0.0-beta.35 or higher)
- **React**: `^18.0.0` or `^19.0.0`

Make sure these are installed in your project:

```bash
npm install @rspress/core react
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

For detailed contribution guidelines, see [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

MIT © Andrew MacCuaig

## Credits

- Icons provided by [Simple Icons](https://simpleicons.org/)
- Inspired by Rspress's [PackageManagerTabs](https://rspress.dev/guide/default-theme/builtin-components#packagemanagertabs) component

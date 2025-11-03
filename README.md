# rspress-language-tabs

An Rspress v2 component library for creating tabbed code examples with programming language icons from [Simple Icons](https://simpleicons.org/).

## Features

- 🎨 **Language Icons** - Automatically displays icons for 40+ programming languages
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

### `<Tab>`

Individual tab component that holds code for a specific language.

```tsx
interface TabProps {
  language: string;
  children: ReactNode;
}
```

**Props:**

- `language` (required): The programming language name. Case-insensitive. Use common names like "javascript", "python", "go", etc.
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

## Customization

### Custom Icons

If you need to use the icon utility directly:

```tsx
import { getLanguageIcon } from "rspress-language-tabs";

const icon = getLanguageIcon("javascript", { size: 24, color: "#f7df1e" });
```

## Browser Support

This package supports all modern browsers that support ES2021+ features.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © Andrew MacCuaig

## Credits

- Icons provided by [Simple Icons](https://simpleicons.org/)
- Inspired by Rspress's [PackageManagerTabs](https://rspress.dev/guide/default-theme/builtin-components#packagemanagertabs) component

Use Figtree as the default font in your Rspress website.

<!-- <p>
  <a href="https://npmjs.com/package/rspress-plugin-font-open-sans">
   <img src="https://img.shields.io/npm/v/rspress-plugin-font-open-sans?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" />
  </a>
    <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="license" />
</p> -->

## About

Figtree is a clean yet friendly geometric sans serif font for usage in web and mobile apps.

See [Google Fonts - Figtree](https://fonts.google.com/specimen/Figtree/about)

## Usage

Install:

```bash
npm add rspress-plugin-font-figtree -D
```

Add plugin to your `rspress.config.ts`:

```ts
// rspress.config.ts
import { pluginFontFigtree } from "rspress-plugin-font-figtree";

export default {
  plugins: [pluginFontFigtree()],
};
```

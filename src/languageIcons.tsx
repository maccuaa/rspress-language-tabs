import type { ReactNode } from "react";
import {
  type SimpleIcon,
  siApachegroovy,
  siBun,
  siC,
  siClojure,
  siCplusplus,
  siCrystal,
  siDart,
  siElixir,
  siErlang,
  siGnubash,
  siGo,
  siHaskell,
  siHtml5,
  siJavascript,
  siJson,
  siJulia,
  siKotlin,
  siLess,
  siLua,
  siMarkdown,
  siMysql,
  siNim,
  siOcaml,
  siOpenjdk,
  siPerl,
  siPhp,
  siPython,
  siR,
  siRuby,
  siRust,
  siSass,
  siScala,
  siSharp,
  siSwift,
  siToml,
  siTypescript,
  siV,
  siYaml,
  siZig,
} from "simple-icons";

/**
 * Props for customizing the appearance of language icons.
 *
 * @property size - The width and height of the icon in pixels (default: 16)
 * @property color - The fill color of the icon (default: icon's official color from Simple Icons)
 * @property isDark - Whether dark mode is enabled (default: false). When true, colors are adjusted for better visibility on dark backgrounds
 */
export interface IconProps {
  size?: number;
  color?: string;
  isDark?: boolean;
}

/**
 * Adjusts color brightness for dark mode.
 * Makes dark colors lighter and light colors slightly dimmer for better contrast.
 */
function adjustColorForDarkMode(hex: string): string {
  if (hex === "000000") {
    // Pure black - change to white for visibility
    return "#FFF";
  }

  // Convert hex to RGB
  const r = Number.parseInt(hex.substring(0, 2), 16);
  const g = Number.parseInt(hex.substring(2, 4), 16);
  const b = Number.parseInt(hex.substring(4, 6), 16);

  // Calculate perceived brightness (0-255)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // If color is too dark (< 128), lighten it significantly
  if (brightness < 128) {
    // For very dark colors, we need to add brightness, not just multiply
    // Use a combination of multiplying and adding to ensure even black becomes visible
    let newR: number;
    let newG: number;
    let newB: number;

    if (brightness < 50) {
      // Very dark colors: boost significantly and add a base amount
      const boost = 2.5;
      const baseAdd = 100;
      newR = Math.min(255, Math.round(r * boost + baseAdd));
      newG = Math.min(255, Math.round(g * boost + baseAdd));
      newB = Math.min(255, Math.round(b * boost + baseAdd));
    } else {
      // Moderately dark colors: just boost
      const boost = 2.0;
      newR = Math.min(255, Math.round(r * boost));
      newG = Math.min(255, Math.round(g * boost));
      newB = Math.min(255, Math.round(b * boost));
    }

    return `#${newR.toString(16).padStart(2, "0")}${newG.toString(16).padStart(2, "0")}${newB.toString(16).padStart(2, "0")}`;
  }

  // If color is already bright, slightly reduce brightness for better contrast
  const factor = 0.9;
  const newR = Math.round(r * factor);
  const newG = Math.round(g * factor);
  const newB = Math.round(b * factor);
  return `#${newR.toString(16).padStart(2, "0")}${newG.toString(16).padStart(2, "0")}${newB.toString(16).padStart(2, "0")}`;
}

function createIcon(iconData: SimpleIcon, props?: IconProps): ReactNode {
  const { size = 16, color, isDark = false } = props || {};

  // Determine the fill color
  let fillColor: string;
  if (color) {
    fillColor = color;
  } else if (isDark) {
    fillColor = adjustColorForDarkMode(iconData.hex);
  } else {
    fillColor = `#${iconData.hex}`;
  }

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={fillColor}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <title>{iconData.title}</title>
      <path d={iconData.path} />
    </svg>
  );
}

// Language name to simple-icons mapping
const languageToIconMap = {
  javascript: siJavascript,
  js: siJavascript,
  typescript: siTypescript,
  ts: siTypescript,
  bun: siBun,
  python: siPython,
  py: siPython,
  java: siOpenjdk,
  kotlin: siKotlin,
  kt: siKotlin,
  swift: siSwift,
  go: siGo,
  golang: siGo,
  rust: siRust,
  rs: siRust,
  c: siC,
  "c++": siCplusplus,
  cpp: siCplusplus,
  "c#": siSharp,
  csharp: siSharp,
  cs: siSharp,
  php: siPhp,
  ruby: siRuby,
  rb: siRuby,
  perl: siPerl,
  r: siR,
  scala: siScala,
  shell: siGnubash,
  bash: siGnubash,
  sh: siGnubash,
  sql: siMysql,
  dart: siDart,
  elixir: siElixir,
  ex: siElixir,
  erlang: siErlang,
  haskell: siHaskell,
  hs: siHaskell,
  lua: siLua,
  ocaml: siOcaml,
  clojure: siClojure,
  clj: siClojure,
  groovy: siApachegroovy,
  julia: siJulia,
  jl: siJulia,
  nim: siNim,
  crystal: siCrystal,
  cr: siCrystal,
  zig: siZig,
  v: siV,
  vlang: siV,
  html: siHtml5,
  scss: siSass,
  sass: siSass,
  less: siLess,
  json: siJson,
  yaml: siYaml,
  yml: siYaml,
  toml: siToml,
  markdown: siMarkdown,
  md: siMarkdown,
} as const;

/**
 * Supported programming language identifiers.
 * Use these values for the `language` prop in LanguageTab components.
 */
export type SupportedLanguage = keyof typeof languageToIconMap;

/**
 * Gets the appropriate icon for a programming language.
 *
 * Returns an SVG icon from Simple Icons for the specified language. If the language
 * is not found, returns a generic code brackets icon. Language names are case-insensitive
 * and support common aliases (e.g., "js" for "javascript", "py" for "python").
 *
 * Colors automatically adjust for dark mode when `isDark` is true, making dark colors
 * brighter and maintaining good contrast.
 *
 * @param language - The name or alias of the programming language (e.g., "javascript", "python", "go")
 * @param props - Optional properties to customize icon size, color, and dark mode
 * @returns A React SVG element representing the language icon
 *
 * @example
 * ```tsx
 * // Get a JavaScript icon with default settings
 * getLanguageIcon("javascript")
 *
 * // Get a Python icon with custom size and color
 * getLanguageIcon("python", { size: 24, color: "#3776AB" })
 *
 * // Get a Python icon optimized for dark mode
 * getLanguageIcon("python", { isDark: true })
 * ```
 */
export function getLanguageIcon(
  language: string,
  props?: IconProps,
): ReactNode {
  const normalizedLanguage = language.toLowerCase().trim();
  const iconData = languageToIconMap[normalizedLanguage as SupportedLanguage];

  if (!iconData) {
    // Return a generic code icon if no specific icon found
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width={props?.size || 16}
        height={props?.size || 16}
        fill="currentColor"
        style={{ display: "inline-block", verticalAlign: "middle" }}
      >
        <title>{language}</title>
        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
      </svg>
    );
  }

  return createIcon(iconData, props);
}

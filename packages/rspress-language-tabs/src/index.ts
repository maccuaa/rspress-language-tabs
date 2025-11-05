/**
 * rspress-plugin-language-tabs
 *
 * An Rspress v2 component library for creating tabbed code examples with
 * programming language icons from Simple Icons.
 *
 * @example
 * ```tsx
 * import { LanguageTabs, LanguageTab } from 'rspress-plugin-language-tabs';
 *
 * <LanguageTabs>
 *   <LanguageTab language="javascript">
 *     ```js
 *     console.log('Hello');
 *     ```
 *   </LanguageTab>
 *   <LanguageTab language="python">
 *     ```python
 *     print('Hello')
 *     ```
 *   </LanguageTab>
 * </LanguageTabs>
 * ```
 *
 * @packageDocumentation
 */

export type { LanguageTabProps, LanguageTabsProps } from "./LanguageTabs.js";
export { LanguageTab, LanguageTabs } from "./LanguageTabs.js";
export {
  getLanguageIcon,
  type IconProps,
  type SupportedLanguage,
} from "./languageIcons.js";

import { useDark } from "@rspress/core/runtime";
import { Tab as RspressTab, Tabs } from "@rspress/core/theme";
import {
  Children,
  type ComponentPropsWithRef,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";

import { getLanguageIcon, type SupportedLanguage } from "./languageIcons.js";

/**
 * Props for the LanguageTab component.
 *
 * @property language - The programming language identifier (e.g., "javascript", "python", "go")
 * @property children - The content to display inside the tab (typically code blocks)
 */
export interface LanguageTabProps extends ComponentPropsWithRef<"div"> {
  language: SupportedLanguage | (string & {});
  children: ReactNode;
}

/**
 * LanguageTab component for wrapping content in a language-specific tab.
 *
 * @param props - The tab properties including language and children
 * @returns A React element representing a single tab
 *
 * @example
 * ```tsx
 * <LanguageTab language="javascript">
 *   ```js
 *   console.log('Hello');
 *   ```
 * </LanguageTab>
 * ```
 */
export function LanguageTab({
  children,
  ...props
}: LanguageTabProps): ReactElement {
  return <RspressTab {...props}>{children}</RspressTab>;
}

/**
 * Props for the LanguageTabs component.
 *
 * @property children - One or more LanguageTab components to display as language options
 * @property groupId - Optional ID to sync tab selections across multiple LanguageTabs components. When multiple LanguageTabs use the same groupId, selecting a language in one will automatically select it in all others (default: "language-tabs")
 */
export interface LanguageTabsProps {
  children: ReactNode;
  groupId?: string;
}

interface LanguageInfo {
  language: string;
  icon: ReactNode;
}

function getLanguagesFromChildren(
  children: ReactElement<LanguageTabProps>[],
  isDark: boolean,
): LanguageInfo[] {
  return Children.map<LanguageInfo, ReactElement<LanguageTabProps>>(
    children,
    (child) => {
      if (isValidElement(child) && child.props.language) {
        const language = child.props.language;
        return {
          language,
          icon: getLanguageIcon(language, { isDark }),
        };
      }
      return { language: "", icon: null };
    },
  ).filter((item: LanguageInfo): item is LanguageInfo => item.language !== "");
}

/**
 * Container component for displaying tabbed code examples with language icons.
 *
 * Automatically displays programming language icons from Simple Icons alongside
 * each tab label. Supports 40+ programming languages out of the box.
 *
 * @param props - Component properties containing Tab children
 * @returns A React element with tabbed interface and language icons
 *
 * @example
 * ```tsx
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
 */
export function LanguageTabs({
  children: rawChildren,
  groupId,
}: LanguageTabsProps): ReactElement {
  const isDark = useDark();

  // Filter out whitespace-only children
  const children = Children.toArray(rawChildren).filter(
    (child) => !(typeof child === "string" && child.trim() === ""),
  ) as unknown as ReactElement<LanguageTabProps>[];

  const languages = getLanguagesFromChildren(children, isDark);

  return (
    <Tabs
      groupId={groupId ?? "language-tabs"}
      values={languages.map(({ language, icon }) => (
        <div
          key={language}
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 15,
          }}
        >
          {icon}
          <span style={{ marginLeft: 6, marginBottom: 2 }}>{language}</span>
        </div>
      ))}
    >
      {children}
    </Tabs>
  );
}

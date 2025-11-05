import { defineConfig } from "@rspress/core";

export default defineConfig({
  root: "docs",
  base: "/rspress-language-tabs/",
  title: "Rspress Language Tabs",
  description:
    "Rspress v2 component library for tabbed code examples with language icons",
  themeConfig: {
    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          items: [
            { text: "Installation", link: "/guide/installation" },
            { text: "Usage", link: "/guide/usage" },
            { text: "Supported Languages", link: "/guide/supported-languages" },
          ],
        },
      ],
    },
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/maccuaa/rspress-language-tabs",
      },
    ],
  },
});

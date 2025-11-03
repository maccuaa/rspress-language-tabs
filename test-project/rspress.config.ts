import { defineConfig } from "@rspress/core";

export default defineConfig({
  root: "docs",
  title: "Language Tabs Test",
  description: "Testing rspress-language-tabs",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/examples" },
    ],
  },
});

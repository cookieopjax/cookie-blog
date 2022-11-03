export default {
  title: "餅乾部落格",
  description: "Just playing around.",
  themeConfig: {
    siteTitle: "餅乾部落格",
    logo: "/logo.png",
    nav: [
      { text: "Vue", link: "/vue/index.html" },
      { text: "程式教學", link: "" },
      { text: "其他雜談", link: "" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present Herman Lee",
    },
    sidebar: {
      // This sidebar gets displayed when user is
      // under `guide` directory.
      "/vue/": [
        {
          text: "從零開始學Vue",
          items: [
            // This shows `/guide/index.md` page.
            { text: "Vue的版本與撰寫方式", link: "/vue/vue1.html" }, // /guide/index.md
            { text: "Hello World!", link: "/vue/vue2.html" }, // /guide/one.md
          ],
        },
      ],
    },
  },
};

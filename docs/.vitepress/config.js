export default {
  title: "餅乾部落格",
  description: "Just playing around.",
  themeConfig: {
    siteTitle: "餅乾部落格",
    logo: "/logo.png",
    nav: [
      { text: "Vue", link: "/vue/index.html" },
      { text: "程式教學", link: "/code/index.html" },
      { text: "其他雜談", link: "/others/index.html" },
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
      "/code/": [
        {
          text: "各種程式相關文章",
          items: [
            // This shows `/guide/index.md` page.
            { text: "C語言如何寫Function", link: "/code/c-function" }, // /guide/index.md
            { text: "C/C++指標完全解析", link: "/code/c-pointer" }, // /guide/index.md
            {
              text: "JavaScript var, let, const差別, Scope, Scope Chain, Closure",
              link: "/code/js0",
            },
          ],
        },
      ],
      "/others/": [
        {
          text: "雜談",
          items: [
            // This shows `/guide/index.md` page.
            { text: "如何做出讓人驚嘆的PPT", link: "/others/ppt" }, // /guide/index.md
          ],
        },
      ],
    },
    socialLinks: [{ icon: "github", link: "https://github.com/cookieopjax" }],
  },
};

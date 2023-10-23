// theme.config.tsx
import type { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import BackToTop from "./components/BackToTop";
import Image from "next/image";

// const TITLE_WITH_TRANSLATIONS = {
//   "en-US": "Savour Labs Docs",
//   "zh-CN": "Savour Labs 文档",
// };

const SEARCH_PLACEHOLDER_WITH_TRANSLATIONS = {
  "en-US": "Search documentation...",
  "zh-CN": "搜索文档...",
};

const TOC_TITLE_WITH_TRANSLATIONS = {
  "en-US": "On This Page",
  "zh-CN": "在本页",
};

const EDIT_THIS_PAGE_LINK_WITH_TRANSLATIONS = {
  "en-US": "Edit this page on GitHub →",
  "zh-CN": "在 GitHub 上编辑此页面 →",
};

const config: DocsThemeConfig = {
  // logo: () => {
  //   const { locale } = useRouter();
  //   return (
  //     <>
  //       <span style={{ marginLeft: ".4em", fontWeight: 800 }}>
  //         {TITLE_WITH_TRANSLATIONS[locale] || TITLE_WITH_TRANSLATIONS["en-US"]}
  //       </span>
  //     </>
  //   );
  // },
  logo: (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "5px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        alt="logo"
        src="/feature.png"
        width={30}
        height={30}
        style={{
          borderRadius: "100%",
        }}
      />
      <strong>Savour Labs Docs</strong>
    </div>
  ),
  project: {
    link: "https://github.com/savour-labs",
  },
  docsRepositoryBase: "https://github.com/savour-labs",
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Savour Labs Docs",
      };
    }
  },
  search: {
    placeholder: () => {
      const { locale } = useRouter();
      return (
        SEARCH_PLACEHOLDER_WITH_TRANSLATIONS[locale] ||
        SEARCH_PLACEHOLDER_WITH_TRANSLATIONS["en-US"]
      );
    },
  },
  toc: {
    title: () => {
      const { locale } = useRouter();
      return (
        TOC_TITLE_WITH_TRANSLATIONS[locale] ||
        TOC_TITLE_WITH_TRANSLATIONS["en-US"]
      );
    },
    extraContent: BackToTop,
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  editLink: {
    text: () => {
      const { locale } = useRouter();
      return (
        EDIT_THIS_PAGE_LINK_WITH_TRANSLATIONS[locale] ||
        EDIT_THIS_PAGE_LINK_WITH_TRANSLATIONS["en-US"]
      );
    },
  },
  feedback: {
    content: null,
    labels: "feedback",
  },
  direction: "ltr",
  navigation: {
    prev: true,
    next: true,
  },
  faviconGlyph: "📝",
  footer: {
    text: `Creative Commons Zero v1.0 Universal ${new Date().getFullYear()} © Savour Labs.`,
  },
  i18n: [
    { locale: "en-US", text: "English" },
    { locale: "zh-CN", text: "简体中文" },
  ],
};

export default config;

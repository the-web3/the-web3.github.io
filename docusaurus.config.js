const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const githubUrl = `https://github.com/savour-labs`;
const twitterUrl = `https://twitter.com/0xsavour`;
const discordUrl = `https://discord.gg/9N62gJgMVW`;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Savour Labs",
  tagline: "Focus on layer3 privacy decentralized social protocol, full chain game and web3 edu.",
  favicon: "img/logo.png",
  url: "https://savour-labs.github.io/",
  baseUrl: "/",
  organizationName: "Savour Labs",
  projectName: "Savour Labs Website",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-Hans"],
    localeConfigs: {
      en: {
        htmlLang: "en-GB",
      },
    },
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/savour-labs/savour-labs.github.io",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/savour-labs/savour-labs.github.io/tree/main/',
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Savour Labs",
        logo: {
          alt: "Savour Labs Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "dropdown",
            label: "Develop 🛠️",
            position: "left",
            items: [
              { to: "/docs/Documents/intro", label: "📄 Documents" },
              { to: "/docs/Tutorials/intro", label: "🎯 Tutorials" },
            ],
          },
          {
            to: "/docs/Documents/intro",
            label: "Ecosystem 🌍",
            position: "left",
          },
          {
            type: "dropdown",
            label: "Resources 📚",
            position: "left",
            items: [
              { to: "/blog", label: "📃 Blog" },
              { to: "/docs/Tutorials/intro", label: "📥 Downloads" },
              {
                label: "💬 Forum",
                href: "#",
              },
            ],
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: githubUrl,
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
          {
            href: twitterUrl,
            position: "right",
            className: "header-twitter-link",
            "aria-label": "Twitter",
          },
          {
            href: discordUrl,
            position: "right",
            className: "header-discord-link",
            "aria-label": "Discord",
          },
          {
            type: "search",
            position: "right",
          },
        ],
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      algolia: {
        apiKey: "580e9ffa904a6e675abc0316635de07a",
        appId: "05RI04NMBH",
        indexName: "test",
        contextualSearch: true,
      },
      footer: {
        style: "light",
        copyright: `Made with ❤️ by Savour Labs`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

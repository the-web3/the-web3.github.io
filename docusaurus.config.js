// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Savour Labs',
  tagline: '',
  favicon: 'img/logo.png',
  // themes: ['@docusaurus/theme-search-algolia'],
  // Set the production url of your site here
  url: 'https://savour-labs.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Savour Labs', // Usually your GitHub org/user name.
  projectName: 'Savour Labs Docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/savour-labs/savour-labs.github.io',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Savour Labs',
        logo: {
          alt: 'Savour Labs Logo',
          src: 'img/logo.png',
        },
        items: [
          {to: '/docs/🎯 Tutorials/intro', label: '🎯 Tutorials', position: 'left'},
          {to: '/docs/📄 Documents/intro', label: '📄 Documents', position: 'left'},       
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/savour-labs/savour-labs.github.io',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      colorMode: {
        defaultMode: 'light',
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
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/🎯 Tutorials/intro',
              },
              {
                label: 'Documents',
                to: '/docs/📄 Documents/intro',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/shijiangguo',
              },
              {
                label: 'X',
                href: 'https://twitter.com/seek_web3',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Savour Labs',
                href: 'https://github.com/savour-labs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Savour Labs. All rights reserved.`,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

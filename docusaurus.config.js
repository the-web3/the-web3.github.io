const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const githubUrl = 'https://github.com/eniac-x-labs';
const twitterUrl = 'https://twitter.com/0xEniac x';
const discordUrl = 'https://discord.gg/9N62gJgMVW';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Eniac x Labs',
  tagline: 'Focus on layer3 privacy decentralized social protocol, full chain game and web3 edu.',
  url: 'https://eniac-x-labs.github.io/',
  baseUrl: '/',
  organizationName: 'Eniac x Labs',
  projectName: 'Eniac x Labs Website',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
  },

  plugins: [
    async function myPlugin() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // eslint-disable-next-line global-require,import/no-extraneous-dependencies
          postcssOptions.plugins.push(require('tailwindcss'));
          // eslint-disable-next-line global-require,import/no-extraneous-dependencies
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/eniac-x-labs/eniac-x-labs.github.io/tree/main',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/eniac-x-labs/eniac-x-labs.github.io/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        apiKey: '580e9ffa904a6e675abc0316635de07a',
        appId: '05RI04NMBH',
        indexName: 'test',
        contextualSearch: true,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Eniac x Labs',
        logo: {
          alt: 'Eniac x Labs Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Develop 🛠️',
            position: 'left',
            items: [
              { to: '/docs/Documents/intro', label: '📄 Documents' },
              { to: '/docs/Tutorials/intro', label: '🎯 Tutorials' },
            ],
          },
          {
            to: '/docs/Download/intro',
            label: 'Ecosystem 🌍',
            position: 'left',
          },
          {
            type: 'dropdown',
            label: 'Resources 📚',
            position: 'left',
            items: [
              { to: '/blog', label: '📃 Blog' },
              {
                label: '💬 Forum',
                href: '#',
              },
            ],
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: githubUrl,
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          {
            href: twitterUrl,
            position: 'right',
            className: 'header-twitter-link',
            'aria-label': 'Twitter',
          },
          {
            href: discordUrl,
            position: 'right',
            className: 'header-discord-link',
            'aria-label': 'Discord',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'About',
            items: [
              {
                label: 'Docs',
                to: '/docs/Documents/intro',
              },
              {
                label: 'Tutorials',
                to: '/docs/Tutorials/intro',
              },
              {
                label: 'Ecosystem',
                to: '/docs/Download/intro',
              },
            ],
          },
          {
            title: 'Products',
            items: [
              {
                label: 'Base Bridge',
                to: '#',
              },
              {
                label: 'App Parapack',
                to: '#',
              },
              {
                label: 'App Chain',
                to: '#',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blogs',
                to: '/blog',
              },
              {
                label: 'Forum',
                to: '#',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ❤️ Eniac x Labs`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

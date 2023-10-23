// next.config.js
const withNextra = require("nextra")({
  theme: "nextra-theme-docs",

  themeConfig: "./theme.config.tsx",

  defaultShowCopyCode: true,

  latex: true,

  staticImage: true,
  defaultShowCopyCode: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  i18n: {
    locales: ["en-US", "zh-CN"],
    defaultLocale: "en-US",
    localeDetection: false,
  },
  output: 'export',
};

module.exports = withNextra(nextConfig);

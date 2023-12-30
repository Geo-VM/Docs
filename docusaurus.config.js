// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require('prism-react-renderer/themes/dracula');

module.exports = {
  title: 'Geo-VM',
  tagline: 'Tutorials & more, but not fully done yet.',
  url: 'https://docs.geo-vm.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img//geovm.png',
  organizationName: 'Geo-VM',
  projectName: 'Docs',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    algolia: {
      appId: '',
      apiKey: '',
      indexName: '',
      contextualSearch: true,
      externalUrlRegex: 'external\\.com|domain\\.com',
      replaceSearchResultPathname: {
        from: '/',
        to: '/',
      },
      searchParameters: {},
      searchPagePath: 'search',
    },
    navbar: {
      title: 'Geo-VM',
      logo: {
        alt: 'Geo-VM',
        src: 'img/geovm.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://geo-vm.net',
          label: 'Website',
          position: 'right',
        },
        {
          href: 'https://billing.geo-vm.net',
          label: 'Billing',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Tutorials',
              to: '/docs/category/-tutorials',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://geo-vm.net/discord',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/geovmnet',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/geoovm',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'VPS Panel',
              href: 'https://vps.geo-vm.net',
            },
            {
              label: 'Game Panel',
              href: 'https://gp.geo-vm.net',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Geo-VM',
            },
          ],
        },
      ],
      copyright: `Copyright © 2022 - ${new Date().getFullYear()} Geo-VM.net. - Built with Docusaurus.`,
    },
    prism: {
      theme: darkCodeTheme,
    },
  },
};
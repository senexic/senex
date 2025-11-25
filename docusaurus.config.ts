import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'SENEXIC Docs',
  tagline: 'The World\'s First Truly Decentralized AI Network',
  favicon: 'img/logo.svg',

  // Set the production url of your site here
  url: 'https://docs.senexic.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub Pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'senexic', // Usually your GitHub org/user name.
  projectName: 'senex', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/senexic/senex/tree/main/',
        },
        blog: false, // Disable blog for now as requested
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'SENEXIC Docs',
      logo: {
        alt: 'SENEXIC Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Documentation',
        },
        { to: '/docs/architecture', label: 'Architecture', position: 'left' },
        { to: '/docs/privacy', label: 'Privacy', position: 'left' },
        { to: '/docs/tokenomics', label: 'Economics', position: 'left' },
        { to: '/docs/aia', label: 'AIA', position: 'left' },
        {
          href: 'https://github.com/senexic/senex',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Vision',
          items: [
            {
              label: 'Innovation',
              to: '/docs/innovation',
            },
            {
              label: 'Roadmap',
              to: '/docs/roadmap',
            },
          ],
        },
        {
          title: 'Governance',
          items: [
            {
              label: 'DAO Structure',
              to: '/docs/governance',
            },
          ],
        },
        {
          title: 'Economy',
          items: [
            {
              label: 'Tokenomics',
              to: '/docs/tokenomics',
            },
          ],
        },
        {
          title: 'Architecture',
          items: [
            {
              label: 'System Overview',
              to: '/docs/architecture',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SENEXIC. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

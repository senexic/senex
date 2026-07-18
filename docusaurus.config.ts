import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'SENEXIC Docs',
  tagline: 'Sovereign intelligence, built around the owner',
  favicon: 'img/logo.svg',
  url: 'https://docs.senexic.io',
  baseUrl: '/',
  organizationName: 'senexic',
  projectName: 'senex',
  deploymentBranch: 'gh-pages',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

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
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/aiapng.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'SENEXIC',
      hideOnScroll: true,
      logo: {
        alt: 'SENEXIC',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Overview',
        },
        {
          to: '/docs/architecture/aia_agents',
          label: 'AIA',
          position: 'left',
        },
        {
          to: '/docs/architecture',
          label: 'Architecture',
          position: 'left',
        },
        {
          to: '/docs/privacy',
          label: 'Trust',
          position: 'left',
        },
        {
          to: '/docs/roadmap',
          label: 'Status',
          position: 'left',
        },
        {
          href: 'https://senexic.com',
          label: 'senexic.com',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Explore',
          items: [
            {label: 'AIA', to: '/docs/architecture/aia_agents'},
            {label: 'Architecture', to: '/docs/architecture'},
            {label: 'Current status', to: '/docs/roadmap'},
          ],
        },
        {
          title: 'Trust',
          items: [
            {label: 'Privacy posture', to: '/docs/privacy'},
            {label: 'Assurance', to: '/docs/privacy/compliance'},
            {label: 'Limitations', to: '/docs/privacy/threat_model'},
          ],
        },
        {
          title: 'Research',
          items: [
            {label: 'Innovation', to: '/docs/innovation'},
            {label: 'GENOME', to: '/docs/architecture/genome'},
            {label: 'Contribution economy', to: '/docs/tokenomics'},
          ],
        },
        {
          title: 'SENEXIC',
          items: [
            {label: 'Main website', href: 'https://senexic.com'},
            {label: 'Documentation', to: '/docs/'},
          ],
        },
      ],
      copyright: `Copyright © 2022 SENEXIC. Public
      capability and status documentation.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

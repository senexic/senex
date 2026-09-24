import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const siteUrl = 'https://docs.senexic.io';
const repoUrl = 'https://github.com/senexic/senex';

const config: Config = {
  title: 'SENEXIC Docs',
  tagline: 'Sovereign intelligence, built around the owner',
  favicon: 'img/logo.svg',
  url: siteUrl,
  baseUrl: '/',
  organizationName: 'senexic',
  projectName: 'senex',
  deploymentBranch: 'gh-pages',
  trailingSlash: true,

  // Every internal link, anchor, and route must resolve, or the build fails.
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  onDuplicateRoutes: 'throw',
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'throw',
      onBrokenMarkdownImages: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'SENEXIC',
        alternateName: 'SENEX Intelligent Chain',
        url: 'https://senexic.com',
        logo: `${siteUrl}/img/logo.svg`,
        sameAs: ['https://senexic.io', 'https://github.com/senexic'],
      }),
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: `${repoUrl}/edit/main/`,
          showLastUpdateTime: true,
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: null,
          priority: null,
          ignorePatterns: ['/search/**'],
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    '@docusaurus/theme-mermaid',
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: '/docs',
        highlightSearchTermsOnTargetPage: true,
        searchResultContextMaxLength: 60,
        explicitSearchResultPath: true,
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        // Retired routes stay reachable so external links never break.
        redirects: [
          {from: '/docs/tokenomics/distribution', to: '/docs/tokenomics/'},
          {from: '/docs/tokenomics/staking', to: '/docs/tokenomics/security/'},
          {from: '/docs/genome', to: '/docs/architecture/genome/'},
        ],
      },
    ],
  ],

  themeConfig: {
    image: 'img/aiapng.png',
    metadata: [
      {
        name: 'keywords',
        content:
          'SENEX, SENEXIC, AIA, local-first AI, proof of data, GENOME, ASHA, V1-testnet',
      },
      {name: 'twitter:card', content: 'summary_large_image'},
    ],
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },
    mermaid: {
      theme: {light: 'base', dark: 'base'},
      options: {
        themeVariables: {
          darkMode: true,
          background: '#0b1220',
          primaryColor: '#101a2b',
          primaryTextColor: '#eef4fb',
          primaryBorderColor: '#74ddcf',
          secondaryColor: '#18263d',
          tertiaryColor: '#0b1220',
          lineColor: '#74ddcf',
          clusterBkg: '#0e1726',
          clusterBorder: 'rgba(173, 194, 222, 0.25)',
          fontFamily: 'Inter, ui-sans-serif, sans-serif',
          fontSize: '15px',
        },
      },
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
        {to: '/docs/status', label: 'Status', position: 'left'},
        {to: '/docs/architecture/aia_agents', label: 'AIA', position: 'left'},
        {to: '/docs/architecture', label: 'Architecture', position: 'left'},
        {to: '/docs/privacy', label: 'Trust', position: 'left'},
        {to: '/docs/roadmap', label: 'Roadmap', position: 'left'},
        {type: 'search', position: 'right'},
        {href: 'https://senexic.io', label: 'Platform', position: 'right'},
        {href: 'https://senexic.com', label: 'senexic.com', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Start here',
          items: [
            {label: 'Overview', to: '/docs/'},
            {label: 'Current status', to: '/docs/status'},
            {label: 'Key concepts', to: '/docs/concepts'},
            {label: 'Roadmap', to: '/docs/roadmap'},
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
            {label: 'Proof of data', to: '/docs/thesis'},
            {label: 'GENOME', to: '/docs/architecture/genome'},
            {label: 'ASHA and contribution', to: '/docs/tokenomics'},
          ],
        },
        {
          title: 'SENEXIC',
          items: [
            {label: 'Main website', href: 'https://senexic.com'},
            {label: 'Platform', href: 'https://senexic.io'},
            {label: 'GitHub', href: 'https://github.com/senexic'},
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

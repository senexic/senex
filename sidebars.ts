import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'index',
    {
      type: 'category',
      label: 'Architecture',
      link: { type: 'doc', id: 'architecture/index' },
      collapsed: false,
      items: [
        'architecture/genome',
        'architecture/aia_agents',
        'architecture/intelligent_chain',
      ],
    },
    {
      type: 'category',
      label: 'AIA',
      link: { type: 'doc', id: 'aia/index' },
      items: [],
    },
    {
      type: 'category',
      label: 'Privacy',
      link: { type: 'doc', id: 'privacy/index' },
      items: [
        'privacy/technologies',
        'privacy/mathematical_guarantees',
        'privacy/threat_model',
        'privacy/compliance',
      ],
    },
    {
      type: 'category',
      label: 'Tokenomics',
      link: { type: 'doc', id: 'tokenomics/index' },
      items: [
        'tokenomics/distribution',
        'tokenomics/incentives',
        'tokenomics/security',
        'tokenomics/staking',
      ],
    },
    'governance',
    'applications',
    'scalability',
    'migration',
    'innovation',
    'roadmap',
  ],
};

export default sidebars;

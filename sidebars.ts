import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'index',
    {
      type: 'category',
      label: 'AIA and architecture',
      link: {type: 'doc', id: 'architecture/index'},
      collapsed: false,
      items: [
        'architecture/aia_agents',
        'architecture/intelligent_chain',
        'architecture/genome',
      ],
    },
    {
      type: 'category',
      label: 'Trust and privacy',
      link: {type: 'doc', id: 'privacy/index'},
      collapsed: false,
      items: [
        'privacy/technologies',
        'privacy/mathematical_guarantees',
        'privacy/threat_model',
        'privacy/compliance',
      ],
    },
    'tokenomics/index',
    'applications',
    'governance',
    'innovation',
    'scalability',
    'migration',
    'roadmap',
    {
      type: 'category',
      label: 'Research archive',
      collapsed: true,
      items: ['aia/index'],
    },
  ],
};

export default sidebars;

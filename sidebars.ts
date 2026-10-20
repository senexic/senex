import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'index',
    'status',
    'concepts',
    'roadmap',
    {
      type: 'category',
      label: 'AIA and architecture',
      link: {type: 'doc', id: 'architecture/index'},
      collapsed: false,
      items: [
        'architecture/aia_agents',
        'architecture/wallet_devices',
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
    {
      type: 'category',
      label: 'Research',
      collapsed: false,
      items: ['thesis', 'applications', 'scalability', 'experiments'],
    },
    {
      type: 'category',
      label: 'ASHA and contribution',
      link: {type: 'doc', id: 'asha/index'},
      collapsed: true,
      items: ['asha/incentives', 'asha/security'],
    },
    {
      type: 'category',
      label: 'Network policy',
      collapsed: true,
      items: ['governance', 'migration'],
    },
    {
      type: 'category',
      label: 'Research archive',
      collapsed: true,
      items: ['aia/index'],
    },
  ],
};

export default sidebars;

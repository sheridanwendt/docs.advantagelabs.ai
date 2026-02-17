import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['intro'],
    },
    {
      type: 'category',
      label: 'Onboarding',
      items: [
        'onboarding/google-business-profile',
        'onboarding/google-search-console',
        'onboarding/ga4-access',
        'onboarding/wordpress-access',
        'onboarding/webflow-access',
        'onboarding/shopify-access',
      ],
    },
  ],
};

export default sidebars;

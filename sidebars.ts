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
        {
          type: 'category',
          label: 'Google Assets',
          items: [
            'onboarding/google-business-profile',
            'onboarding/google-search-console',
            'onboarding/ga4-access',
          ],
        },
        {
          type: 'category',
          label: 'CMS (Choose One)',
          link: {
            type: 'generated-index',
            title: 'CMS Access (Choose One)',
            description:
              'You only need to complete ONE of the CMS options below — whichever platform your website uses.',
          },
          items: [
            'onboarding/wordpress-access',
            'onboarding/webflow-access',
            'onboarding/shopify-access',
            'onboarding/gohighlevel-access',
          ],
        },
      ],
    },
  ],
};

export default sidebars;

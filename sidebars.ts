import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Advantage Engine',
      items: [
        'overview',
        {
          type: 'category',
          label: 'Onboarding',
          items: [
            'advantage-engine/onboarding/gbp-access',
            'advantage-engine/onboarding/gsc-access',
            'advantage-engine/onboarding/ga4-access',
            {
              type: 'category',
              label: 'CMS (choose one)',
              link: {
                type: 'generated-index',
                title: 'CMS Access (Choose One)',
                description:
                  'You only need to complete ONE of the CMS options below — whichever platform your website uses.',
              },
              items: [
                'advantage-engine/onboarding/cms-choose-one/shopify',
                'advantage-engine/onboarding/cms-choose-one/gohighlevel',
                'advantage-engine/onboarding/cms-choose-one/wordpress',
                'advantage-engine/onboarding/cms-choose-one/webflow',
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;

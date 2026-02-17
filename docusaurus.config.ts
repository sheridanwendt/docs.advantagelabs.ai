import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Client Onboarding',
  tagline: 'Everything you need to get started',
  favicon: 'https://github.com/sheridanwendt/docs.advantagelabs.ai/blob/main/public/logo%20Advantage%20Labs.webp?raw=true',

  future: {
    v4: true,
  },

  url: 'https://docs.yourdomain.com',
  baseUrl: '/',

  organizationName: 'your-org',
  projectName: 'docs.advantagelabs.ai',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'Client onboarding documentation — everything you need to get started.',
      },
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/your-org/docs.advantagelabs.ai/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',

    metadata: [
      {name: 'keywords', content: 'onboarding, documentation, client, setup'},
      {name: 'og:type', content: 'website'},
    ],

    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    algolia: {
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_SEARCH_API_KEY',
      indexName: 'YOUR_INDEX_NAME',
      contextualSearch: true,
    },

    navbar: {
      hideOnScroll: true,
      title: 'Advantage Labs',
      logo: {
        alt: 'Advantage Labs',
        src: 'https://github.com/sheridanwendt/docs.advantagelabs.ai/blob/main/public/logo%20Advantage%20Labs.webp?raw=true',
        height: 40,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Advantage Labs. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

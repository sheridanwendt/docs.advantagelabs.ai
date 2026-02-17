import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Documentation',
  tagline: 'Getting started, onboarding, integrations, and more.',
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

  scripts: [
    {
      src: 'https://widgets.leadconnectorhq.com/loader.js',
      async: true,
      'data-resources-url':
        'https://widgets.leadconnectorhq.com/chat-widget/loader.js',
      'data-widget-id': '68fc5e2adea5c75e16144879',
    },
  ],

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
          sidebarId: 'advantageEngine',
          position: 'left',
          label: 'Docs',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Advantage Labs.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

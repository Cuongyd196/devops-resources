// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CuongITDocs',
  tagline: 'Thạc sĩ Khoa học Máy tính | DevOps Engineer | Lập trình viên',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://devops.cuongit.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Cuongyd196', // Usually your GitHub org/user name.
  projectName: 'devops-resources', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en'],
  // },
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        hashed: true,
      })
    ],
  ],

  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en'],
    localeConfigs: {
      vi: {
        // direction: 'rtl',
      },
      en: {
        htmlLang: 'en-GB',
      },
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        pages: {
          path: 'src/pages',
          routeBasePath: '/',
          include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          mdxPageComponent: '@theme/MDXPage',
          remarkPlugins: [import('remark-math')],
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
        },
        
      }),
    ],
  ],
  

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'CuongITDocs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'dockerSidebar',
            position: 'left',
            label: 'Docker',
          },
          {
            type: 'docSidebar',
            sidebarId: 'devopsSidebar',
            position: 'left',
            label: 'Roadmap',
          },
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/Cuongyd196/devops-resources',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      announcementBar: {
        id: 'supportus',
        content:
          '⭐️ If you like this website, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/Cuongyd196/devops-resources">GitHub</a>! ⭐️',
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Tài liệu & Blog',
            items: [
              {
                label: 'Lộ trình DevOps',
                to: '/docs/devops/intro',
              },
              {
                label: 'Blog Cá Nhân (CuongIT.net)',
                href: 'https://blog.cuongit.net',
              },
              {
                label: 'CV (TopCV Profile)',
                href: 'https://www.topcv.vn/p/cuongyd196',
              },
            ],
          },
          {
            title: 'Cộng đồng',
            items: [
              {
                label: 'Nhóm Dev, DevOps & AI',
                href: 'https://www.facebook.com/groups/863144604543563',
              },
              {
                label: 'Nhóm AI Thực Chiến',
                href: 'https://www.facebook.com/groups/863144604543563',
              },
              {
                label: 'Nhóm Zalo Tự Học AI',
                href: 'https://zalo.me/g/floiqs254',
              },
            ],
          },
          {
            title: 'Mạng xã hội',
            items: [
              {
                label: 'Facebook Cá Nhân',
                href: 'https://www.facebook.com/cuongppk',
              },
              {
                label: 'Page FB Cường IT',
                href: 'https://www.facebook.com/cuongit96',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Cuongyd196',
              },
              {
                label: 'TikTok',
                href: 'https://www.tiktok.com/@cuongit96',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@cuongit',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nguyễn Văn Cường. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    
};

module.exports = config;

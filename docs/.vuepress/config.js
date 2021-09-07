module.exports = {
  lang: 'zh-CN',
  title: 'hhp-tools',
  description: '项目开发工具集',
  head: [['link', { rel: 'icon', href: '/avatar.png' }]],
  themeConfig: {
    logo: '/avatar.png',
    navbar: [
      { text: '首页', link: '/' },
      {
        text: '工具',
        children: [{ text: '@hhp-tools/cli', link: '/tools/packages/cli.md' }],
      },
      {
        text: '配置',
        children: [
          { text: '@hhp-tools/prettier-config', link: '/tools/libs/prettier-config.md' },
          { text: '@hhp-tools/eslint-config', link: '/tools/libs/eslint-config.md' },
        ],
      },
      { text: 'GitHub', link: 'https://github.com/hhp1614/hhp-tools' },
    ],
  },
};

module.exports = {
  title: 'Tobias Krabel',
  description: 'Curious about the World',
  dest: 'public',
  plugins: [
    '@vuepress/last-updated',
    '@vuepress/nprogress',
    ['@vuepress/google-analytics', { ga: 'UA-169308149-1' }],
    ['@vuepress/search', { searchHotkeys: [] }],
  ],
  // head: [
  //   [
  //     'link',
  //     {
  //       rel: 'stylesheet',
  //       href: 'https://gitcdn.xyz/repo/kiwicopple/assets/master/public/css/circular.css',
  //     },
  //   ],
  // ],
  themeConfig: {
    nav: [
      { text: '✍️ Blog', link: '/blog/' },
      { text: '💭 Principles', link: '/principles/' },
      { text: '🧠 Knowledge', link: '/knowledge/' },
      { text: '📚 Summaries', link: '/summaries/' },
    ],
    sidebar: {
      '/blog/': [
        'references',
        'impact',
      ],
      '/principles/': [
        'life',
        'business',
        'tech'
      ],
      '/knowledge/': [
        {
          title: 'Tech',
          collapsable: false,
          children: [
            'tech/awesome-list',
            'tech/seo',
            'tech/pip',
            'tech/jupyter',
            'tech/venvs',
            'tech/docker',
            'tech/bash-profile',
            'tech/git',
            'tech/regex',
            'tech/vscode-snippets',
            'tech/computer-science',
            'tech/audio-video',
          ],
        },
        {
          title: 'Business',
          collapsable: false,
          children: [
            'business/four-channel-framework',
            'business/marketing',
            'business/pricing',
          ],
        },
      ],
      '/summaries/': [
        'four-hour-work-week-tim-ferris'
      ],
    },
    docsRepo: 'https://github.com/tkrabel/tobias.krabel/',
    docsDir: 'docs',
    editLinks: true,
    lastUpdated: 'Last Updated',
  },
}

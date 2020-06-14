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
      { text: 'Blog', link: '/blog/' },
      { text: 'Principles', link: '/principles/' },
      { text: 'Knowledge', link: '/knowledge/' },
      { text: 'Summaries', link: '/summaries/' },
    ],
    sidebar: {
      '/blog/': [
        // 'test-post',
      ],
      '/principles/': [
        'life',
        'business',
        'tech'
      ],
      '/knowledge/': [
        {
          title: 'Code Snippets',
          collapsable: true,
          children: [
            {
              title: 'Bash',
              collapsable: true,
              children: [
                'code_snippets/bash/venvs',
                'code_snippets/bash/pip',
                'code_snippets/bash/jupyter',
                'code_snippets/bash/docker',
                'code_snippets/bash/other',
              ]
            },
            // 'philosophy/ethics',
            // 'philosophy/buddhism',
            // 'philosophy/stoicism',
            // 'philosophy/desire',
          ],
        },
      ],
      '/summaries/': [
        'four-hour-work-week-tim-ferris'
      ],
    },
    // docsRepo: 'https://github.com/kiwicopple/paul.copplest.one/',
    docsDir: 'docs',
    editLinks: true,
    lastUpdated: 'Last Updated',
  },
}

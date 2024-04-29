import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Jia him",
  description: "Jia him 的个人记录",
  head: [
    [
      'script',
      {
        defer: '',
        dataDomain: 'jiahim.com',
        src: 'https://analytics.gptnb.xyz/js/script.js'
      }]
  ],
  themeConfig: {
    logo: '/images/me-gray.jpg',

    nav: [
      { text: '主页', link: '/' },
    ],

    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    sidebar: [
      {
        text: '目录',
        items: [
          {
            text: '读书笔记', items: [
              { text: '领域驱动设计：软件核心复杂性应对之道', link: '../book/领域驱动设计：软件核心复杂性应对之道' }
            ]
          },
          {
            text: '技术文章', items: [
              { text: '如何使用 Vitepress 搭建个人博客 （小白版本）', link: '/skill/how-to-use-vitepress-1' }
            ]
          },
          { text: '随笔', link: '/essay/index' },
          {
            text: '经验之谈', items: [
              {
                text: '2024年度', items: [
                  { text: '简单介绍', link: '/work/index' },
                  {
                    text: '4 月', items: [
                      { text: '29号-在接手的项目中，发现开发环境使用了压缩版本的 vue', link: '/work/2024042901' }
                    ]
                  }
                ]
              }
            ]
          },
          { text: '网站数据', link: '/my-site' }
        ]
      }
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭搜索'
            }
          }
        },
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xiexin12138' }
    ],
    lastUpdated: {
      text: "最后更新时间" // 启用最后更新时间的显示，并且使用该文本替换
    },

    outline: {
      level: [2, 4], // 显示 2-4 层级的 title 作为右侧目录
      label: "目录"
    }
  },

})

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
    logo: '/images/me.jpg',

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
            text: '读书笔记', link: '/book/index'
          },
          {
            text: '技术文章', items: [
              { text: '如何使用 Vitepress 搭建个人博客 （小白版本）', link: '/skill/how-to-use-vitepress-1' }
            ]
          },
          { text: '随笔', link: '/essay/index' }
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
        locales: {
          en: {
            translations: {

              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search'
              },
              modal: {
                noResultsText: 'No results for',
                resetButtonTitle: 'Reset search',
                footer: {
                  selectText: 'to select',
                  navigateText: 'to navigate',
                  closeText: 'to close'
                }
              }
            }
          }
        }
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
      label: "内容大纲"
    }
  },

  locales: {
    root: {
      label: ' 简体中文',
      lang: 'zh',
    },
    en: {
      label: ' English',
      lang: 'en', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      link: '/en/', // 默认 /fr/ -- 显示在导航栏翻译菜单上，可以是外部的
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/index' },
        ],

        sidebarMenuLabel: ' Menu',
        returnToTopLabel: 'Return to top',


        docFooter: {
          prev: 'Previous page',
          next: 'Next page'
        },

        sidebar: [
          {
            text: 'Contents',
            items: [
              { text: 'Reading Notes', link: '/en/book/index' },
              {
                text: 'Technical Article', items: [
                  { text: 'docs/en/skill/how-to-use-vitepress-1.md', link: '/en/skill/how-to-use-vitepress-1' }
                ]
              },
              { text: 'Essay', link: '/en/essay/index' }
            ]
          }
        ],

        lastUpdated: {
          text: "Last updated" // 启用最后更新时间的显示，并且使用该文本替换
        },

        outline: {
          level: [2, 4], // 显示 2-4 层级的 title 作为右侧目录
          label: "内容大纲"
        }
      }
    }
  },
})

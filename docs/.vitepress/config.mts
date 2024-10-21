import { defineConfig, DefaultTheme } from 'vitepress'
import fs from 'node:fs'
import path from 'node:path'

// 函数用于读取文件夹内容并生成侧边栏项
function generateSidebarItems(dir) {
  const items: DefaultTheme.SidebarItem[] = []
  const files = fs.readdirSync(dir).sort((a, b) => b.localeCompare(a)) // 按文件名降序排列

  files.forEach(file => {
    if (file.endsWith('.md')) {
      const filePath = path.join(dir, file)
      const content = fs.readFileSync(filePath, 'utf-8')
      const firstLine = content.split('\n')[0].replace(/^#\s*/, '') // 去掉开头的 # 号
      const date = file.split('.')[0] // 假设文件名格式为 YYYY-MM-DD.md

      items.push({
        text: firstLine || date,
        link: `/work/${date}`
      })
    }
  })

  return items
}

// 生成按月份分组的侧边栏项
function generateMonthlyItems(items) {
  const monthlyItems = {}
  
  items.forEach(item => {
    const [year, month, day] = item.link.split('/').pop().split('-')
    if (year && month && day) {
      const title = `[${year}-${month}-${day}] `
      item.text = title + item.text
    }
    // if (!monthlyItems[yearMonth]) {
    //   monthlyItems[yearMonth] = []
    // }
    // monthlyItems[yearMonth].push(item)
  })

  return items
}

// 生成经验之谈部分的侧边栏配置
const workItems = generateSidebarItems(path.resolve(__dirname, '../work'))
const monthlyWorkItems = generateMonthlyItems(workItems)

const sidebar: DefaultTheme.Sidebar = {
  '/work/': [
    {
      text: 'Work',
      items: [] as DefaultTheme.SidebarItem[] // 明确定义items的类型
    }
  ]
}

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
              { text: 'ES6细节备忘录', link: '/skill/es6' },
              { text: 'NPM 报错集锦', link: '/skill/npm' },
              { text: 'Vercel 踩坑记录', link: '/skill/vercel-record' }
            ]
          },
          { text: '随笔', link: '/essay/index' },
          {
            text: '经验之谈',
            items: monthlyWorkItems as DefaultTheme.SidebarItem[]
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
    // lastUpdated: {
    //   text: "最后更新时间" // 启用最后更新时间的显示，并且使用该文本替换
    // },

    outline: {
      level: [2, 4], // 显示 2-4 层级的 title 作为右侧目录
      label: "目录"
    }
  },

})

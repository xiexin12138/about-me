import { defineConfig, type DefaultTheme } from 'vitepress'
import { generateSidebarItems } from './tools'
import path from 'node:path'

export const zh = defineConfig({
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
    ],
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    sidebar: getSideBar()
  }
})

export const search: DefaultTheme.LocalSearchOptions['locales'] = {
  root: {// 设置为 ‘root’ 以便默认使用中文
    translations: {
      button: {
        buttonText: '搜索',
        buttonAriaLabel: '搜索'
      },
      modal: {
        displayDetails: '显示详细列表',
        resetButtonTitle: '重置搜索',
        backButtonTitle: '关闭搜索',
        noResultsText: '没有结果',
        footer: {
          selectText: '选择',
          selectKeyAriaLabel: '输入',
          navigateText: '导航',
          navigateUpKeyAriaLabel: '上箭头',
          navigateDownKeyAriaLabel: '下箭头',
          closeText: '关闭',
          closeKeyAriaLabel: 'esc'
        }
      }
    }
  }
}

function getSideBar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '目录',
      items: [
        {
          text: '读书笔记',
          items: generateSidebarItems(path.resolve(__dirname, '../../zh/book')) as DefaultTheme.SidebarItem[]
        },
        {
          text: '技术文章',
          items: generateSidebarItems(path.resolve(__dirname, '../../zh/skill')) as DefaultTheme.SidebarItem[]

        },
        {
          text: '随笔',
          items: generateSidebarItems(path.resolve(__dirname, '../../zh/essay')) as DefaultTheme.SidebarItem[]
        },
        {
          text: '经验之谈',
          items: generateSidebarItems(path.resolve(__dirname, '../../zh/work')) as DefaultTheme.SidebarItem[]
        },
        { text: '网站数据', link: '/my-site' }
      ]
    }
  ]
}
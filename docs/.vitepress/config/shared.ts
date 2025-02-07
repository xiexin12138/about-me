import { defineConfig } from 'vitepress'
import { search as zhSearch } from './zh'
// import { search as enSearch } from './en'

export const shared = defineConfig({
  title: "Jia him",
  description: "Jia him 的个人记录",

  // rewrites: {
  //   'zh/:rest*': ':rest*'
  // },
  cleanUrls: true,
  metaChunk: true,
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
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xiexin12138' }
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          ...zhSearch,
          // ...enSearch,
        }
      }
    },
    logo: '/images/me-gray.jpg',

    outline: {
      level: [2, 4], // 显示 2-4 层级的 title 作为右侧目录
      label: "目录"
    }
  },
  sitemap: {
    hostname: 'https://jiahim.com'
  }
})
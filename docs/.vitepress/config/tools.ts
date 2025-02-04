import { DefaultTheme } from 'vitepress'

import fs from 'node:fs'
import path from 'node:path'

// 函数用于读取文件夹内容并生成侧边栏项
function generateSidebarItems(dir) {
  const items: DefaultTheme.SidebarItem[] = []
  const files = fs.readdirSync(dir).sort((a, b) => b.localeCompare(a)) // 按文件名降序排列

  files.forEach(file => {
    if (file.endsWith('.md') && file !== 'index.md') {
      const filePath = path.join(dir, file)
      const content = fs.readFileSync(filePath, 'utf-8')
      const firstLine = content.split('\n')[0].replace(/^#\s*/, '') // 去掉开头的 # 号
      const date = file.split('.')[0] // 假设文件名格式为 YYYY-MM-DD.md

      items.push({
        text: firstLine || date,
        link: dir + `/${date}`
      })
    }
  })

  return items
}

export {
  generateSidebarItems
}
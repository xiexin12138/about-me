import { DefaultTheme } from 'vitepress'

import fs from 'node:fs'
import path from 'node:path'

// 函数用于读取文件夹内容并生成侧边栏项
function generateSidebarItems(dir: string): DefaultTheme.SidebarItem[] {
  const items: DefaultTheme.SidebarItem[] = []
  const docsDir = path.resolve(__dirname, '../..')
  const files = fs.readdirSync(dir).sort((a, b) => b.localeCompare(a))

  files.forEach(file => {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      // 递归处理子目录
      const subItems = generateSidebarItems(fullPath)
      
      // 如果子目录下有内容（md文件或包含md文件的子目录），则添加当前目录
      if (subItems.length > 0) {
        items.push({
          text: file,
          collapsed: false,
          items: subItems
        })
      }
    } else if (file.endsWith('.md') && file !== 'index.md') {
      const content = fs.readFileSync(fullPath, 'utf-8')
      const firstLine = content.split('\n')[0].replace(/^#\s*/, '')
      const date = file.split('.')[0]
      const relativePath = '/' + path.relative(docsDir, dir)

      items.push({
        text: firstLine || date,
        link: `${relativePath}/${date}`
      })
    }
  })

  return items
}

export {
  generateSidebarItems
}
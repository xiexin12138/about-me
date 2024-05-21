# Vercel 踩坑记录

## Vite+Vue3 的项目，用默认的配置，部署后发现访问首页进行跳转没问题，但是刷新就会出现404
首先，这是因为在项目中的 vue-router 使用了 history 模式
```ts
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // 使用了 History 模式
  // ...其他配置
})
```

查阅[官方文档](https://router.vuejs.org/zh/guide/essentials/history-mode.html#Vercel)可知，需要在项目根目录下添加一个 Vercel 的配置文件 vercel.json，配置后重新部署即可
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```
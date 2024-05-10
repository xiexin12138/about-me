# Vercel 踩坑记录

## Vite+Vue3 的项目，用默认的配置，部署后发现访问首页进行跳转没问题，但是刷新就会出现404
需要在项目根目录下添加一个 Vercel 的配置文件 vercel.json，配置后重新部署即可
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```
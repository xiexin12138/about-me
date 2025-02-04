---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: Jia him
  text: "的个人博客"
  # tagline: Jiǎ hīm 是我名字潮汕话的发音
  image: /images/me.jpg
  actions:
    - theme: brand
      text: 经验之谈
      link: /zh/work/index
    - theme: alt
      text: 网站数据
      link: /my-site

features:
  - icon: 📚
    title: 读书笔记
    details: 读一本，写一篇，画一图
    link: /zh/book/index
  - icon: 💻
    title: 技术文章
    details: 费曼学习法 + 温故而知新
    link: /zh/skill/index
  - icon: ✍️
    title: 随笔
    details: 往前看是迷茫，往后看是命运
    link: /zh/essay/index
---

<!-- <script>
  if(typeof window !== 'undefined') {
    window.addEventListener('mouseover', initLandbot, { once: true });
    window.addEventListener('touchstart', initLandbot, { once: true });
    var myLandbot;
    function initLandbot() {
      if (!myLandbot) {
        var s = document.createElement('script');s.type = 'text/javascript';s.async = true;
        s.addEventListener('load', function() {
          var myLandbot = new Landbot.Livechat({
            configUrl: 'https://storage.googleapis.com/landbot.site/v3/H-2225053-JWMV6S7DRVUG7CUC/index.json',
          });
        });
        s.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.js';
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
      }
    }
  }
</script> -->
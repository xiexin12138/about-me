<template>
  <div style="margin-top: 24px">
    <Giscus
      id="comments"
      repo="xiexin12138/about-me"
      repoid="R_kgDOLyaSCg"
      category="General"
      categoryid="DIC_kwDOLyaSCs4CmvhT"
      mapping="pathname"
      term="Welcome to giscus!"
      reactionsenabled="1"
      emitmetadata="0"
      inputposition="top"
      loading="lazy"
      :theme="isDark ? 'dark' : 'light'"
      :key="route.path"
    ></Giscus>
  </div>
</template>

<script setup>
import Giscus from "@giscus/vue";
import { useRoute, useData } from "vitepress";

const route = useRoute();
const { isDark } = useData();
</script>

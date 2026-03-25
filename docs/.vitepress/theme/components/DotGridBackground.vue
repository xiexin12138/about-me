<template>
  <div v-if="isHomePage" class="dot-grid-background" :style="{ backgroundColor: colors.bg }">
    <!-- 底层暗点 -->
    <div class="dot-layer dot-layer-dim" :style="dimLayerStyle"></div>

    <!-- 上层亮点（带遮罩） -->
    <div
      ref="brightLayer"
      class="dot-layer dot-layer-bright"
      :style="brightLayerStyle"
    ></div>

    <!-- 顶部渐变遮罩 -->
    <div class="top-gradient" :style="topGradientStyle"></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useData, useRoute } from 'vitepress'

const { isDark } = useData()
const route = useRoute()
const brightLayer = ref(null)

// 检测是否为首页
const isHomePage = computed(() => {
  const path = route.path
  return path === '/' || path === '/zh/' || path === '/index.html' || path === '/zh/index.html'
})

// 检测是否为移动端
const isMobile = ref(false)

// 响应式配置
const config = computed(() => {
  if (isMobile.value) {
    return {
      spacing: '30px',
      dotSize: '1.5px',
      maskRadius: '120px'
    }
  }
  return {
    spacing: '20px',
    dotSize: '2px',
    maskRadius: '160px'
  }
})

// 颜色方案
const colors = computed(() => {
  if (isDark.value) {
    return {
      bg: '#1a1a1a',
      dimDot: 'rgba(61, 61, 61, 1)',
      brightDot: 'rgba(255, 255, 255, 1)'
    }
  }
  return {
    bg: '#ffffff',
    dimDot: 'rgba(180, 180, 180, 0.8)',
    brightDot: 'rgba(80, 100, 255, 1)'
  }
})

// 底层暗点样式
const dimLayerStyle = computed(() => ({
  background: `radial-gradient(circle, ${colors.value.dimDot} ${config.value.dotSize}, transparent ${config.value.dotSize})`,
  backgroundSize: `${config.value.spacing} ${config.value.spacing}`
}))

// 上层亮点样式
const brightLayerStyle = computed(() => ({
  background: `radial-gradient(circle, ${colors.value.brightDot} ${config.value.dotSize}, transparent ${config.value.dotSize})`,
  backgroundSize: `${config.value.spacing} ${config.value.spacing}`
}))

// 顶部渐变遮罩样式
const topGradientStyle = computed(() => ({
  background: `linear-gradient(to bottom, ${colors.value.bg} 0%, transparent 100%)`
}))

// 性能优化：使用 RAF
let rafId = null

// 更新遮罩位置
const updateMask = (x, y) => {
  if (!brightLayer.value) return

  cancelAnimationFrame(rafId)
  rafId = requestAnimationFrame(() => {
    const maskValue = `radial-gradient(${config.value.maskRadius} at ${x}px ${y}px, black 30%, transparent 70%)`
    brightLayer.value.style.maskImage = maskValue
    brightLayer.value.style.webkitMaskImage = maskValue // Safari 兼容
  })
}

// 鼠标移动处理
const handleMouseMove = (e) => {
  updateMask(e.clientX, e.clientY)
}

// 触摸移动处理（移动端）
const handleTouchMove = (e) => {
  if (e.touches.length > 0) {
    const touch = e.touches[0]
    updateMask(touch.clientX, touch.clientY)
  }
}

// 检测移动端
const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  if (!isHomePage.value) return

  checkMobile()
  window.addEventListener('resize', checkMobile)

  // 桌面端使用 mousemove，移动端使用 touchmove
  if (isMobile.value) {
    document.addEventListener('touchmove', handleTouchMove, { passive: true })
  } else {
    document.addEventListener('mousemove', handleMouseMove)
  }
})

onUnmounted(() => {
  if (rafId) {
    cancelAnimationFrame(rafId)
  }
  window.removeEventListener('resize', checkMobile)
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('touchmove', handleTouchMove)
})
</script>

<style scoped>
.dot-grid-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
  transition: background-color 0.3s ease;
}

.dot-layer {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.dot-layer-dim {
  z-index: 1;
}

.dot-layer-bright {
  z-index: 2;
  /* 初始状态：完全隐藏 */
  mask-image: radial-gradient(0px at 50% 50%, black 30%, transparent 70%);
  -webkit-mask-image: radial-gradient(0px at 50% 50%, black 30%, transparent 70%);
  /* 性能优化 */
  will-change: mask-image;
}

/* 顶部渐变遮罩 */
.top-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120px;
  z-index: 3;
  pointer-events: none;
  transition: background 0.3s ease;
}

/* 移动端优化 */
@media (max-width: 768px) {
  .dot-grid-background {
    /* 移动端可以选择降低透明度 */
    opacity: 0.8;
  }

  .top-gradient {
    /* 移动端渐变区域稍短 */
    height: 100px;
  }
}
</style>

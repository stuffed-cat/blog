<template>
  <div class="error-page">
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="60" fill="#ffeaea"/>
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="48" fill="#d32f2f">500</text>
    </svg>
    <h1>服务器内部错误</h1>
    <p>很抱歉，服务器遇到问题。请稍后重试或联系管理员。</p>
    <NuxtLink to="/" class="back-home">返回首页</NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object
})
</script>

<style scoped>
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  height: 100vh;
  box-sizing: border-box;
  color: #d32f2f;
  background: linear-gradient(135deg, #fff0f0 0%, #ffeaea 100%);
}
svg {
  margin-bottom: 1.5rem;
}
h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
}
p {
  margin-bottom: 2rem;
  color: #333;
}
.back-home {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: #d32f2f;
  color: #fff;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.2s;
}
.back-home:hover {
  background: #b71c1c;
}
</style>
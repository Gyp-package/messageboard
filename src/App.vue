<template>
  <h2>webpack5-vue3-ts</h2>
  <img :src="smallImg" alt="图片为5kb" />
  <img :src="bigImg" alt="大于于10kb的图片" />  
    <!-- 小图片背景容器 -->
  <div className='smallImg'></div>
  <!-- 大图片背景容器 -->
  <div className='bigImg'></div>
</template>

<script setup lang="ts">

  import smallImg from './assets/imgs/5kb.png'
  import bigImg from './assets/imgs/36kb.jpg'
  import './app.css'
  import './app.less'

</script>
<style scoped>


</style>
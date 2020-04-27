<template>
  <div id="app">
    <!-- keep-alive 对页面进行的一个缓存 当再次加载此页面的时候 
    直接从内存中读取，不会再次发送ajax请求 如果需要再次发送请求 则在actived生命函数中进行发送 -->
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<style lang="scss"></style>

<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <div>text</div>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
export default {
  name: 'Home',
  data() {
    return {
      key: 'value'
    }
  },
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style lang="stylus" scoped></style>

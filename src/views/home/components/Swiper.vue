<template>
  <div class="wrapper">
    <swiper :options="swiperOptions" v-if="showSwiper">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: {
      type: Array
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        // Some Swiper option/callback...
        loop: true,
        autoplay: true
      }
    }
  },
  computed: {
    showSwiper() {
      return this.swiperList.length
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  // 穿透scoped
  /deep/ .swiper-pagination-bullet-active {
    background: #fff;
  }
  // 图片的宽高比自适应
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  background-color: #eee;
  // 方式二
  // height： 31.25vw;
  .swiper-img {
    width: 100%;
  }
}
</style>

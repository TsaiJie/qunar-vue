<template>
  <div class="icons">
    <swiper :options="swiperOptions" v-if="showSwiper">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl" alt="" class="" />
          </div>
          <p>{{ item.desc }}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: {
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
        loop: true
      }
    }
  },
  computed: {
    // 数组分页
    pages() {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    },
    showSwiper() {
      return this.iconList.length
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'style/varibles';
@import 'style/mixins';
.icons {
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
  .icon {
    position: relative;
    float: left;
    width: 25%;
    overflow: hidden;
    height: 0;
    padding-bottom: 25%;
    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      text-align: center;
      padding: 0.1rem;
      box-sizing: border-box;
      img {
        height: 100%;
      }
    }
    p {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      color: $darkTextColor;
      text-align: center;
      @include ellipsis;
    }
  }
}
</style>

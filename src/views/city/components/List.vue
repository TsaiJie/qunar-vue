<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list" v-for="subitem of item" :key="subitem.id">
          <div class="item border-bottom">{{ subitem.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
// import PullUp from '@better-scroll/pull-up'
export default {
  props: {
    cities: {
      type: Object
    },
    hotCities: {
      type: Array
    },
    letter: {
      type: String
    }
  },
  name: 'CityList',
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {})
    // console.log(this.scroll)
  },
  watch: {
    // 数据获取完毕 dom更新完毕之后重新调用BScroll
    hotCities() {
      this.$nextTick(() => {
        // console.log('数据更新啦')
        this.scroll = new BScroll(this.$refs.wrapper, {})
      })
    },
    letter() {
      if (this.letter) {
        // console.log(this.$refs[this.letter])
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'style/varibles';

.border-topbottom {
  &::before {
    border-color: #ccc;
  }
  &::after {
    border-color: #ccc;
  }
}
.border-bottom {
  &::before {
    border-color: #ccc;
  }
}
.list {
  position: absolute;
  overflow: hidden;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  .title {
    line-height: 0.54rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.22rem;
  }
  .button-list {
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    overflow: hidden;
    .button-wrapper {
      float: left;
      width: 33.33%;

      .button {
        margin: 0.1rem;
        padding: 0.1rem 0;
        text-align: center;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }
  .item-list {
    .item {
      line-height: 0.76rem;
      padding-left: 0.2rem;
    }
  }
}
</style>

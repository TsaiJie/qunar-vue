<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: {
      type: Object
    }
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  // cities:{} => 此时页面为空 => ajax => cities => cities发生变化的时候 页面重新渲染 updated被触发
  updated() {
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letters() {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick(event) {
      this.$emit('change', event.target.innerText)
    },
    handleTouchStart() {
      this.touchStatus = true
    },
    handleTouchMove(event) {
      if (this.touchStatus) {
        // if (this.timer) {
        //   clearTimeout(this.timer)
        // }
        // // 截流
        // this.timer = setTimeout(() => {
        //   // 79是头部的高度
        //   const touchY = event.touches[0].clientY - 79
        //   // 20是每个字母的高度
        //   const index = Math.floor((touchY - this.startY) / 20)
        //   if (index >= 0 && index < this.letters.length) {
        //     this.$emit('change', this.letters[index])
        //   }
        // }, 1)
        // 79是头部的高度
        const touchY = event.touches[0].clientY - 79
        // 20是每个字母的高度
        const index = Math.floor((touchY - this.startY) / 20)
        if (index >= 0 && index < this.letters.length) {
          this.$emit('change', this.letters[index])
        }
      }
    },
    handleTouchEnd() {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'style/varibles';
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 1.58rem;
  bottom: 0;
  width: 0.4rem;
  .item {
    line-height: 0.4rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>

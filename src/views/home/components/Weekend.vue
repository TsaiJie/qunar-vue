<template>
  <div>
    <div class="title">周末游</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: {
      type: Array
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import 'style/mixins';
.title {
  line-height: 0.8rem;
  background: #eee;
  text-align: 0.2rem;
}
.item-img-wrapper {
  height: 0;
  overflow: hidden;
  padding-bottom: 37.09%;
  .item-img {
    width: 100%;
  }
}

.item-info {
  padding: 0.1rem;
  .item-title {
    line-height: 0.54rem;
    font-size: 0.32rem;
    @include ellipsis;
  }
  .item-desc {
    line-height: 0.4rem;
    color: #ccc;
    @include ellipsis;
  }
}
</style>

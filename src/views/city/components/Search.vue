<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="请输入城市名或拼音" />
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="scss" scoped>
@import 'style/varibles';
.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: $bgColor;
  .search-input {
    box-sizing: border-box;
    padding: 0 0.1rem;
    width: 100%;
    height: 0.62rem;
    line-height: 0.62rem;
    border-radius: 0.06rem;
    text-align: center;
  }
}
</style>

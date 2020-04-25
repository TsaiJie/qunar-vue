<template>
  <div>
    <home-header></home-header>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
export default {
  name: 'Home',
  data() {
    return {
      key: 'value'
    }
  },
  components: {
    HomeHeader
  }
}
</script>

<style lang="stylus" scoped></style>

<template>
  <div>
    <div class="search">
      <input
        v-model="keyword"
        class="search-input"
        type="text"
        placeholder="请输入城市名或拼音"
      />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{ item.name }}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配的数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    },
    list() {
      this.$nextTick(() => {
        // console.log('数据更新啦')
        this.scroll = new BScroll(this.$refs.search, {})
      })
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.search)
  },
  computed: {
    hasNoData() {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick(city) {
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  }
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
.search-content {
  position: absolute;
  overflow: hidden;
  z-index: 1;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;
  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    color: #666;
    background-color: #fff;
  }
}
</style>

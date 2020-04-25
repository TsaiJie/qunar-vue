import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入页面初始化文件
import 'style/reset.css'
// 解决一像素边框问题
import 'style/border.css'
// 解决300毫秒点击延迟
import fastClick from 'fastclick'
fastClick.attach(document.body)
// 引入字体
import './assets/style/iconfont.css'
// 引入轮播组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper /* { default options with global component } */)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

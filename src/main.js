
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import wcSwiper from 'wc-swiper'
import 'lib-flexible'
Vue.use(wcSwiper);

Vue.config.productionTip = false

//自定义组件
import './utils'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

//页面跳转时，自动定位到顶部
/*
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})
*/





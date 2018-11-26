import Vue from 'vue'
import App from './App'
import router from './router'
import { ToastPlugin } from 'vux'
import axios from 'axios'
// require('@a/css/iconfont.css')
// require('@a/css/flex.css')
// require('@a/css/base.css')
// require('@a/js/rem.js')
// require('@a/js/ajaxService.js')

Vue.config.productionTip = false

Vue.use(ToastPlugin)
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

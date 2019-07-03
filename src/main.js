import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App'
import { ToastPlugin } from 'vux'
import axios from 'axios'
import createRouter from './router'
import createStore from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// require('@a/css/iconfont.css')
require('@a/css/flex.css')
require('@a/css/base.css')
require('@a/css/patch.css')
require('@a/js/rem.js')
// require('@a/js/ajaxService.js')

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.use(VueRouter)
Vue.use(Vuex)

const router = createRouter()
const store = createStore()

Vue.use(ToastPlugin)
Vue.prototype.$axios = axios

Vue.directive('numberOnly', function (el) {
  el.onkeyup = function (e) {
    el.value = el.value.replace(/\D+/g, '')
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

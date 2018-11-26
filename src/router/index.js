import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// const VipTag = (resolve) => {
//   require(['@/components/VipTag.vue'], resolve)
// }

Vue.use(Router)

const Home = (resolve) => {
  require(['@/components/Home.vue'], resolve)
}
const List = (resolve) => {
  require(['@/components/List.vue'], resolve)
}
const Add = (resolve) => {
  require(['@/components/Add.vue'], resolve)
}
const Cart = (resolve) => {
  require(['@/components/Cart.vue'], resolve)
}

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
})

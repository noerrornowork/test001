import Router from 'vue-router'
// Vue的异步组件和Webpack的异步分割
const Home = () => import('@/components/Home.vue')
const OnlineWriting = () => import('@/components/onlineWriting/OnlineWriting.vue')
const OnlineBase = () => import('@/components/onlineWriting/online/OnlineBase.vue')
const RetrieveArticle = () => import('@/components/onlineWriting/online/RetrieveArticle.vue')
const OnlineWord = () => import('@/components/onlineWriting/online/OnlineWord.vue')
const OnlineImage = () => import('@/components/onlineWriting/online/OnlineImage.vue')
const ResourceMonitor = () => import('@/components/resourceMonitor/ResourceMonitor.vue')
const MultipleSearch = () => import('@/components/multipleSearch/MultipleSearch.vue')
const SearchBase = () => import('@/components/multipleSearch/search/SearchBase.vue')
const SearchA = () => import('@/components/multipleSearch/search/SearchA.vue')
const SearchB = () => import('@/components/multipleSearch/search/SearchB.vue')
const SearchC = () => import('@/components/multipleSearch/search/SearchC.vue')
const SearchD = () => import('@/components/multipleSearch/search/SearchD.vue')
const SearchE = () => import('@/components/multipleSearch/search/SearchE.vue')

export default () => {
  return new Router({
    routes: [
      {
        path: '/',
        redirect: '/onlineWriting'
      },
      {
        path: '/home',
        name: 'home',
        component: Home
      },
      {
        path: '/onlineWriting',
        name: 'onlineWriting',
        component: OnlineWriting,
        redirect: '/onlineBase',
        children: [
          { path: '/onlineBase', component: OnlineBase },
          { path: '/retrieveArticle', component: RetrieveArticle },
          { path: '/onlineWord', component: OnlineWord },
          { path: '/onlineImage', component: OnlineImage }
        ]
      },
      {
        path: '/resourceMonitor',
        name: 'resourceMonitor',
        component: ResourceMonitor
      },
      {
        path: '/multipleSearch',
        name: 'multipleSearch',
        component: MultipleSearch,
        redirect: '/searchBase',
        children: [
          { path: '/searchBase', component: SearchBase },
          { path: '/searchA', component: SearchA },
          { path: '/searchB', component: SearchB },
          { path: '/searchC', component: SearchC },
          { path: '/searchD', component: SearchD },
          { path: '/searchE', component: SearchE }
        ]
      }
    ]
  })

}
<template>
  <div id="app">
    <router-view></router-view>
    <tab></tab>
  </div>
</template>

<script>
import Tab from '@/base/Tab.vue'
export default {
  name: 'App',
  components: {
    Tab
  },
  data () {
    return {
      msg: 'Hello VUX'
    }
  }
}
</script>

<style>
</style>

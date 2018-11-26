<template>
  <div class="home">
    <v-header>首页</v-header>
  </div>
</template>
<script>
import VHeader from '@/base/VHeader.vue'
export default {
  name: 'home',
  components: {
  	'v-header': VHeader
  },
  data () {
    return {}
  },
  mounted () {
  	// console.log(window.history)
  	// this.$router.back()
  	console.log(window.history)
  }
}
</script>
<style lang="less" scoped></style>

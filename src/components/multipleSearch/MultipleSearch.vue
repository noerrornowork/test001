<template>
  <div class="multiple-search">
    <v-header>
      <span slot="title">国防大学多语检索平台</span>
      <span slot="content">
        欢迎,
        <span class="username">邓雨晴</span>
        <span class="exit">[退出]</span>
      </span>
    </v-header>
    <div class="content-left">
      <second-menu></second-menu>
    </div>
    <div class="content-right">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import VHeader from '@/base/VHeader'
import SecondMenu from '@/base/SecondMenu'
export default {
  name: 'multiple-search',
  components: {
    VHeader,
    SecondMenu
  },
  data () {
    return {
      labelPosition: 'left',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {}
  }
}
</script>
<style lang="less" scoped>
  .multiple-search {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    font-size: 20px;

    .content-left {
      z-index: 1000;
      padding: 0 10px 0 50px;
    }
    .content-right {
      margin-left: 210px;
    }
    .cur {
      background-color: rgb(72, 183, 235);
      color: #fff;
    }
    .username {
      padding-left: 10px;
    }
    .exit {
      padding-left: 39px;
    }
  }
</style>

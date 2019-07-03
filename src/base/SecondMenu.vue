<template>
  <div class="second-menu">
    <el-menu
      default-active
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-submenu index="1" @click.native="goToOnlineWriting">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">在线写作</span>
        </template>
        <el-menu-item index="1-1" class="w100" @click.native.stop="goToRetrieveArticle">检索文章</el-menu-item>
        <el-menu-item index="1-2" class="w100" @click.native.stop="goToOnlineWord">在线写作-文字</el-menu-item>
        <el-menu-item index="1-3" class="w100" @click.native.stop="goToOnlineImage">在线写作-图片</el-menu-item>
      </el-submenu>
      <el-menu-item index="2" @click.native="goToResourceMonitor">
        <i class="el-icon-menu"></i>
        <span slot="title">资源管理</span>
      </el-menu-item>
      <el-submenu index="3" @click.native="goToMultipleSearch">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">多语检索</span>
        </template>
        <el-menu-item index="3-1" class="w100 w-150" @click.native.stop="goToSearch_01">检索结果页01</el-menu-item>
        <el-menu-item index="3-2" class="w100" @click.native.stop="goToSearch_02">检索结果页02</el-menu-item>
        <el-menu-item index="3-3" class="w100" @click.native.stop="goToSearch_03">检索结果页03</el-menu-item>
        <el-menu-item index="3-4" class="w100" @click.native.stop="goToSearch_04">检索结果页04</el-menu-item>
        <el-menu-item index="3-5" class="w100" @click.native.stop="goToSearch_05">检索结果页05</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
      switch (key) {
        case 1:
          this.$router.replace({
            path: '/onlineWriting/retrieveArticle'
          })
          break
        case 3:
          this.$router.replace({
            path: '/multipleSearch/searchA'
          })
          break
      }
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
      switch (key) {
        case 1:
          this.$router.replace({
            path: '/onlineWriting'
          })
          break
        case 3:
          this.$router.replace({
            path: '/multipleSearch'
          })
          break
      }
    },
    goToOnlineWriting () {
      this.$router.replace({
        path: '/onlineWriting'
      })
    },
    goToRetrieveArticle () {
      this.$router.replace({
        path: '/retrieveArticle'
      })
    },
    goToOnlineWord () {
      this.$router.replace({
        path: '/onlineWord'
      })
    },
    goToOnlineImage () {
      this.$router.replace({
        path: '/onlineImage'
      })
    },
    goToResourceMonitor () {
      this.$router.replace({
        path: '/resourceMonitor'
      })
    },
    goToMultipleSearch () {
      this.$router.replace({
        path: '/multipleSearch'
      })
    },
    goToSearch_01 () {
      this.$router.replace({
        path: '/searchA'
      })
    },
    goToSearch_02 () {
      this.$router.replace({
        path: '/searchB'
      })
    },
    goToSearch_03 () {
      this.$router.replace({
        path: '/searchC'
      })
    },
    goToSearch_04 () {
      this.$router.replace({
        path: '/searchD'
      })
    },
    goToSearch_05 () {
      this.$router.replace({
        path: '/searchE'
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .second-menu {
    position: absolute;
    top: 50px;
    font-size: 18px;
  }
</style>
<style lang="less">
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 150px;
    min-height: 400px;
  }
  .el-menu {
    width: 150px;
  }
  .el-submenu .el-menu-item {
    min-width: 150px;
  }
  .el-menu-item {
    width: 150px;
    &:hover {
      width: 100% !important;
    }
  }
</style>

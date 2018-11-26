<template>
  <div class="tab">
    <router-link to="/home">首页</router-link>
    <router-link to="/list">列表</router-link>
    <router-link to="/add">添加</router-link>
    <router-link to="/cart">购物车</router-link>
  </div>
</template>
<style lang="less" scoped>
.tab {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;

    height: 40px;
    background-color: #afdeee;
    a {
        text-decoration: none;
        flex: 1;
        text-align: center;
        line-height: 40px;
      &.router-link-active {
        color: #259bec;
      }
    }
}
</style>

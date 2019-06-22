<template>
  <div class="header">
    <span class="header-left">
      <slot name="title"></slot>
    </span>
    <span class="header-right co-fr">
      <slot name="content"></slot>
    </span>
  </div>
</template>
<script>
  export default {
    name: "v-header"
  };
</script>
<style lang="less" scoped>
  .header {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
		bottom: 0;
		
		width: 100%;

    z-index: 999;

    height: 50px;
    padding: 0 10px 0 50px;
    background-color: rgb(72, 183, 235);
    .header-left {
      width: 230px;
      line-height: 50px;
      font-size: 20px;
      word-spacing: 0px;
      letter-spacing: 0;
      color: #ffffff;
    }
    .header-right {
      width: 160px;
      font-size: 12px;
      line-height: 50px;
      color: #ffffff;
      opacity: 0.5;
    }
  }
</style>
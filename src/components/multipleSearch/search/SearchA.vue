<template>
  <div class="multiple-search-01">
    <div class="top m-t-50">
      <span class="top-text co-fl">多语检索</span>
      <button type="primary" class="top-btn co-fr">返回写作</button>
    </div>
    <search-wrapper></search-wrapper>
  </div>
</template>
<script>
  import SearchWrapper from "@/base/SearchBox";
  export default {
    name: "multiple-search-01",
    components: {
      SearchWrapper
    },
    data() {
      return {};
    },
    methods: {}
  };
</script>
<style lang="less" scoped>
  .multiple-search-01 {
    .top {
      padding: 0 20px;
      height: 50px;
      .top-text {
        line-height: 50px;
        font-size: 20px;
        color: #333333;
      }
      .top-btn {
        margin: 10px 0;
        width: 120px;
        text-align: center;
        height: 30px;
        font-size: 20px;
        background-color: rgb(72, 183, 235);
        color: #ffffff;
        border-radius: 20px;
      }
    }
  }
</style>
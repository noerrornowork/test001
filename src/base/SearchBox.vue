<template>
  <div class="search-wrapper co-flex p-lr-20">
    <el-select v-model="selectedTheme" placeholder="主题">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <el-input v-model="keywords" placeholder="请输入内容" class="p-lr-20"></el-input>
    <el-button type="primary" class="w-150">检索</el-button>
  </div>
</template>
<script>
  export default {
    name: "search-wrapper",
    data() {
      return {
        options: [
          { label: "主题", value: 1 },
          { label: "关键词", value: 2 },
          { label: "词频", value: 3 }
        ],
        selectedTheme: "",
        keywords: ""
      };
    }
  };
</script>
<style lang="less" scoped>
  .search-wrapper {
  }
</style>
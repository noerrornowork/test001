<template>
  <div class="multiple-search-01">
    <div class="top m-t-50">
      <span class="top-text co-fl">多语检索</span>
      <button type="primary" class="top-btn co-fr">返回写作</button>
    </div>
    <search-wrapper></search-wrapper>
    <div class="result-box p-lr-20 m-t-50">
      <div class="h-40 p-lr-20"></div>
      <el-button type="primary">点击</el-button>
    </div>
  </div>
</template>
<script>
import SearchWrapper from '@/base/SearchBox'
export default {
  name: 'multiple-search-01',
  components: {
    SearchWrapper
  },
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }]
    }
  },
  methods: {}
}
</script>
<style lang="less" scoped>
  .multiple-search-01 {
    position: absolute;
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
        border-radius: 8px;
      }
    }
  }
</style>

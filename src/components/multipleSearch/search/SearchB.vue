<template>
  <div class="multiple-search-02">
    <h1 class="m-t-50">检索结果-02</h1>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import VHeader from '@/base/VHeader'
import SecondMenu from '@/base/SecondMenu'
export default {
  name: 'multiple-search-02',
  components: {
    VHeader,
    SecondMenu
  },
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    onSubmit () {}
  }
}
</script>
<style lang="less" scoped>
  .multiple-search-02 {
    position: absolute;
    left: 0;
    top: 0px;
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

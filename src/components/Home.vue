<template>
  <div class="home">
    <h1>这是首页</h1>
    <h2>{{count}}</h2>
    <h3>{{fullName}}</h3>
    <button @click="updateText">点击改变文本</button>
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
import VHeader from '@/base/VHeader.vue'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  name: 'home',
  components: {
    'v-header': VHeader
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['fullName'])
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
    ...mapActions(['updateCountAsync']),
    ...mapMutations(['updateCount', 'updateText'])
  },
  mounted () {
    console.log(window.history)
    // let i = 6;
    // let x = 8;
    // let y = 90;
    // this.updateCount({ i, x, y });
    this.updateText()
    this.updateCountAsync({
      num: 5,
      time: 2000
    })
    // this.$store.dispatch("updateCountAsync", {
    //   num: 2,
    //   time: 2000
    // });
  }
}
</script>
<style lang="less" scoped>
  .home {
    h1 {
      text-align: center;
    }
  }
</style>

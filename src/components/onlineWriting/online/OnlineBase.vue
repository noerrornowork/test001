<template>
  <div class="online-base">
    <div class="top m-t-50">
      <span class="top-text co-fl">在线协作</span>
      <button type="primary" class="top-btn co-fr">多语检索</button>
    </div>
    <div class="form-box">
      <h1 class="h-50">文章基本属性</h1>
      <div class="bgc-fff p-30">
        <el-form :inline="true" :model="form" label-width="80px" :label-position="labelPosition">
          <el-row type="flex" justify="center">
            <el-col :span="12">
              <el-form-item label="标题">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="作者">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="24">
              <el-form-item label="摘要">
                <el-input
                  :rows="4"
                  type="textarea"
                  v-model="form.desc"
                  style="min-width: 730px; width: 21.38rem; max-width: 730px"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row type="flex" justify="center">
            <div class="w-80 m-l-10">
              <el-form-item label="关键词"></el-form-item>
            </div>
            <el-col :span="16">
              <div class="co-flex co-ac">
                <el-input v-model="form.name" class="p-r-10 w-150"></el-input>
                <el-input v-model="form.name" class="p-lr-10 w-150"></el-input>
                <el-input v-model="form.name" class="p-lr-10 w-150"></el-input>
                <el-input v-model="form.name" class="p-lr-10 w-150"></el-input>
                <div class="co-flex co-jc co-ac h-40">
                  <i class="el-icon-plus"></i>
                </div>
              </div>
            </el-col>
            <el-col :span="6"></el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="文献类别">
                <el-select
                  v-model="form.region"
                  placeholder="请选择"
                  style="min-width: 30%; width: 21.38rem; max-width: 730px"
                >
                  <el-option label="全部类型" value="0"></el-option>
                  <el-option label="国防工业" value="1"></el-option>
                  <el-option label="国防科研" value="2"></el-option>
                  <el-option label="人民防空" value="3"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
    <div class="editor-box">
      <div class="editor-top h-50">
        <p class="top-text t-c w100">文章详情</p>
        <button type="primary" class="quote-btn w-120 h-30">引用展开</button>
      </div>
      <div class="bgc-fff p-t-20 min-h-375">
        <p class="h-28 p-lr-10">编辑器工具栏</p>
        <div class="editor-content m-t-30 p-lr-10">
          <el-input class :rows="15" type="textarea" v-model="form.desc" placeholder="请输入文章"></el-input>
        </div>
      </div>
      <div class="btn-group m-t-50 m-b-130 co-fr">
        <a href="javascript:;" class="cur w-120 t-c h-40">提交</a>
        <a href="javascript:;" class="w-120 t-c h-40">取消</a>
      </div>
    </div>
  </div>
</template>
<script>
import VHeader from '@/base/VHeader'
import SecondMenu from '@/base/SecondMenu'
export default {
  name: 'online-writing',
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
  .online-base {
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
    .form-box {
      h1 {
        width: 100%;
        height: 50px;
        font-size: 20px;
        text-align: center;
      }
    }
    .editor-box {
      .quote-btn {
        position: absolute;
        top: 50%;
        margin-top: -15px;
        right: 20px;
        font-size: 20px;
        background-color: rgb(72, 183, 235);
        color: #ffffff;
        border-radius: 20px;
      }
      .editor-top {
        position: relative;
        font-size: 20px;
      }
      .editor-content {
        font-weight: 700;
        font-size: 20px;
        color: rgb(153, 153, 153);
      }
    }
    .btn-group {
      a {
        display: inline-block;
        line-height: 40px;
        border-radius: 8px;
        color: rgb(72, 183, 235);
        font-weight: normal;
        &:hover {
          background-color: rgb(72, 183, 235);
          color: #fff;
        }
      }
    }
    .cur {
      color: #fff;
    }
  }
</style>

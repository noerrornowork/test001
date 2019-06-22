<template>
  <div class="resource-monitor">
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
      <div class="online-word">
        <div class="top m-t-50">
          <span class="top-text co-fl">资源管理</span>
          <button type="primary" class="top-btn co-fr">多语检索</button>
        </div>
        <div class="form-box">
          <h1 class="h-50">文章基本属性</h1>
          <div class="bgc-fff p-30">
            <el-form
              :inline="true"
              :model="form"
              label-width="80px"
              :label-position="labelPosition"
            >
              <el-row type="flex" justify="center">
                <el-col :span="12">
                  <el-form-item label="标题">
                    <el-input v-model="form.title"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="作者">
                    <el-input v-model="form.author"></el-input>
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
                    <el-input v-model="form.keyword_01" class="p-r-10 w-150"></el-input>
                    <el-input v-model="form.keyword_02" class="p-lr-10 w-150"></el-input>
                    <el-input v-model="form.keyword_03" class="p-lr-10 w-150"></el-input>
                    <el-input v-model="form.keyword_04" class="p-lr-10 w-150"></el-input>
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
          </div>
          <div class="bgc-fff p-t-20 min-h-375">
            <p class="h-28 p-lr-10">编辑器工具栏</p>
            <div class="editor-content m-t-30 p-lr-10">
              <el-input class :rows="15" type="textarea" v-model="form.desc" placeholder="请输入文章"></el-input>
            </div>
          </div>
          <div class="box bgc-fff co-flex m-t-30">
            <p class="h-20 p-r-100 cl-1">选择机翻语种</p>
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="英语" name="type"></el-checkbox>
              <el-checkbox label="法语" name="type"></el-checkbox>
              <el-checkbox label="俄语" name="type"></el-checkbox>
              <el-checkbox label="西语" name="type"></el-checkbox>
            </el-checkbox-group>
          </div>
          <div class="box bgc-fff co-flex m-t-30">
            <p class="h-20 p-r-100 cl-1">选择机翻语种</p>
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="英语" name="type"></el-checkbox>
              <el-checkbox label="法语" name="type"></el-checkbox>
              <el-checkbox label="俄语" name="type"></el-checkbox>
              <el-checkbox label="西语" name="type"></el-checkbox>
            </el-checkbox-group>
          </div>
          <div class="btn-group m-t-50 m-b-130 co-fr">
            <a href="javascript:;" class="cur w-120 t-c h-40">提交</a>
            <a href="javascript:;" class="w-120 t-c h-40">取消</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import VHeader from "@/base/VHeader";
  import SecondMenu from "@/base/SecondMenu";
  export default {
    name: "resource-monitor",
    components: {
      VHeader,
      SecondMenu
    },
    data() {
      return {
        labelPosition: "left",
        form: {
          title: "美国防科技创新机构与外界交流的各种举措",
          author: "袁成",
          keyword_01: "国防",
          keyword_02: "工业",
          keyword_03: "美国",
          keyword_04: "",
          region: "",
          date1: "",
          date2: "",
          delivery: false,
          type: [],
          resource: "",
          desc:
            "目前在美军的科研（RDT&E，即研究、发展、试验和鉴定）序列中，科技（S&T）研究位于前端，由基础研究、应用研究和先期技术发展（ATD）3 部分组成，主要目的是研究基础技术、突破先进技术和开展技术集成验证（原型机试验）。美军在科技领域的成就，不但为其在全球确立优势地位打牢技术根基，又可通过转向民用引领全球产业变革。目前美军的科技机构主要由国防预先研究计划局（DARPA），以及空军研究实验室（AFRL）、海军研究实验室（NRL）、陆军研究实验室（ARL）等国防实验室组成"
        }
      };
    },
    methods: {
      onSubmit() {}
    }
  };
</script>
<style lang="less" scoped>
  .resource-monitor {
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
      .online-word {
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
            &.cur {
              color: #fff;
            }
            &:hover {
              background-color: rgb(72, 183, 235);
              color: #fff;
            }
          }
          .cur {
            background-color: rgb(72, 183, 235);
            color: #fff;
          }
        }
      }
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
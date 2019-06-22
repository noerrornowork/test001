<template>
  <div class="retrieve-article">
    <div class="top m-t-50 h-100">
      <span class="top-text co-fl">多语检索</span>
      <button type="primary" class="top-btn co-fr">返回写作</button>
    </div>
    <div class="form-box">
      <div class="bgc-fff p-lr-50">
        <div class="article-container">
          <h1 class="article-title t-c p-tb-30">美国防科技创新机构与外界交流的各种举措</h1>
          <h2 class="article-author t-c h-30">袁成</h2>
          <h3 class="from-paper t-c m-b-50 h-30">中国航空报</h3>
          <p
            class="article-content"
          >目前在美军的科研（RDT&E，即研究、发展、试验和鉴定）序列中，科技（S&T）研究位于前端，由基础研究、应用研究和先期技术发展（ATD）3部分组成，主要目的是研究基础技术、突破先进技术和开展技术集成验证（原型机试验）。美军在科技领域的成就，不但为其在全球确立优势地位打牢技术根基，又可通过转向民用引领全球产业变革。目前美军的科技机构主要由国防预先研究计划局（DARPA），以及空军研究实验室（AFRL）、海军研究实验室（NRL）、陆军研究实验室（ARL）等国防实验室组成。目前，美国防部拥有60多家实验室和38000多名科学家和工程师。</p>
          <p class="article-content">
            目前，美军正尽全力引入创新技术，力求实现对潜在对手的技术突袭。为此，近几年五角大
            楼为在全美开展万众创新，先后成立了国防创新单元（DIU）和国防创新咨询委员会（DIAB） 等
            机构。另外空军也成立了 AFWERX 创新机构，陆军成立了陆军应用实验室（AAL），DARPA 也
            表示，随着小型企业、新兴企业和大学实验室在前沿技术领域（特别是机器人、3D 打印领域）
            成就愈加显著，需要增加与可实现短期创新的非传统国防企业的合作。
          </p>
          <p class="article-content">
            在快速引入创新技术、大幅拓展技术来源的强烈需求牵引下，美军需要搭建起与社会充分沟
            通交流的桥梁，以公布创新需求，摸清技术水平，吸引研究力量，实现创新使命。由于美军科技
            机构均开展科研中的前端研究工作，因此很多十分超前和军民两用技术可以对外公开，这使其成
            为军队与社会各界交流的重要平台，目前拥有“开展技术交流展示会”“组织参观实验室”和“到
            校园科普授课”等多种手段。
          </p>
        </div>
      </div>
      <div class="footer-box m-b-50 bgc-fff">
        <v-footer></v-footer>
      </div>
    </div>
  </div>
</template>
<script>
  import VHeader from "@/base/VHeader";
  import VFooter from "@/base/VFooter";
  import SecondMenu from "@/base/SecondMenu";
  export default {
    name: "retrieve-article",
    components: {
      VHeader,
      VFooter,
      SecondMenu
    },
    data() {
      return {
        labelPosition: "left",
        form: {
          name: "",
          region: "",
          date1: "",
          date2: "",
          delivery: false,
          type: [],
          resource: "",
          desc: ""
        }
      };
    },
    methods: {
      onSubmit() {}
    }
  };
</script>
<style lang="less" scoped>
  .retrieve-article {
    .top {
      padding: 0 20px;
      .top-text {
        font-size: 20px;
        color: #333333;
      }
      .top-btn {
        margin: 25px 0;
        width: 120px;
        text-align: center;
        height: 50px;
        font-size: 20px;
        background-color: rgb(72, 183, 235);
        color: #ffffff;
        border-radius: 8px;
      }
    }
    .form-box {
      .article-container {
        h1 {
          width: 100%;
          height: 50px;
          font-weight: normal;
          font-size: 20px;
        }
        .article-author {
          font-size: 14px;
          font-weight: normal;
        }
        .from-paper {
          font-size: 14px;
          font-weight: normal;
        }
        .article-content {
          font-weight: normal;
          font-size: 18px;
          line-height: 2.5em;
          text-indent: 36px;
        }
      }
    }
  }
</style>
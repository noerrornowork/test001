<template>
  <div class="v-footer co-flex">
    <img src alt="国防图片" class="p-r-30">
    <div class="footer-content p-l-30">
      <h1 class="name h-30">国防</h1>
      <p class="h-20">National Defense</p>
      <ul class="footer-list co-flex m-t-10">
        <li class="footer-item p-r-20">
          <h3 class="h-20">基本信息</h3>
          <p>
            <span>曾用刊名:</span>&nbsp;&nbsp;
            <span>战术研究;</span>
            <span>军事知识</span>
          </p>
          <p class="co-te" title="主办单位:  中国人民解放军军事科学院;国家国防顶顶顶顶顶顶顶">
            <span>主办单位:</span>&nbsp;&nbsp;
            <span>中国人民解放军军事科学院;国家国防顶顶顶顶顶顶顶</span>
          </p>
          <p>
            <span>出版周期:</span>&nbsp;&nbsp;
            <span>月刊</span>
            <a href="javascrit:;" class="more">更多介绍...</a>
          </p>
        </li>
        <li class="footer-item p-r-20">
          <h3 class="h-20">出版信息</h3>
          <p>
            <span>专辑名称:</span>&nbsp;&nbsp;
            <span>社会科学</span>
          </p>
          <p>
            <span>专题名称:</span>&nbsp;&nbsp;
            <span>军事</span>
          </p>
          <p>
            <span>出版文献量:</span>&nbsp;&nbsp;
            <span>16856篇</span>
          </p>
        </li>
        <li class="footer-item p-r-20">
          <h3 class="h-20">评价信息</h3>
          <p>
            <span>(2018版)</span>&nbsp;&nbsp;
            <span>复合影响因子:</span>&nbsp;&nbsp;
            <span>0.094</span>
          </p>
          <p>
            <span>(2018版)</span>&nbsp;&nbsp;
            <span>综合影响因子:</span>&nbsp;&nbsp;
            <span>0.042</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: "v-footer"
  };
</script>
<style lang="less" scoped>
  .v-footer {
    width: 100%;
    img {
      width: 90px;
      height: 130px;
      border: 1px solid #000;
    }
    .footer-content {
      h1 {
        font-size: 20px;
      }
      > p {
        width: 200px;
        font-weight: normal;
        font-size: 14px;
      }
      .footer-list {
        width: 800px;
        .footer-item {
          min-width: 200px;
          flex: 1;
          h3 {
            font-size: 14px;
            background-color: #cfcfcf;
          }
          > p {
            font-weight: normal;
            font-size: 14px;
            line-height: 1.3em;
            a {
              width: 100%;
              display: block;
              color: rgb(41, 161, 231);
            }
          }
        }
      }
    }
  }
</style>
<template>
  <div class="multiple-search-05">
    <h1 class="m-t-50">检索结果-05</h1>
  </div>
</template>
<script>
  import VHeader from "@/base/VHeader";
  import SecondMenu from "@/base/SecondMenu";
  export default {
    name: "multiple-search-05",
    components: {
      VHeader,
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
  .multiple-search-05 {
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
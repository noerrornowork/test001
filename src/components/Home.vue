<template>
  <div class="home">
    <h1>这是首页</h1>
    <h2>{{count}}</h2>
    <h3>{{fullName}}</h3>
    <button @click="updateText">点击改变文本</button>
  </div>
</template>
<script>
  import VHeader from "@/base/VHeader.vue";
  import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
  export default {
    name: "home",
    components: {
      "v-header": VHeader
    },
    computed: {
      ...mapState(["count"]),
      ...mapGetters(["fullName"])
    },
    data() {
      return {};
    },
    methods: {
      ...mapActions(["updateCountAsync"]),
      ...mapMutations(["updateCount", "updateText"])
    },
    mounted() {
      console.log(window.history);
      // let i = 6;
      // let x = 8;
      // let y = 90;
      // this.updateCount({ i, x, y });
      this.updateText();
      this.updateCountAsync({
        num: 5,
        time: 2000
      });
      // this.$store.dispatch("updateCountAsync", {
      //   num: 2,
      //   time: 2000
      // });
    }
  };
</script>
<style lang="less" scoped>
  .home {
    h1 {
      text-align: center;
    }
  }
</style>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { REDUCE_TIMING } from "@/vuex/index/mutationTypes";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  mounted() {
    this.$store.commit(REDUCE_TIMING, { count: 1 });
    console.log(this.$store, "----this.$state");
  }
};
</script>

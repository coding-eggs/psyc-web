<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import storage from "./storage";
export default {
  name: "app",
  components: {},
  data() {
    return {};
  },
  mounted() {
    console.log(storage);
    storage.setItem("a", 1);
  }
};
</script>
<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/config.scss";
</style>

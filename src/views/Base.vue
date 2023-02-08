<template>
  <div>
    <nav-bar></nav-bar>
    <router-view id="routes"></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Base",
  components: {
    NavBar
  },
}
</script>

<style scoped>
  div #routes{
    overflow-x: hidden;
  }
</style>
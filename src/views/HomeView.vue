<template>
  <div id="home">
      <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="tags = props" test="some value here">
      Some Text Inside HelloWorld Component
      <template v-slot:named_slot1>Named Slot 1 content for the HelloWorld Component</template>
      <template v-slot:named_slot2></template>
    </HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};

</script>

<template>
  <div id="header">
    <Navigation></Navigation>
    <Xmas v-if="showChristmasGreetings"></Xmas>
    <Corona></Corona>
  </div>
</template>

<script>
import Navigation from "@/components/Nav.vue";
import Corona from "@/components/Corona.vue";
import Xmas from "@/components/Xmas.vue";

export default {
  name: "app",
  components: {
    Navigation,
    Corona,
    Xmas
  },
  computed: {
    showChristmasGreetings() {
      const now = new Date();
      return now.getMonth() === 11;
    },
  },
};
</script>

<style>
</style>

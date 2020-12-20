<template>
  <div id="app">
    <Navigation></Navigation>
    <Xmas v-if="showChristmasGreetings"></Xmas>
    <Corona></Corona>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
import Corona from "@/components/Corona.vue";
import Xmas from "@/components/Xmas.vue";

export default {
  name: "app",
  components: {
    Navigation,
    Footer,
    Corona,
    Xmas,
  },
  head: {
    title: {
      inner: "Home",
    },
    // Meta tags
    meta: [
      { name: "application-name", content: "Soli-Erlangen" },
      { name: "author", content: "RKV Solidarität Erlangen 1903 e.V." },
      {
        name: "keywords",
        content:
          "solidarität, erlangen, radball, kunstrad, reigen, einrad, gymnastik, kinder, jugend, tanzen, turnen",
      },
    ],
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

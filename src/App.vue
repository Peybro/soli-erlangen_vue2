<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "app",
  components: {
    Navigation,
    Footer
  },
  head: {
    title: {
      inner: "Home"
    },
    // Meta tags
    meta: [
      { name: "application-name", content: "Soli-Erlangen" },
      { name: "author", content: "RKV Solidarität Erlangen 1903 e.V." },
      {
        name: "keywords",
        content:
          "solidarität, erlangen, radball, kunstrad, reigen, einrad, gymnastik, kinder, jugend, tanzen, turnen"
      }
    ]
  }
};
</script>

<style>
</style>

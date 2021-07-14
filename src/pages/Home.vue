<template>
  <div>
    <div class="bg-light pb-3">
      <!-- sehr groß -->
      <div class="d-none d-xl-block">
        <div class="row pl-3">
          <Kontakt class="col-3 border-right"></Kontakt>
          <div class="col-9">
            <Karusell class="container mb-3"></Karusell>
            <!-- <Termine></Termine> -->
          </div>
        </div>
      </div>

      <!-- groß - klein -->
      <div class="d-block d-sm-block d-md-block d-lg-block d-xl-none">
        <Karusell></Karusell>
        <hr>
        <Kontakt class="mt-3"></Kontakt>
        <!-- <hr>
        <Termine class="mt-3"></Termine> -->
      </div>
    </div>
  </div>
</template>

<script>
import Kontakt from "@/pages/Kontakt.vue";
import Karusell from "@/components/Karusell-Home.vue";
// import Termine from "@/pages/Termine.vue";

export default {
  components: {
    Kontakt,
    Karusell,
    // Termine
  },
  head: {
    title: {
      inner: "Home"
    },
    // Meta tags
    meta: [
      {
        name: "description",
        content: "Herzlich willkommen auf der Seite der Solidarität Erlangen"
      },
      // Facebook / Open Graph
      { property: "og:title", content: "Solidarität Erlangen" },
      { property: "og:type", content: "Website" },
      { property: "og:url", content: "https://www.soli-erlangen.de/" },
      {
        property: "og:description",
        content: "Herzlich willkommen auf der Seite der Solidarität Erlangen"
      },
      {
        property: "og:image",
        content: "https://soli-erlangen.de/NewPage/bilder/soli-logo.png"
      },
      { property: "og:site_name", content: "Soli-Erlangen" }
    ]
  }
};
</script>


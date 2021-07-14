<template>
  <div class="container">
    <div class="mb-3">
      <h2 class="section">Vorstand:</h2>
      <b-row no-gutters>
        <b-col md="5">
          <b-card
            title="Unsere Geschäftsführung"
            style="max-width: 20rem;"
            class="mr-2 mb-2"
          >
            <b-card-text>Am 14. Juli 2021 hat der Verein nach 3 Jahren einen neuen Vorstand gewählt.</b-card-text>
            <b-button @click="meGusta()" :variant="!liked?'primary':'danger'" class="float-right">
              {{ liked ? 'Gefällt mir doch nicht:' : 'Gefällt mir:' }}
              <b-badge variant="light">{{ this.likes }}</b-badge>
            </b-button>
          </b-card>
        </b-col>
        <b-col md="7">
          <Vorstand></Vorstand>
        </b-col>
      </b-row>
    </div>

    <div>
      <h2 class="section">Trainer:</h2>
      <Trainer></Trainer>
    </div>
  </div>
</template>

<script>
import Vorstand from "@/components/Vorstand.vue";
import Trainer from "@/components/Trainer.vue";

export default {
  components: {
    Vorstand,
    Trainer
  },
  data() {
    return {
      likes: 37,
      liked: false
    };
  },
  methods: {
    meGusta() {
      this.liked === false ? this.likes++ : this.likes--;
      this.liked = !this.liked;
    }
  },
  head: {
    title: {
      inner: "Vorstand"
    },
    // Meta tags
    meta: [
      {
        name: "description",
        content: "Hier lernst du die Drahtzieher unseres Vereins kennen."
      },
      // Facebook / Open Graph
      { property: "og:title", content: "Solivorstand & -trainer" },
      { property: "og:type", content: "Website" },
      {
        property: "og:url",
        content: "https://www.soli-erlangen.de/verein/vorstandUndTrainer"
      },
      {
        property: "og:description",
        content: "Vorstand und Trainer der Soli-Erlangen"
      },
      {
        property: "og:image",
        content: "https://soli-erlangen.de/NewPage/bilder/soli-logo.png"
      },
      { property: "og:site_name", content: "Soli-Erlangen: Vorstand & Trainer" }
    ]
  }
};
</script>

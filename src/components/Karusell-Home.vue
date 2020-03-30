<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#333"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        v-for="img in karusell"
        :key="img.src"
        :caption="img.caption"
        :text="img.text"
      >
        <img slot="img" class="d-block img-fluid w-100" :src="img.src" :alt="img.alt" />
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      karusell: [
        {
          caption: "Alles im Grünen Bereich",
          text:
            "Unsere erfolgreiche Radballgruppe nach dem Sieg der Bayerischen Meisterschaft in Burgkunstadt",
          src:
            "https://soli-erlangen.de/assets/slideshow/Bayerischer_Meister_U17_2020_Team.jpeg",
          alt: "Radball Gruppe bei Bayerischer Meisterschaft"
        },
        {
          caption: "4er Reigen beim Aufwärmen",
          text: "",
          src:
            "https://soli-erlangen.de/assets/slideshow/reigen_4er_warmup.jpg",
          alt: "4er Reigen beim Aufwärmen"
        },
        {
          caption: "Ehrung vom Bürgermeister",
          text:
            "Benedikt und Sebastian bekommen von OB Janik eine Ehrennadel überreicht.",
          src:
            "https://soli-erlangen.de/assets/slideshow/radball_ehrung_bürgermeister.jpg",
          alt: "Ehrennadel vom Bürgermeister"
        },
        {
          caption: "5. in ganz Deutschland!",
          text:
            "Im Finale der Deutschen Meisterschaft 2018 U15 in Worms haben sich unsere Jungs dem 5. Platz in ganz Deutschland gesichert.",
          src:
            "https://soli-erlangen.de/assets/slideshow/radball_dm_2018_finale.jpg",
          alt: "5. Platz bei DM U15 2018"
        },
        {
          caption: "Nachwuchsradballer",
          text: "vl.: Benedikt, Sebastian, Moritz und Tobi",
          src: "https://soli-erlangen.de/assets/slideshow/radball_teams.jpg",
          alt: "Unsere Jugendmannschaften"
        },
        {
          caption: "6er Reigen beim Fahren einer Übung",
          text: "",
          src: "https://soli-erlangen.de/assets/slideshow/reigen_6er_form.jpg",
          alt: "6er Reigen beim Fahren einer Übung"
        }
      ]
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  }
};
</script>
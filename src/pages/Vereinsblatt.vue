<template>
  <div>
    <b-alert v-for="blatt in vereinsblatt" :key="blatt.year">
      <b-link :href="blatt.link1">{{blatt.year}}_1</b-link>
      <br />
      <b-link
        :href="blatt.link2"
        :class="blatt.link2===''?'text-danger':'text-primary'"
        :disabled="blatt.link2!==''"
      >{{blatt.year}}_2</b-link>
    </b-alert>
  </div>
</template>

<script>
export default {
  data() {
    return {
      start: "2005",
      vereinsblatt: [
        {
          year: 2005,
          link1:
            "https://www.soli-erlangen.de/assets/vereinsblatt/soli_info_2005_1.pdf",
          link2:
            "https://www.soli-erlangen.de/assets/vereinsblatt/soli_info_2005_2.pdf"
        },
        {
          year: 2006,
          link1:
            "https://www.soli-erlangen.de/assets/vereinsblatt/soli_info_2006_1.pdf",
          link2:
            "https://www.soli-erlangen.de/assets/vereinsblatt/soli_info_2006_2.pdf"
        },
        {
          year: 2007,
          link1:
            "https://www.soli-erlangen.de/assets/vereinsblatt/soli_info_2007_1.pdf",
          link2:
            "https://www.soli-erlangen.de/assets/vereinsblatt/soli_info_2007_2.pdf"
        },
        {
          year: 2008,
          link1:
            "https://www.soli-erlangen.de/assets/vereinsblatt/soli_info_2008_1.pdf",
          link2:
            "https://www.soli-erlangen.de/assets/vereinsblatt/soli_info_2008_2.pdf"
        },
        {
          year: 2009,
          link1:
            "https://www.soli-erlangen.de/assets/vereinsblatt/soli_info_2009_1.pdf",
          link2:
            "https://www.soli-erlangen.de/assets/vereinsblatt/soli_info_2009_2.pdf"
        },
        {
          year: 2010,
          link1:
            "https://www.soli-erlangen.de/assets/vereinsblatt/soli_info_2010_1.pdf",
          link2:
            "https://www.soli-erlangen.de/assets/vereinsblatt/soli_info_2010_2.pdf"
        },
        {
          year: 2011,
          link1:
            "https://www.soli-erlangen.de/assets/vereinsblatt/soli_info_2011_1.pdf",
          link2:
            "https://www.soli-erlangen.de/assets/vereinsblatt/soli_info_2011_2.pdf"
        },
        {
          year: 2012,
          link1:
            "https://www.soli-erlangen.de/assets/vereinsblatt/soli_info_2012_1.pdf",
          link2:
            "https://www.soli-erlangen.de/assets/vereinsblatt/soli_info_2012_2.pdf"
        },
        {
          year: 2013,
          link1:
            "https://www.soli-erlangen.de/assets/vereinsblatt/soli_info_2013_1.pdf",
          link2:
            "https://www.soli-erlangen.de/assets/vereinsblatt/soli_info_2013_2.pdf"
        },
        {
          year: 2014,
          link1:
            "https://www.soli-erlangen.de/assets/vereinsblatt/soli_info_2014_1.pdf",
          link2:
            "https://www.soli-erlangen.de/assets/vereinsblatt/soli_info_2014_2.pdf"
        },
        {
          year: 2015,
          link1:
            "https://www.soli-erlangen.de/assets/vereinsblatt/soli_info_2015_1.pdf",
          link2:
            "https://www.soli-erlangen.de/assets/vereinsblatt/soli_info_2015_2.pdf"
        },
        {
          year: 2016,
          link1:
            "https://www.soli-erlangen.de/assets/vereinsblatt/soli_info_2016_1.pdf",
          link2:
            "https://www.soli-erlangen.de/assets/vereinsblatt/soli_info_2016_2.pdf"
        },
        {
          year: 2017,
          link1:
            "https://www.soli-erlangen.de/assets/vereinsblatt/soli_info_2017_1.pdf",
          link2:
            "https://www.soli-erlangen.de/assets/vereinsblatt/soli_info_2017_2.pdf"
        },
        {
          year: 2018,
          link1:
            "https://www.soli-erlangen.de/assets/vereinsblatt/soli_info_2018_1.pdf",
          link2:
            "https://www.soli-erlangen.de/assets/vereinsblatt/soli_info_2018_2.pdf"
        },
        {
          year: 2019,
          link1:
            "https://www.soli-erlangen.de/assets/vereinsblatt/soli_info_2019_1.pdf",
          link2:
            "https://www.soli-erlangen.de/assets/vereinsblatt/soli_info_2005_2.pdf"
        },
        {
          year: 2020,
          link1:
            "https://www.soli-erlangen.de/assets/vereinsblatt/soli_info_2020_1.pdf",
          link2: ""
        }
      ]
    };
  },
  methods: {},
  //   mounted: {
  //     fillArray() {
  //       const thisYear = new Date().getFullYear;
  //       for (let i = start; i < thisYear; i++) {
  //         this.vereinsblatt.push(i);
  //       }
  //     }
  //   },
  head: {
    title: {
      inner: "Vereinsblatt"
    },
    // Meta tags
    meta: [
      {
        name: "description",
        content:
          "Geschehnisse rund um den Verein werden halbjährlich in der Vereinszeitung veröffentlicht."
      },
      // Facebook / Open Graph
      { property: "og:title", content: "Geschichte der Solidarität Erlangen" },
      { property: "og:type", content: "Website" },
      {
        property: "og:url",
        content: "https://www.soli-erlangen.de/links/vereinsblatt"
      },
      {
        property: "og:description",
        content:
          "Geschehnisse rund um den Verein werden halbjährlich in der Vereinszeitung veröffentlicht."
      },
      { property: "og:site_name", content: "Soli-Erlangen: Vereinsblatt" }
    ]
  }
};
</script>

<style scoped>
a.disabled {
  pointer-events: none;
}
</style>
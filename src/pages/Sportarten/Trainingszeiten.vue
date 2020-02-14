<template>
  <div>
    <div class="p-3 d-none d-md-block d-lg-block d-xl-block">
      <div class="row">
        <div class="col-3 border-right">
          <h2>Trainer:</h2>
          <Trainer></Trainer>
        </div>
        <div class="col-9 container">
          <b-table striped hover responsive :items="items"></b-table>
        </div>
      </div>
    </div>

    <div class="container d-block d-sm-block d-md-none">
      <b-table striped hover responsive :items="items"></b-table>

      <div>
        <hr>
        <h2>Trainer:</h2>
        <Trainer></Trainer>
      </div>
    </div>
  </div>
</template>

<script>
import Trainer from "@/components/Trainer.vue";

export default {
  components: {
    Trainer
  },
  data() {
    return {
      items: [
        // { Zeit: "16.00 - 16.30", Montag: "", Dienstag: "", Mittwoch: "", Donnerstag: "Reigen", Freitag: "", Samstag: "", Sonntag: "" },
        // { Zeit: "16.30 - 17.00", Montag: "Kindertanzen", Dienstag: "", Mittwoch: "", Donnerstag: "Reigen", Freitag: "Radball (Junior)", Samstag: "", Sonntag: "" },
        // { Zeit: "17.00 - 17.30", Montag: "Kindertanzen", Dienstag: "Kinderturnen", Mittwoch: "", Donnerstag: "Reigen", Freitag: "Radball (Junior)", Samstag: "", Sonntag: "" },
        // { Zeit: "17.30 - 18.00", Montag: "", Dienstag: "Kinderturnen", Mittwoch: "", Donnerstag: "Reigen", Freitag: "Radball (Junior)", Samstag: "", Sonntag: "" },
        // { Zeit: "18.00 - 18.30", Montag: "", Dienstag: "Kunstrad", Mittwoch: "", Donnerstag: "", Freitag: "Radball (Junior)", Samstag: "", Sonntag: "" },
        // { Zeit: "18.30 - 19.00", Montag: "", Dienstag: "Kunstrad", Mittwoch: "", Donnerstag: "Radball (Junior)", Freitag: "Radball (Junior)", Samstag: "", Sonntag: "" },
        // { Zeit: "19.00 - 19.30", Montag: "", Dienstag: "Kunstrad", Mittwoch: "", Donnerstag: "Radball (Junior)", Freitag: "Radball (Junior)", Samstag: "", Sonntag: "" },
        // { Zeit: "19.30 - 20.00", Montag: "", Dienstag: "", Mittwoch: "", Donnerstag: "Radball", Freitag: "Radball (Junior)", Samstag: "", Sonntag: "" },
        // { Zeit: "20.00 - 20.30", Montag: "", Dienstag: "Gymnastik", Mittwoch: "", Donnerstag: "Radball", Freitag: "Radball (Junior)", Samstag: "", Sonntag: "" },
        // { Zeit: "20.30 - 21.00", Montag: "", Dienstag: "Gymnastik", Mittwoch: "", Donnerstag: "Radball", Freitag: "Radball (Junior)", Samstag: "", Sonntag: "" },
        // { Zeit: "21.00 - 21.30", Montag: "", Dienstag: "Gymnastik", Mittwoch: "", Donnerstag: "Radball", Freitag: "", Samstag: "", Sonntag: "" },
        // { Zeit: "21.30 - 22.00", Montag: "", Dienstag: "Gymnastik", Mittwoch: "", Donnerstag: "Radball", Freitag: "", Samstag: "", Sonntag: "" }

        {
          Sport: "Kunstrad",
          Montag: "",
          Dienstag: "18:00 - 19:30",
          Mittwoch: "",
          Donnerstag: "",
          Freitag: "",
          Samstag: "",
          Sonntag: ""
        },
        {
          Sport: "Reigen",
          Montag: "",
          Dienstag: "",
          Mittwoch: "",
          Donnerstag: "16:00 - 18:00",
          Freitag: "",
          Samstag: "",
          Sonntag: ""
        },
        {
          Sport: "Radball (Junioren)",
          Montag: "",
          Dienstag: "",
          Mittwoch: "",
          Donnerstag: "18:30 - 19:30",
          Freitag: "16:30 - 21:00",
          Samstag: "",
          Sonntag: ""
        },
        {
          Sport: "Radball",
          Montag: "",
          Dienstag: "",
          Mittwoch: "",
          Donnerstag: "19:30 - 22:00",
          Freitag: "",
          Samstag: "",
          Sonntag: ""
        },
        {
          Sport: "Gymnastik",
          Montag: "",
          Dienstag: "19:30 - 22:00",
          Mittwoch: "",
          Donnerstag: "",
          Freitag: "",
          Samstag: "",
          Sonntag: ""
        },
        {
          Sport: "Kinderturnen",
          Montag: "",
          Dienstag: "17:00 - 18:00",
          Mittwoch: "",
          Donnerstag: "",
          Freitag: "",
          Samstag: "",
          Sonntag: ""
        },
        {
          Sport: "Kindertanzen",
          Montag: "16:30 - 17:30",
          Dienstag: "",
          Mittwoch: "",
          Donnerstag: "",
          Freitag: "",
          Samstag: "",
          Sonntag: ""
        }
      ]
    };
  },
  head: {
    title: {
      inner: "Trainingszeiten"
    },
    // Meta tags
    meta: [
      { name: "description", content: "Alle Trainingszeiten damit du nichts verpasst" }, 
      // Facebook / Open Graph
      { property: "og:title", content: "Soli-Training" },
      { property: "og:type", content: "Website" },
      { property: "og:url", content: "https://www.soli-erlangen.de/sportarten" },
      {
        property: "og:description",
        content: "Alle Trainingszeiten damit du nichts verpasst"
      },
      {
        property: "og:image",
        content: "https://soli-erlangen.de/NewPage/bilder/soli-logo.png"
      },
      { property: "og:site_name", content: "Soli-Erlangen: Trainingszeiten" }
    ]
  }
};
</script>

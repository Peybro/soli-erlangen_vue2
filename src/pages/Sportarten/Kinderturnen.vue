<template>
  <div>
    <div class="p-3 d-none d-md-block d-lg-block d-xl-block">
      <div class="row">
        <div class="col-3 border-right">
          <h2>Trainer:</h2>
          <Trainer></Trainer>
        </div>

        <div class="col-9 container">
          <h2 class="section">Kinderturnen</h2>
          <b-alert show variant="primary">
            <p>Dienstag: 17:00 - 18:00 Uhr</p>
          </b-alert>

          <p>
            Durch Umsetzung bestimmter Handlungsprinzipien soll ein langfristiger Wechsel vom Mitmachen und Mitspielen zum selbstbestimmten Handeln erreicht werden: Offenheit, Aufforderungscharakter, Freiwilligkeit, Zwanglosigkeit, Wahlmöglichkeit/Entscheidungsmöglichkeit, Initiativmöglichkeit. Die sozialen Ziele sind unter anderem Wahrnehmung der Gefühle und Bedürfnisse anderer, Erkennung und Beachtung von Regeln, Fähigkeit zur Gruppenintegration, Umgang mit Misserfolg, Aufbau von Rücksichtnahme und Toleranz.
            <a
              href="https://de.wikipedia.org/wiki/Kinderturnen"
            >©</a>
          </p>
        </div>
      </div>
    </div>

    <div class="container d-block d-sm-block d-md-none">
      <h2 class="section">Kinderturnen</h2>
      <b-alert show variant="primary">
        <router-link to="/sportarten">
          <i class="material-icons m-2 float-right">alarm</i>
        </router-link>
        <p>Dienstag: 17:00 - 18:00 Uhr</p>
      </b-alert>

      <p>
        Durch Umsetzung bestimmter Handlungsprinzipien soll ein langfristiger Wechsel vom Mitmachen und Mitspielen zum selbstbestimmten Handeln erreicht werden: Offenheit, Aufforderungscharakter, Freiwilligkeit, Zwanglosigkeit, Wahlmöglichkeit/Entscheidungsmöglichkeit, Initiativmöglichkeit. Die sozialen Ziele sind unter anderem Wahrnehmung der Gefühle und Bedürfnisse anderer, Erkennung und Beachtung von Regeln, Fähigkeit zur Gruppenintegration, Umgang mit Misserfolg, Aufbau von Rücksichtnahme und Toleranz.
        <a
          href="https://de.wikipedia.org/wiki/Kinderturnen"
        >©</a>
      </p>

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
  head: {
    title: {
      inner: "Kinderturnen"
    },
    // Meta tags
    meta: [
      { name: "description", content: "Alles wichtige über Kinderturnen bei der Soli-Erlangen" }, 
      // Facebook / Open Graph
      { property: "og:title", content: "Kinderturnen bei der Soli-Erlangen" },
      { property: "og:type", content: "Website" },
      { property: "og:url", content: "https://www.soli-erlangen.de/sportarten/kinderturnen" },
      {
        property: "og:description",
        content: "Alles wichtige über Kinderturnen bei der Soli-Erlangen"
      },
      {
        property: "og:image",
        content: "https://soli-erlangen.de/NewPage/bilder/soli-logo.png"
      },
      { property: "og:site_name", content: "Soli-Erlangen: Kinderturnen" }
    ]
  }
};
</script>

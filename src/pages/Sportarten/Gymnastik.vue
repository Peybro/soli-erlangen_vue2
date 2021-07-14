<template>
  <div>
    <div class="p-3 d-none d-md-block d-lg-block d-xl-block">
      <div class="row">
        <div class="col-3 border-right">
          <h2>Trainer:</h2>
          <Trainer></Trainer>
        </div>

        <div class="col-9 container">
          <h2 class="section">Gymnastik</h2>
          <b-alert show variant="primary">
            <p>Dienstag: 19:30 - 22:00 Uhr</p>
          </b-alert>

          <p>Freude an sportlicher Betätigung zur Erhaltung der Fitness für den eigenen Körper, ohne im Wettkampf mit Maßband und Stoppuhr ermittelte Leistungen zu erzwingen, waren Idee und Motivation ein Gymnastik-abteilung zu gründen.</p>
          <p>Schon 1973 verstand es die Gymnastikgruppe der "Soli", die Musik in rhythmische Bewegung umzusetzen. Ziel war es, in der Gymnastik als Ausgleichssport die motorischen Grundeigenschaften zu verbessern oder für den Nichtsportler die Möglichkeit anzubieten, in der Gruppe die Muskulatur und den Kreislauf fit zu halten.</p>
          <p>Parallel zu den spezifischen Sportarten der "Soli", wie Radball und Kunstradfahren, soll mit der Gymnastik die breite Basis unserer Mitbürger animiert werden, um der Bewegungsarmut unserer technisierten Gesellschaft entgegenzuwirken. Wöchentlich 2 Stunden sportliche Betätigung als Ausglauch für statische Körperhaltung bei der Arbeit, beim Autofahren oder der Entspannung vor dem Fernsehapparat sind nicht genug, aber der Grundstein für das persönliche Eintreten der Degenerationserscheinungen der Muskulatur entgegenzuwirken.</p>
          <p>
            <b>Nutzen Sie die Möglichkeit.</b>
          </p>
        </div>
      </div>
    </div>
    <div class="container d-block d-sm-block d-md-none">
      <h2 class="section">Gymnastik</h2>
      <b-alert show variant="primary">
        <router-link to="/sportarten">
          <i class="material-icons m-2 float-right">alarm</i>
        </router-link>
        <p>Dienstag: 19:30 - 22:00 Uhr</p>
      </b-alert>

      <p>Freude an sportlicher Betätigung zur Erhaltung der Fitness für den eigenen Körper, ohne im Wettkampf mit Maßband und Stoppuhr ermittelte Leistungen zu erzwingen, waren Idee und Motivation ein Gymnastik-abteilung zu gründen.</p>
      <p>Schon 1973 verstand es die Gymnastikgruppe der "Soli", die Musik in rhythmische Bewegung umzusetzen. Ziel war es, in der Gymnastik als Ausgleichssport die motorischen Grundeigenschaften zu verbessern oder für den Nichtsportler die Möglichkeit anzubieten, in der Gruppe die Muskulatur und den Kreislauf fit zu halten.</p>
      <p>Parallel zu den spezifischen Sportarten der "Soli", wie Radball und Kunstradfahren, soll mit der Gymnastik die breite Basis unserer Mitbürger animiert werden, um der Bewegungsarmut unserer technisierten Gesellschaft entgegenzuwirken. Wöchentlich 2 Stunden sportliche Betätigung als Ausglauch für statische Körperhaltung bei der Arbeit, beim Autofahren oder der Entspannung vor dem Fernsehapparat sind nicht genug, aber der Grundstein für das persönliche Eintreten der Degenerationserscheinungen der Muskulatur entgegenzuwirken.</p>
      <p>
        <b>Nutzen Sie die Möglichkeit.</b>
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
      inner: "Gymnastik"
    },
    // Meta tags
    meta: [
      { name: "description", content: "Alles wichtige über Gymnastik bei der Soli-Erlangen" }, 
      // Facebook / Open Graph
      { property: "og:title", content: "Gymnastik bei der Soli-Erlangen" },
      { property: "og:type", content: "Website" },
      { property: "og:url", content: "https://www.soli-erlangen.de/sportarten/gymnastik" },
      {
        property: "og:description",
        content: "Alles wichtige über Gymnastik bei der Soli-Erlangen"
      },
      {
        property: "og:image",
        content: "https://soli-erlangen.de/NewPage/bilder/soli-logo.png"
      },
      { property: "og:site_name", content: "Soli-Erlangen: Gymnastik" }
    ]
  }
};
</script>
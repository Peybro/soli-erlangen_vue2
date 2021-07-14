<template>
  <div>
    <div class="p-3 d-none d-md-block d-lg-block d-xl-block">
      <div class="row">
        <div class="col-3 border-right">
          <h2>Trainer:</h2>
          <Trainer></Trainer>
        </div>

        <div class="col-9 container">
          <h2 class="section">Reigen</h2>
          <b-alert show variant="primary">
            <p>Donnerstag: 16:00 - 17:00 Uhr (Schüler / Jugend)</p>
            <p>Donnerstag: 17:00 - 18:00 Uhr (Jugend)</p>
          </b-alert>

          <p>Früher war ein Einradfahrer eine Zirkussensation; heute ist es jedoch eine beliebte Beschäftigung für Kinder und Jugendliche - einfach weil es Spaß macht.</p>
          <p>Zugegeben man braucht ein bisschen Übung um auf dem Einrad fahren zu können, aber wenn man erst einmal gelernt hat, das Gleichgewicht, auf dem Rad zu halten, gehorcht es auch seinem Fahrer.</p>
          <p>Bei uns im Verein wird das Einradfahren als 4er oder 6er Mannschaftsportart mit minderstens drei Wettbewerben im Jahr betrieben, wo es besonders auf das sichere und ruhige Fahren auf dem Einrad im Team ankommt. Mit dem ensprechenden Ergeiz und Kameradschaft sind auch schnell erste Erfolge zu erreichen.</p>
          <h4>Voraussetzungen:</h4>
          <p>Um Einradfahren zu erlernen muss man nicht viele Voraussetzungen mitbringen. Es gibt keine Altereinschränkung, man sollte Fahradfahren können, Spaß am Sport und Bewegung haben, etwas Durchhaltevermögen und den Ergeiz gemeinsam im Team (Mannschaft) etwas zu erreichen.</p>
        </div>
      </div>
    </div>

    <div class="container d-block d-sm-block d-md-none">
      <h2 class="section">Reigen</h2>
      <b-alert show variant="primary">
        <router-link to="/sportarten">
          <i class="material-icons m-2 float-right">alarm</i>
        </router-link>
        <p>Donnerstag: 16:00 - 17:00 Uhr (Schüler / Jugend)</p>
        <p>Donnerstag: 17:00 - 18:00 Uhr (Jugend)</p>
      </b-alert>

      <p>Früher war ein Einradfahrer eine Zirkussensation; heute ist es jedoch eine beliebte Beschäftigung für Kinder und Jugendliche - einfach weil es Spaß macht.</p>
      <p>Zugegeben man braucht ein bisschen Übung um auf dem Einrad fahren zu können, aber wenn man erst einmal gelernt hat, das Gleichgewicht, auf dem Rad zu halten, gehorcht es auch seinem Fahrer.</p>
      <p>Bei uns im Verein wird das Einradfahren als 4er oder 6er Mannschaftsportart mit minderstens drei Wettbewerben im Jahr betrieben, wo es besonders auf das sichere und ruhige Fahren auf dem Einrad im Team ankommt. Mit dem ensprechenden Ergeiz und Kameradschaft sind auch schnell erste Erfolge zu erreichen.</p>
      <h4>Voraussetzungen:</h4>
      <p>Um Einradfahren zu erlernen muss man nicht viele Voraussetzungen mitbringen. Es gibt keine Altereinschränkung, man sollte Fahradfahren können, Spaß am Sport und Bewegung haben, etwas Durchhaltevermögen und den Ergeiz gemeinsam im Team (Mannschaft) etwas zu erreichen.</p>

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
      inner: "Reigen"
    },
    // Meta tags
    meta: [
      { name: "description", content: "Alles wichtige über Reigen bei der Soli-Erlangen" }, 
      // Facebook / Open Graph
      { property: "og:title", content: "Reigen bei der Soli-Erlangen" },
      { property: "og:type", content: "Website" },
      { property: "og:url", content: "https://www.soli-erlangen.de/sportarten/einrad" },
      {
        property: "og:description",
        content: "Alles wichtige über Reigen bei der Soli-Erlangen"
      },
      {
        property: "og:image",
        content: "https://soli-erlangen.de/NewPage/bilder/soli-logo.png"
      },
      { property: "og:site_name", content: "Soli-Erlangen: Reigen" }
    ]
  }
};
</script>


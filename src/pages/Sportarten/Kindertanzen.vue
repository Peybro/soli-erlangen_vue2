<template>
  <div>
    <div class="p-3 d-none d-md-block d-lg-block d-xl-block">
      <div class="row">
        <div class="col-3 border-right">
          <h2>Trainer:</h2>
          <Trainer></Trainer>
        </div>

        <div class="col-9 container">
          <h2 class="section">Kindertanzen</h2>
          <b-alert show variant="primary">
            <p>Montag: 16:30 - 17:30 Uhr</p>
          </b-alert>

          <p>Bewegung ist unverzichtbar für die Entwicklung von Kindern und sie ist Ausdruck von Vitalität, von kindlicher Neugier und Lebensfreude.</p>

          <p>
            Unter der Leitung von Janice findet das Tanzen im Kindergarten "Die Arche" in Tennenlohe statt (
            <a
              href="https://wp.tennenlohe-evangelisch.de/"
            >wp.tennenlohe-evangelisch.de</a>).
          </p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14643.137601506642!2d11.010329468927958!3d49.54935271049923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a1fe95232de9bf%3A0x519124d61e7f6904!2sKinderland+%22Die+Arche%22!5e0!3m2!1sde!2sde!4v1522407004855"
            width="100%"
            height="400"
            frameborder="0"
            style="border:0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>

    <div class="container d-block d-sm-block d-md-none">
      <div>
        <h2 class="section">Kindertanzen</h2>
        <b-alert show variant="primary">
          <router-link to="/sportarten">
            <i class="material-icons m-2 float-right">alarm</i>
          </router-link>
          <p>Montag: 16:30 - 17:30 Uhr</p>
        </b-alert>

        <p>Bewegung ist unverzichtbar für die Entwicklung von Kindern und sie ist Ausdruck von Vitalität, von kindlicher Neugier und Lebensfreude.</p>

        <p>
          Unter der Leitung von Janice findet das Tanzen im Kindergarten "Die Arche" in Tennenlohe statt (
          <a
            href="https://wp.tennenlohe-evangelisch.de/"
          >wp.tennenlohe-evangelisch.de</a>).
        </p>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14643.137601506642!2d11.010329468927958!3d49.54935271049923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a1fe95232de9bf%3A0x519124d61e7f6904!2sKinderland+%22Die+Arche%22!5e0!3m2!1sde!2sde!4v1522407004855"
          width="100%"
          height="400"
          frameborder="0"
          style="border:0"
          allowfullscreen
        ></iframe>

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
      inner: "Kindertanzen"
    },
    // Meta tags
    meta: [
      { name: "description", content: "Alles wichtige über Kindertanzen bei der Soli-Erlangen" }, 
      // Facebook / Open Graph
      { property: "og:title", content: "Kindertanzen bei der Soli-Erlangen" },
      { property: "og:type", content: "Website" },
      { property: "og:url", content: "https://www.soli-erlangen.de/sportarten/kindertanzen" },
      {
        property: "og:description",
        content: "Alles wichtige über Kindertanzen bei der Soli-Erlangen"
      },
      {
        property: "og:image",
        content: "https://soli-erlangen.de/NewPage/bilder/soli-logo.png"
      },
      { property: "og:site_name", content: "Soli-Erlangen: Kindertanzen" }
    ]
  }
};
</script>

<template>
  <div class="container">
    <h2 class="section">
      <router-link to="/kontakt" class="heading text-dark">Kontakt</router-link>
      <b-link
        class="btn btn-primary mt-1 float-right"
        href="https://www.facebook.com/RalfHaeusinger/"
        target="_blank"
      >
        <i class="fab fa-facebook" style="width: 50px"></i>
        <!-- Treff uns auf Facebook -->
      </b-link>
    </h2>

    <Trainer></Trainer>

    <!-- <div>
      <div class="card p-1 mb-2">
        <b-dropdown right split text="1. Vorstand" variant="outline-success" class="mb-2">
          <b-dropdown-item>Ralf</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>
            <i class="fas fa-phone" style="width:30px"></i>
            09132/796970
          </b-dropdown-item>
          <b-dropdown-item href="https://api.whatsapp.com/send?phone=+4917645145696">
            <i class="fab fa-whatsapp" style="width:30px"></i>
            WhatsApp
          </b-dropdown-item>
          <b-dropdown-item href="mailto:ralf.haeusinger@t-online.de">
            <i class="far fa-envelope" style="width:30px"></i>
            ralf.haeusinger@t-online.de
          </b-dropdown-item>
        </b-dropdown>

        <b-dropdown right split text="2. Vorstand" variant="outline-success" class="mb-2"></b-dropdown>
      </div>

      <div class="card p-2 mb-2">
        <h3>Janice</h3>
        <p>Tanzlehrerin</p>
        <p>
          <i class="fas fa-phone" style="width:30px"></i>
          0176/32843418
        </p>
        <p>
          <i class="fab fa-whatsapp" style="width:30px"></i>
          <a class="heading" href="https://api.whatsapp.com/send?phone=+4917632843418">WhatsApp</a>
        </p>
        <hr>
        <p>
          <i class="fas fa-at" style="width:30px"></i>
          <a
            href="mailto:janice.haeusinger93@t-online.de"
            method="post"
          >janice.haeusinger93@t-online.de</a>
        </p>
      </div>
    </div>-->

    <b-tabs content-class="mb-3" class="mt-3">
      <b-tab title="Kindertanzen">
        <!-- <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14643.137601506642!2d11.010329468927958!3d49.54935271049923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a1fe95232de9bf%3A0x519124d61e7f6904!2sKinderland+%22Die+Arche%22!5e0!3m2!1sde!2sde!4v1522407004855"
            width="100%"
            height="400"
            frameborder="0"
            style="border:0"
            allowfullscreen
          ></iframe> -->
        <!-- <b-link class="btn btn-info w-100" target="_blank" href="https://goo.gl/maps/Vc3AtrEdKqs">
            <i class="fas fa-map-marker" style="width:30px"></i>
            Lachnerstraße 43, Tennenlohe
          </b-link> -->
        <iframe
          width="425"
          height="350"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://www.openstreetmap.org/export/embed.html?bbox=11.020931303501131%2C49.55175226579878%2C11.024471819400787%2C49.5532887609389&amp;layer=mapnik&amp;marker=49.55252051941049%2C11.022701561450958"
          style="border: 1px solid black"
        ></iframe
        ><br /><small
          ><a
            href="https://www.openstreetmap.org/?mlat=49.55252&amp;mlon=11.02270#map=19/49.55252/11.02270"
            >Größere Karte anzeigen</a
          ></small
        >
      </b-tab>

      <b-tab title="Alles andere" active>
        <!-- <iframe
            id="googleMap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.7076603160144!2d10.966057874534954!3d49.58996459567304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a1f8a57dce0d79%3A0xf02112a1bae9d86c!2sJakob-Nein-Stra%C3%9Fe+6%2C+91056+Erlangen!5e0!3m2!1sde!2sde!4v1511380505249"
            width="100%"
            height="400"
            frameborder="0"
            style="border:0"
            allowfullscreen
          ></iframe> -->
        <iframe
          width="425"
          height="350"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://www.openstreetmap.org/export/embed.html?bbox=10.963054597377777%2C49.590108415432184%2C10.966595113277435%2C49.59164370368162&amp;layer=mapnik&amp;marker=49.590876065597286%2C10.964824855327606"
          style="border: 1px solid black"
        ></iframe
        ><br /><small
          ><a
            href="https://www.openstreetmap.org/?mlat=49.59088&amp;mlon=10.96482#map=19/49.59088/10.96482"
            >Größere Karte anzeigen</a
          ></small
        >
        <!-- <b-link
            class="btn btn-info w-100"
            target="_blank"
            href="https://www.google.com/maps/place/Jakob-Nein-Stra%C3%9Fe+6,+91056+Erlangen/@49.591039,10.965519,16z/data=!4m5!3m4!1s0x47a1f8a57dce0d79:0xf02112a1bae9d86c!8m2!3d49.5910386!4d10.9655193?hl=de"
          >
            <i class="fas fa-map-marker" style="width:30px"></i>
            Jakob-Nein-Straße 6, Büchenbach
          </b-link> -->
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Trainer from "@/components/Trainer.vue";

export default {
  components: {
    Trainer,
  },
  head: {
    title: {
      inner: "Kontakt",
    },
    // Meta tags
    meta: [
      { name: "description", content: "So erreichst du uns." },
      // Facebook / Open Graph
      {
        property: "og:title",
        content: "Kontaktpersonen bei der Solidarität Erlangen",
      },
      { property: "og:type", content: "Website" },
      { property: "og:url", content: "https://www.soli-erlangen.de/kontakt" },
      {
        property: "og:description",
        content: "Kontaktpersonen bei der Solidarität Erlangen",
      },
      {
        property: "og:image",
        content: "https://soli-erlangen.de/NewPage/bilder/soli-logo.png",
      },
      { property: "og:site_name", content: "Soli-Erlangen: Kontakt" },
    ],
  },
};
</script>


<style>
.heading {
  text-decoration-color: #4caf50;
}
</style>


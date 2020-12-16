<template>
  <div role="tablist">
    <div
      role="tab"
      class="mb-1"
      v-for="(mensch, index) in $root.trainer"
      :key="index"
    >
      <b-button
        block
        href="#"
        v-b-toggle="'accordion-' + index"
        variant="outline-info"
        >{{ mensch.abteilung }}</b-button
      >
      <b-collapse
        :id="'accordion-' + index"
        accordion="my-accordion"
        role="tabpanel"
      >
        <b-card>
          <b-card-text>
            <h3>
              {{ mensch.vorname }}
              <router-link
                :to="'/sportarten/' + mensch.link"
                class="btn btn-success float-right"
              >
                <!-- <img :src="mensch.logo" style="width:20px"> -->
                mehr zu {{ mensch.abteilung }}
              </router-link>
            </h3>
            <p>{{ mensch.aufgaben }}</p>
            <hr />
            <div>
              <p v-if="mensch.telefon">
                <i class="fas fa-phone" style="width:30px"></i>
                {{ mensch.telefon }}
              </p>
              <p v-if="mensch.mobil">
                <i class="fas fa-mobile-alt" style="width:30px"></i>
                {{ mensch.mobil }}
              </p>
              <p v-if="mensch.mobil" class="d-block d-sm-block d-md-none">
                <i class="fab fa-whatsapp" style="width:30px"></i>
                <b-link
                  :href="
                    'https://api.whatsapp.com/send?phone=+49' +
                      forWhatsapp(mensch.mobil)
                  "
                  >WhatsApp</b-link
                >
              </p>
              <p v-if="mensch.mail">
                <i class="far fa-envelope" style="width:30px"></i>
                <b-link href="mailto:janice.haeusinger93@t-online.de">{{
                  mensch.mail
                }}</b-link>
              </p>
            </div>
          </b-card-text>
        </b-card>
      </b-collapse>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    forWhatsapp(nummer) {
      return nummer
        .replace(" ", "")
        .replace("/", "")
        .substr(1);
    },
  },
};
</script>

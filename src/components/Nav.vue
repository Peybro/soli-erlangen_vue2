<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="success" fixed="top">
      <header>
        <!-- LARGE & MEDIUM -->
        <b-navbar-brand
          href="https://www.soli-erlangen.de"
          class="d-none d-md-block d-lg-block d-xl-block h1"
        >
          <img src="@/assets/soli-logo.png" style="width: 50px;">
          Soli-Erlangen
        </b-navbar-brand>

        <!-- SMALL -->
        <b-navbar-brand href="https://www.soli-erlangen.de" class="d-block d-sm-block d-md-none">
          <img src="@/assets/soli-logo.png" style="width: 50px;">
        </b-navbar-brand>
      </header>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Left aligned nav items -->
        <b-navbar-nav></b-navbar-nav>

        <!-- Sportarten-Nav über normalem Nav in Dropdown -->
        <b-navbar type="dark" variant="success">
          <b-navbar-nav class="mr-5 container d-block d-sm-block d-md-block d-lg-none">
            <Sportarten></Sportarten>
          </b-navbar-nav>
        </b-navbar>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Start</b-nav-item>
          <b-nav-item-dropdown text="Verein" right>
            <b-dropdown-item to="/verein/vorstandUndTrainer">Vorstand & Trainer</b-dropdown-item>
            <b-dropdown-item to="/verein/geschichte">Geschichte</b-dropdown-item>
            <b-dropdown-item href="https://www.facebook.com/RalfHaeusinger/">
              <i class="fab fa-facebook-square"></i>
              Aktuelles
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Unsere Sportarten" right>
            <b-dropdown-item to="/sportarten/kunstrad">
              <img src="@/assets/stickmen/logo_kunstrad_q.png" style="width:20px">
              Kunstrad
            </b-dropdown-item>
            <b-dropdown-item to="/sportarten/einrad">
              <img src="@/assets/stickmen/logo_einrad_q.png" style="width:20px">
              Reigen
            </b-dropdown-item>
            <b-dropdown-item to="/sportarten/radball">
              <img src="@/assets/stickmen/logo_radball_q.png" style="width:20px">
              Radball
            </b-dropdown-item>
            <b-dropdown-item to="/sportarten/gymnastik">
              <img src="@/assets/stickmen/logo_gymnastik_q.png" style="width:20px">
              Gymnastik
            </b-dropdown-item>
            <b-dropdown-item to="/sportarten/kinderturnen">
              <img src="@/assets/stickmen/logo_turnen_q.png" style="width:20px">
              Kinderturnen
            </b-dropdown-item>
            <b-dropdown-item to="/sportarten/kindertanzen">
              <img src="@/assets/stickmen/logo_tanz_q.png" style="width:20px">
              Kindertanzen
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Links" right>
            <b-dropdown-item to="/bilder">
              <i class="fas fa-camera"></i>
              Bilder
            </b-dropdown-item>
            <b-dropdown-item to="/links/vereinsblatt">
              <i class="far fa-newspaper"></i>
              Vereinsblatt
            </b-dropdown-item>
            <b-dropdown-item to="/links/termine">
              <i class="far fa-calendar-alt"></i>
              Termine
            </b-dropdown-item>
            <b-dropdown-item to="/links">
              <i class="fas fa-external-link-alt"></i>
              extern
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="/kontakt">Kontakt</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-navbar type="dark" variant="success" class="mt-5">
      <!-- gross -->
      <b-navbar-nav class="mt-4 mr-3 ml-auto d-none d-xl-block d-lg-block">
        <Sportarten></Sportarten>
      </b-navbar-nav>

      <!-- klein -->
      <b-navbar-nav class="mt-3 mr-4 container d-block d-sm-block d-md-block d-lg-none">
        <Sportarten></Sportarten>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import Sportarten from "@/components/Sportarten.vue";

export default {
  data: function() {
    return {};
  },
  components: {
    Sportarten
  },
  methods: {}
};
</script>


<style scoped>
/* .router-link-active {
		background: red;
	} */
</style>


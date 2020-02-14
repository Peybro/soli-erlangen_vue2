<template>
  <div class="row">
    <div class="col-2">
      <router-link to="/sportarten/kunstrad" class="btn round">
        <img src="@/assets/stickmen/logo_kunstrad_q.png" class="minilogo">
        <span class="d-none d-md-block d-lg-block d-xl-block">Kunstrad</span>
      </router-link>
    </div>
    <div class="col-2">
      <router-link to="/sportarten/einrad" class="btn round">
        <img src="@/assets/stickmen/logo_einrad_q.png" class="minilogo">
        <span class="d-none d-md-block d-lg-block d-xl-block">Reigen</span>
      </router-link>
    </div>
    <div class="col-2">
      <router-link to="/sportarten/radball" class="btn round">
        <img src="@/assets/stickmen/logo_radball_q.png" class="minilogo">
        <span class="d-none d-md-block d-lg-block d-xl-block">Radball</span>
      </router-link>
    </div>
    <div class="col-2">
      <router-link to="/sportarten/gymnastik" class="btn round">
        <img src="@/assets/stickmen/logo_gymnastik_q.png" class="minilogo">
        <span class="d-none d-md-block d-lg-block d-xl-block">Gymnastik</span>
      </router-link>
    </div>
    <div class="col-2">
      <router-link to="/sportarten/kinderturnen" class="btn round">
        <img src="@/assets/stickmen/logo_turnen_q.png" class="minilogo">
        <span class="d-none d-md-block d-lg-block d-xl-block">Kinderturnen</span>
      </router-link>
    </div>
    <div class="col-2">
      <router-link to="/sportarten/kindertanzen" class="btn round">
        <img src="@/assets/stickmen/logo_tanz_q.png" class="minilogo">
        <span class="d-none d-md-block d-lg-block d-xl-block">Kindertanzen</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.minilogo {
  width: 30px;
}
</style>


<template>
  <b-navbar
    id="footer"
    type="dark"
    variant="success"
    fixed=""
  >
    <p class="text-light">
      Rad und Kraftfahrerverein Solidarität Erlangen 1903 e. V.
    </p>
    <b-navbar-nav class="ml-auto">
      <b-button class="m-2" variant="danger" @click="toTop()">
        <i class="fa fa-angle-up" aria-hidden="true"></i>
      </b-button>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  methods: {
    toTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style>
</style>



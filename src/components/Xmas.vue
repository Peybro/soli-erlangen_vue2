<template>
  <div class="bg-success py-1 pt-4">
    <div class="container">
      <b-alert show variant="info">
        <div class="row">
          <img
            src="https://cdn.pixabay.com/photo/2012/04/25/00/47/christmas-tree-41448_960_720.png"
            alt="Weihnachtsbaum"
            class="col-1"
          />
          <h3 class="col">
            Wir wüschen euch allen schöne und besinnliche Feiertage und einen
            guten Rutsch in das neue Jahr {{nextYear}}!
          </h3>
          <img
            src="https://cdn.pixabay.com/photo/2017/01/19/19/53/fireworks-1993221_960_720.png"
            alt="Silvester"
            class="col-1"
          />
        </div>
      </b-alert>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    nextYear() {
      const now = new Date();
      return now.getFullYear() + 1;
    },
  },
};
</script>

<style scoped>
img {
  height: 4rem;
}
</style>
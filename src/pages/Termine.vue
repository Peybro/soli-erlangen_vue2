<template>
  <div class="container">
    <h2 class="section">
      <router-link to="/links/termine" class="heading text-dark">Termine</router-link>
    </h2>

    <iframe
      class="d-none d-md-block d-lg-block d-xl-block"
      src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=0&amp;showTz=0&amp;mode=MONTH&amp;height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;src=u1fg6jtjks9g4dqoel0tqsnrkc%40group.calendar.google.com&amp;color=%23125A12&amp;ctz=Europe%2FBerlin"
      style="border-width:0"
      width="100%"
      height="600"
      frameborder="0"
      scrolling="no"
    ></iframe>

    <iframe
      class="d-block d-sm-block d-md-none"
      src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;mode=AGENDA&amp;height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;src=u1fg6jtjks9g4dqoel0tqsnrkc%40group.calendar.google.com&amp;color=%23125A12&amp;ctz=Europe%2FBerlin"
      style="border-width:0"
      width="100%"
      height="600"
      frameborder="0"
      scrolling="no"
    ></iframe>
  </div>
</template>

<script>
export default {
  head: {
    title: {
      inner: "Termine"
    },
    // Meta tags
    meta: [
      { name: "description", content: "Veranstaltungen der Soli-Erlangen oder Wettkämpfe - hier steht alles." }, 
      // Facebook / Open Graph
      { property: "og:title", content: "Soli-Termine" },
      { property: "og:type", content: "Website" },
      { property: "og:url", content: "https://www.soli-erlangen.de/links/termine" },
      {
        property: "og:description",
        content: "Veranstaltungen der Soli-Erlangen oder Wettkämpfe - hier steht alles."
      },
      {
        property: "og:image",
        content: "https://soli-erlangen.de/NewPage/bilder/soli-logo.png"
      },
      { property: "og:site_name", content: "Soli-Erlangen: Termine" }
    ]
  }
};
</script>


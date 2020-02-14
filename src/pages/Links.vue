<template>
  <div class="w3-content w3-container">
    <h3 class="section">Wir</h3>
    <ul class="w3-ul w3-small w3-hoverable">
      <a href="https://www.facebook.com/RalfHaeusinger/" target="_blank">
        <li class="w3-hover-theme w3-border-top">
          Unser Facebookauftritt
          <span class="w3-right">
            Aktuelles Geschehen
            <span class="w3-hide-small">im Verein</span>
          </span>
        </li>
      </a>
      <router-link to="/links/bilder">
        <li class="w3-hover-theme w3-border-top">
          Bilder
          <span class="w3-right">Aktuelle Bilder & Archiv</span>
        </li>
      </router-link>
      <a
        href="https://www.facebook.com/pg/RalfHaeusinger/photos/?ref=page_internal"
        target="_blank"
      >
        <li class="w3-hover-theme w3-border-top">
          mehr Bilder
          <span class="w3-right">
            Vereinsseite auf Facebook
            <i class="fab fa-facebook"></i>
          </span>
        </li>
      </a>
      <router-link to="/vereinsblatt">
        <li class="w3-hover-theme w3-border-top">
          Vereinsblatt
          <span class="w3-right">Unser Magazin (+ Archiv)</span>
        </li>
      </router-link>
      <router-link to="/termine">
        <li class="w3-hover-theme w3-border-top">
          Termine
          <span class="w3-right">Termine für 2018</span>
        </li>
      </router-link>
    </ul>

    <h3 class="section">Hallenradsport allgemein</h3>
    <ul class="w3-ul w3-small w3-hoverable">
      <a href="http://www.soli-bayern.de/" target="_blank">
        <li class="w3-hover-theme w3-border-top">
          Soli Bayern
          <span class="w3-right">Landesverband</span>
        </li>
      </a>
      <a href="http://hallenradsport.org/" target="_blank">
        <li class="w3-hover-theme w3-border-top">
          hallenradsport.org
          <span class="w3-right">News & Ergebnisse</span>
        </li>
      </a>
      <a href="http://hallenradsport.rad-net.de/" target="_blank">
        <li class="w3-hover-theme w3-border-top">
          rad-net
          <span class="w3-right">News & Dates</span>
        </li>
      </a>
      <a href="http://members.chello.at/alfred.pischl/Berichte/Vereine.htm" target="_blank">
        <li class="w3-hover-theme w3-border-top">
          Vereinsübersicht
          <span class="w3-right">ganz viele Vereine</span>
        </li>
      </a>
      <a href="http://sportdeutschland.tv/radsport" target="_blank">
        <li class="w3-hover-theme w3-border-top">
          sportdeutschland.tv
          <span class="w3-right">Hallenradsport Live mit Archiv</span>
        </li>
      </a>
    </ul>

    <h3 class="section">Radball</h3>
    <ul class="w3-ul w3-small w3-hoverable">
      <!-- <a href="http://www.radballer.info/2018/Ergebnisse/Deutschland/Meisterschaft/Bayern_U15_18.html" target="_blank">
					<li class="w3-hover-theme w3-border-top">Tabelle U15 Bayern
						<span class="w3-right w3-hide-small">
							Benedikt & Sebastian im Wettbewerb
						</span>
						<span class="w3-right w3-hide-large w3-hide-medium">
							Liga
						</span>
					</li>
      </a>-->
      <a href="http://radsport.tollwitz.de/" target="_blank">
        <li class="w3-hover-theme w3-border-top">
          RSV Tollwitz
          <span class="w3-right">Befreundeter Verein aus Tollwitz</span>
        </li>
      </a>
      <a href="http://www.rmcstein.de/" target="_blank">
        <li class="w3-hover-theme w3-border-top">
          RMC Stein
          <span class="w3-right">Steiner Radballweltmeister</span>
        </li>
      </a>
      <a href="http://www.radball.at/" target="_blank">
        <li class="w3-hover-theme w3-border-top">
          radball.at
          <span class="w3-right">Ligen & Tabellen</span>
        </li>
      </a>
    </ul>
  </div>
</template>

<script>
export default {
  head: {
    title: {
      inner: "Links"
    },
    // Meta tags
    meta: [
      {
        name: "description",
        content:
          "Eine Sammlung von Links die unseren Verein direkt betreffen oder mit ihm in Verbindung stehen."
      },
      // Facebook / Open Graph
      { property: "og:title", content: "Soli-Links" },
      { property: "og:type", content: "Website" },
      { property: "og:url", content: "https://www.soli-erlangen.de/links" },
      {
        property: "og:description",
        content:
          "Eine Sammlung von Links die unseren Verein direkt betreffen oder mit ihm in Verbindung stehen."
      },
      {
        property: "og:image",
        content: "https://soli-erlangen.de/NewPage/bilder/soli-logo.png"
      },
      { property: "og:site_name", content: "Soli-Erlangen: Links" }
    ]
  }
};
</script>


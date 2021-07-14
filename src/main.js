import Vue from "vue";
import VueRouter from "vue-router";
import VueHead from "vue-head";

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import App from "./App.vue";

// pages
import Home from "./pages/Home.vue";
import VorstandUndTrainer from "./pages/Vorstand-Und-Trainer.vue";
import Geschichte from "./pages/Geschichte.vue";
import Kontakt from "./pages/Kontakt.vue";
import Links from "./pages/Links.vue";
import Termine from "./pages/Termine.vue";
import Vereinsblatt from "./pages/Vereinsblatt.vue";

// Sportarten
import Kunstrad from "./pages/Sportarten/Kunstrad.vue";
import Einrad from "./pages/Sportarten/Einrad.vue";
import Radball from "./pages/Sportarten/Radball.vue";
import Gymnastik from "./pages/Sportarten/Gymnastik.vue";
import Kinderturnen from "./pages/Sportarten/Kinderturnen.vue";
import Kindertanzen from "./pages/Sportarten/Kindertanzen.vue";

Vue.use(BootstrapVue);
Vue.use(VueHead);
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/verein/vorstandUndTrainer",
    component: VorstandUndTrainer,
  },
  {
    path: "/verein/geschichte",
    component: Geschichte,
  },
  {
    path: "/sportarten/kunstrad",
    component: Kunstrad,
  },
  {
    path: "/sportarten/einrad",
    component: Einrad,
  },
  {
    path: "/sportarten/radball",
    component: Radball,
  },
  {
    path: "/sportarten/gymnastik",
    component: Gymnastik,
  },
  {
    path: "/sportarten/kinderturnen",
    component: Kinderturnen,
  },
  {
    path: "/sportarten/kindertanzen",
    component: Kindertanzen,
  },
  {
    path: "/links",
    component: Links,
  },
  {
    path: "/links/bilder",
    component: Home,
  },
  {
    path: "/links/vereinsblatt",
    component: Vereinsblatt,
  },
  {
    path: "/links/termine",
    component: Termine,
  },
  {
    path: "/kontakt",
    component: Kontakt,
  },
];

const router = new VueRouter({
  routes,
  //   nur wenn Server dafür konfiguriert ist:
  mode: "history",
  base: process.env.BASE_URL,
});

Vue.config.productionTip = false;

new Vue({
  router,
  data: {
    vorstand: {
      ersterVorstand: {
        abteilung: "1. Vorstand",
        aufgaben: "1. Vorstand, Kinderturnen, Radball",
        vorname: "Ralf",
        nachname: "Häusinger",
        strasse: "Fuchsweg 2",
        plz: "91074",
        ort: "Herzogenaurach",
        telefon: "09132 / 796970",
        mobil: "0176 / 45145696",
        mail: "ralf.haeusinger@t-online.de",
      },
      zweiterVorstand: {
        abteilung: "2. Vorstand",
        aufgaben: "2. Vorstand",
        vorname: "René",
        nachname: "Gehrke",
        strasse: "",
        plz: "",
        ort: "",
        telefon: "",
        mobil: "",
        mail: "maci5@web.de",
      },
      kassierer: {
        abteilung: "Kassier",
        aufgaben: "Kassier",
        vorname: "Veit",
        nachname: "Kraus",
        strasse: "",
        plz: "",
        ort: "",
        telefon: "",
        mobil: "",
        mail: "veit.kraus@gmx.de",
      },
      schriftführer: {
        abteilung: "Schriftführer",
        aufgaben: "Schriftführerin",
        vorname: "Brigitte",
        nachname: "Häusinger",
        strasse: "",
        plz: "",
        ort: "",
        telefon: "09131 / 990149",
        mobil: "",
        mail: "heiner.haeusinger@t-online.de",
      },
      sportleiter: {
        abteilung: "Sportleiter",
        aufgaben: "Sportleiter, Radballtrainer",
        vorname: "Thomas",
        nachname: "Kretschmann",
        strasse: "",
        plz: "",
        ort: "",
        telefon: "",
        mobil: "0176 / 43839664",
        mail: "t.kretschmann@t-online.de",
      },
      fachwart: {
        abteilung: "Fachwart",
        aufgaben: "Fachwartin, Einradtrainerin",
        vorname: "Renate",
        nachname: "Transchel",
        strasse: "",
        plz: "",
        ort: "",
        telefon: "09131 / 49454",
        mobil: "",
        mail: "renate.transchel@gmx.de",
      },
      ehrenvorstand: {
        abteilung: "Ehrenvorstand",
        aufgaben: "Ehrenvorstand, Gymnastiktrainer",
        vorname: "Heinrich",
        nachname: "Häusinger",
        strasse: "",
        plz: "",
        ort: "",
        telefon: "09131 / 990149",
        mobil: "",
        mail: "heiner.haeusinger@t-online.de",
      },
      frauenbeauftragte: {
        abteilung: "Frauenbeauftragte",
        aufgaben: "Frauenbeauftragte",
        vorname: "Sabine",
        nachname: "Häusinger",
        strasse: "",
        plz: "",
        ort: "",
        telefon: "",
        mobil: "",
        mail: "ralf.haeusinger@t-online.de",
      },
    },
    trainer: {
      einrad: {
        link: "einrad",
        abteilung: "Reigen",
        aufgaben: "Fachwartin, Einradtrainerin",
        vorname: "Renate",
        nachname: "Transchel",
        strasse: "",
        plz: "",
        ort: "",
        telefon: "09131 / 49454",
        mobil: "",
        mail: "renate.transchel@gmx.de",
      },
      kunstrad: {
        link: "kunstrad",
        abteilung: "Kunstrad",
        aufgaben: "Kunstradtrainerin",
        vorname: "Anne",
        nachname: "von Querfurth",
        strasse: "",
        plz: "",
        ort: "",
        telefon: "",
        mobil: "",
        mail: "",
      },
      radball: {
        link: "radball",
        abteilung: "Radball",
        aufgaben: "Sportleiter, Radballtrainer",
        vorname: "Thomas",
        nachname: "Kretschmann",
        strasse: "",
        plz: "",
        ort: "",
        telefon: "",
        mobil: "0176 / 43839664",
        mail: "t.kretschmann@t-online.de",
      },
      tanzen: {
        link: "kindertanzen",
        abteilung: "Kindertanzen",
        aufgaben: "Kindertanzen",
        vorname: "Janice",
        nachname: "Häusinger",
        strasse: "",
        plz: "",
        ort: "",
        telefon: "",
        mobil: "0176 / 32843418",
        mail: "janice.93haeusinger@t-online.de",
      }
    },
  },
  render: (h) => h(App),
}).$mount("#app");

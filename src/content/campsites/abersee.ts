import type { CampsiteConfig } from "../types";

const IMG = "/campsites/abersee";

const abersee: CampsiteConfig = {
  name: "Campingplatz Eisl",
  shortName: "Eisl",
  slug: "abersee",
  ort: "Abersee am Wolfgangsee",
  region: "Salzkammergut",
  brandKind: "Camping am Wolfgangsee",
  see: "Wolfgangsee",
  regionLong: "Wolfgangsee · Salzkammergut · Österreich",

  heroVariant: "center",

  claim: "Dein Saisonplatz direkt am Wolfgangsee",
  claimEmphasis: "am Wolfgangsee",
  intro:
    "Höchstens 25 Stellplätze, ein eigener Seezugang und ein modernes Sanitärgebäude von 2018 — bei Camping Eisl campst du ruhig und direkt am Wolfgangsee, Wirtshaus und Bus in Gehweite.",

  statement: {
    text: "Dein Stellplatz misst mindestens 100 m² — und der Wolfgangsee beginnt gleich hinterm Garten.",
    emphasis: "mindestens 100 m²",
  },

  pillars: [
    {
      title: "Privater Seezugang",
      text: "Der Platz hat einen eigenen Zugang zum Wolfgangsee — hier badest du im See und schaust beim Abendessen aufs Wasser.",
      image: { src: `${IMG}/gallery-29f9151a57.webp`, alt: "Abendstimmung am privaten Seezugang von Camping Eisl am Wolfgangsee" },
    },
    {
      title: "Sanitärgebäude von 2018",
      text: "Großzügig und neu: Das Sanitärgebäude von 2018 hält warmes Wasser und viel Platz bereit — und liegt nur ein paar Schritte vom Stellplatz.",
      image: { src: `${IMG}/gallery-f7631a59af.webp`, alt: "Modernes Sanitär- und Servicegebäude von 2018 am Campingplatz Eisl" },
    },
    {
      title: "Stellplätze am Wasser",
      text: "Höchstens 25 Plätze ab 100 m², jeder mit Strom-, Wasser- und Kanalanschluss — Wohnwagen und Wohnmobil stehen hier mit Seeblick.",
      image: { src: `${IMG}/gallery-256f5e4f65.webp`, alt: "Stellplatz mit Wohnwagen und Blick auf den Wolfgangsee bei Camping Eisl" },
    },
  ],

  usps: [
    "Direkt am Wolfgangsee",
    "Privater Seezugang",
    "Strom · Wasser · Kanal",
    "Sanitärgebäude von 2018",
    "Max. 25 Stellplätze",
    "Wirtshaus fußläufig",
  ],

  trust: {
    heading: "Ein kleiner Platz am Wolfgangsee",
    headingEmphasis: "kleiner Platz",
    intro:
      "Kein Tagescamping, kein Trubel: Camping Eisl vergibt ausschließlich Saisonplätze an höchstens 25 Gäste — so bleibt der Garten am See ruhig und du kennst deine Nachbarn noch beim Namen.",
  },

  awards: [],

  saison: { von: "Nur Saisonplätze", bis: "kein Tagescamping" },

  hero: {
    aerial: { src: `${IMG}/gallery-6c6c9a3d8a.webp`, alt: "Garten am See mit Blick über den Wolfgangsee am Campingplatz Eisl in Abersee" },
  },

  camping: {
    heading: "Dein Platz am Wolfgangsee",
    intro:
      "Strom, Wasser und Kanal an jedem Stellplatz, ein Garten direkt am See und Abende, an denen der Wolfgangsee golden wird — viel mehr braucht ein Campingsommer nicht.",
    features: [
      {
        title: "Garten am See",
        text: "Gepflegte Liegewiese mit Blick aufs Wasser — hier breitest du die Decke aus, und der Wolfgangsee liegt nur wenige Schritte entfernt.",
        image: { src: `${IMG}/gallery-cc0b3e961e.webp`, alt: "Garten und Liegewiese am Seeufer beim Campingplatz Eisl" },
      },
      {
        title: "Ruhe im Grünen",
        text: "Viel Wiese, alte Bäume und Berge ringsum — ein Platz zum Durchatmen, abseits vom Tagestourismus am See.",
        image: { src: `${IMG}/gallery-fd275b605f.webp`, alt: "Liegewiese mit Bergblick am Campingplatz Eisl am Wolfgangsee" },
      },
      {
        title: "Abende am Wolfgangsee",
        text: "Wenn die Sonne hinter die Berge sinkt, färbt sich der See golden — den Sonnenuntergang hast du direkt vom Platz.",
        image: { src: `${IMG}/gallery-6207c319fb.webp`, alt: "Sonnenuntergang über dem Wolfgangsee bei Camping Eisl" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg an den Wolfgangsee",
    modes: [
      { title: "Mit dem Auto", text: "Über die A1 bis Mondsee oder Salzburg, dann auf der B158 nach Abersee — die Adresse Gamsjaga 6 führt dich direkt zum Platz." },
      { title: "Mit Bus & Bahn", text: "Ab Bahnhof Salzburg bringt dich der Postbus ins Wolfgangseetal; die Haltestelle liegt fußläufig zum Campingplatz." },
      { title: "Alles zu Fuß", text: "Öffentliche Verkehrsmittel und ein traditionelles Wirtshaus erreichst du von Camping Eisl bequem in wenigen Gehminuten." },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Wolfgangsee",
    headingEmphasis: "Wolfgangsee",
    intro: "Garten am See, ruhige Stellplätze und goldene Abende — ein paar Eindrücke vom Platz.",
    tag: "Ausschließlich Saisonplätze",
    images: [],
  },

  booking: {
    heading: "Sichere dir deinen Saisonplatz",
    headingEmphasis: "Saisonplatz",
    intro:
      "Camping Eisl vergibt ausschließlich Saisonplätze — schreib uns deinen Wunschzeitraum, wir melden uns persönlich mit Verfügbarkeit und den genauen Konditionen.",
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreise — auf der Website sind keine Preise angegeben. Camping Eisl bietet ausschließlich Saisonplätze (kein Tagescamping); die genauen Konditionen bitte direkt anfragen.",
    highlight: { title: "Privater Seezugang", text: "Eigener Zugang zum Wolfgangsee und ein Garten direkt am Wasser." },
    categories: [
      { id: "stellplatz", label: "Saison-Stellplatz", perNight: 38, perExtraGuest: 9 },
      { id: "badeplatz", label: "Badeplatz am See", perNight: 46, perExtraGuest: 9 },
    ],
  },

  kontakt: {
    coords: { lat: 47.734841, lng: 13.428066 },
    tel: "+43 664 99472337",
    telHref: "tel:+4366499472337",
    mail: "info@abersee.eu",
    adresse: "Gamsjaga 6 · 5342 Abersee · Salzburg",
  },

  languages: ["DE"],

  nav: [
    { label: "Der Platz", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Sanitär", href: "#camping" },
    ]},
    { label: "Preise", href: "#booking" },
    { label: "Anreise", href: "#anreise" },
    { label: "Kontakt", href: "#kontakt" },
  ],
};

export default abersee;

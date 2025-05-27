import type en from "./en";

export default {
  common: {
    logout: "Logg ut",
    createdBy: "Laget av Lasse & Sonica",
    home: "Hjem",
    program: "Program",
    friendsandfamily: "Venner og familie",
    rsvp: "RSVP",
    rsvpAdmin: "RSVP Admin",
    pictures: "Bilder",
    qa: "Q & A",
    ourstory: "Vår historie",
    openNavigationMenu: "Åpne navigasjonsmeny",
    days: "dager",
    hours: "timer",
    minutes: "minutter",
    seconds: "sekunder",
  },
  home: {
    title: "Velkommen",
    subtitle:
      "Vi giftet oss 11. august 2023 og nå er det endelig tid for feiring!",
    imageAlt: "Lasse og Sonica på takterrasse 17.mai 2023",
  },
  login: {
    title: "Velkommen",
    passwordLabel: "Passord",
    passwordPlaceholder: "Spør Lasse & Sonica",
    login: "Logg inn",
    errors: {
      invalidPassword: "Feil passord",
    },
  },
  ourstory: {
    title: "Vår historie",
    subtitle: "Her kan dere lese om vår reise fra vi møttes.",
    timeline: {
      firstMeeting: {
        title: "Første møte",
        content:
          "Lasse og Sonica møttes for første gang på julebordet til Experis (Ciber den gang). Lasse danset morsom skulderdans på dansegulvet, Sonica spurte hvorfor han danset slik. Lasse svarte: Jeg gjør det for damene. Sonica var ikke helt overbevist, men syntes det var veldig gøy!",
      },
      firstSpark: {
        title: "Første gnist",
        content1:
          "Etter flere uker med sosial nedstengning var det plutselig ekstra hyggelig å se hverandre under mangekamp med jobb.",
        slackLineImageAlt: "Slack line lagbilde",
        slackLineWithLasseImageAlt: "Slack line lagbilde",
        content2: "Selv om Lasse ikke imponerte stort i slackline...",
      },
      firstDate: {
        title: "Første date",
        content:
          "Det ble ingen 'øl ute', ettersom Lasse slo til og inviterte til tacomiddag, med Kløvstad-salsa og rødvin.",
        imageAlt: "Taco",
      },
      officiallyPartners: {
        title: "Offisielt kjærester",
        content:
          "Var ingen grunn til å vente lenger når alt føltes riktig - og vi ble offisielt kjærester!",
        imageAlt: "Selfie av oss kvelden vi ble kjærester",
      },
      moveTogether: {
        title: "Flytter sammen",
        content:
          "Vi ble lei av å reise frem og tilbake mellom Alexander Kiellandsplass og Solli Plass. Sonica kjøpte seg inn, og Ivar måtte dessverre flytte litt lenger ned i gata. Det ble store endringer i leiligheten, ettersom Sonica ville pusse opp og fjerne alle minner av et guttekollektiv. Lasse måtte bli med å bo i leiligheten på Solli mens vi pusset opp, og vi fikk tilslutt flytte inn i vår nyoppussede leilighet på Kiellands.",
        lasseImageAlt: "Lasse pusser opp på en stige",
        sonicaImageAlt: "Sonica pusser på en stige",
      },
      proposal: {
        title: "Frieriet",
        content:
          "Med sykdom etter påske og noen endringer i planene, overrasket Lasse med en veldig romantisk date hjemme på en 'vanlig' onsdagskveld. Han ordnet med piknik og satte seg ned på kne. Ingen husker nøyaktig hva som ble sagt, men Sonica fikk en ring-3 på fingeren.",
        imageAlt: "Lasse frir",
      },
      wedding: {
        title: "Bryllup!",
        content: "Bryllup med våre nærmeste venner og familie.",
      },
      move: {
        title: "Flytter",
        content:
          "Vi flytter fra fest og moro i rundkjøringen til den roligere delen av Kiellandsplass. Litt oppussing må selvfølgelig til og vi får bo hos Carina en måneds tid før vi forflytter oss opp 3 etasjer.",
      },
      born: {
        title: "Emilie blir født",
        content:
          "Lille Emilie kommer til verden kl.05.25 dagen etter bursdagen til moren sin.",
      },
      weddingParty: {
        title: "Bryllupsfeiring",
        content:
          "Endelig er det til for bryllupsfeiring med alle våre fantastiske venner og familie.",
      },
    },
  },
  program: {
    title: "Program",
    subtitle: "Her er program for dagen.",
    welcome: "Velkommen til bryllupsfest på Månefisken",
    ceremony: "Kjærlighetsseremoni",
    dinner: "Middag",
    party: "Fest og underholdning",
    thankYou: "Takk for nå",
  },
  rsvp: {
    title: "Kommer du?",
    errors: {
      requiredMessage: "Påkrevd",
      minNameMessage: "Må være lenger enn 3 bokstaver",
      invalidEmailMessage: "E-post er ikke gyldig",
    },
  },
} satisfies typeof en;

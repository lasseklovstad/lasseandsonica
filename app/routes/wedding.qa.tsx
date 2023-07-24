import type { ReactNode } from "react";
import { Accordion } from "~/components/Accordion";
import { LinkSlemmestad } from "~/components/LinkSlemmestad";
import { PageTitle } from "~/components/PageTitle";
import { Typography } from "~/components/Typography";
import { useWeddingLoaderData } from "~/hooks/useWeddingLoaderData";
import { routes } from "~/types/routes";
import type { AccessLevel } from "~/utils/siteSecret";

type Question = {
  question: string;
  answer: ReactNode;
  accessLevels: AccessLevel[];
};

const questions: Question[] = [
  {
    question: "🎁 Hva skal man gi i bryllupsgaver?",
    accessLevels: ["fullAccess"],
    answer: (
      <Typography>
        Da dette er den mindre feiringen av bryllupet vårt forventer vi ingen
        gaver nå. Men vi blir veldig glade for koselige hilsener/kort. Om dere
        gjerne ønsker å gi noe dere tenker passer til oss er det selvfølgelig
        veldig hyggelig. Men ellers vil vi bruke litt tid på å lage en
        ønskeliste til ordentlige bryllupsfeiring.
      </Typography>
    ),
  },
  {
    question: "🗺️ Hvor er feiringen?",
    accessLevels: ["fullAccess"],
    answer: (
      <div>
        <Typography className="mb-4">
          Første del av dagen (11.45-15.00) vil være i et indisk tempel som
          heter Sanatan Mandir Sabha. <br />
          <LinkSlemmestad />
        </Typography>
        <Typography>
          Siste del av dagen (17.00 {"-->"}) vil være på Hotell Continental i
          Oslo, rett ved Nationaltheatret. <br />
          <a
            className="underline"
            href="https://www.google.com/maps/search/?api=1&query=Hotel%20Continental%2C%20Stortingsgata%2C%20Oslo"
            target="_blank"
            rel="noreferrer"
          >
            Adressen er: Stortingsgata 24/26, 0117 Oslo
          </a>
        </Typography>
      </div>
    ),
  },
  {
    question: "🗺️ Hvor er feiringen?",
    accessLevels: ["limitedAccess"],
    answer: (
      <Typography>
        Vielsen (11.45-15.00) vil være i et indisk tempel som heter Sanatan
        Mandir Sabha. <br />
        {<LinkSlemmestad />}
      </Typography>
    ),
  },
  {
    question: "👗 Hva skal man ha på seg?",
    accessLevels: ["fullAccess"],
    answer: (
      <div>
        <Typography variant="h5">Indisk tempel</Typography>
        <Typography>
          Til den første delen av dagen kommer vi til å gå med indiske klær, og
          vi ønsker at dere skal ha på dere akkurat det dere føler dere fine og
          komfortable i. Om dere ønsker å gå med indiske klær synes vi det
          selvfølgelig er veldig hyggelig. Ta kontakt med Sonica om du har lyst
          til å låne.
        </Typography>
        <Typography>
          <Typography className="font-semibold" as="span">
            Dresskode menn:
          </Typography>{" "}
          kortermet/langermet overdel og lange bukser.
        </Typography>
        <Typography>
          <Typography className="font-semibold" as="span">
            Dresskode damer:
          </Typography>{" "}
          valgfritt antrekk men er fint å dekke til ben ned til anklene.
        </Typography>
        <Typography>
          NB: Husk at det ikke er tillat med sko innendørs.
        </Typography>
        <Typography variant="h5" className="mt-4">
          Hotell Continental
        </Typography>
        <Typography>
          Til den andre delen av dagen vil vi skifte til finstasen.
        </Typography>
        <Typography>
          <Typography className="font-semibold" as="span">
            Dresskode menn:
          </Typography>{" "}
          smoking eller mørk dress
        </Typography>
        <Typography>
          <Typography className="font-semibold" as="span">
            Dresskode damer:
          </Typography>{" "}
          knelang eller lang kjole
        </Typography>
      </div>
    ),
  },
  {
    question: "👗 Hva skal man ha på seg?",
    accessLevels: ["limitedAccess"],
    answer: (
      <div>
        <Typography>
          I vielsen kommer vi til å gå med indiske klær, og vi ønsker at dere
          skal ha på dere akkurat det dere føler dere fine og komfortable i. Om
          dere ønsker å gå med indiske klær synes vi det selvfølgelig er veldig
          hyggelig. Ta kontakt med Sonica om du har lyst til å låne.
        </Typography>
        <Typography>
          <Typography className="font-semibold" as="span">
            Dresskode menn:
          </Typography>{" "}
          kortermet/langermet overdel og lange bukser.
        </Typography>
        <Typography>
          <Typography className="font-semibold" as="span">
            Dresskode damer:
          </Typography>{" "}
          valgfritt antrekk men er fint å dekke til ben ned til anklene.
        </Typography>
        <Typography>
          NB: Husk at det ikke er tillat med sko innendørs.
        </Typography>
      </div>
    ),
  },
  {
    question: "🛕 Hvordan er en indisk vielse?",
    answer: (
      <div className="flex flex-col">
        <Typography>
          Her har vi linket til nyttig info hvor dere kan lese om de ulike
          ritualene:
        </Typography>
        {[
          {
            href: "https://www.culturalindia.net/weddings/wedding-traditions/wedding-barat.html",
            text: "Barat - Brudgommens ankomstparade",
          },
          {
            href: "https://www.culturalindia.net/weddings/wedding-rituals/var-mala-ceremony.html",
            text: "Jaymala - Blomsterkjeder",
          },
          {
            href: "https://www.culturalindia.net/weddings/wedding-rituals/mandap-ceremony.html",
            text: "Mandap - Vielsessted med bål",
          },
          {
            href: "https://www.culturalindia.net/weddings/wedding-traditions/seven-vows.html",
            text: "Saat phere - Syv ekteskapsritualer rundt bålet",
          },
          {
            href: "https://www.culturalindia.net/weddings/wedding-traditions/kanyadaan.html",
            text: "Kanyadaan - Brudens far gir bort hånden til datter",
          },
          {
            href: "https://www.culturalindia.net/weddings/wedding-traditions/mangalsutra.html",
            text: "Mangalsutra - Halssmykke i gave fra brudgom",
          },
          {
            href: "",
            text: "Maang baharai - Rødt pulver som symboliserer gift kvinne",
          },
          {
            href: "https://www.culturalindia.net/weddings/wedding-rituals/vidai-ceremony.html",
            text: "Vidai - Avskjedssermoni",
          },
        ].map(({ href, text }, i) => (
          <Typography
            key={i}
            as="a"
            className="underline"
            target="_blank"
            href={href}
            rel="noreferrer"
          >
            {text}
          </Typography>
        ))}
      </div>
    ),
    accessLevels: ["fullAccess", "limitedAccess"],
  },
];

export default function QA() {
  const { accessLevel } = useWeddingLoaderData();
  return (
    <div className="flex flex-col items-center">
      <PageTitle
        title="Spørsmål og svar"
        backLink={{
          to: `../${routes.wedding.upload}`,
          name: `Last opp`,
        }}
        subtitle={[
          "Her finner du nyttige spørsmål og svar.",
          "Er det noe annet du lurer på, spør oss.",
        ]}
      />
      {questions
        .filter((q) => q.accessLevels.includes(accessLevel))
        .map(({ question, answer }, i) => (
          <Accordion key={i} title={question} content={answer} />
        ))}
    </div>
  );
}

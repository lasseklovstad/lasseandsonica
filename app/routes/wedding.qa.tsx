import type { ReactNode } from "react";
import { Accordion } from "~/components/Accordion";
import { LinkContinental, LinkSlemmestad } from "~/components/LinkSlemmestad";
import { PageTitle } from "~/components/PageTitle";
import { Typography } from "~/components/Typography";
import { useWeddingLoaderData } from "~/hooks/useWeddingLoaderData";
import { routes } from "~/types/routes";
import type { AccessLevel } from "~/utils/siteSecret";

type Question = {
  question: string;
  answer: ReactNode | ((accessLevel: AccessLevel) => ReactNode);
  accessLevels: AccessLevel[];
};

const questions: Question[] = [
  {
    question: "🎁 Hva skal man gi i bryllupsgave?",
    accessLevels: ["fullAccess", "limitedAccess"],
    answer: () => (
      <>
        Da dette er den mindre feiringen av bryllupet vårt forventer vi ingen
        gaver nå. Men vi blir veldig glade for koselige hilsener/kort. Om dere
        gjerne ønsker å gi noe dere tenker passer til oss er det selvfølgelig
        veldig hyggelig. Men ellers vil vi bruke litt tid på å lage en
        ønskeliste til den større bryllupsfeiringen.
      </>
    ),
  },
  {
    question: "🗺️ Hvor er feiringen?",
    accessLevels: ["fullAccess", "limitedAccess"],
    answer: (accessLevel) => (
      <div>
        Første del av dagen (11.45-15.00) vil være i et indisk tempel som heter
        Sanatan Mandir Sabha. <br />
        <LinkSlemmestad />
        {accessLevel === "fullAccess" && (
          <>
            <br />
            <br />
            Siste del av dagen (17.00 {"-->"}) vil være på Hotell Continental i
            Oslo, rett ved Nationaltheatret. <br />
            <LinkContinental />
          </>
        )}
      </div>
    ),
  },
  {
    question: "👗 Hva skal man ha på seg?",
    accessLevels: ["fullAccess", "limitedAccess"],
    answer: (accessLevel) => (
      <div>
        <Typography variant="h5" className="mb-1">
          Indisk tempel
        </Typography>
        Til den første delen av dagen kommer vi til å gå med indiske klær, og vi
        ønsker at dere skal ha på dere akkurat det dere føler dere fine og
        komfortable i. Om dere ønsker å gå med indiske klær synes vi det
        selvfølgelig er veldig hyggelig. Ta kontakt med Sonica om du har lyst
        til å låne.
        <br />
        <span className="font-semibold">Dresskode menn:</span>{" "}
        kortermet/langermet overdel og lange bukser.
        <br />
        <span className="font-semibold">Dresskode damer:</span> valgfritt
        antrekk men er fint å dekke til ben ned til anklene.
        <br />
        NB: Husk at det ikke er tillat med sko innendørs.
        {accessLevel === "fullAccess" && (
          <>
            <Typography variant="h5" className="mt-4 mb-1">
              Hotell Continental
            </Typography>
            Til den andre delen av dagen vil vi skifte til finstasen.
            <br />
            <span className="font-semibold">Dresskode menn:</span> smoking eller
            mørk dress
            <br />
            <span className="font-semibold">Dresskode damer:</span> knelang
            eller lang kjole
          </>
        )}
      </div>
    ),
  },
  {
    question: "🛕 Hvordan er en indisk vielse?",
    answer: (
      <div className="flex flex-col">
        Her har vi linket til nyttig info hvor dere kan lese om de ulike
        ritualene:
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
            variant="body"
            key={i}
            as="a"
            className="underline mt-1"
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
          <Accordion
            key={i}
            title={question}
            content={
              typeof answer === "function" ? answer(accessLevel) : answer
            }
          />
        ))}
    </div>
  );
}

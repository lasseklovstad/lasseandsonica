import type { ReactNode } from "react";
import { Accordion } from "~/components/Accordion";
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

const LinkSlemmestad = (
  <a
    className="underline"
    target="_blank"
    href="https://www.google.com/maps/search/?api=1&query=Sanatan%20Mandir%20Sabha%2C%20Nyveien%2C%20Slemmestad"
    rel="noreferrer"
  >
    Adressen er: Nyveien 6, 3470 Slemmestad
  </a>
);

const questions: Question[] = [
  {
    question: "🎁 Hva skal man gi i bryllupsgaver?",
    accessLevels: ["fullAccess"],
    answer:
      "Det er en gave i seg selv å ha dere med på feiringen av denne spesielle dagen vår! Om dere ønsker å gi noe har vi laget ønskelister på disse stedene: Info kommer",
  },
  {
    question: "🗺️ Hvor er feiringen?",
    accessLevels: ["fullAccess"],
    answer: (
      <div>
        <Typography className="mb-4">
          Første del av dagen (12.30-15.30) vil være i et indisk tempel som
          heter Sanatan Mandir Sabha. <br />
          {LinkSlemmestad}
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
        Vielsen (12.30-15.30) vil være i et indisk tempel som heter Sanatan
        Mandir Sabha. <br />
        {LinkSlemmestad}
      </Typography>
    ),
  },
  {
    question: "👗 Hva skal man ha på seg?",
    accessLevels: ["fullAccess"],
    answer: (
      <div>
        <Typography className="mb-4">
          Til den første delen av dagen kommer vi til å gå med indiske klær, og
          vi ønsker at dere skal ha på dere akkurat det dere føler dere fine og
          komfortable i. Om dere ønsker å gå med indiske klær synes vi det
          selvfølgelig er veldig hyggelig.
        </Typography>
        <Typography>
          Til den andre delen av dagen vil vi skifte til lang kjole og smoking,
          så her er dresscode smoking/mørk dress.
        </Typography>
      </div>
    ),
  },
  {
    question: "👗 Hva skal man ha på seg?",
    accessLevels: ["limitedAccess"],
    answer: (
      <Typography>
        I vielsen kommer vi til å gå med indiske klær, og vi ønsker at dere skal
        ha på dere akkurat det dere føler dere fine og komfortable i. Om dere
        ønsker å gå med indiske klær synes vi det selvfølgelig er veldig
        hyggelig.
      </Typography>
    ),
  },
  {
    question: "🛕 Hvordan er en indisk vielse?",
    answer: "Info kommer",
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
          to: `../${routes.wedding.pictures}`,
          name: `Bilder`,
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

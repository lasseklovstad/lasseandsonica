import { Accordion } from "~/components/Accordion";
import { PageTitle } from "~/components/PageTitle";
import { Typography } from "~/components/Typography";
import { routes } from "~/types/routes";

const questions = [
  {
    question: "🎁 Hva skal man gi i bryllupsgaver?",
    answer:
      "Det er en gave i seg selv å ha dere med på feiringen av denne spesielle dagen vår! Om dere ønsker å gi noe har vi laget ønskelister på disse stedene: Info kommer",
  },
  {
    question: "🗺️ Hvor er feiringen?",
    answer: (
      <div>
        <Typography className="mb-4">
          Første del av dagen (12.30-15.30) vil være i et indisk tempel som
          heter Sanathan Mandir Sabha. <br />
          <a
            className="underline"
            target="_blank"
            href="https://www.google.com/maps/search/?api=1&query=Sanatan%20Mandir%20Sabha%2C%20Nyveien%2C%20Slemmestad"
            rel="noreferrer"
          >
            Adressen er: Nyveien 6, 3470 Slemmestad
          </a>
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
    question: "👗 Hva skal man ha på seg?",
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
    question: "🛕 Hvordan er en indisk vielse?",
    answer: "Info kommer",
  },
];

export default function QA() {
  return (
    <div className="flex flex-col items-center">
      <PageTitle
        title="Spørsmål og svar"
        backLink={{
          to: `../${routes.wedding.pictures}`,
          name: `Bilder`,
        }}
        subtitle={[
          "Her kommer snart nyttige spørsmål og svar.",
          "Er det noe annet du lurer på, spør oss.",
        ]}
      />
      {questions.map(({ question, answer }, i) => (
        <Accordion key={i} title={question} content={answer} />
      ))}
    </div>
  );
}

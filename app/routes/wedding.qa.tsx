import { useEffect, useRef } from "react";
import { href, useSearchParams } from "react-router";

import { Accordion } from "~/components/Accordion";
import { LinkMoonFish } from "~/components/LinkSlemmestad";
import { PageTitle } from "~/components/PageTitle";
import { useWeddingLoaderData } from "~/hooks/useWeddingLoaderData";

import type { Route } from "./+types/wedding.qa";

export const meta: Route.MetaFunction = () => {
  return [{ title: "QA - Lasse & Sonica" }];
};

const questions = [
  {
    question: "🎁 Hva skal man gi i bryllupsgave?",
    id: "gift",
    answer: (
      <div className="flex flex-col gap-2">
        <div>
          Da dette er den mindre feiringen av bryllupet vårt forventer vi ingen
          gaver nå. Men vi blir veldig glade for koselige hilsener/kort.
        </div>
        <div>
          Om dere gjerne ønsker å gi noe dere tenker passer til oss er det
          selvfølgelig veldig hyggelig. Men ellers vil vi bruke litt tid på å
          lage en ønskeliste til den større bryllupsfeiringen.
        </div>
        <div>
          Hvis det fortsatt er ønskelig å gi noe nå ønsker vi oss pengegaver på
          vipps til sparing.
        </div>
      </div>
    ),
  },
  {
    question: "🗺️ Hvor er feiringen?",
    id: "location",
    answer: (
      <>
        Feiringen er på Månefisken i Oslo, rett ved Akerselva. <br />
        <LinkMoonFish />
      </>
    ),
  },
  {
    question: "👗 Hva skal man ha på seg?",
    id: "dresscode",
    answer: (
      <div>
        <span className="font-semibold">Dress code menn:</span> Smoking / Mørk
        dress
        <br />
        <span className="font-semibold">Dress code damer:</span> Knelang kjole /
        Lang kjole
      </div>
    ),
  },
];

export default function QA() {
  const { accessLevel } = useWeddingLoaderData();
  const [params] = useSearchParams();
  const accordionRef = useRef<HTMLDetailsElement[]>([]);
  const openAccordionIndex = questions.findIndex(
    (q) => q.id === params.get("open"),
  );

  useEffect(() => {
    if (openAccordionIndex !== -1) {
      accordionRef.current[openAccordionIndex].scrollIntoView();
    }
  }, [openAccordionIndex]);

  return (
    <div className="flex flex-col items-center">
      <PageTitle
        title="Spørsmål og svar"
        backLink={{
          to: href("/wedding/pictures"),
          name: "Bilder",
        }}
        subtitle={[
          "Her finner du nyttige spørsmål og svar.",
          "Er det noe annet du lurer på, spør oss.",
        ]}
      />
      {questions.map(({ question, answer }, i) => (
        <Accordion
          key={i}
          ref={(ref) => {
            if (ref) {
              accordionRef.current[i] = ref;
            }
          }}
          defaultOpen={i === openAccordionIndex}
          title={question}
          content={answer}
        />
      ))}
    </div>
  );
}

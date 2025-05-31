import { useEffect, useRef } from "react";
import { href, useSearchParams } from "react-router";

import { PageTitle } from "~/components/PageTitle";
import { Typography } from "~/components/Typography";

import type { Route } from "./+types/wedding.qa";

export const meta: Route.MetaFunction = () => {
  return [{ title: "QA - Lasse & Sonica" }];
};

const questions = [
  {
    question: "Lokasjon",
    id: "location",
    answer: (
      <div>
        <span>Feiringen er på Månefisken i Oslo, rett ved Akerselva. </span>

        <ul className="mt-2 ml-4 list-disc">
          <li>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Månefisken+AS"
              target="_blank"
              rel="noreferrer"
            >
              Adressen er Sagveien 23A, 0459 Oslo
            </a>
          </li>
          <li>Nærmeste parkering er Mølla p-hus.</li>
          <li>Det er trapper ned til inngang og ingen heis.</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Antrekk",
    id: "dresscode",
    answer: "Smoking / Mørk dress",
  },
  {
    question: "Tale eller innslag",
    id: "dresscode",
    answer: (
      <div>
        Ønsker du å holde tale eller et innslag under middagen, send en mail til
        våres toastmastere Magnus Joelson og Jim-Roger Knutsen. Send mail til
        jimr.knutsen@live.no
      </div>
    ),
  },
  {
    question: "Ønskeliste",
    id: "gift",
    answer: <span className="italic">Mer info kommer</span>,
  },
];

export default function QA() {
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
        title="Praktisk info"
        backLink={{
          to: href("/wedding/pictures"),
          name: "Bilder",
        }}
        subtitle={["Finner du ikke det du lurer på? Spør oss!"]}
      />
      <div className="mb-12 flex max-w-[500px] flex-col gap-6">
        {questions.map(({ question, answer }, i) => (
          <div key={question}>
            <Typography variant="h4" className="mb-2">
              {question}
            </Typography>
            {answer}
          </div>
        ))}
      </div>
    </div>
  );
}

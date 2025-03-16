import type { ReactNode } from "react";
import { href } from "react-router";

import type { CloudinaryImageProps } from "~/components/CloudinaryImage";
import { CloudinaryImage } from "~/components/CloudinaryImage";
import { PageTitle } from "~/components/PageTitle";
import { Typography } from "~/components/Typography";

import type { Route } from "./+types/wedding.ourstory";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Vår historie - Lasse & Sonica" }];
};

export default function OurStory() {
  return (
    <div className="flex flex-col items-center">
      <PageTitle
        title="Vår historie"
        nextLink={{
          to: href("/wedding/program"),
          name: "Program",
        }}
        backLink={{
          to: href("/wedding/home"),
          name: "Hjem",
        }}
        subtitle={["Her kan dere lese om vår reise fra vi møttes."]}
      />

      <div className="flex w-full flex-col">
        {timeline.map(({ content, date, title }, i) => {
          return (
            <div className="flex w-full gap-2 sm:gap-24" key={i}>
              <div className="flex w-[65px] flex-col items-center">
                <Typography
                  as="div"
                  variant="body-small"
                  className="rounded-xs text-center font-medium whitespace-nowrap text-gray-500 sm:px-4"
                >
                  {date}
                </Typography>
                <div className="h-full w-[2px] bg-red-200" />
              </div>
              <div className="w-full px-2 pb-8">
                <Typography variant="h5" className="font-semibold">
                  {title}
                </Typography>
                {content.map((c, i) => {
                  return (
                    <div key={i}>
                      <Typography
                        as="div"
                        variant="body-small"
                        className="my-4"
                      >
                        {c.text}
                      </Typography>
                      <div className="flex flex-wrap gap-1">
                        {c.images?.map((image, i) => (
                          <CloudinaryImage key={i} {...image} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

type TimelineEvent = {
  date: ReactNode;
  title: string;
  content: { text: string; images?: CloudinaryImageProps[] }[];
};

const months = [
  "jan.",
  "feb.",
  "mars",
  "april",
  "mai",
  "juni",
  "juli",
  "aug.",
  "sept.",
  "okt.",
  "nov.",
  "des.",
];
const TimelineDate = ({ date }: { date: Date }) => {
  return (
    <div className="flex flex-col">
      <span>
        {date.getDate()} {months[date.getMonth()]}
      </span>
      <span>{date.getFullYear()}</span>
    </div>
  );
};

const timeline: TimelineEvent[] = [
  {
    date: <TimelineDate date={new Date(2018, 11, 7)} />,
    title: "Første møte",
    content: [
      {
        text: "Lasse og Sonica møttes for første gang på julebordet til Experis (Ciber den gang). Lasse danset morsom skulderdans på dansegulvet, Sonica spurte hvorfor han danset slik. Lasse svarte: Jeg gjør det for damene. Sonica var ikke helt overbevist, men syntes det var veldig gøy!",
      },
    ],
  },
  {
    date: <TimelineDate date={new Date(2020, 4, 27)} />,
    title: "Første gnist",
    content: [
      {
        text: "Etter flere uker med sosial nedstengning var det plutselig ekstra hyggelig å se hverandre under mangekamp med jobb.",
        images: [
          {
            imageUrl: "Bryllup/slackline_ovgmfq.jpg",
            imageAlt: "Slack line lagbilde",
          },
        ],
      },
      {
        text: "Selv om Lasse ikke imponerte stort i slackline...",
        images: [
          {
            imageUrl: "Bryllup/IMG_20200527_180005_azyfrh.jpg",
            imageAlt: "Slack line med Lasse",
            className: "max-w-[400px]",
          },
        ],
      },
    ],
  },
  {
    date: <TimelineDate date={new Date(2020, 5, 21)} />,
    title: "Første date",
    content: [
      {
        text: 'Det ble ingen "øl ute", ettersom Lasse slo til og inviterte til tacomiddag, med Kløvstad-salsa og rødvin.',
        images: [
          {
            imageUrl: "v1685207369/taco_ji7gmn.png",
            imageAlt: "Taco",
            className: "md:max-w-[200px] max-w-[100px]",
          },
        ],
      },
    ],
  },
  {
    date: <TimelineDate date={new Date(2020, 6, 11)} />,
    title: "Offisielt kjærester",
    content: [
      {
        text: "Var ingen grunn til å vente lenger når alt føltes riktig - og vi ble offisielt kjærester!",
        images: [
          {
            imageUrl: "Bryllup/59AF94DE-051A-4F6E-AD14-63BBDDDA6375_garffo.jpg",
            imageAlt: "Selfie av oss kvelden vi ble kjærester",
            className: "max-w-[200px]",
          },
        ],
      },
    ],
  },
  {
    date: <TimelineDate date={new Date(2021, 4, 10)} />,
    title: "Flytter sammen",
    content: [
      {
        text: "Vi ble lei av å reise frem og tilbake mellom Alexander Kiellandsplass og Solli Plass. Sonica kjøpte seg inn, og Ivar måtte dessverre flytte litt lenger ned i gata. Det ble store endringer i leiligheten, ettersom Sonica ville pusse opp og fjerne alle minner av et guttekollektiv. Lasse måtte bli med å bo i leiligheten på Solli mens vi pusset opp, og vi fikk tilslutt flytte inn i vår nyoppussede leilighet på Kiellands.",
        images: [
          {
            imageUrl: "Bryllup/30D7B25C-FCB1-4748-947F-BAF0282E3EF1_vonek3.jpg",
            imageAlt: "Lasse pusser opp på en stige",
            className: "max-w-[200px]",
          },
          {
            imageUrl: "Bryllup/067E0DAC-5DAD-4D42-BC80-B7B2BEDDECE4_jojzh3.jpg",
            imageAlt: "Sonica pusser på en stige",
            className: "max-w-[356px]",
          },
        ],
      },
    ],
  },
  {
    date: <TimelineDate date={new Date(2023, 3, 19)} />,
    title: "Frieriet",
    content: [
      {
        text: 'Med sykdom etter påske og noen endringer i planene, overrasket Lasse med en veldig romantisk date hjemme på en "vanlig" onsdagskveld. Han ordnet med piknik og satte seg ned på kne. Ingen husker nøyaktig hva som ble sagt, men Sonica fikk en ring-3 på fingeren.',
        images: [
          {
            imageUrl: "Bryllup/986C7902-25E2-4DB6-B711-C170A3D450CC_zolx3n.jpg",
            imageAlt: "Lasse frir",
            className: "max-w-[200px]",
          },
        ],
      },
    ],
  },
  {
    date: <TimelineDate date={new Date(2023, 7, 11)} />,
    title: "Bryllup!",
    content: [{ text: "Bryllup med våre nærmeste venner og familie." }],
  },
  {
    date: <span className="w-full">TBD.....</span>,
    title: "Bryllupsfeiring",
    content: [
      {
        text: "Bryllupsfeiring med alle våre fantastiske venner og familie er under planlegging - stay tuned.",
      },
    ],
  },
];

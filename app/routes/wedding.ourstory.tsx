import type { ReactNode } from "react";
import type { CloudinaryImageProps } from "~/components/CloudinaryImage";
import { CloudinaryImage } from "~/components/CloudinaryImage";
import { PageTitle } from "~/components/PageTitle";
import { Typography } from "~/components/Typography";

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
        text: "Det ble ingen 'øl ute', ettersom Lasse imponerte og inviterte til tacomiddag, med Kløvstad-salsa og rødvin.",
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
            className: "max-w-md",
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
        text: "Vi ble lei av å reise opp og ned mellom Alexander Kiellandsplass og Solli Plass. Sonica kjøpte seg inn, og Ivar måtte dessverre flytte litt lenger nedi gata. Det ble store endringer i leiligheten, ettersom Sonica ville pusse opp og fjerne alle minner av et guttekollektiv. Lasse måtte bli med å bo i leiligheten på Solli mens vi pusset opp, og vi fikk tilslutt flytte inn i vår nyoppussede leilighet på Kiellands.",
        images: [
          {
            imageUrl: "Bryllup/30D7B25C-FCB1-4748-947F-BAF0282E3EF1_vonek3.jpg",
            imageAlt: "Lasse pusser opp på en stige",
            className: "max-w-sm",
          },
          {
            imageUrl: "Bryllup/067E0DAC-5DAD-4D42-BC80-B7B2BEDDECE4_jojzh3.jpg",
            imageAlt: "Sonica pusser på en stige",
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
        text: "Med sykdom etter påske og noen endringer i planene, overrasket Lasse med en veldig romantisk date hjemme på en 'vanlig' onsdagskveld. Han ordnet med piknik og satte seg ned på kne. Ingen husker nøyaktig hva som ble sagt, men Sonica fikk en ring på fingeren.",
        images: [
          {
            imageUrl: "Bryllup/986C7902-25E2-4DB6-B711-C170A3D450CC_zolx3n.jpg",
            imageAlt: "Lasse frir",
            className: "max-w-md",
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
    date: <TimelineDate date={new Date(2025, 7, 11)} />,
    title: "Bryllupsfeiring",
    content: [
      {
        text: "Bryllupsfeiring med alle våre fantastiske venner og familie er under planlegging - stay tuned.",
      },
    ],
  },
];

export default function OurStory() {
  return (
    <div className="flex flex-col items-center">
      <PageTitle
        title="Vår historie"
        subtitle={["Her kan dere lese om vår reise fra vi møttes."]}
      />

      <div className="flex flex-col w-full">
        {timeline.map(({ content, date, title }, i) => {
          return (
            <div className="flex w-full gap-2 sm:gap-24" key={i}>
              <div className="flex flex-col items-center w-[65px]">
                <Typography
                  variant="body-small"
                  className="text-gray-500 sm:px-4 rounded-sm font-medium text-center whitespace-nowrap"
                >
                  {date}
                </Typography>
                <div className="w-[2px] h-full bg-red-200" />
              </div>
              <div className="pb-8 px-2 w-full">
                <Typography variant="h5" className="font-semibold">
                  {title}
                </Typography>
                {content.map((c, i) => {
                  return (
                    <div key={i}>
                      <Typography variant="body-small" className="my-4">
                        {c.text}
                      </Typography>
                      {c.images?.map((image, i) => (
                        <CloudinaryImage key={i} {...image} />
                      ))}
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

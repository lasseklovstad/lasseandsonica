import { Fragment } from "react";
import type { CloudinaryImageProps } from "~/components/CloudinaryImage";
import { CloudinaryImage } from "~/components/CloudinaryImage";
import { Typography } from "~/components/Typography";

type TimelineEvent = {
  date: Date;
  title: string;
  content: { text: string; images?: CloudinaryImageProps[] }[];
};

const timeline: TimelineEvent[] = [
  {
    date: new Date(2018, 11, 7),
    title: "Møttes for første gang",
    content: [
      {
        text: "Julebord med jobb...",
      },
    ],
  },
  {
    date: new Date(2020, 4, 27),
    title: "Første gnist",
    content: [
      {
        text: "Mangekamp med jobb startet igjen etter en lang pause med Corona. Da fant Sonica ut at hun hadde savnet meg, selv om vi ikke var kjærester.",
        images: [
          {
            imageUrl: "Bryllup/slackline_ovgmfq.jpg",
            imageAlt: "Slack line lagbilde",
          },
        ],
      },
      {
        text: "Vi satt i parken og grillet sammen med andre fra jobb. Vi var der til sent på kveld og satt ganske nærme hverandre.",
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
    date: new Date(2020, 5, 21),
    title: "Første date",
    content: [
      {
        text: "Tacokveld hos Lasse",
      },
    ],
  },
  {
    date: new Date(2020, 6, 11),
    title: "Offisielt kjærester",
    content: [
      {
        text: "Sonica spurte Lasse... Det blei offisielt på face",
      },
    ],
  },
  {
    date: new Date(2021, 4, 10),
    title: "Flytter sammen",
    content: [
      {
        text: "Ivar måtte flytte ut og gi plass til søtpoteten. Det ble store endringer i leiligheten. Sonica ville pusse opp og fjerne alle minner av et guttekolektiv.",
      },
    ],
  },
  {
    date: new Date(2023, 3, 19),
    title: "Frieri",
    content: [
      {
        text: "Lasse ordner til en veldig romantisk aften hjemme. Han setter seg ned på kne og spør om Sonica vil gifte seg med han. Hun nøler litt... men blir nødt til å si ja.",
      },
    ],
  },
  {
    date: new Date(2023, 7, 11),
    title: "Blir gift",
    content: [{ text: "Ingen data tilgjengelig" }],
  },
];

export default function OurStory() {
  return (
    <div className="flex flex-col items-center">
      <Typography variant="h2" className="mb-4">
        Vår historie
      </Typography>

      <div className="grid grid-cols-4">
        {timeline.map(({ content, date, title }) => {
          return (
            <Fragment key={date.valueOf()}>
              <div className="col-span-1 items-center flex flex-col">
                <Typography
                  variant="body-small"
                  key={date.valueOf()}
                  className="bg-red-50 p-1 rounded-sm font-medium text-center"
                >
                  {date.toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </Typography>
                <div className="w-[2px] h-full bg-red-300" />
              </div>
              <div className="col-span-3 pb-8 px-2">
                <Typography variant="h5" className="font-semibold">
                  {title}
                </Typography>
                {content.map((c, i) => {
                  return (
                    <div key={i}>
                      <Typography className="my-4">{c.text}</Typography>
                      {c.images?.map((image, i) => (
                        <CloudinaryImage key={i} {...image} />
                      ))}
                    </div>
                  );
                })}
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

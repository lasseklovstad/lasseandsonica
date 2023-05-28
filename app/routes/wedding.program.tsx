import type { ReactNode } from "react";
import {
  CloudinaryImage,
  CloudinaryImageProps,
} from "~/components/CloudinaryImage";
import { PageTitle } from "~/components/PageTitle";
import { Typography } from "~/components/Typography";

type TimelineEvent = {
  date: ReactNode;
  title: string;
  content: { text: string; images?: CloudinaryImageProps[] }[];
};

const timeline: TimelineEvent[] = [
  {
    date: <>12:30</>,
    title: "Velkommen til indisk vielse og lunsj i Slemmestad",
    content: [
      {
        text: "Tar av på sko. Mandir. Det blir servert indiske vegetarretter av en indisk kokk.",
      },
    ],
  },
  {
    date: <>13:30</>,
    title: "Indisk vielse",
    content: [
      {
        text: "Vi setter oss ned og Lasse og Sonica blir viet av en indisk prest.",
      },
    ],
  },
  {
    date: <>15:30</>,
    title: "Avreise mot Oslo",
    content: [
      {
        text: "Vi setter oss ned i transportmidler og får tid til å skifte, parkere bil og sjekke inn på hotell før middagen starter.",
      },
    ],
  },
  {
    date: <>17:00</>,
    title: "Velkommen til hotell Continental",
    content: [
      {
        text: "Vi starter med mingling og apperetiff i lobbyen",
      },
    ],
  },
  {
    date: <>18:00</>,
    title: "Middag",
    content: [
      {
        text: "Vi setter oss til bords og det blir servert 3 retters middag. Underveis skåler vi.",
      },
    ],
  },
  {
    date: <>20:00</>,
    title: "Fest og leker",
    content: [
      {
        text: "Vi setter oss til bords og det blir servert 3 retters middag. Underveis skåler vi.",
      },
    ],
  },
  {
    date: <>24:00</>,
    title: "Takk for i kveld",
    content: [
      {
        text: "De som ønsker å feste videre kan gå ned til baren.",
      },
    ],
  },
];

export default function Program() {
  return (
    <div>
      <PageTitle title="Program" subtitle={["Her er program for dagen."]} />
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

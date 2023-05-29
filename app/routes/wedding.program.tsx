import type { ReactNode } from "react";
import {
  CloudinaryImage,
  CloudinaryImageProps,
} from "~/components/CloudinaryImage";
import { PageTitle } from "~/components/PageTitle";
import { Typography } from "~/components/Typography";

type TimelineEvent = {
  size?: "large" | "normal";
  date: ReactNode;
  title: string;
  content: { text: string; images?: CloudinaryImageProps[] }[];
};

const timeline: TimelineEvent[] = [
  {
    date: <>12:30-15:30</>,
    size: "large",
    title:
      "Del 1: Velkommen til lunsj og vielse på Sanathan Mandir Sabha i Asker",
    content: [
      {
        text: "Vi møtes til lunsj og indisk vielse på det indiske tempelet i Slemmestad. Det tar ca. 45 minutter å kjøre fra Oslo, og det er en stor parkeringsplass utenfor. Det er vanlig å ta av seg skoene når man kommer inn i tempelet, og det finnes garderobe og toaletter der.",
      },
    ],
  },
  {
    date: <>12:30</>,
    title: "Lunsj",
    content: [
      {
        text: "Det blir lunsjbuffet med indiske vegetarretter laget av en indisk kokk (husk å gi beskjed på forhånd om du har noen allergier).",
      },
    ],
  },
  {
    date: <>13:30</>,
    title: "Indisk vielse",
    content: [
      {
        text: "Vi setter oss ned, og Lasse og Sonica blir viet av en indisk prest. Varighet er ca 1,5-2 timer.",
      },
    ],
  },
  {
    date: <>15:15</>,
    title: "Photoshoot",
    content: [
      {
        text: "Etter vielsen må vi selvfølgelig ha en liten photoshoot med de nygifte, familie og venner.",
      },
    ],
  },
  {
    date: <>15:30</>,
    title: "Avreise mot Oslo",
    content: [
      {
        text: "Vi reiser (tilbake) til Oslo, parkerer biler hjemme/sjekker inn på hotell, skifter og fresher oss opp til middagen.",
      },
    ],
  },
  {
    date: <>17:00-23:30</>,
    size: "large",
    title: "Del 2: Velkommen til middag og fest på hotell Continental i Oslo",
    content: [
      {
        text: "Vi møtes til bryllupsmiddag på Hotell Continental, som ligger rett ved Nationaltheatret. Vi skal være i tredje etasje, i et lokale som heter Salen.",
      },
    ],
  },
  {
    date: <>17:00</>,
    title: "Aperitif",
    content: [
      {
        text: "Vi starter med mingling og aperitif i forstuen.",
      },
    ],
  },
  {
    date: <>18:00</>,
    title: "Middag",
    content: [
      {
        text: "Vi setter oss til bords, og blir servert en 3-retters middag. Det vil ikke være en formell toastmaster, men det er veldig hyggelig om noen ønsker å si noen ord underveis i middagen.",
      },
    ],
  },
  {
    date: <>20:00</>,
    title: "Fest og underholdning",
    content: [
      {
        text: "Etter middagen fortsetter vi kvelden med fest og underholdning. Her er det fritt frem til å lede an quiz, aktiviteter og andre innslag.",
      },
    ],
  },
  {
    date: <>23:30</>,
    title: "Takk for i kveld",
    content: [
      {
        text: "De som ønsker å feste videre kan forflytte seg til Bar Boman nede i første etasje.",
      },
    ],
  },
];

export default function Program() {
  return (
    <div>
      <PageTitle title="Program" subtitle={["Her er program for dagen."]} />
      <div className="flex flex-col w-full">
        {timeline.map(({ content, date, title, size }, i) => {
          return (
            <div className="flex w-full gap-2 sm:gap-24" key={i}>
              <div className="flex flex-col items-center w-[65px]">
                <Typography
                  variant={size === "large" ? "h5" : "body-small"}
                  className="text-gray-500 sm:px-4 rounded-sm font-medium text-center whitespace-nowrap"
                >
                  {date}
                </Typography>
                <div className="w-[2px] h-full bg-red-200" />
              </div>
              <div className="pb-8 px-2 w-full">
                <Typography
                  variant={size === "large" ? "h4" : "h5"}
                  className="font-semibold"
                >
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

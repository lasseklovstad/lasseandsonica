import type { ReactNode } from "react";
import type { CloudinaryImageProps } from "~/components/CloudinaryImage";
import { CloudinaryImage } from "~/components/CloudinaryImage";
import { PageTitle } from "~/components/PageTitle";
import { Typography } from "~/components/Typography";
import { useWeddingLoaderData } from "~/hooks/useWeddingLoaderData";
import { routes } from "~/types/routes";
import type { AccessLevel } from "~/utils/siteSecret";

type TimelineEvent = {
  size?: "large" | "normal";
  date: ReactNode;
  title: string;
  content: { text: string; images?: CloudinaryImageProps[] }[];
  accessLevels: AccessLevel[];
};

const timeline: TimelineEvent[] = [
  {
    date: <>12:30-15:30</>,
    size: "large",
    title:
      "Del 1: Velkommen til lunsj og vielse på Sanatan Mandir Sabha i Asker",
    content: [
      {
        text: "Vi møtes til lunsj og indisk vielse på det indiske tempelet i Slemmestad. Det tar ca. 45 minutter å kjøre fra Oslo, og det er en stor parkeringsplass utenfor. Det er vanlig å ta av seg skoene når man kommer inn i tempelet, og det finnes garderobe og toaletter der.",
      },
    ],
    accessLevels: ["fullAccess", "limitedAccess"],
  },
  {
    date: <>12:30</>,
    title: "Lunsj",
    content: [
      {
        text: "Det blir lunsjbuffet med indiske vegetarretter laget av en indisk kokk (husk å gi beskjed på forhånd om du har noen allergier).",
      },
    ],
    accessLevels: ["fullAccess", "limitedAccess"],
  },
  {
    date: <>13:30</>,
    title: "Indisk vielse",
    content: [
      {
        text: "Vi setter oss ned, og Lasse og Sonica blir viet av en indisk prest. Varighet er ca 1,5-2 timer.",
      },
    ],
    accessLevels: ["fullAccess", "limitedAccess"],
  },
  {
    date: <>15:15</>,
    title: "Photoshoot",
    content: [
      {
        text: "Etter vielsen må vi selvfølgelig ha en liten photoshoot med de nygifte, familie og venner.",
      },
    ],
    accessLevels: ["fullAccess", "limitedAccess"],
  },
  {
    date: <>15:30</>,
    title: "Avreise mot Oslo",
    content: [
      {
        text: "Vi reiser (tilbake) til Oslo, parkerer biler hjemme/sjekker inn på hotell, skifter og fresher oss opp til middagen.",
      },
    ],
    accessLevels: ["fullAccess"],
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
    accessLevels: ["fullAccess"],
  },
  {
    date: <>17:00</>,
    title: "Aperitif",
    content: [
      {
        text: "Vi starter med mingling og aperitif i forstuen.",
      },
    ],
    accessLevels: ["fullAccess"],
  },
  {
    date: <>18:00</>,
    title: "Middag",
    content: [
      {
        text: "Vi setter oss til bords, og blir servert en 3-retters middag. Det vil ikke være en formell toastmaster, men det er veldig hyggelig om noen ønsker å si noen ord underveis i middagen.",
      },
    ],
    accessLevels: ["fullAccess"],
  },
  {
    date: <>20:00</>,
    title: "Fest og underholdning",
    content: [
      {
        text: "Etter middagen fortsetter vi kvelden med fest og underholdning. Her er det fritt frem til å lede an quiz, aktiviteter og andre innslag.",
      },
    ],
    accessLevels: ["fullAccess"],
  },
  {
    date: <>23:30</>,
    title: "Takk for i kveld",
    content: [
      {
        text: "De som ønsker å feste videre kan forflytte seg til Bar Boman nede i første etasje.",
      },
    ],
    accessLevels: ["fullAccess"],
  },
];

export default function Program() {
  const { accessLevel } = useWeddingLoaderData();
  return (
    <div>
      <PageTitle
        title="Program"
        nextLink={{
          to: `../${routes.wedding.friendsAndFamily}`,
          name: `Venner og familie`,
        }}
        backLink={{
          to: `../${routes.wedding.ourStory}`,
          name: `Vår historie`,
        }}
        subtitle={["Her er program for dagen."]}
      />
      <div className="flex flex-col w-full">
        {timeline
          .filter((t) => t.accessLevels.includes(accessLevel))
          .map(({ content, date, title, size }, i) => {
            return (
              <div className="flex w-full md:gap-20" key={i}>
                <div className="flex flex-col items-center w-[135px]">
                  <Typography
                    variant={size === "large" ? "h5" : "body-small"}
                    className="text-gray-500 rounded-sm font-medium text-center w-full"
                  >
                    {date}
                  </Typography>
                  <div className="w-[2px] h-full bg-red-200" />
                </div>
                <div className="pb-8 px-1 w-full">
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

import type { ReactNode } from "react";
import type { CloudinaryImageProps } from "~/components/CloudinaryImage";
import { CloudinaryImage } from "~/components/CloudinaryImage";
import { LinkSlemmestad } from "~/components/LinkSlemmestad";
import { PageTitle } from "~/components/PageTitle";
import { Typography } from "~/components/Typography";
import { useWeddingLoaderData } from "~/hooks/useWeddingLoaderData";
import { routes } from "~/types/routes";
import type { AccessLevel } from "~/utils/siteSecret";

type TimelineEvent = {
  size?: "large" | "normal";
  date: ReactNode;
  title: string;
  content: { text: ReactNode; images?: CloudinaryImageProps[] }[];
  accessLevels: AccessLevel[];
};

const timeline: TimelineEvent[] = [
  {
    date: <>11:45-15:00</>,
    size: "large",
    title:
      "Del 1: Velkommen til vielse og lunsj på Sanatan Mandir Sabha i Asker",
    content: [
      {
        text: (
          <>
            Vi møtes til indisk vielse og lunsj på det indiske tempelet i
            Slemmestad. <LinkSlemmestad />. Det tar ca. 40 minutter å kjøre fra
            Oslo, og det er en stor parkeringsplass utenfor. Det er fint om alle
            er på plass før 12.00. Det er ikke tillatt med alkohol eller røyk på
            tempelet, og det vil derfor ikke serveres alkohol.
          </>
        ),
      },
    ],
    accessLevels: ["fullAccess", "limitedAccess"],
  },
  {
    date: <>12:00</>,
    title: "Brudgommens parade (Barat) og velkomstseremoni (Swagat/Jaymala)",
    content: [
      {
        text: "Brudgommens parade starter på parkeringsplassen. Lasse sine familie og venner møter opp der og blir med i paraden. Indisk tradisjon er at alle fra brudgommens side kommer dansende i paraden og lager god stemning. Brudens familie og venner står utenfor inngangen til tempelet og tar imot brudgommen. Brudens mor ønsker brudgommen velkommen ved å utføre en velsignelsesritual «aarti».",
      },
      {
        text: "Deretter beveger vi oss inn i tempelet. Når vi kommer inn tar alle av seg skoene i hhv. dame- og herregarderober.",
      },
      {
        text: "Etter at alle har tatt av seg på skoene går vi inn i den store salen i tempelet. Her vil bruden ankomme sammen med sine forlovere.        Velkomstseremonien fortsetter mellom brud og brudgom, denne delen ledes av indisk prest (pandit-ji). Her vil Lasse og Sonica utveksle «Jaymala» - blomsterkjeder og ringer.",
      },
    ],
    accessLevels: ["fullAccess", "limitedAccess"],
  },
  {
    date: <>12:45</>,
    title: "Lunsj",
    content: [
      {
        text: "Det blir en lunsjbuffet med indiske vegetarretter. Det blir en enkel servering, hvor dere kan sette dere ned der dere finner plass, evt. stå oppreist å spise. Det er helt i orden å fortsette å spise under vielsen om man ikke er ferdig til 13.30, men pass på å være litt stille.",
      },
    ],
    accessLevels: ["fullAccess", "limitedAccess"],
  },
  {
    date: <>13:30</>,
    title: "Indisk vielse (Shadi ki rasme)",
    content: [
      {
        text: (
          <>
            Vi setter oss ned på stoler i sal nummer 2. Brudeparet, brudens
            foreldre, brudgommens foreldre og presten setter seg på hver sin
            side av «mandaap» - bålet. Her vil Sonica og Lasse vies. Det vil
            utføres tradisjonelle ritualer som:
            <ol className="list-disc my-2 ml-4">
              <li>
                Saat phere: brudeparet går rundt bålet 7 ganger, som
                symboliserer 7 liv sammen.
              </li>
              <li>
                Mang bahrein: brugdom vil legge rødt pulver i hodet til bruden,
                som symboliserer at hun nå blir en gift kvinne.
              </li>
              <li>Mangalsutra: Brudgom vil gi bruden et halssmykke i gave</li>
              <li>Kanyadaan: Brudens far «gir bort» hånden til datteren sin</li>
            </ol>
          </>
        ),
      },
    ],
    accessLevels: ["fullAccess", "limitedAccess"],
  },
  {
    date: <>14:40</>,
    title: "Avskjedsseremoni (Vidai)",
    content: [
      {
        text: (
          <>
            Brudens familie sier farvel til sin datter som nå er blitt gift og
            skal bli med sin ektemann hjem.
          </>
        ),
      },
    ],
    accessLevels: ["fullAccess", "limitedAccess"],
  },
  {
    date: <>15:00</>,
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
        text: "De som ønsker å feste videre kan utforske det lokale utelivet.",
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

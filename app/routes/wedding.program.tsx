import type { ReactNode } from "react";

import type { CloudinaryImageProps } from "~/components/CloudinaryImage";
import { CloudinaryImage } from "~/components/CloudinaryImage";
import { LinkContinental, LinkSlemmestad } from "~/components/LinkSlemmestad";
import { LinkToQa } from "~/components/LinkToQa";
import { PageTitle } from "~/components/PageTitle";
import { Typography } from "~/components/Typography";
import { useWeddingLoaderData } from "~/hooks/useWeddingLoaderData";
import { routes } from "~/types/routes";
import type { AccessLevel } from "~/utils/siteSecret";

import type { Route } from "./+types/wedding.program";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Program - Lasse & Sonica" }];
};

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
      <div className="flex w-full flex-col">
        {timeline
          .filter((t) => t.accessLevels.includes(accessLevel))
          .map(({ content, date, title, size }, i) => {
            return (
              <div className="flex w-full md:gap-20" key={i}>
                <div className="flex w-[135px] flex-col items-center">
                  <Typography
                    variant={size === "large" ? "h5" : "body-small"}
                    className="w-full rounded-sm text-center font-medium text-gray-500"
                  >
                    {date}
                  </Typography>
                  <div className="h-full w-[2px] bg-red-200" />
                </div>
                <div className="w-full px-1 pb-8">
                  <Typography
                    variant={size === "large" ? "h4" : "h5"}
                    className="font-semibold"
                  >
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
    title: "Velkommen til vielse og lunsj på Sanatan Mandir Sabha i Asker",
    content: [
      {
        text: (
          <>
            Vi møtes til indisk vielse og lunsj på det indiske tempelet i
            Slemmestad (<LinkSlemmestad />
            ). Det tar ca. 40 minutter å kjøre fra Oslo, og det er en stor
            parkeringsplass utenfor. Det er fint om alle er på plass før 12.00.
            Det er ikke tillatt med alkohol eller røyk på og utenfor tempelet.
            <br />
            <br />
            <LinkToQa open="dresscode">Les mer om antrekk her</LinkToQa>
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
        text: (
          <>
            Brudgommens parade starter på parkeringsplassen.{" "}
            <span className="font-semibold">
              Lasse&apos;s familie og venner{" "}
            </span>
            møtes der og blir med i paraden. I henhold til indisk tradisjon
            kommer alle fra brudgommens side dansende i paraden og lager god
            stemning.
            <br />
            <br />
            <span className="font-semibold">
              Sonica&apos;s familie og venner{" "}
            </span>
            møtes derimot utenfor inngangen til tempelet for å ta imot
            brudgommen og hans følge. Brudens mor ønsker så brudgommen velkommen
            ved å utføre velsignelsesritualet (aarti).
            <br />
            <br />
            Videre beveger vi oss inn på tempelet, hvor alle må ta av seg skoene
            i garderoben. Vi samles i den store salen, hvor bruden etterhvert
            vil ankomme med sitt brudefølge. Den indiske presten (pandit-ji) vil
            utføre en velkomstseremoni for brud og brudgom, hvor de utveksler
            blomsterkjeder (jaymala) og ringer.
          </>
        ),
      },
    ],
    accessLevels: ["fullAccess", "limitedAccess"],
  },
  {
    date: <>12:45</>,
    title: "Lunsj",
    content: [
      {
        text: (
          <>
            Det vil serveres lunsjbuffet med indiske vegetarretter. Bespisningen
            blir i en uformell setting, hvor man kan velge om man vil sitte
            eller stå. Om man ikke er ferdig til 13.30 er det i orden å spise
            under vielsen, men da må man passe på å være stille.
          </>
        ),
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
            Etter lunsj beveger vi oss til den mindre salen. Brudeparet, deres
            foreldre, og pandit-ji setter seg på hver sin side av bålet
            (mandap). Her vil brudeparet vies. Det vil utføres tradisjonelle
            ritualer som:
            <ol className="my-2 ml-4 list-disc">
              <li>Kanyadaan: Brudens far «gir bort» hånden til datteren sin</li>
              <li>
                Gathbandhan: Brudeparet knyttes sammen med et tøystykke
                (symboliserer at de nå knyttes sammen for hele livet)
              </li>
              <li>
                Mangalsutra: Brudgommen gir bruden et halssmykke (symboliserer
                at hun nå er en gift kvinne)
              </li>
              <li>
                Mang bahrein: Brudgommen tar rødt pulver i brudens hårlinje
                (symboliserer at de nå blir livspartnere)
              </li>
              <li>
                Saat phere: Brudeparet går syv runder rundt bålet (symboliserer
                syv ekteskapsløfter)
              </li>
            </ol>
            <br />
            <LinkToQa open="ceremony">
              Her kan du lese mer om tradisjoner og ritualer
            </LinkToQa>
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
            Brudens familie tar farvel med sin datter som nå er blitt gift og
            skal bli med sin ektemann hjem.
          </>
        ),
      },
    ],
    accessLevels: ["fullAccess", "limitedAccess"],
  },
  {
    date: <>15:00</>,
    title: "Takk for nå",
    content: [
      {
        text: <>Tusen takk for at dere var med på vielsen vår. Vel hjem!</>,
      },
    ],
    accessLevels: ["limitedAccess"],
  },
  {
    date: <>15:00</>,
    title: "Avreise mot Oslo",
    content: [
      {
        text: (
          <>
            Vi reiser (tilbake) til Oslo, parkerer biler hjemme/sjekker inn på
            hotell, skifter og fresher oss opp til middagen.
          </>
        ),
      },
    ],
    accessLevels: ["fullAccess"],
  },
  {
    date: <>17:00-23:30</>,
    size: "large",
    title: "Velkommen til middag og fest på hotell Continental i Oslo",
    content: [
      {
        text: (
          <>
            Vi møtes til bryllupsmiddag på Hotell Continental (
            <LinkContinental />
            ), som ligger rett ved Nationaltheatret. Vi skal være i tredje
            etasje, i et lokale som heter Salen. Man kan ta både trapper og heis
            opp til tredje etasje. Det er en selvbetjent garderobe utenfor
            rommene vi skal være i.
            <br />
            <br />
            <LinkToQa open="dresscode">Les mer om antrekk her</LinkToQa>
          </>
        ),
      },
    ],
    accessLevels: ["fullAccess"],
  },
  {
    date: <>17:00</>,
    title: "Aperitif",
    content: [
      {
        text: <>Vi starter med mingling og aperitif i forstuen.</>,
      },
    ],
    accessLevels: ["fullAccess"],
  },
  {
    date: <>18:00</>,
    title: "Middag",
    content: [
      {
        text: (
          <>
            Vi setter oss til bords, hvor det vil serveres en 3-retters middag.
            <ul>
              <li>18:30 - Forrett</li>
              <li>19:00 - Middag</li>
              <li>19:45 - Dessert</li>
            </ul>
            Det vil ikke være en formell toastmaster, men det er veldig hyggelig
            om noen ønsker å si noen ord underveis i middagen mellom
            serveringene.
          </>
        ),
      },
    ],
    accessLevels: ["fullAccess"],
  },
  {
    date: <>20:00</>,
    title: "Fest og underholdning",
    content: [
      {
        text: (
          <>
            Etter middag fortsetter vi kvelden med fest og underholdning. Her er
            det fritt frem til å lede an quiz, aktiviteter og andre innslag.
          </>
        ),
      },
    ],
    accessLevels: ["fullAccess"],
  },
  {
    date: <>23:30</>,
    title: "Takk for i kveld",
    content: [
      {
        text: (
          <>De som ønsker å feste videre kan utforske det lokale utelivet.</>
        ),
      },
    ],
    accessLevels: ["fullAccess"],
  },
];

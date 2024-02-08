import { useSearchParams } from "@remix-run/react";
import { useEffect, useRef, type ReactNode } from "react";
import { Accordion } from "~/components/Accordion";
import { CloudinaryImage } from "~/components/CloudinaryImage";
import { LinkContinental, LinkSlemmestad } from "~/components/LinkSlemmestad";
import type { QaAccordionId } from "~/components/LinkToQa";
import { PageTitle } from "~/components/PageTitle";
import { Typography } from "~/components/Typography";
import { useWeddingLoaderData } from "~/hooks/useWeddingLoaderData";
import { routes } from "~/types/routes";
import type { AccessLevel } from "~/utils/siteSecret";

type Question = {
  question: string;
  answer: ReactNode | ((accessLevel: AccessLevel) => ReactNode);
  accessLevels: AccessLevel[];
  id: QaAccordionId;
};

const questions: Question[] = [
  {
    question: "🎁 Hva skal man gi i bryllupsgave?",
    accessLevels: ["fullAccess", "limitedAccess"],
    id: "gift",
    answer: () => (
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
    accessLevels: ["fullAccess", "limitedAccess"],
    id: "location",
    answer: (accessLevel) => (
      <div>
        {accessLevel === "fullAccess" ? "Første del av dagen" : "Vielsen"}{" "}
        (11.45-15.00) vil være i et indisk tempel som heter Sanatan Mandir
        Sabha. <br />
        <LinkSlemmestad />
        {accessLevel === "fullAccess" && (
          <>
            <br />
            <br />
            Siste del av dagen (17.00 {"-->"}) vil være på Hotell Continental i
            Oslo, rett ved Nationaltheatret. <br />
            <LinkContinental />
          </>
        )}
      </div>
    ),
  },
  {
    question: "👗 Hva skal man ha på seg?",
    accessLevels: ["fullAccess", "limitedAccess"],
    id: "dresscode",
    answer: (accessLevel) => (
      <div>
        <Typography variant="h5" className="mb-1">
          Indisk tempel
        </Typography>
        {accessLevel === "fullAccess"
          ? "Til den første delen av dagen"
          : "I vielsen"}{" "}
        kommer vi til å gå med indiske klær, og vi ønsker at dere skal ha på det
        dere føler dere fine og komfortable i. Om noen ønsker å gå med indiske
        klær er det hyggelig. Ta kontakt med Sonica om du ønsker å låne.
        <div className="my-2">
          <span className="font-semibold">Dress code menn:</span>{" "}
          Kortermet/langermet overdel og lange bukser.
          <br />
          <span className="font-semibold">Dress code damer:</span> Valgfritt
          antrekk som for eksempel en sommerkjole (det er fint å dekke til ben
          ned til anklene).
        </div>
        NB: Husk at sko må tas av i garderoben innendørs.
        {accessLevel === "fullAccess" && (
          <>
            <Typography variant="h5" className="mt-4 mb-1">
              Hotell Continental
            </Typography>
            Til den andre delen av dagen vil vi skifte til finstasen (smoking /
            lang kjole).
            <div className="my-2">
              <span className="font-semibold">Dress code menn:</span> Smoking /
              Mørk dress
              <br />
              <span className="font-semibold">Dress code damer:</span> Knelang
              kjole / Lang kjole
            </div>
          </>
        )}
      </div>
    ),
  },
  {
    question: "🛕 Hvordan er en indisk vielse?",
    id: "ceremony",
    answer: (
      <div className="flex flex-col gap-4">
        <div>
          Her har vi linket til nyttig info hvor dere kan lese mer om de ulike
          ritualene:
        </div>
        {[
          {
            href: "https://www.culturalindia.net/weddings/wedding-traditions/wedding-barat.html",
            title: "Barat",
            description: "Brudgommens ankomstparade",
            pictures: ["Ceremony/Indian-Baraat-1_gn0boo.jpg"],
          },
          {
            href: "https://www.culturalindia.net/weddings/wedding-rituals/var-mala-ceremony.html",
            title: "Jaymala",
            description: "Blomsterkjeder",
            pictures: ["Ceremony/jaymala_ghjisx.jpg"],
          },
          {
            href: "https://www.culturalindia.net/weddings/wedding-rituals/mandap-ceremony.html",
            title: "Mandap",
            description: "Vielsessted med bål",
            pictures: ["Ceremony/mandap_ygb7oi.jpg"],
          },
          {
            href: "https://www.culturalindia.net/weddings/wedding-traditions/kanyadaan.html",
            title: "Kanyadaan",
            description: "Brudens far gir bort hånden til datter",
            pictures: ["Ceremony/kanyadaan_ohsycg.jpg"],
          },
          {
            href: "https://www.timesnownews.com/spiritual/religion/article/hindu-marriage-rituals-know-the-significance-of-gathbandhan/690403",
            title: "Gathbandhan",
            description: "Brudeparet knyttes sammen",
            pictures: ["Ceremony/gathbandan_mbqpa9.jpg"],
          },

          {
            href: "https://www.culturalindia.net/weddings/wedding-traditions/mangalsutra.html",
            title: "Mangalsutra",
            description: "Halssmykke i gave fra brudgom",
            pictures: ["Ceremony/mangalsutra_pmzcj7.jpg"],
          },

          {
            href: "https://www.timesnownews.com/spiritual/religion/article/hindu-marriage-rituals-know-the-significance-of-sindoor/690726",
            title: "Maang baharai",
            description: "Rødt pulver i hårlinjen til bruden",
            pictures: ["Ceremony/mangbahrein_s56szq.jpg"],
          },

          {
            href: "https://www.culturalindia.net/weddings/wedding-traditions/seven-vows.html",
            title: "Saat phere",
            description: "Syv ekteskapsritualer rundt bålet",
            pictures: ["Ceremony/saatphere_gxiw3p.jpg"],
          },
          {
            href: "https://www.culturalindia.net/weddings/wedding-rituals/vidai-ceremony.html",
            title: "Vidai",
            description: "Avskjedsseremoni",
            pictures: ["Ceremony/vidai_wd3rpn.jpg"],
          },
        ].map(({ href, description, pictures, title }, i) => (
          <div key={i}>
            <Typography
              variant="body"
              as="a"
              className="underline font-semibold"
              target="_blank"
              href={href}
              rel="noreferrer"
            >
              {title}
            </Typography>
            <Typography variant="body-small">{description}</Typography>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 my-1">
              {pictures.map((picture) => (
                <CloudinaryImage
                  key={picture}
                  imageAlt={title}
                  imageUrl={picture}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    ),
    accessLevels: ["fullAccess", "limitedAccess"],
  },
];

export default function QA() {
  const { accessLevel } = useWeddingLoaderData();
  const [params] = useSearchParams();
  const accordionRef = useRef<HTMLDetailsElement[]>([]);
  const filteredQuestions = questions.filter((q) =>
    q.accessLevels.includes(accessLevel)
  );
  const openAccordionIndex = filteredQuestions.findIndex(
    (q) => q.id === params.get("open")
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
          to: `../${routes.wedding.pictures}`,
          name: `Bilder`,
        }}
        subtitle={[
          "Her finner du nyttige spørsmål og svar.",
          "Er det noe annet du lurer på, spør oss.",
        ]}
      />
      {filteredQuestions.map(({ question, answer }, i) => (
        <Accordion
          key={i}
          ref={(ref) => {
            if (ref) {
              accordionRef.current[i] = ref;
            }
          }}
          defaultOpen={i === openAccordionIndex}
          title={question}
          content={typeof answer === "function" ? answer(accessLevel) : answer}
        />
      ))}
    </div>
  );
}

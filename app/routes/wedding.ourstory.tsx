import { Fragment } from "react";
import { Typography } from "~/components/Typography";

const timeline = [
  {
    date: new Date(2018, 11, 7),
    title: "Møttes for første gang",
    content: "Julebord med jobb...",
  },
  {
    date: new Date(2020, 4, 27),
    title: "Første gnist",
    content: "Mangekamp med jobb...",
  },
  {
    date: new Date(2020, 5, 21),
    title: "Første date",
    content: "Tacokveld hos Lasse",
  },
  {
    date: new Date(2020, 6, 11),
    title: "Offisielt kjærester",
    content: "Sonica spurte Lasse... Det blei offisielt på face",
  },
  {
    date: new Date(2021, 4, 10),
    title: "Flytter sammen",
    content:
      "Ivar måtte flytte ut og gi plass til søtpoteten. Det ble store endringer i leiligheten. Sonica ville pusse opp og fjerne alle minner av et guttekolektiv.",
  },
  {
    date: new Date(2023, 3, 19),
    title: "Frieri",
    content:
      "Lasse ordner til en veldig romantisk aften hjemme. Han setter seg ned på kne og spør om Sonica vil gifte seg med han. Hun nøler litt... men blir nødt til å si ja.",
  },
  {
    date: new Date(2023, 7, 11),
    title: "Blir gift",
    content: "Ingen data tilgjengelig",
  },
];

export default function OurStory() {
  return (
    <div className="flex flex-col items-center">
      <Typography variant="h2" className="mb-4">
        Vår historie
      </Typography>

      <div className="grid grid-cols-3 gap-4">
        {timeline.map(({ content, date, title }) => {
          return (
            <Fragment key={date.valueOf()}>
              <Typography
                variant="h5"
                as="h3"
                key={date.valueOf()}
                className="text-right col-span-1"
              >
                {date.toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Typography>
              <div className="col-span-2">
                <Typography variant="h5" as="h3" className="mb-1">
                  {title}
                </Typography>
                <Typography>{content}</Typography>
              </div>
            </Fragment>
          );
        })}
      </div>
      {/* <CloudinaryImage
        aspectRatio={{ h: 3080, w: 2316 }}
        imageAlt="Lasse og Sonica i Åndalsnes på rondane"
        imageUrl="Bryllup/EDE940EB-52E5-4B0B-BB86-494BE1BBAC33_smlzvg.jpg"
        className="md:w-[350px]"
      />
      <CloudinaryImage
        aspectRatio={{ h: 2208, w: 1218 }}
        imageAlt="Lasse og Sonica på tur i Paris"
        imageUrl="Bryllup/E1565B89-22A9-4CE4-989F-1E6CD6A2090C_mcyazr.jpg"
        className="md:w-[350px]"
      /> */}
    </div>
  );
}

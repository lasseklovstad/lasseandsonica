import { PageTitle } from "~/components/PageTitle";
import { useWeddingLoaderData } from "~/hooks/useWeddingLoaderData";
import { routes } from "~/types/routes";

import type { Route } from "./+types/wedding.rsvp";

export const meta: Route.MetaFunction = () => {
  return [{ title: "RSVP - Lasse & Sonica" }];
};

export default function RSVP() {
  const { accessLevel } = useWeddingLoaderData();

  const subtitles =
    accessLevel === "fullAccess"
      ? [
          "Vi håper du har mulighet til å feire denne dagen med oss!",
          "Vennligst svar ved å gi beskjed til enten Sonica eller Lasse.",
          "Husk å si ifra hvis dere har noen allergier",
        ]
      : [
          "Det er veldig hyggelig om dere har mulighet til å bli med på indisk lunsj og vielse i Slemmestad!",
          <>
            Vennligst gi beskjed på mail til Sonica (
            <a href="mailto:sonicanarula88@gmail.com" className="underline">
              sonicanarula88@gmail.com
            </a>
            ) innen 15. juli.
          </>,
          "Husk å si ifra hvis dere har noen allergier",
        ];

  return (
    <div>
      <div className="hidden md:block">
        <PageTitle title="Kommer du?" subtitle={subtitles} />
      </div>
      <div className="md:hidden">
        <PageTitle
          nextLink={{
            to: `../${routes.wedding.pictures}`,
            name: `Bilder`,
          }}
          backLink={{
            to: `../${routes.wedding.friendsAndFamily}`,
            name: `Venner og familie`,
          }}
          title="Kommer du?"
          subtitle={subtitles}
        />
      </div>
    </div>
  );
}

import { PageTitle } from "~/components/PageTitle";
import { routes } from "~/types/routes";

export default function RSVP() {
  return (
    <div>
      <div className="hidden md:block">
        <PageTitle
          title="Répondez s'il vous plaît"
          subtitle={[
            "Vi håper du har mulighet til å feire denne dagen med oss!",
            "Vennligst svar ved å gi beskjed til enten Sonica eller Lasse.",
          ]}
        />
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
          title="Répondez s'il vous plaît"
          subtitle={[
            "Vi håper du har mulighet til å feire denne dagen med oss! Vennligst svar ved å gi beskjed til enten Sonica eller Lasse.",
          ]}
        />
      </div>
    </div>
  );
}

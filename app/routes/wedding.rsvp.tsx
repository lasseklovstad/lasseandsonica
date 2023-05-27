import { PageTitle } from "~/components/PageTitle";

export default function RSVP() {
  return (
    <div>
      <PageTitle
        title="Répondez s'il vous plaît"
        subtitle={[
          "Vi håper du har mulighet til å feire denne dagen med oss!",
          "Vennligst svar ved å gi beskjed til enten Sonica eller Lasse.",
        ]}
      />
    </div>
  );
}

import { PageTitle } from "~/components/PageTitle";
import { routes } from "~/types/routes";

export default function QA() {
  return (
    <div>
      <PageTitle
        title="Spørsmål og svar"
        backLink={{
          to: `../${routes.wedding.pictures}`,
          name: `Bilder`,
        }}
        subtitle={[
          "Her kommer snart nyttige spørsmål og svar.",
          "Er det noe annet du lurer på, spør oss.",
        ]}
      />
    </div>
  );
}

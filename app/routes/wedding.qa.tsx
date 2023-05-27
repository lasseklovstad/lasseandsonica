import { PageTitle } from "~/components/PageTitle";

export default function QA() {
  return (
    <div>
      <PageTitle
        title="Spørsmål og svar"
        subtitle={[
          "Her kommer snart nyttige spørsmål og svar.",
          "Er det noe annet du lurer på, spør oss.",
        ]}
      />
    </div>
  );
}

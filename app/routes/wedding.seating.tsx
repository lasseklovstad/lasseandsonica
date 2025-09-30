import { useTranslation } from "react-i18next";

import { PageTitle } from "~/components/PageTitle";
import { TableSeating } from "~/components/TableSeating";
import { getBackLink, getNextLink, useLinks } from "~/hooks/useLinks";

export default function Seating() {
  const links = useLinks();
  const { t } = useTranslation("seating");
  return (
    <>
      <PageTitle
        title={t("title")}
        subtitle={[t("subtitle")]}
        backLink={getBackLink("seating", links)}
        nextLink={getNextLink("seating", links)}
      />
      <main className="container mx-auto p-4">
        <TableSeating />
      </main>
    </>
  );
}

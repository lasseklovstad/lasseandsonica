import { PageTitle } from "~/components/PageTitle";
import { TableSeating } from "~/components/TableSeating";
import { getBackLink, getNextLink, useLinks } from "~/hooks/useLinks";

export default function Seating() {
  const links = useLinks();
  return (
    <>
      <PageTitle
        title="Bordplassering"
        subtitle={[]}
        backLink={getBackLink("seating", links)}
        nextLink={getNextLink("seating", links)}
      />
      <main className="container mx-auto p-4">
        <TableSeating />
      </main>
    </>
  );
}

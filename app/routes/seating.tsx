import { Header } from "~/components/Header";
import { TableSeating } from "~/components/TableSeating";
import { Typography } from "~/components/Typography";

export default function Seating() {
  return (
    <>
      <Header showSideBar={false} links={[]} />
      <main className="container mx-auto p-4">
        <Typography variant="h2" className="mt-2 mb-4 text-center">
          Bordplassering
        </Typography>
        <TableSeating />
      </main>
    </>
  );
}

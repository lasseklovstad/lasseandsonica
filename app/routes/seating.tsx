import { Header } from "~/components/Header";

export default function Seating() {
  return (
    <>
      <Header showSideBar={false} links={[]} />
      <main className="container mx-auto p-4">
        <h1 className="text-center text-4xl">Her kan du se bordplasering</h1>
      </main>
    </>
  );
}

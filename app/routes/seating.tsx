import { Header } from "~/components/Header";

const tables = [
  {
    name: "Bord 1",
    names: [
      "Bartosz Blumenfeld",
      "Dawn Alderson",
      "Mauro Maggi",
      "Min Jordan",
      "Ulrika Victorin",
      "Alan Alderson",
      "Richard Jordan",
    ],
  },
  {
    name: "Bord 2",
    names: [
      "Bartosz Blumenfeld",
      "Dawn Alderson",
      "Mauro Maggi",
      "Min Jordan",
      "Ulrika Victorin",
      "Alan Alderson",
      "Richard Jordan",
    ],
  },
  {
    name: "Bord 3",
    names: [
      "Bartosz Blumenfeld",
      "Dawn Alderson",
      "Mauro Maggi",
      "Min Jordan",
      "Ulrika Victorin",
      "Alan Alderson",
      "Richard Jordan",
    ],
  },
  {
    name: "Bord 4",
    names: [
      "Bartosz Blumenfeld",
      "Dawn Alderson",
      "Mauro Maggi",
      "Min Jordan",
      "Ulrika Victorin",
      "Alan Alderson",
      "Richard Jordan",
    ],
  },
  {
    name: "Bord 5",
    names: [
      "Bartosz Blumenfeld",
      "Dawn Alderson",
      "Mauro Maggi",
      "Min Jordan",
      "Ulrika Victorin",
      "Alan Alderson",
      "Richard Jordan",
    ],
  },
  {
    name: "Bord 6",
    names: [
      "Bartosz Blumenfeld",
      "Dawn Alderson",
      "Mauro Maggi",
      "Min Jordan",
      "Ulrika Victorin",
      "Alan Alderson",
      "Richard Jordan",
    ],
  },
  {
    name: "Bord 7",
    names: [
      "Bartosz Blumenfeld",
      "Dawn Alderson",
      "Mauro Maggi",
      "Min Jordan",
      "Ulrika Victorin",
      "Alan Alderson",
      "Richard Jordan",
    ],
  },
  {
    name: "Bord 8",
    names: [
      "Bartosz Blumenfeld",
      "Dawn Alderson",
      "Mauro Maggi",
      "Min Jordan",
      "Ulrika Victorin",
      "Alan Alderson",
      "Richard Jordan",
    ],
  },
  {
    name: "Bord 9",
    names: [
      "Bartosz Blumenfeld",
      "Dawn Alderson",
      "Mauro Maggi",
      "Min Jordan",
      "Ulrika Victorin",
      "Alan Alderson",
      "Richard Jordan",
    ],
  },
  {
    name: "Bord 10",
    names: [
      "Bartosz Blumenfeld",
      "Dawn Alderson",
      "Mauro Maggi",
      "Min Jordan",
      "Ulrika Victorin",
      "Alan Alderson",
      "Richard Jordan",
    ],
  },
  {
    name: "Bord 11",
    names: [
      "Bartosz Blumenfeld",
      "Dawn Alderson",
      "Mauro Maggi",
      "Min Jordan",
      "Ulrika Victorin",
      "Alan Alderson",
      "Richard Jordan",
    ],
  },
  {
    name: "Bord 12",
    names: [
      "Bartosz Blumenfeld",
      "Dawn Alderson",
      "Mauro Maggi",
      "Min Jordan",
      "Ulrika Victorin",
      "Alan Alderson",
      "Richard Jordan",
    ],
  },
  {
    name: "Bord 13",
    names: [
      "Bartosz Blumenfeld",
      "Dawn Alderson",
      "Mauro Maggi",
      "Min Jordan",
      "Ulrika Victorin",
      "Alan Alderson",
      "Richard Jordan",
    ],
  },
];

export default function Seating() {
  return (
    <>
      <Header showSideBar={false} links={[]} />
      <main className="container mx-auto p-4">
        <h1 className="my-4 text-center text-4xl">Bordplassering</h1>
        <div className="grid grid-cols-2 gap-8 p-4 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {tables.map((table) => {
            return (
              <div key={table.name}>
                <h2 className="text-xl font-medium">{table.name}</h2>
                <ul>
                  {table.names.map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

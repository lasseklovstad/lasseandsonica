const tables = [
  {
    name: "Bord 1",
    names: [
      "Lasse Narula",
      "Sonica Narula",
      "Karianne Lie",
      "Eivind Kløvstad",
      "Kari-Janne Skarsbø",
      "Kjetil Kløvstad",
      "Henriette Albon",
      "Alise Kløvstad",
    ],
  },
  {
    name: "Bord 2",
    names: [
      "Raj Narula",
      "Suman Narula",
      "Carina Narula",
      "Olivia Narula Ytterdal",
      "Florence Rugsland",
      "Håkon Rugsland",
    ],
  },
  {
    name: "Bord 3",
    names: [
      "Siril M. Hauge",
      "Magnus M. Joelson",
      "Jim-Roger Knutsen",
      "Julie Turunen",
      "Elisabeth Mong-Nybo",
      "Sigurd Mong-Nybo",
      "Simen Ekelund",
      "Mathea Wasvik",
    ],
  },
  {
    name: "Bord 4",
    names: [
      "Preben Fürst Tyvold",
      "Julie Dahl",
      "Peter B. Havgar",
      "Hege Sjøvik",
      "Hanna Søreng",
      "Jonathan Perez",
      "Kathrine Holm",
      "Benedicte M. Larsen",
      "Ludvig Bellehumeur",
    ],
  },
  {
    name: "Bord 5",
    names: [
      "Arne Nybo",
      "Camilla Hole",
      "Ivar Moen",
      "Celine Løvmon",
      "Nicholas Christiansen",
      "Anna M. Kollstrøm",
      "Karsten K. Tåtøy",
      "Heidi Tøndevold",
      "Aksel K. Tåtøy",
    ],
  },
  {
    name: "Bord 6",
    names: [
      "Morten Brynildsen",
      "Katrine Seland",
      "Julie Bratsberg",
      "Christopher B. Alvestad",
      "Judy B. Alvestad",
      "Anders S. Henriksen",
      "Thea Brenden",
      "Kari Tenden",
    ],
  },
  {
    name: "Bord 7",
    names: [
      "Runar Skagestad",
      "Ranveig Eliassen",
      "Øyvind Paulsen",
      "Janna Antsiferova",
      "Gudmundur Søkjer",
      "Katrine Andresen",
      "Eirik B. Grytli",
      "Martin Fauske Tho",
      "Adrian Ytterdal",
    ],
  },
  {
    name: "Bord 8",
    names: [
      "Lachlan Chadwick",
      "Marie Lilleborgen",
      "Jon André Brandt",
      "Jane Sperre",
      "Martine Christensen",
      "Natalie Nordahl",
      "Linn Reinertsen",
      "Silje Eiane",
    ],
  },
  {
    name: "Bord 9",
    names: [
      "Amund S. Rognmo",
      "Charlotte Rognmo",
      "Emil Skjelland",
      "Jenny Skjelland",
      "Imran Alam",
      "Katrine Heger",
      "Anita H. Nybråten",
      "Signe Flach Almo",
    ],
  },
  {
    name: "Bord 10",
    names: [
      "Thomas Børstad",
      "Oda Nedrejord",
      "Jonas Modell",
      "Trine Modell",
      "Christian Skoglund",
      "Kristin Romnes",
      "Bjørn Zachrisson",
      "Liv Heidi Li",
    ],
  },
  {
    name: "Bord 11",
    names: [
      "Andreas Bogsrud",
      "Marte Sjuve",
      "Jørgen Eckroll",
      "Benedicte M. Sveinung",
      "John Kristoffer Snowdon",
      "Pernille G. Sandnes",
      "Jon Petter Hemstad",
      "Malin Taaje",
    ],
  },
  {
    name: "Bord 12",
    names: [
      "Tom Erik Hovda",
      "Didrik Breivik",
      "Marius Graff",
      "Ingrid G. Kvalen",
      "Nicolas Barthelemy",
      "Katinka V. Barthelemy",
      "Stephen Holmen-Jensen",
      "Line Hove",
    ],
  },
  {
    name: "Bord 13",
    names: [
      "Alan Alderson",
      "Dawn Alderson",
      "Mauro Maggi",
      "Ulrika Victorin",
      "Bartosz Blumenfeld",
      "Min Jordan",
      "Richard Jordan",
    ],
  },
];

export const TableSeating = () => {
  return (
    <div className="grid grid-cols-1 gap-8 p-4 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {tables.map((table) => {
        return (
          <div key={table.name}>
            <h2 className="font-cursive text-4xl font-medium">{table.name}</h2>
            <ul>
              {table.names.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

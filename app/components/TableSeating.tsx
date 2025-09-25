const tables = [
  {
    name: "Bord 1",
    names: [
      "Lasse Narula",
      "Sonica Narula",
      "Karianne Lie",
      "Eivind Kløvstad",
      "Alise Kløvstad",
      "Kjetil Kløvstad",
      "Kari-Janne Skarsbø",
      "Henriette Albon",
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
      "Magnus M. Joelson",
      "Siril M. Hauge",
      "Jim-Roger Knutsen",
      "Julie Turunen",
      "Sigurd Mong-Nybo",
      "Elisabeth Mong-Nybo",
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
      "Hanna Søreng",
      "Hege Sjøvik",
      "Jonathan Perez",
      "Kathrine Holm",
      "Ludvig Bellehumeur",
      "Benedicte M. Larsen",
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
      "Karsten K. Tåtøy",
      "Aksel K. Tåtøy",
      "Anna M. Kollstrøm",
      "Heidi Tøndevold",
    ],
  },
  {
    name: "Bord 6",
    names: [
      "Morten Brynildsen",
      "Katrine Seland",
      "Julie Bratsberg",
      "Christopher B. Alvestad",
      "Judy Bjåen Alvestad",
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
      "Marie Lilleborgen",
      "Jane Sperre",
      "Jon André Brandt",
      "Lachlan Chadwick",
      "Martine Christensen",
      "Natalie Nordahl",
      "Anders Nordahl",
      "Silje Eiane",
    ],
  },
  {
    name: "Bord 9",
    names: [
      "Anita H. Nybråten",
      "Charlotte Rognmo",
      "Jenny Skjelland",
      "Katrine Heger",
      "Amund S. Rognmo",
      "Emil Skjelland",
      "Imran Alam",
      "Signe Flach Almo",
    ],
  },
  {
    name: "Bord 10",
    names: [
      "Trine Modell",
      "Liv Heidi Li",
      "Kristin Romnes",
      "Linn Reinertsen",
      "Oda Nedrejord",
      "Bjørn Zachrisson",
      "Christian Skoglund",
      "Jonas Modell",
      "Thomas Børstad",
    ],
  },
  {
    name: "Bord 11",
    names: [
      "Malin Taaje",
      "Marte Sjuve",
      "Pernille G. Sandnes",
      "Benedicte M. Sveinung",
      "Andreas Bogsrud",
      "John Kristoffer Snowdon",
      "Jon Petter Hemstad",
      "Jørgen Eckroll",
    ],
  },
  {
    name: "Bord 12",
    names: [
      "Stephen Holmen-Jensen",
      "Line Hove",
      "Tom Erik Hovda",
      "Ingrid G. Kvalen",
      "Katinka V. Barthelemy",
      "Didrik Breivik",
      "Marius Graff",
      "Nicolas Barthelemy",
    ],
  },
  {
    name: "Bord 13",
    names: [
      "Alan Alderson",
      "Dawn Alderson",
      "Min Jordan",
      "Bartosz Blumenfeld",
      "Mauro Maggi",
      "Richard Jordan",
      "Ulrika Victorin",
    ],
  },
];

export const TableSeating = () => {
  return (
    <div className="grid grid-cols-2 gap-8 p-4 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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

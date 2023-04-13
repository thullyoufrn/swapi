import { ListItem } from "./ListItem";

export interface StarshipsDataStructure {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

// Add API request to dynamically change the list items
export const starshipsData: StarshipsDataStructure[] = [
  {
    name: "CR90 corvette",
    model: "CR90 corvette",
    manufacturer: "Corellian Engineering Corporation",
    cost_in_credits: "3500000",
    length: "150",
    max_atmosphering_speed: "950",
    crew: "30-165",
    passengers: "600",
    cargo_capacity: "3000000",
    consumables: "1 year",
    hyperdrive_rating: "2.0",
    MGLT: "60",
    starship_class: "corvette",
    pilots: [],
    films: [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/6/",
    ],
    created: "2014-12-10T14:20:33.369000Z",
    edited: "2014-12-20T21:23:49.867000Z",
    url: "https://swapi.dev/api/starships/2/",
  },
  {
    name: "Star Destroyer",
    model: "Imperial I-class Star Destroyer",
    manufacturer: "Kuat Drive Yards",
    cost_in_credits: "150000000",
    length: "1,600",
    max_atmosphering_speed: "975",
    crew: "47,060",
    passengers: "n/a",
    cargo_capacity: "36000000",
    consumables: "2 years",
    hyperdrive_rating: "2.0",
    MGLT: "60",
    starship_class: "Star Destroyer",
    pilots: [],
    films: [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
    ],
    created: "2014-12-10T15:08:19.848000Z",
    edited: "2014-12-20T21:23:49.870000Z",
    url: "https://swapi.dev/api/starships/3/",
  },
];

export function StarshipsList() {
  return (
    <main className="grid grid-cols-3 gap-5 mt-11">
      {starshipsData.map((starship) => (
        <ListItem
          key={starship.name}
          itemTitle={starship.name}
          itemSubtitle={starship.model}
          to={`/${starship.name}`}
        />
      ))}
    </main>
  );
}

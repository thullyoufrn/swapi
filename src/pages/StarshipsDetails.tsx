import {
  Binoculars,
  Coin,
  FilmSlate,
  Gauge,
  Headset,
  Ruler,
  SketchLogo,
  Tag,
  Users,
  Wrench,
} from "phosphor-react";

import { Category } from "../components/Category";
import { StarshipsDataStructure } from "../components/StarshipsList";

export function StarshipsDetails(props: StarshipsDataStructure) {
  return (
    <main className="flex flex-col flex-grow mt-11">
      <Category
        categoryIcon={<Binoculars size={24} weight="bold" />}
        categoryTitle="Name"
        categoryInfo={props.name}
      />

      <Category
        categoryIcon={<Tag size={24} weight="bold" />}
        categoryTitle="Model"
        categoryInfo={props.model}
      />

      <Category
        categoryIcon={<Wrench size={24} weight="bold" />}
        categoryTitle="Manufacturer"
        categoryInfo={props.manufacturer}
      />

      <Category
        categoryIcon={<Coin size={24} weight="bold" />}
        categoryTitle="Cost in credits"
        categoryInfo={props.cost_in_credits}
      />

      <Category
        categoryIcon={<Ruler size={24} weight="bold" />}
        categoryTitle="Length"
        categoryInfo={props.length}
      />

      <Category
        categoryIcon={<Gauge size={24} weight="bold" />}
        categoryTitle="Max Atmosphering Speed"
        categoryInfo={props.max_atmosphering_speed}
      />

      <Category
        categoryIcon={<Users size={24} weight="bold" />}
        categoryTitle="Passengers"
        categoryInfo={props.passengers}
      />

      <Category
        categoryIcon={<Headset size={24} weight="bold" />}
        categoryTitle="Pilots"
        categoryInfo={props.pilots.map((item) => {
          return `${item}, `;
        })}
      />

      <Category
        categoryIcon={<FilmSlate size={24} weight="bold" />}
        categoryTitle="Films"
        categoryInfo={props.films.map((item) => {
          return `${item}, `;
        })}
      />

      <Category
        categoryIcon={<SketchLogo size={24} weight="bold" />}
        categoryTitle="Class"
        categoryInfo={props.starship_class}
      />
    </main>
  );
}

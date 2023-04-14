import {
  Baby,
  Barbell,
  Binoculars,
  Eye,
  FilmSlate,
  GenderNeuter,
  House,
  PawPrint,
  PersonSimple,
  Rocket,
  Ruler,
  Scissors,
  User,
} from "phosphor-react";

import { Category } from "../components/Category";
import { DataStructure } from "../components/PeopleList";

export function PeopleDetails(props: DataStructure) {
  console.log(props.species);

  return (
    <main className="flex flex-col flex-grow mt-11">
      <Category
        categoryIcon={<User size={24} weight="bold" />}
        categoryTitle="Name"
        categoryInfo={props.name}
      />

      <Category
        categoryIcon={<Ruler size={24} weight="bold" />}
        categoryTitle="Height"
        categoryInfo={props.height}
      />

      <Category
        categoryIcon={<Barbell size={24} weight="bold" />}
        categoryTitle="Mass"
        categoryInfo={props.mass}
      />

      <Category
        categoryIcon={<Scissors size={24} weight="bold" />}
        categoryTitle="Hair Color"
        categoryInfo={props.hair_color}
      />

      <Category
        categoryIcon={<PersonSimple size={24} weight="bold" />}
        categoryTitle="Skin Color"
        categoryInfo={props.skin_color}
      />

      <Category
        categoryIcon={<Eye size={24} weight="bold" />}
        categoryTitle="Eye Color"
        categoryInfo={props.eye_color}
      />

      <Category
        categoryIcon={<Baby size={24} weight="bold" />}
        categoryTitle="Birth Year"
        categoryInfo={props.birth_year}
      />

      <Category
        categoryIcon={<GenderNeuter size={24} weight="bold" />}
        categoryTitle="Gender"
        categoryInfo={props.gender}
      />

      <Category
        categoryIcon={<House size={24} weight="bold" />}
        categoryTitle="Homeworld"
        categoryInfo={props.homeworld}
      />

      <Category
        categoryIcon={<FilmSlate size={24} weight="bold" />}
        categoryTitle="Films"
        categoryInfo={props.films.map((item) => {
          return `${item}, `;
        })}
      />

      <Category
        categoryIcon={<PawPrint size={24} weight="bold" />}
        categoryTitle="Species"
        categoryInfo={props.species.map((item) => {
          return `${item}, `;
        })}
      />

      <Category
        categoryIcon={<Rocket size={24} weight="bold" />}
        categoryTitle="Vehicles"
        categoryInfo={props.vehicles.map((item) => {
          return `${item}, `;
        })}
      />

      <Category
        categoryIcon={<Binoculars size={24} weight="bold" />}
        categoryTitle="Starships"
        categoryInfo={props.starships.map((item) => {
          return `${item}, `;
        })}
      />
    </main>
  );
}

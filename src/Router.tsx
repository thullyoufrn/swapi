import { Routes, Route } from "react-router-dom";
import { PeopleList } from "./components/PeopleList";
import { StarshipsList } from "./components/StarshipsList";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { PeopleDetails } from "./pages/PeopleDetails";
import { People } from "./pages/People";
import { Starships } from "./pages/Starships";
import { StarshipsDetails } from "./pages/StarshipsDetails";
import { Home } from "./pages/Home";
import { useAppContext } from "./contexts/AppContext";

export function Router() {
  const { people, starships } = useAppContext()

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/people" element={<People />}>
          <Route
            path="/people"
            element={<PeopleList />}
          />

          {people.map((person) => {
            return (
              <Route
                key={person.name}
                path={`${person.name}`}
                element={
                  <PeopleDetails
                    name={person.name}
                    height={person.height}
                    mass={person.mass}
                    hair_color={person.hair_color}
                    skin_color={person.skin_color}
                    eye_color={person.eye_color}
                    birth_year={person.birth_year}
                    gender={person.gender}
                    homeworld={person.homeworld}
                    films={person.films}
                    species={person.species}
                    vehicles={person.vehicles}
                    starships={person.starships}
                    created={person.created}
                    edited={person.edited}
                    url={person.url}
                  />
                }
              />
            );
          })}
        </Route>

        <Route path="/starships" element={<Starships />}>
          <Route
            path="/starships"
            element={<StarshipsList  />}
          />

          {starships.map((starship) => {
            return (
              <Route
                key={starship.name}
                path={`${starship.name}`}
                element={
                  <StarshipsDetails
                    name={starship.name}
                    model={starship.model}
                    manufacturer={starship.manufacturer}
                    cost_in_credits={starship.cost_in_credits}
                    length={starship.length}
                    max_atmosphering_speed={starship.max_atmosphering_speed}
                    crew={starship.crew}
                    passengers={starship.passengers}
                    cargo_capacity={starship.cargo_capacity}
                    consumables={starship.consumables}
                    hyperdrive_rating={starship.hyperdrive_rating}
                    MGLT={starship.MGLT}
                    starship_class={starship.starship_class}
                    pilots={starship.pilots}
                    films={starship.films}
                    created={starship.created}
                    edited={starship.edited}
                    url={starship.url}
                  />
                }
              />
            );
          })}
        </Route>
      </Route>
    </Routes>
  );
}

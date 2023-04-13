import { Routes, Route } from "react-router-dom";
import { data, PeopleList } from "./components/PeopleList";
import { StarshipsList } from "./components/StarshipsList";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { PeopleDetails } from "./pages/PeopleDetails";

import { People } from "./pages/People";
import { Starships } from "./pages/Starships";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<People />}>
          <Route path="/" element={<PeopleList />} />

          {data.map((person) => {
            return (
              <Route
                key={person.name}
                path={`/${person.name}`}
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
          <Route path="/starships" element={<StarshipsList />} />
        </Route>
      </Route>
    </Routes>
  );
}

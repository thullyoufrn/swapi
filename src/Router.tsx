import { Routes, Route } from "react-router-dom";
import { data, PeopleList } from "./components/PeopleList";
import { StarshipsList } from "./components/StarshipsList";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Details } from "./pages/Details";

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
                element={<Details />}
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

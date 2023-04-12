import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Details } from "./pages/Details";

import { People } from "./pages/People";
import { Starships } from "./pages/Starships";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<People />} />
        <Route path="/starships" element={<Starships />} />
        <Route path="/details" element={<Details />} />
      </Route>
    </Routes>
  );
}

import { Binoculars } from "phosphor-react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { StarshipsList } from "../components/StarshipsList";

export function Starships() {
  return (
    <section className="flex flex-col flex-grow py-12 pl-24 pr-20">
      <Header
        title="Starships"
        icon={
          <Binoculars
            size={24}
            weight="bold"
            className="text-figma-green-100"
          />
        }
      />

      <Outlet />
    </section>
  );
}

import { Binoculars } from "phosphor-react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { SearchBar } from './../components/SearchBar';

export function Starships() {
  return (
    <section className="flex flex-col flex-grow py-4 px-4 lg:py-12 lg:pl-24 lg:pr-20">
      <Header
        title="Starships"
        icon={
          <Binoculars
            size={24}
            weight="bold"
            className="text-figma-green-100"
          />
        }
        returnButton={true}
      />

      <Outlet />
    </section>
  );
}

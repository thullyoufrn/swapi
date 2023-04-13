import { User } from "phosphor-react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { PeopleList } from "../components/PeopleList";

export function People() {
  return (
    <section className="flex flex-col flex-grow pt-12 pl-24 pr-20">
      <Header
        title="People"
        icon={<User size={24} weight="bold" className="text-figma-green-100" />}
      />

      <Outlet />
    </section>
  );
}

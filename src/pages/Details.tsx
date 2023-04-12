import { Binoculars, User } from "phosphor-react";
import { DetailsList } from "../components/DetailsList";
import { Header } from "../components/Header";

export function Details() {
  return (
    <section className="flex flex-col flex-grow pt-12 pl-24 pr-20">
      <Header
        title="People"
        icon={<User size={24} weight="bold" className="text-figma-green-100" />}
        returnButton={true}
      />

      <DetailsList />
    </section>
  );
}

import { User } from "phosphor-react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function People() {
  return (
    <section className="flex flex-col flex-grow py-4 px-4 lg:py-12 lg:pl-24 lg:pr-20">
      <Header
        title="People"
        icon={
          <User 
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

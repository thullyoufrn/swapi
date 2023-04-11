import logo from "../assets/Logo.svg";

import { Binoculars, User } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <aside className="flex-col justify-center h-full p-10 w-60 bg-figma-gray-700 rounded-xl bg-gradient-to-r from-figma-green-300/40 to-figma-purple-200/40">
      <div className="flex justify-center gap-2 mb-16 text-xl font-bold text-figma-purple-100">
        <img src={logo} alt="star" />
        <span>Swapi</span>
      </div>

      <nav className="flex flex-col items-center justify-center text-figma-gray-400">
        <NavLink
          to="/"
          title="People"
          className="flex justify-center gap-3 mb-4 border-x-4 border-x-figma-green-gradient padding-auto"
        >
          <User size={24} />
          <span>People</span>
        </NavLink>

        <NavLink
          to="/starships"
          title="Starships"
          className="flex justify-center gap-3"
        >
          <Binoculars size={24} />
          <span>Starships</span>
        </NavLink>
      </nav>
    </aside>
  );
}

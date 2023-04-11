import logo from "../assets/Logo.svg";

import { Binoculars, User } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Sidebar() {
  const activeClassName =
    "border-l-figma-gray-100 text-figma-gray-100 font-bold";

  const notActiveClassName = "border-l-figma-gray-400 text-figma-gray-400";

  return (
    <aside className="flex-col justify-center h-full p-10 w-60 bg-figma-gray-700 rounded-xl bg-gradient-to-r from-figma-green-300/40 to-figma-purple-200/40">
      <div className="flex justify-center gap-2 mb-16 text-xl font-bold text-figma-purple-100">
        <img src={logo} alt="star" />
        <span>Swapi</span>
      </div>

      <nav className="flex flex-col items-start text-figma-gray-400">
        <NavLink
          to="/"
          title="People"
          className={({ isActive }) =>
            isActive ? activeClassName : notActiveClassName
          }
        >
          <p className="flex self-start gap-3 py-1 pl-5 border-l-4 rounded-sm mb-7">
            <User size={24} />
            <span>People</span>
          </p>
        </NavLink>

        <NavLink
          to="/starships"
          title="Starships"
          className={({ isActive }) =>
            isActive ? activeClassName : notActiveClassName
          }
        >
          <p className="flex self-start gap-3 py-1 pl-5 mb-4 border-l-4 rounded-sm">
            <Binoculars size={24} />
            <span>Starships</span>
          </p>
        </NavLink>
      </nav>
    </aside>
  );
}

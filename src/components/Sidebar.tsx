import logo from "../assets/Logo.svg";
import { useLocation } from "react-router-dom";
import { Binoculars, House, User } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Sidebar() {
  const location = useLocation();

  return (
    <aside
      className={
        location.pathname === "/"
          ? "hidden"
          : "flex-col justify-center min-h-full p-10 w-60 bg-figma-gray-700 rounded-xl bg-gradient-to-r from-figma-green-300/40 to-figma-purple-200/40"
      }
    >
      <div className="flex justify-center gap-2 mb-16 text-xl font-bold text-figma-purple-100">
        <img src={logo} alt="star" />
        <span>Swapi</span>
      </div>

      <nav className="flex flex-col items-start text-figma-gray-400 gap-7">
        <NavLink to="/" title="Home">
          <p
            className={`${
              location.pathname === "/"
                ? "flex self-start gap-3 py-1 pl-5 transition-all duration-300 hover:text-figma-gray-300 border-l-4 border-figma-gray-100 font-bold text-figma-gray-100"
                : "flex self-start gap-3 py-1 pl-5 transition-all duration-300 hover:text-figma-gray-300 border-l-4 border-figma-gray-100/0"
            }`}
          >
            <House size={24} />
            <span>Home</span>
          </p>
        </NavLink>

        <NavLink to="/people" title="People">
          <p
            className={`${
              location.pathname === "/people"
                ? "flex self-start gap-3 py-1 pl-5 transition-all duration-300 hover:text-figma-gray-300 border-l-4 border-figma-gray-100 font-bold text-figma-gray-100"
                : "flex self-start gap-3 py-1 pl-5 transition-all duration-300 hover:text-figma-gray-300 border-l-4 border-figma-gray-100/0"
            }`}
          >
            <User size={24} />
            <span>People</span>
          </p>
        </NavLink>

        <NavLink to="/starships" title="Starships">
          <p
            className={`${
              location.pathname === "/starships"
                ? "flex self-start gap-3 py-1 pl-5 transition-all duration-300 hover:text-figma-gray-300 border-l-4 border-figma-gray-100 font-bold text-figma-gray-100"
                : "flex self-start gap-3 py-1 pl-5 transition-all duration-300 hover:text-figma-gray-300 border-l-4 border-figma-gray-100/0"
            }`}
          >
            <Binoculars size={24} />
            <span>Starships</span>
          </p>
        </NavLink>
      </nav>
    </aside>
  );
}

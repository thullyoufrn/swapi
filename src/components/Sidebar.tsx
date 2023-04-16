import { useLocation } from "react-router-dom";
import { Binoculars, House, StarFour, User } from "phosphor-react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css"

export function Sidebar() {
  const location = useLocation();

  return (
    <aside
      className={
        location.pathname === "/"
          ? "hidden"
          : "flex-col justify-center max-h-screen minus-2rem p-10 w-60 bg-figma-gray-700 rounded-xl bg-gradient-to-t from-figma-green-300/40 to-figma-purple-200/40 max-lg:hidden"
      }
    >
      <div className="flex items-center justify-center gap-3 mb-16 text-xl font-bold text-figma-purple-gradient">
        <StarFour size={24} weight="bold"/>
        <span className="bg-gradient-to-r from-figma-green-gradient to-figma-purple-gradient text-figma-green-100/0 bg-clip-text">Swapi</span>
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
            {location.pathname === "/"
              ? <House size={24} weight="bold"/>
              : <House size={24} weight="regular" />}

            <span>Home</span>
          </p>
        </NavLink>

        <NavLink to="/people" title="People">
          <p
            className={`${
              location.pathname.includes("/people") 
                ? "flex self-start gap-3 py-1 pl-5 transition-all duration-300 hover:text-figma-gray-300 border-l-4 border-figma-gray-100 font-bold text-figma-gray-100"
                : "flex self-start gap-3 py-1 pl-5 transition-all duration-300 hover:text-figma-gray-300 border-l-4 border-figma-gray-100/0"
            }`}
          >
            {location.pathname.includes("/people")
              ? <User size={24} weight="bold"/>
              : <User size={24} weight="regular" />}

            <span>People</span>
          </p>
        </NavLink>

        <NavLink to="/starships" title="Starships">
          <p
            className={`${
              location.pathname.includes("/starships") 
                ? "flex self-start gap-3 py-1 pl-5 transition-all duration-300 hover:text-figma-gray-300 border-l-4 border-figma-gray-100 font-bold text-figma-gray-100"
                : "flex self-start gap-3 py-1 pl-5 transition-all duration-300 hover:text-figma-gray-300 border-l-4 border-figma-gray-100/0"
            }`}
          >
            {location.pathname.includes("/starships")
              ? <Binoculars size={24} weight="bold"/>
              : <Binoculars size={24} weight="regular" />}

            <span>Starships</span>
          </p>
        </NavLink>
      </nav>
    </aside>
  );
}

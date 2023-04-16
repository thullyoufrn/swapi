import { List, StarFour, X } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function MobileMenu() {
  return (
    <nav className="p-4 lg:hidden">
      <List size={28} weight="bold" className="cursor-pointer text-figma-gray-100" />

      <div className="min-h-screen absolute bg-gradient-to-r from-figma-green-300 to-figma-purple-200 w-full top-0 left-0 p-8 flex flex-col justify-start items-start gap-16">
        <X size={28} weight="bold" className="cursor-pointer" />

        <ul className="text-4xl flex flex-col gap-12 self-center items-center font-bold">
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li><NavLink to={"/people"}>People</NavLink></li>
          <li><NavLink to={"/starships"}>Starships</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

import { List, X } from "phosphor-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export function MobileMenu() {
  const [menuStatus, SetMenuStatus] = useState("hidden")

  function handleChangeMenuStatus() {
    menuStatus === "hidden"
      ? SetMenuStatus("flex")
      : SetMenuStatus("hidden")
  }

  console.log(menuStatus)

  return (
    <nav className="p-4 lg:hidden">
      <List onClick={handleChangeMenuStatus} size={28} weight="bold" className="cursor-pointer text-figma-gray-100 hover:text-figma-purple-100 transition-all duration-300" />

      <div className={`min-h-screen absolute bg-figma-gray-800 w-full top-0 left-0 p-8 ${menuStatus} flex-col justify-start items-start gap-16`}>
        <X onClick={handleChangeMenuStatus} size={28} weight="bold" className="cursor-pointer hover:text-figma-purple-gradient transition-all duration-300" />

        <ul className="text-4xl flex flex-col gap-12 self-center items-center font-bold">
          <li onClick={handleChangeMenuStatus} className="hover:text-figma-purple-gradient transition-all duration-300"><NavLink to={"/"}>Home</NavLink></li>
          <li onClick={handleChangeMenuStatus} className="hover:text-figma-purple-gradient transition-all duration-300"><NavLink to={"/people"}>People</NavLink></li>
          <li onClick={handleChangeMenuStatus} className="hover:text-figma-purple-gradient transition-all duration-300"><NavLink to={"/starships"}>Starships</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}
